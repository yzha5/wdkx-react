import {SvgProps} from '../types'
export function Charger({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5 2C5 1.44771 5.44772 1 6 1H11C12.1046 1 13 1.89543 13 3V10C13 11.1046 12.1046 12 11 12H6C5.44772 12 5 11.5523 5 11V2Z" stroke={color} strokeLinejoin="round"/>
<path d="M2.5 4H5" stroke={color} strokeLinejoin="round"/>
<rect x="6.5" y="12" width="2" height="1" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 13V16" stroke={color} strokeLinejoin="round"/>

</svg>)}