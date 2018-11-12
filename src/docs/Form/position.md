> 表单布局

:::demo 设置属性 `label-position`，可以改变表单域标签的位置，`left` 为左对齐，`right` 为右对齐，`top` 会置于表单域顶部。。

```html
<template>
  <div>
    <v-form label-position="left" :label-width="100">
      <v-form-item label='Field A'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item label='Field B'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item>
        <v-button type='primary'>Submit</v-button>
      </v-form-item>
    </v-form>
    <v-form label-position="right" :label-width="100">
      <v-form-item label='Field A'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item label='Field B'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item>
        <v-button type='primary'>Submit</v-button>
      </v-form-item>
    </v-form>
    <v-form label-position="top">
      <v-form-item label='Field A'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item label='Field B'>
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item>
        <v-button type='primary'>Submit</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>

```
:::






