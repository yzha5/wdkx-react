import {SvgProps} from '../types'
export function Facemask({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3 5.23607C3 4.47852 3.43062 3.78739 4.15485 3.5652C5.03401 3.29548 6.36927 3 8 3C9.63073 3 10.966 3.29548 11.8452 3.5652C12.5694 3.78739 13 4.47852 13 5.23607V10.2984C13 10.7526 12.8476 11.1951 12.5195 11.5091C11.7555 12.2401 10.1297 13.5 8 13.5C5.87027 13.5 4.24451 12.2401 3.4805 11.5091C3.15236 11.1951 3 10.7526 3 10.2984V5.23607Z" stroke={color} strokeLinejoin="round"/>
<path d="M3 4.5L1.5712 4.02373C1.52404 4.00801 1.47466 4 1.42495 4V4C0.914114 4 0.5 4.41411 0.5 4.92495V7.25736C0.5 8.05301 0.81607 8.81607 1.37868 9.37868L3.5 11.5" stroke={color} strokeLinejoin="round"/>
<path d="M13 4.5L14.4288 4.02373C14.476 4.00801 14.5253 4 14.575 4V4C15.0859 4 15.5 4.41411 15.5 4.92495V7.25736C15.5 8.05301 15.1839 8.81607 14.6213 9.37868L12.5 11.5" stroke={color} strokeLinejoin="round"/>
<path d="M6 9H10M8 7V11" stroke={color} strokeLinejoin="round"/>

</svg>)}