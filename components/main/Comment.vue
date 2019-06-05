<template>
  <el-card
    class="comment"
  >
    <header
      class="comment-header"
    >
      <span>{{comment.name}}</span>
      <span>
        <i class="el-icon-time"></i>{{ comment.date | date('date') }}
      </span>
    </header>
    <p class="comment-text">
      {{comment.text}}
    </p>
  </el-card>
</template>

<script>
  export default {
    name: "Comment",

    props: {
      comment: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;
  }

  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;

    .el-icon-time {
      margin-right: 3px;
    }
  }

  .comment-text {
    white-space: pre-line;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
