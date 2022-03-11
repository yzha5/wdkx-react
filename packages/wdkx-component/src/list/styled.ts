import styled from '@emotion/styled'
import { ListItemStyleProps, ListStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { CalcRadius } from '@wdkx/util-react'

export const StyledList = styled.ul<ListStyleProps>(
    ({ dense, radius, theme }) => {
        return {
            label: 'list',
            width: '100%',
            listStyleType: 'none',
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingInlineStart: 0,
            padding: '.25rem 0',
            userSelect: 'none',
            '& li': {
                padding: `${dense ? 0.25 : 0.5}rem 1rem`,
                borderRadius: `${CalcRadius(radius, 2.5)}rem`,
            },
        }
    }
)

export const StyledListItem = styled.li<ListItemStyleProps>(
    ({ color, light, selected, disabled, theme }) => {
        const newColor = NewColor(color, theme)
        const c = light ? newColor.light() : newColor

        const disabledTextColor = theme.palette.disabled.text

        return {
            label: 'list-item',
            fontSize: '.875rem',
            display: 'flex',
            transition: 'all 0.1s ease',
            cursor: disabled ? 'not-allowed' : undefined,
            backgroundColor: selected
                ? disabled
                    ? theme.palette.disabled.background
                    : c.active().value
                : undefined,
            color: disabled
                ? disabledTextColor
                : selected
                ? c.active().text().value
                : 'inherit',
            '&>.ripple--container span': {
                backgroundColor: c.active().text().value,
            },
            '&>*:not(.ripple--container):not(:first-of-type)': {},
            '&:hover': !selected &&
                !disabled && {
                    backgroundColor: c.hover().value,
                    color: c.hover().text().value,
                    '&>div>div>.secondary-text': {
                        color: c.hover().secondaryText().value,
                    },
                },
            '&>div>div>.secondary-text': {
                color: disabled
                    ? disabledTextColor
                    : selected
                    ? c.active().secondaryText().value
                    : NewColor(undefined, theme).secondaryText().value,
                fontSize: '.75rem',
            },
        }
    }
)
export const StyledListItemContainer = styled.div(({ theme }) => {
    return {
        label: 'list-item-container',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:not(:first-of-type)': {
            marginLeft: '1rem',
        },
    }
})
export const StyledListItemContent = styled.div({
    label: 'list-item-content',
})

export const StyledListTitle = styled.li(({ theme }) => {
    return {
        label: 'list-title',
        fontSize: '1rem',
        fontWeight: 500,
        marginTop: '1rem',
        color: theme.palette.secondary.lightRatio(0.5).value,
    }
})
