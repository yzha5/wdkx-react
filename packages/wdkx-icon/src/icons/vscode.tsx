import {SvgProps} from '../types'
export function Vscode({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<g clipPath="url(#clip0_826_184)">
<path d="M0.5 4.5L15 14V2L0.5 11" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
<path d="M14 3V13" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_826_184">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>

</svg>)}