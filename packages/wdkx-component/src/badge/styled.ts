import styled from '@emotion/styled'
import { CalcRadius, GeneralComponentSize } from '@wdkx/util-react'
import { BadgeStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'

export default styled.span<BadgeStyleProps>(
    ({ color, light, size = 'xs', theme }) => {
        // component color
        const c = NewColor(color, theme)

        // size
        const s = GeneralComponentSize(size)

        return {
            label: 'badge',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 .5em',
            fontSize: `${s * 0.5}rem`,
            lineHeight: `${s}rem`,
            height: `${s}rem`,
            borderRadius: `${CalcRadius('full', s)}rem`,
            backgroundColor: light ? c.light().toString() : c.toString(),
            color: light ? c.dark().toString() : c.text().toString(),
        }
    }
)
