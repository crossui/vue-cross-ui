> 卡片式页签

:::demo 另一种样式的页签，不提供对应的垂直样式。

```html
<template>
  <v-tabs @change="callback" type="card">
    <v-tab-pane tab="Tab 1" key="1">Content of Tab Pane 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</v-tab-pane>
  </v-tabs>
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
