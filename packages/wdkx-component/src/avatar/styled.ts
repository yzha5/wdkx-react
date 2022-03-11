import styled from '@emotion/styled'
import { AvatarStyleProps } from './types'
import { CalcRadius, GeneralComponentSize } from '@wdkx/util-react'
import { NewColor } from '@wdkx/theme-react'

export default styled.span<AvatarStyleProps>(
    ({ color, light, radius, size, theme }) => {
        const newColor = NewColor(color, theme)
        const c = light ? newColor.light() : newColor

        const s = GeneralComponentSize(size)
        return {
            label: 'avatar',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: c.value,
            color: c.text().value,
            fontSize: `${s / 3}rem`,
            fontWeight: 500,
            width: `${s}rem`,
            height: `${s}rem`,
            borderRadius: `${CalcRadius(radius, s)}rem`,
        }
    }
)
