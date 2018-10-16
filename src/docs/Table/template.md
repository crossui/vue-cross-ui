> template 风格的 API

:::demo 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。

```html
<template>
  <v-table :dataSource="data">
    <v-table-column-group>
      <span slot="title" style="color: #1890ff">Name</span>
      <v-table-column
        dataIndex="firstName"
        key="firstName"
      >
        <span slot="title" style="color: #1890ff">First Name</span>
      </v-table-column>
      <v-table-column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    </v-table-column-group>
    <v-table-column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <v-table-column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <v-table-column
      title="Action"
      key="action"
    >
      <template slot-scope="text, record">
        <span>
          <a href="#">Action 一 {{record.firstName}}</a>
          <v-divider type="vertical" />
          <a href="#">Delete</a>
          <v-divider type="vertical" />
          <a href="#" class="vcu-dropdown-link">
            More actions <v-icon type="down" />
          </a>
        </span>
      </template>
    </v-table-column>
  </v-table>
</template>
<script>

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

export default {
  data() {
    return {
      data,
    }
  }
}
</script>
```
:::
