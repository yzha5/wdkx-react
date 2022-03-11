### Types

#### ComponentProps

<a href="#ComponentProps-color"></a>

##### color
- type: `'primary' | 'secondary' | 'info' | 'success'  | 'warn' | 'error' | string`

设置组件[颜色](/theme/color)

<a href="#ComponentProps-light"></a>

##### light
- type: `boolean`

将组件设置为浅色

> 只有部分组件支持该属性

<a href="#ComponentProps-size"></a>

##### size
- types: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | number`

设置组件的尺寸

<a href="#ComponentProps-radius"></a>

##### radius
- types: `undefined | 'bit' | 'more' | 'full' | number`

设置组件的圆角大小，圆角大小值会根据组件尺寸改变（View组件除外）


<a href="#ComponentProps-mode"></a>

##### mode
- types: `'filled' | 'outlined' | 'ghost'`

设置组件**背景色为实心填充**、**只有边框**、**无背景色和边框**

> 只有部分组件支持该属性


<a href="#ComponentProps-frosted"></a>

##### frosted
- types: `boolean`

设置背景毛玻璃效果


<a href="#ComponentProps-shadowed"></a>

##### shadowed
- types: `boolean`

设置阴影

<a href="#ComponentProps-location"></a>

##### location
- types:

    ```
    'auto'
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'right'
    | 'right-top'
    | 'right-bottom'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    ```

设置位置

<PreviewLocation/>

<a href="#ComponentProps-fluid"></a>

##### fluid
- types: `boolean`

设置全宽

<a href="#ComponentProps-selected"></a>

##### selected
- types: `boolean`

设置选中状态