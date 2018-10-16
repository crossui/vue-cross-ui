> 动态

:::demo 展示动态变化的效果。

```html
<template>
  <div class="components-badge-demo">
    <div>
      <v-badge :count="count">
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-button-group>
        <v-button @click="decline">
          <v-icon type="minus"></v-icon>
        </v-button>
        <v-button @click="increase">
          <v-icon type="plus"></v-icon>
        </v-button>
      </v-button-group>
    </div>
    <div style="margin-top: 10px">
      <v-badge :dot="show">
        <a href="#" class="head-example"></a>
      </v-badge>
      <v-switch v-model="show"></v-switch>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      count: 5,
      show: true,
    }
  },
  methods: {
    decline () {
      let count = this.count - 1
      if (count < 0) {
        count = 0
      }
      this.count = count
    },
    increase () {
      this.count++
    },
  }
}
</script>
```
:::
