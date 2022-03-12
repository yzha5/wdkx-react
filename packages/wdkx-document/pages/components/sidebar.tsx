import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PreviewTemplate } from '../../components/preview'
import { Button, Sidebar, View } from '@wdkx/component-react'

type locationType = 'top' | 'right' | 'bottom' | 'left'

function Preview() {
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState<locationType>('left')
    useEffect(function () {
        if (document && show) {
            document.documentElement.style.overflow = 'hidden'
        }
        //判断是否存在滚动条
        if (
            document.body.scrollHeight >
                (window.innerHeight || document.documentElement.clientHeight) &&
            show
        ) {
            document.documentElement.style.paddingRight = `15px`
        }
    })
    useEffect(function () {
        return function () {
            document.documentElement.style.removeProperty('overflow')
            document.documentElement.style.removeProperty('padding-right')
        }
    })
    return PreviewTemplate(
        <>
            <Button onClick={() => setShow(true)}>show</Button>
            {show && (
                <Sidebar
                    backplateProps={{
                        onBlankClick: () => setShow(false),
                        color: 'black',
                        alpha: 0.3,
                    }}
                    location={location}
                >
                    <View style={{ height: 'inherit' }} className='padding-4'>
                        <p>content</p>
                        <p>contentcontentcontentcontentcontentcontentcontent</p>
                        <p>content</p>
                        <p>content</p>
                        <button onClick={() => setShow(false)}>close 1</button>
                        <p>content</p>
                    </View>
                </Sidebar>
            )}
        </>,
        [
            <tr key='location'>
                <td>location</td>
                <td>
                    <select
                        value={location}
                        onChange={(e) =>
                            setLocation(e.target.value as locationType)
                        }
                    >
                        <option value='top'>top</option>
                        <option value='right'>right</option>
                        <option value='bottom'>bottom</option>
                        <option value='left'>left</option>
                    </select>
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/sidebar.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/sidebar.md`
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
                <title>Sidebar - components</title>
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
