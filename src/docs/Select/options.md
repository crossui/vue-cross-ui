> 从数据直接生成

:::demo 使用 `options` 把 JSON 数据直接生成选择列表。

```html
<template>
  <v-select defaultValue="beijing" style="width: 120px" @change="handleChange" :options="options"></v-select>
</template>
<script>
export default {
  data(){
    return {
      options: [
        {
          label: '北京',
          value: 'beijing',
          title: '北京 010',
          key: '010',
        }, {
          label: '上海',
          value: 'shanghai',
          key: '021',
        }, {
          label: '杭州',
          value: 'hangzhou',
          key: '0571',
          disabled: true,
        }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
}
</script>
```
:::
