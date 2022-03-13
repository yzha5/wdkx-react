import { StyledCheck, StyledCheckContainer } from './styled'
import { CheckProps } from './types'

const Checkbox = (
    <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M4.25 9.75L8.25 13.75L15.75 6.25'
            stroke='currentColor'
            strokeWidth='3'
        />
    </svg>
)
const Indeterminate = (
    <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M5 10H15' stroke='currentColor' strokeWidth='3' />
    </svg>
)
export default function ({
    size,
    type = 'checkbox',
    indeterminate,
    ...rest
}: CheckProps) {
    return (
        <StyledCheckContainer size={size}>
            <StyledCheck
                type={type}
                setSize={size}
                indeterminate={indeterminate}
                {...rest}
            />
            <span aria-label='check-icon'>
                {type === 'checkbox' && indeterminate && Indeterminate}
                {type === 'checkbox' && !indeterminate && Checkbox}
            </span>
        </StyledCheckContainer>
    )
}
