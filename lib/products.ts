export type Product = {sku:string;slug:string;name:string;type:string;category:string;material:string;summary:string;description:string;image:string;specs:Record<string,string>;options:string[];imageNote:string};
export const products:Product[] = [
  {
    "sku": "BD-001",
    "slug": "classic-cotton-flat-sheet",
    "name": "Classic Cotton Flat Sheet",
    "type": "Flat Sheets",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "200 TC · White",
    "description": "A straightforward cotton base for a coordinated guest-room linen program.",
    "image": "/images/sheet-construction-v2.png",
    "specs": {
      "Fabric construction": "40s × 40s / 110 × 90",
      "Thread count": "200 (catalog specification)",
      "Finish": "White; weave to be confirmed with sample"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Illustrative styling. Confirm the final product with a sample."
  },
  {
    "sku": "BD-002",
    "slug": "cotton-blend-flat-sheet",
    "name": "Cotton Blend Flat Sheet",
    "type": "Flat Sheets",
    "category": "hotel-bedding",
    "material": "50% cotton / 50% polyester",
    "summary": "200 TC · White",
    "description": "A cotton-polyester option for buyers comparing fabric composition and laundry requirements.",
    "image": "/images/sheet-construction-v2.png",
    "specs": {
      "Fabric construction": "40s × 40s / 110 × 90",
      "Thread count": "200 (catalog specification)",
      "Finish": "White; weave to be confirmed with sample"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Illustrative styling. Confirm the final product with a sample."
  },
  {
    "sku": "BD-003",
    "slug": "classic-cotton-fitted-sheet",
    "name": "Classic Cotton Fitted Sheet",
    "type": "Fitted Sheets",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "200 TC · Made-to-spec fit",
    "description": "Specify mattress width, length and depth for a fitted-sheet quote.",
    "image": "/images/sheet-construction-v2.png",
    "specs": {
      "Fabric construction": "40s × 40s / 110 × 90",
      "Thread count": "200 (catalog specification)",
      "Pocket depth": "To your mattress measurement; confirm before order"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Illustrative styling. Confirm the final product with a sample."
  },
  {
    "sku": "BD-004",
    "slug": "stripe-duvet-cover",
    "name": "Satin Stripe Duvet Cover",
    "type": "Duvet Covers",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "3 cm stripe · Sateen",
    "description": "A tonal stripe gives the bed a composed, familiar hospitality finish.",
    "image": "/images/stripe-bedding.jpg",
    "specs": {
      "Fabric construction": "60s × 40s / 173 × 120",
      "Weave": "3 cm satin stripe",
      "Construction": "5 cm flange on three sides; end opening with ties"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-005",
    "slug": "sateen-duvet-cover",
    "name": "Cotton Sateen Duvet Cover",
    "type": "Duvet Covers",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "Sateen · White",
    "description": "A smooth, understated cover for an all-white bedding scheme.",
    "image": "/images/hero-bedroom.png",
    "specs": {
      "Fabric construction": "60s × 60s / 173 × 156",
      "Weave": "Sateen",
      "Construction": "5 cm flange on three sides; end opening with ties"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Illustrative styling. Confirm the final product with a sample."
  },
  {
    "sku": "BD-006",
    "slug": "envelope-pillowcase",
    "name": "Classic Envelope Pillowcase",
    "type": "Pillowcases",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "200 TC · Envelope closure",
    "description": "A simple pillowcase format to pair with classic cotton sheets.",
    "image": "/images/pillow.jpg",
    "specs": {
      "Fabric construction": "40s × 40s / 110 × 90",
      "Thread count": "200 (catalog specification)",
      "Closure": "Envelope format requested; dimensions to confirm"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BD-007",
    "slug": "oxford-pillowcase",
    "name": "Flanged Sateen Pillowcase",
    "type": "Pillowcases",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "5 cm flange · Sateen",
    "description": "A framed edge adds definition to a layered hotel bed.",
    "image": "/images/stripe-bedding.jpg",
    "specs": {
      "Fabric construction": "60s × 40s / 173 × 120",
      "Construction": "5 cm flange on four sides",
      "Closure": "Back opening"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BD-008",
    "slug": "jacquard-bedding-set",
    "name": "Jacquard Bedding Set",
    "type": "Bedding Sets",
    "category": "hotel-bedding",
    "material": "100% cotton",
    "summary": "Jacquard face · Sateen reverse",
    "description": "Coordinate a patterned duvet cover with pillowcases and a matching sheet specification.",
    "image": "/images/jacquard.jpg",
    "specs": {
      "Fabric construction": "60s × 40s / 173 × 120",
      "Weave": "Jacquard face; cotton sateen reverse",
      "Set contents": "Proposed: flat sheet, duvet cover and two pillowcases; confirm quantities"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-009",
    "slug": "lightweight-duvet",
    "name": "Lightweight Fiberfill Duvet",
    "type": "Duvets / Comforters",
    "category": "hotel-bedding",
    "material": "Cotton shell option / synthetic fiberfill",
    "summary": "200 g/m² fill",
    "description": "A lighter fill option for a bedding program with lower warmth requirements.",
    "image": "/images/duvet.jpg",
    "specs": {
      "Fill weight": "200 g/m²",
      "Shell": "Cotton downproof fabric option; confirm construction",
      "Fill": "Synthetic down-alternative fiberfill; composition to confirm"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-010",
    "slug": "medium-weight-duvet",
    "name": "Medium-Weight Fiberfill Duvet",
    "type": "Duvets / Comforters",
    "category": "hotel-bedding",
    "material": "Cotton shell option / synthetic fiberfill",
    "summary": "400 g/m² fill",
    "description": "A fuller layer for buyers comparing warmth and room conditions.",
    "image": "/images/duvet.jpg",
    "specs": {
      "Fill weight": "400 g/m²",
      "Shell": "Cotton downproof fabric option; confirm construction",
      "Fill": "Synthetic down-alternative fiberfill; composition to confirm"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-011",
    "slug": "fiberfill-pillow",
    "name": "Cotton-Shell Fiberfill Pillow",
    "type": "Pillows",
    "category": "hotel-bedding",
    "material": "Cotton shell / 3D synthetic fiberfill",
    "summary": "45 × 75 cm · 1,200 g fill option",
    "description": "Compare loft and hand feel with a physical sample before selecting your pillow program.",
    "image": "/images/pillow.jpg",
    "specs": {
      "Shell construction": "Cotton downproof fabric / 133 × 100",
      "Reference dimensions": "17.7 × 29.5 in / 45 × 75 cm",
      "Fill weight": "1,200 g option; other weights subject to quote"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-012",
    "slug": "quilted-mattress-protector",
    "name": "Quilted Mattress Protector",
    "type": "Mattress Protectors",
    "category": "hotel-bedding",
    "material": "Brushed shell / synthetic fiberfill",
    "summary": "300 g/m² fill · Corner straps",
    "description": "A quilted protective layer secured with elastic corner straps.",
    "image": "/images/protector.jpg",
    "specs": {
      "Fill weight": "300 g/m² option",
      "Construction": "Quilted; elastic straps at four corners",
      "Waterproofing": "Not specified; this is not a waterproof product"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BD-013",
    "slug": "quilted-mattress-topper",
    "name": "Box-Quilted Mattress Topper",
    "type": "Mattress Toppers",
    "category": "hotel-bedding",
    "material": "Cotton shell option / synthetic fiberfill",
    "summary": "800 g/m² fill · 6 cm gusset",
    "description": "An additional comfort layer with box quilting and a gusseted edge.",
    "image": "/images/topper.jpg",
    "specs": {
      "Fill weight": "800 g/m² option",
      "Shell construction": "Cotton downproof fabric / 133 × 100 option",
      "Construction": "Box quilting; 6 cm gusset; elastic corner straps"
    },
    "options": [
      "Finished dimensions",
      "Label & packaging",
      "Fabric or fill options"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BT-001",
    "slug": "classic-washcloth",
    "name": "Classic Cotton Washcloth",
    "type": "Washcloths",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "32 × 32 cm · 60 g",
    "description": "A compact cotton washcloth for a coordinated bathroom collection.",
    "image": "/images/bath-program-v2.png",
    "specs": {
      "Dimensions": "12.6 × 12.6 in / 32 × 32 cm",
      "Piece weight": "60 g",
      "Approximate GSM": "586 g/m² (calculated)",
      "Construction": "32s/2; reinforced edges"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BT-002",
    "slug": "generous-washcloth",
    "name": "Generous Cotton Washcloth",
    "type": "Washcloths",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "35 × 35 cm · 70 g",
    "description": "A slightly larger washcloth option with the same clean white direction.",
    "image": "/images/bath-program-v2.png",
    "specs": {
      "Dimensions": "13.8 × 13.8 in / 35 × 35 cm",
      "Piece weight": "70 g",
      "Approximate GSM": "571 g/m² (calculated)",
      "Construction": "32s/2; reinforced edges"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BT-003",
    "slug": "cotton-hand-towel",
    "name": "Cotton Hand Towel",
    "type": "Hand Towels",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "35 × 75 cm · 150 g",
    "description": "An everyday hand-towel size to sit alongside the bath-towel range.",
    "image": "/images/bath-program-v2.png",
    "specs": {
      "Dimensions": "13.8 × 29.5 in / 35 × 75 cm",
      "Piece weight": "150 g",
      "Approximate GSM": "571 g/m² (calculated)",
      "Construction": "16s spiral terry option; reinforced edges"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BT-004",
    "slug": "classic-bath-towel",
    "name": "Classic Cotton Bath Towel",
    "type": "Bath Towels",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "70 × 140 cm · 500 g",
    "description": "A considered starting point for an everyday hotel bath-towel program.",
    "image": "/images/towels.jpg",
    "specs": {
      "Dimensions": "27.6 × 55.1 in / 70 × 140 cm",
      "Piece weight": "500 g",
      "Approximate GSM": "510 g/m² (calculated)",
      "Construction": "16s spiral terry option; reinforced edges"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BT-005",
    "slug": "plush-bath-towel",
    "name": "Plush Cotton Bath Towel",
    "type": "Bath Towels",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "70 × 140 cm · 600 g",
    "description": "More weight in the same footprint for buyers seeking a fuller hand feel.",
    "image": "/images/towels.jpg",
    "specs": {
      "Dimensions": "27.6 × 55.1 in / 70 × 140 cm",
      "Piece weight": "600 g",
      "Approximate GSM": "612 g/m² (calculated)",
      "Construction": "16s spiral terry option; reinforced edges"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference photograph. Final details are subject to sample approval."
  },
  {
    "sku": "BT-006",
    "slug": "cotton-bath-mat",
    "name": "Cotton Bath Mat",
    "type": "Bath Mats",
    "category": "bath-linen",
    "material": "Cotton",
    "summary": "50 × 80 cm · 350 g",
    "description": "A compact cotton floor-linen specification to complete the bathroom set.",
    "image": "/images/bath-program-v2.png",
    "specs": {
      "Dimensions": "19.7 × 31.5 in / 50 × 80 cm",
      "Piece weight": "350 g",
      "Approximate GSM": "875 g/m² (calculated)",
      "Construction": "32s/2; reinforced edges; no anti-slip backing specified"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Collection reference image; not an individual SKU photograph."
  },
  {
    "sku": "BT-007",
    "slug": "velour-bathrobe",
    "name": "Cotton Velour Bathrobe",
    "type": "Bathrobes",
    "category": "bath-linen",
    "material": "100% cotton",
    "summary": "Cut-pile velour · Adult sizing",
    "description": "A soft cotton velour robe with a belted silhouette for a complete bath-linen program.",
    "image": "/images/bathrobe.png",
    "specs": {
      "Fabric": "100% cotton cut-pile velour",
      "Reference weight": "1,000 g per robe; 1,200 g option",
      "Sizing": "Adult reference size; request finished measurements"
    },
    "options": [
      "Weight & dimensions",
      "Embroidery placement",
      "Label & packaging"
    ],
    "imageNote": "Illustrative styling. Confirm the final product with a sample."
  }
];
export const categories=[{slug:'hotel-bedding',name:'Hotel Bedding',subtitle:'From the first sheet to the final layer.',description:'Build your bedding program around fabric, fit and fill. Explore sheets, duvet covers, pillowcases and comfort layers.'},{slug:'bath-linen',name:'Towels & Bath Linen',subtitle:'A softer everyday ritual.',description:'Compare cotton towels, bath mats and robes by dimensions, piece weight and construction.'}];
