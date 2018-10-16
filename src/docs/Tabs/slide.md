> 滑动

:::demo 可以左右、上下滑动，容纳更多标签。

```html
<template>
  <div style="width: 500px">
    <v-radio-group v-model="mode" :style="{ marginBottom: '8px' }">
      <v-radio-button value="top">Horizontal</v-radio-button>
      <v-radio-button value="left">Vertical</v-radio-button>
    </v-radio-group>
    <v-tabs defaultActiveKey="1" :tabPosition="mode" :style="{ height: '200px'}" @prevClick="callback" @nextClick="callback">
      <v-tab-pane tab="Tab 1" key="1">Content of tab 1</v-tab-pane>
      <v-tab-pane tab="Tab 2" key="2">Content of tab 2</v-tab-pane>
      <v-tab-pane tab="Tab 3" key="3">Content of tab 3</v-tab-pane>
      <v-tab-pane tab="Tab 4" key="4">Content of tab 4</v-tab-pane>
      <v-tab-pane tab="Tab 5" key="5">Content of tab 5</v-tab-pane>
      <v-tab-pane tab="Tab 6" key="6">Content of tab 6</v-tab-pane>
      <v-tab-pane tab="Tab 7" key="7">Content of tab 7</v-tab-pane>
      <v-tab-pane tab="Tab 8" key="8">Content of tab 8</v-tab-pane>
      <v-tab-pane tab="Tab 9" key="9">Content of tab 9</v-tab-pane>
      <v-tab-pane tab="Tab 10" key="10">Content of tab 10</v-tab-pane>
      <v-tab-pane tab="Tab 11" key="11">Content of tab 11</v-tab-pane>
    </v-tabs>
  </div>

</template>
<script>
export default {
  data () {
    return {
      mode: 'top',
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

