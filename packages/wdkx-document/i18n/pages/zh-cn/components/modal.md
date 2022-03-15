### Modal

> extends: `div`

<Preview></Preview>

#### 使用

```tsx
import {Modal} from '@wdkx/react'

function App() {
    const [show, setShow] = useState(false)
    return <Modal
        show={show}
        onBlankClick={(e) => setShow(false)}
        panel={
            <View shadowed radius='more' className='padding-4'>
                <h1>Modal</h1>
                <p>Click blank to close</p>
                <p>
                    You can also click{' '}
                    <Button radius='bit' onClick={() => setShow(false)}>
                        this button
                    </Button>{' '}
                    to close
                </p>
            </View>
        }
    >
        <Button onClick={(e) => setShow(true)}>show modal</Button>
    </Modal>
}
```

#### Props

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|颜色
frosted|❌|boolean|false|开启毛玻璃效果
alpha|❌|number|0.8|背景透明度 取值范围：0-1
onBlankClick|❌|(e: MouseEvent\<HTMLDivElement\>) => void|undefined|点击空白处的事件
