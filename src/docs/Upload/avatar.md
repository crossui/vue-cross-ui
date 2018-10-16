> 用户头像

:::demo 点击上传用户头像，并使用 `beforeUpload` 限制用户上传的图片格式和大小。`beforeUpload` 的返回值可以是一个 Promise 以支持也支持异步检查

```html
<template>
  <v-upload
    name="avatar"
    listType="picture-card"
    class="avatar-uploader"
    :showUploadList="false"
    action="//jsonplaceholder.typicode.com/posts/"
    :beforeUpload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="" />
    <div v-else>
        <v-icon :type="loading ? 'loading' : 'plus'"></v-icon>
        <div class="vcu-upload-text">Upload</div>
    </div>
  </v-upload>
</template>
<script>
function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
export default {
  data () {
    return {
      loading: false,
      imageUrl: '',
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJPG && isLt2M
    },
  },
}
</script>
<style>
  .avatar-uploader > .vcu-upload {
    width: 128px;
    height: 128px;
  }
  .vcu-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .vcu-upload-select-picture-card .vcu-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
```
:::

