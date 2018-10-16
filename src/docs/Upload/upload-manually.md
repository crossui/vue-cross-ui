> 手动上传

:::demo `beforeUpload` 返回 `false` 后，手动上传文件。

```html
<template>
  <div class="clearfix">
    <v-upload
      action="//jsonplaceholder.typicode.com/posts/"
      :fileList="fileList"
      @remove="handleRemove"
      :beforeUpload="beforeUpload"
    >
      <v-button>
        <v-icon type="upload"></v-icon> Select File
      </v-button>
    </v-upload>
    <v-button
      class="upload-demo-start"
      type="primary"
      @click="handleUpload"
      :disabled="fileList.length === 0"
      :loading="uploading"
    >
      {{uploading ? 'Uploading' : 'Start Upload' }}
    </v-button>
  </div>
</template>
<script>
import reqwest from 'reqwest'
export default {
  data () {
    return {
      fileList: [],
      uploading: false,
    }
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append('files[]', file);
      });
      this.uploading = true

      // You can use any AJAX library you like
      reqwest({
        url: '//jsonplaceholder.typicode.com/posts/',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = []
          this.uploading = false
          this.$message.success('upload successfully.');
        },
        error: () => {
          this.uploading = false
          this.$message.error('upload failed.');
        },
      });
    }
  },
}
</script>
<style scoped>
  .upload-demo-start {
    margin-top: 16px;
  }
</style>
```
:::




