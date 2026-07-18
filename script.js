/* ==========================================================================
   THE PATISSERIE OF THE UNCONSCIOUS
   Every dessert holds a story — and a desire.

   Sensation → Scene → Desire → Rule → Transformation → Return

   Each world is assembled from independent collage layers. The bite opens
   the dessert as a cultural form; four fragments awaken inside the scene;
   when the world is complete, its taste can be taken home as a recipe.
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
    context: "Combray / France / the return of lost time",
    shortLine: "A taste waits quietly for the past to return.",
    epigraph: "“A taste arrives first. The lost room follows.”",
    epigraphSource: "Original epigraph inspired by Proustian involuntary memory.",
    vignette: "The cake touches the tea before it reaches the mouth. A taste arrives without explanation, and suddenly an entire room returns: its windows, silence, fabric, and forgotten light. The dessert does not merely accompany memory. It opens it.",
    history: "The madeleine began as a modest sponge cake from Commercy, in Lorraine — shaped in a scallop shell, sold at railway stations, carried in coat pockets. In 1913 Marcel Proust dipped one into lime-blossom tea on the first pages of In Search of Lost Time, and the little cake became the most famous mouthful in modern literature: proof that an entire vanished world can be stored, intact, inside a taste, waiting for the body to remember what the mind has filed away.",
    aftertaste: "Memory keeps what biography forgets.",
    takeItHome: "Prepare tea without your phone nearby. Try to remember not an event, but the atmosphere of a place: its light, smell, texture, and hour.",
    reflection: "What part of your life would you return to through a taste?",
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
    dessert: {
      style: "plate",
      aspect: 1,
      layout: {
        desktop: { left: "50%", top: "56.5%", width: "31%" },
        mobile:  { left: "50%", top: "43%", width: "65%" }
      }
    },
    layers: {
      magic:      { left: "56%", top: "4%", width: "16%" },
      character:  { left: "70.5%", top: "40%", width: "10%" },
      foreground: { left: "-2%", top: "68%", width: "104%" }
    },
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 46%" },
    biteCrumbColor: "#d9b46e",
    hotspots: [
      {
        key: "sensation", x: 49, y: 58, mx: 49, my: 58,
        title: "Sensation", subtitle: "What the body feels.",
        text: "Warm tea, soft cake, butter, and a texture that dissolves almost before it can be named. The body recognises something before the mind understands why it matters."
      },
      {
        key: "scene", x: 34, y: 32, mx: 34, my: 32,
        title: "Scene", subtitle: "What world appears.",
        text: "A room returns: light on fabric, silence, a familiar table, the atmosphere of a time thought lost. The taste does not restore a fact. It restores an entire world."
      },
      {
        key: "desire", x: 68, y: 22, mx: 76, my: 22,
        title: "Desire", subtitle: "What kind of life is being longed for.",
        text: "The desire is not merely to remember. It is to recover continuity — to feel that the former self and the present self still belong to the same life."
      },
      {
        key: "rule", x: 81, y: 46, mx: 84, my: 42,
        title: "Rule", subtitle: "What culture permits, postpones, or asks us to earn.",
        text: "Adult time is expected to move forward. The past is treated as finished and private feeling must submit to chronology, discipline, and explanation. The taste briefly interrupts that order."
      }
    ],
    symbol: "shell",
    handleAngle: 0,
    cssClass: "scene--madeleine"
  },
  {
    id: "cannoli",
    name: "Cannoli",
    objectNumber: "Object II of IV",
    context: "Sicily / dolce vita / dolce far niente",
    shortLine: "A small pleasure does not need a larger occasion.",
    epigraph: "“Even restraint can invent sweetness.”",
    epigraphSource: "Original epigraph.",
    vignette: "Inside a world of rules, someone prepares a sweetness that borders on extravagance. Crisp pastry holds soft ricotta, citrus, sugar, and patience. Restraint and pleasure are not always opposites. Sometimes one secretly produces the other.",
    history: "Sicily learned sugar from its Arab centuries, and kept it in the strangest of custodians: the convent. Behind grilles and vows, nuns became the island's great confectioners, selling cannoli, cassata, and marzipan fruit through turnstile windows to fund their houses. The crisp shell filled with sweetened ricotta was once a carnival extravagance; it survived because disciplined hands perfected it. A whole social order — devotion, enclosure, appetite — is folded into one fried tube of pastry.",
    aftertaste: "Even restraint can invent sweetness.",
    takeItHome: "Make something beautiful without waiting for a special occasion. Let pleasure exist without turning it into a reward.",
    reflection: "What small pleasure have you postponed until life becomes less busy?",
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
    dessert: {
      style: "cutout",
      aspect: 1.333,
      layout: {
        desktop: { left: "52%", top: "57%", width: "35%" },
        mobile:  { left: "52%", top: "42%", width: "68%" }
      }
    },
    layers: {
      magic:      { left: "59%", top: "7%", width: "24%" },
      character:  { left: "12%", top: "36%", width: "12.5%" },
      foreground: { left: "-2%", top: "70%", width: "104%" }
    },
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 47%" },
    biteCrumbColor: "#e6c98f",
    biteCrumbAccent: "#7e8c46", /* one pistachio crumb falls after the bite */
    hotspots: [
      {
        key: "sensation", x: 63, y: 53, mx: 70, my: 52,
        title: "Sensation", subtitle: "What the body feels.",
        text: "A brittle shell breaks into cool ricotta, citrus, sugar, and pistachio. The pleasure is brief, concentrated, and dependent on attention to the present moment."
      },
      {
        key: "scene", x: 23, y: 33, mx: 22, my: 30,
        title: "Scene", subtitle: "What world appears.",
        text: "A small Sicilian pastry shop, an espresso, sunlight, a pause in the middle of an ordinary day. Nothing monumental happens. Life simply becomes good for a few minutes."
      },
      {
        key: "desire", x: 58, y: 18, mx: 58, my: 18,
        title: "Desire", subtitle: "What kind of life is being longed for.",
        text: "The desire is not for limitless excess. It is for permission to enjoy life before every task is finished — to feel that this moment can already be enough."
      },
      {
        key: "rule", x: 14, y: 60, mx: 15, my: 60,
        title: "Rule", subtitle: "What culture permits, postpones, or asks us to earn.",
        text: "Pleasure is often postponed until work is complete, success is achieved, or a special occasion arrives. The cannolo proposes another rhythm: a small joy may belong inside ordinary time."
      }
    ],
    symbol: "spiral",
    handleAngle: 270,
    cssClass: "scene--cannoli"
  },
  {
    id: "napoleon",
    name: "Napoleon",
    objectNumber: "Object III of IV",
    context: "A late Soviet family kitchen / domestic celebration",
    shortLine: "Tomorrow becomes a celebration because someone begins tonight.",
    epigraph: "“Happiness, too, can be assembled layer by layer.”",
    epigraphSource: "Original epigraph.",
    vignette: "The cake takes hours. Layers are rolled, baked, cooled, covered with cream, and left overnight to soften into one whole. In a domestic culture of scarcity, celebration was often handmade. Sweetness came not as ease, but as effort transformed into festivity.",
    history: "Legend dates the cake to 1912, when Moscow's bakers cut mille-feuille into cocked-hat triangles for the centenary of the victory over Napoleon. In the Soviet kitchen it became something else: a holiday you had to build. Butter was queued for, layers were rolled late into the night, and the recipe travelled in handwritten notebooks from mother to daughter to neighbour. Left to rest until morning, the strict layers softened into one tender whole — scarcity, patience, and love pressed into a single slice.",
    aftertaste: "Sometimes love is measured in the number of layers.",
    takeItHome: "Create one celebration by hand. Not because it is efficient, but because making something slowly can itself become the event.",
    reflection: "Whose labour made celebration feel effortless to you?",
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
    dessert: {
      style: "cutout",
      aspect: 1.75,
      front: true, /* the cake stands in front of the torn-paper table */
      layout: {
        desktop: { left: "50%", top: "57%", width: "38%" },
        mobile:  { left: "50%", top: "43%", width: "72%" }
      }
    },
    layers: {
      magic:      { left: "42%", top: "16%", width: "18%" },
      character:  { left: "2.5%", top: "10%", width: "22%", blend: "multiply", memory: true },
      foreground: { left: "-2%", top: "52%", width: "104%" }
    },
    backgroundPosition: { desktop: "50% 48%", mobile: "50% 50%" },
    biteCrumbColor: "#e9ddba",
    hotspots: [
      {
        key: "sensation", x: 53, y: 57, mx: 52, my: 55,
        title: "Sensation", subtitle: "What the body feels.",
        text: "Cream softens the layers, crumbs fall, and the cake carries a dense sweetness associated with waiting. Its texture already contains time: it must rest before it is ready."
      },
      {
        key: "scene", x: 73, y: 34, mx: 74, my: 28,
        title: "Scene", subtitle: "What world appears.",
        text: "An evening kitchen before a birthday or holiday. Someone rolls the layers, prepares the cream, and leaves the finished cake until tomorrow."
      },
      {
        key: "desire", x: 48, y: 18, mx: 49, my: 16,
        title: "Desire", subtitle: "What kind of life is being longed for.",
        text: "The desire is for care made visible through effort: home, continuity, family closeness, abundance, and the promise that tomorrow will be special."
      },
      {
        key: "rule", x: 22, y: 36, mx: 16, my: 32,
        title: "Rule", subtitle: "What culture permits, postpones, or asks us to earn.",
        text: "Pleasure must be prepared, deserved, and delayed. In a culture shaped by scarcity, luxury is not simply purchased. It is patiently assembled through domestic labour."
      }
    ],
    symbol: "cake",
    handleAngle: 90,
    cssClass: "scene--napoleon"
  },
  {
    id: "petitfour",
    name: "Court Petit Four",
    objectNumber: "Object IV of IV",
    context: "Versailles / court culture / late eighteenth century",
    shortLine: "A perfect surface promises a perfect world.",
    epigraph: "“Everything is designed to appear effortless.”",
    epigraphSource: "Original epigraph.",
    vignette: "At court, sweetness becomes design, performance, and illusion. Sugar is shaped into flowers, surfaces, and miniature architectures. Beauty is arranged so perfectly that it begins to look natural—just before history reminds the room that nothing delicate is guaranteed.",
    history: "The petit four is named for the cooling oven — à petit four — where confectioners finished delicate work after the great bakes were done. At Versailles, sugar was a theatre: pièces montées, spun-sugar architecture, glazed miniatures arranged down mirrored tables in the choreography of service à la française. Sweetness performed power, and performed it as effortlessness. Within a decade the tables were gone; the tiny glazed cake remains, carrying the whole doomed elegance of the ancien régime in one bite.",
    aftertaste: "Some worlds become most beautiful just before they disappear.",
    takeItHome: "Set a table beautifully for no practical reason, even for one person. Allow beauty to exist without needing to justify it.",
    reflection: "What kind of beautiful world have you wanted to be admitted into?",
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
    dessert: {
      style: "plate",
      aspect: 1.67,
      layout: {
        desktop: { left: "50%", top: "57%", width: "36%" },
        mobile:  { left: "50%", top: "43%", width: "70%" }
      }
    },
    layers: {
      magic:      { left: "56.5%", top: "14%", width: "16%", portal: true },
      character:  { left: "2.5%", top: "28%", width: "26%", vignette: true },
      foreground: { bleed: true, blend: "screen" }
    },
    backgroundPosition: { desktop: "60% 50%", mobile: "60% 48%" },
    biteCrumbColor: "#f2dfc9",
    hotspots: [
      {
        key: "sensation", x: 58, y: 57, mx: 58, my: 54,
        title: "Sensation", subtitle: "What the body feels.",
        text: "Thin glaze, delicate sweetness, fragility, and decorative precision. The dessert is almost too perfect to disturb."
      },
      {
        key: "scene", x: 37, y: 36, mx: 34, my: 34,
        title: "Scene", subtitle: "What world appears.",
        text: "A courtly interior of candles, mirrors, ceremony, and miniature beauty. The dessert belongs to a world in which pleasure is arranged as spectacle."
      },
      {
        key: "desire", x: 67, y: 28, mx: 68, my: 26,
        title: "Desire", subtitle: "What kind of life is being longed for.",
        text: "The desire is to enter a world where beauty, elegance, abundance, and belonging appear natural — a life seemingly protected from disorder and necessity."
      },
      {
        key: "rule", x: 84, y: 42, mx: 82, my: 40,
        title: "Rule", subtitle: "What culture permits, postpones, or asks us to earn.",
        text: "At court, pleasure also communicates rank. Beauty appears effortless while concealing specialised labour, material wealth, codes of conduct, hierarchy, and the fragility of the order that produced it."
      }
    ],
    symbol: "flower",
    handleAngle: 180,
    cssClass: "scene--petitfour"
  }
];

/* clockwise order around the dial, for arrow keys and swiping */
const DIAL_ORDER = ["madeleine", "napoleon", "petitfour", "cannoli"];

const HOTSPOT_INSTRUCTION = "Four fragments have awakened. Find the four glowing marks.";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileLayout = window.matchMedia("(max-width: 900px)");
const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

/* per-world session state — preserved when returning to a world */
const worldState = {};
WORLDS.forEach(w => {
  worldState[w.id] = { bitten: false, explored: new Set(), complete: false, completionPending: false, loaded: false };
});

/* --------------------------------------------------------------------------
   IMAGE FALLBACKS
   -------------------------------------------------------------------------- */

function loadWithFallback(img, sources, onFail) {
  const queue = sources.filter(Boolean);

  function tryNext() {
    if (!queue.length) {
      if (onFail) onFail();
      return;
    }
    img.src = queue.shift();
  }

  img.addEventListener("error", tryNext);
  tryNext();
}

/* --------------------------------------------------------------------------
   PARTICLES — a handful of lightweight SVG motes per world (160 × 90 space)
   -------------------------------------------------------------------------- */

const PARTICLES = {
  madeleine: [
    { cls: "particle--rise", x: 108, y: 26, r: 0.9, color: "#e8c87f", dur: 17, delay: 0, peak: 0.55, dx: 3, dy: -9 },
    { cls: "particle--rise", x: 130, y: 18, r: 0.7, color: "#e8c87f", dur: 22, delay: 5, peak: 0.45, dx: -2, dy: -8 },
    { cls: "particle--rise", x: 80,  y: 15, r: 0.8, color: "#efd9a1", dur: 19, delay: 9, peak: 0.5, dx: 2, dy: -7 },
    { cls: "particle--twinkle", x: 25, y: 22, r: 0.7, color: "#e8c87f", dur: 11, delay: 3, peak: 0.5 },
    { cls: "particle--twinkle", x: 118, y: 55, r: 0.6, color: "#e8c87f", dur: 14, delay: 7, peak: 0.4 }
  ],
  cannoli: [
    { cls: "particle--fall", x: 28, y: 46, r: 0.7, color: "#f3ecdc", dur: 14, delay: 0, peak: 0.5, dx: 2, dy: 10 },
    { cls: "particle--fall", x: 35, y: 40, r: 0.55, color: "#f3ecdc", dur: 17, delay: 4, peak: 0.45, dx: -2, dy: 9 },
    { cls: "particle--fall", x: 22, y: 52, r: 0.6, color: "#f3ecdc", dur: 19, delay: 8, peak: 0.4, dx: 2, dy: 8 },
    { cls: "particle--fall", x: 132, y: 50, r: 0.65, color: "#f3ecdc", dur: 16, delay: 2, peak: 0.45, dx: -2, dy: 9 },
    { cls: "particle--twinkle", x: 16, y: 10, r: 0.8, color: "#e8c87f", dur: 13, delay: 5, peak: 0.4 }
  ],
  napoleon: [
    { cls: "particle--rise", x: 76, y: 52, r: 0.75, color: "#d8b06a", dur: 13, delay: 0, peak: 0.6, dx: 3, dy: -12 },
    { cls: "particle--rise", x: 83, y: 50, r: 0.6, color: "#efce8a", dur: 16, delay: 4, peak: 0.5, dx: -2, dy: -13 },
    { cls: "particle--rise", x: 79, y: 54, r: 0.65, color: "#d8b06a", dur: 18, delay: 8, peak: 0.5, dx: 4, dy: -11 },
    { cls: "particle--rise", x: 86, y: 53, r: 0.55, color: "#efce8a", dur: 15, delay: 11, peak: 0.45, dx: -3, dy: -12 },
    { cls: "particle--twinkle", x: 118, y: 20, r: 0.7, color: "#efce8a", dur: 12, delay: 6, peak: 0.45 }
  ],
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
   BUILD THE SCENES — layers generated from WORLDS data, lazy-loaded
   -------------------------------------------------------------------------- */

const stage = document.getElementById("stage");
const rip = document.getElementById("rip");

function buildPositionedLayer(className, spec, world, assetKey) {
  const layer = document.createElement("div");
  layer.className = `scene__layer ${className}`;
  layer.setAttribute("aria-hidden", "true");

  if (spec.bleed) {
    layer.classList.add("scene__layer--bleed");
  } else {
    layer.style.left = spec.left;
    layer.style.top = spec.top;
    layer.style.width = spec.width;
  }
  if (spec.blend === "screen") layer.classList.add("scene__layer--screen");
  if (spec.blend === "multiply") layer.classList.add("scene__layer--multiply");
  if (spec.portal) layer.classList.add("scene__layer--portal");
  if (spec.vignette) layer.classList.add("scene__layer--vignette");
  if (spec.memory) layer.classList.add("scene__layer--memory");

  const img = document.createElement("img");
  img.alt = "";
  img.draggable = false;
  img.dataset.src = world.assets[assetKey];
  layer.appendChild(img);

  return layer;
}

function buildScene(world) {
  const scene = document.createElement("div");
  scene.className = `scene ${world.cssClass}`;
  scene.dataset.id = world.id;

  /* 1 · wide background collage */
  const bgLayer = document.createElement("div");
  bgLayer.className = "scene__layer scene__background-layer";
  const bgImg = document.createElement("img");
  bgImg.alt = `Surreal archival collage for the ${world.name} world: ${world.shortLine}`;
  bgImg.draggable = false;
  bgImg.dataset.src = world.assets.background;
  bgImg.dataset.fallback = world.assets.fallbackBackground;
  bgLayer.appendChild(bgImg);
  scene.appendChild(bgLayer);

  /* 2 · character or memory fragment */
  scene.appendChild(buildPositionedLayer("scene__character-layer", world.layers.character, world, "character"));

  /* 3 · main magical overlay */
  scene.appendChild(buildPositionedLayer("scene__magic-layer", world.layers.magic, world, "magic"));

  /* 4 · the dessert — whole and bitten stacked on one plate */
  const dessert = document.createElement("button");
  dessert.type = "button";
  dessert.className = `scene__dessert scene__dessert--${world.dessert.style}`;
  dessert.setAttribute("aria-label", `Take a bite of the ${world.name}`);
  dessert.style.aspectRatio = String(world.dessert.aspect);
  if (world.dessert.front) scene.classList.add("scene--dessert-front");

  const inner = document.createElement("span");
  inner.className = "scene__dessert-inner";
  const whole = document.createElement("img");
  whole.className = "scene__dessert-image scene__dessert-image--whole";
  whole.alt = "";
  whole.draggable = false;
  whole.dataset.src = world.assets.dessertWhole;
  const bitten = document.createElement("img");
  bitten.className = "scene__dessert-image scene__dessert-image--bitten";
  bitten.alt = "";
  bitten.draggable = false;
  bitten.dataset.src = world.assets.dessertBitten;
  inner.append(whole, bitten);
  dessert.appendChild(inner);
  dessert.addEventListener("click", takeBite);
  scene.appendChild(dessert);

  /* 5 · foreground intentionally disabled.
     The previous full-width foreground strips obscured the plate and hotspots. */

  /* 6 · generated particles */
  scene.appendChild(buildParticles(world));

  /* 7 · the pulse of the bite */
  const pulse = document.createElement("div");
  pulse.className = "scene__pulse";
  pulse.setAttribute("aria-hidden", "true");
  scene.appendChild(pulse);

  /* 8 · cultural hotspots — the culture itself becomes the interface */
  world.hotspots.forEach(spot => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `hotspot hotspot--${spot.key}`;
    btn.dataset.key = spot.key;
    btn.setAttribute("aria-label", `${spot.title} — ${spot.subtitle}`);
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `
      <span class="hotspot__ring" aria-hidden="true"></span>
      <span class="hotspot__dot" aria-hidden="true"></span>
      <span class="hotspot__label" aria-hidden="true">${spot.title}</span>`;
    btn.addEventListener("click", () => openFragment(world, spot, btn));
    scene.appendChild(btn);
  });

  return scene;
}

WORLDS.forEach(world => {
  stage.insertBefore(buildScene(world), rip);
});

const scenes = Array.from(stage.querySelectorAll(".scene"));

function sceneById(id) {
  return scenes.find(s => s.dataset.id === id);
}

function activeScene() {
  return scenes.find(s => s.classList.contains("is-active"));
}

/* assign real srcs the first time a world is needed */
function loadSceneAssets(world) {
  const state = worldState[world.id];
  if (state.loaded) return;
  state.loaded = true;

  const scene = sceneById(world.id);

  const bgImg = scene.querySelector(".scene__background-layer img");
  loadWithFallback(bgImg, [bgImg.dataset.src, bgImg.dataset.fallback], () => {
    bgImg.closest(".scene__layer").remove(); /* the painted CSS ground remains */
  });

  ["scene__character-layer", "scene__magic-layer"].forEach(cls => {
    const layer = scene.querySelector(`.${cls}`);
    if (!layer) return;
    const img = layer.querySelector("img");
    loadWithFallback(img, [img.dataset.src], () => layer.remove());
  });

  const whole = scene.querySelector(".scene__dessert-image--whole");
  const bitten = scene.querySelector(".scene__dessert-image--bitten");
  loadWithFallback(whole, [whole.dataset.src], () => scene.classList.add("scene--no-dessert"));
  loadWithFallback(bitten, [bitten.dataset.src], () => {
    scene.classList.add("scene--no-bitten");
    bitten.remove();
  });
}

/* dessert position and background framing are data-driven per breakpoint */
function applyResponsiveLayout() {
  const key = mobileLayout.matches ? "mobile" : "desktop";
  WORLDS.forEach(world => {
    const scene = sceneById(world.id);
    const layout = world.dessert.layout[key];
    const dessert = scene.querySelector(".scene__dessert");
    dessert.style.setProperty("--dessert-left", layout.left);
    dessert.style.setProperty("--dessert-top", layout.top);
    dessert.style.setProperty("--dessert-width", layout.width);
    scene.style.setProperty("--dessert-left", layout.left);
    scene.style.setProperty("--dessert-top", layout.top);
    if (world.backgroundPosition) {
      scene.style.setProperty("--bg-pos", world.backgroundPosition[key]);
    }
    world.hotspots.forEach(spot => {
      const btn = scene.querySelector(`.hotspot--${spot.key}`);
      const x = key === "mobile" && spot.mx !== undefined ? spot.mx : spot.x;
      const y = key === "mobile" && spot.my !== undefined ? spot.my : spot.y;
      btn.style.left = `${x}%`;
      btn.style.top = `${y}%`;
    });
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

/* Always prefer the custom dial artwork. The SVG face is used only if the PNG truly fails. */
function dialArtLoaded() {
  dial.classList.add("dial--loaded");
  dial.classList.remove("dial--noart");
}

function dialArtFailed() {
  dial.classList.remove("dial--loaded");
  dial.classList.add("dial--noart");
  console.warn("Could not load dessert dial:", dialArt.currentSrc || dialArt.src);
}

dialArt.addEventListener("load", dialArtLoaded);
dialArt.addEventListener("error", dialArtFailed);

if (dialArt.complete) {
  if (dialArt.naturalWidth > 0) dialArtLoaded();
  else dialArtFailed();
}

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
  btn.addEventListener("click", () => {
    const changingWorld = world.id !== currentId;
    selectWorld(world.id);

    if (mobileLayout.matches && changingWorld) {
      window.setTimeout(() => {
        stage.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
      }, 90);
    }
  });
  dial.appendChild(btn);
});

const sectorButtons = Array.from(dial.querySelectorAll(".dial__sector"));

/* --------------------------------------------------------------------------
   STRIP STATE — name, status, progress, reset
   -------------------------------------------------------------------------- */

const strip = document.getElementById("strip");
const stripName = document.getElementById("stripName");
const stripContext = document.getElementById("stripContext");
const stripLine = document.getElementById("stripLine");
const stripReflection = document.getElementById("stripReflection");
const stripAction = document.getElementById("stripAction");
const stripStatus = document.getElementById("stripStatus");
const stripDots = document.getElementById("stripDots");
const stripDotsLabel = document.getElementById("stripDotsLabel");
const beginAgainBtn = document.getElementById("beginAgain");
const biteHint = document.getElementById("biteHint");
const questGuide = document.getElementById("questGuide");
const questEyebrow = document.getElementById("questEyebrow");
const questText = document.getElementById("questText");
const questProgress = document.getElementById("questProgress");
const stageCta = document.getElementById("stageCta");
const stageWrap = document.querySelector(".stage-wrap");
const mobileFlow = document.getElementById("mobileFlow");
const responsiveFragment = document.getElementById("fragment");

function arrangeResponsiveInterface() {
  if (mobileLayout.matches) {
    /* Keep the selector visually attached to the collage instead of sending it
       to the bottom of the reading flow. The cards begin directly beneath it. */
    stageWrap.appendChild(dial);
    mobileFlow.append(questGuide, responsiveFragment, strip, stageCta);
  } else {
    stage.append(questGuide, responsiveFragment, strip, stageCta);
    stageWrap.appendChild(dial);
  }
}

arrangeResponsiveInterface();
mobileLayout.addEventListener("change", arrangeResponsiveInterface);

let statusTimer = null;
let questTimer = null;

function updateQuestGuide(world) {
  const state = worldState[world.id];

  if (!state.bitten || state.complete) {
    questGuide.hidden = true;
    questGuide.classList.remove("is-prominent", "is-compact");
  } else {
    questGuide.hidden = false;
    questEyebrow.textContent = "The world is open";
    questText.textContent = "Four fragments have awakened. Find the four glowing marks in the scene.";
    questProgress.textContent = `${state.explored.size} / 4 found`;
    if (!questGuide.classList.contains("is-prominent")) {
      questGuide.classList.add("is-compact");
    }
  }

  if (state.complete) {
    stageCta.hidden = false;
    requestAnimationFrame(() => stageCta.classList.add("is-visible"));
  } else {
    stageCta.classList.remove("is-visible");
    stageCta.hidden = true;
  }
}

function startQuestGuide(world, scene) {
  clearTimeout(questTimer);
  questGuide.hidden = false;
  questGuide.classList.remove("is-compact");
  questGuide.classList.add("is-prominent");
  questEyebrow.textContent = "The world is open";
  questText.textContent = "Four fragments have awakened. Find the four glowing marks in the scene.";
  questProgress.textContent = "0 / 4 found";
  scene.classList.add("is-guiding");

  questTimer = window.setTimeout(() => {
    questGuide.classList.remove("is-prominent");
    questGuide.classList.add("is-compact");
    scene.classList.remove("is-guiding");
  }, 6500);
}

function renderStrip(world) {
  const state = worldState[world.id];
  clearTimeout(statusTimer);

  stripContext.textContent = world.context;
  stripName.textContent = world.name;
  stripLine.textContent = world.shortLine;
  updateQuestGuide(world);

  const dots = Array.from(stripDots.children);
  dots.forEach((d, i) => d.classList.toggle("is-filled", i < state.explored.size));
  stripDotsLabel.textContent = state.bitten
    ? `${state.explored.size} of four fragments explored.`
    : "";

  beginAgainBtn.hidden = !state.bitten;
  stripReflection.hidden = !state.complete;
  stripReflection.textContent = state.complete ? world.reflection : "";

  if (!state.bitten) {
    stripAction.hidden = false;
    stripAction.textContent = "Take a bite";
    stripAction.dataset.mode = "bite";
    stripStatus.hidden = true;
    stripDots.hidden = true;
  } else if (!state.complete) {
    stripAction.hidden = true;
    stripStatus.hidden = false;
    stripStatus.textContent = HOTSPOT_INSTRUCTION;
    stripDots.hidden = false;
  } else {
    stripAction.hidden = true;
    stripAction.dataset.mode = "home";
    stripStatus.hidden = false;
    stripStatus.textContent = "All four fragments found.";
    stripDots.hidden = false;
  }
}

stripAction.addEventListener("click", () => {
  if (stripAction.dataset.mode === "home") openLeaf();
  else takeBite();
});

stageCta.addEventListener("click", openLeaf);

beginAgainBtn.addEventListener("click", () => {
  const world = worldById(currentId);
  const state = worldState[world.id];
  state.bitten = false;
  state.explored.clear();
  state.complete = false;
  state.completionPending = false;
  const scene = sceneById(world.id);
  scene.classList.remove("is-bitten-world", "is-complete");
  const dessert = scene.querySelector(".scene__dessert");
  if (dessert) dessert.classList.remove("is-bitten");
  scene.querySelectorAll(".hotspot").forEach(h => {
    h.classList.remove("is-explored", "is-open");
    h.setAttribute("aria-expanded", "false");
  });
  closeFragment(false, true);
  clearTimeout(questTimer);
  scene.classList.remove("is-guiding");
  questGuide.classList.remove("is-prominent", "is-compact");
  fragmentNext.hidden = true;
  renderStrip(world);
});

/* --------------------------------------------------------------------------
   STATE + TRANSITIONS
   -------------------------------------------------------------------------- */

let currentId = null;
let currentAngle = 0;      /* accumulated, so the handle takes the short way round */
let transitioning = false;
let queuedId = null;
let entered = false;
let settleTimer = null;
let hintTimer = null;

function worldById(id) {
  return WORLDS.find(w => w.id === id);
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

/* ambient life wakes only after the viewer stays */
function scheduleSettle() {
  clearTimeout(settleTimer);
  scenes.forEach(s => s.classList.remove("is-settled"));
  if (!entered) return;
  settleTimer = setTimeout(() => {
    const active = activeScene();
    if (active) active.classList.add("is-settled");
  }, 5000);
}

/* restore a world's stored session state onto its scene */
function applyWorldState(world) {
  const scene = sceneById(world.id);
  const state = worldState[world.id];
  const dessert = scene.querySelector(".scene__dessert");
  scene.classList.toggle("is-bitten-world", state.bitten);
  scene.classList.toggle("is-complete", state.complete);
  if (dessert) dessert.classList.toggle("is-bitten", state.bitten && !scene.classList.contains("scene--no-bitten"));
  scene.querySelectorAll(".hotspot").forEach(h => {
    h.classList.toggle("is-explored", state.explored.has(h.dataset.key));
  });
}

function selectWorld(id, instant = false) {
  if (id === currentId) return;
  if (transitioning) { queuedId = id; return; }

  const world = worldById(id);
  const prev = currentId ? worldById(currentId) : null;
  currentId = id;
  transitioning = true;

  closeFragment(false, true);
  clearTimeout(hintTimer);
  biteHint.classList.remove("is-visible");

  loadSceneAssets(world);
  applyWorldState(world);

  sectorButtons.forEach(b => b.setAttribute("aria-checked", String(b.dataset.id === id)));
  rotateHandle(world);

  const reduced = prefersReducedMotion.matches;
  const nextScene = sceneById(id);
  const prevScene = prev ? sceneById(prev.id) : null;

  if (instant || reduced || !prevScene) {
    if (prevScene) prevScene.classList.remove("is-active", "is-leaving");
    nextScene.classList.add("is-active");
    renderStrip(world);
    strip.classList.remove("is-hushed");
    transitioning = false;
    scheduleSettle();
    flushQueue();
    return;
  }

  /* Magical fold: the old world collapses toward the selector portal,
     then the new world unfolds from the same point. */
  strip.classList.add("is-hushed");
  prevScene.classList.remove("is-leaving");
  prevScene.classList.add("is-folding-out");
  nextScene.classList.add("is-active", "is-folding-in");
  stage.classList.add("is-ripping");

  setTimeout(() => {
    prevScene.classList.remove("is-active", "is-folding-out");
  }, 700);

  setTimeout(() => {
    renderStrip(world);
    strip.classList.remove("is-hushed");
  }, 920);

  setTimeout(() => {
    nextScene.classList.remove("is-folding-in");
    stage.classList.remove("is-ripping");
    transitioning = false;
    scheduleSettle();
    flushQueue();
  }, 1480);
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

/* keyboard: arrows turn the dial; Escape closes fragment, then overlay */
document.addEventListener("keydown", e => {
  if (!veil.hidden) {
    if (e.key === "Escape") closeLeaf();
    return;
  }
  if (e.key === "Escape" && !fragment.hidden) {
    closeFragment(true);
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
   CURSOR — slow parallax, patience, rare gestures
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

/* occasional rare movement: an ear, a bow, a ceremonial nod.
   WAAPI with composite:add so it layers over the idle drift. */
function rareGesture() {
  if (prefersReducedMotion.matches || !entered) return;
  const scene = activeScene();
  if (!scene || !scene.classList.contains("is-settled")) return;
  const target = scene.querySelector(
    Math.random() < 0.6 ? ".scene__character-layer img" : ".scene__magic-layer img"
  );
  if (!target) return;
  const tilt = (Math.random() * 1.6 - 0.8).toFixed(2);
  target.animate([
    { transform: "rotate(0deg) translateY(0px)" },
    { transform: `rotate(${tilt}deg) translateY(-2px)`, offset: 0.4 },
    { transform: "rotate(0deg) translateY(0px)" }
  ], { duration: 1800, easing: "ease-in-out", composite: "add" });
}

(function scheduleGesture() {
  setTimeout(() => { rareGesture(); scheduleGesture(); }, 8000 + Math.random() * 7000);
})();

/* the napoleon memory appears for the still viewer */
setInterval(() => {
  const scene = activeScene();
  if (!scene) return;
  const memory = scene.querySelector(".scene__layer--memory");
  if (!memory) return;
  const still = document.body.classList.contains("is-idle") && scene.classList.contains("is-settled");
  memory.style.setProperty("--layer-opacity", still ? "0.5" : "0");
}, 1200);

/* --------------------------------------------------------------------------
   THE BITE — the central action
   -------------------------------------------------------------------------- */

let biting = false;

function crumbBurst(scene, world, origin) {
  if (prefersReducedMotion.matches) return;

  const sceneRect = scene.getBoundingClientRect();
  const rect = origin.getBoundingClientRect();
  const originX = rect.left - sceneRect.left + rect.width * 0.62;
  const originY = rect.top - sceneRect.top + rect.height * 0.42;

  const count = 8;
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

    const angle = (Math.random() - 0.2) * Math.PI;
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

function finishBite(world, scene) {
  const state = worldState[world.id];
  state.bitten = true;
  scene.classList.add("is-bitten-world");
  renderStrip(world);
  startQuestGuide(world, scene);

  /* The lower caption echoes the instruction; the central guide makes the next action unmistakable. */
  stripStatus.textContent = HOTSPOT_INSTRUCTION;
}

function takeBite() {
  const world = worldById(currentId);
  const scene = activeScene();
  if (!world || !scene || biting || transitioning) return;
  const state = worldState[world.id];
  if (state.bitten) return;

  clearTimeout(hintTimer);
  biteHint.classList.remove("is-visible");

  const dessert = scene.querySelector(".scene__dessert");
  const hasDessert = dessert && !scene.classList.contains("scene--no-dessert");
  const hasBitten = hasDessert && !scene.classList.contains("scene--no-bitten");

  if (!hasDessert || prefersReducedMotion.matches) {
    if (hasBitten) dessert.classList.add("is-bitten");
    finishBite(world, scene);
    return;
  }

  biting = true;
  dessert.classList.add("is-biting");
  crumbBurst(scene, world, dessert);

  const pulse = scene.querySelector(".scene__pulse");
  pulse.classList.remove("is-pulsing");
  void pulse.offsetWidth;
  pulse.classList.add("is-pulsing");

  setTimeout(() => { if (hasBitten) dessert.classList.add("is-bitten"); }, 150);
  setTimeout(() => dessert.classList.remove("is-biting"), 420);
  setTimeout(() => {
    biting = false;
    finishBite(world, scene);
  }, 700);
}

/* --------------------------------------------------------------------------
   FRAGMENT PANEL — torn archival scraps for Sensation / Scene / Desire / Rule
   -------------------------------------------------------------------------- */

const fragment = document.getElementById("fragment");
const fragmentClose = document.getElementById("fragmentClose");
const fragmentKicker = document.getElementById("fragmentKicker");
const fragmentTitle = document.getElementById("fragmentTitle");
const fragmentSubtitle = document.getElementById("fragmentSubtitle");
const fragmentText = document.getElementById("fragmentText");
const fragmentNext = document.getElementById("fragmentNext");
const fragmentNextButton = document.getElementById("fragmentNextButton");
let fragmentSource = null; /* the hotspot that opened the panel */

function openFragment(world, spot, hotspotBtn) {
  if (transitioning) return;

  const state = worldState[world.id];
  const isNewFragment = !state.explored.has(spot.key);
  const isFourthFragment = isNewFragment && state.explored.size === 3 && !state.complete;

  fragmentKicker.textContent = world.name;
  fragmentTitle.textContent = spot.title;
  fragmentSubtitle.textContent = spot.subtitle;
  fragmentText.textContent = spot.text;
  fragmentNext.hidden = !(state.complete || isFourthFragment);

  fragment.classList.toggle("is-left", spot.x >= 50);
  fragment.classList.toggle("is-right", spot.x < 50);

  const scene = activeScene();
  scene.querySelectorAll(".hotspot").forEach(h => {
    h.classList.remove("is-open");
    h.setAttribute("aria-expanded", "false");
  });
  hotspotBtn.classList.add("is-open");
  hotspotBtn.setAttribute("aria-expanded", "true");
  fragmentSource = hotspotBtn;

  fragment.hidden = false;
  fragment.classList.add("is-entering");
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fragment.classList.remove("is-entering");
  }));

  if (isNewFragment) {
    state.explored.add(spot.key);
    hotspotBtn.classList.add("is-explored");
    clearTimeout(questTimer);
    activeScene()?.classList.remove("is-guiding");
    questGuide.classList.remove("is-prominent");
    questGuide.classList.add("is-compact");
    renderStrip(world);
  }

  if (isFourthFragment) {
    state.completionPending = false;
    fragmentNext.hidden = false;

    window.setTimeout(() => completeWorld(world), 180);

    if (mobileLayout.matches) {
      window.setTimeout(() => {
        fragment.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
        window.setTimeout(() => fragmentNextButton.focus({ preventScroll: true }), 420);
      }, prefersReducedMotion.matches ? 250 : 1750);
    } else {
      window.setTimeout(() => fragmentNextButton.focus({ preventScroll: true }), 420);
    }
    return;
  }

  fragmentClose.focus({ preventScroll: true });

  if (mobileLayout.matches) {
    window.setTimeout(() => {
      fragment.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }, 80);
  }
}

function closeFragment(returnFocus, suppressCompletion = false) {
  if (fragment.hidden) return;

  const closingWorld = currentId ? worldById(currentId) : null;
  fragment.hidden = true;

  if (fragmentSource) {
    fragmentSource.classList.remove("is-open");
    fragmentSource.setAttribute("aria-expanded", "false");
    if (returnFocus) fragmentSource.focus({ preventScroll: true });
  }
  fragmentSource = null;

  if (mobileLayout.matches) {
    window.setTimeout(() => {
      stage.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });
    }, 40);
  }

  if (!suppressCompletion && closingWorld) {
    const state = worldState[closingWorld.id];
    if (state.completionPending && !state.complete) {
      state.completionPending = false;
      window.setTimeout(() => completeWorld(closingWorld), 220);
    }
  }
}

fragmentClose.addEventListener("click", () => closeFragment(true));
fragmentNextButton.addEventListener("click", openLeaf);

/* --------------------------------------------------------------------------
   COMPLETION — the world connects
   -------------------------------------------------------------------------- */

function buildCompletionSpell(scene) {
  scene.querySelector(".completion-spell")?.remove();

  const spell = document.createElement("div");
  spell.className = "completion-spell";
  spell.setAttribute("aria-hidden", "true");

  const rings = Array.from({ length: 3 }, (_, index) =>
    `<span class="completion-spell__ring completion-spell__ring--${index + 1}"></span>`
  ).join("");

  const sparks = Array.from({ length: 14 }, (_, index) =>
    `<i class="completion-spell__spark" style="--spark-index:${index};--spark-delay:${(index % 5) * 45}ms"></i>`
  ).join("");

  spell.innerHTML = `${rings}<span class="completion-spell__core"></span>${sparks}`;
  scene.appendChild(spell);
  return spell;
}

function completeWorld(world) {
  const state = worldState[world.id];
  if (state.complete) return;

  state.complete = true;
  state.completionPending = false;

  const scene = sceneById(world.id);
  const dessert = scene.querySelector(".scene__dessert");
  scene.classList.add("is-complete");

  if (prefersReducedMotion.matches) {
    if (world.id === currentId) renderStrip(world);
    return;
  }

  const spell = buildCompletionSpell(scene);
  scene.classList.add("is-completing");
  dessert?.classList.add("is-completing");

  const magicImg = scene.querySelector(".scene__magic-layer img");
  if (magicImg) {
    magicImg.animate([
      { filter: "brightness(1)", opacity: 0.88 },
      { filter: "brightness(1.42) saturate(1.12)", opacity: 1, offset: 0.45 },
      { filter: "brightness(1)", opacity: 1 }
    ], { duration: 2300, easing: "ease-in-out" });
  }

  /* Reveal the final action after the magical gesture has become legible. */
  window.setTimeout(() => {
    if (world.id === currentId) renderStrip(world);
  }, 900);

  window.setTimeout(() => {
    scene.classList.remove("is-completing");
    dessert?.classList.remove("is-completing");
    spell.remove();
  }, 2500);
}

/* --------------------------------------------------------------------------
   LEAF OVERLAY — the Return, and the printable cultural recipe card
   -------------------------------------------------------------------------- */

const veil = document.getElementById("veil");
const leaf = document.getElementById("leaf");
const leafClose = document.getElementById("leafClose");
const leafDismiss = document.getElementById("leafDismiss");
const leafSave = document.getElementById("leafSave");
let lastFocused = null;

function setFigureImage(figure, img, world, altText) {
  figure.classList.remove("is-hidden");
  img.alt = altText;
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

  setFigureImage(
    document.getElementById("printFigure"),
    document.getElementById("printImage"),
    world,
    `${world.name} — printable cultural recipe card image`
  );
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

  setFigureImage(
    document.getElementById("leafFigure"),
    document.getElementById("leafImage"),
    world,
    `Illustrated recipe card for the ${world.name} world`
  );

  fillPrintCard(world);
  closeFragment(false, true);

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
}

leafClose.addEventListener("click", closeLeaf);
leafDismiss.addEventListener("click", closeLeaf);
leafSave.addEventListener("click", () => window.print());
veil.addEventListener("click", e => { if (e.target === veil) closeLeaf(); });

/* keep focus inside the leaf while it is open */
veil.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const focusables = leaf.querySelectorAll("button, a[href]");
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
  if (scene && !scene.classList.contains("scene--no-dessert") && !worldState[currentId].bitten) {
    clearTimeout(hintTimer);
    biteHint.classList.add("is-visible");
    hintTimer = setTimeout(() => biteHint.classList.remove("is-visible"), 5200);
  }

  const checked = sectorButtons.find(b => b.getAttribute("aria-checked") === "true");
  if (checked) checked.focus({ preventScroll: true });

  /* quietly prefetch the other worlds while the first is contemplated */
  setTimeout(() => {
    WORLDS.forEach(w => loadSceneAssets(w));
  }, 2500);
});

/* --------------------------------------------------------------------------
   BEGIN — in Combray, where all remembering starts
   -------------------------------------------------------------------------- */

selectWorld("madeleine", true);
