import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _fa48dcbc = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _64643779 = () => import('../pages/reload.vue' /* webpackChunkName: "pages/reload" */).then(m => m.default || m)
const _71964664 = () => import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */).then(m => m.default || m)
const _de172a2c = () => import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */).then(m => m.default || m)
const _4c8334b9 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _726413a5 = () => import('../pages/operation/faqs.vue' /* webpackChunkName: "pages/operation/faqs" */).then(m => m.default || m)
const _7d747997 = () => import('../pages/operation/qnas.vue' /* webpackChunkName: "pages/operation/qnas" */).then(m => m.default || m)
const _5aeca84e = () => import('../pages/operation/privacies.vue' /* webpackChunkName: "pages/operation/privacies" */).then(m => m.default || m)
const _1d74bb0c = () => import('../pages/operation/admins.vue' /* webpackChunkName: "pages/operation/admins" */).then(m => m.default || m)
const _95e6712e = () => import('../pages/operation/notes.vue' /* webpackChunkName: "pages/operation/notes" */).then(m => m.default || m)
const _789421a2 = () => import('../pages/operation/terms.vue' /* webpackChunkName: "pages/operation/terms" */).then(m => m.default || m)
const _7a3fb068 = () => import('../pages/stats/users.vue' /* webpackChunkName: "pages/stats/users" */).then(m => m.default || m)
const _53a9dc43 = () => import('../pages/operation/notices.vue' /* webpackChunkName: "pages/operation/notices" */).then(m => m.default || m)
const _34dcbb83 = () => import('../pages/app/app.vue' /* webpackChunkName: "pages/app/app" */).then(m => m.default || m)
const _7edb0e8b = () => import('../pages/operation/note/new.vue' /* webpackChunkName: "pages/operation/note/new" */).then(m => m.default || m)
const _50cb88cf = () => import('../pages/operation/faq/new.vue' /* webpackChunkName: "pages/operation/faq/new" */).then(m => m.default || m)
const _eeced91e = () => import('../pages/operation/notice/new.vue' /* webpackChunkName: "pages/operation/notice/new" */).then(m => m.default || m)
const _0274c741 = () => import('../pages/operation/privacy/new.vue' /* webpackChunkName: "pages/operation/privacy/new" */).then(m => m.default || m)
const _d4b2edf6 = () => import('../pages/operation/term/new.vue' /* webpackChunkName: "pages/operation/term/new" */).then(m => m.default || m)
const _57d45408 = () => import('../pages/operation/admin/new.vue' /* webpackChunkName: "pages/operation/admin/new" */).then(m => m.default || m)
const _94b07506 = () => import('../pages/users/user/_id.vue' /* webpackChunkName: "pages/users/user/_id" */).then(m => m.default || m)
const _702af0ce = () => import('../pages/operation/notice/_id/index.vue' /* webpackChunkName: "pages/operation/notice/_id/index" */).then(m => m.default || m)
const _6ccd70ac = () => import('../pages/operation/term/_id/edit.vue' /* webpackChunkName: "pages/operation/term/_id/edit" */).then(m => m.default || m)
const _5a1945e4 = () => import('../pages/operation/note/_id/edit.vue' /* webpackChunkName: "pages/operation/note/_id/edit" */).then(m => m.default || m)
const _b2ae3e84 = () => import('../pages/operation/notice/_id/edit.vue' /* webpackChunkName: "pages/operation/notice/_id/edit" */).then(m => m.default || m)
const _60648eee = () => import('../pages/operation/privacy/_id/edit.vue' /* webpackChunkName: "pages/operation/privacy/_id/edit" */).then(m => m.default || m)
const _3d22d3c0 = () => import('../pages/operation/faq/_id/edit.vue' /* webpackChunkName: "pages/operation/faq/_id/edit" */).then(m => m.default || m)
const _7a864b97 = () => import('../pages/operation/qna/_id/reply/edit.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/edit" */).then(m => m.default || m)
const _3d3df9a3 = () => import('../pages/operation/qna/_id/reply/new.vue' /* webpackChunkName: "pages/operation/qna/_id/reply/new" */).then(m => m.default || m)
const _37ac8ad6 = () => import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */).then(m => m.default || m)
const _c53ed180 = () => import('../pages/stats/_period.vue' /* webpackChunkName: "pages/stats/_period" */).then(m => m.default || m)
const _36765737 = () => import('../pages/transactions/_status.vue' /* webpackChunkName: "pages/transactions/_status" */).then(m => m.default || m)
const _0e97364c = () => import('../pages/users/_status.vue' /* webpackChunkName: "pages/users/_status" */).then(m => m.default || m)



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
			component: _fa48dcbc,
			name: "index"
		},
		{
			path: "/reload",
			component: _64643779,
			name: "reload"
		},
		{
			path: "/dashboard",
			component: _71964664,
			name: "dashboard"
		},
		{
			path: "/logout",
			component: _de172a2c,
			name: "logout"
		},
		{
			path: "/login",
			component: _4c8334b9,
			name: "login"
		},
		{
			path: "/operation/faqs",
			component: _726413a5,
			name: "operation-faqs"
		},
		{
			path: "/operation/qnas",
			component: _7d747997,
			name: "operation-qnas"
		},
		{
			path: "/operation/privacies",
			component: _5aeca84e,
			name: "operation-privacies"
		},
		{
			path: "/operation/admins",
			component: _1d74bb0c,
			name: "operation-admins"
		},
		{
			path: "/operation/notes",
			component: _95e6712e,
			name: "operation-notes"
		},
		{
			path: "/operation/terms",
			component: _789421a2,
			name: "operation-terms"
		},
		{
			path: "/stats/users",
			component: _7a3fb068,
			name: "stats-users"
		},
		{
			path: "/operation/notices",
			component: _53a9dc43,
			name: "operation-notices"
		},
		{
			path: "/app/app",
			component: _34dcbb83,
			name: "app-app"
		},
		{
			path: "/operation/note/new",
			component: _7edb0e8b,
			name: "operation-note-new"
		},
		{
			path: "/operation/faq/new",
			component: _50cb88cf,
			name: "operation-faq-new"
		},
		{
			path: "/operation/notice/new",
			component: _eeced91e,
			name: "operation-notice-new"
		},
		{
			path: "/operation/privacy/new",
			component: _0274c741,
			name: "operation-privacy-new"
		},
		{
			path: "/operation/term/new",
			component: _d4b2edf6,
			name: "operation-term-new"
		},
		{
			path: "/operation/admin/new",
			component: _57d45408,
			name: "operation-admin-new"
		},
		{
			path: "/users/user/:id?",
			component: _94b07506,
			name: "users-user-id"
		},
		{
			path: "/operation/notice/:id?",
			component: _702af0ce,
			name: "operation-notice-id"
		},
		{
			path: "/operation/term/:id?/edit",
			component: _6ccd70ac,
			name: "operation-term-id-edit"
		},
		{
			path: "/operation/note/:id?/edit",
			component: _5a1945e4,
			name: "operation-note-id-edit"
		},
		{
			path: "/operation/notice/:id?/edit",
			component: _b2ae3e84,
			name: "operation-notice-id-edit"
		},
		{
			path: "/operation/privacy/:id?/edit",
			component: _60648eee,
			name: "operation-privacy-id-edit"
		},
		{
			path: "/operation/faq/:id?/edit",
			component: _3d22d3c0,
			name: "operation-faq-id-edit"
		},
		{
			path: "/operation/qna/:id?/reply/edit",
			component: _7a864b97,
			name: "operation-qna-id-reply-edit"
		},
		{
			path: "/operation/qna/:id?/reply/new",
			component: _3d3df9a3,
			name: "operation-qna-id-reply-new"
		},
		{
			path: "/user/:id?",
			component: _37ac8ad6,
			name: "user-id"
		},
		{
			path: "/stats/:period?",
			component: _c53ed180,
			name: "stats-period"
		},
		{
			path: "/transactions/:status?",
			component: _36765737,
			name: "transactions-status"
		},
		{
			path: "/users/:status?",
			component: _0e97364c,
			name: "users-status"
		}
    ],
    fallback: false
  })
}
