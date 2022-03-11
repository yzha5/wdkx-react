import { Global } from '@emotion/react'
import { base } from './styles/base'
import { typography } from './styles/typography'
import { display as d } from './styles/display'
import { spacing as s } from './styles/spacing'
import { ripple as r } from './styles/ripple'

export default function ({
    display = true,
    spacing = true,
    ripple = true,
}: {
    display?: boolean
    spacing?: boolean
    ripple?: boolean
}) {
    return (
        <>
            <Global styles={base} />
            <Global styles={typography} />
            {display && <Global styles={d} />}
            {spacing && <Global styles={s} />}
            {ripple && <Global styles={r} />}
        </>
    )
}
