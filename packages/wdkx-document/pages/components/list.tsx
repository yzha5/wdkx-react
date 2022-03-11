import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import {
    Badge,
    Folding,
    List,
    ListItem,
    ListTitle,
} from '@wdkx/component-react'
import { Airplane, Down, Right } from '@wdkx/icon-react'
import { PreviewTemplate } from '../../components/preview'
import { PropsController } from '../../components/props-controller'

function Preview() {
    const [foldingOpen, setFoldingOpen] = useState(false)
    const [dense, setDense] = useState(false)
    const [hasSecond, setHasSecond] = useState(false)
    const [first, setFirst] = useState(false)
    const [last, setLast] = useState(false)
    const [hasTitle, setHasTitle] = useState(false)
    const { color, light, selected, disabled } = PropsController()

    const Item = (
        <ListItem
            color={color.value}
            text='list item'
            secondaryText={hasSecond ? 'secondary text' : undefined}
            light={light.value}
            selected={selected.value}
            disabled={disabled.value}
            firstElement={first ? <Airplane size='1em' /> : undefined}
            lastElement={
                last ? <Badge color='secondary'>new</Badge> : undefined
            }
        />
    )
    return PreviewTemplate(
        <List dense={dense}>
            {Item}
            {hasTitle && <ListTitle>List title</ListTitle>}
            {Item}
            <Folding
                resident={
                    <ListItem
                        text='Nested list'
                        secondaryText={hasSecond ? 'secondary text' : undefined}
                        color={color.value}
                        light={light.value}
                        selected={foldingOpen}
                        disabled={disabled.value}
                        onClick={
                            disabled.value
                                ? undefined
                                : () => setFoldingOpen(!foldingOpen)
                        }
                        firstElement={
                            first ? <Airplane size='1em' /> : undefined
                        }
                        lastElement={
                            foldingOpen ? (
                                <Down size='1rem' />
                            ) : (
                                <Right size='1rem' />
                            )
                        }
                    />
                }
                open={foldingOpen}
                panelStyle={{ paddingLeft: '1rem' }}
            >
                {Item}
                {Item}
            </Folding>
        </List>,
        [
            <tr key='dense'>
                <td>dense</td>
                <td>
                    <input
                        type='checkbox'
                        checked={dense}
                        onChange={(e) => setDense(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='has-secondary-text'>
                <td>has secondary text</td>
                <td>
                    <input
                        type='checkbox'
                        checked={hasSecond}
                        onChange={(e) => setHasSecond(e.target.checked)}
                    />
                </td>
            </tr>,
            color.component,
            light.component,
            selected.component,
            disabled.component,
            <tr key='first-element'>
                <td>has first element</td>
                <td>
                    <input
                        type='checkbox'
                        checked={first}
                        onChange={(e) => setFirst(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='last-element'>
                <td>has last element</td>
                <td>
                    <input
                        type='checkbox'
                        checked={last}
                        onChange={(e) => setLast(e.target.checked)}
                    />
                </td>
            </tr>,
            <tr key='has-title'>
                <td>has title</td>
                <td>
                    <input
                        type='checkbox'
                        checked={hasTitle}
                        onChange={(e) => setHasTitle(e.target.checked)}
                    />
                </td>
            </tr>,
        ]
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/list.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/list.md`
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
                <title>List - components</title>
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
