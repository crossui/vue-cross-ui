> 自定义日期范围选择

:::demo 当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。> * 通过设置 `disabledDate` 方法，来约束开始和结束日期。> * 通过 `open` `onOpenChange` 来优化交互。

```html
<template>
  <div>
    <v-date-picker
      :disabledDate="disabledStartDate"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      v-model="startValue"
      placeholder="Start"
      @openChange="handleStartOpenChange"
    ></v-date-picker>
    <v-date-picker
      :disabledDate="disabledEndDate"
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="End"
      v-model="endValue"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    ></v-date-picker>
  </div>
</template>
<script>
export default {
  data () {
    return {
      startValue: null,
      endValue: null,
      endOpen: false,
    }
  },
  watch: {
    startValue(val) {
      console.log('startValue', val)
    },
    endValue(val) {
      console.log('endValue', val)
    }
  },
  methods: {
    disabledStartDate (startValue) {
      const endValue = this.endValue;
      if (!startValue || !endValue) {
        return false;
      }
      return startValue.valueOf() > endValue.valueOf();
    },
    disabledEndDate (endValue) {
      const startValue = this.startValue;
      if (!endValue || !startValue) {
        return false;
      }
      return startValue.valueOf() >= endValue.valueOf();
    },
    handleStartOpenChange (open) {
      if (!open) {
        this.endOpen = true;
      }
    },
    handleEndOpenChange (open) {
      this.endOpen = open;
    },
  },
}
</script>
```
:::