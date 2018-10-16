> 基本

:::demo 最简单的用法。

```html
<template>
  <v-tree-select
    showSearch
    style="width: 300px"
    :value="value"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder='Please select'
    allowClear
    treeDefaultExpandAll
    @change="onChange"
  >
    <v-tree-select-node value='parent 1' title='parent 1' key='0-1'>
      <v-tree-select-node value='parent 1-0' title='parent 1-0' key='0-1-1'>
        <v-tree-select-node value='leaf1' title='my leaf' key='random'></v-tree-select-node>
        <v-tree-select-node value='leaf2' title='your leaf' key='random1'></v-tree-select-node>
      </v-tree-select-node>
      <v-tree-select-node value='parent 1-1' title='parent 1-1' key='random2'>
        <v-tree-select-node value='sss' key='random3'>
          <b style="color: #08c" slot="title">sss</b>
        </v-tree-select-node>
      </v-tree-select-node>
    </v-tree-select-node>
  </v-tree-select>
</template>

<script>

export default {
  data () {
    return {
      value: undefined,
    }
  },
  methods: {
    onChange (value) {
      console.log(arguments)
      this.value = value
    },
  },
}
</script>
```
:::