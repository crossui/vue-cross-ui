```jsx

<script>
import { Form } from '../../../components/index';
//import { Form } from 'vue-cross-ui';
const AdvancedSearchForm = {
  data () {
    return {
      expand: false,
    }
  },
  methods: {
    handleSearch  (e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },

    handleReset () {
      this.form.resetFields()
    },

    toggle  () {
      this.expand = !this.expand
    },

    // To generate mock Form.Item
    getFields () {
      const count = this.expand ? 10 : 6
      const { getFieldDecorator } = this.form
      const children = []
      for (let i = 0; i < 10; i++) {
        children.push(
          <v-col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <v-form-item label={`Field ${i}`}>
              {getFieldDecorator(`field-${i}`, {
                rules: [{
                  required: true,
                  message: 'Input something!',
                }],
              })(
                <v-input placeholder='placeholder' />
              )}
            </v-form-item>
          </v-col>
        )
      }
      return children
    },
  },

  render () {
    return (
      <v-form
        class='vcu-advanced-search-form'
        onSubmit={this.handleSearch}
      >
        <v-row gutter={24}>{this.getFields()}</v-row>
        <v-row>
          <v-col span={24} style={{ textAlign: 'right' }}>
            <v-button type='primary' htmlType='submit'>Search</v-button>
            <v-button style={{ marginLeft: '8px' }} onClick={this.handleReset}>
              Clear
            </v-button>
            <a style={{ marginLeft: '8px', fontSize: '12px' }} onClick={this.toggle}>
              Collapse <v-icon type={this.expand ? 'up' : 'down'} />
            </a>
          </v-col>
        </v-row>
      </v-form>
    )
  },
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm)

export default {
  methods: {
    saveFormRef (inst) {
      this.formRef = inst
    },
  },
  render () {
    return (
      <div id='components-form-demo-advanced-search'>
        <WrappedAdvancedSearchForm wrappedComponentRef={(inst) => this.saveFormRef(inst)}/>
        <div class='search-result-list'>Search Result List</div>
      </div>
    )
  },
}

</script>
<style>
.vcu-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.vcu-advanced-search-form .vcu-form-item {
  display: flex;
}

.vcu-advanced-search-form .vcu-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .vcu-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>
```