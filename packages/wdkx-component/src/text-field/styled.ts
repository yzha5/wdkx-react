import styled from '@emotion/styled'
import { TextFieldContainerStyleProps, TextFieldStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { CalcRadius, ShadowWithColor } from '@wdkx/util-react'

export const StyledTextFieldContainer =
    styled.div<TextFieldContainerStyleProps>(({ fluid, theme }) => {
        return {
            label: 'text-field-container',
            width: fluid ? '100%' : undefined,
        }
    })

export const StyledTextField = styled.label<TextFieldStyleProps>(
    ({
        color = 'secondary',
        size = 2.5,
        radius,
        shadowed,
        shadowOnInteract,
        disabled,
        theme,
    }) => {
        const c = NewColor(color, theme)
        const height = size < 2.5 ? 2.5 : size

        return {
            label: 'text-field',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            fontSize: '1rem',
            height: `${height}rem`,
            paddingLeft: `${height / 2.5}rem`,
            paddingRight: `${(height * 0.5) / 2.5}rem`,
            color: disabled ? theme.palette.disabled.text : c.value,
            backgroundColor: disabled
                ? theme.palette.disabled.background
                : undefined,
            borderStyle: 'solid',
            borderWidth: `${(height * 0.0625) / 2.5}rem`,
            borderColor: disabled ? theme.palette.disabled.border : c.value,
            borderRadius: `${CalcRadius(radius, height)}rem`,
            boxShadow:
                !disabled && shadowed && !shadowOnInteract
                    ? ShadowWithColor(c.value!)
                    : undefined,
            '&>*:not(:first-of-type)': {
                marginLeft: '1em',
            },
            '& [aria-label=text-field-content]': {
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                '&>*:not(:first-of-type)': {
                    marginLeft: '1em',
                },
            },
            '& [aria-label=text-field-label]': {
                fontSize: `${(size * 0.75) / 2.5}rem`,
                lineHeight: `${size / 2.5}rem`,
                color: disabled
                    ? theme.palette.disabled.text
                    : theme.palette.secondary.value,
                userSelect: 'none',
            },
            '& [aria-label=text-field-instance]': {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            },
            '& input': {
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                padding: 0,
                width: '100%',
                fontWeight: 500,
                backgroundColor: 'unset',
                lineHeight: `1em`,
                color: disabled ? theme.palette.disabled.text : c.dark().value,
                fontSize: `${(size * 0.875) / 2.5}rem`,
                '&::placeholder': {
                    color: theme.palette.secondary.lightRatio(0.5).value,
                },
            },
            '&:hover': {
                borderColor: !disabled ? c.hover().value : undefined,
                boxShadow:
                    !disabled && shadowed && shadowOnInteract
                        ? ShadowWithColor(c.value!)
                        : undefined,
            },
            '&:focus-within': {
                borderColor: !disabled ? c.active().value : undefined,
                boxShadow:
                    !disabled && shadowed && shadowOnInteract
                        ? ShadowWithColor(c.value!)
                        : undefined,
            },

            cursor: disabled ? 'not-allowed' : 'text',
            '& *': {
                cursor: disabled ? 'not-allowed' : undefined,
            },
        }
    }
)
