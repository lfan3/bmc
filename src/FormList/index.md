# Formlist
---
group:
  title: 区块
nav:
  title: 组件
  path: /components
---

This is an example component.

```jsx
import Demos from './demo';

export default ()=>{
  return <Demos/>
}

```

| 参数                     | 说明                                                                                            | 类型                       | 默认值       |
| ----------------------- | ----------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
|customFilterRender    |                                                                                                  |                               |             |
|customTableRender    |                                                                                                   |                               |             |
|customBreadcrumbRender    |                                                                                                  |                               |             |
|customActionBarRender    |                                                                                                   |                               |             |
|customActionsRender    |                                                                                                   |                               |             |
|customPaginationRender    |                                                                                                  |                               |             |
<!-- |containerStyle = {}    |                                                                                                   |                               |             |
|filterFormProps
|filterCompsMap
|actionBarProps
|paginationProps
|tableActionsMap
|tableColumnsMap | colums render 里面的内容. 需要规定一个type | {Input:<Input>abc</Input>}
|customFilterRender
|customActionsRender
|customActionBarRender
|customTableRender
|customPaginationRender
|hasPagination ??any need? could just use paginationProps
|schema
|refreshDeps |
|tableShuttle| 可以透给Antd table组件 | fn 或者 类
|filterShuttle| 可以透给Antd form 组件 | fn 或者 类
|defaultParams | useAntTable 的defaultParams参数 -->

<!-- | bordered     | 是否展示边框                                                                                    | `boolean`                  | false        |
| colon        | 配置 `Descriptions.Item` 的 `colon` 的默认值                                                    | `boolean`                  | true         |
| column       | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number`                   | 3            |
| columns      | 列定义                                                                                          | -                          | -            |
| contentStyle | 自定义内容样式                                                                                  | `CSSProperties`            | -            |
| customComps  | 接受多个自定义组件                                                                              | `Object`                   | {}           |
| data         | 数据源                                                                                          | `Object`                   | {}           |
| extra        | 描述列表的操作区域，显示在右上方                                                                | `ReactNode`                | -            |
| labelStyle   | 自定义标签样式                                                                                  | `CSSProperties`            | -            |
| layout       | 描述布局                                                                                        | `horizontal` ｜ `vertical` | `horizontal` |
| size         | 设置列表的大小。可以设置为 `middle` `、small`, 或不填（只有设置 `bordered={true}` 生效）        | `default`                  | `middle`     | `small` | - |
| schema       | 页面 schema 数据                                                                                | `Object`                   | {}           |
| title        | 描述列表的标题，显示在最顶部                                                                    | `ReactNode`  -->