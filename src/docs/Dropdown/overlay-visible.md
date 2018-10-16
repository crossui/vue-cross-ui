> 菜单隐藏方式

:::demo 默认是点击关闭菜单，可以关闭此功能。

```html
<template>
  <v-dropdown v-model="visible">
    <a class="vcu-dropdown-link" href="#">
      Hover me <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay" @click="handleMenuClick">
      <v-menu-item key="1">Clicking me will not close the menu.</v-menu-item>
      <v-menu-item key="2">Clicking me will not close the menu also.</v-menu-item>
      <v-menu-item key="3">Clicking me will close the menu</v-menu-item>
    </v-menu>
  </v-dropdown>
</template>

<script>
export default {
  data(){
    return {
      visible: false,
    }
  },
  methods: {
    handleMenuClick (e) {
      if (e.key === '3') {
        this.visible = false
      }
    },
  }
}
</script>
```
:::