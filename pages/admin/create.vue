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
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
    </div>

    <div class="mb2">
      <el-button
        type="success"
        plain
        @click="previewDialog = true"
      >
        Предпросмотр
      </el-button>

      <el-dialog
        title="Предпросмотр"
        :visible.sync="previewDialog"
      >
        <div :key="controls.text">
          <vue-markdown>{{controls.text}}</vue-markdown>
        </div>
      </el-dialog>
    </div>

    <el-upload
      class="mb2"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
    </el-upload>

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
        previewDialog: false,
        image: null,
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
          if (valid && this.image) {
            this.loading = true;
            try {
              const formData = {
                title: this.controls.title,
                text: this.controls.text,
                image: this.controls.image,
              };
              await this.$store.dispatch('post/create', formData);
              this.$message.success('Пост успешно создан');
              this.clearFormData();
            } catch (e) {
              this.$message.error('Ошибка при создании поста');
            } finally {
              this.loading = false;
            }
          } else {
            this.$message.warning('Форма не валидна');
          }
        });
      },

      clearFormData() {
        this.controls.title = '';
        this.controls.text = '';
        this.controls.image = null;
        this.$refs.upload.clearFiles();
      },

      handleImageChange(file, fileList) {
        this.image = file.raw;
        console.log('file', file);
        console.log('fileList', fileList);
      },
    },
  }
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
