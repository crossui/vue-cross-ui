> 受控

:::demo 受控制的页码。

```html
<template>
  <v-pagination  @change="onChange" :current="current" :total="50"></v-pagination>
</template>
<script>
  export default {
    data() {
      return {
        current: 3
      }
    },
    methods: {
      onChange(current) {
        this.current = current
      }
    }
  }
</script>
```
:::

