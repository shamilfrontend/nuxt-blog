<template>
  <div>
    <h1>Аналитика по постам</h1>

    <analytics-chart
      :data="views.data"
      :labels="views.labels"
      title="Количество просмотров"
    />
    <analytics-chart
      :data="comments.data"
      :labels="comments.labels"
      title="Количество комментариев"
    />
  </div>
</template>

<script>
  import AnalyticsChart from '@/components/admin/AnalyticsChart';

  export default {
    components: {
      AnalyticsChart,
    },

    middleware: ['admin-auth'],

    layout: 'admin',

    head: {
      title: `Аналитика | ${process.env.appName}`,
    },

    async asyncData({store}) {
      const {comments, views} = await store.dispatch('post/getAnalytics');
      return {comments, views};
    },
  };
</script>
