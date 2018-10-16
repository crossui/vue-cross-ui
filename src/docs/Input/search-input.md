> 搜索框

:::demo 带有搜索按钮的输入框。

```html
<template>
  <div>
    <v-input-search
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    ></v-input-search>
    <br /><br />
    <v-input-search
      placeholder="input search text"
      @search="onSearch"
      enterButton
    ></v-input-search>
    <br /><br />
    <v-input-search placeholder="input search text" @search="onSearch" enterButton="Search" size="large">
    </v-input-search>
    <br /><br />
    <v-input-search placeholder="input search text" @search="onSearch" size="large">
      <v-button slot="enterButton">Custom</v-button>
    </v-input-search>
  </div>
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
    },
  },
}
</script>
```
:::
