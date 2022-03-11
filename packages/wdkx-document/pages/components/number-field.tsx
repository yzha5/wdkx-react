import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import { Button, Input, NumberField } from '@wdkx/component-react'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Airplane, Download } from '@wdkx/icon-react'

function Preview() {
    const { color, radius, fluid, shadowed, disabled } = PropsController()
    const [size, setSize] = useState(2.5)
    const [step, setStep] = useState(1)
    const [pd, setPd] = useState(false)
    const [md, setMd] = useState(false)
    const [shadowOnInteract, setShadowOnInteract] = useState(false)
    return PreviewTemplate(
        <NumberField
            label='Label'
            message='This is message'
            placeholder='Placeholder'
            color={color.value}
            fluid={fluid.value}
            radius={radius.value}
            size={size}
            step={step}
            shadowed={shadowed.value}
            shadowOnInteract={shadowOnInteract}
            disabled={disabled.value}
            plusDisabled={pd}
            minusDisabled={md}
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
            <tr key='step'>
                <td>step</td>
                <td>
                    <Input
                        type='number'
                        fluid
                        onChange={(e) => {
                            setStep(Number(e.target.value) || 1)
                        }}
                    />
                </td>
            </tr>,
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
            <tr key='plus disabled'>
                <td>plus disabled</td>
                <td>
                    <input
                        type='checkbox'
                        checked={pd}
                        onChange={(e) => setPd(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='minus disabled'>
                <td>minus disabled</td>
                <td>
                    <input
                        type='checkbox'
                        checked={md}
                        onChange={(e) => setMd(e.target.checked)}
                    />
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/number-field.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/number-field.md`
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
                <title>NumberField - components</title>
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
