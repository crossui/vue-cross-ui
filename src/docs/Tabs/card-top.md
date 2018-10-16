> 卡片式页签容器

:::demo 用于容器顶部，需要一点额外的样式覆盖。

```html
<template>
  <div class="card-container">
    <v-tabs type="card">
      <v-tab-pane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </v-tab-pane>
      <v-tab-pane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </v-tab-pane>
      <v-tab-pane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </v-tab-pane>
    </v-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    callback (key) {
      console.log(key)
    },
  },
}
</script>
<style>
.card-container {
  background: #F5F5F5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .vcu-tabs-card > .vcu-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .vcu-tabs-card > .vcu-tabs-content > .vcu-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .vcu-tabs-card > .vcu-tabs-bar {
  border-color: #fff;
}

.card-container > .vcu-tabs-card > .vcu-tabs-bar .vcu-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .vcu-tabs-card > .vcu-tabs-bar .vcu-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>
```
:::