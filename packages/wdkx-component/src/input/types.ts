import { ComponentProps } from '@wdkx/types-react'
import { InputHTMLAttributes } from 'react'

export interface InputStyleProps
    extends Pick<ComponentProps, 'color' | 'radius' | 'fluid'> {}

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color'>,
        InputStyleProps {}
