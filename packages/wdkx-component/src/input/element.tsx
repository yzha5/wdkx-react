import { InputProps } from './types'
import StyledInput from './styled'

export default function ({ ...rest }: InputProps) {
    return <StyledInput {...rest} />
}
