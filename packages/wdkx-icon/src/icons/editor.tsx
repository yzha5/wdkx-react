import {SvgProps} from '../types'
export function Editor({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M15.5 0.5L8.5 11M12.5 1.5H1.5C0.947715 1.5 0.5 1.94772 0.5 2.5V14.5C0.5 15.0523 0.947715 15.5 1.5 15.5H13.5C14.0523 15.5 14.5 15.0523 14.5 14.5V5.5" stroke={color} strokeLinejoin="round"/>

</svg>)}