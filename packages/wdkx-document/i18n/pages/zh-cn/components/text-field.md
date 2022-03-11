### TextField

> extends: `input`

<Preview></Preview>

#### 使用

```tsx
import {TextField} from '@wdkx/react'

function App() {
    return <TextField />
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
firstElement|❌|ReactElement|undefined|将元素添加到内容前面
lastElement|❌|ReactElement|undefined|将元素添加到内容后面
type|❌|'color'<br/>\|'date'<br/>\|'datetime-local'<br/>\|'email'<br/>\|'month'<br/>\|'password'<br/>\|'tel'<br/>\|'text'<br/>\|'number'<br/>\|'time'<br/>\|'url'<br/>\|'week'<br/>\|(string & {})|'text'|输入框类型



