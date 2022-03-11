import {SvgProps} from '../types'
export function Windows({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 4.5L6 3.5V7H0.5V4.5Z" stroke={color}/>
<path d="M8 3L15.5 2V7H8V3Z" stroke={color}/>
<path d="M8 9H15.5V14L8 13V9Z" stroke={color}/>
<path d="M0.5 9H6V12.5L0.5 11.5V9Z" stroke={color}/>

</svg>)}