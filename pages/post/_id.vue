<template>
  <article
    class="post"
  >
    <header
      slot="header"
      class="post-header"
    >
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link
          to="/"
        >
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{ 34 }}
        </small>
      </div>
      <img
        src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
        alt="img"
        class="post-image"
      >
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, cumque dolores ea fugiat impedit
        laborum nam quam quisquam ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, cumque dolores ea fugiat impedit
        laborum nam quam quisquam ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, cumque dolores ea fugiat impedit
        laborum nam quam quisquam ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, cumque dolores ea fugiat impedit
        laborum nam quam quisquam ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, cumque dolores ea fugiat impedit
        laborum nam quam quisquam ut.</p>
    </main>
    <footer>
      <comment-form
        v-if="canAddComment"
        @created="createCommentHandler"
      />

      <div
        v-if="true"
        class="comments"
      >
        <comment
          v-for="comment in 5"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div
        v-else
        class="text-center"
      >
        Комментариев нет
      </div>
    </footer>
  </article>
</template>

<script>
  import Comment from '@/components/main/Comment';
  import CommentForm from '@/components/main/CommentForm';

  export default {
    components: {
      Comment,
      CommentForm,
    },

    validate({params}) {
      return Boolean(params.id);
    },

    head: {
      title: 'Название поста',
    },

    data() {
      return {
        canAddComment: true,
      };
    },

    methods: {
      createCommentHandler() {
        this.canAddComment = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .post-image {
    img {
      width: 100%;
      height: auto;
    }
  }

  .post-content {
    margin-bottom: 2rem;
    line-height: 1.4;
    p {
      margin-bottom: 0.25rem;
    }
  }
</style>
