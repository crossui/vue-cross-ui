> 自定义 click 事件

:::demo 点击锚点不记录历史。

```html
<template>
  <v-anchor :affix="false" @click="handleClick">
    <v-anchor-link href="#components-anchor-demo-basic" title="Basic demo" ></v-anchor-link>
    <v-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo" ></v-anchor-link>
    <v-anchor-link href="#API" title="API">
      <v-anchor-link href="#Anchor-Props" title="Anchor Props" ></v-anchor-link>
      <v-anchor-link href="#Link-Props" title="Link Props" ></v-anchor-link>
    </v-anchor-link>
  </v-anchor>
</template>
<script>
export default {
  methods: {
    handleClick (e, link) {
      e.preventDefault();
      console.log(link);
    }
  }
}
</script>
```
:::
