### Badge

> extends: `span`

<Preview></Preview>

#### 使用

```tsx
import {Badge} from '@wdkx/react'

function App() {
    return <Badge>badge</Badge>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
[color](#color)|❌|[ComponentColor](/types#ComponentProps-color)|secondary|徽章颜色
[light](#light)|❌|boolean|false|徽章颜色设为浅色
[size](#size)|❌|[ComponentSize](/types#ComponentProps-size)|xs|徽章尺寸
