import { useEffect } from 'react'
import { StyledBackplate, StyledBackplatePanel } from './styled'
import { BackplateProps } from './types'

export default function ({
    color,
    frosted,
    alpha,
    children,
    onBlankClick,
    ...rest
}: BackplateProps) {
    //componentDidMount componentDidUpdate
    // useEffect(function () {
    //     if (document) {
    //         document.documentElement.style.overflow = 'hidden'
    //     }

    //判断是否存在滚动条
    // if (
    //     document.body.scrollHeight >
    //     (window.innerHeight || document.documentElement.clientHeight)
    // ) {
    //     document.documentElement.style.paddingRight = `15px`
    // }
    // })

    //componentWillUnmount
    // useEffect(function () {
    //     return function () {
    //         document.documentElement.style.removeProperty('overflow')
    //         document.documentElement.style.removeProperty('padding-right')
    //     }
    // })

    return (
        <StyledBackplate
            color={color}
            frosted={frosted}
            alpha={alpha}
            {...rest}
        >
            {children}
            <StyledBackplatePanel onClick={onBlankClick} />
        </StyledBackplate>
    )
}
