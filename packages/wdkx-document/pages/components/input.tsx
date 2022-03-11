import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { Input } from '@wdkx/component-react'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'

function Preview() {
    const { color, radius, disabled } = PropsController()
    return PreviewTemplate(
        <Input
            color={color.value || undefined}
            radius={radius.value}
            disabled={disabled.value}
            placeholder='Placeholder'
        />,
        [color.component, radius.component, disabled.component]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/input.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/input.md`
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
                <title>Input - components</title>
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
