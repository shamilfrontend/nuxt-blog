<template>
  <div class="admin-layout-wrap">
    <el-container
      class="admin-container"
    >
      <el-aside width="250px">
        <app-aside />
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import AppAside from '@/components/admin/AppAside';

  export default {
    name: "admin",

    components: {
      AppAside,
    },

    computed: {
      error() {
        return this.$store.getters.error;
      },
    },

    watch: {
      error(value) {
        this.$message.error(value.response.data.message);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .admin-layout-wrap {
    width: 100%;
    height: 100vh;
  }

  .admin-container {
    height: 100%;
  }
</style>
