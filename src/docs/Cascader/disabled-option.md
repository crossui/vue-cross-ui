> 禁用选项

:::demo 通过指定 options 里的 `disabled` 字段。

```html
<template>
  <v-cascader :options="options" @change="onChange"></v-cascader>
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
        disabled: true,
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