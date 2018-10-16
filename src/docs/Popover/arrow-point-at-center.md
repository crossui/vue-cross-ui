> 箭头指向

:::demo 设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

```html
<template>
  <div>
    <v-popover placement="topLeft">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <v-button>Align edge / 边缘对齐</v-button>
    </v-popover>
    <v-popover placement="topLeft" arrowPointAtCenter>
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <span slot="title">Title</span>
      <v-button>Arrow points to center / 箭头指向中心</v-button>
    </v-popover>
  </div>
</template>
```
:::