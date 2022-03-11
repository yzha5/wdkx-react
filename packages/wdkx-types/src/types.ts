import { ReactElement } from 'react'

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}
// 位置
export type Location =
    | 'auto'
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'

export type ComponentColor =
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warn'
    | 'error'
    | string
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
export type ComponentRadius = undefined | 'bit' | 'more' | 'full' | number
export type ComponentMode = 'filled' | 'outlined' | 'ghost'

export type Text =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h1-bold'
    | 'h2-bold'
    | 'h3-bold'
    | 'h4-bold'
    | 'h5-bold'
    | 'h6-bold'
    | 'default'
    | 'small'
    | 'extra-small'
    | 'default-medium'
    | 'small-medium'
    | 'extra-small-medium'
    | 'default-bold'
    | 'small-bold'
    | 'extra-small-bold'

export interface ComponentProps {
    // 外观

    // 颜色，除了特定的外还可以是 hex/rgb/hsl/颜色名
    color?: ComponentColor

    // 浅色
    light?: boolean

    // 尺寸，除了特定的外还可以是数字，数字则以rem为单位
    size?: ComponentSize

    //紧凑
    dense?: boolean

    // 圆角，除了特定的外还可以是数字，数字则以rem为单位。false为无圆角
    radius?: ComponentRadius

    // 变体，选项之一
    mode?: ComponentMode

    //禁用
    disabled?: boolean

    // 毛玻璃效果
    frosted?: boolean

    // 阴影
    shadowed?: boolean

    // 位置
    location?: Location

    // 全宽
    fluid?: boolean

    // 选中状态
    selected?: boolean

    // 作为组件child添加到开头
    firstElement?: ReactElement

    // 作为组件child添加到末尾
    lastElement?: ReactElement
}
