/* ==========================================================================
   THE PATISSERIE OF THE UNCONSCIOUS
   One enchanted machine. Four dessert-worlds. No achievement required.

   Scene architecture: each world is composed from separate modular layers —
   background collage, magic overlay, character, independent dessert
   (whole / bitten crossfade), foreground paper, and generated particles.
   Missing assets degrade gracefully; nothing breaks before art arrives.
   ========================================================================== */

"use strict";

/* --------------------------------------------------------------------------
   DATA — the four worlds
   -------------------------------------------------------------------------- */

const WORLDS = [
  {
    id: "madeleine",
    name: "Madeleine",
    objectNumber: "Object I of IV",
    context: "Combray, early twentieth century",
    shortLine: "Tea, crumbs, and a room returning from nowhere.",
    epigraph: "“A taste arrives first. The lost room follows.”",
    epigraphSource: "Original epigraph inspired by Proustian involuntary memory.",
    vignette: "The cake touches the tea before it reaches the mouth. A taste arrives without explanation, and suddenly an entire room returns: its windows, silence, fabric, and forgotten light. The dessert does not merely accompany memory. It opens it.",
    history: "The madeleine began as a modest sponge cake from Commercy, in Lorraine — shaped in a scallop shell, sold at railway stations, carried in coat pockets. In 1913 Marcel Proust dipped one into lime-blossom tea on the first pages of In Search of Lost Time, and the little cake became the most famous mouthful in modern literature: proof that an entire vanished world can be stored, intact, inside a taste, waiting for the body to remember what the mind has filed away.",
    aftertaste: "Memory keeps what biography forgets.",
    takeItHome: "Prepare tea without your phone nearby. Try to remember not an event, but the atmosphere of a place: its light, smell, texture, and hour.",
    recipeTitle: "Classic Madeleines",
    recipeNote: "A classic home recipe.",
    ingredients: [
      "2 large eggs", "100 g sugar", "1 tsp vanilla extract",
      "120 g all-purpose flour", "1 tsp baking powder", "100 g melted butter",
      "1 tbsp milk", "zest of 1 lemon", "pinch of salt"
    ],
    steps: [
      "Heat the oven to 190°C / 375°F and grease a madeleine pan.",
      "Whisk eggs and sugar until pale.",
      "Add vanilla, lemon zest, milk, and salt.",
      "Fold in flour and baking powder.",
      "Mix in the melted butter.",
      "Rest the batter for 20–30 minutes.",
      "Fill each mold three-quarters full.",
      "Bake for 9–11 minutes until lightly golden."
    ],
    assets: {
      background: "assets/madeleine-background.jpg",
      fallbackBackground: "assets/madeleine-collage.jpg",
      dessertWhole: "assets/madeleine-whole.png",
      dessertBitten: "assets/madeleine-bitten.png",
      recipeImage: "assets/madeleine-recipe-card.jpg",
      magic: "assets/madeleine-magic.png",
      character: "assets/madeleine-rabbit.png",
      foreground: "assets/madeleine-foreground.png"
    },
    dessertLayout: {
      desktop: { left: "50%", top: "60%", width: "29%" },
      mobile:  { left: "50%", top: "55%", width: "60%" }
    },
    /* the plate photograph shares one canvas across whole/bitten;
       zoom + shift crop the circular plate out of its parchment ground */
    plate: { zoom: 1.44, shiftY: "1.5%" },
    backgroundPosition: { desktop: "50% 50%", mobile: "44% 50%" },
    biteCrumbColor: "#d9b46e",
    symbol: "shell",
    handleAngle: 0,
    cssClass: "scene--madeleine"
  },
  {
    id: "cannoli",
    name: "Cannoli",
    objectNumber: "Object II of IV",
    context: "Sicily, a convent kitchen remembered through legend",
    shortLine: "Ricotta, citrus, discipline, and excess.",
    epigraph: "“Even restraint can invent sweetness.”",
    epigraphSource: "Original epigraph.",
    vignette: "Inside a world of rules, someone prepares a sweetness that borders on extravagance. Crisp pastry holds soft ricotta, citrus, sugar, and patience. Restraint and pleasure are not always opposites. Sometimes one secretly produces the other.",
    history: "Sicily learned sugar from its Arab centuries, and kept it in the strangest of custodians: the convent. Behind grilles and vows, nuns became the island's great confectioners, selling cannoli, cassata, and marzipan fruit through turnstile windows to fund their houses. The crisp shell filled with sweetened ricotta was once a carnival extravagance; it survived because disciplined hands perfected it. A whole social order — devotion, enclosure, appetite — is folded into one fried tube of pastry.",
    aftertaste: "Even restraint can invent sweetness.",
    takeItHome: "Make something beautiful without waiting for a special occasion. Let pleasure exist without turning it into a reward.",
    recipeTitle: "Simple Ricotta Cannoli",
    recipeNote: "A simplified home version using ready-made shells.",
    ingredients: [
      "8 ready-made cannoli shells", "300 g ricotta", "80 g powdered sugar",
      "1 tsp vanilla extract", "zest of 1 orange or lemon",
      "40 g chopped pistachios or dark chocolate", "extra powdered sugar"
    ],
    steps: [
      "Drain the ricotta if necessary.",
      "Mix ricotta, sugar, vanilla, and citrus zest.",
      "Fold in pistachios or chocolate.",
      "Chill for 20–30 minutes.",
      "Fill the shells shortly before serving.",
      "Dust lightly with powdered sugar."
    ],
    assets: {
      background: "assets/cannoli-background.jpg",
      fallbackBackground: "assets/cannoli-collage.jpg",
      dessertWhole: "assets/cannoli-whole.png",
      dessertBitten: "assets/cannoli-bitten.png",
      recipeImage: "assets/cannoli-recipe-card.jpg",
      magic: "assets/cannoli-magic.png",
      character: "assets/cannoli-rabbit.png",
      foreground: "assets/cannoli-foreground.png"
    },
    dessertLayout: {
      desktop: { left: "50%", top: "61%", width: "31%" },
      mobile:  { left: "50%", top: "56%", width: "62%" }
    },
    plate: { zoom: 1.44, shiftY: "1.5%" },
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 50%" },
    biteCrumbColor: "#e6c98f",
    biteCrumbAccent: "#7e8c46", /* one pistachio crumb falls after the bite */
    symbol: "spiral",
    handleAngle: 270,
    cssClass: "scene--cannoli"
  },
  {
    id: "napoleon",
    name: "Napoleon",
    objectNumber: "Object III of IV",
    context: "A Soviet family kitchen, late 1980s",
    shortLine: "Thin layers, warm cream, and a holiday built by hand.",
    epigraph: "“Happiness, too, can be assembled layer by layer.”",
    epigraphSource: "Original epigraph.",
    vignette: "The cake takes hours. Layers are rolled, baked, cooled, covered with cream, and left overnight to soften into one whole. In a domestic culture of scarcity, celebration was often handmade. Sweetness came not as ease, but as effort transformed into festivity.",
    history: "Legend dates the cake to 1912, when Moscow's bakers cut mille-feuille into cocked-hat triangles for the centenary of the victory over Napoleon. In the Soviet kitchen it became something else: a holiday you had to build. Butter was queued for, layers were rolled late into the night, and the recipe travelled in handwritten notebooks from mother to daughter to neighbour. Left to rest until morning, the strict layers softened into one tender whole — scarcity, patience, and love pressed into a single slice.",
    aftertaste: "Sometimes love is measured in the number of layers.",
    takeItHome: "Create one celebration by hand. Not because it is efficient, but because making something slowly can itself become the event.",
    recipeTitle: "Home-Style Napoleon Cake",
    recipeNote: "A home-adapted version built on ready puff pastry.",
    ingredients: [
      "500 g puff pastry", "500 ml milk", "3 egg yolks", "120 g sugar",
      "40 g cornstarch", "1 tsp vanilla extract", "150 g butter", "pinch of salt"
    ],
    steps: [
      "Bake the puff pastry in thin sheets until golden.",
      "Heat most of the milk.",
      "Whisk yolks, sugar, cornstarch, salt, and remaining milk.",
      "Slowly add the warm milk.",
      "Cook on low heat until thick.",
      "Add vanilla and cool slightly.",
      "Beat in the butter.",
      "Layer pastry and cream.",
      "Cover with pastry crumbs.",
      "Chill overnight."
    ],
    assets: {
      background: "assets/napoleon-background.jpg",
      fallbackBackground: "assets/napoleon-collage.jpg",
      dessertWhole: "assets/napoleon-whole.png",
      dessertBitten: "assets/napoleon-bitten.png",
      recipeImage: "assets/napoleon-recipe-card.jpg",
      magic: "assets/napoleon-magic.png",
      character: "assets/napoleon-memory.png",
      foreground: "assets/napoleon-foreground.png"
    },
    dessertLayout: {
      desktop: { left: "50%", top: "61%", width: "32%" },
      mobile:  { left: "50%", top: "56%", width: "64%" }
    },
    plate: { zoom: 1.44, shiftY: "1.5%" },
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 50%" },
    biteCrumbColor: "#e9ddba",
    symbol: "cake",
    handleAngle: 90,
    cssClass: "scene--napoleon"
  },
  {
    id: "petitfour",
    name: "Court Petit Four",
    objectNumber: "Object IV of IV",
    context: "Versailles, 1780s",
    shortLine: "Sugar flowers, porcelain, spectacle, and a hairline crack.",
    epigraph: "“Everything is designed to appear effortless.”",
    epigraphSource: "Original epigraph.",
    vignette: "At court, sweetness becomes design, performance, and illusion. Sugar is shaped into flowers, surfaces, and miniature architectures. Beauty is arranged so perfectly that it begins to look natural—just before history reminds the room that nothing delicate is guaranteed.",
    history: "The petit four is named for the cooling oven — à petit four — where confectioners finished delicate work after the great bakes were done. At Versailles, sugar was a theatre: pièces montées, spun-sugar architecture, glazed miniatures arranged down mirrored tables in the choreography of service à la française. Sweetness performed power, and performed it as effortlessness. Within a decade the tables were gone; the tiny glazed cake remains, carrying the whole doomed elegance of the ancien régime in one bite.",
    aftertaste: "Some worlds become most beautiful just before they disappear.",
    takeItHome: "Set a table beautifully for no practical reason, even for one person. Allow beauty to exist without needing to justify it.",
    recipeTitle: "Court-Inspired Petit Fours",
    recipeNote: "A modern fictional recipe inspired by the elegance of late eighteenth-century French confectionery.",
    ingredients: [
      "1 small plain sponge cake or pound cake", "4 tbsp apricot or raspberry jam",
      "150 g powdered sugar", "2–3 tbsp lemon juice or water",
      "a small amount of pink food coloring, optional", "edible flowers or sugar decorations"
    ],
    steps: [
      "Cut the cake into small neat shapes.",
      "Spread a thin layer of jam over the tops.",
      "Mix powdered sugar and liquid into a thick glaze.",
      "Tint lightly if desired.",
      "Glaze the cakes.",
      "Allow the glaze to set.",
      "Decorate with edible flowers or sugar details.",
      "Serve at a table you have arranged for no reason at all."
    ],
    assets: {
      background: "assets/petit-four-background.jpg",
      fallbackBackground: "assets/petit-four-collage.jpg",
      dessertWhole: "assets/petit-four-whole.png",
      dessertBitten: "assets/petit-four-bitten.png",
      recipeImage: "assets/petit-four-recipe-card.jpg",
      magic: "assets/petit-four-magic.png",
      character: "assets/petit-four-rabbits.png",
      foreground: "assets/petit-four-foreground.png"
    },
    dessertLayout: {
      desktop: { left: "50%", top: "60%", width: "30%" },
      mobile:  { left: "50%", top: "55%", width: "60%" }
    },
    plate: { zoom: 1.44, shiftY: "1.5%" },
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 50%" },
    biteCrumbColor: "#f2dfc9",
    symbol: "flower",
    handleAngle: 180,
    cssClass: "scene--petitfour"
  }
];

/* clockwise order around the dial, for arrow keys and swiping */
const DIAL_ORDER = ["madeleine", "napoleon", "petitfour", "cannoli"];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileLayout = window.matchMedia("(max-width: 900px)");
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

/* --------------------------------------------------------------------------
   IMAGE FALLBACKS
   Try each source in order; if all fail, report so the layer can hide.
   -------------------------------------------------------------------------- */

function loadWithFallback(img, sources, onFail, onLoad) {
  const queue = sources.filter(Boolean);

  function tryNext() {
    if (!queue.length) {
      if (onFail) onFail();
      return;
    }
    img.src = queue.shift();
  }

  img.addEventListener("error", tryNext);
  if (onLoad) img.addEventListener("load", onLoad, { once: false });
  tryNext();
}

/* --------------------------------------------------------------------------
   PARTICLES — 3–5 lightweight SVG elements per world, in a 160 × 90 space
   -------------------------------------------------------------------------- */

const PARTICLES = {
  /* gold stars drifting over Combray */
  madeleine: [
    { cls: "particle--rise", x: 108, y: 26, r: 0.9, color: "#e8c87f", dur: 17, delay: 0, peak: 0.55, dx: 3, dy: -9 },
    { cls: "particle--rise", x: 130, y: 18, r: 0.7, color: "#e8c87f", dur: 22, delay: 5, peak: 0.45, dx: -2, dy: -8 },
    { cls: "particle--rise", x: 80,  y: 15, r: 0.8, color: "#efd9a1", dur: 19, delay: 9, peak: 0.5, dx: 2, dy: -7 },
    { cls: "particle--twinkle", x: 25, y: 22, r: 0.7, color: "#e8c87f", dur: 11, delay: 3, peak: 0.5 },
    { cls: "particle--twinkle", x: 118, y: 55, r: 0.6, color: "#e8c87f", dur: 14, delay: 7, peak: 0.4 }
  ],
  /* flour drifting down through convent light */
  cannoli: [
    { cls: "particle--fall", x: 28, y: 46, r: 0.7, color: "#f3ecdc", dur: 14, delay: 0, peak: 0.5, dx: 2, dy: 10 },
    { cls: "particle--fall", x: 35, y: 40, r: 0.55, color: "#f3ecdc", dur: 17, delay: 4, peak: 0.45, dx: -2, dy: 9 },
    { cls: "particle--fall", x: 22, y: 52, r: 0.6, color: "#f3ecdc", dur: 19, delay: 8, peak: 0.4, dx: 2, dy: 8 },
    { cls: "particle--fall", x: 132, y: 50, r: 0.65, color: "#f3ecdc", dur: 16, delay: 2, peak: 0.45, dx: -2, dy: 9 },
    { cls: "particle--twinkle", x: 16, y: 10, r: 0.8, color: "#e8c87f", dur: 13, delay: 5, peak: 0.4 }
  ],
  /* crumbs lifting from the cake and becoming small stars */
  napoleon: [
    { cls: "particle--rise", x: 76, y: 52, r: 0.75, color: "#d8b06a", dur: 13, delay: 0, peak: 0.6, dx: 3, dy: -12 },
    { cls: "particle--rise", x: 83, y: 50, r: 0.6, color: "#efce8a", dur: 16, delay: 4, peak: 0.5, dx: -2, dy: -13 },
    { cls: "particle--rise", x: 79, y: 54, r: 0.65, color: "#d8b06a", dur: 18, delay: 8, peak: 0.5, dx: 4, dy: -11 },
    { cls: "particle--rise", x: 86, y: 53, r: 0.55, color: "#efce8a", dur: 15, delay: 11, peak: 0.45, dx: -3, dy: -12 },
    { cls: "particle--twinkle", x: 118, y: 20, r: 0.7, color: "#efce8a", dur: 12, delay: 6, peak: 0.45 }
  ],
  /* gold dust drawn toward the mirror, against gravity */
  petitfour: [
    { cls: "particle--toward", x: 98, y: 56, r: 0.7, color: "#ecd292", dur: 15, delay: 0, peak: 0.6, dx: -7, dy: -13 },
    { cls: "particle--toward", x: 106, y: 48, r: 0.6, color: "#ecd292", dur: 18, delay: 4, peak: 0.5, dx: -9, dy: -11 },
    { cls: "particle--toward", x: 90, y: 50, r: 0.65, color: "#ecd292", dur: 20, delay: 8, peak: 0.5, dx: -5, dy: -12 },
    { cls: "particle--toward", x: 62, y: 52, r: 0.6, color: "#ecd292", dur: 17, delay: 2, peak: 0.5, dx: 5, dy: -12 },
    { cls: "particle--twinkle", x: 78, y: 16, r: 0.75, color: "#dfe8ff", dur: 9, delay: 3, peak: 0.6 }
  ]
};

const SVG_NS = "http://www.w3.org/2000/svg";

function buildParticles(world) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "scene__particles");
  svg.setAttribute("viewBox", "0 0 160 90");
  svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
  svg.setAttribute("aria-hidden", "true");

  (PARTICLES[world.id] || []).forEach(p => {
    const c = document.createElementNS(SVG_NS, "circle");
    c.setAttribute("class", `particle ${p.cls}`);
    c.setAttribute("cx", p.x);
    c.setAttribute("cy", p.y);
    c.setAttribute("r", p.r);
    c.setAttribute("fill", p.color);
    c.style.setProperty("--dur", `${p.dur}s`);
    c.style.setProperty("--delay", `${p.delay}s`);
    c.style.setProperty("--peak", p.peak);
    if (p.dx !== undefined) c.style.setProperty("--dx", `${p.dx}px`);
    if (p.dy !== undefined) c.style.setProperty("--dy", `${p.dy}px`);
    svg.appendChild(c);
  });

  return svg;
}

/* --------------------------------------------------------------------------
   BUILD THE SCENES — modular layers generated from WORLDS data
   -------------------------------------------------------------------------- */

const stage = document.getElementById("stage");
const rip = document.getElementById("rip");

function buildLayer(className, src, onFail) {
  const layer = document.createElement("div");
  layer.className = `scene__layer ${className}`;
  layer.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.alt = "";
  img.draggable = false;
  layer.appendChild(img);
  loadWithFallback(img, [src], () => {
    layer.remove();
    if (onFail) onFail();
  });

  return layer;
}

function buildScene(world) {
  const scene = document.createElement("div");
  scene.className = `scene ${world.cssClass}`;
  scene.dataset.id = world.id;

  /* 1 · wide background collage, with graceful fallback chain */
  const bgLayer = document.createElement("div");
  bgLayer.className = "scene__layer scene__background-layer";
  const bgImg = document.createElement("img");
  bgImg.alt = `Surreal archival collage for the ${world.name} world: ${world.shortLine}`;
  bgImg.draggable = false;
  bgLayer.appendChild(bgImg);
  loadWithFallback(
    bgImg,
    [world.assets.background, world.assets.fallbackBackground],
    () => bgLayer.remove() /* the painted CSS ground remains */
  );
  scene.appendChild(bgLayer);

  /* light that needs no asset (cannoli's breathing arch) */
  if (world.id === "cannoli") {
    const light = document.createElement("div");
    light.className = "scene__light";
    scene.appendChild(light);
  }

  /* 2 · character or memory fragment */
  scene.appendChild(buildLayer("scene__character-layer", world.assets.character));

  /* 3 · main magical overlay */
  scene.appendChild(buildLayer("scene__magic-layer", world.assets.magic));

  /* 4 · the dessert — whole and bitten stacked on one plate */
  const dessert = document.createElement("button");
  dessert.type = "button";
  dessert.className = "scene__dessert";
  dessert.setAttribute("aria-label", `Take a bite of the ${world.name}`);
  if (world.plate) {
    dessert.style.setProperty("--plate-zoom", world.plate.zoom);
    dessert.style.setProperty("--plate-shift-y", world.plate.shiftY);
  }

  const whole = document.createElement("img");
  whole.className = "scene__dessert-image scene__dessert-image--whole";
  whole.alt = "";
  whole.draggable = false;
  const bitten = document.createElement("img");
  bitten.className = "scene__dessert-image scene__dessert-image--bitten";
  bitten.alt = "";
  bitten.draggable = false;
  dessert.append(whole, bitten);

  loadWithFallback(whole, [world.assets.dessertWhole], () => {
    /* no independent dessert yet — the collage keeps carrying the image */
    scene.classList.add("scene--no-dessert");
  });
  loadWithFallback(bitten, [world.assets.dessertBitten], () => {
    scene.classList.add("scene--no-bitten");
    bitten.remove();
  });

  dessert.addEventListener("click", takeBite);
  scene.appendChild(dessert);

  /* 5 · foreground paper or textile */
  scene.appendChild(buildLayer("scene__foreground-layer", world.assets.foreground));

  /* 6 · generated particles */
  scene.appendChild(buildParticles(world));

  return scene;
}

WORLDS.forEach(world => {
  stage.insertBefore(buildScene(world), rip);
});

const scenes = Array.from(stage.querySelectorAll(".scene"));

function activeScene() {
  return scenes.find(s => s.classList.contains("is-active"));
}

/* dessert position and background framing are data-driven per breakpoint */
function applyResponsiveLayout() {
  const key = mobileLayout.matches ? "mobile" : "desktop";
  WORLDS.forEach(world => {
    const scene = scenes.find(s => s.dataset.id === world.id);
    const layout = world.dessertLayout[key];
    const dessert = scene.querySelector(".scene__dessert");
    dessert.style.setProperty("--dessert-left", layout.left);
    dessert.style.setProperty("--dessert-top", layout.top);
    dessert.style.setProperty("--dessert-width", layout.width);
    if (world.backgroundPosition) {
      scene.style.setProperty("--bg-pos", world.backgroundPosition[key]);
    }
  });
}

applyResponsiveLayout();
mobileLayout.addEventListener("change", applyResponsiveLayout);

/* --------------------------------------------------------------------------
   DIAL — sector buttons + rotating handle
   -------------------------------------------------------------------------- */

const dial = document.getElementById("dial");
const dialArt = document.getElementById("dialArt");
const handleGroup = document.getElementById("handleGroup");

/* keep the selector elegant even before its artwork file exists */
function dialArtFailed() { dial.classList.add("dial--noart"); }
dialArt.addEventListener("error", dialArtFailed);
if (dialArt.complete && dialArt.naturalWidth === 0) dialArtFailed();

const SECTOR_POS = { 0: "top", 90: "right", 180: "bottom", 270: "left" };
const SYMBOL_NAMES = { shell: "shell", spiral: "spiral", cake: "layered cake", flower: "flower" };

WORLDS.forEach(world => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = `dial__sector dial__sector--${SECTOR_POS[world.handleAngle]}`;
  btn.setAttribute("role", "radio");
  btn.setAttribute("aria-checked", "false");
  btn.setAttribute("aria-label", `${world.name} — the ${SYMBOL_NAMES[world.symbol]}`);
  btn.dataset.id = world.id;
  btn.addEventListener("click", () => selectWorld(world.id));
  dial.appendChild(btn);
});

const sectorButtons = Array.from(dial.querySelectorAll(".dial__sector"));

/* --------------------------------------------------------------------------
   STATE + TRANSITIONS
   -------------------------------------------------------------------------- */

const strip = document.getElementById("strip");
const stripName = document.getElementById("stripName");
const stripContext = document.getElementById("stripContext");
const stripLine = document.getElementById("stripLine");
const biteHint = document.getElementById("biteHint");

let currentId = null;
let currentAngle = 0;      /* accumulated, so the handle takes the short way round */
let transitioning = false;
let queuedId = null;
let entered = false;
let settleTimer = null;
let healTimer = null;
let hintTimer = null;

function worldById(id) {
  return WORLDS.find(w => w.id === id);
}

function fillStrip(world) {
  stripContext.textContent = world.context;
  stripName.textContent = world.name;
  stripLine.textContent = world.shortLine;
}

function rotateHandle(world) {
  const target = world.handleAngle;
  const currentMod = ((currentAngle % 360) + 360) % 360;
  let delta = target - currentMod;
  if (delta > 180) delta -= 360;
  if (delta < -180) delta += 360;
  currentAngle += delta;
  handleGroup.style.setProperty("--angle", `${currentAngle}deg`);

  dial.classList.remove("is-clicked");
  const clickDelay = prefersReducedMotion.matches ? 80 : 640;
  setTimeout(() => {
    dial.classList.add("is-clicked");
    setTimeout(() => dial.classList.remove("is-clicked"), 700);
  }, clickDelay);
}

/* the first impression is a nearly still collage;
   ambient movement wakes only after the viewer stays */
function scheduleSettle() {
  clearTimeout(settleTimer);
  scenes.forEach(s => s.classList.remove("is-settled"));
  if (!entered) return;
  settleTimer = setTimeout(() => {
    const active = activeScene();
    if (active) active.classList.add("is-settled");
  }, 7000);
}

function healDesserts() {
  clearTimeout(healTimer);
  scenes.forEach(s => {
    const d = s.querySelector(".scene__dessert");
    if (d) d.classList.remove("is-bitten");
  });
}

function selectWorld(id, instant = false) {
  if (id === currentId) return;
  if (transitioning) { queuedId = id; return; }

  const world = worldById(id);
  const prev = currentId ? worldById(currentId) : null;
  currentId = id;
  transitioning = true;

  healDesserts(); /* changing worlds heals the dessert */

  clearTimeout(hintTimer);
  biteHint.classList.remove("is-visible");

  sectorButtons.forEach(b => b.setAttribute("aria-checked", String(b.dataset.id === id)));
  rotateHandle(world);

  const reduced = prefersReducedMotion.matches;
  const nextScene = scenes.find(s => s.dataset.id === id);
  const prevScene = prev ? scenes.find(s => s.dataset.id === prev.id) : null;

  if (instant || reduced || !prevScene) {
    if (prevScene) prevScene.classList.remove("is-active");
    nextScene.classList.add("is-active");
    fillStrip(world);
    strip.classList.remove("is-hushed");
    transitioning = false;
    scheduleSettle();
    flushQueue();
    return;
  }

  /* the torn-paper transition */
  strip.classList.add("is-hushed");
  stage.classList.add("is-ripping");

  setTimeout(() => {
    prevScene.classList.remove("is-active");
    nextScene.classList.add("is-active");
  }, 480);

  setTimeout(() => {
    fillStrip(world);
    strip.classList.remove("is-hushed");
  }, 700);

  setTimeout(() => {
    stage.classList.remove("is-ripping");
    transitioning = false;
    scheduleSettle();
    flushQueue();
  }, 1120);
}

function flushQueue() {
  if (queuedId && queuedId !== currentId) {
    const id = queuedId;
    queuedId = null;
    selectWorld(id);
  } else {
    queuedId = null;
  }
}

function step(direction) {
  const idx = DIAL_ORDER.indexOf(currentId);
  const next = DIAL_ORDER[(idx + direction + DIAL_ORDER.length) % DIAL_ORDER.length];
  selectWorld(next);
}

/* keyboard: arrows turn the dial anywhere on the page (unless the overlay is open) */
document.addEventListener("keydown", e => {
  if (!veil.hidden) {
    if (e.key === "Escape") closeLeaf();
    return;
  }
  if (!entered) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); step(1); }
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); step(-1); }
});

/* swipe on the stage and on the dial */
let touchX = null, touchY = null;

function onTouchStart(e) {
  touchX = e.changedTouches[0].clientX;
  touchY = e.changedTouches[0].clientY;
}

function onTouchEnd(e) {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  const dy = e.changedTouches[0].clientY - touchY;
  if (Math.abs(dx) > 52 && Math.abs(dx) > Math.abs(dy) * 1.4) {
    step(dx < 0 ? 1 : -1);
  }
  touchX = touchY = null;
}

[stage, dial].forEach(el => {
  el.addEventListener("touchstart", onTouchStart, { passive: true });
  el.addEventListener("touchend", onTouchEnd, { passive: true });
});

/* --------------------------------------------------------------------------
   CURSOR — slow parallax and patience
   -------------------------------------------------------------------------- */

if (isTouch) document.body.classList.add("is-touch");

let idleTimer = null;

function wake() {
  document.body.classList.remove("is-idle");
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => document.body.classList.add("is-idle"), 6000);
}

wake();
["pointermove", "pointerdown", "keydown", "touchstart"].forEach(evt =>
  document.addEventListener(evt, wake, { passive: true })
);

if (!isTouch && !prefersReducedMotion.matches) {
  let raf = null;

  stage.addEventListener("pointermove", e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = null;
      const r = stage.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      const active = activeScene();
      if (!active) return;
      /* one pair of variables; each layer multiplies by its own depth */
      active.style.setProperty("--px", (-nx).toFixed(3));
      active.style.setProperty("--py", (-ny).toFixed(3));
    });
  });

  stage.addEventListener("pointerleave", () => {
    const active = activeScene();
    if (!active) return;
    active.style.setProperty("--px", "0");
    active.style.setProperty("--py", "0");
  });
}

/* --------------------------------------------------------------------------
   THE BITE — a quiet, tactile image swap
   -------------------------------------------------------------------------- */

let biting = false;

function crumbBurst(scene, world, dessert) {
  if (prefersReducedMotion.matches) return;

  const sceneRect = scene.getBoundingClientRect();
  const rect = dessert.getBoundingClientRect();
  /* the bite lands on the upper right of the dessert */
  const originX = rect.left - sceneRect.left + rect.width * 0.64;
  const originY = rect.top - sceneRect.top + rect.height * 0.4;

  const count = 9;
  for (let i = 0; i < count; i++) {
    const crumb = document.createElement("span");
    crumb.className = "crumb";
    const accent = world.biteCrumbAccent && i === count - 1;
    crumb.style.background = accent ? world.biteCrumbAccent : world.biteCrumbColor;
    crumb.style.left = `${originX}px`;
    crumb.style.top = `${originY}px`;
    const size = 3 + Math.random() * 3.5;
    crumb.style.width = `${size}px`;
    crumb.style.height = `${size}px`;
    scene.appendChild(crumb);

    const angle = (Math.random() - 0.2) * Math.PI; /* mostly outward and up-right */
    const dist = 14 + Math.random() * 30;
    const dx = Math.cos(angle) * dist;
    const fall = 30 + Math.random() * 40;
    const dur = 700 + Math.random() * 350;

    const anim = crumb.animate([
      { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
      { transform: `translate(${dx * 0.7}px, ${-Math.abs(Math.sin(angle)) * dist * 0.6}px) rotate(${dx * 4}deg)`, opacity: 1, offset: 0.35 },
      { transform: `translate(${dx}px, ${fall}px) rotate(${dx * 8}deg)`, opacity: 0 }
    ], { duration: dur, easing: "cubic-bezier(0.2, 0.5, 0.6, 1)" });
    anim.onfinish = () => crumb.remove();
  }
}

function takeBite() {
  if (!veil.hidden || biting || transitioning) return;
  const world = worldById(currentId);
  const scene = activeScene();
  const dessert = scene.querySelector(".scene__dessert");
  const hasDessert = dessert && !scene.classList.contains("scene--no-dessert");
  const hasBitten = hasDessert && !scene.classList.contains("scene--no-bitten");

  clearTimeout(healTimer);

  if (!hasDessert || prefersReducedMotion.matches) {
    if (hasBitten) dessert.classList.add("is-bitten");
    openLeaf();
    return;
  }

  biting = true;
  dessert.classList.add("is-biting");
  crumbBurst(scene, world, dessert);

  setTimeout(() => { if (hasBitten) dessert.classList.add("is-bitten"); }, 150);
  setTimeout(() => dessert.classList.remove("is-biting"), 420);
  setTimeout(() => { biting = false; openLeaf(); }, 680);
}

/* --------------------------------------------------------------------------
   "TAKE A BITE" OVERLAY + PRINTABLE CULTURAL RECIPE CARD
   -------------------------------------------------------------------------- */

const veil = document.getElementById("veil");
const leaf = document.getElementById("leaf");
const biteBtn = document.getElementById("biteBtn");
const leafClose = document.getElementById("leafClose");
const leafDismiss = document.getElementById("leafDismiss");
const leafSave = document.getElementById("leafSave");
let lastFocused = null;

function fillPrintCard(world) {
  document.getElementById("printObject").textContent = world.objectNumber;
  document.getElementById("printName").textContent = world.name;
  document.getElementById("printContext").textContent = world.context;
  document.getElementById("printAftertaste").textContent = world.aftertaste;
  document.getElementById("printVignette").textContent = world.vignette;
  document.getElementById("printRecipeTitle").textContent = world.recipeTitle;
  document.getElementById("printRecipeNote").textContent = world.recipeNote;
  document.getElementById("printIngredients").innerHTML =
    world.ingredients.map(i => `<li>${i}</li>`).join("");
  document.getElementById("printSteps").innerHTML =
    world.steps.map(s => `<li>${s}</li>`).join("");
  document.getElementById("printTakeHome").textContent = world.takeItHome;

  /* a real <img> so browsers print it reliably;
     recipe image first, the whole dessert second, otherwise no figure */
  const figure = document.getElementById("printFigure");
  const img = document.getElementById("printImage");
  figure.classList.remove("is-hidden");
  img.alt = `${world.name} — printable cultural recipe card image`;
  const probe = new Image();
  const candidates = [world.assets.recipeImage, world.assets.dessertWhole].filter(Boolean);

  function tryNext() {
    if (!candidates.length) {
      figure.classList.add("is-hidden");
      img.removeAttribute("src");
      return;
    }
    probe.src = candidates.shift();
  }
  probe.onload = () => { img.src = probe.src; };
  probe.onerror = tryNext;
  tryNext();
}

function openLeaf() {
  const world = worldById(currentId);

  document.getElementById("leafCatalogue").textContent =
    `${world.objectNumber} · ${world.context}`;
  document.getElementById("leafTitle").textContent = world.name;
  document.getElementById("leafEpigraph").textContent = world.epigraph;
  document.getElementById("leafEpigraphSource").textContent = world.epigraphSource;
  document.getElementById("leafVignette").textContent = world.vignette;
  document.getElementById("leafHistory").textContent = world.history;
  document.getElementById("leafAftertaste").textContent = world.aftertaste;
  document.getElementById("leafTakeHome").textContent = world.takeItHome;
  document.getElementById("leafRecipeTitle").textContent = world.recipeTitle;
  document.getElementById("leafRecipeNote").textContent = world.recipeNote;
  document.getElementById("leafIngredients").innerHTML =
    world.ingredients.map(i => `<li>${i}</li>`).join("");
  document.getElementById("leafSteps").innerHTML =
    world.steps.map(s => `<li>${s}</li>`).join("");

  fillPrintCard(world);

  lastFocused = document.activeElement;
  veil.hidden = false;
  document.body.classList.add("leaf-open");
  leaf.scrollTop = 0;
  leafClose.focus();
}

function closeLeaf() {
  veil.hidden = true;
  document.body.classList.remove("leaf-open");
  if (lastFocused) lastFocused.focus();

  /* the dessert stays bitten a while, then quietly heals */
  clearTimeout(healTimer);
  healTimer = setTimeout(healDesserts, 6500);
}

biteBtn.addEventListener("click", takeBite);
leafClose.addEventListener("click", closeLeaf);
leafDismiss.addEventListener("click", closeLeaf);
leafSave.addEventListener("click", () => window.print());
veil.addEventListener("click", e => { if (e.target === veil) closeLeaf(); });

/* keep focus inside the leaf while it is open */
veil.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const focusables = leaf.querySelectorAll("button");
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* --------------------------------------------------------------------------
   THRESHOLD — enter the patisserie
   -------------------------------------------------------------------------- */

const threshold = document.getElementById("threshold");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  entered = true;
  threshold.classList.add("is-leaving");
  setTimeout(() => { threshold.hidden = true; }, 850);

  scheduleSettle();
  wake();

  const scene = activeScene();
  if (scene && !scene.classList.contains("scene--no-dessert")) {
    clearTimeout(hintTimer);
    biteHint.classList.add("is-visible");
    hintTimer = setTimeout(() => biteHint.classList.remove("is-visible"), 5200);
  }

  const checked = sectorButtons.find(b => b.getAttribute("aria-checked") === "true");
  if (checked) checked.focus({ preventScroll: true });
});

/* --------------------------------------------------------------------------
   BEGIN — in Combray, where all remembering starts
   -------------------------------------------------------------------------- */

selectWorld("madeleine", true);
