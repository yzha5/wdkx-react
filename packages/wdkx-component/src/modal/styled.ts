import styled from '@emotion/styled'
import { ModalStyleProps } from './types'
import { NewColor } from '@wdkx/theme-react'
import { FrostValue } from '@wdkx/util-react'

export const StyledModalRoot = styled.div<ModalStyleProps>(
    ({ color, frosted, alpha = 0.8, theme }) => {
        const c = NewColor(color, theme)

        return {
            label: 'modal',
            position: 'fixed',
            zIndex: theme.zIndex.backplate,
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: c.alpha(alpha).toString(),
            backdropFilter: frosted ? FrostValue() : undefined,
        }
    }
)

export const StyledBackPanel = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'inherit',
    height: 'inherit',
    zIndex: -1,
})
