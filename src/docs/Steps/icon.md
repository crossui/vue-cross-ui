> 带图标的步骤条

:::demo 通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

```html
<template>
  <v-steps>
    <v-step status="finish" title="Login">
      <v-icon type="user" slot="icon"></v-icon>
    </v-step>
    <v-step status="finish" title="Verification">
      <v-icon type="solution" slot="icon"></v-icon>
    </v-step>
    <v-step status="process" title="Pay">
      <v-icon type="loading" slot="icon"></v-icon>
    </v-step>
    <v-step status="wait" title="Done">
      <v-icon type="smile" slot="icon"></v-icon>
    </v-step>
  </v-steps>
</template>
```
:::
