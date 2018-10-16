> 基本

:::demo 基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `onClose` `afterClose` 两个事件。

```html
<template>
  <div>
    <v-tag>Tag 1</v-tag>
    <v-tag><a href="#">Link</a></v-tag>
    <v-tag closable @close="log">Tag 2</v-tag>
    <v-tag closable @close="preventDefault">Prevent Default</v-tag>
  </div>
</template>
<script>
export default {
  methods: {
    log (e) {
      console.log(e)
    },
    preventDefault (e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    },
  },
}
</script>
```
:::