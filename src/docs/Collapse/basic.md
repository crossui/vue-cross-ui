> 基本

:::demo 可以同时展开多个面板，这个例子默认展开了第一个。

```html
<template>
  <div>
    <v-collapse v-model="activeKey">
      <v-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 2" key="2" :disabled='false'>
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 3" key="3" disabled>
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
        activeKey: ['1']
      }
    },
    watch: {
      activeKey(key){
        console.log(key)
      }
    },
  }
</script>
```
:::