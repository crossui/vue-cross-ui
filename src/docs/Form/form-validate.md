> 表单验证

:::demo `Form` 组件基于  `async-validator` 实现的数据验证，给 `Form` 设置属性 `rules`，同时给需要验证的 `FormItem`设置属性 `prop` 指向对应字段即可。验证方法也支持 `Promise`。



```html
<template>
  <div>
    <v-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
      <v-form-item label="Name" prop="name">
        <v-input type="text" v-model="formValidate.name">
           <v-icon slot="prefix" type="user"></v-icon>
        </v-input>
      </v-form-item>
      <v-form-item label="E-mail" prop="mail">
        <v-input type="text" v-model="formValidate.mail">
        </v-input>
      </v-form-item>
      <v-form-item label="City" prop="city">
        <v-select v-model="formValidate.city" placeholder="Select your city" style="width:400px">
          <v-select-option value="beijing">beijing</v-select-option>
          <v-select-option value="shanghai">shanghai</v-select-option>
          <v-select-option value="shenzhen">shenzhen</v-select-option>
        </v-select>
      </v-form-item>
      <v-form-item label="Date">
        <v-row>
          <v-col :span="11">
              <v-form-item prop="date">
                <v-date-picker v-model="formValidate.date" style="width:100%"></v-date-picker>
              </v-form-item>
          </v-col>
          <v-col :span="2" style="text-align: center">-</v-col>
          <v-col :span="11">
              <v-form-item prop="time">
                  <v-time-picker v-model="formValidate.time" style="width:100%"></v-time-picker>
              </v-form-item>
          </v-col>
        </v-row>
      </v-form-item>
      <v-form-item label="dateRender" prop="dateRender">
          <v-range-picker v-model="formValidate.dateRender"></v-range-picker>
      </v-form-item>
      <v-form-item label="month" prop="month">
          <v-month-picker v-model="formValidate.month"></v-month-picker>
      </v-form-item>
      <v-form-item label="week" prop="week">
          <v-week-picker v-model="formValidate.week"></v-week-picker>
      </v-form-item>
      <v-form-item label="Gender" prop="gender">
        <v-radio-group v-model="formValidate.gender">
          <v-radio value="1">A</v-radio>
          <v-radio value="2">B</v-radio>
          <v-radio value="3">C</v-radio>
          <v-radio value="4">D</v-radio>
        </v-radio-group>
      </v-form-item>
      <v-form-item label="Hobby" prop="interest">
        <v-checkbox-group v-model="formValidate.interest">
          <v-checkbox value="a">A</v-checkbox>
          <v-checkbox value="b">B</v-checkbox>
          <v-checkbox value="c">C</v-checkbox>
          <v-checkbox value="d">D</v-checkbox>
        </v-checkbox-group>
      </v-form-item>
      <v-form-item label="Desc" prop="desc">
        <v-textarea v-model="formValidate.desc" :rows="4">
        </v-textarea>
      </v-form-item>
      <v-form-item label="Cascader" prop="cascader">
        <v-cascader :options="cascaderOptions" v-model="formValidate.cascader" placeholder="Please select"></v-cascader>
      </v-form-item>
      <v-form-item label="AutoComplete" prop="autocomplete">
        <v-auto-complete
          :dataSource="dataSource"
          @search="handleAutoComplete"
          placeholder="input here"
          v-model="formValidate.autocomplete"
        ></v-auto-complete>
      </v-form-item>
      <v-form-item label="Rate" prop="rate">
        <v-rate v-model='formValidate.rate'></v-rate>
      </v-form-item>
      <v-form-item label="TreeSelect" prop="treeselect">
        <v-tree-select
          style="width: 300px"
          v-model="formValidate.treeselect"
          :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
          placeholder='Please select'
          allowClear
          treeDefaultExpandAll
        >
          <v-tree-select-node value='parent 1' title='parent 1' key='0-1'>
            <v-tree-select-node value='parent 1-0' title='parent 1-0' key='0-1-1'>
              <v-tree-select-node value='leaf1' title='my leaf' key='random'></v-tree-select-node>
              <v-tree-select-node value='leaf2' title='your leaf' key='random1'></v-tree-select-node>
            </v-tree-select-node>
            <v-tree-select-node value='parent 1-1' title='parent 1-1' key='random2'>
              <v-tree-select-node value='sss' key='random3'>
                <b style="color: #08c" slot="title">sss</b>
              </v-tree-select-node>
            </v-tree-select-node>
          </v-tree-select-node>
        </v-tree-select>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @click="handleSubmit('formValidate')">Signin</v-button>
        <v-button type="info" @click="handleAssignment">Assignment</v-button>
        <v-button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</v-button>
        <v-button @click="handleClear('formValidate')" style="margin-left: 8px">Clear</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
import moment from 'moment';

const cascaderOptions = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }]
export default {
  data() {
    return {
      cascaderOptions,
      dataSource: ['a','aaa'],
      formValidate:{
        name: '',
        mail: '',
        city: '',
        date: null,
        time: null,
        dateRender:null,
        month:null, 
        week:null,
        gender: '',
        interest: [],
        desc: '',
        cascader: [],
        autocomplete: '',
        rate: 0,
        treeselect: undefined
      },
      ruleValidate:{
        name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        date: [
            { required: true, message: 'Please select the date' }
        ],
        time: [
            { required: true, message: 'Please select time'}
        ],
        dateRender: [
            { required: true, message: 'Please select dateRender'}
        ],
        month:[
            { required: true, message: 'Please select month'}
        ],
        week:[
            { required: true, message: 'Please select week'}
        ],
        gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ],
        cascader: [
            { required: true, message: 'Please select the cascader' }
        ],
        autocomplete: [
            { required: true, message: 'Please select the autocomplete' }
        ],
        rate: [
            { required: true, type: 'number', min: 1, message: 'Please select the rate', trigger: 'change' },
        ],
        treeselect: [
            { required: true, message: 'Please select the treeselect' }
        ],
      }
    }
  },
  methods: {
    moment,
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
          if (valid) {
              this.$message.success('Success!');
          } else {
              this.$message.error('Fail!');
          }
      })
    },
    handleAssignment(){
      this.formValidate.name = '1111111111'
        this.formValidate.mail = '50000@qq.com'
        this.formValidate.city = 'beijing' 
        this.formValidate.date = moment('2018-11-09', "YYYY-MM-DD")
        this.formValidate.time = moment()
        this.formValidate.gender = '2'
        this.formValidate.interest = ['a','b']
        this.formValidate.desc = '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容'
        this.formValidate.cascader = ['zhejiang','hangzhou','xihu']
        this.formValidate.autocomplete =  'aaa'
        this.formValidate.rate = 2
        this.formValidate.treeselect = 'leaf1'
    },
    handleReset (name) {
        this.$refs[name].resetFields();
        console.info(this.formValidate)
    },
    handleClear(name){
      this.$refs[name].clearValidate();
    },
    handleAutoComplete(value){
      this.dataSource = !value ? [] : [
        value,
        value + value,
        value + value + value,
      ]
    }
  }
}
</script>
```
:::
>> 当表单有`v-if`控制时请手动重置`v-model`




