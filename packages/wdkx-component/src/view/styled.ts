import styled from '@emotion/styled'
import {
    CalcRadius,
    ColorFrosted,
    ContrastShadowWithColor,
    FrostValue,
    ShadowWithColor,
} from '@wdkx/util-react'
import { NewColor } from '@wdkx/theme-react'
import { ViewStyleProps } from './types'

export default styled.div<ViewStyleProps>(
    ({ color, frosted, radius, shadowed, theme }) => {
        const c = NewColor(color || theme.palette.background.view, theme)
        return {
            label: 'view',
            overflow: 'hidden',
            borderRadius: radius ? `${CalcRadius(radius, 2.5)}rem` : undefined,
            backgroundColor: frosted
                ? ColorFrosted(c.toString()!)
                : c.toString(),
            color: color ? c.text().toString() : undefined,
            backdropFilter: frosted ? FrostValue() : undefined,
            boxShadow: shadowed
                ? theme.palette.scheme === 'light'
                    ? ShadowWithColor('black')
                    : ContrastShadowWithColor('black')
                : undefined,
        }
    }
)
