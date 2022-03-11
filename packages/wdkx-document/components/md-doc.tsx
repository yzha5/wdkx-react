import styled from '@emotion/styled'
import { CSSObject } from '@emotion/react'

//tag code
const codeCss: CSSObject = {
    label: 'doc-code',
    fontSize: '0.875rem',
    fontFamily: '"Fira Code"',
    whiteSpace: 'pre-wrap',
}

//tag pre
export const MdPre = styled.pre(({ theme }) => {
    const background =
        theme.palette.scheme === 'dark'
            ? theme.palette.primary.light()
            : theme.palette.primary.dark()
    return {
        label: 'doc-pre',
        padding: '1rem',
        backgroundColor: background.value,
        color: 'white',
        margin: '0',
        '&>code': {
            ...codeCss,
            backgroundColor: 'unset',
            color: 'unset',
            padding: 0,
        },
    }
})

//tag code
export const MdCode = styled.code(({ theme }) => {
    const background = theme.palette.secondary.lightRatio(0.6)
    return {
        label: 'doc-code-style',
        backgroundColor: background.value,
        color: background.text().value,
        padding: '0 0.25rem',
        borderRadius: '0.25rem',
        ...codeCss,
    }
})

//tag blockquote
export const MdBlockquote = styled.blockquote(({ theme }) => {
    const c = theme.palette.secondary
    return {
        label: 'doc-blockquote',
        fontSize: '0.875rem',
        padding: '0.0625rem 0.5rem',
        color: c.value,
        borderLeft: `solid 0.5rem ${c.lightRatio(0.5).value}`,
        margin: '1rem 0',
    }
})

//tag table
export const MdTable = styled.table(({ theme }) => {
    const { palette } = theme
    return {
        label: 'doc-table',
        width: '100%',
        borderCollapse: 'collapse',
        borderStyle: 'hidden',
        '& th': {
            color: palette.secondary.value,
        },
        '& th,& td': {
            padding: '0.75rem',
        },
        '&>thead tr': {
            borderBottom: `solid 1px ${
                palette.secondary.lightRatio(0.5).value
            }`,
        },
        '&>tbody tr': {
            borderBottom: `solid 1px ${palette.secondary.light().value}`,
        },
        '& td': { fontSize: '0.875rem' },
    }
})
