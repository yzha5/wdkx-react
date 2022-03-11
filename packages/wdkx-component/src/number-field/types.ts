import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes } from 'react'

export interface NumberFieldContainerStyleProps
    extends Pick<ComponentProps, 'fluid'> {}

export interface NumberFieldStyleProps
    extends Pick<ComponentProps, 'color' | 'radius' | 'shadowed' | 'disabled'> {
    size?: number
    shadowOnInteract?: boolean //当互动时显示阴影，前提是shadowed为true
}

export interface NumberFieldProps
    extends Omit<
            HTMLAttributes<HTMLInputElement>,
            'color' | 'size' | 'type' | 'step'
        >,
        Pick<ComponentProps, 'fluid'>,
        NumberFieldStyleProps {
    step?: number
    label?: string
    message?: string
    disabled?: boolean
    plusDisabled?: boolean
    minusDisabled?: boolean
}
