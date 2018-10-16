> 基本用法

:::demo 简单的步骤条。

```html
<template>
  <v-steps :current="1">
    <v-step>
      <template slot="title">
        Finished
      </template>
      <span slot="description">This is a description.</span>
    </v-step>
    <v-step title="In Progress" description="This is a description."></v-step>
    <v-step title="Waiting" description="This is a description."></v-step>
  </v-steps>
</template>
```
:::
