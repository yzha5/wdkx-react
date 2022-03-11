import styled from '@emotion/styled'
import { NumberFieldContainerStyleProps, NumberFieldStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { CalcRadius, ShadowWithColor } from '@wdkx/util-react'

export const StyledNumberFieldContainer =
    styled.div<NumberFieldContainerStyleProps>(({ fluid, theme }) => {
        return {
            label: 'text-field-container',
            width: fluid ? '100%' : undefined,
        }
    })

export const StyledNumberField = styled.label<NumberFieldStyleProps>(
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
            paddingLeft: `${(height * 0.5) / 2.5}rem`,
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
            '&>div>button': {
                display: 'flex',
                outline: 'none',
                border: 'none',
                borderRadius: '50%',
                padding: `${(size * 0.4) / 2.5}rem`,
                width: `${(size * 1.5) / 2.5}rem`,
                height: `${(size * 1.5) / 2.5}rem`,
                '&:not(:disabled)': {
                    backgroundColor: c.value,
                    color: c.text().value,
                },
                '&:hover:not(:disabled)': {
                    backgroundColor: c.hover().value,
                    color: c.hover().text().value,
                },
                // '&:active:not(:disabled)': {
                //     backgroundColor: c.active().value,
                //     color: c.active().text().value,
                // },
                '&:disabled': {
                    backgroundColor: theme.palette.disabled.background,
                    color: theme.palette.disabled.text,
                },
            },

            '& [aria-label=text-field-label]': {
                fontSize: `${(size * 0.75) / 2.5}rem`,
                lineHeight: `${size / 2.5}rem`,
                textAlign: 'center',
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
                //隐藏数字输入框上下两个按钮
                '&::-webkit-outer-spin-button,&::-webkit-inner-spin-button': {
                    WebkitAppearance: 'none',
                },
                '&[type="number"]': {
                    MozAppearance: 'textfield',
                },

                outline: 'none',
                border: 'none',
                boxShadow: 'none',
                padding: 0,
                width: '100%',
                fontWeight: 500,
                backgroundColor: 'unset',
                lineHeight: `1em`,
                textAlign: 'center',
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
            '&:focus-within:not(button)': {
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
