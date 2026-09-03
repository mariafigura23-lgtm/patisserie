/* ==========================================================================
   THE PATISSERIE OF THE UNCONSCIOUS
   Every dessert holds a story — and a desire.

   Sensation → Scene → Desire → Rule → Transformation → Return

   Each world is assembled from independent collage layers. The bite opens
   the dessert as a cultural form; four fragments awaken inside the scene;
   when the world is complete, its taste can be taken home as a recipe.
   ========================================================================== */

"use strict";

/* Arm the threshold entrance BEFORE the first paint so the staggered reveal
   has no visible flash. If reduced motion is preferred, or if any of this
   fails, the threshold simply stays fully visible (fail-safe). */
try {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.getElementById("threshold")?.classList.add("intro");
  }
} catch (e) { /* threshold stays visible */ }

/* --------------------------------------------------------------------------
   DATA — the dessert worlds (add more by appending to WORLDS + RU_WORLDS;
   the dial pager and DIAL_ORDER pick them up automatically)
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
      fallbackBackground: "assets/madeleine-background.jpg",
      dessertWhole: "assets/madeleine-whole.png",
      dessertBitten: "assets/madeleine-bitten.png",
      recipeImage: "assets/madeleine-recipe-card.jpg",
      magic: "assets/madeleine-magic.png",
      character: "assets/madeleine-rabbit.png",
    },
    dessert: {
      style: "plate",
      aspect: 1,
      layout: {
        desktop: { left: "50%", top: "56.5%", width: "34%" },
        mobile:  { left: "50%", top: "41.5%", width: "74%" }
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
    /* Madeleine alone opens an interactive two-page "Book of Taste"
       instead of the linear #leaf overlay. Journey + recipe-chapter text
       lives here (bilingual); the recipe chapters reuse world.steps by index. */
    book: {
      en: {
        journeyTitle: "A Cultural Journey of Memory",
        journeyIntro: "Follow four stops to discover how a local cake became one of the most famous symbols of memory.",
        journeyFinal: "A local cake had become a way of thinking about time.",
        stops: [
          {
            date: "c. 1750",
            name: "The Court Kitchen",
            place: "Commercy",
            paras: [
              "The origin of the madeleine is wrapped in legend. The history preserved in Commercy links the small shell-shaped cake to the kitchens of Stanislas around 1750, although its precise inventor remains unknown.",
              "One popular story gives the cake the name of a young servant, Madeleine, who prepared it when a royal dinner was left without dessert. Whether or not the scene happened exactly this way, the legend places the pastry between domestic knowledge and the theatre of the court."
            ]
          },
          {
            date: "1766 — early 19th century",
            name: "From Secret to Craft",
            place: "Commercy",
            paras: [
              "After Stanislas died in 1766, one of his pastry cooks is said to have settled in Commercy and carried the recipe into local trade.",
              "During the nineteenth century, the number of madeleine makers increased. The cake was no longer only a courtly curiosity: it became a town craft, produced by families of bakers and sold by the dozen.",
              "A recipe once surrounded by secrecy gradually became part of the identity of a place."
            ]
          },
          {
            date: "1852 — 1874",
            name: "The Railway Cake",
            place: "Paris — Commercy — Strasbourg",
            paras: [
              "The railway transformed the madeleine from a local speciality into a travelling object.",
              "The Paris–Strasbourg line reached Commercy in 1852. Later, vendors were officially allowed to sell boxes of madeleines on the station platform.",
              "During the short stop, the cakes were passed through open carriage windows. They travelled in wooden boxes, entered Parisian homes, and became an edible souvenir of modern movement.",
              "The madeleine was now not only baked in a place. It carried that place elsewhere."
            ]
          },
          {
            date: "1913",
            name: "Proust’s Madeleine",
            place: "Combray",
            paras: [
              "In the first volume of In Search of Lost Time, published in 1913, the narrator tastes a piece of madeleine softened in lime-blossom tea.",
              "The sensation does not produce an immediate explanation. First comes an intense, mysterious pleasure. Only afterwards does the forgotten world of Combray return: the house, the streets, the garden, the Sunday mornings and the rooms of childhood.",
              "The object was not inevitable. In early drafts, Proust experimented with toast and rusk before choosing the madeleine.",
              "Through this scene, a regional cake became a cultural metaphor for involuntary memory: the moment when the body remembers before the conscious mind knows what it has found."
            ]
          }
        ],
        recipeComplete: {
          title: "The taste is complete",
          text: "The madeleine needs only a few ingredients, but its cultural life was assembled over centuries."
        }
      },
      ru: {
        journeyTitle: "Культурное путешествие памяти",
        journeyIntro: "Пройдите четыре остановки и узнайте, как местное пирожное стало одним из главных символов памяти.",
        journeyFinal: "Местное пирожное стало способом размышлять о времени.",
        stops: [
          {
            date: "ок. 1750",
            name: "Придворная кухня",
            place: "Commercy",
            paras: [
              "Происхождение мадлен окутано легендами. История, которую сохраняет Коммерси, связывает маленькое пирожное в форме раковины с кухнями Станислава около 1750 года, хотя имя его настоящего создателя остаётся неизвестным.",
              "Одна из популярных легенд называет пирожное в честь молодой служанки Мадлен, которая приготовила его, когда королевский ужин неожиданно остался без десерта. Случилось ли всё именно так, неизвестно, но легенда помещает мадлен между домашним знанием и театром придворной жизни."
            ]
          },
          {
            date: "1766 — начало XIX века",
            name: "От секрета к ремеслу",
            place: "Commercy",
            paras: [
              "После смерти Станислава в 1766 году один из его кондитеров, согласно местной истории, поселился в Коммерси и перенёс рецепт в городскую торговлю.",
              "В XIX веке число производителей мадлен росло. Пирожное перестало быть только придворной диковинкой: оно стало городским ремеслом, которое сохраняли семьи пекарей и продавали уже не поштучно, а десятками.",
              "Рецепт, когда-то окружённый тайной, постепенно стал частью идентичности места."
            ]
          },
          {
            date: "1852 — 1874",
            name: "Пирожное железной дороги",
            place: "Paris — Commercy — Strasbourg",
            paras: [
              "Железная дорога превратила мадлен из местной специальности в путешествующий предмет.",
              "Линия Париж — Страсбург пришла в Коммерси в 1852 году. Позднее продавцам официально разрешили торговать коробками мадлен на вокзальной платформе.",
              "За несколько минут стоянки пирожные передавали пассажирам через открытые окна вагонов. Они путешествовали в деревянных коробках, попадали в парижские дома и становились съедобным сувениром современной мобильности.",
              "Теперь мадлен не просто выпекали в определённом месте. Она переносила это место с собой."
            ]
          },
          {
            date: "1913",
            name: "Мадлен Пруста",
            place: "Combray",
            paras: [
              "В первом томе романа «В поисках утраченного времени», опубликованном в 1913 году, рассказчик пробует кусочек мадлен, размягчённый в липовом чае.",
              "Ощущение не сразу превращается в объяснение. Сначала возникает сильное и загадочное удовольствие. И только затем возвращается забытый мир Комбре: дом, улицы, сад, воскресные утра и комнаты детства.",
              "Этот предмет возник не сразу. В ранних черновиках Пруст пробовал хлеб и сухарь, прежде чем остановился на мадлен.",
              "Благодаря этой сцене региональное пирожное стало культурной метафорой непроизвольной памяти: момента, когда тело вспоминает раньше, чем сознание понимает, что именно оно нашло."
            ]
          }
        ],
        recipeComplete: {
          title: "Вкус собран",
          text: "Для мадлен нужно всего несколько ингредиентов, но её культурная жизнь собиралась столетиями."
        }
      },
      /* five interactive chapters; each pulls its body from world.steps by index */
      chapters: [
        { steps: [0],    en: "Prepare the shells",  ru: "Подготовьте формы" },
        { steps: [1],    en: "Whisk the beginning", ru: "Взбейте основу" },
        { steps: [2, 3], en: "Add the aroma",       ru: "Добавьте аромат" },
        { steps: [4, 5], en: "Butter and waiting",  ru: "Масло и ожидание" },
        { steps: [6, 7], en: "Fill and bake",       ru: "Наполните и испеките" }
      ]
    },
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
      fallbackBackground: "assets/cannoli-background.jpg",
      dessertWhole: "assets/cannoli-whole.png",
      dessertBitten: "assets/cannoli-bitten.png",
      recipeImage: "assets/cannoli-recipe-card.jpg",
      magic: "assets/cannoli-magic.png",
      character: "assets/cannoli-rabbit.png",
    },
    dessert: {
      style: "cutout",
      aspect: 1.333,
      layout: {
        desktop: { left: "52%", top: "56.5%", width: "38%" },
        mobile:  { left: "52%", top: "40.5%", width: "77%" }
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
      fallbackBackground: "assets/napoleon-background.jpg",
      dessertWhole: "assets/napoleon-whole.png",
      dessertBitten: "assets/napoleon-bitten.png",
      recipeImage: "assets/napoleon-recipe-card.jpg",
      magic: "assets/napoleon-magic.png",
      character: "assets/napoleon-memory.png",
    },
    dessert: {
      style: "cutout",
      aspect: 1.75,
      front: true, /* the cake stands in front of the torn-paper table */
      layout: {
        desktop: { left: "50%", top: "56.5%", width: "41%" },
        mobile:  { left: "50%", top: "41.5%", width: "82%" }
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
    id: "tiramisu",
    name: "Tiramisu",
    objectNumber: "Object IV of IV",
    context: "Italy / the Veneto / the café and the family table",
    shortLine: "Coffee, cream, and the small courage to lift the day.",
    epigraph: "“Tirami sù — lift me up.”",
    epigraphSource: "From the Treviso dialect, the phrase that gave the cake its name.",
    vignette: "Bitter espresso soaks into soft sponge; cocoa dusts a pale, tender cream. Nothing here is grand. And yet the whole thing is designed to do one quiet, generous thing — to pick you up, to carry you gently from tiredness back into the pleasure of the afternoon.",
    history: "Tiramisù is young for a classic. Most accounts trace it to Treviso, in the Veneto, in the late 1960s and early 1970s — often to the kitchen of Le Beccherie, where mascarpone, espresso-soaked savoiardi, egg, sugar and cocoa were layered into something new. Its name comes from the local dialect — tirame sù, “pick me up” — and points to the coffee at its heart, a small revival meant to be shared. From a single northern town it travelled onto every Italian table and then across the world, becoming shorthand for a whole idea of Italian sweetness: unhurried, homemade, and warmly alive.",
    aftertaste: "The gentlest luxuries are the ones meant to be shared.",
    takeItHome: "Make something for someone who is tired — not to impress them, but simply to lift them. Let the small ritual of coffee and cream be the whole gift.",
    reflection: "Who in your life could use a little lifting — and how might a taste say it for you?",
    recipeTitle: "Classic Tiramisù",
    recipeNote: "The traditional Italian layered coffee dessert.",
    ingredients: [
      "4 egg yolks", "100 g sugar", "500 g mascarpone",
      "300 ml strong espresso, cooled", "200 g savoiardi (ladyfinger biscuits)",
      "2 tbsp cocoa powder", "a splash of Marsala or dark rum, optional"
    ],
    steps: [
      "Whisk the yolks and sugar until pale and thick.",
      "Fold in the mascarpone until smooth.",
      "Stir the cooled espresso (and Marsala, if using) in a shallow dish.",
      "Dip each ladyfinger briefly — soaked, not soggy.",
      "Line a dish with a layer of biscuits.",
      "Spread over half the mascarpone cream.",
      "Repeat with a second layer of biscuits and cream.",
      "Chill at least 4 hours, then dust generously with cocoa before serving."
    ],
    assets: {
      /* Placeholder scene ground until a tiramisù background is provided. */
      background: "assets/petit-four-background.jpg",
      fallbackBackground: "assets/petit-four-background.jpg",
      dessertWhole: "assets/tiramisu-whole.png",
      dessertBitten: "assets/tiramisu-bitten.png",
      recipeImage: "assets/tiramisu-whole.png",
    },
    dessert: {
      style: "cutout",
      aspect: 1.14,
      layout: {
        desktop: { left: "50%", top: "57%", width: "45%" },
        mobile:  { left: "50%", top: "42%", width: "90%" }
      }
    },
    layers: {},
    backgroundPosition: { desktop: "50% 50%", mobile: "50% 50%" },
    biteCrumbColor: "#caa877",
    hotspots: [
      {
        key: "sensation", x: 60, y: 58, mx: 58, my: 55,
        title: "Sensation", subtitle: "What the body feels.",
        text: "Bitter coffee, cool cream, the soft give of soaked sponge, and cocoa that catches at the back of the throat. Comfort and a small jolt of energy arrive in the same spoonful."
      },
      {
        key: "scene", x: 34, y: 34, mx: 33, my: 30,
        title: "Scene", subtitle: "What world appears.",
        text: "A late-morning café or a family table after lunch. Someone brings out a dish made the day before, and the afternoon slows down around it."
      },
      {
        key: "desire", x: 70, y: 26, mx: 69, my: 24,
        title: "Desire", subtitle: "What kind of life is being longed for.",
        text: "The longing is for ease shared with others — warmth, company, and a small pleasure that asks nothing in return except that you sit down and stay a while."
      },
      {
        key: "rule", x: 22, y: 62, mx: 20, my: 66,
        title: "Rule", subtitle: "What culture permits, postpones, or asks us to earn.",
        text: "Here pleasure is allowed to be everyday. Sweetness need not be earned or reserved for ceremony; it can simply be offered — a homemade kindness at the ordinary hour."
      }
    ],
    symbol: "coffee",
    cssClass: "scene--tiramisu"
  }
];

/* --------------------------------------------------------------------------
   LANGUAGE — one experience, expandable to any number of languages
   -------------------------------------------------------------------------- */

const UI = {
  "en": {
    "documentTitle": "The Patisserie of the Unconscious",
    "metaDescription": "Every dessert holds a story — and a desire. Choose a dessert, take a bite, discover the world it holds.",
    "mastheadEyebrow": "A Cultural Slow Web experience",
    "mastheadTitle": "The Patisserie of the Unconscious",
    "thresholdEyebrow": "A Cultural Slow Web experience",
    "thresholdTitle": "The Patisserie<br>of the Unconscious",
    "thresholdLead": "Every dessert holds a story — and a desire.",
    "thresholdBody1": "Taste begins in the body.<br>It gathers a scene, a longing, a rule, and a history.",
    "thresholdBody2": "Turn the dial to move between the dessert worlds.",
    "languagePrompt": "Choose the language of your visit",
    "enterEnglish": "Enter in English",
    "enterRussian": "Войти на русском",
    "enterPatisserie": "Enter the patisserie",
    "backToDessert": "Back to the dessert",
    "questEyebrow": "The world is open",
    "questText": "Four fragments have awakened. Find the four glowing marks in the scene.",
    "found": "found",
    "foundStatus": "Found",
    "hotspotInstruction": "Four fragments have awakened. Find the four glowing marks.",
    "takeBite": "Take a bite",
    "beginAgain": "Begin again",
    "allFound": "All four fragments found.",
    "explored": "of four fragments explored.",
    "allConnected": "All four fragments are connected.",
    "exploreStory": "Explore the cultural story",
    "exploreNote": "History · aftertaste · recipe",
    "bookCtaStory": "Open the Book of Taste",
    "bookCtaNote": "Cultural journey · recipe",
    "bookRecipeHeading": "Assemble the recipe",
    "bookTurnTitle": "Turn the page",
    "bookTurnNote": "The recipe (optional) →",
    "readMore": "Read more",
    "readLess": "Show less",
    "bookBack": "← The cultural journey",
    "bookProgress": "{n} of 5",
    "bookTakeHomeTitle": "Take the taste home",
    "bookTakeHomeNote": "Open the complete recipe",
    "bookStopAria": "Stop {n}: {name}",
    "bookStopLocked": "Read the previous stop first",
    "bookChapterAria": "Step {n} of 5: {title}",
    "bookChapterLocked": "Complete the previous step first",
    "journeyHint": "Open the first stop to begin.",
    "closeFragment": "Close fragment",
    "close": "Close",
    "returnText": "A taste returns through repetition.<br>Prepare it, serve it, change it, and allow it to enter another life.",
    "culturalVignette": "Cultural vignette",
    "shortHistory": "A short cultural history",
    "aftertaste": "Aftertaste",
    "takeItHome": "Take it home",
    "ingredients": "Ingredients",
    "method": "Method",
    "saveRecipe": "Take the recipe home",
    "saveHint": "Save as a printable cultural recipe card.",
    "hungry": "What were you really hungry for?",
    "projectBy": "a project by @fashamigura",
    "printProject": "The Patisserie of the Unconscious",
    "dialLabel": "Dessert world selector. Use the arrows, the arrow keys, or tap the dial to turn between worlds.",
    "dialAdvanceAria": "Turn to the next dessert world (currently {n} of {total})",
    "dialCue": "Turn to explore",
    "takeBiteAria": "Take a bite of the {name}",
    "sceneAlt": "Surreal archival collage for the {name} world: {line}",
    "dialWorldAria": "{name} — the {symbol}",
    "recipeImageAlt": "Illustrated recipe card for the {name} world",
    "printImageAlt": "{name} — printable cultural recipe card image",
    "symbols": {
      "shell": "shell",
      "spiral": "spiral",
      "cake": "layered cake",
      "flower": "flower",
      "coffee": "coffee bean"
    }
  },
  "ru": {
    "documentTitle": "Кондитерская бессознательного",
    "metaDescription": "Каждый десерт хранит историю — и желание. Выберите десерт, откусите кусочек и откройте мир, который он в себе несёт.",
    "mastheadEyebrow": "Культурный опыт медленного веба",
    "mastheadTitle": "Кондитерская бессознательного",
    "thresholdEyebrow": "Культурный опыт медленного веба",
    "thresholdTitle": "Кондитерская<br>бессознательного",
    "thresholdLead": "В каждом десерте скрыты история — и желание.",
    "thresholdBody1": "Вкус начинается в теле.<br>Он собирает вокруг себя сцену, стремление, правило и историю.",
    "thresholdBody2": "Поворачивайте диск, чтобы переходить между мирами десертов.",
    "languagePrompt": "Выберите язык посещения",
    "enterEnglish": "Enter in English",
    "enterRussian": "Войти на русском",
    "enterPatisserie": "Войти в кондитерскую",
    "backToDessert": "Вернуться к десерту",
    "questEyebrow": "Мир открыт",
    "questText": "Четыре фрагмента пробудились. Найдите четыре светящиеся метки в сцене.",
    "found": "найдено",
    "foundStatus": "Найдено",
    "hotspotInstruction": "Четыре фрагмента пробудились. Найдите четыре светящиеся метки.",
    "takeBite": "Откусить кусочек",
    "beginAgain": "Начать заново",
    "allFound": "Все четыре фрагмента найдены.",
    "explored": "фрагментов исследовано.",
    "allConnected": "Все четыре фрагмента соединились.",
    "exploreStory": "Открыть культурную историю",
    "exploreNote": "История · послевкусие · рецепт",
    "bookCtaStory": "Открыть книгу вкуса",
    "bookCtaNote": "Культурное путешествие · рецепт",
    "bookRecipeHeading": "Соберите рецепт",
    "bookTurnTitle": "Перевернуть страницу",
    "bookTurnNote": "Рецепт (по желанию) →",
    "readMore": "Читать дальше",
    "readLess": "Свернуть",
    "bookBack": "← Культурное путешествие",
    "bookProgress": "{n} из 5",
    "bookTakeHomeTitle": "Забрать вкус с собой",
    "bookTakeHomeNote": "Открыть полный рецепт",
    "bookStopAria": "Остановка {n}: {name}",
    "bookStopLocked": "Сначала прочитайте предыдущую остановку",
    "bookChapterAria": "Этап {n} из 5: {title}",
    "bookChapterLocked": "Сначала завершите предыдущий этап",
    "journeyHint": "Откройте первую остановку, чтобы начать.",
    "closeFragment": "Закрыть фрагмент",
    "close": "Закрыть",
    "returnText": "Вкус возвращается через повторение.<br>Приготовьте его, подайте, измените — и позвольте ему войти в другую жизнь.",
    "culturalVignette": "Культурная сцена",
    "shortHistory": "Краткая культурная история",
    "aftertaste": "Послевкусие",
    "takeItHome": "Забрать с собой",
    "ingredients": "Ингредиенты",
    "method": "Приготовление",
    "saveRecipe": "Забрать рецепт",
    "saveHint": "Сохраните как печатную культурную карточку-рецепт.",
    "hungry": "Чего вам на самом деле хотелось?",
    "projectBy": "проект @fashamigura",
    "printProject": "Кондитерская бессознательного",
    "dialLabel": "Выбор мира десерта. Листайте стрелками, клавишами или нажмите на диск, чтобы перейти к следующему миру.",
    "dialAdvanceAria": "Перейти к следующему миру десерта (сейчас {n} из {total})",
    "dialCue": "Листайте миры",
    "takeBiteAria": "Откусить кусочек десерта «{name}»",
    "sceneAlt": "Сюрреалистический архивный коллаж мира «{name}»: {line}",
    "dialWorldAria": "{name} — символ «{symbol}»",
    "recipeImageAlt": "Иллюстрированная карточка-рецепт мира «{name}»",
    "printImageAlt": "{name} — изображение для печатной культурной карточки-рецепта",
    "symbols": {
      "shell": "раковина",
      "spiral": "спираль",
      "cake": "слоёный торт",
      "flower": "цветок",
      "coffee": "кофейное зерно"
    }
  }
};
const RU_WORLDS = {
  "madeleine": {
    "name": "Мадлен",
    "objectNumber": "Объект I из IV",
    "context": "Комбре / Франция / возвращение утраченного времени",
    "shortLine": "Вкус тихо ждёт, когда прошлое вернётся.",
    "epigraph": "«Сначала приходит вкус. Следом — утраченная комната.»",
    "epigraphSource": "Авторский эпиграф, вдохновлённый прустовской непроизвольной памятью.",
    "vignette": "Пирожное касается чая раньше, чем губ. Вкус приходит без объяснений — и внезапно возвращается целая комната: её окна, тишина, ткани и забытый свет. Десерт не просто сопровождает воспоминание. Он открывает его.",
    "history": "Мадлен начиналась как скромное бисквитное пирожное из Коммерси в Лотарингии — в форме морской раковины, продававшееся на вокзалах и помещавшееся в кармане пальто. В 1913 году Марсель Пруст обмакнул мадленку в липовый чай на первых страницах романа «В поисках утраченного времени», и маленькое пирожное стало самым знаменитым вкусом модернистской литературы: доказательством того, что целый исчезнувший мир может храниться внутри вкуса, дожидаясь, пока тело вспомнит то, что разум давно убрал в архив.",
    "aftertaste": "Память хранит то, что забывает биография.",
    "takeItHome": "Заварите чай и уберите телефон. Попробуйте вспомнить не событие, а атмосферу места: его свет, запах, фактуру и время суток.",
    "reflection": "В какую часть своей жизни вы бы вернулись через вкус?",
    "recipeTitle": "Классические мадлен",
    "recipeNote": "Классический домашний рецепт.",
    "ingredients": [
      "2 крупных яйца",
      "100 г сахара",
      "1 ч. л. ванильного экстракта",
      "120 г пшеничной муки",
      "1 ч. л. разрыхлителя",
      "100 г растопленного сливочного масла",
      "1 ст. л. молока",
      "цедра 1 лимона",
      "щепотка соли"
    ],
    "steps": [
      "Разогрейте духовку до 190°C и смажьте форму для мадлен.",
      "Взбейте яйца с сахаром до светлой пышной массы.",
      "Добавьте ваниль, лимонную цедру, молоко и соль.",
      "Аккуратно вмешайте муку с разрыхлителем.",
      "Добавьте растопленное масло.",
      "Оставьте тесто на 20–30 минут.",
      "Заполните формы примерно на три четверти.",
      "Выпекайте 9–11 минут до лёгкой золотистости."
    ],
    "hotspots": {
      "sensation": {
        "title": "Ощущение",
        "subtitle": "Что чувствует тело.",
        "text": "Тёплый чай, мягкое пирожное, сливочное масло и текстура, которая растворяется почти раньше, чем её удаётся назвать. Тело узнаёт что-то прежде, чем разум понимает, почему это важно."
      },
      "scene": {
        "title": "Атмосфера",
        "subtitle": "Какой мир возникает.",
        "text": "Возвращается комната: свет на ткани, тишина, знакомый стол, атмосфера времени, которое казалось утраченным. Вкус восстанавливает не отдельный факт. Он возвращает целый мир."
      },
      "desire": {
        "title": "Желание",
        "subtitle": "О какой жизни мы тоскуем.",
        "text": "Это желание не просто вспомнить. Это стремление вернуть непрерывность — почувствовать, что прежнее и нынешнее «я» всё ещё принадлежат одной жизни."
      },
      "rule": {
        "title": "Негласное правило",
        "subtitle": "Что культура разрешает, откладывает или требует заслужить.",
        "text": "Взрослое время должно двигаться только вперёд. Прошлое считается завершённым, а личное чувство обязано подчиняться хронологии, дисциплине и объяснению. Вкус на мгновение нарушает этот порядок."
      }
    }
  },
  "cannoli": {
    "name": "Канноли",
    "objectNumber": "Объект II из IV",
    "context": "Сицилия / dolce vita / dolce far niente",
    "shortLine": "Маленькому удовольствию не нужен большой повод.",
    "epigraph": "«Даже воздержание умеет изобретать сладость.»",
    "epigraphSource": "Авторский эпиграф.",
    "vignette": "Внутри мира правил кто-то готовит сладость, почти граничащую с излишеством. Хрустящее тесто удерживает нежную рикотту, цитрус, сахар и терпение. Воздержание и удовольствие не всегда противоположны. Иногда одно тайно производит другое.",
    "history": "Сицилия узнала сахар в арабские века и доверила его самым неожиданным хранительницам — монастырям. За решётками и обетами монахини стали великими кондитерами острова: продавали канноли, кассату и марципановые фрукты через поворотные окошки, чтобы содержать свои обители. Хрустящая трубочка со сладкой рикоттой когда-то была карнавальной роскошью; она сохранилась потому, что дисциплинированные руки довели её до совершенства. В одном жареном цилиндре теста сложен целый социальный порядок — благочестие, затворничество и аппетит.",
    "aftertaste": "Даже воздержание умеет изобретать сладость.",
    "takeItHome": "Сделайте что-нибудь красивое, не дожидаясь особого случая. Позвольте удовольствию существовать, не превращая его в награду.",
    "reflection": "Какое маленькое удовольствие вы откладывали до тех пор, пока жизнь не станет менее занятой?",
    "recipeTitle": "Простые канноли с рикоттой",
    "recipeNote": "Упрощённая домашняя версия с готовыми трубочками.",
    "ingredients": [
      "8 готовых трубочек для канноли",
      "300 г рикотты",
      "80 г сахарной пудры",
      "1 ч. л. ванильного экстракта",
      "цедра 1 апельсина или лимона",
      "40 г рубленых фисташек или тёмного шоколада",
      "ещё немного сахарной пудры"
    ],
    "steps": [
      "При необходимости дайте рикотте стечь.",
      "Смешайте рикотту, сахарную пудру, ваниль и цитрусовую цедру.",
      "Добавьте фисташки или шоколад.",
      "Охладите начинку 20–30 минут.",
      "Наполните трубочки незадолго до подачи.",
      "Слегка присыпьте сахарной пудрой."
    ],
    "hotspots": {
      "sensation": {
        "title": "Ощущение",
        "subtitle": "Что чувствует тело.",
        "text": "Хрупкая оболочка раскалывается и открывает прохладную рикотту, цитрус, сахар и фисташку. Удовольствие краткое и концентрированное — оно требует внимания к настоящему моменту."
      },
      "scene": {
        "title": "Атмосфера",
        "subtitle": "Какой мир возникает.",
        "text": "Небольшая сицилийская кондитерская, эспрессо, солнечный свет и пауза посреди обычного дня. Ничего грандиозного не происходит. Жизнь просто становится хорошей на несколько минут."
      },
      "desire": {
        "title": "Желание",
        "subtitle": "О какой жизни мы тоскуем.",
        "text": "Это желание не безграничного изобилия, а разрешения наслаждаться жизнью до того, как закончены все дела, — почувствовать, что уже этого мгновения достаточно."
      },
      "rule": {
        "title": "Негласное правило",
        "subtitle": "Что культура разрешает, откладывает или требует заслужить.",
        "text": "Удовольствие часто откладывают до окончания работы, достижения успеха или наступления особого случая. Канноло предлагает другой ритм: маленькая радость может принадлежать обычному времени."
      }
    }
  },
  "napoleon": {
    "name": "Наполеон",
    "objectNumber": "Объект III из IV",
    "context": "Позднесоветская семейная кухня / домашний праздник",
    "shortLine": "Завтра становится праздником, потому что кто-то начинает готовить сегодня.",
    "epigraph": "«Счастье тоже можно собрать слой за слоем.»",
    "epigraphSource": "Авторский эпиграф.",
    "vignette": "На торт уходят часы. Коржи раскатывают, выпекают, остужают, промазывают кремом и оставляют на ночь, чтобы отдельные слои стали одним целым. В домашней культуре дефицита праздник часто делали своими руками. Сладость приходила не как лёгкость, а как усилие, превращённое в торжество.",
    "history": "По легенде, история торта начинается в 1912 году, когда московские кондитеры к столетию победы над Наполеоном нарезали мильфей треугольниками, напоминавшими треуголку. В советской кухне он стал чем-то другим — праздником, который нужно было построить. За маслом стояли в очередях, коржи раскатывали поздно ночью, а рецепт переходил в рукописных тетрадях от матери к дочери и от соседки к соседке. Оставленные до утра строгие слои размягчались и превращались в нежное целое — дефицит, терпение и любовь, спрессованные в одном куске.",
    "aftertaste": "Иногда любовь измеряется количеством слоёв.",
    "takeItHome": "Создайте один праздник своими руками. Не потому, что это эффективно, а потому, что медленное приготовление само может стать событием.",
    "reflection": "Чей труд когда-то заставлял праздник казаться возникшим без усилий?",
    "recipeTitle": "Домашний торт «Наполеон»",
    "recipeNote": "Домашняя адаптация на основе готового слоёного теста.",
    "ingredients": [
      "500 г слоёного теста",
      "500 мл молока",
      "3 яичных желтка",
      "120 г сахара",
      "40 г кукурузного крахмала",
      "1 ч. л. ванильного экстракта",
      "150 г сливочного масла",
      "щепотка соли"
    ],
    "steps": [
      "Испеките слоёное тесто тонкими пластами до золотистого цвета.",
      "Нагрейте большую часть молока.",
      "Взбейте желтки с сахаром, крахмалом, солью и оставшимся молоком.",
      "Постепенно влейте тёплое молоко.",
      "Готовьте на слабом огне до загустения.",
      "Добавьте ваниль и немного остудите.",
      "Вмешайте сливочное масло.",
      "Чередуйте слои теста и крема.",
      "Покройте торт крошкой из коржей.",
      "Оставьте в холодильнике на ночь."
    ],
    "hotspots": {
      "sensation": {
        "title": "Ощущение",
        "subtitle": "Что чувствует тело.",
        "text": "Крем размягчает слои, крошки осыпаются, а плотная сладость связана с ожиданием. Во вкусе уже заключено время: прежде чем стать готовым, торт должен настояться."
      },
      "scene": {
        "title": "Атмосфера",
        "subtitle": "Какой мир возникает.",
        "text": "Вечерняя кухня накануне дня рождения или праздника. Кто-то раскатывает коржи, варит крем и оставляет собранный торт до завтра."
      },
      "desire": {
        "title": "Желание",
        "subtitle": "О какой жизни мы тоскуем.",
        "text": "Это желание заботы, ставшей видимой через усилие: дома, непрерывности, семейной близости, изобилия и обещания, что завтра будет особенным."
      },
      "rule": {
        "title": "Негласное правило",
        "subtitle": "Что культура разрешает, откладывает или требует заслужить.",
        "text": "Удовольствие нужно приготовить, заслужить и отложить. В культуре, сформированной дефицитом, роскошь нельзя просто купить — её терпеливо собирают домашним трудом."
      }
    }
  },
  "tiramisu": {
    "name": "Тирамису",
    "objectNumber": "Объект IV из IV",
    "context": "Италия / Венето / кофейня и семейный стол",
    "shortLine": "Кофе, крем и тихая смелость приподнять уходящий день.",
    "epigraph": "«Tirami sù — подними меня».",
    "epigraphSource": "Из тревизского диалекта — фраза, давшая десерту имя.",
    "vignette": "Горький эспрессо пропитывает мягкий бисквит; какао ложится на бледный нежный крем. Здесь нет ничего парадного. И всё же весь этот десерт создан ради одного тихого и щедрого жеста — приподнять вас, мягко перенести от усталости обратно к радости неспешного дня.",
    "history": "Для классики тирамису удивительно молодо. Чаще всего его происхождение относят к Тревизо в области Венето, к концу 1960-х — началу 1970-х годов, и нередко — к кухне ресторана Le Beccherie, где маскарпоне, савоярди в эспрессо, яйца, сахар и какао впервые сложились в новый десерт. Название пришло из местного диалекта — tirame sù, «подними меня», — и указывает на кофе в его сердце: маленькое возвращение сил, которым принято делиться. Из одного северного городка тирамису разошлось по всем итальянским столам, а затем и по миру, став олицетворением целой идеи итальянской сладости — неспешной, домашней и по-настоящему живой.",
    "aftertaste": "Самая нежная роскошь — та, которой хочется поделиться.",
    "takeItHome": "Приготовьте что-нибудь для того, кто устал, — не чтобы впечатлить, а чтобы приподнять. Пусть маленький ритуал кофе и крема станет самим подарком.",
    "reflection": "Кому в вашей жизни сейчас нужна поддержка — и мог бы вкус сказать об этом за вас?",
    "recipeTitle": "Классическое тирамису",
    "recipeNote": "Традиционный итальянский слоёный кофейный десерт.",
    "ingredients": [
      "4 яичных желтка",
      "100 г сахара",
      "500 г маскарпоне",
      "300 мл крепкого эспрессо, охлаждённого",
      "200 г савоярди (печенья «дамские пальчики»)",
      "2 ст. л. какао-порошка",
      "немного марсалы или тёмного рома по желанию"
    ],
    "steps": [
      "Взбейте желтки с сахаром до светлой густой массы.",
      "Вмешайте маскарпоне до гладкости.",
      "В неглубокой посуде соедините остывший эспрессо (и марсалу, если используете).",
      "Быстро окунайте каждое печенье — оно должно пропитаться, но не размокнуть.",
      "Выложите дно формы слоем савоярди.",
      "Распределите сверху половину крема из маскарпоне.",
      "Повторите второй слой печенья и крема.",
      "Охладите не меньше 4 часов, а перед подачей щедро посыпьте какао."
    ],
    "hotspots": {
      "sensation": {
        "title": "Ощущение",
        "subtitle": "Что чувствует тело.",
        "text": "Горечь кофе, прохлада крема, мягкая податливость пропитанного бисквита и какао, что чуть цепляет горло. Утешение и лёгкий прилив сил приходят в одной и той же ложке."
      },
      "scene": {
        "title": "Атмосфера",
        "subtitle": "Какой мир возникает.",
        "text": "Позднее утро в кофейне или семейный стол после обеда. Кто-то выносит десерт, приготовленный ещё накануне, — и день вокруг него замедляется."
      },
      "desire": {
        "title": "Желание",
        "subtitle": "О какой жизни мы тоскуем.",
        "text": "Это тоска по лёгкости, разделённой с другими, — по теплу, компании и маленькой радости, которая не требует ничего, кроме одного: сядь и побудь ещё немного."
      },
      "rule": {
        "title": "Негласное правило",
        "subtitle": "Что культура разрешает, откладывает или требует заслужить.",
        "text": "Здесь удовольствию позволено быть будничным. Сладость не нужно заслуживать или беречь для особого случая — её можно просто предложить: домашняя забота в самый обыкновенный час."
      }
    }
  }
};

/* Safari and privacy-restricted browsers may throw when localStorage is read.
   Language selection must never block the entrance buttons, so storage is optional. */
function readSavedLanguage() {
  try {
    return window.localStorage.getItem("patisserie-language");
  } catch (error) {
    console.warn("Language preference storage is unavailable; continuing without it.", error);
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("patisserie-language", language);
  } catch (error) {
    console.warn("Could not save language preference; the current visit will still work.", error);
  }
}

const storedLanguage = readSavedLanguage();
let currentLang = storedLanguage === "ru" || storedLanguage === "en"
  ? storedLanguage
  : (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";

function ui(key) {
  return UI[currentLang]?.[key] ?? UI.en[key] ?? key;
}

function interpolate(template, values) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function worldText(world, field) {
  return currentLang === "ru" ? (RU_WORLDS[world.id]?.[field] ?? world[field]) : world[field];
}

function worldList(world, field) {
  return currentLang === "ru" ? (RU_WORLDS[world.id]?.[field] ?? world[field]) : world[field];
}

function spotText(world, spot, field) {
  return currentLang === "ru"
    ? (RU_WORLDS[world.id]?.hotspots?.[spot.key]?.[field] ?? spot[field])
    : spot[field];
}


/* order the dial pages through the worlds — derived from WORLDS so new
   dessert worlds appear automatically, with no fixed count. */
const DIAL_ORDER = WORLDS.map(w => w.id);



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
  tiramisu: [
    { cls: "particle--rise", x: 98, y: 56, r: 0.7, color: "#d8b06a", dur: 15, delay: 0, peak: 0.6, dx: -4, dy: -13 },
    { cls: "particle--rise", x: 106, y: 48, r: 0.6, color: "#c69a5e", dur: 18, delay: 4, peak: 0.5, dx: -3, dy: -11 },
    { cls: "particle--rise", x: 90, y: 50, r: 0.65, color: "#d8b06a", dur: 20, delay: 8, peak: 0.5, dx: 3, dy: -12 },
    { cls: "particle--rise", x: 62, y: 52, r: 0.6, color: "#c69a5e", dur: 17, delay: 2, peak: 0.5, dx: 4, dy: -12 },
    { cls: "particle--twinkle", x: 78, y: 16, r: 0.75, color: "#e8c87f", dur: 9, delay: 3, peak: 0.55 }
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
  bgImg.alt = interpolate(ui("sceneAlt"), { name: worldText(world, "name"), line: worldText(world, "shortLine") });
  bgImg.draggable = false;
  bgImg.dataset.src = world.assets.background;
  bgImg.dataset.fallback = world.assets.fallbackBackground;
  bgLayer.appendChild(bgImg);
  scene.appendChild(bgLayer);

  /* 2 · character or memory fragment (optional) */
  if (world.layers && world.layers.character) {
    scene.appendChild(buildPositionedLayer("scene__character-layer", world.layers.character, world, "character"));
  }

  /* 3 · main magical overlay (optional) */
  if (world.layers && world.layers.magic) {
    scene.appendChild(buildPositionedLayer("scene__magic-layer", world.layers.magic, world, "magic"));
  }

  /* 4 · the dessert — whole and bitten stacked on one plate */
  const dessert = document.createElement("button");
  dessert.type = "button";
  dessert.className = `scene__dessert scene__dessert--${world.dessert.style}`;
  dessert.setAttribute("aria-label", interpolate(ui("takeBiteAria"), { name: worldText(world, "name") }));
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
    btn.setAttribute("aria-label", `${spotText(world, spot, "title")} — ${spotText(world, spot, "subtitle")}`);
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `
      <span class="hotspot__ring" aria-hidden="true"></span>
      <span class="hotspot__dot" aria-hidden="true"></span>
      <span class="hotspot__label" aria-hidden="true">${spotText(world, spot, "title")}</span>`;
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
  const whole = scene.querySelector(".scene__dessert-image--whole");
  const bitten = scene.querySelector(".scene__dessert-image--bitten");

  /* Load only what must be visible first. This avoids a blank dessert while
     decorative collage layers compete for bandwidth. */
  if (bgImg) {
    bgImg.decoding = "async";
    if (world.id === "madeleine") bgImg.fetchPriority = "high";
    loadWithFallback(bgImg, [bgImg.dataset.src, bgImg.dataset.fallback], () => {
      bgImg.closest(".scene__layer")?.remove();
    });
  }

  if (whole) {
    whole.decoding = "async";
    if (world.id === "madeleine") whole.fetchPriority = "high";
    loadWithFallback(whole, [whole.dataset.src], () => scene.classList.add("scene--no-dessert"));
  }

  const loadSecondary = () => {
    ["scene__character-layer", "scene__magic-layer"].forEach(cls => {
      const layer = scene.querySelector(`.${cls}`);
      if (!layer) return;
      const img = layer.querySelector("img");
      if (!img) return;
      img.decoding = "async";
      loadWithFallback(img, [img.dataset.src], () => layer.remove());
    });

    if (bitten) {
      bitten.decoding = "async";
      loadWithFallback(bitten, [bitten.dataset.src], () => {
        scene.classList.add("scene--no-bitten");
        bitten.remove();
      });
    }
  };

  window.setTimeout(loadSecondary, 90);
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
const worldGateway = document.getElementById("worldGateway");
let gatewayTimer = null;

function playWorldGateway() {
  if (!worldGateway || prefersReducedMotion.matches) return;
  clearTimeout(gatewayTimer);

  worldGateway.classList.remove("is-active");
  document.body.classList.add("is-world-gateway-active");
  dial.classList.add("is-gateway-hidden");
  dial.setAttribute("aria-hidden", "true");
  dial.style.setProperty("display", "none", "important");

  void worldGateway.offsetWidth;
  worldGateway.classList.add("is-active");

  gatewayTimer = window.setTimeout(() => {
    worldGateway.classList.remove("is-active");
    dial.style.removeProperty("display");
    dial.classList.remove("is-gateway-hidden");
    dial.removeAttribute("aria-hidden");
    document.body.classList.remove("is-world-gateway-active");
  }, 1120);
}

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

/* The dial is a pager now: tapping the face turns to the next world, and the
   chevrons step either way. This scales to any number of dessert worlds. */
const dialAdvance = document.getElementById("dialAdvance");
const dialPrev = document.getElementById("dialPrev");
const dialNext = document.getElementById("dialNext");
const dialPos = document.getElementById("dialPos");
const dialCue = document.getElementById("dialCue");

function turnDial(direction) {
  const changingWorld = DIAL_ORDER.length > 1;
  step(direction);
  if (mobileLayout.matches && changingWorld) {
    window.setTimeout(() => {
      stage.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }, 90);
  }
}

dialAdvance.addEventListener("click", () => turnDial(1));
dialNext.addEventListener("click", e => { e.stopPropagation(); turnDial(1); });
dialPrev.addEventListener("click", e => { e.stopPropagation(); turnDial(-1); });

/* keep the little "n / N" position readout in sync */
function updateDialPos() {
  const idx = DIAL_ORDER.indexOf(currentId);
  if (idx >= 0 && dialPos) dialPos.textContent = `${idx + 1} / ${DIAL_ORDER.length}`;
  if (dialAdvance) {
    dialAdvance.setAttribute(
      "aria-label",
      interpolate(ui("dialAdvanceAria"), { n: idx + 1, total: DIAL_ORDER.length })
    );
  }
}

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
const stripState = document.querySelector(".strip__state");
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
    mobileFlow.append(strip, questGuide, responsiveFragment, stageCta);
  } else {
    stage.append(questGuide, responsiveFragment, strip, stageCta);
    stageWrap.appendChild(dial);
  }
}

arrangeResponsiveInterface();
mobileLayout.addEventListener("change", arrangeResponsiveInterface);

let statusTimer = null;
let questTimer = null;

/* Madeleine's completion button opens the Book of Taste; the others open
   the linear cultural story. Both the stage CTA and the fragment CTA share
   these labels. */
function applyStoryCtaLabels() {
  const isBook = currentId === "madeleine";
  const title = isBook ? ui("bookCtaStory") : ui("exploreStory");
  const note = isBook ? ui("bookCtaNote") : ui("exploreNote");
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  set("stageCtaTitle", title);
  set("stageCtaNote", note);
  set("fragmentNextTitle", title);
  set("fragmentNextNote", note);
}

function updateQuestGuide(world) {
  const state = worldState[world.id];
  applyStoryCtaLabels();

  if (!state.bitten || state.complete) {
    questGuide.hidden = true;
    questGuide.classList.remove("is-prominent", "is-compact");
  } else {
    questGuide.hidden = false;
    questEyebrow.textContent = ui("questEyebrow");
    questText.textContent = ui("questText");
    questProgress.textContent = `${ui("foundStatus")}: ${state.explored.size} / 4`;
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
  questEyebrow.textContent = ui("questEyebrow");
  questText.textContent = ui("questText");
  questProgress.textContent = `${ui("foundStatus")}: 0 / 4`;
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

  stripContext.textContent = worldText(world, "context");
  stripName.textContent = worldText(world, "name");
  stripLine.textContent = worldText(world, "shortLine");
  updateQuestGuide(world);

  const dots = Array.from(stripDots.children);
  dots.forEach((d, i) => d.classList.toggle("is-filled", i < state.explored.size));
  stripDotsLabel.textContent = state.bitten
    ? currentLang === "ru" ? `Исследовано фрагментов: ${state.explored.size} из 4.` : `${state.explored.size} of four fragments explored.`
    : "";

  beginAgainBtn.hidden = !state.bitten;
  stripReflection.hidden = !state.complete;
  stripReflection.textContent = state.complete ? worldText(world, "reflection") : "";

  if (!state.bitten) {
    stripState.hidden = true;
    stripAction.hidden = true;
    stripAction.textContent = ui("takeBite");
    stripAction.dataset.mode = "bite";
    stripStatus.hidden = true;
    stripDots.hidden = true;
  } else if (!state.complete) {
    stripState.hidden = false;
    stripAction.hidden = true;
    stripStatus.hidden = false;
    stripStatus.textContent = ui("hotspotInstruction");
    stripDots.hidden = false;
  } else {
    stripState.hidden = false;
    stripAction.hidden = true;
    stripAction.dataset.mode = "home";
    stripStatus.hidden = false;
    stripStatus.textContent = ui("allFound");
    stripDots.hidden = false;
  }
}

stripAction.addEventListener("click", () => {
  if (stripAction.dataset.mode === "home") openStory();
  else takeBite();
});

stageCta.addEventListener("click", openStory);

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
  /* a fresh Madeleine visit also restarts its Book of Taste */
  if (world.id === "madeleine") {
    if (!book.hidden) closeBook();
    bookState = null;
  }
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
  /* index-based: the handle steps one notch per world, so the dial reads as a
     rotor you turn — for any number of worlds, not a fixed four. */
  const idx = Math.max(0, DIAL_ORDER.indexOf(world.id));
  const target = (idx * 360) / Math.max(1, DIAL_ORDER.length);
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

function showBitePrompt(world) {
  clearTimeout(hintTimer);
  const shouldShow = entered && world && !worldState[world.id].bitten;
  biteHint.classList.toggle("is-visible", Boolean(shouldShow));
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

  updateDialPos();
  rotateHandle(world);

  const reduced = prefersReducedMotion.matches;
  const nextScene = sceneById(id);
  const prevScene = prev ? sceneById(prev.id) : null;

  if (instant || reduced || !prevScene) {
    if (prevScene) prevScene.classList.remove("is-active", "is-leaving");
    nextScene.classList.add("is-active");
    renderStrip(world);
    strip.classList.remove("is-hushed");
    showBitePrompt(world);
    transitioning = false;
    scheduleSettle();
    flushQueue();
    return;
  }

  /* The dial becomes a full-screen magical hinge while the scenes dissolve
     through light. The working selector itself stays anchored in place. */
  strip.classList.add("is-hushed");
  playWorldGateway();
  prevScene.classList.remove("is-leaving", "is-folding-out");
  nextScene.classList.remove("is-folding-in");
  prevScene.classList.add("is-crossfade-out");
  nextScene.classList.add("is-active", "is-crossfade-in");

  setTimeout(() => {
    renderStrip(world);
    strip.classList.remove("is-hushed");
    showBitePrompt(world);
  }, 470);

  setTimeout(() => {
    prevScene.classList.remove("is-active", "is-crossfade-out");
  }, 760);

  setTimeout(() => {
    nextScene.classList.remove("is-crossfade-in");
    transitioning = false;
    scheduleSettle();
    flushQueue();
  }, 1080);
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
  /* the book handles its own keys (Escape, Tab) and must not let arrows
     leak through to the dial */
  if (book && !book.hidden) return;
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
  stripStatus.textContent = ui("hotspotInstruction");
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
const fragmentReturn = document.getElementById("fragmentReturn");
const fragmentReturnLabel = document.getElementById("fragmentReturnLabel");
let fragmentSource = null; /* the hotspot that opened the panel */

function openFragment(world, spot, hotspotBtn) {
  if (transitioning) return;

  const state = worldState[world.id];
  const isNewFragment = !state.explored.has(spot.key);
  const isFourthFragment = isNewFragment && state.explored.size === 3 && !state.complete;

  fragmentKicker.textContent = worldText(world, "name");
  fragmentTitle.textContent = spotText(world, spot, "title");
  fragmentSubtitle.textContent = spotText(world, spot, "subtitle");
  fragmentText.textContent = spotText(world, spot, "text");
  fragmentNext.hidden = true;

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
    fragmentNext.hidden = true;

    window.setTimeout(() => completeWorld(world), 180);

    if (mobileLayout.matches) {
      window.setTimeout(() => {
        fragment.scrollIntoView({
          behavior: prefersReducedMotion.matches ? "auto" : "smooth",
          block: "start"
        });
      }, prefersReducedMotion.matches ? 220 : 1050);
    }
    return;
  }

  if (mobileLayout.matches) {
    fragmentReturn.focus({ preventScroll: true });
    window.setTimeout(() => {
      fragment.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
    }, 80);
  } else {
    fragmentClose.focus({ preventScroll: true });
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
fragmentReturn.addEventListener("click", () => closeFragment(false));
fragmentNextButton.addEventListener("click", openStory);

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
  document.getElementById("printObject").textContent = worldText(world, "objectNumber");
  document.getElementById("printName").textContent = worldText(world, "name");
  document.getElementById("printContext").textContent = worldText(world, "context");
  document.getElementById("printAftertaste").textContent = worldText(world, "aftertaste");
  document.getElementById("printVignette").textContent = worldText(world, "vignette");
  document.getElementById("printRecipeTitle").textContent = worldText(world, "recipeTitle");
  document.getElementById("printRecipeNote").textContent = worldText(world, "recipeNote");
  document.getElementById("printIngredients").innerHTML =
    worldList(world, "ingredients").map(i => `<li>${i}</li>`).join("");
  document.getElementById("printSteps").innerHTML =
    worldList(world, "steps").map(s => `<li>${s}</li>`).join("");
  document.getElementById("printTakeHome").textContent = worldText(world, "takeItHome");

  setFigureImage(
    document.getElementById("printFigure"),
    document.getElementById("printImage"),
    world,
    interpolate(ui("printImageAlt"), { name: worldText(world, "name") })
  );
}

function populateLeaf(world) {
  document.getElementById("leafCatalogue").textContent =
    `${worldText(world, "objectNumber")} · ${worldText(world, "context")}`;
  document.getElementById("leafTitle").textContent = worldText(world, "name");
  document.getElementById("leafEpigraph").textContent = worldText(world, "epigraph");
  document.getElementById("leafEpigraphSource").textContent = worldText(world, "epigraphSource");
  document.getElementById("leafVignette").textContent = worldText(world, "vignette");
  document.getElementById("leafHistory").textContent = worldText(world, "history");
  document.getElementById("leafAftertaste").textContent = worldText(world, "aftertaste");
  document.getElementById("leafTakeHome").textContent = worldText(world, "takeItHome");
  document.getElementById("leafRecipeTitle").textContent = worldText(world, "recipeTitle");
  document.getElementById("leafRecipeNote").textContent = worldText(world, "recipeNote");
  document.getElementById("leafIngredients").innerHTML =
    worldList(world, "ingredients").map(i => `<li>${i}</li>`).join("");
  document.getElementById("leafSteps").innerHTML =
    worldList(world, "steps").map(s => `<li>${s}</li>`).join("");

  setFigureImage(
    document.getElementById("leafFigure"),
    document.getElementById("leafImage"),
    world,
    interpolate(ui("recipeImageAlt"), { name: worldText(world, "name") })
  );

  fillPrintCard(world);
}

function openLeaf() {
  const world = worldById(currentId);
  populateLeaf(world);
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
   MADELEINE "BOOK OF TASTE" — an interactive two-page overlay.
   Only Madeleine routes here; the other three worlds keep the linear #leaf.
   -------------------------------------------------------------------------- */

const book = document.getElementById("book");
const bookDialog = document.getElementById("bookDialog");
const bookClose = document.getElementById("bookClose");
const bookSpread = document.getElementById("bookSpread");
const bookPageJourney = document.getElementById("bookPageJourney");
const bookPageRecipe = document.getElementById("bookPageRecipe");
const journeyStops = document.getElementById("journeyStops");
const journeyTrackFill = document.getElementById("journeyTrackFill");
const journeyDate = document.getElementById("journeyDate");
const journeyStopTitle = document.getElementById("journeyStopTitle");
const journeyText = document.getElementById("journeyText");
const journeyFinal = document.getElementById("journeyFinal");
const journeyPractice = document.getElementById("journeyPractice");
const practiceHeading = document.getElementById("practiceHeading");
const practiceText = document.getElementById("practiceText");
const practiceQuestion = document.getElementById("practiceQuestion");
const bookNext = document.getElementById("bookNext");
const bookNextTitle = document.getElementById("bookNextTitle");
const bookNextNote = document.getElementById("bookNextNote");
const recipeImage = document.getElementById("recipeImage");
const recipeChapters = document.getElementById("recipeChapters");
const recipeHeading = document.getElementById("recipeHeading");
const recipeNote = document.getElementById("recipeNote");
const recipeCompleteText = document.getElementById("recipeCompleteText");
const bookBack = document.getElementById("bookBack");
const bookPrint = document.getElementById("bookPrint");

let bookLastFocused = null;
let bookState = null;

function madeleineWorld() { return worldById("madeleine"); }
function bookLang(world) { return world.book[currentLang] || world.book.en; }
function chapterTitle(chapter) { return currentLang === "ru" ? chapter.ru : chapter.en; }

function newBookState() {
  return {
    page: "journey",
    openedStops: new Set(),
    currentStop: -1
  };
}

/* ---- PAGE I: the cultural journey ---- */

function renderJourneyStops(world) {
  const stops = bookLang(world).stops;
  const opened = bookState.openedStops;
  const maxOpened = opened.size ? Math.max(...opened) : -1;

  journeyStops.innerHTML = stops.map((s, i) => {
    const isOpen = opened.has(i);
    const active = i === bookState.currentStop;
    const unlocked = i === 0 || opened.has(i - 1);
    const cls = ["journey-stop"];
    if (isOpen) cls.push("is-open");
    if (active) cls.push("is-active");
    if (!unlocked) cls.push("is-locked");
    const lockAttr = unlocked ? "" : ` disabled aria-disabled="true" title="${ui("bookStopLocked")}"`;
    return `<button type="button" class="${cls.join(" ")}" role="listitem" data-index="${i}"${lockAttr}
        aria-label="${interpolate(ui("bookStopAria"), { n: i + 1, name: s.name })}" aria-current="${active ? "true" : "false"}">
        <span class="journey-stop__node"><span class="journey-stop__num">${i + 1}</span><span class="journey-stop__check" aria-hidden="true">✓</span></span>
        <span class="journey-stop__meta"><span class="journey-stop__date">${s.date}</span><span class="journey-stop__name">${s.name}</span></span>
      </button>`;
  }).join("");

  const denom = Math.max(1, stops.length - 1);
  const fill = maxOpened < 0 ? 0 : Math.min(maxOpened + 1, stops.length - 1) / denom;
  journeyTrackFill.style.setProperty("--journey-fill", fill.toFixed(3));
}

function renderStopDetail(world, index) {
  const stop = index >= 0 ? bookLang(world).stops[index] : null;
  if (!stop) {
    journeyDate.textContent = "";
    journeyStopTitle.textContent = "";
    journeyText.innerHTML = `<p class="journey-line journey-line--hint">${ui("journeyHint")}</p>`;
    return;
  }
  journeyDate.textContent = stop.date;
  journeyStopTitle.textContent = stop.name;

  /* the first paragraph is always shown; the rest fold behind "read more"
     so the history stays short for anyone who wants it brief */
  const first = `<p class="journey-line" style="--line:0">${stop.paras[0]}</p>`;
  const rest = stop.paras.slice(1);
  let more = "";
  if (rest.length) {
    more =
      `<div class="journey-more" id="journeyMore" hidden>` +
      rest.map((p, i) => `<p class="journey-line" style="--line:${i}">${p}</p>`).join("") +
      `</div>` +
      `<button type="button" class="journey-readmore" id="journeyReadmore" aria-expanded="false" aria-controls="journeyMore">${ui("readMore")}</button>`;
  }
  journeyText.innerHTML = first + more;
}

function openJourneyStop(index) {
  const world = madeleineWorld();
  const stops = bookLang(world).stops;
  const unlocked = index === 0 || bookState.openedStops.has(index - 1);
  if (!unlocked) return;
  bookState.openedStops.add(index);
  bookState.currentStop = index;
  renderJourneyStops(world);
  renderStopDetail(world, index);
  if (bookState.openedStops.size === stops.length) completeJourney(world);
}

function renderPractice(world, revealed) {
  practiceHeading.textContent = ui("takeItHome");
  practiceText.textContent = worldText(world, "takeItHome");
  practiceQuestion.textContent = worldText(world, "reflection");
  journeyPractice.hidden = !revealed;
}

function completeJourney(world) {
  bookPageJourney.classList.add("is-journey-complete");
  journeyFinal.textContent = bookLang(world).journeyFinal;
  journeyFinal.hidden = false;
  renderPractice(world, true);
  bookNext.disabled = false;
}

/* ---- PAGE II: the recipe (all shown at once, no assembling game) ---- */

function renderRecipePage(world) {
  recipeHeading.textContent = worldText(world, "recipeTitle");
  recipeNote.textContent = worldText(world, "recipeNote");
  recipeImage.alt = interpolate(ui("recipeImageAlt"), { name: worldText(world, "name") });

  document.getElementById("bookIngredients").innerHTML =
    worldList(world, "ingredients").map(x => `<li>${x}</li>`).join("");

  const steps = worldList(world, "steps");
  recipeChapters.innerHTML = world.book.chapters.map((c, i) => {
    const body = c.steps.map(si => steps[si]).filter(Boolean);
    return `<div class="recipe-chapter">
        <span class="recipe-chapter__num">${i + 1}</span>
        <div class="recipe-chapter__body">
          <h5 class="recipe-chapter__title">${chapterTitle(c)}</h5>
          ${body.map(t => `<p class="recipe-chapter__step">${t}</p>`).join("")}
        </div>
      </div>`;
  }).join("");

  recipeCompleteText.textContent = bookLang(world).recipeComplete.text;
}

/* ---- page turning ---- */

function focusIncomingPage(target) {
  if (target === "recipe") bookBack.focus({ preventScroll: true });
  else bookNext.focus({ preventScroll: true });
}

function turnBookPage(target) {
  if (!bookState || bookState.page === target) return;
  const outgoing = target === "recipe" ? bookPageJourney : bookPageRecipe;
  const incoming = target === "recipe" ? bookPageRecipe : bookPageJourney;
  bookState.page = target;
  bookSpread.scrollTop = 0;

  if (prefersReducedMotion.matches) {
    outgoing.hidden = true;
    incoming.hidden = false;
    focusIncomingPage(target);
    return;
  }

  const dir = target === "recipe" ? 1 : -1;
  incoming.hidden = false;
  incoming.style.setProperty("--turn-dir", String(dir));
  outgoing.style.setProperty("--turn-dir", String(dir));
  outgoing.classList.add("is-leaving");
  incoming.classList.add("is-entering");
  window.setTimeout(() => {
    outgoing.hidden = true;
    outgoing.classList.remove("is-leaving");
    incoming.classList.remove("is-entering");
    focusIncomingPage(target);
  }, 680);
}

/* ---- static labels + full render (also used on language change) ---- */

function renderBookStatic(world) {
  document.getElementById("bookKicker").textContent = worldText(world, "name");
  document.getElementById("bookHeading").textContent = bookLang(world).journeyTitle;
  document.getElementById("journeyIntro").textContent = bookLang(world).journeyIntro;
  bookNextTitle.textContent = ui("bookTurnTitle");
  bookNextNote.textContent = ui("bookTurnNote");
  bookBack.textContent = ui("bookBack");
  document.getElementById("bookIngredientsHeading").textContent = ui("ingredients");
  document.getElementById("bookMethodHeading").textContent = ui("method");
  bookPrint.textContent = ui("saveRecipe");
  bookClose.setAttribute("aria-label", ui("close"));
  journeyFinal.textContent = bookLang(world).journeyFinal;
}

function renderBook(world) {
  renderBookStatic(world);
  renderJourneyStops(world);
  renderStopDetail(world, bookState.currentStop);
  renderRecipePage(world);

  const journeyDone = bookState.openedStops.size === bookLang(world).stops.length;
  journeyFinal.hidden = !journeyDone;
  renderPractice(world, journeyDone);
  bookNext.disabled = !journeyDone;
  bookPageJourney.classList.toggle("is-journey-complete", journeyDone);

  const showRecipe = bookState.page === "recipe";
  bookPageJourney.hidden = showRecipe;
  bookPageRecipe.hidden = !showRecipe;
}

/* ---- open / close ---- */

function openBook() {
  const world = madeleineWorld();
  if (!bookState) bookState = newBookState();
  fillPrintCard(world);
  closeFragment(false, true);
  bookLastFocused = document.activeElement;
  recipeImage.src = world.assets.dessertWhole;
  renderBook(world);
  book.hidden = false;
  /* language is offered again inside the book, where it does not overlap the scene */
  languageSwitcher.hidden = false;
  document.body.classList.add("leaf-open");
  bookSpread.scrollTop = 0;
  requestAnimationFrame(() => bookClose.focus());
}

function closeBook() {
  book.hidden = true;
  if (entered) languageSwitcher.hidden = true;
  document.body.classList.remove("leaf-open");
  if (bookLastFocused) bookLastFocused.focus();
}

/* Router used by every completion button. Madeleine → book, others → leaf. */
function openStory() {
  const world = worldById(currentId);
  if (world && world.id === "madeleine") openBook();
  else openLeaf();
}

bookClose.addEventListener("click", closeBook);
book.addEventListener("click", e => { if (e.target === book) closeBook(); });
bookNext.addEventListener("click", () => { if (!bookNext.disabled) turnBookPage("recipe"); });
bookBack.addEventListener("click", () => turnBookPage("journey"));
bookPrint.addEventListener("click", () => window.print());

journeyStops.addEventListener("click", e => {
  const b = e.target.closest(".journey-stop");
  if (b && !b.disabled) openJourneyStop(Number(b.dataset.index));
});

/* "read more" folds the extra history paragraphs of the active stop */
journeyText.addEventListener("click", e => {
  const btn = e.target.closest(".journey-readmore");
  if (!btn) return;
  const more = document.getElementById("journeyMore");
  if (!more) return;
  const open = more.hidden;
  more.hidden = !open;
  btn.setAttribute("aria-expanded", String(open));
  btn.textContent = open ? ui("readLess") : ui("readMore");
});

/* focus trap + Escape while the book is open */
book.addEventListener("keydown", e => {
  if (e.key === "Escape") { e.stopPropagation(); closeBook(); return; }
  if (e.key !== "Tab") return;
  const focusables = Array.from(
    bookDialog.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
  ).filter(el => el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* --------------------------------------------------------------------------
   APPLY LANGUAGE — updates the live scene without resetting the visit
   -------------------------------------------------------------------------- */

const languageSwitcher = document.getElementById("languageSwitcher");
const languageButtons = Array.from(document.querySelectorAll("[data-language]"));

function wrapIntroBreaks(element, extraClass = "") {
  if (!element) return;

  const parts = element.innerHTML
    .split(/<br\s*\/?\s*>/i)
    .map(part => part.replace(/<[^>]*>/g, "").trim())
    .filter(Boolean);

  element.replaceChildren(...parts.map(part => {
    const line = document.createElement("span");
    line.className = `threshold__line${extraClass ? ` ${extraClass}` : ""}`;
    line.textContent = part;
    return line;
  }));
}

function decorateIntroLines() {
  wrapIntroBreaks(document.getElementById("thresholdTitle"), "threshold__line--title");
  wrapIntroBreaks(document.getElementById("thresholdBodyTwo"));
}

function startIntroReveal() {
  const thresholdElement = document.getElementById("threshold");
  if (!thresholdElement || thresholdElement.hidden) return;
  if (prefersReducedMotion.matches) {
    /* reduced motion: everything is already visible, no cascade needed */
    thresholdElement.classList.remove("intro");
    return;
  }
  /* `intro` (hidden state) is armed synchronously at script start to avoid a
     flash; here we trigger the staggered reveal on the next frames */
  thresholdElement.classList.add("intro");
  thresholdElement.classList.remove("is-revealed");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => thresholdElement.classList.add("is-revealed"));
  });
}

function updateStaticLanguage() {
  document.documentElement.lang = currentLang;
  document.title = ui("documentTitle");
  document.querySelector('meta[name="description"]')?.setAttribute("content", ui("metaDescription"));

  document.getElementById("mastheadEyebrow").textContent = ui("mastheadEyebrow");
  document.getElementById("mastheadTitle").textContent = ui("mastheadTitle");
  document.getElementById("thresholdEyebrow").textContent = ui("thresholdEyebrow");
  document.getElementById("thresholdTitle").innerHTML = ui("thresholdTitle");
  document.getElementById("thresholdLead").textContent = ui("thresholdLead");
  document.getElementById("thresholdBodyOne").innerHTML = ui("thresholdBody1");
  document.getElementById("thresholdBodyTwo").innerHTML = ui("thresholdBody2");
  decorateIntroLines();
  document.getElementById("languagePrompt").textContent = ui("languagePrompt");
  document.getElementById("enterPatisserie").textContent = ui("enterPatisserie");

  document.getElementById("fragmentNextStatus").textContent = ui("allConnected");
  applyStoryCtaLabels();
  fragmentClose.setAttribute("aria-label", ui("closeFragment"));
  fragmentReturnLabel.textContent = ui("backToDessert");
  beginAgainBtn.textContent = ui("beginAgain");
  biteHint.textContent = currentLang === "ru" ? "Откусите кусочек" : "Take a bite";

  document.getElementById("leafReturn").innerHTML = ui("returnText");
  document.getElementById("leafVignetteHeading").textContent = ui("culturalVignette");
  document.getElementById("leafHistoryHeading").textContent = ui("shortHistory");
  document.getElementById("leafAftertasteHeading").textContent = ui("aftertaste");
  document.getElementById("leafTakeHomeHeading").textContent = ui("takeItHome");
  document.getElementById("leafIngredientsHeading").textContent = ui("ingredients");
  document.getElementById("leafMethodHeading").textContent = ui("method");
  leafSave.textContent = ui("saveRecipe");
  leafDismiss.textContent = ui("close");
  leafClose.setAttribute("aria-label", ui("close"));
  document.getElementById("leafSaveHint").textContent = ui("saveHint");
  document.getElementById("leafHungry").textContent = ui("hungry");
  document.getElementById("leafCredit").textContent = ui("projectBy");

  document.getElementById("printProject").textContent = ui("printProject");
  document.getElementById("printIngredientsHeading").textContent = ui("ingredients");
  document.getElementById("printMethodHeading").textContent = ui("method");
  document.getElementById("printTakeHomeHeading").textContent = ui("takeItHome");
  dial.setAttribute("aria-label", ui("dialLabel"));
  if (dialCue) dialCue.textContent = ui("dialCue");

  languageButtons.forEach(button => {
    const active = button.dataset.language === currentLang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateSceneLanguage() {
  WORLDS.forEach(world => {
    const scene = sceneById(world.id);
    const bg = scene.querySelector(".scene__background-layer img");
    if (bg) bg.alt = interpolate(ui("sceneAlt"), {
      name: worldText(world, "name"), line: worldText(world, "shortLine")
    });

    const dessert = scene.querySelector(".scene__dessert");
    dessert?.setAttribute("aria-label", interpolate(ui("takeBiteAria"), {
      name: worldText(world, "name")
    }));

    world.hotspots.forEach(spot => {
      const button = scene.querySelector(`.hotspot--${spot.key}`);
      if (!button) return;
      button.setAttribute("aria-label", `${spotText(world, spot, "title")} — ${spotText(world, spot, "subtitle")}`);
      const label = button.querySelector(".hotspot__label");
      if (label) label.textContent = spotText(world, spot, "title");
    });

  });
  updateDialPos();
}

function refreshOpenPanels() {
  if (currentId) {
    const world = worldById(currentId);
    renderStrip(world);

    if (!fragment.hidden && fragmentSource) {
      const spot = world.hotspots.find(item => item.key === fragmentSource.dataset.key);
      if (spot) {
        fragmentKicker.textContent = worldText(world, "name");
        fragmentTitle.textContent = spotText(world, spot, "title");
        fragmentSubtitle.textContent = spotText(world, spot, "subtitle");
        fragmentText.textContent = spotText(world, spot, "text");
      }
    }

    if (!veil.hidden) populateLeaf(world);
    if (book && !book.hidden && bookState) renderBook(madeleineWorld());
    fillPrintCard(world);
  }
}

function applyLanguage(language, { persist = true } = {}) {
  if (language !== "en" && language !== "ru") return;
  currentLang = language;
  if (persist) saveLanguage(language);
  updateStaticLanguage();
  updateSceneLanguage();
  refreshOpenPanels();
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

/* --------------------------------------------------------------------------
   THRESHOLD — enter the patisserie
   -------------------------------------------------------------------------- */

const threshold = document.getElementById("threshold");
const enterPatisserieButton = document.getElementById("enterPatisserie");

function enterPatisserie(language) {
  applyLanguage(language);
  entered = true;
  /* the switcher lives on the threshold and inside the Book of Taste; inside
     the main scene it only overlapped captions, so hide it here. */
  languageSwitcher.hidden = true;
  threshold.classList.add("is-opening");
  window.setTimeout(() => {
    threshold.classList.add("is-leaving");
  }, 520);
  window.setTimeout(() => {
    threshold.hidden = true;
    threshold.classList.remove("is-opening");
  }, 1060);

  scheduleSettle();
  wake();

  const scene = activeScene();
  if (scene && !scene.classList.contains("scene--no-dessert")) {
    showBitePrompt(worldById(currentId));
  }

  if (dialAdvance) dialAdvance.focus({ preventScroll: true });

  /* quietly prefetch the other worlds while the first is contemplated */
  setTimeout(() => {
    WORLDS.forEach(w => loadSceneAssets(w));
  }, 2500);
}

enterPatisserieButton.addEventListener("click", () => enterPatisserie(currentLang));

/* --------------------------------------------------------------------------
   BEGIN — in Combray, where all remembering starts
   -------------------------------------------------------------------------- */

selectWorld("madeleine", true);
applyLanguage(currentLang, { persist: false });


/* Start the entrance sequence after the initial hidden state has been painted. */
if (document.readyState === "complete") {
  startIntroReveal();
} else {
  window.addEventListener("load", startIntroReveal, { once: true });
}
