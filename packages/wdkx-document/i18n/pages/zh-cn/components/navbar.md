### Navbar

> extends: `nav`

<Preview></Preview>

#### 使用

```tsx
import {Navbar} from '@wdkx/component-react'

function App() {
    return <Navbar>navbar</Navbar>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|背景颜色
light|❌|boolean|false|背景颜色设为浅色
frosted|❌|boolean|false|背景毛玻璃效果
shadowed|❌|boolean|false|阴影
dense|❌|boolean|false|紧凑
fixed|❌|boolean|false|固定
