> 顶部公告

:::demo 页面顶部通告形式，默认有图标且`type` 为 'warning'。

```html
<template>
  <div>
    <v-alert message="Warning text" banner></v-alert>
    <v-alert message="Very long warning text warning text text text text text text text" banner closable></v-alert>
    <v-alert :showIcon="false" message="Warning text without icon" banner></v-alert>
    <v-alert type="error" message="Error text" banner></v-alert>
  </div>
</template>
```
:::