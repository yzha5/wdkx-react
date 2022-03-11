import {SvgProps} from '../types'
export function AlignTextJustify({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 14H16" stroke={color} strokeLinejoin="round"/>

</svg>)}