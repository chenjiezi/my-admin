<template>
<div id="Home">
  <div class="container">
    <div class="siderbar" :style="{ width: width }">
      菜单
    </div>
    <div class="main" :style="{ marginLeft: marginLeft }">
      <div class="header">
        <div class="header-l">
          <Button @click="toggleSidebar">折叠/展开</Button>
        </div>
        <div class="header-r">
          <Button @click="logout">退登</Button>
        </div>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus numquam nobis sint molestias soluta quas deleniti minus! Doloremque dolor, perferendis ipsam odio itaque sit error nemo exercitationem culpa expedita eius.
      </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isShow: true,
      width: '200px',
      marginLeft: '200px'
    }
  },
  methods: {
    toggleSidebar () {
      this.isShow = !this.isShow
      this.width = this.isShow ? '200px' : '50px'
      this.marginLeft = this.isShow ? '200px' : '50px'
    },
    async logout () {
      await this.$store.dispatch('logout');
      this.$router.push({ path: '/login' });
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    .siderbar
      width 200px
      height 100vh
      position fixed
      top 0
      left 0
      transition all 0.3s
      background-color rgba(0,0,0,.2)
    .main
      flex 1
      margin-left 200px
      transition margin-left 0.3s
      background-color rgba(0,0,0,.1)
      .header
        background-color rgba(0,0,0,.3)
        display flex
        justify-content space-between
        align-items center
        height 55px
        padding 0 15px
</style>