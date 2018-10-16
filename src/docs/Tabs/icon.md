> 图标

:::demo 有图标的标签。

```html
<template>
  <v-tabs defaultActiveKey="2">
    <v-tab-pane key="1">
      <span slot="tab">
        <v-icon type="apple" />
        Tab 1
      </span>
      Tab 1
    </v-tab-pane>
    <v-tab-pane key="2">
      <span slot="tab">
        <v-icon type="android" />
        Tab 2
      </span>
      Tab 2
    </v-tab-pane>
  </v-tabs>
</template>
```
:::
