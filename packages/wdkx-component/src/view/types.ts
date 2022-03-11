import { ComponentProps } from '@wdkx/types-react'

export interface ViewStyleProps
    extends Pick<ComponentProps, 'color' | 'frosted' | 'radius' | 'shadowed'> {}
