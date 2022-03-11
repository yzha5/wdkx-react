import {SvgProps} from '../types'
export function Heart({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule="evenodd" clipRule="evenodd" d="M14.1939 8.48228L7.98223 14.6939L1.77057 8.48228C0.0764768 6.78818 0.0764768 3.96468 1.77057 2.27058C3.46466 0.576475 6.28814 0.576475 7.98223 2.27058C9.67632 0.576475 12.4998 0.576475 14.1939 2.27058C15.888 3.96468 15.9821 6.78818 14.1939 8.48228Z" stroke={color} strokeLinejoin="round"/>

</svg>)}