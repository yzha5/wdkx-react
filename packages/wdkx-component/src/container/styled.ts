import styled from '@emotion/styled'
import { ContainerStyleProps } from './types'

export default styled.div<ContainerStyleProps>(({ maxWidth, theme }) => ({
    label: 'container',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: maxWidth === undefined ? undefined : theme.breakpoints[maxWidth],
    width: maxWidth === undefined ? '100%' : undefined,
}))
