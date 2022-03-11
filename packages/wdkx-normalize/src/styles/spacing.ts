import { GlobalProps } from '@emotion/react'
import { CSSProperties } from 'react'

const gapValue = 0.25 //rem
export const spacing: GlobalProps['styles'] = () => {
    let obj: CSSProperties = {}
    for (let i = 0; i <= 24; i++) {
        const v = `${i * gapValue}rem`

        obj[`.padding-${i}`] = {
            padding: v,
        }
        obj[`.margin-${i}`] = {
            margin: v,
        }

        obj[`.padding-x-${i}`] = {
            paddingLeft: v,
            paddingRight: v,
        }
        obj[`.margin-x-${i}`] = {
            marginLeft: v,
            marginRight: v,
        }

        obj[`.padding-y-${i}`] = {
            paddingTop: v,
            paddingBottom: v,
        }
        obj[`.margin-y-${i}`] = {
            marginTop: v,
            marginBottom: v,
        }

        obj[`.padding-top-${i}`] = {
            paddingTop: v,
        }
        obj[`.margin-top-${i}`] = {
            marginTop: v,
        }

        obj[`.padding-right-${i}`] = {
            paddingRight: v,
        }
        obj[`.margin-right-${i}`] = {
            marginRight: v,
        }

        obj[`.padding-bottom-${i}`] = {
            paddingBottom: v,
        }
        obj[`.margin-bottom-${i}`] = {
            marginBottom: v,
        }

        obj[`.padding-left-${i}`] = {
            paddingLeft: v,
        }
        obj[`.margin-left-${i}`] = {
            marginLeft: v,
        }
    }
    return { ...obj }
}
