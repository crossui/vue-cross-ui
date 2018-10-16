> 上一步和下一步

:::demo 修改上一步和下一步为文字链接。

```html
<template>
  <v-pagination :total="500" :itemRender="itemRender"><v-pagination>
</template>
<script>
  export default {
    methods: {
      itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>Previous</a>;
        } else if (type === 'next') {
          return <a>Next</a>;
        }
        return originalElement;
      }
    }
  }
</script>
```
:::
