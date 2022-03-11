### Toolbar

> extends: `div`

<Preview></Preview>

#### 使用

```tsx
import {Avatar,Badge,Toolbar} from '@wdkx/component-react'

function App() {
    return (
        <View style={{ width: '100%' }}>
            <Toolbar>
                <Avatar color='primary' radius='full'>
                    Logo
                </Avatar>
                <div>
                    <Toolbar>
                        <Badge color='primary'>badge</Badge>
                        <Badge color='primary'>badge</Badge>
                        <Badge color='primary'>badge</Badge>
                    </Toolbar>
                </div>
            </Toolbar>
        </View>
    )
}
```
