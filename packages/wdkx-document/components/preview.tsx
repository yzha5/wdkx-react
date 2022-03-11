import styled from '@emotion/styled'
import { ReactNode } from 'react'

const PreviewContainer = styled.div(({ theme }) => ({
    display: 'flex',
    border: `solid 1px ${theme.palette.secondary.lightRatio(0.5).value}`,
    borderRadius: '.5rem',
    overflow: 'hidden',
}))

const PreviewBox = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.view,
}))

const PreviewControl = styled.div(({ theme }) => ({
    padding: '1rem',
    width: '20rem',
    backgroundColor: theme.palette.secondary.lightRatio(0.9).value,
    '& >table': {
        width: '100%',
        borderCollapse: 'collapse',
        borderStyle: 'hidden',
        '& tr>td': {
            padding: '.5rem',
            '&:first-of-type': {
                textAlign: 'right',
            },
        },
    },
}))

export function PreviewTemplate(
    previewComponent: ReactNode,
    controlComponents: JSX.Element[]
) {
    return (
        <PreviewContainer>
            <PreviewBox>{previewComponent}</PreviewBox>
            <PreviewControl>
                <table>
                    <tbody>{controlComponents}</tbody>
                </table>
            </PreviewControl>
        </PreviewContainer>
    )
}
