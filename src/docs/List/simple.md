> 三种大小

:::demo 列表拥有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。

```html
<template>
<div>
  <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
  <v-list
    bordered
    :dataSource="data"
  >
    <v-list-item slot="renderItem" slot-scope="item, index">{{item}}</v-list-item>
    <div slot="header">Header</div>
    <div slot="footer">Footer</div>
  </v-list>
  <h3 :style="{ margin: '16px 0' }">Small Size</h3>
  <v-list
    size="small"
    bordered
    :dataSource="data"
  >
    <v-list-item slot="renderItem" slot-scope="item, index">{{item}}</v-list-item>
    <div slot="header">Header</div>
    <div slot="footer">Footer</div>
  </v-list>
  <h3 :style="{ margin: '16px 0' }">Large Size</h3>
  <v-list
    size="large"
    bordered
    :dataSource="data"
  >
    <v-list-item slot="renderItem" slot-scope="item, index">{{item}}</v-list-item>
    <div slot="header">Header</div>
    <div slot="footer">Footer</div>
  </v-list>
</div>
</template>
<script>
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

export default {
  data () {
    return {
      data,
    }
  },
}
</script>
```
:::
