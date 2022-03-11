import { ComponentProps } from '@wdkx/types-react'
import { HTMLAttributes, LiHTMLAttributes } from 'react'

export interface ListStyleProps
    extends Pick<ComponentProps, 'dense' | 'radius'> {}

export interface ListProps
    extends HTMLAttributes<HTMLUListElement>,
        ListStyleProps {}

export interface ListItemStyleProps
    extends Pick<ComponentProps, 'color' | 'light' | 'selected' | 'disabled'> {}

export interface ListItemProps
    extends Omit<LiHTMLAttributes<HTMLLIElement>, 'color'>,
        ListItemStyleProps,
        Pick<ComponentProps, 'firstElement' | 'lastElement'> {
    text: string
    secondaryText?: string
}
