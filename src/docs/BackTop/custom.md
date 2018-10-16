> 自定义样式

:::demo 可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。

```html
<template>
  <div id="components-back-top-demo-custom">
    <v-back-top>
      <div class="vcu-back-top-inner">UP</div>
    </v-back-top>
    向下滚动页面，蓝色的按钮为自定义效果。
  </div>
</template>
<style scoped>
  #components-back-top-demo-custom .vcu-back-top {
    bottom: 100px;
  }
  #components-back-top-demo-custom .vcu-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
```
:::