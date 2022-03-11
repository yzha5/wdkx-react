import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { Airplane } from '@wdkx/icon-react'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Button } from '@wdkx/component-react'

function Preview() {
    const { color, size, radius, mode, light, fluid, icon, shadowed } =
        PropsController()
    return PreviewTemplate(
        <Button
            color={color.value}
            size={size.value}
            radius={radius.value}
            mode={mode.value}
            light={light.value}
            fluid={fluid.value}
            icon={icon.value}
            shadowed={shadowed.value}
            firstElement={icon.value ? undefined : <Airplane size='1em' />}
            lastElement={
                icon.value ? undefined : (
                    <div style={{ backgroundColor: 'green' }}>
                        A div element
                    </div>
                )
            }
        >
            {icon.value ? <Airplane size='1em' /> : 'button'}
        </Button>,
        [
            color.component,
            size.component,
            radius.component,
            mode.component,
            light.component,
            fluid.component,
            icon.component,
            shadowed.component,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/button.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/button.md`
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
                <title>Button - components</title>
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
