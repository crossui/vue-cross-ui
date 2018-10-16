> 基本

:::demo 最简单的用法。

```html
<template>
  <div>
    <v-affix :offsetTop="top" :zIndex="zIndex">
      <v-button type="primary">Affix top</v-button>
    </v-affix>
    <br />
    <v-affix :offsetBottom="bottom">
      <v-button type="primary">Affix bottom</v-button>
    </v-affix>
  </div>
</template>
<script>
export default {
  data() {
    return {
      top: 30,
      bottom: 30,
      zIndex: 200
    }
  }
}
</script>
```
:::