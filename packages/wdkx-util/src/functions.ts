import { ComponentRadius, ComponentSize } from '@wdkx/types-react'
import Color from 'color'

/*
 * 判断是否为对象
 */
function isObj(s: any): boolean {
    return s && typeof s === 'object' && !Array.isArray(s)
}

/*
 * 深度合并对象
 */
export function DeepMerge<T, S>(target: T, source: S) {
    let output: T = Object.assign({}, target)
    if (isObj(source)) {
        Object.keys(source).forEach((key) => {
            if (isObj(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] })
                } else {
                    output[key] = DeepMerge(target[key], source[key])
                }
            } else if (source[key] !== undefined) {
                Object.assign(output, { [key]: source[key] })
            }
        })
    }
    return output
}

/*
 * 根据round计算圆角值
 *
 * @param radius 圆角值
 * @param height 组件尺寸/高度
 *
 * @returns 值
 */
export function CalcRadius(
    radius: ComponentRadius | undefined,
    size: number
): number {
    if (typeof radius === 'number') {
        return radius
    } else {
        switch (radius) {
            case 'bit':
                return size / 8
            case 'more':
                return (size / 8) * 3
            case 'full':
                return size / 2
            default:
                return 0
        }
    }
}

/*
 * 设置磨砂玻璃的背景色
 *
 * @param color 原背景颜色
 * @param alpha 透明度[0-1]，默认0.8
 *
 * @returns 颜色值
 */
export function ColorFrosted(color: string, alpha: number = 0.8): string {
    return Color(color).alpha(alpha).toString()
}

/*
 * 高对比度阴影
 *
 * @param color 颜色值
 *
 * @returns box-shadow的值
 */
export function ContrastShadowWithColor(color: string): string {
    const c = Color(color).alpha(0.24).toString()
    return `0 .25rem 1.5rem ${c}, 0 .125rem .375rem ${c}`
}

/*
 * 磨砂玻璃模糊值 backdrop-filter
 *
 * @param val px值
 *
 * @returns: backdrop-filter的值 blur(${val}px)
 */
export const FrostValue = (val: number = 32): string => {
    return `blur(${val}px)`
}

/*
 * 阴影
 *
 * @param color 颜色值
 *
 * @returns box-shadow的值
 */
export function ShadowWithColor(color: string): string {
    const c = Color(color).alpha(0.16).toString()
    return `0 .5rem 3rem ${c}, 0 .25rem .75rem ${c}`
}

/*
 * 组件尺寸
 * 包含的组件有：Button Switch Check Segmented
 */
export function GeneralComponentSize(size?: ComponentSize): number {
    if (size) {
        switch (size) {
            case 'xs':
                return 1.5
            case 'sm':
                return 2
            case 'md':
                return 2.5
            case 'lg':
                return 3
            case 'xl':
                return 3.5
            default:
                return size
        }
    } else {
        return 2.5
    }
}
