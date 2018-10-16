<script>
import { Form } from '../../../components/index';

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
    normFile(e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    },
  },

  render() {
    const { getFieldDecorator } = this.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <v-form id='components-form-demo-validate-other' onSubmit={this.handleSubmit}>
        <v-form-item
          {...{ props: formItemLayout }}
          label='Plain Text'
        >
          <span class='vcu-form-text'>China</span>
        </v-form-item>
        <v-form-item
          {...{ props: formItemLayout }}
          label='Select'
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: 'Please select your country!' },
            ],
          })(
            <v-select placeholder='Please select a country'>
              <v-select-option value='china'>China</v-select-option>
              <v-select-option value='use'>U.S.A</v-select-option>
            </v-select>
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Select[multiple]'
        >
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <v-select mode='multiple' placeholder='Please select favourite colors'>
              <v-select-option value='red'>Red</v-select-option>
              <v-select-option value='green'>Green</v-select-option>
              <v-select-option value='blue'>Blue</v-select-option>
            </v-select>
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='InputNumber'
        >
          {getFieldDecorator('input-number', { initialValue: 3 })(
            <v-input-number min={1} max={10} />
          )}
          <span class='vcu-form-text'> machines</span>
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Switch'
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <v-switch />
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Slider'
        >
          {getFieldDecorator('slider')(
            <v-slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Radio.Group'
        >
          {getFieldDecorator('radio-group')(
            <v-radio-group>
              <v-radio value='a'>item 1</v-radio>
              <v-radio value='b'>item 2</v-radio>
              <v-radio value='c'>item 3</v-radio>
            </v-radio-group>
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Radio.Button'
        >
          {getFieldDecorator('radio-button')(
            <v-radio-group>
              <v-radio-button value='a'>item 1</v-radio-button>
              <v-radio-button value='b'>item 2</v-radio-button>
              <v-radio-button value='c'>item 3</v-radio-button>
            </v-radio-group>
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Rate'
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(
            <v-rate allowHalf />
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Upload'
          extra='longgggggggggggggggggggggggggggggggggg'
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <v-upload name='logo' action='/upload.do' listType='picture'>
              <v-button>
                <v-icon type='upload' /> Click to upload
              </v-button>
            </v-upload>
          )}
        </v-form-item>

        <v-form-item
          {...{ props: formItemLayout }}
          label='Dragger'
        >
          <div class='dropbox'>
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <v-upload-dragger name='files' action='/upload.do'>
                <p class='vcu-upload-drag-icon'>
                  <v-icon type='inbox' />
                </p>
                <p class='vcu-upload-text'>Click or drag file to this area to upload</p>
                <p class='vcu-upload-hint'>Support for a single or bulk upload.</p>
              </v-upload-dragger>
            )}
          </div>
        </v-form-item>

        <v-form-item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <v-button type='primary' htmlType='submit'>Submit</v-button>
        </v-form-item>
      </v-form>
    )
  },
}

export default Form.create()(Demo)
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>




