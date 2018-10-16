> 自定义时间轴点

:::demo 自定义时间轴点

```html
<template>
  <v-timeline>
    <v-timeline-item>Create a services site 2015-09-01</v-timeline-item>
    <v-timeline-item>Solve initial network problems 2015-09-01</v-timeline-item>
    <v-timeline-item color="red">
      <v-icon slot="dot" type="time-circle" style="fontSize: '16px'"></v-icon>
      Technical testing 2015-09-01
    </v-timeline-item>
    <v-timeline-item>Network problems being solved 2015-09-01</v-timeline-item>
  </v-timeline>
</template>
```
:::


