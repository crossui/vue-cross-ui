> 固定状态改变的回调

:::demo 可以获得是否固定的状态。

```html
<template>
  <v-affix :offsetTop="120" @change="change">
    <v-button>120px to affix top</v-button>
  </v-affix>
</template>
<script>
export default {
  methods: {
    change(affixed) {
      console.log(affixed)
    }
  }
}
</script>
```
:::