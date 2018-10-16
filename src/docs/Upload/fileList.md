> 完全控制的上传列表

:::demo 使用 `fileList` 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况：1) 上传列表数量的限制。2) 读取远程路径并显示链接。3) 按照服务器返回信息筛选成功上传的文件。

```html
<template>
  <v-upload action="//jsonplaceholder.typicode.com/posts/" :multiple="true" :fileList="fileList" @change="handleChange">
    <v-button>
      <v-icon type="upload"></v-icon> Upload
    </v-button>
  </v-upload>
</template>
<script>
export default {
  data () {
    return {
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      }],
    }
  },
  methods: {
    handleChange(info) {
      let fileList = info.fileList;

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2);

      // 2. read from response and show file link
      fileList = fileList.map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      // 3. filter successfully uploaded files according to response from server
      fileList = fileList.filter((file) => {
        if (file.response) {
          return file.response.status === 'success';
        }
        return true;
      });

      this.fileList = fileList
    },
  },
}
</script>
```
:::



