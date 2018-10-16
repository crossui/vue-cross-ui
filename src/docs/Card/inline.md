> 内部卡片

:::demo 可以放在普通卡片内部，展示多层级结构的信息

```html
<template>
  <v-card title="Card title">
    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500"
    >Group title</p>
    <v-card title="Inner card title">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </v-card>
    <v-card title="Inner card title">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </v-card>
  </v-card>
</template>
```
:::
