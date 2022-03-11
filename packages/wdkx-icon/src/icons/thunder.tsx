import {SvgProps} from '../types'
export function Thunder({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3.76087 12C1.95994 12 0.5 10.5076 0.5 8.66667C0.5 6.82572 1.95994 5.33333 3.76087 5.33333C3.82379 5.33333 3.8863 5.33516 3.94835 5.33875M12.8913 12C14.332 12 15.5 10.8061 15.5 9.33333C15.5 7.86057 14.332 6.66667 12.8913 6.66667C12.8913 4.08934 10.8474 2 8.32609 2C6.25609 2 4.50788 3.40831 3.94835 5.33875M3.94835 5.33875C5.20476 5.41155 6.2709 6.21146 6.75041 7.33333M7 14.5L9 12L7.5 10.5L9.5 8" stroke={color} strokeLinejoin="round"/>

</svg>)}