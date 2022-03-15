import { HTMLAttributes, MouseEvent, ReactNode } from 'react'
import { ComponentProps } from '@wdkx/types-react'

export interface ModalStyleProps
    extends Pick<ComponentProps, 'color' | 'frosted'> {
    alpha?: number
}

export interface ModalProps
    extends ModalStyleProps,
        HTMLAttributes<HTMLDivElement> {
    show: boolean
    panel: ReactNode
    onBlankClick?: (e: MouseEvent<HTMLDivElement>) => void
}
