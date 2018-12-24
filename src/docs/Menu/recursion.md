> 单文件递归菜单

:::demo 使用单文件方式递归生成菜单。因组件内部会动态更改`v-sub-menu`的属性，如果拆分成单文件，无法将属性挂载到`v-sub-menu`上，你需要自行声明属性并挂载。为了实现方便，避免了属性的声明，本示例将其声明为函数式组件，并将所有属性挂载到`v-sub-menu`上。

```html
<template>
  <div style="width: 256px">
    <v-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <v-icon :type="collapsed ? 'indent' : 'outdent'" />
    </v-button>
    <v-menu
      :defaultSelectedKeys="['2.1.1']"
      :openKeys="['2','2.1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in list">
        <v-menu-item v-if="!item.children" :key="item.key">
          <v-icon type="flag-fill"></v-icon>
          <span>{{item.title}}</span>
        </v-menu-item>
        <sub-menu v-else :menuInfo="item" :key="item.key"/>
      </template>
    </v-menu>
  </div>
</template>

<script>
import SubMenu from './SubMenu'
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data () {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1',
        }, {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                { key: '2.1.1',
                  title: 'Option 2.1.1',
                },
              ],
            },
          ],
        }],
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