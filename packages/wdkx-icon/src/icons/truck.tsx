import {SvgProps} from '../types'
export function Truck({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4 14C4.55228 14 5 13.5523 5 13C5 12.4477 4.55228 12 4 12C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14Z" stroke={color} strokeLinejoin="round"/>
<path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" stroke={color} strokeLinejoin="round"/>
<path d="M13 13H13.5C14.6046 13 15.5 12.1046 15.5 11V9.05902C15.5 8.71641 15.3064 8.40322 15 8.25C14.6936 8.09678 14.5 7.78359 14.5 7.44098V6.05902C14.5 5.71641 14.6936 5.40322 15 5.25C15.3064 5.09678 15.5 4.78359 15.5 4.44098V4C15.5 3.72386 15.2761 3.5 15 3.5C14.6876 3.5 14.3959 3.34388 14.2226 3.08397L14 2.75C13.6876 2.28144 13.1617 2 12.5986 2H9C8.44772 2 8 2.44772 8 3V9.5H0.5V13H3" stroke={color} strokeLinejoin="round"/>
<path d="M5 13H11" stroke={color} strokeLinejoin="round"/>
<path d="M1 8H3" stroke={color} strokeLinejoin="round"/>
<path d="M10 4.5V8.5C10 9.05228 10.4477 9.5 11 9.5H14" stroke={color} strokeLinejoin="round"/>
<path d="M9 3.5H12C12.5523 3.5 13 3.94772 13 4.5V5.5" stroke={color} strokeLinejoin="round"/>

</svg>)}