import { ComponentProps, ComponentSize } from '@wdkx/types-react'
import { InputHTMLAttributes } from 'react'

export interface SwitchStyleProps
    extends Pick<ComponentProps, 'color' | 'radius' | 'size' | 'disabled'> {}

export interface SwitchProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'size'>,
        SwitchStyleProps {}
