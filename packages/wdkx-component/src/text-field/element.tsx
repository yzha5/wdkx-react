import { FieldMessage, StyledElement } from '../common'
import { TextFieldProps } from './types'
import { StyledTextField, StyledTextFieldContainer } from './styled'

export default function ({
    className,
    style,
    color,
    size,
    radius,
    fluid,
    label,
    type = 'text',
    message,
    firstElement,
    lastElement,
    shadowed,
    shadowOnInteract,
    disabled,
    ...rest
}: TextFieldProps) {
    return (
        <StyledTextFieldContainer fluid={fluid}>
            <StyledTextField
                color={color}
                size={size}
                radius={radius}
                shadowed={shadowed}
                shadowOnInteract={shadowOnInteract}
                className={className}
                disabled={disabled}
                style={style}
            >
                {firstElement && <StyledElement>{firstElement}</StyledElement>}
                <div aria-label='text-field-content'>
                    <div aria-label='text-field-instance'>
                        {label && (
                            <div aria-label='text-field-label'>{label}</div>
                        )}
                        <input type={type} disabled={disabled} {...rest} />
                    </div>
                    {lastElement && (
                        <StyledElement>{lastElement}</StyledElement>
                    )}
                </div>
            </StyledTextField>
            {message && (
                <FieldMessage color={color} disabled={disabled}>
                    {message}
                </FieldMessage>
            )}
        </StyledTextFieldContainer>
    )
}
