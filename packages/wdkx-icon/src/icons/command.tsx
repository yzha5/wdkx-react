import {SvgProps} from '../types'
export function Command({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5V0.5C4.38071 0.5 5.5 1.61929 5.5 3V5.5H3C1.61929 5.5 0.5 4.38071 0.5 3V3Z" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 3C10.5 1.61929 11.6193 0.5 13 0.5V0.5C14.3807 0.5 15.5 1.61929 15.5 3V3C15.5 4.38071 14.3807 5.5 13 5.5H10.5V3Z" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 13C0.5 11.6193 1.61929 10.5 3 10.5H5.5V13C5.5 14.3807 4.38071 15.5 3 15.5V15.5C1.61929 15.5 0.5 14.3807 0.5 13V13Z" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 10.5H13C14.3807 10.5 15.5 11.6193 15.5 13V13C15.5 14.3807 14.3807 15.5 13 15.5V15.5C11.6193 15.5 10.5 14.3807 10.5 13V10.5Z" stroke={color} strokeLinejoin="round"/>
<rect x="5.5" y="5.5" width="5" height="5" stroke={color} strokeLinejoin="round"/>

</svg>)}