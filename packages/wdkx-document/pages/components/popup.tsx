import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PreviewTemplate } from '../../components/preview'
import { Button, Popup } from '@wdkx/component-react'
import { Location } from '@wdkx/types-react'
import styled from '@emotion/styled'

const Ddd = styled.div({
    padding: '2rem 6rem',
})

function Preview() {
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState<Location>('auto')
    return PreviewTemplate(
        <Popup
            show={show}
            align={location}
            backplateProps={{ onBlankClick: (e) => setShow(false) }}
            popupContent={
                <div
                    style={{
                        backgroundColor: 'rgba(255,0,0,0.9)',
                        color: 'white',
                        padding: '1rem',
                    }}
                >
                    <Ddd>Click blank to close</Ddd>
                    <Button onClick={(e) => setShow(false)}>
                        You can also click this button to close
                    </Button>
                    <Ddd>Have fun</Ddd>
                </div>
            }
        >
            <Button onClick={(e) => setShow(true)}>click this button</Button>
        </Popup>,
        [
            <tr key='location'>
                <td>location</td>
                <td>
                    <select
                        onChange={(e) =>
                            setLocation(e.target.value as Location)
                        }
                    >
                        <option value='auto'>auto</option>
                        <option value='top'>top</option>
                        <option value='top-left'>top-left</option>
                        <option value='top-right'>top-right</option>
                        <option value='right'>right</option>
                        <option value='right-top'>right-top</option>
                        <option value='right-bottom'>right-bottom</option>
                        <option value='bottom'>bottom</option>
                        <option value='bottom-left'>bottom-left</option>
                        <option value='bottom-right'>bottom-right</option>
                        <option value='left'>left</option>
                        <option value='left-top'>left-top</option>
                        <option value='left-bottom'>left-bottom</option>
                    </select>
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/popup.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/popup.md`
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
                <title>Popup - components</title>
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
