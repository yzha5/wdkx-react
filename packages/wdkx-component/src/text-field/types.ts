import { ComponentProps } from '@wdkx/types-react'
import { LabelHTMLAttributes } from 'react'

export interface TextFieldContainerStyleProps
    extends Pick<ComponentProps, 'fluid'> {}

export interface TextFieldStyleProps
    extends Pick<ComponentProps, 'color' | 'radius' | 'shadowed' | 'disabled'> {
    size?: number
    shadowOnInteract?: boolean //当互动时显示阴影，前提是shadowed为true
}

export interface TextFieldProps
    extends Omit<
            LabelHTMLAttributes<HTMLInputElement>,
            'color' | 'size' | 'type'
        >,
        Pick<ComponentProps, 'fluid' | 'firstElement' | 'lastElement'>,
        TextFieldStyleProps {
    type?:
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'month'
        | 'password'
        | 'tel'
        | 'text'
        | 'number'
        | 'time'
        | 'url'
        | 'week'
        | (string & {})
    label?: string
    message?: string
    disabled?: boolean
}
