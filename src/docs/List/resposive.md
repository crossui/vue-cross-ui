> 响应式的栅格列表

:::demo 响应式的栅格列表。

```html
<template>
  <v-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
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
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
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
<style>

</style>
```
:::
