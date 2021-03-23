<template>
<div id="Login">
  <div class="container">
      <div class="content">
        <h1>Login</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" class="form">
          <FormItem prop="user">
              <Input ref="user" type="text" v-model="formInline.user" placeholder="用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input ref="password" type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button :loading="loading" type="primary" @click="handleSubmit('formInline')" class="login-btn">登录</Button>
          </FormItem>
      </Form>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      formInline: {
          user: 'admin',
          password: 'admin'
      },
      ruleInline: {
          user: [
              { required: true, message: '请输入用户名!', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请输入密码!', trigger: 'blur' },
              // { type: 'string', min: 5, message: '密码不少于五位!', trigger: 'blur' }
          ]
      }
    }
  },
  mounted () {
    if (this.formInline.user === '') {
      this.$refs.user.focus();
    } else if (this.formInline.password === '') {
      this.$refs.password.focus();
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.loading = true;

          this.$store.dispatch('login', this.formInline)
            .then(() => {
              this.$router.push({ path: '/' });
              this.$Message.success('登录成功!');
            })
            .catch(({ message }) => {
              this.$Message.error(message);
            })
            .finally(() => {
              this.loading = false;
            })
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    min-width 800px
    height 100vh
    display flex
    justify-content center
    align-items center
    background-image url('../assets/bg3.jpg')
    background-size cover
    .content
      width 450px
      height 300px
      padding-top 50px
      background-color rgba(0,0,0, .8)
      color #fff
      h1
        text-align center
      .form
        margin-top 20px
        padding 0 20px
        .login-btn
          width 100%
</style>