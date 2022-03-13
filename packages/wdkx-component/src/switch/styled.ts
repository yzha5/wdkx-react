import styled from '@emotion/styled'
import { SwitchStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { CalcRadius, GeneralComponentSize } from '@wdkx/util-react'

export default styled.span<SwitchStyleProps>(
    ({ color, size, radius = 'full', disabled, theme }) => {
        const c = NewColor(color, theme)
        const s = GeneralComponentSize(size)
        const r = CalcRadius(radius, s)
        return {
            label: 'switch',
            position: 'relative',
            overflow: 'hidden',
            width: `${s * 1.8}rem`,
            height: `${s}rem`,
            borderRadius: `${r}rem`,
            '&>span': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'inherit',
                height: 'inherit',
                backgroundColor: disabled
                    ? theme.palette.disabled.background
                    : c.light().toString(),
            },
            '&>*': {
                cursor: disabled ? 'not-allowed' : 'pointer',
                transition: '0.2s ease',
            },

            '&>input': {
                width: 'inherit',
                height: 'inherit',
                position: 'relative',
                left: 0,
                top: 0,
                margin: 0,
                padding: 0,
                outline: 'none',
                border: 'none',
                opacity: 0,
                zIndex: 1,
            },
            '&>button': {
                position: 'absolute',
                border: 'none',
                left: `${s * 0.1}rem`,
                top: `${s * 0.1}rem`,
                width: `${s * 0.8}rem`,
                height: `${s * 0.8}rem`,
                backgroundColor: disabled
                    ? theme.palette.disabled.text
                    : c.dark().toString(),
                borderRadius: `${CalcRadius(radius, s * 0.8)}rem`,
            },
            '&>input:checked~button': {
                left: `${s * 0.9}rem`,
                backgroundColor: disabled
                    ? theme.palette.disabled.text
                    : c.text().toString(),
            },
            '&>input:checked~span': !disabled && {
                backgroundColor: c.toString(),
            },
        }
    }
)
