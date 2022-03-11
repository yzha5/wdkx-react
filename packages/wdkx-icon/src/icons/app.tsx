import {SvgProps} from '../types'
export function App({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="0.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<rect x="9.5" y="0.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="9.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<rect x="9.5" y="9.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>

</svg>)}