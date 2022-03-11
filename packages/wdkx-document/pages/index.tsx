import { getDocumentLayout } from '../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../components/markdown'
import Head from 'next/head'

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../i18n/pages/${router.locale}/index.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(`../i18n/pages/${router.defaultLocale}/index.md`)
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
                <title>Home</title>
            </Head>
            <Markdown children={content} />
        </>
    )
}

Page.getLayout = getDocumentLayout
export default Page
