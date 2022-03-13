import { ComponentProps } from '@wdkx/types-react'
import { InputHTMLAttributes } from 'react'

export interface CheckContainerStyleProps
    extends Pick<ComponentProps, 'size'> {}

export interface CheckStyleProps
    extends Pick<ComponentProps, 'color' | 'radius'> {
    indeterminate?: boolean
    type?: 'checkbox' | 'radio'
}

export interface CheckProps
    extends CheckStyleProps,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'type' | 'size'>,
        Pick<ComponentProps, 'size'> {}
