import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _2c3737e7 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _33054c58 = () => import('../pages/reload.vue' /* webpackChunkName: "pages/reload" */).then(m => m.default || m)
const _1c7b4229 = () => import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */).then(m => m.default || m)
const _130d8d45 = () => import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */).then(m => m.default || m)
const _14424a04 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _d2e2aa00 = () => import('../pages/operation/faqs.vue' /* webpackChunkName: "pages/operation/faqs" */).then(m => m.default || m)
const _bcc1de1c = () => import('../pages/operation/qnas.vue' /* webpackChunkName: "pages/operation/qnas" */).then(m => m.default || m)
const _efdd1c5a = () => import('../pages/operation/privacies.vue' /* webpackChunkName: "pages/operation/privacies" */).then(m => m.default || m)
const _3d5230b2 = () => import('../pages/operation/admins.vue' /* webpackChunkName: "pages/operation/admins" */).then(m => m.default || m)
const _16351b6e = () => import('../pages/operation/notes.vue' /* webpackChunkName: "pages/operation/notes" */).then(m => m.default || m)
const _24de4334 = () => import('../pages/operation/terms.vue' /* webpackChunkName: "pages/operation/terms" */).then(m => m.default || m)
const _00566226 = () => import('../pages/stats/users.vue' /* webpackChunkName: "pages/stats/users" */).then(m => m.default || m)
const _0c0d4308 = () => import('../pages/operation/notices.vue' /* webpackChunkName: "pages/operation/notices" */).then(m => m.default || m)
const _143036f0 = () => import('../pages/app/app.vue' /* webpackChunkName: "pages/app/app" */).then(m => m.default || m)
const _5a36ff34 = () => import('../pages/operation/note/new.vue' /* webpackChunkName: "pages/operation/note/new" */).then(m => m.default || m)
const _092eef94 = () => import('../pages/operation/faq/new.vue' /* webpackChunkName: "pages/operation/faq/new" */).then(m => m.default || m)
const _000cfa8c = () => import('../pages/operation/notice/new.vue' /* webpackChunkName: "pages/operation/notice/new" */).then(m => m.default || m)
const _798d4386 = () => import('../pages/operation/privacy/new.vue' /* webpackChunkName: "pages/operation/privacy/new" */).then(m => m.default || m)
const _2ca00a40 = () => import('../pages/operation/term/new.vue' /* webpackChunkName: "pages/operation/term/new" */).then(m => m.default || m)
const _f60dc4e6 = () => import('../pages/operation/admin/new.vue' /* webpackChunkName: "pages/operation/admin/new" */).then(m => m.default || m)
const _4c5b4650 = () => import('../pages/users/user/_id.vue' /* webpackChunkName: "pages/users/user/_id" */).then(m => m.default || m)
const _928350ae = () => import('../pages/operation/notice/_id/index.vue' /* webpackChunkName: "pages/operation/notice/_id/index" */).then(m => m.default || m)
const _46f872a2 = () => import('../pages/operation/term/_id/edit.vue' /* webpackChunkName: "pages/operation/term/_id/edit" */).then(m => m.default || m)
const _6d03c4e9 = () => import('../pages/operation/note/_id/edit.vue' /* webpackChunkName: "pages/operation/note/_id/edit" */).then(m => m.default || m)
const _ae209afa = () => import('../pages/operation/notice/_id/edit.vue' /* webpackChunkName: "pages/operation/notice/_id/edit" */).then(m => m.default || m)
const _b210146e = () => import('../pages/operation/privacy/_id/edit.vue' /* webpackChunkName: "pages/operation/privacy/_id/edit" */).then(m => m.default || m)
const _4d65a27b = () => import('../pages/operation/faq/_id/edit.vue' /* webpackChunkName: "pages/operation/faq/_id/edit" */).then(m => m.default || m)
const _69db67b2 = () => import('../pages/operation/qna/_id/reply/edit.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/edit" */).then(m => m.default || m)
const _6dd123b0 = () => import('../pages/operation/qna/_id/reply/new.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/new" */).then(m => m.default || m)
const _cff2fb1e = () => import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */).then(m => m.default || m)
const _12282885 = () => import('../pages/stats/_period.vue' /* webpackChunkName: "pages/stats/_period" */).then(m => m.default || m)
const _a42a835c = () => import('../pages/transactions/_status.vue' /* webpackChunkName: "pages/transactions/_status" */).then(m => m.default || m)
const _6d7bf61f = () => import('../pages/users/_status.vue' /* webpackChunkName: "pages/users/_status" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _2c3737e7,
			name: "index"
		},
		{
			path: "/reload",
			component: _33054c58,
			name: "reload"
		},
		{
			path: "/dashboard",
			component: _1c7b4229,
			name: "dashboard"
		},
		{
			path: "/logout",
			component: _130d8d45,
			name: "logout"
		},
		{
			path: "/login",
			component: _14424a04,
			name: "login"
		},
		{
			path: "/operation/faqs",
			component: _d2e2aa00,
			name: "operation-faqs"
		},
		{
			path: "/operation/qnas",
			component: _bcc1de1c,
			name: "operation-qnas"
		},
		{
			path: "/operation/privacies",
			component: _efdd1c5a,
			name: "operation-privacies"
		},
		{
			path: "/operation/admins",
			component: _3d5230b2,
			name: "operation-admins"
		},
		{
			path: "/operation/notes",
			component: _16351b6e,
			name: "operation-notes"
		},
		{
			path: "/operation/terms",
			component: _24de4334,
			name: "operation-terms"
		},
		{
			path: "/stats/users",
			component: _00566226,
			name: "stats-users"
		},
		{
			path: "/operation/notices",
			component: _0c0d4308,
			name: "operation-notices"
		},
		{
			path: "/app/app",
			component: _143036f0,
			name: "app-app"
		},
		{
			path: "/operation/note/new",
			component: _5a36ff34,
			name: "operation-note-new"
		},
		{
			path: "/operation/faq/new",
			component: _092eef94,
			name: "operation-faq-new"
		},
		{
			path: "/operation/notice/new",
			component: _000cfa8c,
			name: "operation-notice-new"
		},
		{
			path: "/operation/privacy/new",
			component: _798d4386,
			name: "operation-privacy-new"
		},
		{
			path: "/operation/term/new",
			component: _2ca00a40,
			name: "operation-term-new"
		},
		{
			path: "/operation/admin/new",
			component: _f60dc4e6,
			name: "operation-admin-new"
		},
		{
			path: "/users/user/:id?",
			component: _4c5b4650,
			name: "users-user-id"
		},
		{
			path: "/operation/notice/:id?",
			component: _928350ae,
			name: "operation-notice-id"
		},
		{
			path: "/operation/term/:id?/edit",
			component: _46f872a2,
			name: "operation-term-id-edit"
		},
		{
			path: "/operation/note/:id?/edit",
			component: _6d03c4e9,
			name: "operation-note-id-edit"
		},
		{
			path: "/operation/notice/:id?/edit",
			component: _ae209afa,
			name: "operation-notice-id-edit"
		},
		{
			path: "/operation/privacy/:id?/edit",
			component: _b210146e,
			name: "operation-privacy-id-edit"
		},
		{
			path: "/operation/faq/:id?/edit",
			component: _4d65a27b,
			name: "operation-faq-id-edit"
		},
		{
			path: "/operation/qna/:id?/reply/edit",
			component: _69db67b2,
			name: "operation-qna-id-reply-edit"
		},
		{
			path: "/operation/qna/:id?/reply/new",
			component: _6dd123b0,
			name: "operation-qna-id-reply-new"
		},
		{
			path: "/user/:id?",
			component: _cff2fb1e,
			name: "user-id"
		},
		{
			path: "/stats/:period?",
			component: _12282885,
			name: "stats-period"
		},
		{
			path: "/transactions/:status?",
			component: _a42a835c,
			name: "transactions-status"
		},
		{
			path: "/users/:status?",
			component: _6d7bf61f,
			name: "users-status"
		}
    ],
    fallback: false
  })
}
