> 图标按钮

:::demo 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

```html
<template>
  <div>
    <v-button type="primary" shape="circle" icon="search1"></v-button>
    <v-button type="primary" icon="search1">Search</v-button>
    <v-button shape="circle" icon="search1"></v-button>
    <v-button icon="search1">Search</v-button>
    <v-button shape="circle" icon="search1"></v-button>
    <v-button icon="search1">Search</v-button>
    <v-button type="dashed" shape="circle" icon="search1"></v-button>
    <v-button type="dashed" icon="search1">Search</v-button>
  </div>
</template>
```
:::