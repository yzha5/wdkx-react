import styled from '@emotion/styled'
import { BackplateStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { FrostValue } from '@wdkx/util-react'

export const StyledBackplate = styled.div<BackplateStyleProps>(
    ({ color, frosted, alpha = 0.8, theme }) => {
        const newColor = NewColor(color, theme)
        return {
            label: 'backplate',
            position: 'fixed',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            transition: 'all 0.2s ease',
            backgroundColor: color
                ? newColor.alpha(alpha).toString()
                : undefined,
            backdropFilter: frosted ? FrostValue() : undefined,
            zIndex: theme.zIndex.backplate,
        }
    }
)
export const StyledBackplatePanel = styled.div({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
})
