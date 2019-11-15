> 文件夹上传

:::demo 支持上传一个文件夹里的所有文件。

```html
<template>
  <v-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory @change="handleChange">
	<v-button type="primary" icon="upload">上传文件夹</v-button>
  </v-upload>
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
