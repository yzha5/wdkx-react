import { AvatarProps } from './types'
import StyledAvatar from './styled'

export default function ({ children, ...rest }: AvatarProps) {
    return (
        <StyledAvatar {...rest}>
            {typeof children === 'string' && children !== ''
                ? children.substring(0, 1)
                : children}
        </StyledAvatar>
    )
}
