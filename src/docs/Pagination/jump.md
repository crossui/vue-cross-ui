> 跳转

:::demo 快速跳转到某一页。

```html
<template>
  <v-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange"><v-pagination>
</template>
<script>
  export default {
    methods: {
      onChange(pageNumber) {
        console.log('Page: ', pageNumber);
      }
    }
  }
</script>
```
:::
