import { getDocumentLayout } from '../../layouts/document'
import { AppProps } from 'next/app'
import { ReactNode, useState } from 'react'
import Markdown from '../../components/markdown'
import Head from 'next/head'
import { Col, Row } from '@wdkx/component-react'

function PreviewRow() {
    return (
        <div style={{ width: '100%' }}>
            <Row
                w={2}
                xs={5}
                sm={4}
                md={3}
                lg={2}
                xl={1}
                style={{
                    border: 'dashed  1px red',
                    padding: '1rem',
                }}
            >
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    1
                </Col>
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    2
                </Col>
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    3
                </Col>
            </Row>
            <Row
                w={3}
                xs={6}
                sm={5}
                md={4}
                lg={3}
                xl={2}
                style={{
                    border: 'dashed 1px red',
                    padding: '1rem',
                }}
            >
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    4
                </Col>
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    5
                </Col>
                <Col style={{ border: 'dashed 1px orange', padding: '1rem' }}>
                    6
                </Col>
            </Row>
        </div>
    )
}

const RowComponent = function ({ children }: { children: ReactNode }) {
    return (
        <Row
            style={{
                border: 'dashed  1px red',
                padding: '1rem',
            }}
        >
            {children}
        </Row>
    )
}

function PreviewCol() {
    return (
        <div style={{ width: '100%' }}>
            Set lg attribute
            <RowComponent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
                    <Col
                        lg={
                            v as
                                | 1
                                | 2
                                | 3
                                | 4
                                | 5
                                | 6
                                | 7
                                | 8
                                | 9
                                | 10
                                | 11
                                | 12
                        }
                        key={v}
                        style={{
                            border: 'dashed  1px orange',
                            padding: '1rem',
                        }}
                    >
                        {v}
                    </Col>
                ))}
            </RowComponent>
        </div>
    )
}

function Page({ router }: AppProps) {
    const [content, setContent] = useState('')
    import(`../../i18n/pages/${router.locale}/components/grid.md`)
        .then((content) => {
            setContent(content.default)
        })
        .catch(() => {
            import(
                `../../i18n/pages/${router.defaultLocale}/components/grid.md`
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
                <title>Grid - components</title>
            </Head>
            <Markdown
                children={content}
                components={{
                    PreviewRow: { component: PreviewRow },
                    PreviewCol: { component: PreviewCol },
                }}
            />
        </>
    )
}

Page.getLayout = getDocumentLayout
export default Page
