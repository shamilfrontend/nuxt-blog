<template>
  <div class="empty-layout">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: "empty",

    computed: {
      error() {
        return this.$store.getters.error;
      },
    },

    watch: {
      error(value) {
        this.$message.error(value);
      },
    },
  }
</script>

<style lang="scss" scoped>
  .empty-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4rem;
  }
</style>
