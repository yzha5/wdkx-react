import {SvgProps} from '../types'
export function Car({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M14 11H15.5V8.5C15.5 7.39543 14.6046 6.5 13.5 6.5H12.5L9.78232 4.5588C9.27352 4.19537 8.66387 4 8.0386 4H5.13238C4.42985 4 3.77884 4.3686 3.41739 4.97101L2.5 6.5H1.5C0.947715 6.5 0.5 6.94772 0.5 7.5V11H3M6 11H11" stroke={color} strokeLinejoin="round"/>
<circle cx="4.5" cy="11" r="1.5" stroke={color} strokeLinejoin="round"/>
<circle cx="12.5" cy="11" r="1.5" stroke={color} strokeLinejoin="round"/>

</svg>)}