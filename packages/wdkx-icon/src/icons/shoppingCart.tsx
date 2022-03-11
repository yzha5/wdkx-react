import {SvgProps} from '../types'
export function ShoppingCart({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M16 3H13L12 5M12 5L11 10H2L1 5H12Z" stroke={color} strokeLinejoin="round"/>
<circle cx="3" cy="12" r="1" stroke={color} strokeLinejoin="round"/>
<circle cx="10" cy="12" r="1" stroke={color} strokeLinejoin="round"/>

</svg>)}