> 支持更多内容配置

:::demo 一种支持封面、头像、标题和描述信息的卡片。

```html
<template>
  <v-card hoverable style="width: 300px">
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      slot="cover"
    />
    <template class="ant-card-actions" slot="actions">
      <v-icon type="setting"></v-icon>
      <v-icon type="edit"></v-icon>
      <v-icon type="ellipsis"></v-icon>
    </template>
    <v-card-meta
      title="Card title"
      description="This is the description">
      <v-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ></v-avatar>
    </v-card-meta>
  </v-card>
</template>
```
:::

