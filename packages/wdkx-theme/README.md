# `wdkx-theme`

> theming

## Install

```
npm i @wdkx/theme-react
```

## Usage

```tsx
import {ThemeProvider, useTheme} from "@wdkx/theme-react"

function App() {
    return (
        <ThemeProvider>
            Your code here
        </ThemeProvider>
    )
}

function testUseTheme() {
    const theme = useTheme()
    console.log(theme.palette.primary.value)//Print primary color value
}
```
