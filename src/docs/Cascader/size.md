> 大小

:::demo 不同大小的级联选择器。

```html
<template>
  <div>
    <v-cascader size="large" :options="options" @change="onChange"></v-cascader>
    <br /><br />
    <v-cascader :options="options" @change="onChange"></v-cascader>
    <br /><br />
    <v-cascader size="small" :options="options" @change="onChange"></v-cascader>
  </div>
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
