import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes, MouseEvent } from 'react'

export interface BackplateStyleProps
    extends Pick<ComponentProps, 'color' | 'frosted'> {
    alpha?: number
}

export interface BackplateProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
        BackplateStyleProps {
    onBlankClick?: (e: MouseEvent<HTMLDivElement>) => void
}
