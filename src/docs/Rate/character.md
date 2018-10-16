> 其他字符

:::demo 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

```html
<template>
  <div>
    <v-rate allowHalf>
      <v-icon slot="character" type="heart"></v-icon>
    </v-rate>
    <br />
    <br />
    <v-rate character="A" allowHalf style="fontSize: 36px"></v-rate>
    <br />
    <br />
    <v-rate character="好" allowHalf></v-rate>
  </div>
</template>
```
:::
