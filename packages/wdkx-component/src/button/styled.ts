import styled from '@emotion/styled'
import { ButtonStyleProps } from './types'
import {
    CalcRadius,
    GeneralComponentSize,
    ShadowWithColor,
} from '@wdkx/util-react'
import { NewColor } from '@wdkx/theme-react'

export default styled.button<ButtonStyleProps>(
    ({
        color = 'primary',
        light,
        size = 'md',
        radius,
        mode = 'filled',
        fluid,
        shadowed,
        icon,
        disabled,
        theme,
    }) => {
        //component color
        const newColor = NewColor(color, theme)
        const c = light ? newColor.light() : newColor

        //component background
        const bgc =
            mode === 'filled'
                ? disabled
                    ? theme.palette.disabled.background
                    : c.value
                : 'unset'

        //component text color
        const textColor = disabled
            ? theme.palette.disabled.text
            : mode === 'filled'
            ? c.text().value
            : newColor.dark().value

        //component border color
        const borderColor = disabled ? theme.palette.disabled.border : c.value

        //component height
        const height = GeneralComponentSize(size)

        //component font
        const fontSize = height / 3

        return {
            label: 'button',
            outline: 'none',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
            fontWeight: 500,
            textTransform: 'uppercase',
            userSelect: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.1s ease',
            cursor: disabled ? 'not-allowed' : 'pointer',

            fontSize: `${fontSize}rem`,
            width: icon ? '3em' : fluid ? '100%' : undefined,
            height: '3em',
            lineHeight: '1.5em',
            padding: '0 1.5em',

            borderStyle: mode === 'outlined' ? 'solid' : 'none',
            borderWidth:
                mode === 'outlined'
                    ? `${(0.0625 / 2.5) * height}rem`
                    : undefined,
            borderColor: borderColor,
            borderRadius: `${CalcRadius(radius, height)}rem`,

            backgroundColor: bgc,
            color: textColor,
            boxShadow: shadowed ? ShadowWithColor(c.value!) : undefined, //参数里已经给了颜色默认值，所以c.value不存在undefined的情况，故用感叹号

            '& svg': {
                width: icon ? '1.5em' : undefined,
                height: icon ? '1.5em' : undefined,
            },
            '&>.ripple--container span': {
                backgroundColor: mode === 'filled' ? c.text().value : c.value,
            },
            '&>*:not(.ripple--container):not(:first-of-type)': {
                marginLeft: `0.5em`,
            },

            '&:hover': {
                backgroundColor: disabled
                    ? undefined
                    : mode === 'filled'
                    ? c.hover().value
                    : NewColor(undefined, theme).hover().value,
                color: disabled
                    ? undefined
                    : mode === 'filled'
                    ? c.hover().text().value
                    : 'inherit',
            },
        }
    }
)
