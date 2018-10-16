> 卡片加载中

:::demo 可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。

```html
<style scoped>
  .spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
<template>
  <div>
    <v-spin :spinning="spinning">
      <div class="spin-content">
        可以点击‘切换’按钮，控制本区域的spin展示。
      </div>
    </v-spin>
    Loading state：<v-switch v-model="spinning"></v-switch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        spinning: false
      }
    },
    methods: {
      changeSpinning(){
        this.spinning = !this.spinning
      }
    },
  }
</script>
```
:::