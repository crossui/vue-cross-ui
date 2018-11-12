> 自定义范围选择

:::demo 通过`disabledHours` `disabledMinutes` `disabledSeconds`来设置禁止选择`时` `分` `秒`。

```html
<template>
  <div>
    <v-time-picker v-model="star" :disabledHours="disabledHoursStar" :disabledMinutes="disabledMinutesStar" :disabledSeconds="disabledSecondsStar" placeholder="开始时间"></v-time-picker>
    <span>~</span>
    <v-time-picker v-model="end" :disabledHours="disabledHoursEnd" :disabledMinutes="disabledMinutesEnd"  :disabledSeconds="disabledSecondsEnd" placeholder="结束时间"></v-time-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      star: null,
      end: null,
    }
  },
  methods: {
    moment,
    disabledHoursStar() {
      let hours = [];
      if (this.end != null) {
        let h = this.end.format('HH:mm:ss').split(":")[0]
        for (let i = h; i < 24; i++) {
          hours.push(i);
        }
      }
      return hours;
    },
    disabledMinutesStar(selectedHour) {
      let minutes = [];
      if (this.end != null) {
        let end = this.end.format('HH:mm:ss').split(":")
        if (selectedHour != null) {
          if (selectedHour < end[0]) {
            end[1] = 60
          }
        }
        for (let i = end[1]; i < 60; i++) {
          minutes.push(i);
        }
      }
      return minutes;
    },
    disabledSecondsStar(selectedHour, selectedMinute){
      let seconds = [];
      if(this.end != null){
        let end = this.end.format('HH:mm:ss').split(":")
        let _end = 0
        if(selectedHour != null && selectedMinute != null){
          _end = selectedHour == end[0] && selectedMinute == end[1] ? end[2] : 60
        }
        for (let i = _end; i < 60; i++) {
          seconds.push(i);
        }
      }
      return seconds;
    },
    disabledHoursEnd() {
      let hours = [];
      if (this.star != null) {
        let h = this.star.format('HH:mm:ss').split(":")[0]
        for (let i = 0; i < h; i++) {
          hours.push(i);
        }
      }
      return hours;
    },
    disabledMinutesEnd(selectedHour) {
      let minutes = [];
      if (this.star != null) {
        let star = this.star.format('HH:mm:ss').split(":")
        if (selectedHour != null) {
          if (selectedHour > star[0]) {
            star[1] = 0
          }
        }
        for (let i = 0; i < star[1]; i++) {
          minutes.push(i);
        }
      }
      return minutes;
    },
    disabledSecondsEnd(selectedHour, selectedMinute){
      let seconds = [];
      if(this.star != null){
        let star = this.star.format('HH:mm:ss').split(":")
        let _star = 0
        if(selectedHour != null && selectedMinute != null){
          _star = selectedHour == star[0] && selectedMinute == star[1] ?  star[2] : 0
        }
        for (let i = 0; i < _star; i++) {
          seconds.push(i);
        }
      }
      return seconds;
    }
  },
}
</script>
```
:::
