> 按钮组合

:::demo 可以将多个 `Button` 放入 `Button.Group` 的容器中。通过设置 `size` 为 `large` `small` 分别把按钮组合设为大、小尺寸。若不设置 `size`，则尺寸为中。

```html
<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <v-button-group>
      <v-button>Cancel</v-button>
      <v-button type="primary">OK</v-button>
    </v-button-group>
    <v-button-group>
      <v-button disabled>L</v-button>
      <v-button disabled>M</v-button>
      <v-button disabled>R</v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary">L</v-button>
      <v-button>M</v-button>
      <v-button>M</v-button>
      <v-button type="dashed">R</v-button>
    </v-button-group>
    <br /><br />
    <h4>With Icon</h4>
    <v-button-group>
      <v-button type="primary">
        <v-icon type="left"></v-icon>Go back
      </v-button>
      <v-button type="primary">
        Go forward<v-icon type="right"></v-icon>
      </v-button>
    </v-button-group>
    <v-button-group>
      <v-button type="primary" icon="cloud"></v-button>
      <v-button type="primary" icon="cloud-download"></v-button>
    </v-button-group>
  </div>
</template>
```
:::