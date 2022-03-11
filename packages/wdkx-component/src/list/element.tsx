import {
    StyledList,
    StyledListItem,
    StyledListItemContainer,
    StyledListItemContent,
} from './styled'
import { ListItemProps, ListProps } from './types'
import { MouseEvent } from 'react'
import { ShowRipple } from '@wdkx/util-react'
import { StyledElement } from '../common'

export function List({ children, ...rest }: ListProps) {
    return <StyledList {...rest}>{children}</StyledList>
}

export function ListItem({
    firstElement,
    lastElement,
    text,
    secondaryText,
    disabled,
    className,
    onMouseDown,
    children,
    ...rest
}: ListItemProps) {
    const handleMouseDown = (e: MouseEvent<HTMLLIElement>) => {
        onMouseDown && onMouseDown(e)
        !disabled && ShowRipple(e)
    }
    return (
        <StyledListItem
            className={['ripple', className].join(' ')}
            onMouseDown={handleMouseDown}
            disabled={disabled}
            {...rest}
        >
            {firstElement && <StyledElement>{firstElement}</StyledElement>}
            <StyledListItemContainer>
                <StyledListItemContent>
                    <div className='primary-text'>{text}</div>
                    {secondaryText && (
                        <div className='secondary-text'>{secondaryText}</div>
                    )}
                </StyledListItemContent>
                {lastElement && (
                    <StyledElement style={{ marginLeft: '1rem' }}>
                        {lastElement}
                    </StyledElement>
                )}
            </StyledListItemContainer>
        </StyledListItem>
    )
}
