import {SvgProps} from '../types'
export function HighRail({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule="evenodd" clipRule="evenodd" d="M0.5 4H7.66026C8.82796 4 9.93736 4.65604 10.6973 5.79593L15.5 13H0.5V4Z" stroke={color} strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2 5.92857H5.5H7.67157C8.20201 5.92857 8.71071 6.19949 9.08579 6.68173L11 9.14286H5.5H2V5.92857Z" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 5.92857V9.14286" stroke={color} strokeLinejoin="round"/>

</svg>)}