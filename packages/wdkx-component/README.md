# `@wdkx/component-react`

> component

## Install
Components need theme
```
npm i @wdkx/theme-react @wdkx/component-react
```

## Usage

```tsx
import {ThemeProvider} from "@wdkx/theme-react"
import {Button} from "@wdkx/component-react"

function App() {
    return (
        <ThemeProvider>
            <Button>button</Button>
        </ThemeProvider>
    )
}
```
