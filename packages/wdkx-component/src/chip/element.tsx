import { ChipProps } from './types'
import StyledChip from './styled'

export default function ({ text, onCloseClick, ...rest }: ChipProps) {
    return (
        <StyledChip {...rest}>
            {text}
            <button onClick={onCloseClick} />
        </StyledChip>
    )
}
