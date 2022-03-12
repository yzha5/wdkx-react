import { HTMLAttributes } from 'react'
import { BackplateProps } from '../backplate/types'

export interface SidebarStyleProps {
    location?: 'top' | 'right' | 'bottom' | 'left'
}

export interface SidebarProps
    extends HTMLAttributes<HTMLDivElement>,
        SidebarStyleProps {
    backplateProps?: BackplateProps
}
