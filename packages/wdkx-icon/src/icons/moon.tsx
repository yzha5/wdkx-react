import {SvgProps} from '../types'
export function Moon({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule="evenodd" clipRule="evenodd" d="M0.5 8C0.5 12.1421 3.85786 15.5 8 15.5C11.6911 15.5 14.7594 12.8336 15.3839 9.32188C14.3795 10.6453 12.7896 11.5 11 11.5C7.96243 11.5 5.5 9.03757 5.5 6C5.5 3.43966 7.24947 1.28794 9.61822 0.675024C9.09706 0.560411 8.55559 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8Z" stroke={color} strokeLinejoin="round"/>

</svg>)}