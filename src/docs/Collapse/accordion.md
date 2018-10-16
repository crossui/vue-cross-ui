> 手风琴

:::demo 手风琴，每次只打开一个tab。默认打开第一个。

```html
<template>
  <div>
    <v-collapse accordion>
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
