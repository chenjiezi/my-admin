<template>
<div id="Login">
  <div class="container">
      <div class="content">
        <h1>Login</h1>
        <Input v-model="loginname" placeholder="账号/用户名" class="item" />
        <Input v-model="password" type="password" password placeholder="密码" class="item" />
        <Button @click="loginFunc" type="primary" class="item">登录</Button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginname: '',
      password: ''
    }
  },
  methods: {
    loginFunc () {
      console.log('this.loginname:', this.loginname);
      console.log('this.password:', this.password);
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
      display flex
      align-items center
      flex-direction column
      width 450px
      height 300px
      padding-top 50px
      background-color rgba(0,0,0, .8)
      color #fff
      & > *
        margin-bottom 20px
      .item
        width 350px
</style>