> 多个按钮组合

:::demo 按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 `Dropdown.Button` 中组合使用。

```html
<template>
  <div>
    <v-button type="primary">Primary</v-button>
    <v-button>secondary</v-button>
    <v-dropdown>
      <v-menu slot="overlay" v-on:click="handleMenuClick">
        <v-menu-item key="1">1st item</v-menu-item>
        <v-menu-item key="2">2nd item</v-menu-item>
        <v-menu-item key="3">3rd item</v-menu-item>
      </v-menu>
      <v-button>
        Actions <v-icon type="down"></v-icon>
      </v-button>
    </v-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    handleMenuClick(e) {
      console.log('click', e);
    }
  }
}
</script>
```

:::
