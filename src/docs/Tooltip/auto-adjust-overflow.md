> 自动调整位置

:::demo 气泡框不可见时自动调整位置

```html
<template>
  <div :style="wrapStyles">
    <v-tooltip placement="left" title="Prompt Text" :getPopupContainer="getPopupContainer">
      <v-button>Adjust automatically / 自动调整</v-button>
    </v-tooltip>
    <br />
    <v-tooltip style="marginTop: 10px" placement="left" title="Prompt Text" :getPopupContainer="getPopupContainer" :autoAdjustOverflow="false">
      <v-button>Ingore / 不处理</v-button>
    </v-tooltip>
  </div>
</template>
<script>
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
}
export default {
  data () {
    return {
      wrapStyles,
    }
  },
  methods: {
    getPopupContainer (trigger) {
      return trigger.parentElement
    },
  },
}
</script>
```
:::