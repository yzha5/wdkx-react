### View

> extends: `div`

<Preview></Preview>

#### 使用
```tsx
import {View} from '@wdkx/button'

function App() {
    return <View>content</View>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|'primary'|背景颜色
radius|❌|[ComponentRadius](/types#ComponentProps-radius)|undefined|圆角
frosted|❌|boolean|false|开启毛玻璃效果
shadowed|❌|boolean|false|给按钮添加阴影
