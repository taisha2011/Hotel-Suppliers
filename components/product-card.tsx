'use client';
import Image from'next/image';
import{useLocale,useTranslations}from'next-intl';
import Link from'@/components/site-link';
import{ArrowUpRight}from'lucide-react';
import type{Product}from'@/lib/products';
import{productPosition}from'@/lib/product-positioning';
import{localizePosition,localizeProduct}from'@/lib/product-localization';
import type{AppLocale}from'@/i18n/routing';
export function ProductCard({product}:{product:Product}){const locale=useLocale()as AppLocale;const t=useTranslations('Products');const p=localizeProduct(product,locale);const pos=localizePosition(productPosition(product),locale);const gsm=Object.entries(p.specs).find(([key])=>/GSM/i.test(key))?.[1];return <article className="product-card"><Link href={'/product/'+p.slug} className="product-image"><Image src={p.image} alt={`${p.name} — ${t('specReference')}`} fill sizes="(max-width:640px) 100vw,(max-width:1000px) 50vw,33vw"/><span>{pos.tier} / {p.type}</span></Link><div className="product-card-copy"><div className="product-meta"><p className="sku">{p.sku}</p><span>{p.category==='bath-linen'?t('bath').toUpperCase():t('bedding').toUpperCase()}</span></div><h3><Link href={'/product/'+p.slug}>{p.name}</Link></h3><strong className="card-primary-spec">{pos.primarySize}</strong><p className="product-material">{p.material}{pos.lbDozen?` · ${pos.lbDozen}`:''}{gsm?` · ${gsm}`:''}</p><p className="operational-benefit">{pos.benefit}</p><p className="buyer-fit">{t('bestFit',{fit:pos.segment})}</p><Link href={'/product/'+p.slug} className="card-link">{t('viewSpecifications')} <ArrowUpRight size={17}/></Link></div></article>}
