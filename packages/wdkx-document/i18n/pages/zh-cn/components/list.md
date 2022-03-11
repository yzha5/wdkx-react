### List

> List extends: `ul`
>
> ListItem extends: `li`
>
> ListTitle extends: `li`

<Preview></Preview>

#### 使用

```tsx
import {Badge, Folding, List, ListItem, ListTitle} from '@wdkx/react'
import {Airplane, Down, Right} from '@wdkx/icon-react'

function App() {
    const [foldingOpen, setFoldingOpen] = useState(false)

    const Item = (
        <ListItem
            color='warn'
            text='list item'
            secondaryText='secondary text'
            light={false}
            selected={false}
            disabled={false}
            firstElement={<Airplane size='1em'/>}
            lastElement={
                <Badge color='secondary'>new</Badge>
            }
        />
    )
    return (
        <List dense={false}>
            {Item}
            <ListTitle>List title</ListTitle>
            <Folding
                resident={
                    <ListItem
                        text='Nested list'
                        secondaryText='secondary text'
                        selected={foldingOpen}
                        onClick={
                            () => setFoldingOpen(!foldingOpen)
                        }
                        lastElement={
                            foldingOpen ? (
                                <Down size='1rem'/>
                            ) : (
                                <Right size='1rem'/>
                            )
                        }
                    />
                }
                open={foldingOpen}
                panelStyle={{paddingLeft: '1rem'}}
            >
                {Item}
            </Folding>
        </List>
    )
}
```

#### Props(List)

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
dense|❌|boolean|false|紧凑列表

#### Props(ListItem)

属性|必须|类型|默认值|备注
:---|:---|:---|:---|:---
text|✅|string|-|主要文本
secondaryText|❌|string|undefined|次要文本
color|❌|[ComponentColor](/types#ComponentProps-color)|undefined|列表项颜色
light|❌|boolean|false|列表项颜色设为浅色
selected|❌|boolean|false|选中状态
disabled|❌|boolean|false|禁用
firstElement|❌|ReactElement|undefined|将元素添加到列表项内容前面
lastElement|❌|ReactElement|undefined|将元素添加到列表项内容后面
