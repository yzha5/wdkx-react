import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next/types'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../store'
import { Normalize } from '@wdkx/normalize-react'
import '../style/dracula.css'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    const props = { router: useRouter(), ...pageProps }
    return (
        <Provider store={store}>
            <Normalize />
            {getLayout(<Component {...props} />)}
        </Provider>
    )
}

export default MyApp
