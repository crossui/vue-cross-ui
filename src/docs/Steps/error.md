> 步骤运行错误

:::demo 使用 Steps 的 `status` 属性来指定当前步骤的状态。

```html
<template>
  <v-steps :current="1" status="error">
    <v-step title="Finished" description="This is a description."></v-step>
    <v-step title="In Progress" description="This is a description."></v-step>
    <v-step title="Waiting" description="This is a description."></v-step>
  </v-steps>
</template>
```
:::