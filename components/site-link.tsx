'use client';
import type {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';
type Props = Omit<ComponentProps<typeof Link>, 'href'> & {href: string};
export default function SiteLink({href, ...props}: Props) {return <Link href={href as '/'} {...props}/>;}
