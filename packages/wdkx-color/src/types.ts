import Color from "color"

export interface UIColor {
    readonly value?: string
    readonly object?: Color

    light(): UIColor

    lightRatio(ratio: number): UIColor

    dark(): UIColor

    darkRatio(ratio: number): UIColor

    grey(): UIColor

    alpha(ratio: number): UIColor

    hover(): UIColor

    active(): UIColor

    text(): UIColor

    secondaryText(): UIColor
}
