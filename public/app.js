/**
 * BAJWA ENTERPRICES LDA - Official Agricultural Export Platform
 * Data directly synced from BAJWA ENTERPRICES LDA Official Export Catalogue
 * Headquarters: Nampula, Mozambique | Maritime Loading: Nacala Port (FOB Nacala, CIF / CFR Worldwide)
 * Contact Person: Abdullah Bajwa | WhatsApp: +258 86 693 9060 | Email: bajwaenterpriceslda@gmail.com
 */

const COMMODITIES_DATA = [
  {
    id: "sesame-seed",
    name: "Sesame Seed",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "oilseeds",
    categoryLabel: "Oilseeds & Grains",
    scientificName: "Sesamum indicum",
    harvestSeason: "May – August",
    image: "assets/products/sesame-seed.jpg",
    badges: ["2026 New Crop", "Purity 99% Min", "Machine Cleaned", "FOB Nacala"],
    shortDesc: "Mozambique sesame seed is valued for its natural oil content, clean appearance and versatility in international food and industrial markets.",
    cropProfile: "New-season sesame, naturally grown and suitable for bulk export.",
    qualityCharacteristics: "Clean appearance, good colour, consistent quality, with purity, moisture and foreign-matter specifications according to buyer requirements.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      purity: "99% Min",
      moisture: "8% Max",
      oilContent: "50% Min",
      admixture: "1% Max",
      process: "Machine Cleaned",
      packing: "50 KG",
      loading: "PP Bags",
      port: "Nacala Port"
    },
    packaging: "50 KG PP Bags",
    loadingCapacity: "20 FT FCL (22 MT) / 40 FT FCL (25-26 MT)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25-26 MT (520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality & Moisture Pre-Shipment Inspection",
    applications: [
      "Sesame oil production",
      "Tahini manufacturing",
      "Bakery products & toppings",
      "Confectionery & sesame sweets",
      "Sauces, snacks and food processing"
    ],
    targetMarkets: "India, China, UAE, Turkey, Vietnam, Middle East and other international food-processing markets."
  },
  {
    id: "peanuts-groundnuts",
    name: "Peanuts (Red Skin)",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "oilseeds",
    categoryLabel: "Oilseeds & Raw Nuts",
    scientificName: "Arachis hypogaea",
    harvestSeason: "April – August",
    image: "assets/products/peanuts-red-skin.jpg",
    badges: ["2026 New Crop", "Red Skin Bold", "40/50 & 50/60 Count", "7% Moisture Max"],
    shortDesc: "Mozambique red peanut kernels are known for their attractive red skin, distinctive flavour and nutritional value. Selected for wholesale and food-processing applications.",
    cropProfile: "New-crop red-skinned peanut kernels selected for wholesale and food-processing applications.",
    qualityCharacteristics: "Attractive red skin, uniform kernels, good taste and suitable moisture/quality parameters according to contract specifications.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      color: "Red Skin",
      moisture: "7% Max",
      variety: "Runner / Virginia Type, Bold",
      count: "40 / 50 Per OZ & 50 / 60 Per OZ Available",
      defects: "3% Max",
      oilContent: "Min 47% - 49%",
      packing: "50 KG PP Bags",
      port: "Nacala"
    },
    packaging: "50 KG PP Bags",
    loadingCapacity: "20 FT FCL (22 MT) / 40 FT FCL (25-26 MT)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25-26 MT (500-520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Global Ports",
    inspection: "SGS Quality & Aflatoxin Inspection",
    applications: [
      "Roasted peanuts & salted snacks",
      "Peanut butter manufacturing",
      "Confectionery brittle, chocolates, snack bars",
      "Cooking oil pressing & food manufacturing"
    ],
    targetMarkets: "India, China, UAE, Vietnam, Middle East, Africa and international food processors."
  },
  {
    id: "macadamia-nuts",
    name: "Macadamia Nuts",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "nuts",
    categoryLabel: "Premium Tree Nuts",
    scientificName: "Macadamia integrifolia",
    harvestSeason: "March – August",
    image: "assets/products/macadamia-nuts.jpg",
    badges: ["2026 New Crop", "Style 0/1/2 & Halves", "1.5% Moisture Max", "Vacuum Cartons"],
    shortDesc: "Mozambique-grown macadamia nuts are a premium tree-nut commodity appreciated for their creamy texture, delicate flavor and high-value nutritional profile.",
    cropProfile: "2026 new-crop macadamia, harvested during the principal March–August season.",
    qualityCharacteristics: "Premium creamy kernels, good natural color and flavor; available in kernel and in-shell formats subject to grade and specification.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      quality: "Premium, Whole Style 0/Ma, Creamy",
      grade: "Style 0, Style 1, Style 2, Halves",
      moisture: "1.5% Max",
      defects: "3% Max",
      packing: "10 KG Cartons / 1 KG Vacuum",
      loading: "22-24 MT Per 40 FT FCL",
      port: "Nacala, Mozambique"
    },
    packaging: "10 KG Cartons / 1 KG Vacuum Packs",
    loadingCapacity: "22 - 24 MT Per 40 FT FCL",
    containerFcl: "40 FT FCL: 22 - 24 MT (2,200 - 2,400 Cartons of 10kg)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality & Sensory Inspection",
    applications: [
      "Premium luxury retail snacks",
      "Chocolate & confectionery artisan fillings",
      "Bakery products & gourmet pastries",
      "Nut mixes, nut butter & macadamia milk"
    ],
    targetMarkets: "China, USA, India, EU, UAE, Middle East and premium global nut markets."
  },
  {
    id: "raw-cashew-nuts",
    name: "Raw Cashew Nuts (RCN)",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "nuts",
    categoryLabel: "Raw Commodity Nuts",
    scientificName: "Anacardium occidentale",
    harvestSeason: "September – October (and following months)",
    image: "assets/products/raw-cashew-nuts.jpg",
    badges: ["2026 New Crop", "Out-Turn 48-50 lbs", "80 KG Jute Bags", "Shelling 28-30%"],
    shortDesc: "Mozambique is an established origin for raw cashew nuts, offering an important agricultural commodity for processors and international traders with excellent KOR out-turn.",
    cropProfile: "2026 new-crop Raw Cashew Nuts (RCN), with the main season generally beginning around September–October.",
    qualityCharacteristics: "Well-dried raw nuts with commercially traded out-turn/KOR and nut-count specifications; quality assessed for moisture, foreign matter and defects.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      outTurn: "48 – 50 lbs. / 80 KG Bag",
      moisture: "9% Max",
      damageDiscolored: "3% Max",
      foreignMatter: "1% Max",
      admixture: "2% Max",
      infestation: "NIL",
      shellingPercentage: "28% - 30%",
      port: "Nacala, Mozambique"
    },
    packaging: "80 KG Jute Bags",
    loadingCapacity: "20 FT FCL (17 MT / 212 bags) | 40 FT FCL (25-26 MT / 325 bags)",
    containerFcl: "20 FT FCL: ~17 MT (212 Jute Bags) | 40 FT FCL: 25 - 26 MT (325 Jute Bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS / Independent Out-Turn & Quality Inspection",
    applications: [
      "Cashew kernel processing & shelling (W180, W240, W320, W450)",
      "Industrial roasting & salted kernel packaging",
      "Snacks, confectionery and food manufacturing",
      "Cashew Nut Shell Liquid (CNSL) extraction"
    ],
    targetMarkets: "India, Vietnam, UAE, China, Turkey and international cashew processors/traders."
  },
  {
    id: "pigeon-peas-white",
    name: "Pigeon Peas White",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "pulses",
    categoryLabel: "Pulses & Legumes",
    scientificName: "Cajanus cajan (White / Cream)",
    harvestSeason: "April – August",
    image: "assets/products/pigeon-peas-white-v3.jpg",
    badges: ["2026 New Crop", "Milling Grade", "Purity 98% Min", "50 KG PP Bags"],
    shortDesc: "White pigeon peas are an important pulse crop with strong demand across South Asian, Middle Eastern and African food markets. High quality grain suitable for dal milling.",
    cropProfile: "New-crop white pigeon peas produced for domestic consumption and international pulse markets.",
    qualityCharacteristics: "Natural cream/white colour, good grain quality and suitable for cleaning, grading and export packing according to buyer specifications.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      purity: "98% Min",
      moisture: "12% Max",
      quality: "Human Consumption, Milling Grade",
      foreignMatter: "1% Max",
      defects: "1% Max",
      process: "Machine Cleaned",
      packing: "50 KG PP Bags",
      port: "Nacala, Mozambique"
    },
    packaging: "50 KG PP Bags",
    loadingCapacity: "22 MT (20 FT FCL) / 25-26 MT (40 FT FCL)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25 - 26 MT (520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality & Phytosanitary Certificate",
    applications: [
      "Toor / Arhar Dal milling and processing",
      "Curries, soups, stews and traditional dishes",
      "Canned foods and pulse-based products"
    ],
    targetMarkets: "India, UAE, Middle East, South Asia and African pulse markets."
  },
  {
    id: "pigeon-peas-red",
    name: "Pigeon Peas Red",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "pulses",
    categoryLabel: "Pulses & Legumes",
    scientificName: "Cajanus cajan (Red / Brown)",
    harvestSeason: "April – August",
    image: "assets/products/pigeon-peas-red-v3.jpg",
    badges: ["2026 New Crop", "Purity 98% Min", "Defects 2% Max", "Machine Cleaned"],
    shortDesc: "Mozambique red pigeon peas are a nutritious pulse valued for their flavor, colour and versatility in traditional and commercial food preparation.",
    cropProfile: "New-crop red pigeon peas suitable for bulk international pulse trade.",
    qualityCharacteristics: "Natural red/brown colour, sound grains and export quality subject to agreed purity, moisture, foreign-matter and defect limits.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      purity: "98% Min",
      moisture: "12% Max",
      quality: "Human Consumption",
      defects: "2% Max",
      process: "Machine Cleaned",
      packing: "50 KG PP Bags",
      port: "Nacala, Mozambique"
    },
    packaging: "50 KG PP Bags",
    loadingCapacity: "22 MT (20 FT FCL) / 25-26 MT (40 FT FCL)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25 - 26 MT (520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality & Phytosanitary Certificate",
    applications: [
      "Dal, curries, soups and stews",
      "Pulse flour milling and ethnic gastronomy",
      "Processed and packaged pulse products"
    ],
    targetMarkets: "India, UAE, Middle East, South Asia and Africa."
  },
  {
    id: "kidney-beans-red",
    name: "Kidney Beans Red",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "pulses",
    categoryLabel: "Pulses & Beans",
    scientificName: "Phaseolus vulgaris",
    harvestSeason: "April – August",
    image: "assets/products/kidney-beans-red-v3.jpg",
    badges: ["2026 New Crop", "Uniform Dark Red", "Non-GMO", "Count 160-180"],
    shortDesc: "Red kidney beans are a widely traded pulse recognized for their deep red colour, firm texture and nutritional value. Selected for wholesale and commercial food markets.",
    cropProfile: "New-crop red kidney beans selected for wholesale and commercial food markets.",
    qualityCharacteristics: "Distinctive red color, firm texture, good grain appearance and suitable cleaning/grading for export.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      color: "Uniform Dark Red",
      purity: "99% Min",
      moisture: "14% Max",
      type: "Natural, Dried, Non-GMO",
      foreignMatter: "0.5% Max",
      damageBroken: "2% Max",
      splitBeans: "1% Max",
      size: "160 – 180 Grains Per 100g",
      port: "Nacala, Mozambique"
    },
    packaging: "50 KG PP Bags (and 25 KG PP Bags)",
    loadingCapacity: "22 MT (20 FT FCL) / 25-26 MT (40 FT FCL)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25 - 26 MT (520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality & Non-GMO Certificate",
    applications: [
      "Canned beans & chili preserves",
      "Salads, soups, stews and ready meals",
      "Food processing and commercial dry packaging"
    ],
    targetMarkets: "Middle East, India, UAE, Europe, Africa and international food distributors."
  },
  {
    id: "kidney-beans-white",
    name: "Kidney Beans White",
    crop: "2026 New Crop",
    origin: "Mozambique",
    category: "pulses",
    categoryLabel: "Pulses & Beans",
    scientificName: "Phaseolus vulgaris",
    harvestSeason: "April – August",
    image: "assets/products/kidney-beans-white-v3.jpg",
    badges: ["2026 New Crop", "Uniform White", "Non-GMO", "Count 130-150"],
    shortDesc: "White kidney beans are a versatile pulse with a mild flavour and creamy texture, making them suitable for a wide range of international food applications.",
    cropProfile: "New-crop white kidney beans suitable for bulk food distribution and processing.",
    qualityCharacteristics: "Light/white appearance, consistent grain quality, good texture and export specifications tailored to buyer requirements.",
    keySpecs: {
      origin: "Mozambique",
      crop: "2026 New Crop",
      color: "Uniform White, No Staining",
      purity: "99% Min",
      moisture: "14% Max",
      type: "Natural, Dried, Non-GMO",
      foreignMatter: "0.5% Max",
      damageBroken: "2% Max",
      splitBeans: "1% Max",
      size: "130 – 150 Grains Per 100g",
      port: "Nacala, Mozambique"
    },
    packaging: "50 KG PP Bags (and 25 KG PP Bags)",
    loadingCapacity: "22 MT (20 FT FCL) / 25-26 MT (40 FT FCL)",
    containerFcl: "20 FT FCL: 22 MT (440 bags) | 40 FT FCL: 25 - 26 MT (520 bags)",
    loadingPort: "Nacala Port, Mozambique",
    shippingTerms: "FOB Nacala, CFR, CIF Worldwide",
    inspection: "SGS Quality, Non-GMO & Phytosanitary",
    applications: [
      "Canned foods in brine/sauces",
      "Soups, salads, stews and sauces",
      "Ready meals and vegetarian food processing"
    ],
    targetMarkets: "Middle East, India, UAE, Europe, Africa and international food-processing markets."
  }
];

const TARGET_MARKETS = [
  { code: "IN", country: "India", region: "South Asia", flag: "🇮🇳", mainPorts: "Mundra, Nhava Sheva (JNPT), Chennai", commodities: "Sesame Seeds, Raw Cashew Nuts (RCN), Pigeon Peas (Tur)", transit: "12 - 16 Days" },
  { code: "CN", country: "China", region: "East Asia", flag: "🇨🇳", mainPorts: "Qingdao, Shanghai, Ningbo, Tianjin", commodities: "Sesame Seed, Macadamia Nuts, Peanuts", transit: "22 - 26 Days" },
  { code: "AE", country: "UAE", region: "Middle East", flag: "🇦🇪", mainPorts: "Jebel Ali (Dubai), Port of Dammam", commodities: "Sesame Seeds, Macadamia, Kidney Beans, Pigeon Peas", transit: "10 - 14 Days" },
  { code: "TR", country: "Turkey", region: "Mediterranean", flag: "🇹🇷", mainPorts: "Mersin, Istanbul (Ambarli), Izmir", commodities: "Sesame Seeds (Bakery/Tahini), Kidney Beans, Pulses", transit: "18 - 22 Days" },
  { code: "EU", country: "European Union", region: "Europe", flag: "🇪🇺", mainPorts: "Rotterdam, Antwerp, Hamburg, Valencia", commodities: "Macadamia Style 0/1, Sesame Seeds, Kidney Beans", transit: "24 - 28 Days" },
  { code: "US", country: "USA", region: "North America", flag: "🇺🇸", mainPorts: "Houston, New York/NJ, Long Beach", commodities: "Macadamia Nuts, Non-GMO Sesame, Specialty Pulses", transit: "28 - 34 Days" },
  { code: "VN", country: "Vietnam", region: "Southeast Asia", flag: "🇻🇳", mainPorts: "Hai Phong, Ho Chi Minh (Cat Lai)", commodities: "Raw Cashew Nuts (RCN), Sesame Seeds, Peanuts", transit: "18 - 22 Days" },
  { code: "JP", country: "Japan", region: "East Asia", flag: "🇯🇵", mainPorts: "Yokohama, Kobe, Tokyo", commodities: "Premium Sesame Seed, Macadamia Kernels", transit: "24 - 28 Days" }
];

// Active State
let currentCategory = "all";
let currentSearch = "";

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderProductGrid();
  renderComparisonTable();
  initCategoryFilters();
  initSearch();
  initContainerCalculator();
  initMarketSelector();
  initRfqGenerator();
  initMobileMenu();
  initHeaderScroll();
  initStatsCounter();
});

// Render Product Catalog Matrix
function renderProductGrid() {
  const gridContainer = document.getElementById("productGrid");
  if (!gridContainer) return;

  const filtered = COMMODITIES_DATA.filter(item => {
    const matchesCategory = currentCategory === "all" || item.category === currentCategory;
    const matchesSearch = currentSearch === "" || 
      item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(currentSearch.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 mb-4">
          <i class="fa-solid fa-seedling text-2xl"></i>
        </div>
        <h4 class="text-xl font-bold text-gray-800 mb-2">No Commodities Found</h4>
        <p class="text-gray-500 max-w-md mx-auto">No agricultural products match "${currentSearch}". Try searching for Sesame, Peanuts, Macadamia, Cashew, Pigeon Peas, or Kidney Beans.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 rounded-lg btn-gold text-sm font-semibold">Reset Search & Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(product => {
    return `
      <div class="product-card bg-white rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-350 border border-slate-200">
        <div>
          <!-- Image Thumbnail with Origin Badge -->
          <div class="product-image-container h-56 bg-slate-900 relative">
            <img 
              src="${product.image}" 
              alt="${product.name} Mozambique Origin" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
            
            <!-- Category Badge -->
            <div class="absolute top-3 left-3 bg-[#071F14]/90 backdrop-blur-md text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1.5 shadow-md">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              ${product.categoryLabel}
            </div>

            <!-- Crop 2026 Badge -->
            <div class="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
              <span>🌱</span> ${product.crop}
            </div>

            <!-- Title Overlay on Image Base -->
            <div class="absolute bottom-3 left-3 right-3">
              <span class="text-[10px] text-amber-300 font-semibold tracking-wider uppercase block">Mozambique Origin • ${product.harvestSeason}</span>
              <h3 class="text-lg font-bold text-white leading-tight drop-shadow-md">${product.name}</h3>
            </div>
          </div>

          <!-- Card Body Content -->
          <div class="p-5">
            <!-- Badges List -->
            <div class="flex flex-wrap gap-1.5 mb-3.5">
              ${product.badges.map(b => `
                <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
                  <i class="fa-solid fa-check text-[10px] text-emerald-600 mr-1"></i>${b}
                </span>
              `).join('')}
            </div>

            <!-- Short Description -->
            <p class="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">${product.shortDesc}</p>

            <!-- Quick Key Specifications Grid -->
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 grid grid-cols-2 gap-2 text-xs">
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Moisture</span>
                <span class="font-bold text-slate-800">${product.keySpecs.moisture || 'Standard'}</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Purity / Out-Turn</span>
                <span class="font-bold text-emerald-800">${product.keySpecs.purity || product.keySpecs.outTurn || product.keySpecs.grade || 'Export Grade'}</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Packing</span>
                <span class="font-semibold text-slate-700 truncate block">${product.packaging}</span>
              </div>
              <div>
                <span class="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Port</span>
                <span class="font-semibold text-amber-700">FOB Nacala</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="px-5 pb-5 pt-0 flex items-center gap-2">
          <button 
            onclick="openProductModal('${product.id}')" 
            class="flex-1 py-2.5 px-3 rounded-xl bg-[#071F14] hover:bg-[#0B291B] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-200 border border-amber-400/20 hover:border-amber-400/50"
          >
            <i class="fa-regular fa-file-lines text-amber-400"></i>
            <span>Export Specs</span>
          </button>
          <button 
            onclick="prefillRfqCommodity('${product.name}')" 
            class="py-2.5 px-3 rounded-xl btn-gold text-xs font-bold flex items-center justify-center gap-1.5"
            title="Request Instant Quote for ${product.name}"
          >
            <i class="fa-solid fa-paper-plane"></i>
            <span>Quote</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Comparison Table (from Page 18 of Catalog)
function renderComparisonTable() {
  const tableBody = document.getElementById("comparisonTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = COMMODITIES_DATA.map(p => {
    return `
      <tr class="border-b border-slate-200 hover:bg-slate-50/80 transition text-xs">
        <td class="py-3 px-4 font-bold text-slate-900 flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 bg-slate-900 shadow-sm">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <span class="block font-heading font-bold text-slate-900 text-sm">${p.name}</span>
            <span class="text-[10px] text-slate-500 font-medium italic">${p.scientificName}</span>
          </div>
        </td>
        <td class="py-3 px-4 text-emerald-900 font-semibold">
          <span class="inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-emerald-900">
            <i class="fa-solid fa-seedling text-[10px] text-emerald-600"></i> ${p.origin} (${p.crop})
          </span>
        </td>
        <td class="py-3 px-4 text-slate-800 font-medium">
          ${p.keySpecs.purity || p.keySpecs.outTurn || p.keySpecs.grade || p.keySpecs.color || 'Export Grade'}
        </td>
        <td class="py-3 px-4 text-slate-700 font-medium">${p.packaging}</td>
        <td class="py-3 px-4 text-slate-700 font-medium">${p.loadingCapacity.split('/')[0]}</td>
        <td class="py-3 px-4 font-bold text-amber-700">FOB Nacala</td>
        <td class="py-3 px-4 text-right">
          <button onclick="openProductModal('${p.id}')" class="px-3 py-1.5 rounded-lg bg-[#071F14] text-amber-300 text-xs font-semibold hover:bg-emerald-950 transition border border-amber-400/30">
            View Specs
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// Category filter tabs
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll("[data-filter]");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("tab-active", "bg-[#071F14]", "text-amber-400", "border-amber-400");
        b.classList.add("bg-white", "text-slate-700", "border-slate-200");
      });
      btn.classList.add("tab-active", "bg-[#071F14]", "text-amber-400", "border-amber-400");
      btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");
      currentCategory = btn.getAttribute("data-filter");
      renderProductGrid();
    });
  });
}

// Search Commodity input
function initSearch() {
  const searchInput = document.getElementById("commoditySearch");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    renderProductGrid();
  });
}

function resetFilters() {
  currentCategory = "all";
  currentSearch = "";
  const searchInput = document.getElementById("commoditySearch");
  if (searchInput) searchInput.value = "";
  const filterBtns = document.querySelectorAll("[data-filter]");
  filterBtns.forEach(btn => {
    if (btn.getAttribute("data-filter") === "all") {
      btn.classList.add("tab-active", "bg-[#071F14]", "text-amber-400", "border-amber-400");
      btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");
    } else {
      btn.classList.remove("tab-active", "bg-[#071F14]", "text-amber-400", "border-amber-400");
      btn.classList.add("bg-white", "text-slate-700", "border-slate-200");
    }
  });
  renderProductGrid();
}

// Modal View for Detailed Export Specs
function openProductModal(productId) {
  const product = COMMODITIES_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalContainer = document.getElementById("productSpecsModal");
  const modalContent = document.getElementById("modalContentContainer");
  if (!modalContainer || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="relative bg-gradient-to-r from-[#071F14] via-[#0B291B] to-slate-900 p-6 md:p-8 text-white rounded-t-2xl border-b border-amber-400/20">
      <button onclick="closeProductModal()" class="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full w-9 h-9 flex items-center justify-center transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="flex flex-wrap items-center gap-2 mb-2">
        <span class="bg-amber-400 text-[#071F14] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          ${product.categoryLabel}
        </span>
        <span class="bg-white/15 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          <i class="fa-solid fa-calendar-check text-amber-400 text-[10px]"></i> Harvest Season: ${product.harvestSeason}
        </span>
        <span class="bg-emerald-800/60 text-emerald-200 text-xs px-2.5 py-1 rounded-full">
          Origin: Mozambique (${product.crop})
        </span>
      </div>

      <h2 class="text-2xl md:text-3xl font-extrabold font-heading text-white tracking-tight">${product.name}</h2>
      <p class="text-amber-300 text-sm font-medium italic mt-0.5">${product.scientificName} • Authentic Quality, Global Reach</p>
    </div>

    <!-- Modal Body -->
    <div class="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
      
      <!-- Catalog Product Description Box -->
      <div class="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-xs text-slate-800 space-y-2">
        <h4 class="font-bold text-amber-900 uppercase tracking-wider text-xs flex items-center gap-2">
          <i class="fa-solid fa-circle-info text-amber-700"></i> Official Product Profile & Description
        </h4>
        <p class="leading-relaxed text-slate-700">${product.shortDesc}</p>
        <p class="leading-relaxed text-slate-700"><strong>Crop Profile:</strong> ${product.cropProfile}</p>
        <p class="leading-relaxed text-slate-700"><strong>Quality Characteristics:</strong> ${product.qualityCharacteristics}</p>
      </div>

      <!-- Key Specifications Table & Snapshot -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Image & Logistics Snapshot -->
        <div class="lg:col-span-1 space-y-4">
          <div class="rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          </div>

          <div class="bg-[#071F14] text-white p-4 rounded-xl border border-amber-400/30 text-xs space-y-2.5">
            <div class="font-bold text-amber-300 uppercase tracking-wider text-[11px] border-b border-white/10 pb-1.5 flex items-center justify-between">
              <span>Maritime Dispatch Port</span>
              <i class="fa-solid fa-anchor text-amber-400"></i>
            </div>
            <div>
              <span class="text-slate-400 block">Gateway Port:</span>
              <span class="font-semibold text-white">Nacala Port, Mozambique</span>
            </div>
            <div>
              <span class="text-slate-400 block">Supported Incoterms:</span>
              <span class="font-semibold text-amber-200">FOB Nacala | CIF / CFR Worldwide</span>
            </div>
            <div>
              <span class="text-slate-400 block">FCL Stuffing Capacity:</span>
              <span class="font-semibold text-white">${product.containerFcl}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Target Markets:</span>
              <span class="font-semibold text-emerald-300">${product.targetMarkets}</span>
            </div>
          </div>
        </div>

        <!-- Technical Specification Parameters from Official Catalog -->
        <div class="lg:col-span-2 space-y-4">
          <div class="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <i class="fa-solid fa-table-list text-emerald-800"></i> Official Export Specifications Matrix
            </h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <tbody>
                  ${Object.entries(product.keySpecs).map(([key, val]) => `
                    <tr class="border-b border-slate-200/80 last:border-b-0 hover:bg-slate-100/80 transition">
                      <td class="py-2.5 px-3 font-bold text-slate-600 uppercase text-[11px] bg-slate-100/60 w-2/5">
                        ${key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td class="py-2.5 px-3 font-extrabold text-[#071F14]">
                        ${val}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Applications & Industrial Uses from Catalog -->
          <div class="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-xs">
            <h4 class="font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <i class="fa-solid fa-industry text-slate-700"></i> Applications & Processing Formats
            </h4>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-600">
              ${product.applications.map(app => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-600 text-[11px] mt-0.5 flex-shrink-0"></i>
                  <span>${app}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>

    </div>

    <!-- Modal Footer Actions -->
    <div class="p-5 bg-slate-50 rounded-b-2xl border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
      <div class="text-xs text-slate-500 flex items-center gap-2">
        <i class="fa-solid fa-shield-halved text-emerald-700 text-base"></i>
        <span>Pre-shipment SGS laboratory inspection guaranteed with every export shipment.</span>
      </div>
      <div class="flex items-center gap-2.5">
        <button onclick="printSpecSheet('${product.id}')" class="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 flex items-center gap-1.5 transition">
          <i class="fa-solid fa-print"></i>
          <span>Print Spec Sheet</span>
        </button>
        <button onclick="closeProductModal(); prefillRfqCommodity('${product.name}')" class="px-5 py-2.5 rounded-xl btn-gold text-xs font-bold flex items-center gap-1.5 shadow-md">
          <i class="fa-solid fa-file-invoice-dollar"></i>
          <span>Request FOB/CIF Price Quote</span>
        </button>
      </div>
    </div>
  `;

  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modalContainer = document.getElementById("productSpecsModal");
  if (!modalContainer) return;
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Live Container Loading & Stuffing Calculator
function initContainerCalculator() {
  const commoditySelect = document.getElementById("calcCommodity");
  const containerTypeSelect = document.getElementById("calcContainerType");
  const containerCountInput = document.getElementById("calcContainerCount");
  
  if (!commoditySelect) return;

  // Clear & populate commodity dropdown
  commoditySelect.innerHTML = "";
  COMMODITIES_DATA.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = `${c.name} (${c.crop})`;
    commoditySelect.appendChild(opt);
  });

  const updateCalculation = () => {
    const selectedId = commoditySelect.value || "sesame-seed";
    const containerType = containerTypeSelect.value || "20ft";
    const containerCount = Math.max(1, parseInt(containerCountInput.value) || 1);
    
    const product = COMMODITIES_DATA.find(p => p.id === selectedId) || COMMODITIES_DATA[0];
    
    let mtPerContainer = 22;
    let bagWeightKg = 50;
    
    if (product.id === "macadamia-nuts") {
      mtPerContainer = containerType === "20ft" ? 16 : 24;
      bagWeightKg = 10; // Cartons
    } else if (product.id === "raw-cashew-nuts") {
      mtPerContainer = containerType === "20ft" ? 17 : 26;
      bagWeightKg = 80; // Jute bags
    } else {
      mtPerContainer = containerType === "20ft" ? 22 : 26;
      bagWeightKg = 50; // PP bags
    }

    const totalMt = mtPerContainer * containerCount;
    const totalBags = Math.round((totalMt * 1000) / bagWeightKg);

    document.getElementById("calcResultMt").textContent = `${totalMt.toLocaleString()} MT`;
    document.getElementById("calcResultUnits").textContent = `${totalBags.toLocaleString()} ${product.id === "macadamia-nuts" ? "Cartons (10kg)" : (product.id === "raw-cashew-nuts" ? "Jute Bags (80kg)" : "PP Bags (50kg)")}`;
    document.getElementById("calcResultFcl").textContent = `${containerCount} x ${containerType.toUpperCase()} FCL`;
    document.getElementById("calcPortNote").textContent = `Direct loading at Nacala Port, Mozambique with SGS pre-shipment quality inspection.`;
  };

  commoditySelect.addEventListener("change", updateCalculation);
  containerTypeSelect.addEventListener("change", updateCalculation);
  containerCountInput.addEventListener("input", updateCalculation);
  
  updateCalculation();
}

// Target Markets Selection
function initMarketSelector() {
  const marketContainer = document.getElementById("targetMarketList");
  if (!marketContainer) return;

  marketContainer.innerHTML = TARGET_MARKETS.map(m => `
    <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-2xl">${m.flag}</span>
          <span class="text-[10px] text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 uppercase">${m.region}</span>
        </div>
        <h4 class="font-bold text-white text-base font-heading group-hover:text-amber-300 transition">${m.country}</h4>
        <div class="text-xs text-slate-300 mt-2 space-y-1">
          <p><strong class="text-slate-400">Ports:</strong> ${m.mainPorts}</p>
          <p><strong class="text-slate-400">Commodities:</strong> ${m.commodities}</p>
        </div>
      </div>
      <div class="mt-3 pt-2 border-t border-white/10 text-[11px] text-emerald-300 flex items-center justify-between">
        <span>Transit Time:</span>
        <span class="font-bold text-white">${m.transit}</span>
      </div>
    </div>
  `).join('');
}

// Prefill commodity into RFQ form and scroll
function prefillRfqCommodity(commodityName) {
  const rfqCommodity = document.getElementById("rfqCommodity");
  if (rfqCommodity) {
    for (let i = 0; i < rfqCommodity.options.length; i++) {
      if (rfqCommodity.options[i].text.includes(commodityName) || commodityName.includes(rfqCommodity.options[i].text)) {
        rfqCommodity.selectedIndex = i;
        break;
      }
    }
  }

  const rfqSection = document.getElementById("rfq-section");
  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: "smooth" });
  }
  showToast(`Selected "${commodityName}" in the RFQ inquiry form.`);
}

// Interactive B2B RFQ Generator & Direct Gmail / WhatsApp Dispatch
function initRfqGenerator() {
  const form = document.getElementById("rfqForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> <span>Sending to bajwaenterpriceslda@gmail.com...</span>`;
      submitBtn.classList.add("opacity-80", "cursor-wait");
    }

    const commodity = document.getElementById("rfqCommodity").value;
    const volume = document.getElementById("rfqVolume").value;
    const volumeUnit = document.getElementById("rfqVolumeUnit").value;
    const incoterm = document.getElementById("rfqIncoterm").value;
    const destPort = document.getElementById("rfqDestPort").value;
    const destCountry = document.getElementById("rfqDestCountry").value;
    const targetMonth = document.getElementById("rfqTargetMonth").value;
    const paymentTerm = document.getElementById("rfqPaymentTerm").value;
    
    const buyerName = document.getElementById("rfqBuyerName").value;
    const buyerCompany = document.getElementById("rfqBuyerCompany").value;
    const buyerEmail = document.getElementById("rfqBuyerEmail").value;
    const buyerPhone = document.getElementById("rfqBuyerPhone").value;
    const comments = document.getElementById("rfqComments").value;

    const rfqRefCode = `BE-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;

    const messageLines = [
      `*OFFICIAL B2B COMMODITY INQUIRY (RFQ)*`,
      `*Inquiry Ref:* ${rfqRefCode}`,
      `*Date:* ${new Date().toLocaleDateString('en-GB')}`,
      `-----------------------------------------`,
      `*COMPANY & BUYER CREDENTIALS:*`,
      `• Company: ${buyerCompany}`,
      `• Authorized Contact: ${buyerName}`,
      `• Official Email: ${buyerEmail}`,
      `• WhatsApp/Mobile: ${buyerPhone}`,
      `-----------------------------------------`,
      `*COMMODITY & SHIPPING INQUIRY:*`,
      `• Product: ${commodity}`,
      `• Order Volume: ${volume} ${volumeUnit}`,
      `• Target Incoterm: ${incoterm}`,
      `• Destination Port: ${destPort}, ${destCountry}`,
      `• Loading Port: Nacala Port, Mozambique (FOB)`,
      `• Target Delivery: ${targetMonth || 'Prompt / Next Vessel'}`,
      `• Preferred Payment Terms: ${paymentTerm}`,
      `-----------------------------------------`,
      `*SPECIAL PACKING / REMARKS:*`,
      `${comments || 'Standard seaworthy packaging, SGS pre-shipment inspection required.'}`,
      `-----------------------------------------`,
      `*TO: BAJWA ENTERPRICES LDA*`,
      `Attn: Abdullah Bajwa | Nampula & Nacala Port, Mozambique`
    ];

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);

    const whatsappUrl = `https://wa.me/258866939060?text=${encodedMessage}`;
    const mailtoUrl = `mailto:bajwaenterpriceslda@gmail.com?subject=${encodeURIComponent(`B2B Commodity RFQ [${rfqRefCode}] - ${commodity} (${volume} ${volumeUnit})`)}&body=${encodedMessage}`;

    // Direct Submission to bajwaenterpriceslda@gmail.com via FormSubmit
    const formData = {
      _subject: `[B2B RFQ] ${commodity} (${volume} ${volumeUnit}) - ${buyerCompany}`,
      _replyto: buyerEmail,
      _template: "table",
      _captcha: "false",
      "Reference Code": rfqRefCode,
      "Inquiry Date": new Date().toLocaleString('en-GB'),
      "Commodity": commodity,
      "Order Volume": `${volume} ${volumeUnit}`,
      "Incoterm": incoterm,
      "Destination Country": destCountry,
      "Destination Port": destPort,
      "Target Delivery": targetMonth || 'Prompt Shipment',
      "Payment Terms": paymentTerm,
      "Buyer Contact Name": buyerName,
      "Buyer Company": buyerCompany,
      "Buyer Email": buyerEmail,
      "Buyer WhatsApp / Phone": buyerPhone,
      "Special Packaging / Notes": comments || 'Standard export packaging, SGS inspection required.',
      "Loading Port": "Nacala Port, Mozambique (FOB)",
      "Direct Export Desk": "BAJWA ENTERPRICES LDA - Abdullah Bajwa"
    };

    try {
      await fetch("https://formsubmit.co/ajax/bajwaenterpriceslda@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      showToast("RFQ successfully sent to bajwaenterpriceslda@gmail.com");
    } catch (err) {
      console.warn("Direct form submission notice:", err);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.classList.remove("opacity-80", "cursor-wait");
      }
    }

    showRfqSuccessModal({
      refCode: rfqRefCode,
      commodity,
      volume: `${volume} ${volumeUnit}`,
      incoterm,
      destPort: `${destPort}, ${destCountry}`,
      whatsappUrl,
      mailtoUrl,
      fullText: fullMessage,
      buyerEmail,
      buyerName
    });

    form.reset();
  });
}

function showRfqSuccessModal(data) {
  const modal = document.getElementById("rfqSuccessModal");
  if (!modal) {
    window.open(data.whatsappUrl, "_blank");
    return;
  }

  const modalBody = document.getElementById("rfqSuccessModalBody");
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="text-center space-y-3 mb-6">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-3xl border border-emerald-400/40 shadow-lg shadow-emerald-900/30">
          <i class="fa-solid fa-check-double"></i>
        </div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Inquiry Sent Direct to Gmail Desk</span>
        </div>
        <h3 class="text-2xl font-extrabold text-white font-heading">Reference Code: <span class="text-amber-300">${data.refCode}</span></h3>
        <p class="text-xs text-slate-300 max-w-md mx-auto">
          Inquiry details for <strong class="text-white">${data.volume} of ${data.commodity}</strong> have been dispatched to <strong class="text-amber-300">bajwaenterpriceslda@gmail.com</strong>.
        </p>
      </div>

      <div class="bg-black/40 rounded-xl p-4 border border-white/10 text-xs text-slate-300 max-h-44 overflow-y-auto font-mono whitespace-pre-wrap mb-6">
${data.fullText}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a 
          href="${data.whatsappUrl}" 
          target="_blank" 
          class="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
        >
          <i class="fa-brands fa-whatsapp text-lg"></i>
          <span>Instant WhatsApp Connect</span>
        </a>
        <a 
          href="${data.mailtoUrl}" 
          class="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition"
        >
          <i class="fa-solid fa-envelope text-lg"></i>
          <span>Open in Email Client</span>
        </a>
      </div>
    `;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeRfqSuccessModal() {
  const modal = document.getElementById("rfqSuccessModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Spec Sheet Printable generation
function printSpecSheet(productId) {
  const product = COMMODITIES_DATA.find(p => p.id === productId);
  if (!product) return;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BAJWA ENTERPRICES LDA - Export Spec Sheet - ${product.name}</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #111827; background: #fff; }
        .header { border-bottom: 2px solid #D4AF37; padding-bottom: 15px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; }
        .brand { font-size: 24px; font-weight: 900; color: #071F14; }
        .tagline { font-size: 11px; color: #B38F26; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; }
        .title { font-size: 20px; font-weight: bold; color: #071F14; margin-top: 5px; }
        .meta-bar { background: #f8fafc; padding: 10px 15px; border-radius: 6px; font-size: 12px; margin-bottom: 20px; border-left: 4px solid #071F14; }
        .prod-hero { display: flex; gap: 20px; align-items: flex-start; margin-bottom: 20px; }
        .prod-hero img { width: 140px; height: 140px; object-fit: cover; border-radius: 8px; border: 1px solid #cbd5e1; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 12px; }
        th, td { padding: 8px 12px; border: 1px solid #e2e8f0; text-align: left; }
        th { background: #071F14; color: #F3C644; font-weight: bold; text-transform: uppercase; font-size: 11px; }
        .section-title { font-size: 13px; font-weight: bold; text-transform: uppercase; color: #071F14; margin-bottom: 8px; }
        .footer { margin-top: 40px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <div style="display: flex; align-items: center; gap: 16px;">
          <img src="assets/branding/official-logo.png" alt="BAJWA ENTERPRICES LDA" style="height: 58px; width: auto; object-fit: contain;" />
          <div>
            <div class="brand">BAJWA ENTERPRICES LDA</div>
            <div class="tagline">Authentic Quality. Global Reach. • Nampula, Mozambique</div>
            <div class="title">OFFICIAL EXPORT SPECIFICATION SHEET</div>
          </div>
        </div>
        <div style="text-align: right; font-size: 11px;">
          <div>Doc Ref: BE-SPEC-${product.id.toUpperCase()}</div>
          <div>Date: ${new Date().toLocaleDateString('en-GB')}</div>
        </div>
      </div>

      <div class="meta-bar">
        <strong>COMMODITY:</strong> ${product.name} | 
        <strong>ORIGIN:</strong> Mozambique (${product.crop}) | 
        <strong>HARVEST SEASON:</strong> ${product.harvestSeason} | 
        <strong>LOADING PORT:</strong> Nacala Port (FOB / CIF / CFR)
      </div>

      <div class="prod-hero">
        <img src="${product.image}" alt="${product.name}" />
        <div style="flex: 1;">
          <div class="section-title" style="margin-top:0;">Product Profile & Description</div>
          <p style="font-size: 12px; line-height: 1.5; color: #334155; margin: 0 0 8px 0;">
            ${product.shortDesc}
          </p>
          <p style="font-size: 11px; line-height: 1.4; color: #475569; margin: 0;">
            <strong>Crop Profile:</strong> ${product.cropProfile}<br>
            <strong>Quality Characteristics:</strong> ${product.qualityCharacteristics}
          </p>
        </div>
      </div>

      <div class="section-title">1. Export Specifications Matrix</div>
      <table>
        <thead>
          <tr>
            <th>Specification Parameter</th>
            <th>Guaranteed Export Details</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(product.keySpecs).map(([k, v]) => `
            <tr>
              <td style="font-weight: 600; width: 40%; text-transform: uppercase;">${k.replace(/([A-Z])/g, ' $1')}</td>
              <td style="color: #0B291B; font-weight: bold;">${v}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="section-title">2. Applications & Target Markets</div>
      <ul style="font-size: 12px; line-height: 1.6; color: #334155;">
        ${product.applications.map(a => `<li>${a}</li>`).join('')}
      </ul>
      <p style="font-size: 12px; color: #334155; margin-top: 8px;"><strong>Target Markets:</strong> ${product.targetMarkets}</p>

      <div class="footer">
        <strong>BAJWA ENTERPRICES LDA</strong> | Nampula, Mozambique | Port: Nacala Port<br>
        Contact: Abdullah Bajwa | WhatsApp: +258 86 693 9060 | Email: bajwaenterpriceslda@gmail.com
      </div>
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// Download/Print Full Digital Catalogue
function downloadProductCatalogue() {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>BAJWA ENTERPRICES LDA - Mozambique Agricultural Export Catalogue</title>
      <style>
        body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 30px; color: #111827; background: #fff; }
        .cover { text-align: center; padding: 40px 20px; border: 3px solid #D4AF37; margin-bottom: 30px; background: #071F14; color: white; border-radius: 8px; }
        .brand { font-size: 28px; font-weight: 900; color: #F3C644; }
        .tagline { font-size: 13px; color: #ffffff; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px; }
        .catalog-title { font-size: 22px; font-weight: bold; margin-top: 20px; color: #fff; }
        .item { page-break-inside: avoid; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; margin-bottom: 20px; display: flex; gap: 16px; }
        .item-img { width: 120px; height: 120px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1; flex-shrink: 0; }
        .item-info { flex: 1; }
        .item-title { font-size: 15px; font-weight: bold; color: #071F14; border-bottom: 1px solid #D4AF37; padding-bottom: 4px; margin-bottom: 8px; }
        table { width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 8px; }
        th, td { padding: 4px 6px; border: 1px solid #cbd5e1; text-align: left; }
        th { background: #f1f5f9; font-weight: bold; width: 35%; text-transform: uppercase; font-size: 10px; }
        .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center; }
      </style>
    </head>
    <body>
      <div class="cover">
        <div style="display: inline-block; background: #ffffff; padding: 10px 16px; border-radius: 12px; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
          <img src="assets/branding/official-logo.png" alt="BAJWA ENTERPRICES LDA" style="height: 64px; width: auto; object-fit: contain; display: block; margin: 0 auto;" />
        </div>
        <div class="brand">BAJWA ENTERPRICES LDA</div>
        <div class="tagline">Authentic Quality. Global Reach. • Nampula, Mozambique</div>
        <div class="catalog-title">AGRICULTURAL EXPORT CATALOGUE 2026</div>
        <p style="font-size: 12px; color: #cbd5e1; margin-top: 10px;">FOB NACALA • CIF WORLDWIDE | Premium Quality. Reliable Supply. Global Reach.</p>
      </div>

      ${COMMODITIES_DATA.map((item, idx) => `
        <div class="item">
          <img src="${item.image}" alt="${item.name}" class="item-img" />
          <div class="item-info">
            <div class="item-title">${idx + 1}. ${item.name} (${item.crop}) - Mozambique Origin</div>
            <p style="font-size: 11px; color: #475569; margin: 0 0 6px 0;">${item.shortDesc}</p>
            <table>
              ${Object.entries(item.keySpecs).map(([k, v]) => `
                <tr>
                  <th>${k.replace(/([A-Z])/g, ' $1')}</th>
                  <td><strong>${v}</strong></td>
                </tr>
              `).join('')}
              <tr>
                <th>HARVEST SEASON</th>
                <td>${item.harvestSeason}</td>
              </tr>
              <tr>
                <th>APPLICATIONS</th>
                <td>${item.applications.join(', ')}</td>
              </tr>
              <tr>
                <th>TARGET MARKETS</th>
                <td>${item.targetMarkets}</td>
              </tr>
            </table>
          </div>
        </div>
      `).join('')}

      <div class="footer">
        <strong>BAJWA ENTERPRICES LDA</strong> • Nampula, Mozambique • Exporting From Mozambique To The World<br>
        Contact: Abdullah Bajwa | WhatsApp: +258 86 693 9060 | Email: bajwaenterpriceslda@gmail.com
      </div>
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white px-5 py-3 rounded-xl border border-amber-400/40 shadow-2xl z-[1000] text-xs font-semibold flex items-center gap-2 transition-all duration-300 opacity-0 pointer-events-none";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-400 text-sm"></i> <span>${message}</span>`;
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 3500);
}

function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileDrawer");
  const closeBtn = document.getElementById("mobileDrawerClose");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !drawer) return;

  const toggle = (open) => {
    if (open) {
      drawer.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.add("translate-x-full");
      document.body.style.overflow = "auto";
    }
  };

  menuBtn.addEventListener("click", () => toggle(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggle(false));
  mobileLinks.forEach(link => link.addEventListener("click", () => toggle(false)));
}

function initHeaderScroll() {
  const header = document.getElementById("mainHeader");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("shadow-lg", "py-3");
      header.classList.remove("py-5");
    } else {
      header.classList.remove("shadow-lg", "py-3");
      header.classList.add("py-5");
    }
  });
}

function initStatsCounter() {
  const statElements = document.querySelectorAll("[data-count]");
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count")) || 0;
        let count = 0;
        const duration = 1800;

        const timer = setInterval(() => {
          count += Math.ceil(target / 40);
          if (count >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = count;
          }
        }, 30);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));
}
