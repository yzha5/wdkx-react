import { FC, ReactElement, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useRouter } from 'next/router'
import { setSchemeAction } from '../store/actions/theme'
import { ThemeProvider } from '@wdkx/theme-react'
import {
    Avatar,
    Button,
    Container,
    List,
    ListItem,
    ListTitle,
    Navbar,
    Toolbar,
    View,
} from '@wdkx/component-react'
import { Logo } from '../components/logo'
import { Moon, Sun } from '@wdkx/icon-react'
import styled from '@emotion/styled'

const StyledLeftSide = styled.div({
    position: 'fixed',
    width: '16rem',
    height: 'calc(100vh - 3.5rem)',
    padding: '1rem',
    overflow: 'auto',
    boxShadow: `0 .5rem 3rem rgba(0,0,0,0.1), 0 .25rem .75rem rgba(0,0,0,0.1)`,
})

const routes = [
    { label: 'Avatar', url: '/components/avatar' },
    { label: 'Backplate', url: '/components/backplate' },
    { label: 'Badge', url: '/components/badge' },
    { label: 'Button', url: '/components/button' },
    { label: 'Check', url: '/components/check' },
    { label: 'Container', url: '/components/container' },
    { label: 'Folding', url: '/components/folding' },
    { label: 'Grid', url: '/components/grid' },
    { label: 'Input', url: '/components/input' },
    { label: 'List', url: '/components/list' },
    { label: 'Navbar', url: '/components/navbar' },
    { label: 'Number field', url: '/components/number-field' },
    { label: 'Sidebar', url: '/components/sidebar' },
    { label: 'Switch', url: '/components/switch' },
    { label: 'Text field', url: '/components/text-field' },
    { label: 'Toolbar', url: '/components/toolbar' },
    { label: 'View', url: '/components/view' },
]

const DocumentLayout: FC = ({ children }) => {
    const [scheme, setScheme] = useState<'light' | 'dark'>('light')
    const { theme } = useAppSelector((theme) => theme)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const toggleScheme = () => {
        dispatch(setSchemeAction(scheme !== 'dark'))
        // setScheme(scheme === 'dark' ? 'light' : 'dark')
    }

    const goto = (url: string) => {
        router.push(url)
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
            <View style={{ minHeight: '100vh' }}>
                <Navbar fixed frosted>
                    <Toolbar>
                        <div className='display-flex align-items-center'>
                            <Avatar size='sm'>
                                <Logo />
                            </Avatar>
                            <span className='margin-left-2'>Documentation</span>
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
                <div style={{ height: '3.5rem' }} />
                <div className='display-flex'>
                    <StyledLeftSide>
                        <List radius='bit'>
                            <ListTitle>组件</ListTitle>
                            {routes.map((v, i) => (
                                <ListItem
                                    key={i}
                                    text={v.label}
                                    onClick={() => goto(v.url)}
                                    selected={router.pathname === v.url}
                                />
                            ))}
                        </List>
                    </StyledLeftSide>
                    <div style={{ marginLeft: '16rem', width: '100%' }}>
                        <Container maxWidth='md'>{children}</Container>
                    </div>
                </div>
            </View>
        </ThemeProvider>
    )
}

export const getDocumentLayout = (page: ReactElement) => {
    return <DocumentLayout>{page}</DocumentLayout>
}
