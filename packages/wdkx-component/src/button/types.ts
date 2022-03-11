import { ButtonHTMLAttributes } from 'react'
import { ComponentProps } from '@wdkx/types-react'

export interface ButtonStyleProps
    extends Pick<
        ComponentProps,
        'fluid' | 'color' | 'size' | 'radius' | 'mode' | 'light' | 'shadowed'
    > {
    icon?: boolean
}

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        ButtonStyleProps,
        Pick<ComponentProps, 'firstElement' | 'lastElement'> {}
