import { ReactNode, useEffect, useState } from 'react'
import { DeepPartial } from '@wdkx/types-react'
import { Theme } from './types'
import { darkTheme, lightTheme } from './init'
import { DeepMerge } from '@wdkx/util-react'
import { Global, ThemeProvider } from '@emotion/react'
import { reboot } from './reboot'

interface Props {
    children?: ReactNode
    theme?: DeepPartial<Theme>
}

export default function ({ theme, children }: Props) {
    const [t, setT] = useState(lightTheme)
    useEffect(
        function () {
            if (theme) {
                if (theme.palette && theme.palette.scheme) {
                    if (theme.palette.scheme === 'dark') {
                        setT(DeepMerge(darkTheme, theme))
                    } else {
                        setT(DeepMerge(lightTheme, theme))
                    }
                }
            }
        },
        [theme]
    )

    return (
        <ThemeProvider theme={t}>
            <Global styles={reboot(t)} />
            {children}
        </ThemeProvider>
    )
}
