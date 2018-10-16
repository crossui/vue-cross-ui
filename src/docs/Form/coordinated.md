> 表单联动

:::demo 使用 `setFieldsValue` 来动态设置其他控件的值。

```html
<template>
  <v-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}">
    <v-form-item
      label='Note'
      :labelCol="{ span: 5 }"
      :wrapperCol="{ span: 12 }"
      fieldDecoratorId="note"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your note!' }]}"
    >
      <v-input></v-input>
    </v-form-item>
    <v-form-item
      label='Gender'
      :labelCol="{ span: 5 }"
      :wrapperCol="{ span: 12 }"
      fieldDecoratorId="gender"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please select your gender!' }]}"
    >
      <v-select
        placeholder='Select a option and change input text above'
        @change="this.handleSelectChange"
      >
        <v-select-option value='male'>male</v-select-option>
        <v-select-option value='female'>female</v-select-option>
      </v-select>
    </v-form-item>
    <v-form-item
      :wrapperCol="{ span: 12, offset: 5 }"
    >
      <v-button type='primary' htmlType='submit'>
        Submit
      </v-button>
    </v-form-item>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      })
    },
  },
}
</script>
```
:::




