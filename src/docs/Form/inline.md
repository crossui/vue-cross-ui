> 行内表单

:::demo 设置属性 `inline`，表单元素可以水平排列。

```html
<template>
  <div>
    <v-form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <v-form-item prop="user">
        <v-input type="text" v-model="formInline.user" placeholder="Username">
          <v-icon slot="prefix" type="user"></v-icon>
        </v-input>
      </v-form-item>
      <v-form-item prop="password">
        <v-input type="password" v-model="formInline.password" placeholder="Password">
          <v-icon slot="prefix" type="lock"></v-icon>
        </v-input>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @click="handleSubmit('formInline')">Signin</v-button>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>
```
:::






