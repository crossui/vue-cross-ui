> 确认对话框

:::demo 使用 `confirm()` 可以快捷地弹出确认框。

```html
<template>
  <div>
    <v-button @click="showConfirm">
      Confirm
    </v-button>
    <v-button @click="showDeleteConfirm" type="dashed">
      Delete
    </v-button>
  </div>
</template>
<script>
export default {
  methods: {
    showConfirm() {
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },

    showDeleteConfirm() {
      this.$confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  }
}
</script>
```
:::
