> 幽灵按钮

:::demo 幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

```html
<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <v-button type="primary" ghost>Primary</v-button>
    <v-button ghost>Default</v-button>
    <v-button type="dashed" ghost>Dashed</v-button>
    <v-button type="danger" ghost>danger</v-button>
  </div>
</template>
```

:::