### Container

> extends: `div`

<Preview></Preview>

#### 使用

```tsx
import {Container} from '@wdkx/react'

function App() {
    return <Container>content</Container>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
maxWidth|❌|'sm'\|'md'\|'lg'\|'xl'|undefined|容器的最大宽度<br/><br/>默认断点值<br/>sm: 600px<br/>md: 960px<br/>lg: 1280px<br/>xl: 1920px
