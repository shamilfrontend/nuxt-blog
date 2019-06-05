import Vue from 'vue'

// element ui
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'

// markdown
import VueMarkdown from 'vue-markdown';

// filters
import dateFilter from '../common/filters/date.filter'

// use
Vue.use(Element, {
  locale,
});
Vue.component('vue-markdown', VueMarkdown);
Vue.filter('date', dateFilter);
