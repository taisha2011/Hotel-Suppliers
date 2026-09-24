export type LinenProgram = { id:string; name:string; category:'Bedding'|'Bath'; headline:string; spec:string; buyerFit:string; image:string; href:string };

export const programs:LinenProgram[] = [
  {id:'BE-200',name:'Essential 200',category:'Bedding',headline:'A practical cotton-rich room standard',spec:'T200 cotton-rich or 100% cotton · plain weave · white',buyerFit:'Select-service hotels, replacement programs and distributor core stock',image:'/images/sheet-construction-v2.png',href:'/product/cotton-blend-flat-sheet'},
  {id:'BP-250',name:'Premium Sateen',category:'Bedding',headline:'A smoother finish for elevated rooms',spec:'100% cotton sateen · white · finished size to order',buyerFit:'Full-service hotels, boutiques and guest-room upgrades',image:'/images/hero-bedroom.png',href:'/product/sateen-duvet-cover'},
  {id:'BS-300',name:'Signature Stripe',category:'Bedding',headline:'A recognizable hotel look with custom details',spec:'Tonal stripe or jacquard · coordinated sheet, cover and case',buyerFit:'Private-label programs and properties with a defined room aesthetic',image:'/images/stripe-bedding.jpg',href:'/product/stripe-duvet-cover'},
  {id:'BV-500',name:'Everyday Terry',category:'Bath',headline:'Balanced weight for daily hotel use',spec:'Cotton terry · 27.6 × 55.1 in · approx. 13.2 lb/dozen',buyerFit:'Value-focused hotel programs and distributor replenishment',image:'/images/bath-program-v2.png',href:'/product/classic-bath-towel'},
  {id:'BP-600',name:'Plush Terry',category:'Bath',headline:'More weight and a fuller hand feel',spec:'Cotton terry · 27.6 × 55.1 in · approx. 15.9 lb/dozen',buyerFit:'Upscale properties, suites and guest-experience upgrades',image:'/images/towels.jpg',href:'/product/plush-bath-towel'},
];

export function getPrograms(locale:string):LinenProgram[]{
 if(locale==='en')return programs;
 const es=LinenProgramTranslations.es,pt=LinenProgramTranslations.pt;
 const source=locale==='es'?es:pt;
 return programs.map((program,index)=>({...program,...source[index]}));
}

const LinenProgramTranslations:{es:Array<Partial<LinenProgram>>;pt:Array<Partial<LinenProgram>>}={
 es:[
  {name:'Esencial 200',category:'Bedding',headline:'Un estándar práctico con alto contenido de algodón',spec:'T200 mezcla rica en algodón o 100% algodón · tejido liso · blanco',buyerFit:'Hoteles de servicios selectos, reemplazos e inventario principal de distribuidores'},
  {name:'Satén Premium',category:'Bedding',headline:'Acabado más suave para habitaciones superiores',spec:'Satén 100% algodón · blanco · medida final a pedido',buyerFit:'Hoteles de servicio completo, boutique y renovaciones'},
  {name:'Raya Signature',category:'Bedding',headline:'Imagen hotelera reconocible con detalles personalizados',spec:'Raya tonal o jacquard · sábana, funda y almohada coordinadas',buyerFit:'Programas de marca privada y propiedades con estética definida'},
  {name:'Rizo cotidiano',category:'Bath',headline:'Peso equilibrado para el uso hotelero diario',spec:'Rizo de algodón · 70 × 140 cm · aprox. 500 g',buyerFit:'Programas enfocados en valor y reposición de distribuidores'},
  {name:'Rizo de alto gramaje',category:'Bath',headline:'Mayor peso y tacto más voluminoso',spec:'Rizo de algodón · 70 × 140 cm · aprox. 600 g',buyerFit:'Propiedades de alta gama, suites y mejoras de experiencia'}],
 pt:[
  {name:'Essencial 200',category:'Bedding',headline:'Um padrão prático com alto teor de algodão',spec:'T200 algodão misto ou 100% algodão · trama lisa · branco',buyerFit:'Hotéis de serviços selecionados, reposição e estoque principal de distribuidores'},
  {name:'Cetim Premium',category:'Bedding',headline:'Acabamento mais suave para quartos superiores',spec:'Cetim 100% algodão · branco · medida final sob encomenda',buyerFit:'Hotéis de serviço completo, boutique e melhorias de quartos'},
  {name:'Listra Signature',category:'Bedding',headline:'Visual hoteleiro reconhecível com detalhes personalizados',spec:'Listra tonal ou jacquard · lençol, capa e fronha coordenados',buyerFit:'Programas de marca própria e propriedades com estética definida'},
  {name:'Felpa cotidiana',category:'Bath',headline:'Peso equilibrado para o uso hoteleiro diário',spec:'Felpa de algodão · 70 × 140 cm · aprox. 500 g',buyerFit:'Programas focados em valor e reposição de distribuidores'},
  {name:'Felpa encorpada',category:'Bath',headline:'Maior peso e toque mais encorpado',spec:'Felpa de algodão · 70 × 140 cm · aprox. 600 g',buyerFit:'Propriedades de alto padrão, suítes e melhorias de experiência'}]
};
