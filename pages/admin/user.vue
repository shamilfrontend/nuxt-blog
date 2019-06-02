<template>
  <div class="admin-user">
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2 class="mb2">Создать пользователя</h2>

      <div class="mb2">
        <el-form-item
          label="Логин"
          prop="login"
        >
          <el-input
            v-model.trim="controls.login"
          />
        </el-form-item>
      </div>

      <div class="mb2">
        <el-form-item
          label="Пароль"
          prop="password"
        >
          <el-input
            v-model.trim="controls.password"
            type="password"
          />
        </el-form-item>
      </div>

      <el-form-item>
        <el-button
          native-type="submit"
          type="primary"
          round
          :loading="loading"
        >Создать
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    middleware: ['admin-auth'],

    layout: 'admin',

    name: "user",

    data() {
      return {
        loading: false,
        controls: {
          login: '',
          password: '',
        },
        rules: {
          login: [
            {
              required: true,
              message: 'Введите логин',
              trigger: 'blur',
            },
          ],
          password: [
            {
              required: true,
              message: 'Введите пароль',
              trigger: 'blur',
            },
            {
              min: 6,
              message: 'Пароль должен быть не менее 6 символов',
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
                login: this.controls.login,
                password: this.controls.password,
              };

              await this.$store.dispatch('auth/createUser', formData);
              this.$message.success('Новый пользователь успешно добавлен');
              this.clearFormData();
            } catch (e) {
              this.loading = false;
            }
          }
        });
      },
      clearFormData() {
        this.controls.login = '';
        this.controls.password = '';
        this.loading = false;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .admin-user {
    max-width: 600px;
  }
</style>
