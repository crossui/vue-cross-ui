> 不可用

:::demo Switch 失效状态。

```html

<template>
  <div>
    <v-switch defaultChecked :disabled="disabled" style="margin-bottom:5px"></v-switch>
    <br/>
    <v-button type="primary" @click='onToggle'>Toggle disabled</v-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        disabled: true,
      }
    },
    methods: {
      onToggle(){
        this.disabled = !this.disabled
      }
    },
  }
</script>
```
:::