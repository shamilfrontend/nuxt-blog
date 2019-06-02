import Vue from 'vue'

// element ui
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'

// markdown
import VueMarkdown from 'vue-markdown';

// use
Vue.use(Element, {
  locale,
});
Vue.component('vue-markdown', VueMarkdown);
