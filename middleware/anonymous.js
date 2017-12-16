export default async ({ store, redirect, error }) => {
  await store.dispatch('getMe') // TODO: Move into `nuxtServerInit()` after issue #30 is fixed.

  if (store.state.me) {
    if (store.state.me.admin) {
      redirect('/dashboard')
    } else {
      error({
        message: '접근 권한이 없습니다.',
        statusCode: 401,
      })
    }
  }
}
