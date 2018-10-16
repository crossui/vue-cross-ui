> 从浮层内关闭

:::demo 使用 `visible` 属性控制浮层显示。

```html
<template>
  <v-popover
    title="Title"
    trigger="click"
    v-model="visible"
  >
    <a @click="hide" slot="content">Close</a>
    <v-button type="primary">Click me</v-button>
  </v-popover>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    hide () {
      console.log(111)
      this.visible = false
    },
  },
}
</script>
```
:::
