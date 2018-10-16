> 适应文本高度的文本域

:::demo `autosize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autosize` 可以设定为一个对象，指定最小行数和最大行数。

```html
<template>
  <div>
    <v-textarea placeholder="Autosize height based on content lines" autosize></v-textarea>
    <div style="margin: 24px 0"></div>
    <v-textarea placeholder="Autosize height with minimum and maximum number of lines" :autosize="{ minRows: 2, maxRows: 6 }"></v-textarea>
  </div>
</template>
```
:::

