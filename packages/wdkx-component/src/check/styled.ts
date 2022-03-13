import styled from '@emotion/styled'
import { CalcRadius, GeneralComponentSize } from '@wdkx/util-react'
import { CheckContainerStyleProps, CheckStyleProps } from './types'
import { ComponentSize } from '@wdkx/types-react'
import { NewColor } from '@wdkx/theme-react'

export const StyledCheckContainer = styled.span<CheckContainerStyleProps>(
    ({ size, theme }) => {
        return {
            label: 'check',
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${GeneralComponentSize(size) / 2}rem`,
            height: `${GeneralComponentSize(size) / 2}rem`,
            '&>*': {
                position: 'absolute',
            },
        }
    }
)
export const StyledCheck = styled.input<
    CheckStyleProps & { setSize?: ComponentSize }
>(({ color, setSize, radius, indeterminate, disabled, theme }) => {
    const c = NewColor(color, theme)
    const s = GeneralComponentSize(setSize) / 2
    const r = CalcRadius(radius, s)
    return {
        zIndex: 6,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        opacity: 0,
        cursor: disabled ? 'not-allowed' : 'pointer',

        //icon
        '&+span[aria-label=check-icon]': {
            width: `${s}rem`,
            height: `${s}rem`,
            border: `solid ${(s * 0.125) / 1.25}rem ${
                disabled ? theme.palette.disabled.border : c.toString()
            }`,
            borderRadius: `${r}rem`,
            '&>svg': {
                opacity: 0,
            },
        },
        '&:checked+span[aria-label=check-icon]': {
            backgroundColor: disabled
                ? theme.palette.disabled.background
                : c.toString(),
            color: disabled ? theme.palette.disabled.text : c.text().toString(),
            '&>svg': {
                opacity: 1,
            },
        },
    }
})
