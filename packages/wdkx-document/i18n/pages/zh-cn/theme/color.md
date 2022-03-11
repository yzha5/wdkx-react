### color

主题颜色有`primary` `secondary` `info` `success` `warn` `error`。你可以在主题提供者中设置自定义的颜色：

```tsx
import {ThemeProvider} from '@wdkx/react'

<ThemeProvider theme={{
    palette:{
        primary:'rgb(64,64,255)'
    }
}}>
    ...
</ThemeProvider>
```

本文档提供自定义颜色设置和预览，你可以在右侧的`设置面板`中找到它。