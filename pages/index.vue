<template>
  <el-row
    type="flex"
    justify="center"
  >
    <el-col
      :xs="24"
      :sm="18"
      :md="12"
      :lg="10"
    >
      <app-post
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
  import AppPost from '@/components/main/Post';

  export default {
    head: {
      title: `Главная страница | ${process.env.appName}`,
      meta: [
        {
          hid: 'homepage',
          name: 'description',
          content: 'Мой крутой блог',
        },
        {
          hid: 'homepage',
          name: 'keywords',
          content: 'nuxt, vue, ssr',
        },
      ]
    },

    async asyncData({store}) {
      const posts = await store.dispatch('post/fetchPosts');
      return {
        posts
      };
    },

    components: {
      AppPost,
    },
  };
</script>

<style>
</style>
