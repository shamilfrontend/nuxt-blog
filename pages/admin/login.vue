<template>
  <el-card
    shadow="always"
    class="login"
  >
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2 class="mb2">Войти в панель администратора</h2>

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
        >Войти
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    layout: 'empty',

    name: "login",

    head: {
      title: `Авторизация | ${process.env.appName}`,
    },

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

    mounted() {
      const {message} = this.$route.query;

      switch (message) {
        case 'login':
          this.$message.info('Для начала войдите в систему');
          break;
        case 'logout':
          this.$message.success('Вы успешно вышли из системы');
          break;
        case 'session':
          this.$message.warning('Время сессии истекло, пожалуйста войдите заново');
          break;
        default:
      }
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

              await this.$store.dispatch('auth/login', formData);

              this.$router.push('/admin');
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
  .login {
    width: 500px;
  }
</style>
