# @wdkx/normalize

> Normal style
> 
> Basic styles and typography are automatically applied by default

## Usage

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
display|boolean|true|false|`display`s class name rule
spacing|boolean|true|false|`padding` `margin` class name rule
ripple|boolean|true|false|ripple effect

### display

> TODO:

### spacing

`i` range `0` - `24`, each step `0.25rem`

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
