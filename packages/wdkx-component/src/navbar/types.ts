import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes } from 'react'

export interface NavbarStyleProps
    extends Pick<
        ComponentProps,
        'color' | 'light' | 'frosted' | 'shadowed' | 'dense'
    > {
    fixed?: boolean
}

export interface NavbarProps
    extends Omit<HTMLAttributes<HTMLElement>, 'color'>,
        NavbarStyleProps {}
