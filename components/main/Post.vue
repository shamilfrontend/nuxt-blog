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
      <h3>{{post.title}}</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date(post.date).toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        :src="post.imageUrl"
        :alt="post.title"
        class="post-image"
      >
    </div>
    <footer class="post-footer">
      <el-button
        round
        @click="openPost(post._id)"
      >Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        {{post.comments.length}}
      </span>
    </footer>
  </el-card>
</template>

<script>
  export default {
    name: "Post",

    props: {
      post: {
        required: true,
        type: Object,
      },
    },

    methods: {
      openPost() {
        const id = this.post._id;
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
