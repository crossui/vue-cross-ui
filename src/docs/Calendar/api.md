
## API

**注意：**Calendar 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

````handlebars
// 默认语言为 en-US，所以如果需要使用其他语言，推荐在入口文件全局设置 locale
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

<v-calendar
  @panelChange="onPanelChange"
  @select="onSelect"
>
  <template slot="dateCellRender" slot-scope="value"></template>
  <template slot="monthCellRender" slot-scope="value"></template
</v-calendar>
````

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dateCellRender | 作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格, | function(date: moment) | 无 |
| dateFullCellRender | 作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格 | function(date: moment) | 无 |
| defaultValue | 默认展示的日期 | [moment](http://momentjs.com/) | 默认日期 |
| disabledDate | 不可选择的日期 | (currentDate: moment) => boolean | 无 |
| fullscreen | 是否全屏显示 | boolean | true |
| locale | 国际化配置 | object | 见底部 |
| mode | 初始模式，`month/year` | string | month |
| monthCellRender | 作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格 | function(date: moment) | 无 |
| monthFullCellRender | 作用域插槽，自定义渲染月单元格，返回内容覆盖单元格 | function(date: moment) | 无 |
| validRange | 设置可以显示的日期 | \[[moment](http://momentjs.com/), [moment](http://momentjs.com/)] | 无 |
| value(v-model) | 展示日期 | [moment](http://momentjs.com/) | 当前日期 |

### 事件
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| panelChange | 日期面板变化回调 | function(date: moment, mode: string) | 无 |
| select | 点击选择日期回调 | function(date: moment） | 无 |
| change | 日期变化时的回调, 面板变化有可能导致日期变化| function(date: moment） | 无 |

### locale 默认配置：
````json
{
  "lang": {
    "placeholder": "Select date",
    "rangePlaceholder": [
      "Start date",
      "End date"
    ],
    "today": "Today",
    "now": "Now",
    "backToToday": "Back to today",
    "ok": "Ok",
    "clear": "Clear",
    "month": "Month",
    "year": "Year",
    "timeSelect": "Select time",
    "dateSelect": "Select date",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "YYYY",
    "dateFormat": "M/D/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "M/D/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  }
}
````
