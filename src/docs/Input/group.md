> 输入框组合

:::demo 输入框的组合展现。注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

```html
<template>
<div>
  <v-input-group size="large">
    <v-col :span="5">
      <v-input defaultValue="0571"></v-input>
    </v-col>
    <v-col :span="8">
      <v-input defaultValue="26888888"></v-input>
    </v-col>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-input style="width: 20%" defaultValue="0571"></v-input>
    <v-input style="width: 30%" defaultValue="26888888"></v-input>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select defaultValue="Zhejiang">
      <v-select-option value="Zhejiang">Zhejiang</v-select-option>
      <v-select-option value="Jiangsu">Jiangsu</v-select-option>
    </v-select>
    <v-input style="width: 50%" defaultValue="Xihu District, Hangzhou"></v-input>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select defaultValue="Option1">
      <v-select-option value="Option1">Option1</v-select-option>
      <v-select-option value="Option2">Option2</v-select-option>
    </v-select>
    <v-input style="width: 50%" defaultValue="input content"></v-input>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-input style="width: 50%" defaultValue="input content"></v-input>
    <v-date-picker></v-date-picker>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select defaultValue="Option1-1">
      <v-select-option value="Option1-1">Option1-1</v-select-option>
      <v-select-option value="Option1-2">Option1-2</v-select-option>
    </v-select>
    <v-select defaultValue="Option2-2">
      <v-select-option value="Option2-1">Option2-1</v-select-option>
      <v-select-option value="Option2-2">Option2-2</v-select-option>
    </v-select>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select defaultValue="1">
      <v-select-option value="1">Between</v-select-option>
      <v-select-option value="2">Except</v-select-option>
    </v-select>
    <v-input style=" width: 100px; text-align: center" placeholder="Minimum"></v-input>
    <v-input style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff" placeholder="~" disabled></v-input>
    <v-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum"></v-input>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select defaultValue="Sign Up">
      <v-select-option value="Sign Up">Sign Up</v-select-option>
      <v-select-option value="Sign In">Sign In</v-select-option>
    </v-select>
    <v-auto-complete
      :dataSource="dataSource"
      style="width: 200px"
      @change="handleChange"
      placeholder="Email"
    ></v-auto-complete>
  </v-input-group>
  <br />
  <br />
  <v-input-group compact>
    <v-select style="width: 30%" defaultValue="Home">
      <v-select-option value="Home">Home</v-select-option>
      <v-select-option value="Company">Company</v-select-option>
    </v-select>
    <v-cascader style="width: 70%" :options="options" placeholder="Select Address"></v-cascader>
  </v-input-group>
</div>
</template>
<script>
const options = [{
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
}];
export default {
  data() {
    return {
      options,
      dataSource: [],
    }
  },
  methods: {
    handleChange(value) {
      this.dataSource = !value || value.indexOf('@') >= 0 ? [] : [
        `${value}@gmail.com`,
        `${value}@163.com`,
        `${value}@qq.com`,
      ];
    }
  }
}
</script>
```
:::
