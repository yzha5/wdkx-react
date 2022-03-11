import Md, { MarkdownToJSX } from 'markdown-to-jsx'
import { MdBlockquote, MdCode, MdPre, MdTable } from './md-doc'
import { ReactNode, useEffect } from 'react'
import Prism from 'prismjs'
//prism languages
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
//prism toolbar
import 'prismjs/plugins/toolbar/prism-toolbar'
//prism show language
import 'prismjs/plugins/show-language/prism-show-language'
//prism copy button
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import Overrides = MarkdownToJSX.Overrides

export default function Markdown({
    children,
    components,
}: {
    children: string & ReactNode
    components?: Overrides
}) {
    useEffect(function () {
        Prism.languages['tsx'] = Prism.languages.extend('typescript', {})
        Prism.languages['jsx'] = Prism.languages.extend('javascript', {})
        Prism.highlightAll()
    })
    return (
        <Md
            options={{
                overrides: {
                    code: {
                        component: MdCode,
                        props: { 'data-prismjs-copy': 'Copy' },
                    },
                    pre: {
                        component: MdPre,
                    },
                    blockquote: { component: MdBlockquote },
                    table: { component: MdTable },
                    ...components,
                },
            }}
        >
            {children}
        </Md>
    )
}
