> 不可用状态

:::demo 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```html
<template>
  <div>
    <v-button type="primary">Primary</v-button>
    <v-button type="primary" disabled>Primary(disabled)</v-button>
    <br /><br />
    <v-button type="info">info</v-button>
    <v-button type="info" disabled>info(disabled)</v-button>
    <br /><br />
    <v-button type="success">success</v-button>
    <v-button type="success" disabled>success(disabled)</v-button>
    <br /><br />
    <v-button type="warning">warning</v-button>
    <v-button type="warning" disabled>warning(disabled)</v-button>
    <br /><br />
    <v-button type="error">error</v-button>
    <v-button type="error" disabled>error(disabled)</v-button>
    <br /><br />
    <v-button type="text">text</v-button>
    <v-button type="text" disabled>text(disabled)</v-button>
    <br /><br />
    <v-button>Default</v-button>
    <v-button disabled>Default(disabled)</v-button>
    <br /><br />
    <v-button>Ghost</v-button>
    <v-button disabled>Ghost(disabled)</v-button>
    <br /><br />
    <v-button type="dashed">Dashed</v-button>
    <v-button type="dashed" disabled>Dashed(disabled)</v-button>
  </div>
</template>
```

:::