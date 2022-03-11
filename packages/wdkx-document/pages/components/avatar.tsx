import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Airplane } from '@wdkx/icon-react'
import { Avatar } from '@wdkx/component-react'

function Preview() {
    const { color, light, radius, size } = PropsController()
    const [content, setContent] = useState<'text' | 'icon' | 'image'>('text')
    return PreviewTemplate(
        <Avatar
            color={color.value || undefined}
            light={light.value}
            size={size.value}
            radius={radius.value}
        >
            {content === 'text' && 'text'}
            {content === 'icon' && <Airplane size='33%' />}
            {content === 'image' && (
                <img src='/avatar/avatar2.jpg' width='100%' height='100%' />
            )}
        </Avatar>,
        [
            color.component,
            size.component,
            radius.component,
            light.component,
            <tr key='avatar-content'>
                <td>set content</td>
                <td>
                    <label htmlFor='text'>
                        text
                        <input
                            type='radio'
                            name='content'
                            id='text'
                            value='text'
                            checked={content === 'text'}
                            onChange={(e) =>
                                setContent(
                                    e.target.value as 'text' | 'icon' | 'image'
                                )
                            }
                        />
                    </label>
                    <label htmlFor='icon'>
                        icon
                        <input
                            type='radio'
                            name='content'
                            id='icon'
                            value='icon'
                            checked={content === 'icon'}
                            onChange={(e) =>
                                setContent(
                                    e.target.value as 'text' | 'icon' | 'image'
                                )
                            }
                        />
                    </label>
                    <label htmlFor='image'>
                        image
                        <input
                            type='radio'
                            name='content'
                            id='image'
                            value='image'
                            checked={content === 'image'}
                            onChange={(e) =>
                                setContent(
                                    e.target.value as 'text' | 'icon' | 'image'
                                )
                            }
                        />
                    </label>
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/avatar.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/avatar.md`
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
                <title>Avatar - components</title>
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
