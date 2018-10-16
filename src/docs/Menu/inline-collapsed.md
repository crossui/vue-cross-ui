> 缩起内嵌菜单

:::demo 内嵌菜单可以被缩起/展开。

```html
<template>
  <div style="width: 256px">
    <v-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <v-icon :type="collapsed ? 'indent' : 'outdent'"></v-icon>
    </v-button>
    <v-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <v-menu-item key="1">
        <v-icon type="fund"></v-icon>
        <span>Option 1</span>
      </v-menu-item>
      <v-menu-item key="2">
        <v-icon type="desktop"></v-icon>
        <span>Option 2</span>
      </v-menu-item>
      <v-menu-item key="3">
        <v-icon type="sound"></v-icon>
        <span>Option 3</span>
      </v-menu-item>
      <v-sub-menu key="sub1">
        <span slot="title"><v-icon type="mail"></v-icon><span>Navigation One</span></span>
        <v-menu-item key="5">Option 5</v-menu-item>
        <v-menu-item key="6">Option 6</v-menu-item>
        <v-menu-item key="7">Option 7</v-menu-item>
        <v-menu-item key="8">Option 8</v-menu-item>
      </v-sub-menu>
      <v-sub-menu key="sub2">
        <span slot="title"><v-icon type="appstore"></v-icon><span>Navigation Two</span></span>
        <v-menu-item key="9">Option 9</v-menu-item>
        <v-menu-item key="10">Option 10</v-menu-item>
        <v-sub-menu key="sub3" title="Submenu">
          <v-menu-item key="11">Option 11</v-menu-item>
          <v-menu-item key="12">Option 12</v-menu-item>
        </v-sub-menu>
      </v-sub-menu>
    </v-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
```
:::
