import {SvgProps} from '../types'
export function Calendar({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="0.5" width="15" height="15" rx="2" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 4H15.5M6 2.5H10" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 9.5V9.10055C3.5 8.21659 4.21659 7.5 5.10055 7.5V7.5C5.90195 7.5 6.6082 8.09475 6.58437 8.89579C6.57734 9.1321 6.55317 9.34934 6.5 9.5C6.17506 10.4207 5.151 10.2724 4.5 11C4.03056 11.5247 3.5 12.5 3.5 12.5H7" stroke={color} strokeLinejoin="round"/>
<path d="M10.5 10H11.5M10.5 10C9.94772 10 9.5 9.55228 9.5 9V8.5C9.5 7.94772 9.94772 7.5 10.5 7.5H11.5C12.0523 7.5 12.5 7.94772 12.5 8.5V9C12.5 9.55228 12.0523 10 11.5 10M10.5 10C9.94772 10 9.5 10.4477 9.5 11V11.5C9.5 12.0523 9.94772 12.5 10.5 12.5H11.5C12.0523 12.5 12.5 12.0523 12.5 11.5V11C12.5 10.4477 12.0523 10 11.5 10" stroke={color} strokeLinejoin="round"/>

</svg>)}