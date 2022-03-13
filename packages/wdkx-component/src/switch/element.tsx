import StyledSwitch from './styled'
import { SwitchProps } from './types'

export default function ({
    color,
    size,
    radius,
    disabled,
    ...rest
}: SwitchProps) {
    const rootRest = { color, size, radius, disabled }
    return (
        <StyledSwitch {...rootRest}>
            <input type='checkbox' disabled={disabled} {...rest} />
            <span />
            <button />
        </StyledSwitch>
    )
}
