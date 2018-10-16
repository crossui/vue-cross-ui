> 基本用法

:::demo 最简单的用法。

```html
<template>
  <div>
    <v-switch defaultChecked @change='onChange'></v-switch>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      onChange(checked){
        console.log(`v-switch to ${checked}`);
      }
    },
  }
</script>
```
:::