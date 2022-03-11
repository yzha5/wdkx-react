# @wdkx/normalize

> 标准化样式
> 
> 基础与文本排版为默认提供

## 使用

```tsx
import {Normalize} from '@wdkx/normalize'

function App() {
    return (
        <div>
            <Normalize/>
            Your code
        </div>
    )
}
```

## Props

Name|Type|Default value|Require|Description
---|---|---|---|---
display|boolean|true|false|`display`样式
spacing|boolean|true|false|`padding` `margin` 样式
ripple|boolean|true|false|水波纹效果

### display

> TODO:

### spacing

`i` 范围 `0` - `24`, 第递增1数字则值相应递增`0.25rem`

- `padding-${i}`
- `padding-x-${i}`
- `padding-y-${i}`
- `padding-top-${i}`
- `padding-right-${i}`
- `padding-bottom-${i}`
- `padding-left-${i}`
- `margin-${i}`
- `margin-x-${i}`
- `margin-y-${i}`
- `margin-top-${i}`
- `margin-right-${i}`
- `margin-bottom-${i}`
- `margin-left-${i}`
