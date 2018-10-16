> 箭头指向

:::demo 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```html
<template>
  <div>
    <v-tooltip placement="topLeft" title="Prompt Text">
      <v-button>Align edge / 边缘对齐</v-button>
    </v-tooltip>
    <v-tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <v-button>Arrow points to center / 箭头指向中心</v-button>
    </v-tooltip>
  </div>
</template>
```
:::

