> 基本

:::demo 最简单的用法。

```html
<template>
  <div>
    <v-button type="primary" @click="showModal">Open</v-button>
    <v-modal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </v-modal>
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
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e);
      this.visible = false
    },
  }
}
</script>
```
:::