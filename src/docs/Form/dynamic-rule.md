> 动态校验规则

:::demo 根据不同情况执行不同的校验规则。

```html
<template>
  <v-form :autoFormCreate="(form)=>{this.form = form}">
    <v-form-item
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
      label='Name'
      fieldDecoratorId="username"
      :fieldDecoratorOptions="{rules: [{ required: true, message: 'Please input your name' }]}"
    >
      <v-input placeholder='Please input your name' />
    </v-form-item>
    <v-form-item
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
      label='Nickname'
      fieldDecoratorId="nickname"
      :fieldDecoratorOptions="{rules: [{ required: checkNick, message: 'Please input your nickname' }]}"
    >
      <v-input placeholder='Please input your nickname' />
    </v-form-item>
    <v-form-item
      :labelCol="formTailLayout.labelCol"
      :wrapperCol="formTailLayout.wrapperCol"
    >
      <v-checkbox
        :checked="checkNick"
        @change="handleChange"
      >
        Nickname is required
      </v-checkbox>
    </v-form-item>
    <v-form-item
      :labelCol="formTailLayout.labelCol"
      :wrapperCol="formTailLayout.wrapperCol"
    >
      <v-button type='primary' @click="check">Check</v-button>
    </v-form-item>
  </v-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}
export default {
  data () {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
    }
  },
  methods: {
    check  () {
      this.form.validateFields(
        (err) => {
          if (!err) {
            console.info('success')
          }
        },
      )
    },
    handleChange  (e) {
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    },
  },
}
</script>
```
:::


