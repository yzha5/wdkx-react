import {SvgProps} from '../types'
export function Cloud({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3.94835 6.33875C4.50788 4.40831 6.25609 3 8.32609 3C10.8474 3 12.8913 5.08934 12.8913 7.66667C14.332 7.66667 15.5 8.86057 15.5 10.3333C15.5 11.8061 14.332 13 12.8913 13H3.76087C1.95994 13 0.5 11.5076 0.5 9.66667C0.5 7.82572 1.95994 6.33333 3.76087 6.33333C3.82379 6.33333 3.8863 6.33516 3.94835 6.33875ZM3.94835 6.33875C5.20476 6.41155 6.2709 7.21146 6.75041 8.33333" stroke={color} strokeLinejoin="round"/>

</svg>)}