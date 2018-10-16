> 选择即改变

:::demo 这种交互允许只选中父级选项。

```html
<template>
  <v-cascader :options="options" @change="onChange" changeOnSelect></v-cascader>
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