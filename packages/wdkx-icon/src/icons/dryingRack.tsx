import {SvgProps} from '../types'
export function DryingRack({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 11.4611C0.5 10.7296 0.945342 10.0719 1.6245 9.8002L7.25722 7.54711C7.73404 7.35638 8.26596 7.35638 8.74278 7.54711L14.3755 9.8002C15.0547 10.0719 15.5 10.7296 15.5 11.4611V11.4611C15.5 12.4491 14.6991 13.25 13.7111 13.25H2.28887C1.30091 13.25 0.5 12.4491 0.5 11.4611V11.4611Z" stroke={color} strokeLinejoin="round"/>
<path d="M8 7.25V5.25L9 4.25V3.75" stroke={color} strokeLinejoin="round"/>
<path d="M9 3.75C9 3.19772 8.55228 2.75 8 2.75C7.44772 2.75 7 3.19772 7 3.75V4.25" stroke={color} strokeLinejoin="round"/>

</svg>)}