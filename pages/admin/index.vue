<template>
  <h1>Admin</h1>
</template>

<script>
  import AppPost from '@/components/main/Post';

  export default {
    middleware: ['admin-auth'],

    layout: 'admin',

    head: {
      title: 'Панель управления',
    },

    components: {
      AppPost,
    },
  };
</script>

<style lang="scss" scoped>
</style>
