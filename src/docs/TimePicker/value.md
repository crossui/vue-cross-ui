> 受控组件

:::demo value 和 onChange 需要配合使用。也可以直接使用v-model。

```html
<template>
  <div>
    <p>use value and @change</p>
    <v-time-picker @change="onChange" :value="value"></v-time-picker>
    <br/>
    <br/>
    <p>v-model</p>
    <v-time-picker v-model="value"></v-time-picker>
    <br/>
    <br/>
    <p>Do not change</p>
    <v-time-picker :value="value2"></v-time-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data(){
    return {
      value: null,
      value2: moment(),
    }
  },
  methods: {
    onChange(time,){
      console.log(time);
      this.value = time;
    }
  },
}
</script>
```
:::
