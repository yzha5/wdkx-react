import React, { MouseEvent } from 'react'
import { ButtonProps } from './types'
import StyledButton from './styled'
import { StyledElement } from '../common'
import { ShowRipple } from '@wdkx/util-react'

export default function ({
    firstElement,
    lastElement,
    className,
    onMouseDown,
    children,
    radius,
    ...rest
}: ButtonProps) {
    const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
        onMouseDown && onMouseDown(e)
        ShowRipple(e)
    }
    return (
        <StyledButton
            className={['ripple', className].join(' ')}
            onMouseDown={handleMouseDown}
            radius={radius}
            {...rest}
        >
            {firstElement && <StyledElement>{firstElement}</StyledElement>}
            <StyledElement>{children}</StyledElement>
            {lastElement && <StyledElement>{lastElement}</StyledElement>}
        </StyledButton>
    )
}
