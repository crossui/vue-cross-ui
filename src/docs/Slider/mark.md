> 带标签的滑块

:::demo 使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。

```html
<template>
  <div id="components-slider-demo-mark">
    <h4>included=true</h4>
    <v-slider :marks="marks" :defaultValue="37"></v-slider>
    <v-slider range :marks="marks" :defaultValue="[26, 37]"></v-slider>

    <h4>included=false</h4>
    <v-slider :marks="marks" :included="false" :defaultValue="37"></v-slider>

    <h4>marks & step</h4>
    <v-slider :marks="marks" :step="10" :defaultValue="37"></v-slider>

    <h4>step=null</h4>
    <v-slider :marks="marks" :step="null" :defaultValue="37"></v-slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      marks: {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100°C</strong>,
        },
      },
    }
  },
  methods: {
    onChange(value) {
      console.log('change: ', value);
    },
    onAfterChange(value) {
      console.log('afterChange: ', value);
    }
  },
}
</script>
<style scoped>
#components-slider-demo-mark h4 {
  margin: 0 0 16px;
}
#components-slider-demo-mark .vcu-slider-with-marks {
  margin-bottom: 44px;
}
</style>
```
:::

