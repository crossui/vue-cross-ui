> 基本

:::demo 基础列表。

```html
<template>
  <v-list
    itemLayout="horizontal"
    :dataSource="data"
  >
    <v-list-item slot="renderItem" slot-scope="item, index">
      <v-list-item-meta
        description="language for background applications, is refined by vcu UED Team"
      >
        <a slot="title" href="#">{{item.title}}</a>
        <v-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></v-avatar>
      </v-list-item-meta>
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