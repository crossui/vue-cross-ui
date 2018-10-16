> 额外的页脚

:::demo 在浮层中加入额外的页脚，以满足某些定制信息的需求。

```html
<template>
  <div>
    <v-date-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </v-date-picker>
    <br/>
    <br/>
    <v-date-picker showTime >
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </v-date-picker>
    <br/>
    <br/>
    <v-range-picker >
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </v-range-picker>
    <br/>
    <br/>
    <v-range-picker showTime >
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </v-range-picker>
    <br/>
    <br/>
    <v-month-picker placeholder="Select month" >
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </v-month-picker>
  </div>
</template>
```
:::
