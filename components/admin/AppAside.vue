<template>
  <el-menu
    router
    class="aside-menu"
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать пост</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Создать пользователя</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "AppAside",
  }
</script>

<style lang="scss" scoped>
.aside-menu {
  height: 100%;
}
</style>
