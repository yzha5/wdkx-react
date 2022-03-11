import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes } from 'react'

export interface AvatarStyleProps
    extends Pick<ComponentProps, 'color' | 'light' | 'radius' | 'size'> {}

export interface AvatarProps
    extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
        AvatarStyleProps {}
