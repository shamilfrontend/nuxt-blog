<template>
  <el-card
    class="comment"
  >
    <header
      class="comment-header"
    >
      <span>Person name</span>
      <span>
        <i class="el-icon-time"></i>{{ new Date().toLocaleString() }}
      </span>
    </header>
    <div class="comment-text">
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "Comment",

    props: {
      comment: {},
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
  }
</style>
