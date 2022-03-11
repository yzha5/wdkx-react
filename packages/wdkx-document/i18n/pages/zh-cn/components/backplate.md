### Backplate

- extends: `div`

<Preview></Preview>

#### 使用

```tsx
import {MouseEvent, useState} from "react"
import {Backplate, Button} from '@wdkx/react'

function App() {
    const [show, setShow] = useState(false)
    const handleBlankClick = (e: MouseEvent<HTMLDivElement>) => {
        setShow(false)
    }
    return (
        <div>
            <Button onClick={() => setShow(true)}>show backplate</Button>
            {show && (
                <Backplate
                    onBlankClick={handleBlankClick}
                >
                    <h3>Click blank to close</h3>
                    <Button onClick={() => setShow(false)}>
                        close backplate
                    </Button>
                    <div
                        style={{
                            width: '20rem',
                            height: '10rem',
                            backgroundColor: 'red',
                        }}
                    >
                        When you click on this area, the 'onBlankClick' event
                        will not be fired
                    </div>
                </Backplate>
            )}
        </div>
    )
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|颜色
frosted|❌|boolean|false|开启毛玻璃效果
alpha|❌|number|0.8|背景透明度 取值范围：0-1
onBlankClick|❌|(e: MouseEvent\<HTMLDivElement\>) => void|undefined|点击空白处的事件

