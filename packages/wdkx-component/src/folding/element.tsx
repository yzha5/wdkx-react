import {
    StyledFolding,
    StyledFoldingPanel,
    StyledFoldingResident,
} from './styled'
import { FoldingProps } from './types'

export default function ({
    open,
    resident,
    panelStyle,
    panelClassName,
    children,
    ...rest
}: FoldingProps) {
    return (
        <StyledFolding {...rest}>
            <StyledFoldingResident>{resident}</StyledFoldingResident>
            {open && (
                <StyledFoldingPanel
                    style={panelStyle}
                    className={panelClassName}
                >
                    {children}
                </StyledFoldingPanel>
            )}
        </StyledFolding>
    )
}
