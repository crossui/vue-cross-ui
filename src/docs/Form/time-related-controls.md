> 时间类控件

:::demo 时间类组件的 `value` 为 `moment` 类型，所以在提交前需要预处理。

```html
<template>
  <div>
    <v-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='DatePicker' fieldDecoratorId="date-picker" :fieldDecoratorOptions="formrules.config">
        <v-date-picker></v-date-picker>
      </v-form-item>
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='DatePicker[showTime]' fieldDecoratorId="date-time-picker" :fieldDecoratorOptions="formrules.config">
        <v-date-picker showTime format='YYYY-MM-DD HH:mm:ss'></v-date-picker>
      </v-form-item>
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='MonthPicker' fieldDecoratorId="month-picker" :fieldDecoratorOptions="formrules.config">
        <v-monthPicker></v-monthPicker>
      </v-form-item>
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='RangePicker' fieldDecoratorId="range-picker" :fieldDecoratorOptions="formrules.rangeConfig">
        <v-range-picker></v-range-picker>
      </v-form-item>
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='RangePicker[showTime]' fieldDecoratorId="range-time-picker" :fieldDecoratorOptions="formrules.rangeConfig">
        <v-range-picker showTime format='YYYY-MM-DD HH:mm:ss'></v-range-picker>
      </v-form-item>
      <v-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='TimePicker' fieldDecoratorId="time-picker" :fieldDecoratorOptions="formrules.config">
        <v-time-picker></v-time-picker>
      </v-form-item>
      <v-form-item :wrapperCol="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }">
        <v-button type='primary' htmlType='submit'>Submit</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      formrules: {
        config: {
          rules: [
            {
              type: 'object',
              required: true,
              message: 'Please select time!'
            }
          ]
        },
        rangeConfig: {
          rules: [
            {
              type: 'array',
              required: true,
              message: 'Please select time!'
            }
          ],
        }
      },
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return
        }
        // Should format date value before submit.
        const rangeValue = fieldsValue['range-picker']
        const rangeTimeValue = fieldsValue['range-time-picker']
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
          'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
          'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
          ],
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        }
        console.log('Received values of form: ', values)
      })
    }
  },
}
</script>
```
:::


