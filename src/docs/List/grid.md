> 栅格列表

:::demo 可以通过设置 `List` 的 `grid` 属性来实现栅格列表，`column` 可设置期望显示的列数。

```html
<template>
  <v-list
    :grid="{ gutter: 16, column: 4 }"
    :dataSource="data"
  >
    <v-list-item slot="renderItem" slot-scope="item, index">
      <v-card :title="item.title">Card content</v-card>
    </v-list-item>
  </v-list>
</template>
<script>
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
]
export default {
  data () {
    return {
      data,
    }
  },
}
</script>
```
:::
