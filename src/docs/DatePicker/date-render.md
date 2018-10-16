> 定制日期单元格

:::demo 使用 `dateRender` 可以自定义日期单元格的内容和样式。

```html
<template>
  <div>
    <v-date-picker>
      <template slot="dateRender" slot-scope="current, today">
        <div class="vcu-calendar-date" :style="getCurrentStyle(current, today)">
          {{current.date()}}
        </div>
      </template>
    </v-date-picker>
    <v-range-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="vcu-calendar-date" :style="getCurrentStyle(current)">
          {{current.date()}}
        </div>
      </template>
    </v-range-picker>
    <v-week-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="vcu-calendar-date" :style="getCurrentStyle(current)">
          {{current.date()}}
        </div>
      </template>
    </v-week-picker>
  </div>
</template>
<script>
export default {
  methods: {
    getCurrentStyle (current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
  },
}
</script>
```
:::