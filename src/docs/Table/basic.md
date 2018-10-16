> 基本

:::demo 简单的表格，最后一列是各种操作。

```html
<template>
  <v-table :columns="columns" :dataSource="data">
    <a slot="name" slot-scope="text" href="#">{{text}}</a>
    <span slot="customTitle"><v-icon type="smile"></v-icon> Name</span>
    <span slot="action" slot-scope="text, record">
      <a href="#">Action 一 {{record.name}}</a>
      <v-divider type="vertical"></v-divider>
      <a href="#">Delete</a>
      <v-divider type="vertical"></v-divider>
      <a href="#" class="vcu-dropdown-link">
        More actions <v-icon type="down"></v-icon>
      </a>
    </span>
  </v-table>
</template>
<script>
const columns = [{
  dataIndex: 'name',
  key: 'name',
  slots: { title: 'customTitle' },
  scopedSlots: { customRender: 'name' },
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  scopedSlots: { customRender: 'action' },
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default {
  data() {
    return {
      data,
      columns,
    }
  }
}
</script>
```
:::