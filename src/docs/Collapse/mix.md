> 面板嵌套

:::demo 嵌套折叠面板。

```html
<template>
  <div>
    <v-collapse @change="changeActivekey">
      <v-collapse-panel header="This is panel header 1" key="1">
        <v-collapse defaultActiveKey="4">
          <v-collapse-panel header="This is panel nest panel" key="4">
            <p>{{text}}</p>
          </v-collapse-panel>
        </v-collapse>
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
    methods: {
      changeActivekey (key) {
        console.log(key)
      },
    },
  }
</script>
```
:::
