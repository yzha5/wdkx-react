import Color from 'color'
import { UIColor } from './types'

export function InitColor(
    color: string,
    isDark: boolean,
    isTransparent: boolean
) {
    return generate({
        color: Color(color),
        atom: Color(color),
        isTransparent,
        isDark,
    })
}

function generate({
    color,
    atom,
    isDark,
    isTransparent,
    lod,
}: {
    color: Color
    atom: Color
    isDark: boolean
    isTransparent: boolean
    lod?: 'light' | 'dark'
}): UIColor {
    const darkWhite = Color(isDark ? 'white' : 'black')
    const darkBlack = Color(isDark ? 'black' : 'white')
    return {
        active(): UIColor {
            return generate({
                color: isTransparent
                    ? color.alpha(0.16)
                    : lod
                    ? atom.mix(lod === 'dark' ? darkWhite : darkBlack, 0.5)
                    : color.mix(darkWhite, 0.2),
                atom,
                isTransparent,
                isDark,
                lod,
            })
        },
        alpha(ratio: number): UIColor {
            return generate({
                color: atom.alpha(ratio),
                atom,
                isTransparent,
                isDark,
                lod,
            })
        },
        transparent(): UIColor {
            return generate({
                color: atom.alpha(0),
                atom,
                isTransparent: true,
                isDark,
                lod,
            })
        },
        dark(): UIColor {
            return generate({
                color: atom.mix(darkWhite, 0.7),
                atom,
                isTransparent,
                isDark,
                lod: 'dark',
            })
        },
        darkRatio(ratio: number): UIColor {
            return generate({
                color: atom.mix(darkWhite, ratio),
                atom,
                isTransparent,
                isDark,
                lod: 'dark',
            })
        },
        grey(): UIColor {
            return generate({
                color: color.grayscale(),
                atom,
                isTransparent,
                isDark,
                lod,
            })
        },
        hover(): UIColor {
            return generate({
                color: isTransparent
                    ? color.alpha(0.08)
                    : lod
                    ? atom.mix(lod === 'dark' ? darkWhite : darkBlack, 0.6)
                    : color.mix(darkWhite, 0.1),
                atom,
                isTransparent,
                isDark,
                lod,
            })
        },
        light(): UIColor {
            return generate({
                color: atom.mix(darkBlack, 0.7),
                atom,
                isTransparent,
                isDark,
                lod: 'light',
            })
        },
        lightRatio(ratio: number): UIColor {
            return generate({
                color: atom.mix(darkBlack, ratio),
                atom,
                isTransparent,
                isDark,
                lod: 'light',
            })
        },
        secondaryText(): string {
            return isTransparent
                ? darkWhite.lightness(60).toString()
                : color
                      .mix(Color(color.isDark() ? 'white' : 'black'), 0.6)
                      .grayscale()
                      .hsl()
                      .toString()
        },
        text(): string {
            return isTransparent
                ? 'inherit'
                : color.isDark()
                ? 'white'
                : 'black'
        },
        toObject(): Color {
            return color.hsl()
        },
        toString(): string {
            return color.hsl().toString()
        },
    }
}
