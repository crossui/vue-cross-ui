> 自定义分页

:::demo 自定义分页展示。

```html
<template>
  <v-carousel arrows dotsClass="slick-dots slick-thumb">
    <a slot="customPaging" slot-scope="props">
      <img :src="getImgUrl(props.i)" />
    </a>
    <div v-for="item in 4">
      <img :src="baseUrl+'abstract0'+item+'.jpg'" />
    </div>
  </v-carousel>
</template>
<script>
const baseUrl = '/static/images/'
export default {
  data() {
    return {
      baseUrl,
    }
  },
  methods: {
    getImgUrl(i) {
      return `${baseUrl}abstract0${i + 1}.jpg`
    }
  }
}
</script>
<style scoped>
/* For demo */
.vcu-carousel >>> .slick-slide{
  padding-bottom:45px
}
.vcu-carousel >>> .slick-dots {
  height: auto
}
.vcu-carousel >>> .slick-slide img{
    border: 5px solid #FFF;
    display: block;
    margin: auto;
    max-width: 80%;
}
.vcu-carousel >>> .slick-thumb {
  bottom: -5px;
}
.vcu-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.vcu-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.vcu-carousel >>> .slick-thumb li.slick-active img{
    filter: grayscale(0%);
}
</style>
```
:::
