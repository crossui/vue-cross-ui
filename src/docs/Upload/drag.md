> 拖拽上传

:::demo 把文件拖入指定区域，完成上传，同样支持点击上传。设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。

```html
<template>
  <v-upload-dragger name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" @change="handleChange">
    <p class="vcu-upload-drag-icon">
      <v-icon type="cloud-upload"></v-icon>
    </p>
    <p class="vcu-upload-text">Click or drag file to this area to upload</p>
    <p class="vcu-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </v-upload-dragger>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
}
</script>
```
:::

