### Button

> extends: `button`

<Preview></Preview>

#### 使用
```tsx
import {Button} from '@wdkx/button'

function App() {
    return <Button>button</Button>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|'primary'|按钮颜色
size|❌|[ComponentSize](/types#ComponentProps-size)|md|按钮尺寸
radius|❌|[ComponentRadius](/types#ComponentProps-radius)|undefined|按钮圆角
mode|❌|[ComponentMode](/types#ComponentProps-mode)|filled|按钮外观模式
light|❌|boolean|false|按钮颜色设为浅色
fluid|❌|boolean|false|全宽
icon|❌|boolean|false|等宽高图标模式
shadowed|❌|boolean|false|给按钮添加阴影
firstElement|❌|ReactElement|undefined|将元素添加到按钮内容前面
lastElement|❌|ReactElement|undefined|将元素添加到按钮内容后面
