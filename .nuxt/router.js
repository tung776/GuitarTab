import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _63097233 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _025d8b82 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _023ec61a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _9aea15ea = () => interopDefault(import('..\\pages\\songs\\index.vue' /* webpackChunkName: "pages_songs_index" */))
const _72f011da = () => interopDefault(import('..\\pages\\songs\\create.vue' /* webpackChunkName: "pages_songs_create" */))
const _7aa3c6ef = () => interopDefault(import('..\\pages\\songs\\_id\\index.vue' /* webpackChunkName: "pages_songs__id_index" */))
const _1a9c427d = () => interopDefault(import('..\\pages\\songs\\_id\\edit.vue' /* webpackChunkName: "pages_songs__id_edit" */))
const _38b5e86b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
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
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/inspire",
      component: _63097233,
      name: "inspire"
    }, {
      path: "/login",
      component: _025d8b82,
      name: "login"
    }, {
      path: "/register",
      component: _023ec61a,
      name: "register"
    }, {
      path: "/songs",
      component: _9aea15ea,
      name: "songs"
    }, {
      path: "/songs/create",
      component: _72f011da,
      name: "songs-create"
    }, {
      path: "/songs/:id",
      component: _7aa3c6ef,
      name: "songs-id"
    }, {
      path: "/songs/:id/edit",
      component: _1a9c427d,
      name: "songs-id-edit"
    }, {
      path: "/",
      component: _38b5e86b,
      name: "index"
    }],

    fallback: false
  })
}
