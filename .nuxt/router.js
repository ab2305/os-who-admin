import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _00becd39 = () => import('../pages/reload.vue' /* webpackChunkName: "pages/reload" */).then(m => m.default || m)
const _d8c2320e = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _2d4f00aa = () => import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */).then(m => m.default || m)
const _f9e24eb8 = () => import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */).then(m => m.default || m)
const _c4f92ae4 = () => import('../pages/operation/privacies.vue' /* webpackChunkName: "pages/operation/privacies" */).then(m => m.default || m)
const _6287d16f = () => import('../pages/operation/terms.vue' /* webpackChunkName: "pages/operation/terms" */).then(m => m.default || m)
const _23d4ddc3 = () => import('../pages/app/app.vue' /* webpackChunkName: "pages/app/app" */).then(m => m.default || m)
const _f4e7a2fa = () => import('../pages/operation/notices.vue' /* webpackChunkName: "pages/operation/notices" */).then(m => m.default || m)
const _58df20cc = () => import('../pages/operation/admins.vue' /* webpackChunkName: "pages/operation/admins" */).then(m => m.default || m)
const _1cace965 = () => import('../pages/operation/faqs.vue' /* webpackChunkName: "pages/operation/faqs" */).then(m => m.default || m)
const _0fdcb2a8 = () => import('../pages/stats/users.vue' /* webpackChunkName: "pages/stats/users" */).then(m => m.default || m)
const _53dea9a9 = () => import('../pages/operation/notes.vue' /* webpackChunkName: "pages/operation/notes" */).then(m => m.default || m)
const _27bd4f57 = () => import('../pages/operation/qnas.vue' /* webpackChunkName: "pages/operation/qnas" */).then(m => m.default || m)
const _0b380cfe = () => import('../pages/operation/privacy/new.vue' /* webpackChunkName: "pages/operation/privacy/new" */).then(m => m.default || m)
const _ce4bcd9e = () => import('../pages/operation/notice/new.vue' /* webpackChunkName: "pages/operation/notice/new" */).then(m => m.default || m)
const _bfe30276 = () => import('../pages/operation/term/new.vue' /* webpackChunkName: "pages/operation/term/new" */).then(m => m.default || m)
const _faa449e2 = () => import('../pages/operation/faq/new.vue' /* webpackChunkName: "pages/operation/faq/new" */).then(m => m.default || m)
const _cb29d370 = () => import('../pages/operation/admin/new.vue' /* webpackChunkName: "pages/operation/admin/new" */).then(m => m.default || m)
const _ed79f76a = () => import('../pages/operation/note/new.vue' /* webpackChunkName: "pages/operation/note/new" */).then(m => m.default || m)
const _5ff09b3d = () => import('../pages/users/user/_id.vue' /* webpackChunkName: "pages/users/user/_id" */).then(m => m.default || m)
const _55bdb2e4 = () => import('../pages/operation/notice/_id/index.vue' /* webpackChunkName: "pages/operation/notice/_id/index" */).then(m => m.default || m)
const _faf62c2c = () => import('../pages/operation/term/_id/edit.vue' /* webpackChunkName: "pages/operation/term/_id/edit" */).then(m => m.default || m)
const _3134a840 = () => import('../pages/operation/faq/_id/edit.vue' /* webpackChunkName: "pages/operation/faq/_id/edit" */).then(m => m.default || m)
const _754a76a4 = () => import('../pages/operation/privacy/_id/edit.vue' /* webpackChunkName: "pages/operation/privacy/_id/edit" */).then(m => m.default || m)
const _59961a04 = () => import('../pages/operation/notice/_id/edit.vue' /* webpackChunkName: "pages/operation/notice/_id/edit" */).then(m => m.default || m)
const _1304e824 = () => import('../pages/operation/note/_id/edit.vue' /* webpackChunkName: "pages/operation/note/_id/edit" */).then(m => m.default || m)
const _7ac61157 = () => import('../pages/operation/qna/_id/reply/edit.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/edit" */).then(m => m.default || m)
const _770e7be3 = () => import('../pages/operation/qna/_id/reply/new.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/new" */).then(m => m.default || m)
const _27b8b096 = () => import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */).then(m => m.default || m)
const _3fc60980 = () => import('../pages/stats/_period.vue' /* webpackChunkName: "pages/stats/_period" */).then(m => m.default || m)
const _46b7dcf7 = () => import('../pages/transactions/_status.vue' /* webpackChunkName: "pages/transactions/_status" */).then(m => m.default || m)
const _c9cc51cc = () => import('../pages/users/_status.vue' /* webpackChunkName: "pages/users/_status" */).then(m => m.default || m)
const _6c11783c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/reload",
			component: _00becd39,
			name: "reload"
		},
		{
			path: "/login",
			component: _d8c2320e,
			name: "login"
		},
		{
			path: "/logout",
			component: _2d4f00aa,
			name: "logout"
		},
		{
			path: "/dashboard",
			component: _f9e24eb8,
			name: "dashboard"
		},
		{
			path: "/operation/privacies",
			component: _c4f92ae4,
			name: "operation-privacies"
		},
		{
			path: "/operation/terms",
			component: _6287d16f,
			name: "operation-terms"
		},
		{
			path: "/app/app",
			component: _23d4ddc3,
			name: "app-app"
		},
		{
			path: "/operation/notices",
			component: _f4e7a2fa,
			name: "operation-notices"
		},
		{
			path: "/operation/admins",
			component: _58df20cc,
			name: "operation-admins"
		},
		{
			path: "/operation/faqs",
			component: _1cace965,
			name: "operation-faqs"
		},
		{
			path: "/stats/users",
			component: _0fdcb2a8,
			name: "stats-users"
		},
		{
			path: "/operation/notes",
			component: _53dea9a9,
			name: "operation-notes"
		},
		{
			path: "/operation/qnas",
			component: _27bd4f57,
			name: "operation-qnas"
		},
		{
			path: "/operation/privacy/new",
			component: _0b380cfe,
			name: "operation-privacy-new"
		},
		{
			path: "/operation/notice/new",
			component: _ce4bcd9e,
			name: "operation-notice-new"
		},
		{
			path: "/operation/term/new",
			component: _bfe30276,
			name: "operation-term-new"
		},
		{
			path: "/operation/faq/new",
			component: _faa449e2,
			name: "operation-faq-new"
		},
		{
			path: "/operation/admin/new",
			component: _cb29d370,
			name: "operation-admin-new"
		},
		{
			path: "/operation/note/new",
			component: _ed79f76a,
			name: "operation-note-new"
		},
		{
			path: "/users/user/:id?",
			component: _5ff09b3d,
			name: "users-user-id"
		},
		{
			path: "/operation/notice/:id?",
			component: _55bdb2e4,
			name: "operation-notice-id"
		},
		{
			path: "/operation/term/:id?/edit",
			component: _faf62c2c,
			name: "operation-term-id-edit"
		},
		{
			path: "/operation/faq/:id?/edit",
			component: _3134a840,
			name: "operation-faq-id-edit"
		},
		{
			path: "/operation/privacy/:id?/edit",
			component: _754a76a4,
			name: "operation-privacy-id-edit"
		},
		{
			path: "/operation/notice/:id?/edit",
			component: _59961a04,
			name: "operation-notice-id-edit"
		},
		{
			path: "/operation/note/:id?/edit",
			component: _1304e824,
			name: "operation-note-id-edit"
		},
		{
			path: "/operation/qna/:id?/reply/edit",
			component: _7ac61157,
			name: "operation-qna-id-reply-edit"
		},
		{
			path: "/operation/qna/:id?/reply/new",
			component: _770e7be3,
			name: "operation-qna-id-reply-new"
		},
		{
			path: "/user/:id?",
			component: _27b8b096,
			name: "user-id"
		},
		{
			path: "/stats/:period?",
			component: _3fc60980,
			name: "stats-period"
		},
		{
			path: "/transactions/:status?",
			component: _46b7dcf7,
			name: "transactions-status"
		},
		{
			path: "/users/:status?",
			component: _c9cc51cc,
			name: "users-status"
		},
		{
			path: "/",
			component: _6c11783c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
