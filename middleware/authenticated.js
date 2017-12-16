export default async ({ store, error }) => {
  await store.dispatch('getMe') // TODO: Move into `nuxtServerInit()` after issue #30 is fixed.

  if (!store.state.me) {
    error({
      message: '로그인이 필요합니다.',
      statusCode: 403,
    })
  }
}
