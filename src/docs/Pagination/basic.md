> 基本

:::demo 基础分页。

```html
<template>
  <v-pagination v-model="current" :total="50"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        current: 2,
      }
    }
  }
</script>
```
:::