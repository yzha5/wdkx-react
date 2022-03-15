import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import Chip from '../../pkg-local/chip'

function Preview() {
    const { color, light, size } = PropsController()
    const chip = (
        <Chip
            text='abc'
            onCloseClick={(e) => {
                alert('You clicked button')
            }}
            color={color.value}
            light={light.value}
            size={size.value}
        />
    )
    return PreviewTemplate(<>{chip}</>, [
        color.component,
        size.component,
        light.component,
    ])
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/chip.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/chip.md`
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
                <title>Chip - components</title>
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
