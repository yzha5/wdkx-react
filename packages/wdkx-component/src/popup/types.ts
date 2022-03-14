import { HTMLAttributes, ReactNode } from 'react'
import { BackplateProps } from '../backplate/types'
import { Location } from '@wdkx/types-react'

export type DocumentWH = { width: number; height: number }

export interface PopupStyleProps {
    show: boolean
}

export interface PopupProps
    extends HTMLAttributes<HTMLDivElement>,
        PopupStyleProps {
    align?: Location
    backplateProps?: BackplateProps
    children: ReactNode
    popupContent: ReactNode
}
