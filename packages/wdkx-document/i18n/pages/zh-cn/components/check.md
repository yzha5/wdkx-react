### Check

> extends: `span`

<Preview></Preview>

#### 使用

```tsx
import {Check} from '@wdkx/react'

function App() {
    return <Check
        name='demo-check'
        color='primary'
        size='md'
        radius='more'
        indeterminate={false}
        type='checkbox'
    />
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|secondary|颜色
size|❌|[ComponentSize](/types#ComponentProps-size)|md|尺寸
radius|❌|[ComponentRadius](/types#ComponentProps-radius)|undefined|圆角
type|❌|'checkbox'\|'radio'|'checkbox'|类型
indeterminate|❌|boolean|false|checkbox的indeterminate状态，只有type='checkbox'时生效
