import '@emotion/react'
import { Theme as T } from '@wdkx/theme-react'

declare module '@emotion/react' {
    export interface Theme extends T {}
}
