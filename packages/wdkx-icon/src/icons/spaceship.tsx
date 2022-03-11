import {SvgProps} from '../types'
export function Spaceship({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M12.0667 6.5C10.7168 4.1949 8 1 8 1C8 1 5.34944 4.25472 4 6.56667C2.57876 9.00162 1 13.1333 1 13.1333C1 13.1333 3.9364 13.3859 6.5 13.4718C7.02512 13.4894 7.5346 15.5 8 15.5C8.4654 15.5 8.97489 13.4894 9.50001 13.4718C12.0636 13.3859 15 13.1333 15 13.1333C15 13.1333 13.498 8.94421 12.0667 6.5Z" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="9" r="2" stroke={color} strokeLinejoin="round"/>

</svg>)}