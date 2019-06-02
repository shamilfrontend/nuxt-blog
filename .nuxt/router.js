import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _36f62274 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _58659690 = () => interopDefault(import('../pages/admin/create.vue' /* webpackChunkName: "pages/admin/create" */))
const _61531c5a = () => interopDefault(import('../pages/admin/list.vue' /* webpackChunkName: "pages/admin/list" */))
const _a3a6dc46 = () => interopDefault(import('../pages/admin/login.vue' /* webpackChunkName: "pages/admin/login" */))
const _6476b246 = () => interopDefault(import('../pages/admin/logout.vue' /* webpackChunkName: "pages/admin/logout" */))
const _29eec8fc = () => interopDefault(import('../pages/admin/users.vue' /* webpackChunkName: "pages/admin/users" */))
const _44928747 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _ea7d7af4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _36f62274,
      name: "admin"
    }, {
      path: "/admin/create",
      component: _58659690,
      name: "admin-create"
    }, {
      path: "/admin/list",
      component: _61531c5a,
      name: "admin-list"
    }, {
      path: "/admin/login",
      component: _a3a6dc46,
      name: "admin-login"
    }, {
      path: "/admin/logout",
      component: _6476b246,
      name: "admin-logout"
    }, {
      path: "/admin/users",
      component: _29eec8fc,
      name: "admin-users"
    }, {
      path: "/post/:id?",
      component: _44928747,
      name: "post-id"
    }, {
      path: "/",
      component: _ea7d7af4,
      name: "index"
    }],

    fallback: false
  })
}
