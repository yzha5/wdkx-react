import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PreviewTemplate } from '../../components/preview'
import { Avatar, Badge, Toolbar, View } from '@wdkx/component-react'

function Preview() {
    return PreviewTemplate(
        <View style={{ width: '100%' }}>
            <Toolbar>
                <Avatar color='primary' radius='full'>
                    Logo
                </Avatar>
                <div>
                    <Toolbar>
                        <Badge color='primary'>badge</Badge>
                        <Badge color='primary'>badge</Badge>
                        <Badge color='primary'>badge</Badge>
                    </Toolbar>
                </div>
            </Toolbar>
        </View>,
        []
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/toolbar.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/toolbar.md`
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
                <title>Toolbar - components</title>
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
