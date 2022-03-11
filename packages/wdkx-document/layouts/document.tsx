import { FC, ReactElement, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useRouter } from 'next/router'
import { setSchemeAction } from '../store/actions/theme'
import { ThemeProvider } from '@wdkx/theme-react'
import {
    Avatar,
    Button,
    Container,
    Navbar,
    Toolbar,
    View,
} from '@wdkx/component-react'
import { Logo } from '../components/logo'
import { Moon, Sun } from '@wdkx/icon-react'

const DocumentLayout: FC = ({ children }) => {
    const [scheme, setScheme] = useState<'light' | 'dark'>('light')
    const { theme } = useAppSelector((theme) => theme)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const toggleScheme = () => {
        dispatch(setSchemeAction(scheme !== 'dark'))
        // setScheme(scheme === 'dark' ? 'light' : 'dark')
    }

    useEffect(function () {
        /*Set theme*/

        //Get scheme value from localStorage
        const schemeInLocalStorage = localStorage.getItem('scheme')
        //Color scheme has been set before
        if (schemeInLocalStorage) {
            if (schemeInLocalStorage === 'dark') {
                setScheme('dark')
            } else {
                setScheme('light')
            }
        } else {
            // Color scheme follows the system
            const media = window.matchMedia('(prefers-color-scheme:dark)')
            if (media.matches) {
                setScheme('dark')
            } else {
                setScheme('light')
            }
            media.addEventListener('change', (e) => {
                if (e.matches) {
                    setScheme('dark')
                } else {
                    setScheme('light')
                }
            })
        }
    })

    return (
        <ThemeProvider theme={{ palette: { scheme: scheme } }}>
            <View>
                <Navbar color='primary' fixed frosted shadowed>
                    <Toolbar>
                        <div className='display-flex align-items-center'>
                            <Avatar size='sm'>
                                <Logo />
                            </Avatar>
                            <span className='margin-left-2'>维度科学</span>
                        </div>
                        <div>
                            <Toolbar>
                                <Button
                                    onClick={() => toggleScheme()}
                                    icon
                                    radius='more'
                                    mode='ghost'
                                >
                                    {scheme === 'dark' ? (
                                        <Moon size='1.5em' />
                                    ) : (
                                        <Sun size='1.5em' />
                                    )}
                                </Button>
                            </Toolbar>
                        </div>
                    </Toolbar>
                </Navbar>
                <div style={{ height: '4rem' }} />
                <Container maxWidth='lg'>{children}</Container>
            </View>
        </ThemeProvider>
    )
}

export const getDocumentLayout = (page: ReactElement) => {
    return <DocumentLayout>{page}</DocumentLayout>
}
