import {SvgProps} from '../types'
export function Fog({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3.76087 12C1.95994 12 0.5 10.5076 0.5 8.66667C0.5 6.82572 1.95994 5.33333 3.76087 5.33333C3.82379 5.33333 3.8863 5.33516 3.94835 5.33875M12.8913 12C14.332 12 15.5 10.8061 15.5 9.33333C15.5 7.86057 14.332 6.66667 12.8913 6.66667C12.8913 4.08934 10.8474 2 8.32609 2C6.25609 2 4.50788 3.40831 3.94835 5.33875M3.94835 5.33875C5.20476 5.41155 6.2709 6.21146 6.75041 7.33333" stroke={color} strokeLinejoin="round"/>
<path d="M5 14.25L5.5 13.75C5.77614 13.4739 6.22386 13.4739 6.5 13.75C6.77614 14.0261 7.22386 14.0261 7.5 13.75C7.77614 13.4739 8.22386 13.4739 8.5 13.75C8.77614 14.0261 9.22386 14.0261 9.5 13.75C9.77614 13.4739 10.2239 13.4739 10.5 13.75C10.7761 14.0261 11.2239 14.0261 11.5 13.75L12 13.25" stroke={color} strokeLinejoin="round"/>
<path d="M5 10.25L5.5 9.75C5.77614 9.4739 6.22386 9.4739 6.5 9.75C6.77614 10.0261 7.22386 10.0261 7.5 9.75C7.77614 9.4739 8.22386 9.4739 8.5 9.75C8.77614 10.0261 9.22386 10.0261 9.5 9.75C9.77614 9.4739 10.2239 9.4739 10.5 9.75C10.7761 10.0261 11.2239 10.0261 11.5 9.75L12 9.25" stroke={color} strokeLinejoin="round"/>

</svg>)}