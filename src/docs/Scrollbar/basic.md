> 基本

:::demo 最简单的用法。

```html
<template>
  <div>
    <v-scrollbar class="scroll-container">
      <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
    </v-scrollbar>
  </div>
</template>
<style lang="less">
.scroll-container {
  height: 200px;
}
</style>
```
:::