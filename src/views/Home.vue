<template>
<div id="Home">
  Home
  <Button @click="logout">退登</Button>
</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async logout () {
      await this.$store.dispatch('logout');
      this.$router.push({ path: '/login' });
    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>