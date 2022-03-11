import {SvgProps} from '../types'
export function Benz({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="7.5" stroke={color}/>
<path d="M8 0L9.05309 7.392L14.9282 12L8 9.216L1.0718 12L6.94691 7.392L8 0Z" fill={color}/>

</svg>)}