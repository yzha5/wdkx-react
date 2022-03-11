### Avatar

- extends: `span`

<Preview></Preview>

#### 使用
```tsx
import {Avatar} from '@wdkx/react'

function App() {
    return <Avatar>text</Avatar>
}
```

#### Props
属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|背景颜色
light|❌|boolean|false|背景颜色设为浅色
radius|❌|[ComponentRadius](/types#ComponentProps-radius)|undefined|圆角
size|❌|[ComponentSize](/types#ComponentProps-size)|md|尺寸
