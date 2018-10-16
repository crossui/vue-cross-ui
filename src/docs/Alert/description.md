> 含有辅助性文字介绍

:::demo 含有辅助性文字介绍的警告提示。

```html
<template>
  <div>
    <v-alert
      message="Success Text"
      type="success"
    >
      <p slot="description">
        Success Description <span style="color: red">Success</span> Description Success Description
      </p>
    </v-alert>
    <v-alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    ></v-alert>
    <v-alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    ></v-alert>
    <v-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    ></v-alert>
  </div>
</template>
```
:::
