import styled from '@emotion/styled'
import { NewColor } from '@wdkx/theme-react'
import { CalcRadius } from '@wdkx/util-react'
import { InputStyleProps } from './types'

export default styled.input<InputStyleProps>(
    ({ color = 'secondary', fluid, radius, theme }) => {
        const c = NewColor(color, theme)

        return {
            label: 'input',
            outline: 'none',
            height: '1.5rem',
            borderWidth: '0.0625rem',
            backgroundColor: 'unset',
            color: 'inherit',
            paddingLeft: '.5rem',
            paddingRight: '.5rem',
            width: fluid ? '100%' : undefined,
            borderStyle: 'solid',
            borderColor: c.value,
            borderRadius: `${CalcRadius(radius, 1.5)}rem`,
            '&::placeholder': {
                color: theme.palette.secondary.lightRatio(0.5).value,
            },
            '&:focus': {
                borderColor: c.active().value,
            },
            '&:disabled': {
                cursor: 'not-allowed',
                borderColor: theme.palette.disabled.border,
                color: theme.palette.disabled.text,
                backgroundColor: theme.palette.disabled.background,
            },
        }
    }
)
