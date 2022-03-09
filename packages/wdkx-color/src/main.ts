import Color from "color"
import {UIColor} from "./types"

/*
 * 生成颜色
 *
 * @param color Color对象类型
 * @param isDark 是否为暗主题
 * @param isAlpha 是否为透明色
 *
 * @returns UIColor
 */
function generate({
                      color,
                      isDark = false,
                      isAlpha = false,
                  }: {
    color?: Color
    isDark: boolean
    isAlpha: boolean
}): UIColor {
    //定义一些判断
    const whiteInDark = isDark ? 'white' : 'black'
    const blackInDark = isDark ? 'black' : 'white'
    const whiteInColor = color?.isDark() ? 'white' : 'black'
    // const blackInColor = color?.isDark() ? 'black' : 'white'

    //返回对象
    return {
        value: color ? color.hsl().toString() : undefined,
        object: color,

        //浅色
        light: function () {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(0.4)
                        : color.mix(Color(blackInDark), 0.8)
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //浅色 自定义比率0～1
        lightRatio: function (ratio: number) {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(0.4)
                        : color.mix(Color(blackInDark), ratio)
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //深色
        dark: function () {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(0.4)
                        : color.mix(Color(whiteInDark), 0.8)
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //深色 自定义比率0～1
        darkRatio: function (ratio: number) {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(0.4)
                        : color.mix(Color(whiteInDark), ratio)
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //将颜色变为灰色
        grey: function () {
            return generate({
                color: color
                    ? isAlpha
                        ? color.grayscale().alpha(color.alpha())
                        : color.grayscale()
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //透明度 自定义比率0～1
        //如果颜色本身不带透明度，则设颜色透明度为定义的比率
        //如果颜色本身带有透明度，则将透明度合并，变以更底的透明度
        alpha: function (ratio: number = 0) {
            return generate({
                color: color
                    ? isAlpha
                        ? color.fade(ratio)
                        : color.alpha(ratio)
                    : undefined,
                isDark,
                isAlpha,
            })
        },

        //悬停时的颜色
        hover: function (): UIColor {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(color.alpha() + 0.1)
                        : color.mix(Color(whiteInDark), 0.1)
                    : Color(whiteInDark).alpha(0.1),
                isDark,
                isAlpha,
            })
        },

        //活跃时的颜色
        active: function (): UIColor {
            return generate({
                color: color
                    ? isAlpha
                        ? color.alpha(color.alpha() + 0.2)
                        : color.mix(Color(whiteInDark), 0.2)
                    : Color(whiteInDark).alpha(0.2),
                isDark,
                isAlpha,
            })
        },

        //将文本颜色设为相对较高对比度的白色或黑色
        text: function (): UIColor {
            return generate({
                color: Color(
                    color ? (isAlpha ? whiteInDark : whiteInColor) : whiteInDark
                ),
                isDark,
                isAlpha,
            })
        },

        //将次文本颜色设为相对较低对比度的灰色
        secondaryText: function (): UIColor {
            return generate({
                color: color
                    ? color
                        .mix(
                            Color(
                                color
                                    ? isAlpha
                                        ? whiteInDark
                                        : whiteInColor
                                    : whiteInDark
                            ),
                            0.6
                        )
                        .grayscale()
                    : Color(whiteInDark)
                        .mix(Color(blackInDark), 0.6)
                        .grayscale(),
                isDark,
                isAlpha,
            })
        },
    }
}

//初始颜色
export function InitColor(color?: string, isDark?: boolean): UIColor {
    let newColor = function (): Color | undefined {
        if (!color) {
            return undefined
        }
        try {
            return Color(color)
        } catch (e) {
            // throw e
            return Color(isDark ? 'white' : 'black')
        }
    }
    return generate({
        color: newColor(),
        isDark: isDark ?? false,
        isAlpha: newColor() !== undefined ? newColor()!.alpha() !== 1 : true,
    })
}
