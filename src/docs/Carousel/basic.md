> 基本

:::demo 最简单的用法。

```html
<template>
  <v-carousel :afterChange="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </v-carousel>
</template>
<script>
export default {
  methods: {
    onChange (a, b, c) {
      console.log(a, b, c)
    },
  },
}
</script>
<style scoped>
/* For demo */
.vcu-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.vcu-carousel >>> .slick-slide  h3 {
  color: #fff;
}
</style>
```
:::