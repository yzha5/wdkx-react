import {SvgProps} from '../types'
export function Plant({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M10.3344 9H5.66561C5.05273 9 4.58405 9.5463 4.67724 10.1521L5.36955 14.6521C5.4446 15.1399 5.86435 15.5 6.35792 15.5H9.64208C10.1357 15.5 10.5554 15.1399 10.6305 14.6521L11.3228 10.1521C11.416 9.5463 10.9473 9 10.3344 9Z" stroke={color} strokeLinejoin="round"/>
<path d="M8 9C8 9 8.49914 5.776 9.5 4C10.3838 2.43167 12.5 0.5 12.5 0.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 9C8 9 8.88855 6.86446 10 6C10.6893 5.46388 12 5 12 5" stroke={color} strokeLinejoin="round"/>
<path d="M8 9C8 9 7.58605 6.00065 6.5 4.5C5.60588 3.26456 3.5 2 3.5 2" stroke={color} strokeLinejoin="round"/>
<path d="M8 9C8 9 6.9252 7.60339 6 7C5.11924 6.42559 3.5 6 3.5 6" stroke={color} strokeLinejoin="round"/>

</svg>)}