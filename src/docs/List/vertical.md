> 竖排列表样式

:::demo 通过设置 `itemLayout` 属性为 `vertical` 可实现竖排列表样式。

```html
<template>
  <v-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <v-list-item slot="renderItem" slot-scope="item, index" key="item.title">
      <template slot="actions" v-for="{type, text} in actions">
        <span :key="type">
          <v-icon :type="type" style="margin-right: 8px"></v-icon>
          {{text}}
        </span>
      </template>
      <img slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
      <v-list-item-meta
        :description="item.description"
      >
        <a slot="title" :href="item.href">{{item.title}}</a>
        <v-avatar slot="avatar" :src="item.avatar"></v-avatar>
      </v-list-item-meta>
      {{item.content}}
    </v-list-item>
  </v-list>
</template>
<script>
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '#',
    title: `part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'a design language for background applications, is refined by vcu UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}

const pagination = {
  onChange: (page) => {
    console.log(page)
  },
  pageSize: 3,
}

export default {
  data () {
    return {
      listData,
      pagination,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    }
  },
}
</script>
```
:::
