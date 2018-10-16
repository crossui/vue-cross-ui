> 国际化

:::demo 设置 `okText` 与 `cancelText` 以自定义按钮文字。

```html
<template>
  <div>
    <v-button type="primary" @click="showModal">Modal</v-button>
    <v-modal
      title="Modal"
      v-model="visible"
      @ok="hideModal"
      okText="确认"
      cancelText="取消"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </v-modal>
    <br />
    <br />
    <v-button @click="confirm">Confirm</v-button>
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
    hideModal() {
      this.visible = false
    },
    confirm() {
      this.$confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
      });
    }
  }
}
</script>
```
:::
