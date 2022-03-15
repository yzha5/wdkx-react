import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes, MouseEvent } from 'react'

export interface ChipStyleProps
    extends Pick<ComponentProps, 'color' | 'light' | 'size'> {}
export interface ChipProps
    extends ChipStyleProps,
        Omit<HTMLAttributes<HTMLSpanElement>, 'color' | 'size'> {
    text: string
    onCloseClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
