import { BadgeProps } from './types'
import StyledBadge from './styled'

export default function ({ children, ...rest }: BadgeProps) {
    return <StyledBadge {...rest}>{children}</StyledBadge>
}
