> 自定义面板

:::demo 自定义各个面板的背景色、圆角和边距。

```html
<template>
  <div>
    <v-collapse defaultActiveKey="1" :bordered="false">
      <v-collapse-panel key="1" :style="customStyle">
        <template slot="header">
          This is panel header 1<v-icon type="question-circle"></v-icon>
        </template>
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 2" key="2" :style="customStyle">
        <p>{{text}}</p>
      </v-collapse-panel>
      <v-collapse-panel header="This is panel header 3" key="3" :style="customStyle">
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
        customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden'
      }
    },
  }
</script>
```
:::