<template>
  <div class="admin-list">
    <h1 class="mb2">Посты</h1>
    <el-table
      :data="posts"
      style="width: 100%"
    >
      <el-table-column
        label="Название поста"
      >
        <template slot-scope="{row: {title}}">
          <i class="el-icon-time"></i>
          <span>{{ title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Дата"
      >
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span>{{ new Date(date).toLocaleString() }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Просмотры"
      >
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span>{{ views }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Комментарии"
      >
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span>{{ comments.length }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Действия"
      >
        <template slot-scope="{row}">
          <el-button
            icon="el-icon-edit"
            type="primary"
            circle
            @click="open(row._id)"
          />
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="remove(row._id)"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    middleware: ['admin-auth'],

    layout: 'admin',

    name: "list",

    async asyncData({store}) {
      const posts = await store.dispatch('post/fetchAdminPosts');
      return {
        posts,
      };
    },

    methods: {
      open(id) {
        console.log(id);
      },
      remove(id) {
        console.log(id);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
