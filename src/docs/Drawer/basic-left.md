> 左侧滑出

:::demo 基础抽屉，点击触发按钮抽屉从左滑出，点击遮罩区关闭

```html
<template>
  <div>
    <v-button type="primary" @click="showDrawer">
      Open
    </v-button>
    <v-drawer
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <span slot="title">Basic Drawer</span>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </v-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>
```
:::
