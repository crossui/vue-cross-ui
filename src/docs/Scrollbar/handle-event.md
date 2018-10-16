> 触发事件

:::demo 手动触发事件。

```html
<template>
  <div>
    <v-scrollbar ref="scrollbarDom" class="scroll-container">
      <p class="list-item" v-for="i in 100" :key="`item-${i}`">item - {{ i }} 手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件手动触发事件</p>
    </v-scrollbar>
    <v-button-group class="margin-top-20">
      <v-button @click="handlescrollBottom">scrollBottom</v-button>
      <v-button @click="handlescrollTop">scrollTop</v-button>
      <v-button @click="handlescrollLeft">scrollLeft</v-button>
      <v-button @click="handlescrollRight">scrollRight</v-button>
    </v-button-group>
  </div>
</template>
<script>
export default {
  methods: {
    handlescrollBottom() {
      this.$refs.scrollbarDom.scrollBottom()
    },
    handlescrollTop() {
      this.$refs.scrollbarDom.scrollTop()
    },
    handlescrollLeft() {
      this.$refs.scrollbarDom.scrollLeft()
    },
    handlescrollRight() {
      this.$refs.scrollbarDom.scrollRight()
    }
  }
}
</script>
<style lang="less">
.scroll-container {
  height: 200px;
}
.list-item {
  word-break: keep-all;
  white-space: nowrap;
}
</style>
```
:::