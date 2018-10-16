> 最后一个

:::demo 当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点（用于时间正序排列）。当 pending 值为 false ，可用定制元件替换默认时间图点。

```html
<template>
  <v-timeline pending="Recording...">
    <v-timeline-item>Create a services site 2015-09-01</v-timeline-item>
    <v-timeline-item>Solve initial network problems 2015-09-01</v-timeline-item>
    <v-timeline-item>Technical testing 2015-09-01</v-timeline-item>
  </v-timeline>
</template>
```
:::



