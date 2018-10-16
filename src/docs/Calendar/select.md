> 选择功能

:::demo 一个通用的日历面板，支持年/月切换。

```html
<template>
  <div>
    <v-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`"></v-alert>
    <div>
      <v-calendar :value="value" @select="onSelect" @panelChange="onPanelChange"></v-calendar>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
    }
  },
  methods: {
    onSelect(value) {
      this.value = value
      this.selectedValue = value
    },
    onPanelChange (value) {
      this.value = value
    }
  }
}
</script>
```
:::
