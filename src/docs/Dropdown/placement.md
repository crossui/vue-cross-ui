> 弹出位置

:::demo 支持 6 个弹出位置。

```html
<template>
  <div id="components-dropdown-demo-placement">
    <template v-for="(placement, index) in placements">
      <v-dropdown :placement="placement">
        <v-button>{{placement}}</v-button>
        <v-menu slot="overlay">
          <v-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
          </v-menu-item>
          <v-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
          </v-menu-item>
          <v-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
          </v-menu-item>
        </v-menu>
      </v-dropdown>
      <br v-if="index === 2"/>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return {
      placements: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
    }
  },
}
</script>
<style>
#components-dropdown-demo-placement .vcu-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
:::
