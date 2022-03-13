import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { PropsController } from '../../components/props-controller'
import { PreviewTemplate } from '../../components/preview'
import { Avatar, Badge, Navbar, Switch, Toolbar } from '@wdkx/component-react'
import { Logo } from '../../components/logo'

function Preview() {
    const { color, light, frosted, shadowed } = PropsController()
    const [dense, setDense] = useState(false)
    const [fixed, setFixed] = useState(false)
    return PreviewTemplate(
        <div
            style={{
                width: '100%',
                height: '8rem',
                overflowY: 'auto',
                position: 'relative',
            }}
            className='bg-primary'
        >
            <Navbar
                color={color.value}
                light={light.value}
                frosted={frosted.value}
                shadowed={shadowed.value}
                dense={dense}
                fixed={fixed}
            >
                <Toolbar>
                    <Avatar>
                        <Logo />
                    </Avatar>
                    test
                    <div>
                        <Toolbar>
                            <Badge>badge</Badge>
                            <Badge>badge</Badge>
                            <Badge>badge</Badge>
                        </Toolbar>
                    </div>
                </Toolbar>
            </Navbar>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
        </div>,
        [
            color.component,
            light.component,
            frosted.component,
            shadowed.component,
            <tr key='dense'>
                <td>dense</td>
                <td>
                    <Switch
                        size='xs'
                        onChange={(e) => setDense(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='fixed'>
                <td>fixed</td>
                <td>
                    <Switch
                        size='xs'
                        onChange={(e) => setFixed(e.target.checked)}
                    />
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/navbar.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/navbar.md`
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
                <title>Navbar - components</title>
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
