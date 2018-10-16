> 默认值

:::demo 默认值通过数组的方式指定。

```html
<template>
  <v-cascader :options="options" @change="onChange" :defaultValue="['zhejiang', 'hangzhou', 'xihu']"></v-cascader>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake',
          }],
        }],
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          }],
        }],
      }]
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