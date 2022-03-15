import styled from '@emotion/styled'
import { ChipStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { GeneralComponentSize } from '@wdkx/util-react'

export default styled.span<ChipStyleProps>(({ color, light, size, theme }) => {
    const newColor = NewColor(color, theme)
    const c = light ? newColor.light() : newColor
    const newSize = GeneralComponentSize(size)
    const s = newSize < 1.5 ? 1.5 : newSize
    const gap = `${(s * 0.5) / 2.5}rem`
    return {
        label: 'chip',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: `${s / 2}rem`,
        padding: gap,
        paddingLeft: `${s / 2.5}rem`,
        fontSize: `${s / 3}rem`,
        height: `${s}rem`,
        backgroundColor: c.toString(),
        color: c.text().toString(),
        '&>button': {
            border: 'none',
            outline: 'none',
            marginLeft: gap,
            padding: `${(s * 0.25) / 2.5}rem`,
            fontSize: 'inherit',
            width: '1.5em',
            height: '1.5em',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: c.text().toString(),
            backgroundColor: c.toString(),
            '&::before': {
                content: `'✕'`,
            },
            '&:hover': {
                backgroundColor: c.hover().toString(),
                color: c.hover().text().toString(),
            },
            '&:active': {
                backgroundColor: c.active().toString(),
                color: c.active().text().toString(),
            },
        },
    }
})
