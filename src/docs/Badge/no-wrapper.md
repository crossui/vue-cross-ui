> 独立使用

:::demo 不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。

```html
<template>
  <div class="components-badge-demo">
    <v-badge count="25"></v-badge>
    <v-badge count="4" :numberStyle="{backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset'}" ></v-badge>
    <v-badge count="109" :numberStyle= "{backgroundColor: '#52c41a'} "></v-badge>
  </div>
</template>
```
:::
