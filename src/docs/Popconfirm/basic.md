> 基本

:::demo 最简单的用法。

```html
<template>
  <v-popconfirm title="Are you sure delete this task?" @confirm="confirm" @cancel="cancel" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </v-popconfirm>
</template>
<script>

export default {
  methods: {
    confirm (e) {
      console.log(e)
      this.$message.success('Click on Yes')
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Click on No')
    },
  },
}
</script>
```
:::