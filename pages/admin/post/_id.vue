<template>
  <div class="page-wrap">
    <el-breadcrumb class="mb" separator="/">
      <el-breadcrumb-item to="/admin/list">
        Посты
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <div class="mb2">
        <el-form-item
          label="Текст в формате .md или .html"
          prop="text"
        >
          <el-input
            v-model="controls.text"
            type="textarea"
            resize="none"
            :rows="10"
          />
        </el-form-item>
      </div>

      <div class="mb">
        <small class="mr">
          <i class="el-icon-time"></i>
          <span>{{ new Date(post.date).toLocaleString() }}</span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          native-type="submit"
          type="primary"
          round
          :loading="loading"
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "admin-post",

    middleware: ['admin-auth'],

    head() {
      return {
        title: `Пост | ${this.post.title}`,
      };
    },

    validate({params}) {
      return Boolean(params.id);
    },

    layout: 'admin',

    async asyncData({store, params}) {
      const {post} = await store.dispatch('post/fetchAdminPostById', params.id);
      console.log('post', post);
      return {
        post,
      };
    },

    data() {
      return {
        loading: false,
        controls: {
          text: '',
        },
        rules: {
          text: [
            {
              required: true,
              message: 'Текст не должен быть пустым',
              trigger: 'blur',
            },
          ],
        }
      };
    },

    mounted() {
      this.controls.text = this.post.text;
    },

    methods: {
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true;
            try {
              const formData = {
                text: this.controls.text,
                id: this.post._id,
              };
              await this.$store.dispatch('post/update', formData);
              this.$message.success('Пост успешно обновлен');
              this.loading = false;
            } catch (e) {
              this.loading = false;
              this.$message.error('Ошибка при обновлении поста');
            }
          }
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  .page-wrap {
    form {
      width: 600px;
    }
  }

  .mr {
    margin-right: 2rem;
  }
</style>
