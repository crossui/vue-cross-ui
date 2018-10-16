> 自定义校验

:::demo 我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不需要使用 `Form.create` 和 `getFieldDecorator`，自己定义校验的时机和内容。1. `validateStatus`: 校验状态，可选 'success', 'warning', 'error', 'validating'。2. `hasFeedback`：用于给输入框添加反馈图标。3. `help`：设置校验文案。

```html
<template>
  <v-form>
    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Fail'
      validateStatus='error'
      help='Should be combination of numbers & alphabets'
    >
      <v-input placeholder='unavailable choice'></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Warning'
      validateStatus='warning'
    >
      <v-input placeholder='Warning'></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Validating'
      hasFeedback
      validateStatus='validating'
      help='The information is being validated...'
    >
      <v-input placeholder="I'm the content is being validated"></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Success'
      hasFeedback
      validateStatus='success'
    >
      <v-input placeholder="I'm the content"></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Warning'
      hasFeedback
      validateStatus='warning'
    >
      <v-input placeholder='Warning'></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Fail'
      hasFeedback
      validateStatus='error'
      help='Should be combination of numbers & alphabets'
    >
      <v-input placeholder='unavailable choice'></v-input>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Success'
      hasFeedback
      validateStatus='success'
    >
      <v-date-picker style="width: 100%"></v-date-picker>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Warning'
      hasFeedback
      validateStatus='warning'
    >
      <v-time-picker style="width: 100%"></v-time-picker>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Error'
      hasFeedback
      validateStatus='error'
    >
      <v-select defaultValue='1'>
        <v-select-option value='1'>Option 1</v-select-option>
        <v-select-option value='2'>Option 2</v-select-option>
        <v-select-option value='3'>Option 3</v-select-option>
      </v-select>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Validating'
      hasFeedback
      validateStatus='validating'
      help='The information is being validated...'
    >
      <v-cascader :defaultValue="['1']" :options="[]"></v-cascader>
    </v-form-item>

    <v-form-item
      label='inline'
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <v-col :span="11">
        <v-form-item validateStatus='error' help='Please select the correct date'>
          <v-date-picker style="width: 100%"></v-date-picker>
        </v-form-item>
      </v-col>
      <v-col :span="2">
        <span :style="{ display: 'inline-block', width: '100%', textAlign: 'center' }">
          -
        </span>
      </v-col>
      <v-col :span="11">
        <v-form-item>
          <v-date-picker style="width: 100%"></v-date-picker>
        </v-form-item>
      </v-col>
    </v-form-item>

    <v-form-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      label='Success'
      hasFeedback
      validateStatus='success'
    >
      <v-input-number style="width: 100%"></v-input-number>
    </v-form-item>
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    }
  },
}
</script>
```
:::






