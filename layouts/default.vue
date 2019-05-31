<template>
  <el-container>
    <el-header>
      <app-navigation />
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
  import AppNavigation from '@/components/main/AppNavigation';

  export default {
    components: {
      AppNavigation,
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
  }
</style>
