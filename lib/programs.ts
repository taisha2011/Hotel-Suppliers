export type LinenProgram = { id:string; name:string; category:'Bedding'|'Bath'; headline:string; spec:string; buyerFit:string; image:string; href:string };

export const programs:LinenProgram[] = [
  {id:'BE-200',name:'Essential 200',category:'Bedding',headline:'A practical cotton-rich room standard',spec:'T200 cotton-rich or 100% cotton · plain weave · white',buyerFit:'Select-service hotels, replacement programs and distributor core stock',image:'/images/sheet-construction-v2.png',href:'/product/cotton-blend-flat-sheet'},
  {id:'BP-250',name:'Premium Sateen',category:'Bedding',headline:'A smoother finish for elevated rooms',spec:'100% cotton sateen · white · finished size to order',buyerFit:'Full-service hotels, boutiques and guest-room upgrades',image:'/images/hero-bedroom.png',href:'/product/sateen-duvet-cover'},
  {id:'BS-300',name:'Signature Stripe',category:'Bedding',headline:'A recognizable hotel look with custom details',spec:'Tonal stripe or jacquard · coordinated sheet, cover and case',buyerFit:'Private-label programs and properties with a defined room aesthetic',image:'/images/stripe-bedding.jpg',href:'/product/stripe-duvet-cover'},
  {id:'BV-500',name:'Everyday Terry',category:'Bath',headline:'Balanced weight for daily hotel use',spec:'Cotton terry · 27.6 × 55.1 in · approx. 13.2 lb/dozen',buyerFit:'Value-focused hotel programs and distributor replenishment',image:'/images/bath-program-v2.png',href:'/product/classic-bath-towel'},
  {id:'BP-600',name:'Plush Terry',category:'Bath',headline:'More weight and a fuller hand feel',spec:'Cotton terry · 27.6 × 55.1 in · approx. 15.9 lb/dozen',buyerFit:'Upscale properties, suites and guest-experience upgrades',image:'/images/towels.jpg',href:'/product/plush-bath-towel'},
];
