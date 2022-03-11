# `wdkx-theme`

> 主题

## 安装

```
npm i @wdkx/theme-react
```

## 使用

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
    console.log(theme.palette.primary.value)//打印 primary 颜色的值
}
```
