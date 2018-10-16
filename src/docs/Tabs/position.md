> 位置

:::demo 有四个位置，`tabPosition="left|right|top|bottom"`。

```html
<template>
  <div style="width: 500px">
    <v-radio-group v-model="tabPosition" style="margin:8px">
      <v-radio-button value="top">top</v-radio-button>
      <v-radio-button value="bottom">bottom</v-radio-button>
      <v-radio-button value="left">left</v-radio-button>
      <v-radio-button value="right">right</v-radio-button>
    </v-radio-group>
    <v-tabs defaultActiveKey="1" :tabPosition="tabPosition">
      <v-tab-pane tab="Tab 1" key="1">Content of Tab 1</v-tab-pane>
      <v-tab-pane tab="Tab 2" key="2">Content of Tab 2</v-tab-pane>
      <v-tab-pane tab="Tab 3" key="3">Content of Tab 3</v-tab-pane>
    </v-tabs>
  </div>

</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'top',
    }
  },
  methods: {
    callback (val) {
      console.log(val)
    },
  },
}
</script>
```
:::

