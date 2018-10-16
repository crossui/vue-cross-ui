> 预加载的卡片

:::demo 数据读入前会有文本块样式

```html
<template>
  <div>
    <v-card :loading="loading" title="Card title">
      whatever content
    </v-card>
    <v-button @click="handleClick" style="marginTop: 16px">Toggle loading</v-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      }
    },
    methods: {
      handleClick() {
        this.loading = !this.loading
      }
    },
  }
</script>
```
:::


