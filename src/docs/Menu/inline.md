> 内嵌菜单

:::demo 垂直菜单，子菜单内嵌在菜单区域。

```html
<template>
<div>
  <v-menu
    @click="handleClick"
    style="width: 256px"
    :defaultSelectedKeys="['1']"
    :openKeys.sync="openKeys"
    mode="inline"
  >
    <v-sub-menu key="sub1" @titleClick="titleClick">
      <span slot="title"><v-icon type="mail"></v-icon><span>Navigation One</span></span>
      <v-menu-item-group key="g1">
        <template slot="title"><v-icon type="qq"></v-icon><span>Item 1</span></template>
        <v-menu-item key="1">Option 1</v-menu-item>
        <v-menu-item key="2">Option 2</v-menu-item>
      </v-menu-item-group>
      <v-menu-item-group key="g2" title="Item 2">
        <v-menu-item key="3">Option 3</v-menu-item>
        <v-menu-item key="4">Option 4</v-menu-item>
      </v-menu-item-group>
    </v-sub-menu>
    <v-sub-menu key="sub2" @titleClick="titleClick">
      <span slot="title"><v-icon type="appstore"></v-icon><span>Navigation Two</span></span>
      <v-menu-item key="5">Option 5</v-menu-item>
      <v-menu-item key="6">Option 6</v-menu-item>
      <v-sub-menu key="sub3" title="Submenu">
        <v-menu-item key="7">Option 7</v-menu-item>
        <v-menu-item key="8">Option 8</v-menu-item>
      </v-sub-menu>
    </v-sub-menu>
    <v-sub-menu key="sub4">
      <span slot="title"><v-icon type="setting"></v-icon><span>Navigation Three</span></span>
      <v-menu-item key="9">Option 9</v-menu-item>
      <v-menu-item key="10">Option 10</v-menu-item>
      <v-menu-item key="11">Option 11</v-menu-item>
      <v-menu-item key="12">Option 12</v-menu-item>
    </v-sub-menu>
  </v-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
    }
  },
  methods: {
    handleClick (e) {
      console.log('click', e)
    },
    titleClick (e) {
      console.log('titleClick', e)
    },
  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val)
    },
  },
}

</script>
```
:::
