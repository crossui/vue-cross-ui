> 确认对话框(异步关闭)

:::demo 使用 `confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭

```html
<template>
  <v-button @click="showConfirm">
    Confirm
  </v-button>
</template>
<script>
export default {
  methods: {
    showConfirm() {
      this.$confirm({
        title: 'Do you want to delete these items?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      });
    },
  }
}
</script>
```
:::