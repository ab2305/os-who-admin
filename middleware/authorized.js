export default async ({ store, error }) => {
	await store.dispatch('getMe') // TODO: Move into `nuxtServerInit()` after issue #30 is fixed.

	if (!(store.state.me && store.state.me.admin)) {
		error({
			message: '접근 권한이 없습니다.',
			statusCode: 401,
		})
	}
}
