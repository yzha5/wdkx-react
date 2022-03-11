# `@wdkx/component-react`

> 组件

## 安装
组件必须要得到主题的支持
```
npm i @wdkx/theme-react @wdkx/component-react
```

## 使用

```tsx
import {ThemeProvider} from "@wdkx/theme-react"
import {Button} from "@wdkx/component-react"

function App() {
    return (
        <ThemeProvider>
            <Button>按钮</Button>
        </ThemeProvider>
    )
}
```
