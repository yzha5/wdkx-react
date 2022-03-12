### Sidebar

> extends: `span`

<Preview></Preview>

#### 使用

```tsx
import {Sidebar} from '@wdkx/react'

function App() {
    const show = true
    return show && <Sidebar backplateProps={{
        onBlankClick: () => setShow(false),
        color: 'black',
        alpha: 0.3,
    }}>badge</Sidebar>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
location|❌|'top'\|'right'\|'bottom'\|'left'|undefined|侧边栏位置
backplateProps|❌|[Backplate props](./backplate)||undefined|背景板的props

