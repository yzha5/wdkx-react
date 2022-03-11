import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes } from 'react'

export interface BadgeStyleProps
    extends Pick<ComponentProps, 'color' | 'light' | 'size'> {}

export interface BadgeProps
    extends BadgeStyleProps,
        Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {}
