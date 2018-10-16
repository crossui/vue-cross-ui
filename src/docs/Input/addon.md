> 前置/后置标签

:::demo 用于配置一些固定组合。

```html
<template>
  <div>
    <div style="margin-bottom: 16px">
      <v-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"></v-input>
    </div>
    <div style="margin-bottom: 16px">
      <v-input defaultValue="mysite">
        <v-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
          <v-select-option value="Http://">Http://</v-select-option>
          <v-select-option value="Https://">Https://</v-select-option>
        </v-select>
        <v-select slot="addonAfter" defaultValue=".com" style="width: 80px">
          <v-select-option value=".com">.com</v-select-option>
          <v-select-option value=".jp">.jp</v-select-option>
          <v-select-option value=".cn">.cn</v-select-option>
          <v-select-option value=".org">.org</v-select-option>
        </v-select>
      </v-input>
    </div>
    <div style="margin-bottom: 16px">
      <v-input defaultValue="mysite">
        <v-icon slot="addonAfter" type="setting"></v-icon>
      </v-input>
    </div>
  </div>
</template>
```
:::