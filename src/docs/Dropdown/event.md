> 触发事件

:::demo 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

```html
<template>
  <v-dropdown>
    <a class="vcu-dropdown-link" href="#">
      Hover me, Click menu item <v-icon type="down"></v-icon>
    </a>
    <v-menu slot="overlay" @click="onClick">
      <v-menu-item key="1">1st menu item</v-menu-item>
      <v-menu-item key="2">2nd menu item</v-menu-item>
      <v-menu-item key="3">3rd menu item</v-menu-item>
    </v-menu>
  </v-dropdown>
</template>

<script>
export default {
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    }
  }
}
</script>
```
:::
