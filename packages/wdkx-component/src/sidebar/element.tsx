import Backplate from '../backplate'
import StyledSidebar from './styled'
import { SidebarProps } from './types'

export default function ({ backplateProps, ...rest }: SidebarProps) {
    return (
        <Backplate {...backplateProps}>
            <StyledSidebar {...rest} />
        </Backplate>
    )
}
