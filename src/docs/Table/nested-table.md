> 嵌套子表格

:::demo 展示每行数据更详细的信息。

```html
<template>
  <v-table :columns="columns" :dataSource="data" class="components-table-demo-nested">
    <a slot="operation" slot-scope="text" href="#">Publish</a>
    <v-table
      slot="expandedRowRender"
      slot-scope="text"
      :columns="innerColumns"
      :dataSource="innerData"
      :pagination="false"
    >
      <span slot="status" slot-scope="text">
        <v-badge status="success"></v-badge>Finished
      </span>
      <span slot="operation" slot-scope="text" class="table-operation">
        <a href="#">Pause</a>
        <a href="#">Stop</a>
        <v-dropdown>
          <v-menu slot="overlay">
            <v-menu-item>
              Action 1
            </v-menu-item>
            <v-menu-item>
              Action 2
            </v-menu-item>
          </v-menu>
          <a href="#">
            More <v-icon type="down"></v-icon>
          </a>
        </v-dropdown>
      </span>
    </v-table>
  </v-table>
</template>
<script>
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation', scopedSlots: { customRender: 'operation' } },
];

const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: 'Screem',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state', scopedSlots: { customRender: 'status' } },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
  });
}

export default {
  data() {
    return {
      data,
      columns,
      innerColumns,
      innerData,
    }
  }
}
</script>
<style>
.components-table-demo-nested .vcu-table-expanded-row > td:last-child {
  padding: 0 48px 0 8px;
}

.components-table-demo-nested .vcu-table-expanded-row > td:last-child .vcu-table-thead th {
  border-bottom: 1px solid #e9e9e9;
}

.components-table-demo-nested .vcu-table-expanded-row > td:last-child .vcu-table-thead th:first-child {
  padding-left: 0;
}

.components-table-demo-nested .vcu-table-expanded-row > td:last-child .vcu-table-row td:first-child {
  padding-left: 0;
}

.components-table-demo-nested .vcu-table-expanded-row .vcu-table-row:last-child td {
  border: none;
}

.components-table-demo-nested .vcu-table-expanded-row .vcu-table-thead > tr > th {
  background: none;
}

.components-table-demo-nested .table-operation a:not(:last-child) {
  margin-right: 24px;
}

.components-table-demo-nested .vcu-table-expanded-row:hover > td {
  background: #fbfbfb;
}
</style>
```
:::
