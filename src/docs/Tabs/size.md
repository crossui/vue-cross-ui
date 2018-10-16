> 大小

:::demo 大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

```html
<template>
<div>
  <v-radio-group v-model="size" style="margin-bottom: 16px">
    <v-radio-button value="small">Small</v-radio-button>
    <v-radio-button value="default">Default</v-radio-button>
    <v-radio-button value="large">Large</v-radio-button>
  </v-radio-group>
  <v-tabs defaultActiveKey="2" :size="size">
    <v-tab-pane tab="Tab 1" key="1">Content of tab 1</v-tab-pane>
    <v-tab-pane tab="Tab 2" key="2">Content of tab 2</v-tab-pane>
    <v-tab-pane tab="Tab 3" key="3">Content of tab 3</v-tab-pane>
  </v-tabs>
</div>
</template>
<script>
export default {
  data () {
    return {
      size: 'small',
    }
  },
}
</script>
```
:::
