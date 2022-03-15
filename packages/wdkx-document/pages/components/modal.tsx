import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Button, Modal, Switch, View } from '@wdkx/component-react'
function Preview() {
    const [show, setShow] = useState(false)
    const { color, alpha, frosted } = PropsController()
    return PreviewTemplate(
        <Modal
            show={show}
            color={color.value}
            frosted={frosted.value}
            alpha={alpha.value}
            onBlankClick={(e) => setShow(false)}
            panel={
                <View shadowed radius='more' className='padding-4'>
                    <h1>Modal</h1>
                    <p>Click blank to close</p>
                    <p>
                        You can also click{' '}
                        <Button radius='bit' onClick={() => setShow(false)}>
                            this button
                        </Button>{' '}
                        to close
                    </p>
                </View>
            }
        >
            <Button onClick={(e) => setShow(true)}>show modal</Button>
        </Modal>,
        [
            color.component,
            alpha.component,
            frosted.component,
            <tr key='show'>
                <td>show</td>
                <td>
                    <Switch
                        checked={show}
                        size='xs'
                        onChange={(e) => setShow(!show)}
                    />
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/modal.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/modal.md`
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
                <title>Modal - components</title>
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
