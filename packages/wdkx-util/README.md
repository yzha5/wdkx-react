# `@wdkx/util-react`

> Utils

## Install

```
npm i @wdkx/util-react
```

## Usage

```ts
import {DeepMerge} from "@wdkx/util-react"

const obj1 = {a: 1, d: true}
const obj2 = {a: 4, b: 1, c: 'abc'}
const obj3 = DeepMerge(obj1, obj2)//{a: 4 , b: 1 , c: 'abc' , d: true}
```
