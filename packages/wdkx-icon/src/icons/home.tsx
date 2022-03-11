import {SvgProps} from '../types'
export function Home({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 8L8 0.5L15.5 8V15.5H10.5V12.5H5.5V15.5H0.5V8Z" stroke={color} strokeLinejoin="round"/>

</svg>)}