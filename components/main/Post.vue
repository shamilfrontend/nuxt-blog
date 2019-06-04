<template>
  <el-card
    class="post"
    shadow="hover"
    :body-style="{padding: 0}"
  >
    <header
      slot="header"
      class="post-header"
    >
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
        alt="img"
        class="post-image"
      >
    </div>
    <footer class="post-footer">
      <el-button
        round
        @click="openPost"
      >Открыть</el-button>
      <span>
        <i class="el-icon-message">12</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
  export default {
    name: "Post",

    methods: {
      openPost() {
        const id = 'test-id';
        this.$router.push(`/post/${id}`)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-image {
    width: 100%;
    height: auto;
  }

  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
