# `@wdkx/util-react`

> 工具

## 安装

```
npm i @wdkx/util-react
```

## 使用

```ts
import {DeepMerge} from "@wdkx/util-react"

const obj1 = {a: 1, d: true}
const obj2 = {a: 4, b: 1, c: 'abc'}
const obj3 = DeepMerge(obj1, obj2)//{a: 4 , b: 1 , c: 'abc' , d: true}
```
