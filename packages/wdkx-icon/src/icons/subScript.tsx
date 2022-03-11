import {SvgProps} from '../types'
export function SubScript({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M10 2L1 15" stroke={color} strokeLinejoin="round"/>
<path d="M1 2L10 15" stroke={color} strokeLinejoin="round"/>
<path d="M12 12V11.6006C12 10.7166 12.7166 10 13.6006 10V10C14.402 10 15.1082 10.5947 15.0844 11.3958C15.0773 11.6321 15.0532 11.8493 15 12C14.6751 12.9207 13.651 12.7724 13 13.5C12.5306 14.0247 12 15 12 15H15.5" stroke={color} strokeLinejoin="round"/>

</svg>)}