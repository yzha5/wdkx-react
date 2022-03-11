import {SvgProps} from '../types'
export function Volume({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4 5H1.5C0.947715 5 0.5 5.44772 0.5 6V10C0.5 10.5523 0.947715 11 1.5 11H4M4 5V11M4 5L10 2V14L4 11" stroke={color} strokeLinejoin="round"/>
<path d="M12.5 5V11M15.5 3.5V12.5" stroke={color} strokeLinejoin="round"/>

</svg>)}