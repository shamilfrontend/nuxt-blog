<template>
  <h1>Очищаем данные</h1>
</template>

<script>
  export default {
    middleware: ['admin-auth'],

    layout: 'admin',

    name: "logout",

    beforeCreate() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/admin/login?message=logout');
    },
  }
</script>

<style lang="scss" scoped>

</style>
