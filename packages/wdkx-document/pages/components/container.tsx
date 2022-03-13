import { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { getDocumentLayout } from '../../layouts/document'
import Markdown from '../../components/markdown'
import { PreviewTemplate } from '../../components/preview'
import { Container } from '@wdkx/component-react'

function Preview() {
    const [mw, setMw] = useState<'sm' | 'md' | 'lg' | 'xl' | undefined>(
        undefined
    )
    return PreviewTemplate(
        <div style={{ width: '100%' }}>
            <Container style={{ border: 'dashed 1px red' }} maxWidth={mw}>
                container
            </Container>
        </div>,
        [
            <tr key='max-width'>
                <td>maxWidth</td>
                <td>
                    <select
                        onChange={(e) => {
                            if (e.target.value === 'auto') {
                                setMw(undefined)
                            } else {
                                setMw(
                                    e.target.value as 'sm' | 'md' | 'lg' | 'xl'
                                )
                            }
                        }}
                    >
                        <option value='auto'>auto</option>
                        <option value='sm'>sm</option>
                        <option value='md'>md</option>
                        <option value='lg'>lg</option>
                        <option value='xl'>xl</option>
                    </select>
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/container.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/container.md`
            )
                .then((content) => {
                    setContent(content.default)
                })
                .catch((e) => {
                    throw e
                })
        })
    return (
        <>
            <Head>
                <title>Container - components</title>
            </Head>
            <Markdown
                children={content}
                components={{
                    Preview: { component: Preview },
                }}
            />
        </>
    )
}

Page.getLayout = getDocumentLayout
export default Page
