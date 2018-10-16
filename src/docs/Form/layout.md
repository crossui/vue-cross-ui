> 表单布局

:::demo 表单有三种布局。

```html
<template>
  <div>
    <v-form :layout="formLayout">
      <v-form-item label='Form Layout' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
        <v-radio-group defaultValue='horizontal' @change="handleFormLayoutChange">
          <v-radio-button value='horizontal'>Horizontal</v-radio-button>
          <v-radio-button value='vertical'>Vertical</v-radio-button>
          <v-radio-button value='inline'>Inline</v-radio-button>
        </v-radio-group>
      </v-form-item>
      <v-form-item label='Field A' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item label='Field B' :labelCol="formItemLayout.labelCol" :wrapperCol="formItemLayout.wrapperCol">
        <v-input placeholder='input placeholder'></v-input>
      </v-form-item>
      <v-form-item :wrapperCol="buttonItemLayout.wrapperCol">
        <v-button type='primary'>Submit</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value
    },
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this
      return formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : {}
    },
    buttonItemLayout() {
      const { formLayout } = this
      return formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
      } : {}
    },
  },
}
</script>
```
:::






