import styled from '@emotion/styled'

export default styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '&>*:not(:first-of-type)': {
        marginLeft: '1rem',
    },
})
