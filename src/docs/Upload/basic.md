> 点击上传

:::demo 经典款式，用户点击按钮弹出文件选择框。

```html
<template>
  <v-upload name="file" :multiple="true" action="//jsonplaceholder.typicode.com/posts/" :headers="headers" @change="handleChange">
    <v-button>
      <v-icon type="upload"></v-icon> Click to Upload
    </v-button>
  </v-upload>
</template>
<script>
export default {
  data () {
    return {
      headers: {
        authorization: 'authorization-text',
      }
    }
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
}
</script>
```
:::