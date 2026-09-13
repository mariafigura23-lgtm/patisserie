/* Four bites, one stationary plate. Artwork is composed at runtime so the
   original rim and background never change between generated states. */
const PatisserieBites = (() => {
  const ns = "http://www.w3.org/2000/svg";
  const configs = {
    madeleine: {
      asset: "madeleine", height: 750,
      region: "M366 431 Q378 343 450 265 Q533 221 605 254 Q651 323 639 418 Q610 503 523 520 Q423 530 368 466 Z",
      brightness: 0.9, feather: 12,
      plate: "M0 0H1000V750H0Z",
      bites: [
        { x: 626, y: 358, r: 48, tangent: 90, inward: 180 },
        { x: 386, y: 414, r: 46, tangent: 75, inward: 0 },
        { x: 526, y: 256, r: 44, tangent: 4, inward: 90 }
      ]
    },
    cannoli: {
      asset: "cannoli", height: 750,
      region: "M245 452 Q251 340 304 295 L521 151 Q569 101 652 101 L715 103 Q758 130 770 224 L687 365 L472 546 Q387 582 300 529 Z",
      plate: "M106 362 Q116 267 261 235 Q327 162 387 187 Q430 139 525 153 Q609 137 700 187 Q785 219 814 277 Q904 301 911 370 Q923 478 783 554 Q695 630 527 632 Q351 652 233 579 Q110 552 102 422 Z",
      bites: [
        { x: 733, y: 214, r: 55, tangent: 73, inward: 155 },
        { x: 278, y: 433, r: 52, tangent: 80, inward: -8 },
        { x: 493, y: 514, r: 52, tangent: -28, inward: -105 }
      ]
    },
    napoleon: {
      asset: "napoleon", height: 750,
      region: "M229 255 L251 222 L548 150 L626 133 L685 150 L727 198 L790 271 L805 339 L802 479 L710 519 L379 589 Q266 561 239 475 Z",
      plate: "M95 395 Q157 317 239 283 Q370 219 505 216 Q713 213 836 315 Q914 369 915 432 Q883 536 725 588 Q522 663 290 589 Q112 542 86 447 Z",
      bites: [
        { x: 788, y: 351, r: 62, tangent: 90, inward: 180 },
        { x: 250, y: 410, r: 58, tangent: 92, inward: 0 },
        { x: 610, y: 151, r: 55, tangent: 3, inward: 90 }
      ]
    },
    tiramisu: {
      asset: "tiramisu", height: 1000,
      region: "M218 427 L318 334 L396 279 L417 221 L480 214 L541 251 L586 150 L637 243 L693 275 L711 317 Q803 324 827 407 L845 519 L873 658 L849 717 L491 833 L426 802 L270 664 L221 560 Z",
      plate: "M111 538 Q150 487 231 468 Q309 409 379 385 Q436 327 527 345 Q635 329 727 380 Q788 432 830 478 Q904 523 948 598 Q941 729 814 801 Q622 902 401 865 Q194 839 74 723 Q28 638 111 538 Z",
      bites: [
        { x: 844, y: 548, r: 75, tangent: 86, inward: 180 },
        { x: 238, y: 565, r: 70, tangent: 88, inward: 0 },
        { x: 589, y: 225, r: 68, tangent: 8, inward: 96 }
      ]
    },
    petitfour: {
      asset: "petit-four", height: 750,
      region: "M305 371 L341 335 L347 275 Q361 242 437 226 L452 191 L482 173 L511 181 L541 203 L566 240 Q645 262 669 313 L695 413 L709 450 L639 518 L525 563 L381 516 Z",
      plate: "M0 0H1000V750H0Z",
      bites: [
        { x: 681, y: 378, r: 52, tangent: 85, inward: 180 },
        { x: 340, y: 404, r: 49, tangent: 78, inward: 0 },
        { x: 508, y: 206, r: 47, tangent: 5, inward: 92 }
      ]
    }
  };

  function element(tag, attributes = {}) {
    const el = document.createElementNS(ns, tag);
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  }

  function circlePath(x, y, radius) {
    const left = x - radius;
    const diameter = radius * 2;
    return `M${left.toFixed(1)} ${y.toFixed(1)}a${radius.toFixed(1)} ${radius.toFixed(1)} 0 1 0 ${diameter.toFixed(1)} 0a${radius.toFixed(1)} ${radius.toFixed(1)} 0 1 0 -${diameter.toFixed(1)} 0Z`;
  }

  /* Each bite is a small uneven cloud of overlapping tooth marks. Its centre
     sits on an outer edge and the last circle reaches inward, so it reads as a
     mouthful taken from the dessert rather than a decorative hole. */
  function biteShape(bite) {
    const tangent = bite.tangent * Math.PI / 180;
    const inward = bite.inward * Math.PI / 180;
    const marks = [
      [-1.18, -0.02, 0.64],
      [-0.43,  0.08, 0.82],
      [ 0.32, -0.07, 0.76],
      [ 1.04,  0.04, 0.61]
    ];
    const teeth = marks.map(([along, inwardNudge, scale]) => {
      const x = bite.x + Math.cos(tangent) * bite.r * along + Math.cos(inward) * bite.r * inwardNudge;
      const y = bite.y + Math.sin(tangent) * bite.r * along + Math.sin(inward) * bite.r * inwardNudge;
      return circlePath(x, y, bite.r * scale);
    });
    const coreX = bite.x + Math.cos(inward) * bite.r * 0.62;
    const coreY = bite.y + Math.sin(inward) * bite.r * 0.62;
    teeth.push(circlePath(coreX, coreY, bite.r));
    return teeth.join("");
  }

  // Three cumulative mouthfuls arrive from different edges; the fourth clears it.
  function bitePath(config, step) {
    if (step === 0) return "M0 0Z";
    if (step === 4) return `M0 0H1000V${config.height}H0Z`;
    return config.bites.slice(0, step).map(biteShape).join("");
  }

  function mount(inner, world, wholeLoader, emptyLoader) {
    const config = configs[world.id];
    const prefix = `bites-${world.id}`;
    const art = element("svg", {
      class: "scene__dessert-art", viewBox: `0 0 1000 ${config.height}`,
      preserveAspectRatio: world.dessert.style === "cutout" ? "xMidYMid meet" : "xMidYMid slice",
      "aria-hidden": "true", focusable: "false"
    });
    const defs = element("defs");
    const softness = element("filter", { id: `${prefix}-soft`, x: "-20%", y: "-20%", width: "140%", height: "140%" });
    softness.append(element("feGaussianBlur", { stdDeviation: config.feather || 2 }));
    const region = element("mask", { id: `${prefix}-region`, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 1000, height: config.height });
    region.append(element("path", { d: config.region, fill: "white", filter: `url(#${prefix}-soft)` }));
    // Opaque backing beneath the feather avoids a dark double-alpha seam.
    const backing = element("mask", { id: `${prefix}-backing`, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 1000, height: config.height });
    backing.append(element("path", { d: config.region, fill: "white", stroke: "white", "stroke-width": (config.feather || 2) * 6, "stroke-linejoin": "round" }));
    const plate = element("clipPath", { id: `${prefix}-plate`, clipPathUnits: "userSpaceOnUse" });
    plate.append(element("path", { d: config.plate }));
    const eaten = element("clipPath", { id: `${prefix}-eaten`, clipPathUnits: "userSpaceOnUse" });
    const edge = element("path", { d: bitePath(config, 0), class: "bite-edge" });
    eaten.append(edge);
    const mask = element("mask", { id: `${prefix}-mask`, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 1000, height: config.height, "mask-type": "luminance" });
    mask.append(element("rect", { width: 1000, height: config.height, fill: "white" }));
    const removal = element("g", { mask: `url(#${prefix}-region)` });
    const erase = element("path", { d: bitePath(config, 0), fill: "black", class: "bite-erase" });
    removal.append(erase);
    mask.append(removal);
    defs.append(softness, region, backing, plate, eaten, mask);
    const exposed = element("g", { mask: `url(#${prefix}-backing)` });
    const bittenArea = element("g", { "clip-path": `url(#${prefix}-eaten)` });
    const empty = element("image", { width: 1000, height: config.height, "clip-path": `url(#${prefix}-plate)` });
    if (config.brightness) {
      const tone = element("filter", { id: `${prefix}-tone`, "color-interpolation-filters": "sRGB" });
      const transfer = element("feComponentTransfer");
      ["R", "G", "B"].forEach(channel => transfer.append(element(`feFunc${channel}`, { type: "linear", slope: config.brightness })));
      tone.append(transfer);
      defs.append(tone);
      empty.setAttribute("filter", `url(#${prefix}-tone)`);
    }
    bittenArea.append(empty);
    exposed.append(bittenArea);
    const whole = element("image", { width: 1000, height: config.height });
    art.append(defs, exposed, whole);
    inner.append(art);
    wholeLoader.addEventListener("load", () => {
      whole.setAttribute("href", wholeLoader.currentSrc || wholeLoader.src);
      inner.classList.add("has-bite-art");
    });
    emptyLoader.addEventListener("load", () => {
      empty.setAttribute("href", emptyLoader.currentSrc || emptyLoader.src);
      whole.setAttribute("mask", `url(#${prefix}-mask)`);
      art.dataset.ready = "true";
    });
    // If the second image fails, leave the whole dessert visible, not a hole.
    emptyLoader.addEventListener("error", () => {
      whole.removeAttribute("mask");
      art.dataset.ready = "false";
    });
  }

  function update(dessert, worldId, count) {
    const config = configs[worldId];
    const step = Math.max(0, Math.min(4, Number(count) || 0));
    dessert.dataset.biteStep = String(step);
    const path = bitePath(config, step);
    dessert.querySelectorAll(".bite-edge, .bite-erase").forEach(el => el.setAttribute("d", path));
    const activeBite = config.bites[Math.min(step, 3) - 1] || config.bites[0];
    dessert.style.setProperty("--bite-x", `${activeBite.x / 10}%`);
    dessert.style.setProperty("--bite-y", `${activeBite.y / config.height * 100}%`);
  }

  return { configs, bitePath, mount, update };
})();
