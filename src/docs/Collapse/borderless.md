> 简洁风格

:::demo 一套没有边框的简洁样式。

```html
<template>
  <div>
    <v-collapse defaultActiveKey="1" :bordered="false">
      <v-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 2" key="2" :disabled='false'>
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 3" key="3">
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
  }
</script>
```
:::