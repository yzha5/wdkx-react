import { NavbarProps } from './types'
import StyledNavbar from './styled'

export default function ({ ...rest }: NavbarProps) {
    return <StyledNavbar {...rest} />
}
