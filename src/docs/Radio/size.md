> 单选组合（大小）

:::demo 一组互斥的 Radio 配合使用。

```html
<template>
  <div>
    <div>
      <v-radio-group defaultValue="a" size="large">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b">Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <v-radio-group defaultValue="a">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b">Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <v-radio-group defaultValue="a" size="small">
        <v-radio-button value="a">Hangzhou</v-radio-button>
        <v-radio-button value="b">Shanghai</v-radio-button>
        <v-radio-button value="c">Beijing</v-radio-button>
        <v-radio-button value="d">Chengdu</v-radio-button>
      </v-radio-group>
    </div>
  </div>
</template>
```
:::