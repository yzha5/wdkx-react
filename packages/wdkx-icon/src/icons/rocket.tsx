import {SvgProps} from '../types'
export function Rocket({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5.5 4C6.08015 2.29581 8 0.5 8 0.5C8 0.5 9.91985 2.29581 10.5 4C11.0034 5.47876 11 8 11 8L11.2649 8.0883C12.8983 8.63276 14 10.1613 14 11.883V15.5L11.4811 12.9811C10.9984 12.4984 10.1848 12.6305 9.87952 13.241L9.77639 13.4472C9.607 13.786 9.26074 14 8.88197 14H7.11803C6.73926 14 6.393 13.786 6.22361 13.4472L6.12048 13.241C5.81523 12.6305 5.00158 12.4984 4.51894 12.9811L2 15.5V11.883C2 10.1613 3.10172 8.63276 4.73509 8.0883L5 8C5 8 4.99659 5.47876 5.5 4Z" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="5.5" r="1" stroke={color} strokeLinejoin="round"/>

</svg>)}