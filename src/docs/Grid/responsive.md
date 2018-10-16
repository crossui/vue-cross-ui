> 响应式布局

:::demo 参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-mediv-queries)，预设五个响应尺寸：`xs` `sm` `md` `lg` `xl`  `xxl`。

```html
<template>
  <v-row>
    <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</v-col>
    <v-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</v-col>
    <v-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</v-col>
  </v-row>
</template>
```
:::


