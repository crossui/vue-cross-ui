> 隐藏箭头

:::demo 你可以通过 `:showArrow="false"` 隐藏 `v-collapse-panel` 组件的箭头图标。

```html
<template>
  <div>
    <v-collapse defaultActiveKey="1" @change="changeActivekey">
      <v-collapse-panel header="This is panel header with arrow icon" key="1">
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header with no arrow icon" key="2" :showArrow="false">
        <p>{{text}}</p>
      </v-collapse-panel>
    </v-collapse>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      }
    },
    methods: {
      changeActivekey (key) {
        console.log(key)
      },
    },
  }
</script>
```
:::
