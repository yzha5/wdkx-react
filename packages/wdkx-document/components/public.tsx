import styled from '@emotion/styled'

export const FlexContainer = styled.div({
    label: 'doc-flex-container',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '&>*': {
        margin: '.5rem',
    },
})
