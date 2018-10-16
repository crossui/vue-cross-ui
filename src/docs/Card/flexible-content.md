> 更灵活的内容展示

:::demo 可以利用 `Card.Meta` 支持更灵活的内容

```html
<template>
<v-card
  hoverable
  style="width: 240px"
>
  <img
    alt="example"
    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    slot="cover"
  />
  <v-card-meta
    title="Europe Street beat">
    <template slot="description">www.instagram.com</template>
  </v-card-meta>
</v-card>
</template>
```
:::
