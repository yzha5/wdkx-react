import { CSSProperties, HTMLAttributes, ReactElement } from 'react'

export interface FoldingProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean
    resident: ReactElement
    panelStyle?: CSSProperties
    panelClassName?: string
}
