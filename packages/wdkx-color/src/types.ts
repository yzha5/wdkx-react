import Color from 'color'

export interface UIColor {
    toString(): string

    toObject(): Color

    text(): string

    secondaryText(): string

    alpha(ratio: number): UIColor

    transparent(): UIColor

    light(): UIColor

    lightRatio(ratio: number): UIColor

    dark(): UIColor

    darkRatio(ratio: number): UIColor

    grey(): UIColor

    hover(): UIColor

    active(): UIColor
}
