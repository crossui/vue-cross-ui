> 带输入框的滑块

:::demo 基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

```html

<template>
  <div>
    <v-row>
        <v-col :span="12">
          <v-slider :min="1" :max="20" v-model="inputValue1"></v-slider>
        </v-col>
        <v-col :span="4">
          <v-input-number
            :min="1"
            :max="20"
            style="marginLeft: 16px"
            v-model="inputValue1"
          ></v-input-number>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-slider :min="0" :max="1" v-model="inputValue" :step="0.01"></v-slider>
        </v-col>
        <v-col :span="4">
          <v-input-number
            :min="0"
            :max="1"
            :step="0.01"
            style="marginLeft: 16px"
            v-model="inputValue"
          ></v-input-number>
        </v-col>
      </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: 0,
      inputValue1: 1,
    }
  },
}
</script>
<style scoped>
.code-box-demo .vcu-slider {
  margin-bottom: 16px;
}
</style>
```
:::

