> 自定义验证

:::demo 可以完全自定义验证规则来完成更复杂的验证。示例展示的是密码的二次确认。

```html
<template>
  <div>
    <v-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
      <v-form-item label="Password" prop="passwd">
        <v-input type="password" v-model="formCustom.passwd">
        </v-input>
      </v-form-item>
      <v-form-item label="Confirm" prop="passwdCheck">
        <v-input type="password" v-model="formCustom.passwdCheck">
        </v-input>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @click="handleSubmit('formCustom')">Submit</v-button>
        <v-button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password'));
        } else {
            if (this.formCustom.passwdCheck !== '') {
                // 对第二个密码框单独验证
                this.$refs.formCustom.validateField('passwdCheck');
            }
            callback();
        }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password again'));
        } else if (value !== this.formCustom.passwd) {
            callback(new Error('The two input passwords do not match!'));
        } else {
            callback();
        }
    };
    return {
      formCustom: {
          passwd: '',
          passwdCheck: '',
      },
      ruleCustom: {
          passwd: [
              { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
              { validator: validatePassCheck, trigger: 'blur' }
          ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$message.success('Success!');
            } else {
                this.$message.error('Fail!');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    }
  }
}
</script>
```
:::






