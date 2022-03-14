import styled from '@emotion/styled'
import { DocumentWH } from './types'
import { CSSProperties } from 'react'
import { Location } from '@wdkx/types-react'

export const StyledPopupContent = styled.div<{
    align?: Location
    residentRect?: DOMRect
    contentRect?: DOMRect
    documentRect?: DocumentWH
}>(({ align = 'auto', residentRect, contentRect, documentRect }) => {
    function setContentRect(): CSSProperties {
        //必须存在这三个元素的rect，否则无法进行计算
        if (residentRect && contentRect && documentRect) {
            const commonCSS: CSSProperties = {
                maxHeight: documentRect.height,
                maxWidth: documentRect.width,
            }

            // top.top top-left.top top-right.top
            const topXTop =
                contentRect.height > documentRect.height ||
                contentRect.height > residentRect.top
                    ? 0
                    : residentRect.top - contentRect.height

            // right.left right-top.left right-bottom.left
            const rightXLeft =
                contentRect.width > documentRect.width
                    ? 0
                    : contentRect.width >
                      documentRect.width - residentRect.right
                    ? documentRect.width - contentRect.width
                    : residentRect.right

            //bottom.top bottom-left.top bottom-right.top
            const bottomXTop =
                contentRect.height > documentRect.height
                    ? 0
                    : contentRect.height >
                      documentRect.height - residentRect.height
                    ? residentRect.bottom - contentRect.height
                    : residentRect.bottom

            // left.left left-top.left left-bottom.left
            const leftXLeft =
                contentRect.width > documentRect.width ||
                contentRect.width > residentRect.left
                    ? 0
                    : residentRect.left - contentRect.width

            // top-left.left bottom-left.left
            const xLeftLeft =
                contentRect.width > documentRect.width
                    ? 0
                    : contentRect.width > documentRect.width - residentRect.left
                    ? documentRect.width - contentRect.width
                    : residentRect.left
            // top-right.left bottom-right.left
            const xRightLeft =
                contentRect.width > documentRect.width ||
                contentRect.width > residentRect.right
                    ? 0
                    : residentRect.right - contentRect.width
            // top.left bottom.left
            const centerPoint = residentRect.left + residentRect.width / 2 //中心点
            const halfContentWidth = contentRect.width / 2 //内容元素一半宽度
            const xCenterLeft =
                contentRect.width > documentRect.width ||
                halfContentWidth > centerPoint
                    ? 0
                    : halfContentWidth > documentRect.width - residentRect.right
                    ? documentRect.width - halfContentWidth
                    : centerPoint - halfContentWidth

            // right-top.top left-top.top
            const xTopTop =
                contentRect.height > documentRect.height
                    ? 0
                    : contentRect.height >
                      documentRect.height - residentRect.top
                    ? documentRect.height - contentRect.height
                    : residentRect.top

            // right-bottom.top left-bottom.top
            const xBottomTop =
                contentRect.height > documentRect.height ||
                contentRect.height > residentRect.bottom
                    ? 0
                    : residentRect.bottom - contentRect.height

            // right.top left.top auto
            const middlePoint = residentRect.top + residentRect.height / 2 //中心点
            const halfContentHeight = contentRect.height / 2 //内容元素一半宽度
            const xMiddleTop =
                contentRect.height > documentRect.height ||
                halfContentHeight > middlePoint
                    ? 0
                    : halfContentHeight >
                      documentRect.height - residentRect.bottom
                    ? documentRect.height - halfContentHeight
                    : middlePoint - halfContentHeight

            switch (align) {
                case 'top':
                    return {
                        top: topXTop,
                        left: xCenterLeft,
                        ...commonCSS,
                    }
                case 'top-left':
                    return {
                        top: topXTop,
                        left: xLeftLeft,
                        ...commonCSS,
                    }
                case 'top-right':
                    return {
                        top: topXTop,
                        left: xRightLeft,
                        ...commonCSS,
                    }
                case 'right':
                    return {
                        top: xMiddleTop,
                        left: rightXLeft,
                        ...commonCSS,
                    }
                case 'right-top':
                    return {
                        top: xTopTop,
                        left: rightXLeft,
                        ...commonCSS,
                    }
                case 'right-bottom':
                    return {
                        top: xBottomTop,
                        left: rightXLeft,
                        ...commonCSS,
                    }
                case 'bottom':
                    return {
                        top: bottomXTop,
                        left: xCenterLeft,
                        ...commonCSS,
                    }
                case 'bottom-left':
                    return {
                        top: bottomXTop,
                        left: xLeftLeft,
                        ...commonCSS,
                    }
                case 'bottom-right':
                    return {
                        top: bottomXTop,
                        left: xRightLeft,
                        ...commonCSS,
                    }
                case 'left':
                    return {
                        top: xMiddleTop,
                        left: leftXLeft,
                        ...commonCSS,
                    }
                case 'left-top':
                    return {
                        top: xTopTop,
                        left: leftXLeft,
                        ...commonCSS,
                    }
                case 'left-bottom':
                    return {
                        top: xBottomTop,
                        left: leftXLeft,
                        ...commonCSS,
                    }
                default:
                    return {
                        top: xMiddleTop,
                        left: xCenterLeft,
                        ...commonCSS,
                    }
            }
        }
        return {}
    }

    return {
        position: 'absolute',
        overflow: 'auto',
        ...setContentRect(),
    }
})
