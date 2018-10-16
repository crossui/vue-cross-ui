> 固定表头

:::demo 方便一页内展示大量数据。需要指定 column 的 `width` 属性，否则列头和内容可能不对齐。

```html
<template>
  <v-table :columns="columns" :dataSource="data" :pagination="{ pageSize: 50 }" :scroll="{ y: 240 }"></v-table>
</template>
<script>
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

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
