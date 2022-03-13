import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { MouseEvent, useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Backplate, Button } from '@wdkx/component-react'

function Preview() {
    const { color, alpha, frosted } = PropsController()
    const [show, setShow] = useState(false)
    const handleBlankClick = (e: MouseEvent<HTMLDivElement>) => {
        setShow(false)
    }
    return PreviewTemplate(
        <>
            <Button onClick={() => setShow(true)}>show backplate</Button>
            {show && (
                <Backplate
                    color={color.value || undefined}
                    alpha={alpha.value || undefined}
                    frosted={frosted.value}
                    onBlankClick={handleBlankClick}
                >
                    <h3>Click blank or button to close</h3>
                    <Button onClick={() => setShow(false)}>
                        close backplate
                    </Button>
                    <div
                        style={{
                            width: '20rem',
                            height: '10rem',
                            backgroundColor: 'red',
                        }}
                    >
                        When you click on this area, the 'onBlankClick' event
                        will not be fired
                    </div>
                </Backplate>
            )}
        </>,
        [color.component, alpha.component, frosted.component]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    const [show, setShow] = useState(false)
    const handleBlankClick = (e: MouseEvent<HTMLDivElement>) => {
        setShow(false)
    }
    import(`../../i18n/pages/${router.locale}/components/backplate.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/backplate.md`
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
                <title>Backplate - components</title>
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
