> 按钮样式

:::demo 按钮样式的单选组合。

```html
<template>
  <div>
    <div>
      <v-radio-group @change="onChange" defaultValue="a">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b">Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <v-radio-group @change="onChange" defaultValue="a">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b" disabled>Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <v-radio-group disabled @change="onChange" defaultValue="a">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b">Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.value}`)
    },
  },
}
</script>
```
:::