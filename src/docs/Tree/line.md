> 连接线

:::demo 带连接线的树。

```html
<template>
  <v-tree
    showLine
    :defaultExpandedKeys="['0-0-0']"
    @select="onSelect"
  >
    <v-tree-node key="0-0">
      <span slot="title" style="color: #1890ff">parent 1</span>
      <v-tree-node title="parent 1-0" key="0-0-0">
        <v-tree-node title="leaf" key="0-0-0-0"></v-tree-node>
        <v-tree-node title="leaf" key="0-0-0-1"></v-tree-node>
        <v-tree-node title="leaf" key="0-0-0-2"></v-tree-node>
      </v-tree-node>
      <v-tree-node title="parent 1-1" key="0-0-1">
        <v-tree-node title="leaf" key="0-0-1-0"></v-tree-node>
      </v-tree-node>
      <v-tree-node title="parent 1-2" key="0-0-2">
        <v-tree-node title="leaf" key="0-0-2-0"></v-tree-node>
        <v-tree-node title="leaf" key="0-0-2-1"></v-tree-node>
      </v-tree-node>
    </v-tree-node>
  </v-tree>
</template>

<script>
export default {
  methods: {
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
  },
}
</script>

```
:::
