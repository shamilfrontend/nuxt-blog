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
          <span>{{ title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Дата"
      >
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span>{{ date | date('date') }}</span>
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
          <el-tooltip
            effect="dark"
            content="Открыть пост"
            placement="top"
          >
            <el-button
              icon="el-icon-edit"
              type="primary"
              circle
              @click="open(row._id)"
            />
          </el-tooltip>
          <el-tooltip
            effect="dark"
            content="Удалить пост"
            placement="top"
          >
            <el-button
              icon="el-icon-delete"
              type="danger"
              circle
              @click="remove(row._id)"
            />
          </el-tooltip>
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

    head: {
      title: `Все посты | ${process.env.appName}`,
    },

    async asyncData({store}) {
      const posts = await store.dispatch('post/fetchAdminPosts');
      return {
        posts,
      };
    },

    methods: {
      open(id) {
        this.$router.push(`/admin/post/${id}`);
      },
      async remove(id) {
        try {
          await this.$confirm('Вы действительно хотите удалить пост?', 'Внимание!', {
            type: 'warning',
            confirmButtonText: 'Да',
            cancelButtonText: 'Отмена',
          });

          await this.$store.dispatch('post/remove', id);

          this.posts = this.posts.filter(post => post._id !== id);

          console.log('this.posts', this.posts);

          this.$message({
            type: 'success',
            message: 'Пост успешно удален'
          });
        } catch (e) {
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
