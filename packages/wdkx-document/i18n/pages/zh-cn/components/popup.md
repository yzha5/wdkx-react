### Popup

> extends: `span`

<Preview></Preview>

#### 使用

```tsx
import {Popup} from '@wdkx/component-react'

function App() {
    const [show, setShow] = useState(false)
    return <Popup
        show={show}
        align='top'
        backplateProps={{ onBlankClick: (e) => setShow(false) }}
        popupContent={
            <div
                style={{
                    backgroundColor: 'rgba(255,0,0,0.9)',
                    color: 'white',
                    padding: '1rem',
                }}
            >
                <Ddd>Click blank to close</Ddd>
                <Button onClick={(e) => setShow(false)}>
                    You can also click this button to close
                </Button>
                <Ddd>Have fun</Ddd>
            </div>
        }
    >
        <Button onClick={(e) => setShow(true)}>Show popup</Button>
    </Popup>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
show|✅|boolean|false|显示弹出框
children|✅|ReactNode||触发弹出框的元素
popupContent|✅|ReactNode||弹出框的元素
align|❌|[Location](/types#ComponentProps-location)|'auto'|`popupContent`相对`children`的对齐方式
backplateProps|❌|[BackplateProps](/components/backplate)|undefined|背景板porps
