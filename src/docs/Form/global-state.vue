<script>
import { Form } from '../../../components/index';
//import { Form } from 'vue-cross-ui';

const CustomizedForm = Form.create({
  props: ['username'], // must declare like vue `props` https://vuejs.org/v2/api/#props
  onFieldsChange(instance, changedFields) {
    instance.$emit('change', changedFields)
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
    }
  },
  onValuesChange(_, values) {
    console.log(values)
  },
})({
  render() {
    const { getFieldDecorator } = this.form
    return (
      <v-form layout='inline'>
        <v-form-item label='Username'>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username is required!' }],
          })(<v-input />)}
        </v-form-item>
      </v-form>
    )
  },

})

export default {
  data() {
    return {
      fields: {
        username: {
          value: 'benjycui',
        },
      },
    }
  },
  methods: {
    handleFormChange(changedFields) {
      this.fields = { ...this.fields, ...changedFields }
    },
  },

  render() {
    const fields = this.fields
    return (
      <div id='components-form-demo-global-state'>
        <CustomizedForm {...{ props: fields }} onChange={this.handleFormChange} />
        <pre class='language-bash'>
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    )
  },
}
</script>
<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
  background: #eee;
  padding: 5px;
}
</style>




