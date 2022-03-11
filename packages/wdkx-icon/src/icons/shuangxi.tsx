import {SvgProps} from '../types'
export function Shuangxi({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 2H7.5" stroke={color}/>
<path d="M4 0.5V3.5" stroke={color}/>
<path d="M0.5 4H7.5" stroke={color}/>
<path d="M7 5.5H1V8H7V5.5Z" stroke={color}/>
<path d="M0.5 10H15.5" stroke={color}/>
<path d="M4 8.5V12" stroke={color}/>
<path d="M7 12H1V15H7V12Z" stroke={color}/>
<path d="M8.5 2H15.5" stroke={color}/>
<path d="M12 0.5V3.5" stroke={color}/>
<path d="M8.5 4H15.5" stroke={color}/>
<path d="M15 5.5H9V8H15V5.5Z" stroke={color}/>
<path d="M12 8.5V12" stroke={color}/>
<path d="M15 12H9V15H15V12Z" stroke={color}/>

</svg>)}