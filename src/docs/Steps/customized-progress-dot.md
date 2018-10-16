> 自定义点状步骤条

:::demo 为点状步骤条增加自定义展示。

```html
<template>
<div>
  <v-steps :current="1">
    <v-popover slot="progressDot" slot-scope="{index, status, prefixCls}">
      <template slot="content">
        <span>step {{index}} status: {{status}}</span>
      </template>
      <span :class="`${prefixCls}-icon-dot`"></span>
    </v-popover>
    <v-step title="Finished" description="You can hover on the dot."></v-step>
    <v-step title="In Progress" description="You can hover on the dot."></v-step>
    <v-step title="Waiting" description="You can hover on the dot."></v-step>
    <v-step title="Waiting" description="You can hover on the dot."></v-step>
  </v-steps>
</div>
</template>
```
:::
