### NumberField

> extends: `input`

<Preview></Preview>

#### 使用

```tsx
import {NumberField} from '@wdkx/component-react'

function App() {
    return <NumberField />
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|徽章颜色
size|❌|number|2.5|尺寸(高度)，默认且最小为2.5rem
radius|❌|[ComponentRadius](/types#ComponentProps-radius)|undefined|圆角大小
shadowed|❌|boolean|false|阴影
shadowOnInteract|❌|boolean|false|hover或focus时阴影，只有`shadowed`为`true`时才有效
fluid|❌|boolean|false|全宽
label|❌|string|undefined|label文本
message|❌|string|undefined|提示消息文本
plusDisabled|❌|boolean|false|禁用加按钮
minusDisabled|❌|boolean|false|禁用减按钮




