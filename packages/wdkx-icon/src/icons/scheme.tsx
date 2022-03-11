import {SvgProps} from '../types'
export function Scheme({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5" stroke={color}/>
<path d="M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z" fill={color}/>

</svg>)}