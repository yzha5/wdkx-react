import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { View } from '@wdkx/component-react'

function Preview() {
    const { color, radius, frosted, shadowed } = PropsController()
    return PreviewTemplate(
        <View
            color={color.value}
            radius={radius.value}
            frosted={frosted.value}
            shadowed={shadowed.value}
        >
            <h5>View component</h5>
            <p>content</p>
            <p>content</p>
            <p>content</p>
        </View>,
        [
            color.component,
            radius.component,
            frosted.component,
            shadowed.component,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/view.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/view.md`
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
                <title>View - components</title>
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
