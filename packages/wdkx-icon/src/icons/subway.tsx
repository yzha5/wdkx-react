import {SvgProps} from '../types'
export function Subway({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M12.5 4.5H3.5C2.94772 4.5 2.5 4.94772 2.5 5.5V14.4995C2.5 15.0517 2.94772 15.4995 3.5 15.4995H12.5C13.0523 15.4995 13.5 15.0517 13.5 14.4995V5.5C13.5 4.94772 13.0523 4.5 12.5 4.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M5.00275 14C5.55655 14 6.0055 13.5523 6.0055 13C6.0055 12.4477 5.55655 12 5.00275 12C4.44895 12 4 12.4477 4 13C4 13.5523 4.44895 14 5.00275 14Z" stroke={color} strokeLinejoin="round"/>
<path d="M11.0028 14C11.5566 14 12.0055 13.5523 12.0055 13C12.0055 12.4477 11.5566 12 11.0028 12C10.4489 12 10 12.4477 10 13C10 13.5523 10.4489 14 11.0028 14Z" stroke={color} strokeLinejoin="round"/>
<path d="M11 6.40002H5C4.44772 6.40002 4 6.84774 4 7.40002V9.40006C4 9.95234 4.44772 10.4001 5 10.4001H11C11.5523 10.4001 12 9.95234 12 9.40006V7.40002C12 6.84774 11.5523 6.40002 11 6.40002Z" stroke={color} strokeLinejoin="round"/>
<path d="M8 6.5V10.5" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 16V8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8V16" stroke={color} strokeLinejoin="round"/>

</svg>)}