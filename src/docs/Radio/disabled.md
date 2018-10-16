> 不可用

:::demo Radio 不可用。

```html
<template>
  <div>
    <v-radio :defaultChecked="false" :disabled="disabled">Disabled</v-radio>
    <br />
    <br />
    <v-radio defaultChecked :disabled="disabled">Disabled</v-radio>
    <br />
    <br />
    <div :style="{ marginTop: 20 }">
      <v-button type="primary" @click="toggleDisabled">
        Toggle disabled
      </v-button>
    </div>
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
    toggleDisabled () {
      this.disabled = !this.disabled
    },
  },
}
</script>
```
:::
