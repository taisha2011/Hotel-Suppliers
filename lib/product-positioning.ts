import type{Product}from'@/lib/products';

export function productPosition(p:Product){
 const premium=/plush|sateen|stripe|jacquard|topper|velour/i.test(p.name);
 const essential=/blend|classic|lightweight/i.test(p.name);
 const tier=premium?'Premium':essential?'Essential':'Performance';
 const bath=p.category==='bath-linen';
 const grams=Number((p.specs['Piece weight']||p.specs['Reference weight']||'').match(/[\d,]+/)?.[0].replace(',','')||0);
 const lbDozen=grams?`${(grams*12/453.592).toFixed(1)} lb/dozen`:'';
 const dimension=p.specs['Dimensions']||p.specs['Reference dimensions']||'';
 const [inches,metric]=dimension.split('/').map(x=>x?.trim());
 const primarySize=inches|| (bath?'Finished dimensions confirmed with quotation':'Twin–King starting points · finished dimensions to order');
 const metricSize=metric||'Metric dimensions confirmed with quotation';
 const benefit=bath?(premium?'Heavier hand feel':'Everyday hospitality use'):/blend/i.test(p.name)?'Easier-care fiber blend':/sateen|stripe|jacquard/i.test(p.name)?'Elevated room presentation':/protector/i.test(p.name)?'Protective layer for repeat use':'Commercial guest-room program';
 const segment=tier==='Essential'?'Economy & Select-Service Hotels':tier==='Premium'?'Full-Service & Boutique Hotels':'Midscale Hotels & Multi-Property Operations';
 return{tier,primarySize,metricSize,lbDozen,benefit,segment};
}
