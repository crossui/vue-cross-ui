> 前缀和后缀

:::demo 在输入框上添加前缀或后缀图标。

```html
<template>
  <div class="components-input-demo-presuffix">
    <v-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
      <v-icon slot="prefix" type="user"></v-icon>
      <v-icon v-if="userName" slot="suffix" type="close-circle" @click="emitEmpty"></v-icon>
    </v-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
    }
  },
  methods: {
    emitEmpty () {
      this.$refs.userNameInput.focus()
      this.userName = ''
    },
  },
}
</script>
<style scoped>
.components-input-demo-presuffix .vcuicon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}
.components-input-demo-presuffix .vcuicon-close-circle:hover {
  color: #999;
}
.components-input-demo-presuffix .vcuicon-close-circle:active {
  color: #666;
}
</style>
```
:::