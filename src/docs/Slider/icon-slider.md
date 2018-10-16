> 带 icon 的滑块

:::demo 滑块左右可以设置图标来表达业务含义。

```html
<template>
  <div class="icon-wrapper">
    <v-icon :style="{color: preColor}" type="frown"></v-icon>
    <v-slider :min="0" :max="20" @change="handleChange" :value="value"></v-slider>
    <v-slider :min="0" :max="20" v-model="value"></v-slider>
    <v-icon :style="{color: nextColor}" type="smile"></v-icon>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      min: 0,
      max: 20,
    }
  },
  methods: {
    handleChange(value) {
      this.value = value
    }
  },
  computed: {
    preColor() {
      const { max, min, value } = this
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? '' : 'rgba(0, 0, 0, .45)';
      const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    },
    nextColor() {
      const { max, min, value } = this
      const mid = ((max - min) / 2).toFixed(5);
      return value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    }
  }
}
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .vcuicon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, .25);
}

.icon-wrapper .vcuicon:first-child {
  left: 0;
}

.icon-wrapper .vcuicon:last-child {
  right: 0;
}
</style>


```
:::

