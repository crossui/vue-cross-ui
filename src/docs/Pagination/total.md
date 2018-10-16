> 总数

:::demo 通过设置 `showTotal` 展示总共有多少数据。

```html
<template>
  <div>
    <v-pagination
      :total="85"
      :showTotal="(total, range) => `${range[0]}-${range[1]} of ${total} items`"
      :pageSize="20"
      :defaultCurrent="1"
    ><v-pagination>
  </div>
</template>
```
:::

