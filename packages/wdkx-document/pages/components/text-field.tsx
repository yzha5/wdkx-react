import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import { Button, Input, TextField } from '@wdkx/component-react'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Airplane, Download } from '@wdkx/icon-react'

function Preview() {
    const { color, radius, fluid, shadowed, disabled } = PropsController()
    const [size, setSize] = useState(2.5)
    const [shadowOnInteract, setShadowOnInteract] = useState(false)
    return PreviewTemplate(
        <TextField
            label='Label'
            message='This is message'
            placeholder='Placeholder'
            color={color.value}
            fluid={fluid.value}
            radius={radius.value}
            size={size}
            shadowed={shadowed.value}
            shadowOnInteract={shadowOnInteract}
            disabled={disabled.value}
            firstElement={<Airplane size={`${size / 2.5}rem`} />}
            lastElement={
                <Button
                    radius='more'
                    color={color.value}
                    size={(size * 2) / 2.5}
                    disabled={disabled.value}
                    icon
                >
                    <Download size='1em' />
                </Button>
            }
        />,
        [
            color.component,
            <tr key='size'>
                <td>size</td>
                <td>
                    <Input
                        type='number'
                        fluid
                        defaultValue={2.5}
                        min={2.5}
                        onChange={(e) => {
                            setSize(Number(e.target.value) || 2.5)
                        }}
                    />
                </td>
            </tr>,
            radius.component,
            fluid.component,
            shadowed.component,
            <tr key='shadow-on-interact'>
                <td>shadow on interact</td>
                <td>
                    <input
                        type='checkbox'
                        checked={shadowOnInteract}
                        onChange={(e) => setShadowOnInteract(e.target.checked)}
                    />
                </td>
            </tr>,
            disabled.component,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/text-field.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/text-field.md`
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
                <title>TextField - components</title>
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
