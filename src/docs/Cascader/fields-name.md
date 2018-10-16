> 自定义字段名

:::demo 自定义字段名。

```html
<template>
  <v-cascader :fieldNames="{ label: 'name', value: 'code', children: 'items' }" :options="options" @change="onChange" placeholder="Please select"></v-cascader>
</template>
<script>
const options = [{
  code: 'zhejiang',
  name: 'Zhejiang',
  items: [{
    code: 'hangzhou',
    name: 'Hangzhou',
    items: [{
      code: 'xihu',
      name: 'West Lake',
    }],
  }],
}, {
  code: 'jiangsu',
  name: 'Jiangsu',
  items: [{
    code: 'nanjing',
    name: 'Nanjing',
    items: [{
      code: 'zhonghuamen',
      name: 'Zhong Hua Men',
    }],
  }],
}]
export default {
  data() {
    return {
      options,
    }
  },
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
}
</script>
```
:::