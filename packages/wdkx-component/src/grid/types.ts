export type NthColWidth = 'auto' | 1 | 2 | 3 | 4 | 5 | 6

export interface RowStyleProps {
  w?: NthColWidth
  xs?: NthColWidth
  sm?: NthColWidth
  md?: NthColWidth
  lg?: NthColWidth
  xl?: NthColWidth
}

export type ColWidth = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type ColOffset = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export interface ColStyleProps {
  w?: ColWidth
  xs?: ColWidth
  sm?: ColWidth
  md?: ColWidth
  lg?: ColWidth
  xl?: ColWidth
  offset?: ColOffset
  offsetXs?: ColOffset
  offsetSm?: ColOffset
  offsetMd?: ColOffset
  offsetLg?: ColOffset
  offsetXl?: ColOffset
}
