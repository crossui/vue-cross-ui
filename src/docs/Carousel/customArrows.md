> 自定义箭头

:::demo 自定义箭头展示。

```html
<template>
  <v-carousel arrows>
    <div
      slot="prevArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <v-icon type="left-circle"></v-icon>
    </div>
    <div
      slot="nextArrow" slot-scope="props"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <v-icon type="right-circle"></v-icon>
    </div>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </v-carousel>
</template>
<script>
export default {}
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

.vcu-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
.vcu-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.vcu-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.vcu-carousel >>> .slick-slide  h3 {
  color: #fff;
}
</style>
```
:::