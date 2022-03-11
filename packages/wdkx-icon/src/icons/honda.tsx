import {SvgProps} from '../types'
export function Honda({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.805431 5.2783C0.641535 3.51915 2.02573 2 3.7925 2H12.2075C13.9743 2 15.3585 3.51915 15.1946 5.2783L14.6821 10.7783C14.5384 12.3207 13.2441 13.5 11.6951 13.5H4.30492C2.75588 13.5 1.46155 12.3207 1.31785 10.7783L0.805431 5.2783Z" stroke={color}/>
<path d="M3.5 2L4.47826 9.5M5 13.5L4.47826 9.5M12.5 2L11.5217 9.5M11 13.5L11.5217 9.5M4.47826 9.5H11.5217" stroke={color} strokeWidth="2" strokeLinejoin="round"/>

</svg>)}