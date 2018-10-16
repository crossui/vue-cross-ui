> 图片列表样式

:::demo 上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。

```html
<template>
  <div>
    <v-upload
      action="//jsonplaceholder.typicode.com/posts/"
      listType="picture"
      :defaultFileList="fileList"
    >
      <v-button>
        <v-icon type="upload"></v-icon> upload
      </v-button>
    </v-upload>
    <br />
    <br />
    <v-upload
      action="//jsonplaceholder.typicode.com/posts/"
      listType="picture"
      :defaultFileList="fileList"
      class="upload-list-inline"
    >
      <v-button>
        <v-icon type="upload"></v-icon> upload
      </v-button>
    </v-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    }
  },
}
</script>
<style scoped>
  /* tile uploaded pictures */
  .upload-list-inline >>> .vcu-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .vcu-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .vcu-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>
```
:::
