
<script>
import { Form } from '../../../components/index';
//import { Form } from 'vue-cross-ui';

const hasProp = (instance, prop) => {
  const $options = instance.$options || {}
  const propsData = $options.propsData || {}
  return prop in propsData
}
const PriceInput = {
  props: ['value'],
  data() {
    const value = this.value || {}
    return {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    }
  },
  watch: {
    value(val = {}) {
      this.number = val.number || 0
      this.currency = val.currency || 'rmb'
    },
  },
  methods: {
    handleNumberChange(e) {
      const number = parseInt(e.target.value || 0, 10)
      if (isNaN(number)) {
        return
      }
      if (!hasProp(this, 'value')) {
        this.number = number
      }
      this.triggerChange({ number })
    },
    handleCurrencyChange(currency) {
      if (!hasProp(this, 'value')) {
        this.currency = currency
      }
      this.triggerChange({ currency })
    },
    triggerChange(changedValue) {
      // Should provide an event to pass value to Form.
      this.$emit('change', Object.assign({}, this.$data, changedValue))
    },
  },

  render() {
    const { number, currency } = this
    return (
      <span>
        <v-input
          type='text'
          value={number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <v-select
          value={currency}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <v-select-option value='rmb'>RMB</v-select-option>
          <v-select-option value='dollar'>Dollar</v-select-option>
        </v-select>
      </span>
    )
  },
}

const Demo = {
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    checkPrice(rule, value, callback) {
      if (value.number > 0) {
        callback()
        return
      }
      callback('Price must greater than zero!')
    },
  },

  render() {
    const { getFieldDecorator } = this.form
    return (
      <v-form layout='inline' onSubmit={this.handleSubmit}>
        <v-form-item label='Price'>
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </v-form-item>
        <v-form-item>
          <v-button type='primary' htmlType='submit'>Submit</v-button>
        </v-form-item>
      </v-form>
    )
  },
}

export default Form.create()(Demo)
</script>