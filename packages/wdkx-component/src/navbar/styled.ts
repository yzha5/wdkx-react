import styled from '@emotion/styled'
import { NavbarStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import {
    ColorFrosted,
    ContrastShadowWithColor,
    FrostValue,
    ShadowWithColor,
} from '@wdkx/util-react'

export default styled.nav<NavbarStyleProps>(
    ({ color, light, fixed, frosted, dense, shadowed, theme }) => {
        const newColor = NewColor(color, theme)
        const c = light ? newColor.light() : newColor
        return {
            label: 'navbar',
            width: '100%',
            transaction: 'all 0.1s',
            position: fixed ? 'fixed' : undefined,
            backgroundColor: frosted ? ColorFrosted(c.value!) : c.value,
            color: c.text().value,
            backdropFilter: frosted ? FrostValue() : undefined,
            padding: dense ? '0.25rem 1rem' : '0.5rem 1rem',
            boxShadow: shadowed
                ? theme.palette.scheme === 'light'
                    ? ShadowWithColor('black')
                    : ContrastShadowWithColor('black')
                : undefined,
            zIndex: theme.zIndex.navbar,
        }
    }
)
