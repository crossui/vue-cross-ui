> 异步关闭

:::demo 点击确定后异步关闭对话框，例如提交表单。

```html
<template>
  <div>
    <v-button type="primary" @click="showModal">Open</v-button>
    <v-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </v-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
  }
}
</script>
```
:::
