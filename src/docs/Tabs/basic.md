> 基本

:::demo 默认选中第一项。

```html
<template>
<div>
  <v-tabs defaultActiveKey="1" @change="callback">
    <v-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</v-tab-pane>
  </v-tabs>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
  },
}
</script>
```
:::