import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Check } from '@wdkx/component-react'
import { Switch } from '@wdkx/component-react'

function Preview() {
    const [isRadio, setIsRadio] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const { color, radius, size, disabled } = PropsController()
    const cpm = (
        <Check
            name='demo-check'
            color={color.value}
            size={size.value}
            radius={radius.value}
            indeterminate={indeterminate}
            type={isRadio ? 'radio' : 'checkbox'}
            disabled={disabled.value}
        />
    )
    return PreviewTemplate(
        <div>
            <label>{cpm} check 1</label>
            <label>{cpm} check 2</label>
            <label>{cpm} check 3</label>
        </div>,
        [
            color.component,
            size.component,
            radius.component,
            <tr key='is-radio'>
                <td>radio</td>
                <td>
                    <Switch
                        size='xs'
                        checked={isRadio}
                        onChange={(e) => setIsRadio(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='is-indeterminate'>
                <td>indeterminate</td>
                <td>
                    <Switch
                        size='xs'
                        checked={indeterminate}
                        onChange={(e) => setIndeterminate(e.target.checked)}
                    />
                </td>
            </tr>,
            disabled.component,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/check.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/check.md`
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
                <title>Check - components</title>
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
