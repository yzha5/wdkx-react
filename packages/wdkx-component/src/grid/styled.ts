import styled from '@emotion/styled'
import {
  ColOffset,
  ColStyleProps,
  ColWidth,
  NthColWidth,
  RowStyleProps,
} from './types'

/*
 * Row
 */

function width(v: NthColWidth | undefined): string | undefined {
    return v ? (v === 'auto' ? 'auto' : `${100 / v}%`) : undefined
}

export const Row = styled.div<RowStyleProps>(
    ({ theme, w, xs, sm, md, lg, xl }) => {
        return {
            label: 'row',
            display: 'flex',
            flexWrap: 'wrap',
            width: width(w) || '100%',

            [`@media (min-width:${theme.breakpoints.xs}px)`]: {
                width: width(xs),
            },
            [`@media (min-width:${theme.breakpoints.sm}px)`]: {
                width: width(sm),
            },
            [`@media (min-width:${theme.breakpoints.md}px)`]: {
                width: width(md),
            },
            [`@media (min-width:${theme.breakpoints.lg}px)`]: {
                width: width(lg),
            },
            [`@media (min-width:${theme.breakpoints.xl}px)`]: {
                width: width(xl),
            },
        }
    }
)

/*
 * Col
 */

function calcWidth(v: ColWidth | undefined): string | undefined {
    return v ? (v === 'auto' ? 'auto' : `${(v * 100) / 12}%`) : undefined
}

function calcOffset(v: ColOffset | undefined): string | undefined {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let w: string | undefined = ''
    keys.forEach((val) => {
        if (v && v === val) {
            w = `${(v * 100) / 12}%`
        } else {
            w = undefined
        }
    })
    return w
}

export const Col = styled.div<ColStyleProps>(
    ({
        theme,
        w,
        xs,
        sm,
        md,
        lg,
        xl,
        offset,
        offsetXs,
        offsetSm,
        offsetMd,
        offsetLg,
        offsetXl,
    }) => {
        return {
            label: 'col',
            flex: w ? '0 0 auto' : '1 0 0',
            width: calcWidth(w) || 'auto',
            marginLeft: calcOffset(offset),

            [`@media (min-width:${theme.breakpoints.xs}px)`]: {
                flex: xs ? '0 0 auto' : undefined,
                width: calcWidth(xs),
                marginLeft: calcOffset(offsetXs),
            },
            [`@media (min-width:${theme.breakpoints.sm}px)`]: {
                flex: sm ? '0 0 auto' : undefined,
                width: calcWidth(sm),
                marginLeft: calcOffset(offsetSm),
            },
            [`@media (min-width:${theme.breakpoints.md}px)`]: {
                flex: md ? '0 0 auto' : undefined,
                width: calcWidth(md),
                marginLeft: calcOffset(offsetMd),
            },
            [`@media (min-width:${theme.breakpoints.lg}px)`]: {
                flex: lg ? '0 0 auto' : undefined,
                width: calcWidth(lg),
                marginLeft: calcOffset(offsetLg),
            },
            [`@media (min-width:${theme.breakpoints.xl}px)`]: {
                flex: xl ? '0 0 auto' : undefined,
                width: calcWidth(xl),
                marginLeft: calcOffset(offsetXl),
            },
        }
    }
)
