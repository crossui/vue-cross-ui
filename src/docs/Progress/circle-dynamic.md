> 进度圈动态展示

:::demo 会动的进度条才是好进度条。

```html
<template>
  <div>
    <v-progress type="circle" :percent="percent"></v-progress>
    <v-button-group>
      <v-button @click="decline" icon="minus"></v-button>
      <v-button @click="increase" icon="plus"></v-button>
    </v-button-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        percent: 0,
      }
    },
    methods: {
      increase() {
        let percent = this.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.percent = percent
      },
      decline() {
        let percent = this.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.percent = percent
      },
    },
  }
</script>
```
:::

