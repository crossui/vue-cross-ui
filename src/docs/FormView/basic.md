> 基本

:::demo 最简单的用法。

```html
<template>
  <div>
  <v-row>
    <v-col :span="12">
      <v-form-view title="Full Name:" content="Lily"></v-form-item>
    </v-col>
    <v-col :span="12">
      <v-form-view>
        <span slot="title">Account:</span>
        <span slot="content">Some banks make it difficult to open an account</span>
      </v-form-item>
    </v-col>
  </v-row>
  <v-row>
    <v-col :span="12">
      <v-form-view title="City:" content="HangZhou" ></v-form-view>
    </v-col>
    <v-col :span="12">
      <v-form-view title="Country:" content="China🇨🇳" ></v-form-view>
    </v-col>
  </v-row>
  </div>
</template>
```
:::