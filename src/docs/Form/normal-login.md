> 登录框

:::demo 普通的登录框，可以容纳更多的元素。

```html
<template>
  <div>
    <v-form id='components-form-demo-normal-login' @submit='handleSubmit' class='login-form' :autoFormCreate="(form)=>{this.form = form}">
      <v-form-item fieldDecoratorId="userName" :fieldDecoratorOptions="formrules.config">
        <v-input placeholder='Username'>
          <v-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"></v-icon>
        </v-input>
      </v-form-item>
      <v-form-item fieldDecoratorId="password" :fieldDecoratorOptions="formrules.config">
        <v-input type='password' placeholder='Password'>
          <v-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"></v-icon>
        </v-input>
      </v-form-item>
      <v-form-item>
        <v-checkbox>Remember me</v-checkbox>
        <a class='login-form-forgot' href=''>Forgot password</a>
        <v-button type='primary' htmlType='submit' class='login-form-button'>
          Log in
        </v-button>
        Or
        <a href=''>register now!</a>
      </v-form-item>
    </v-form>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      formrules: {
        config: {
          rules: [
            {
              required: true,
              message: 'Please input your username!'
            }
          ]
        }
      },
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  },
}
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>



```
:::






