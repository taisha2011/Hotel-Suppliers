'use client';
import{useState}from'react';
import{useLocale,useTranslations}from'next-intl';
import{products}from'@/lib/products';
import{localizeProduct}from'@/lib/product-localization';
import type{AppLocale}from'@/i18n/routing';
import{ProductCard}from'./product-card';
import{Select,SelectTrigger,SelectValue,SelectContent,SelectItem}from'@/components/ui/select';
export function Catalog({category}:{category?:string}){const locale=useLocale()as AppLocale;const t=useTranslations('Products');const[type,setType]=useState('all');const list=products.filter(p=>!category||p.category===category);const types=[...new Set(list.map(p=>p.type))];const shown=list.filter(p=>type==='all'||p.type===type);const typeLabel=(value:string)=>value==='all'?t('allTypes'):localizeProduct(list.find(p=>p.type===value)!,locale).type;return <><div className="catalog-toolbar"><p>{t('startingSpecifications',{count:shown.length})} <span> / {t('refine')}</span></p><div className="filter-control"><span id="filter-label">{t('productType')}</span><Select value={type} onValueChange={v=>setType(v||'all')}><SelectTrigger aria-labelledby="filter-label"><SelectValue>{typeLabel(type)}</SelectValue></SelectTrigger><SelectContent><SelectItem value="all">{t('allTypes')}</SelectItem>{types.map(value=><SelectItem value={value} key={value}>{typeLabel(value)}</SelectItem>)}</SelectContent></Select></div></div><div className="product-grid">{shown.map(p=><ProductCard key={p.sku} product={p}/>)}</div><p className="catalog-note">{t('catalogNote')}</p></>}
