> 自定义图标

:::demo 可以针对不同的节点定制图标。

```html
<template>
  <v-tree
    :treeNodes="treeData"
    showIcon
    defaultExpandAll
    :defaultSelectedKeys="['0-0-0']"
  >
    <v-icon slot="smile" type="smile"></v-icon>
    <v-icon slot="meh" type="smile"></v-icon>
    <template slot="custom" slot-scope="{selected}">
      <v-icon :type="selected ? 'frown':'frown-fill'"></v-icon>
    </template>
  </v-tree>
</template>
<script>
const treeData = [{
  title: 'parent 1',
  key: '0-0',
  slots: {
    icon: 'smile',
  },
  children: [
    { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' }},
    { title: 'leaf', key: '0-1-1', scopedSlots: { icon: 'custom' }}],
}]

export default {
  data () {
    return {
      treeData,
    }
  },
  methods: {
    onSelect (selectedKeys, info) {
      console.log('selected', selectedKeys, info)
    },
    onCheck (checkedKeys, info) {
      console.log('onCheck', checkedKeys, info)
    },
  },
}

</script>
```
:::

