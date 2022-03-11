import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PreviewTemplate } from '../../components/preview'
import { Button, Folding } from '@wdkx/component-react'

function Preview() {
    const [open, setOpen] = useState(false)
    return PreviewTemplate(
        <div style={{ padding: '1rem' }}>
            <Folding
                open={open}
                resident={
                    <Button onClick={() => setOpen(!open)}>Click me!</Button>
                }
                panelStyle={{ border: 'dashed 1px red' }}
            >
                <h5>Content panel</h5>
                <p>
                    You can change the style of the panel by using the property
                    panelStyle/panelClassName
                </p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </Folding>
        </div>,
        []
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/folding.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/folding.md`
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
                <title>Folding - components</title>
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
