<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h2 class="comment-form-title">Добавить комментарий</h2>
    <el-form-item
      label="Ваше имя"
      prop="name"
    >
      <el-input
        v-model="controls.name"
      />
    </el-form-item>
    <el-form-item
      label="Текст комментария"
      prop="text"
    >
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        native-type="submit"
        type="primary"
        round
        :loading="loading"
      >Добавить комментарий</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "CommentForm",

    props: {
      postId: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        loading: false,
        controls: {
          name: '',
          text: '',
        },
        rules: {
          name: [
            {
              required: true,
              message: 'Имя не должно быть пустым',
              trigger: 'blur',
            },
          ],
          text: [
            {
              required: true,
              message: 'Введи ваш комментарий',
              trigger: 'blur',
            },
          ],
        }
      };
    },

    methods: {
      onSubmit() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true;

            const formData = {
              postId: this.postId,
              name: this.controls.name,
              text: this.controls.text,
            };

            try {
              const newComment = await this.$store.dispatch('comment/create', formData);
              this.$emit('created', newComment);
              this.$message.success('Комментарий добавлен');
            } catch (e) {
              this.loading = false;
            }
          }
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  .comment-form-title {
    margin-bottom: 1rem;
  }
</style>
