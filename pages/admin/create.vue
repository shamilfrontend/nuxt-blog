<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Создать новый пост</h1>
    <div class="mb2">
      <el-form-item
        label="Введите название поста"
        prop="text"
      >
        <el-input
          v-model.trim="controls.title"
        />
      </el-form-item>
    </div>

    <div class="mb2">
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
      >
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
    </div>

    <div class="mb2">
      <el-button
        type="success"
      >
        Предпросмотр
      </el-button>
    </div>

    <div class="mb2">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
        <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
      </el-upload>
    </div>

    <el-form-item>
      <el-button
        native-type="submit"
        type="primary"
        round
        :loading="loading"
      >
        Создать пост
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    middleware: ['admin-auth'],

    layout: 'admin',

    name: "create",

    data() {
      return {
        loading: false,
        controls: {
          title: '',
          text: '',
        },
        rules: {
          title: [
            {
              required: true,
              message: 'Название поста не может быть пустым',
              trigger: 'blur',
            },
          ],
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

    methods: {
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true;
            try {
              const formData = {
                title: this.controls.title,
                text: this.controls.text,
              };
              await this.$store.dispatch('post/create', formData);
              this.$message.success('Пост успешно создан');
              this.clearFormData();
            } catch (e) {
              this.$message.error('Ошибка при создании поста');
            } finally {
              this.loading = false;
            }
          }
        });
      },

      clearFormData() {
        this.controls.title = '';
        this.controls.text = '';
      },
    },
  }
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
