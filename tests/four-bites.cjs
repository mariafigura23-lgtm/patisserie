const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

class Element {
  constructor(tag) {
    this.tag = tag; this.attrs = {}; this.children = []; this.listeners = {};
    this.dataset = {}; this.style = { setProperty() {} };
    const classes = new Set();
    this.classList = { add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c) };
  }
  setAttribute(k, v) { this.attrs[k] = String(v); }
  removeAttribute(k) { delete this.attrs[k]; }
  append(...children) { this.children.push(...children); }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  emit(name) { (this.listeners[name] || []).forEach(fn => fn()); }
  querySelectorAll(selector) {
    const wanted = selector.split(',').map(s => s.trim().slice(1));
    return this.children.flatMap(c => [ ...(wanted.some(x => (c.attrs.class || '').split(' ').includes(x)) ? [c] : []), ...c.querySelectorAll(selector) ]);
  }
  xml() {
    const escape = s => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
    return `<${this.tag} ${Object.entries(this.attrs).map(([k,v]) => `${k}="${escape(v)}"`).join(' ')}>${this.children.map(c => c.xml()).join('')}</${this.tag}>`;
  }
}

const context = vm.createContext({ document: { createElementNS: (_, tag) => new Element(tag) } });
vm.runInContext(fs.readFileSync(path.join(root, 'bite-stages.js'), 'utf8') + '\nthis.bites = PatisserieBites;', context);
const { bites } = context;
const dataUri = file => 'data:image/webp;base64,' + fs.readFileSync(file).toString('base64');

async function test() {
  const renders = [];
  let row = 0;
  for (const [id, config] of Object.entries(bites.configs)) {
    const inner = new Element('span');
    const whole = new Element('img');
    const empty = new Element('img');
    whole.src = dataUri(path.join(root, 'assets', `${config.asset}-whole.webp`));
    empty.src = dataUri(path.join(root, 'assets', `${config.asset}-empty-v1.webp`));
    if (process.env.BITE_PREVIEW) {
      const sharp = require('sharp');
      whole.src = 'data:image/png;base64,' + (await sharp(path.join(root, 'assets', `${config.asset}-whole.webp`)).png().toBuffer()).toString('base64');
      empty.src = 'data:image/png;base64,' + (await sharp(path.join(root, 'assets', `${config.asset}-empty-v1.webp`)).png().toBuffer()).toString('base64');
    }
    bites.mount(inner, { id, dessert: { style: 'cutout' } }, whole, empty);
    const art = inner.children[0];
    const fullImage = art.children.at(-1);
    assert.equal(fullImage.attrs.mask, undefined, 'no image loss before empty plate loads');
    whole.emit('load'); empty.emit('load');
    assert.equal(art.dataset.ready, 'true');
    assert.match(fullImage.attrs.mask, /mask/);
    for (let step = 0; step <= 4; step++) {
      bites.update(inner, id, step);
      assert.equal(inner.dataset.biteStep, String(step));
      const edges = inner.querySelectorAll('.bite-edge, .bite-erase');
      assert.equal(edges.length, 2);
      assert.equal(edges[0].attrs.d, edges[1].attrs.d);
      if (step === 4) assert.equal(edges[0].attrs.d, `M0 0H1000V${config.height}H0Z`);
      const previous = edges[0].attrs.d;
      bites.update(inner, id, step);
      assert.equal(edges[0].attrs.d, previous, 'rereading keeps the same bite');
      if (process.env.BITE_PREVIEW) {
        const sharp = require('sharp');
        art.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        art.setAttribute('width', 1000); art.setAttribute('height', config.height);
        art.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        const xml = art.xml().replaceAll(' href=', ' xlink:href=');
        const buffer = await sharp(Buffer.from(xml)).resize(300, 250, { fit: 'contain', background: '#141c2d' }).png().toBuffer();
        renders.push({ input: buffer, left: step * 300, top: row * 250 });
      }
    }
    bites.update(inner, id, 0);
    assert.equal(inner.querySelectorAll('.bite-erase')[0].attrs.d, 'M0 0Z', 'reset restores whole');
    empty.emit('error');
    assert.equal(fullImage.attrs.mask, undefined, 'failed empty asset preserves original');
    console.log(`${id}: all 5 stages, reread, reset, loading and error fallback passed`);
    row++;
  }
  if (process.env.BITE_PREVIEW) {
    await require('sharp')({ create: { width: 1500, height: 1250, channels: 3, background: '#141c2d' } }).composite(renders).png().toFile(process.env.BITE_PREVIEW);
  }
}
test().catch(error => { console.error(error); process.exitCode = 1; });
