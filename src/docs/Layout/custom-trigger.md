> 自定义触发器

:::demo 要使用自定义触发器，可以设置 `:trigger="null"` 来隐藏默认设定。

```html
<template>
  <v-layout id="components-layout-demo-custom-trigger">
    <v-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo"></div>
      <v-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <v-menu-item key="1">
          <v-icon type="user"></v-icon>
          <span>nav 1</span>
        </v-menu-item>
        <v-menu-item key="2">
          <v-icon type="video"></v-icon>
          <span>nav 2</span>
        </v-menu-item>
        <v-menu-item key="3">
          <v-icon type="upload"></v-icon>
          <span>nav 3</span>
        </v-menu-item>
      </v-menu>
    </v-layout-sider>
    <v-layout>
      <v-layout-header style="background: #fff; padding: 0">
        <v-icon
          class="trigger"
          :type="collapsed ? 'indent' : 'outdent'"
          @click="()=> collapsed = !collapsed"
        ></v-icon>
      </v-layout-header>
      <v-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        Content
      </v-layout-content>
    </v-layout>
  </v-layout>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
    }
  },
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
```
:::
