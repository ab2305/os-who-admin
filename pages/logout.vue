<template>
  <div>
    logout
  </div>
</template>

<script>
export default {
  layout: 'authenticated',
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      try {
        await vm.$store.dispatch('logout')

        vm.$router.replace('/login')

        vm.$notify.success({
          title: '로그아웃',
          message: '로그아웃 되었습니다.',
        })
      } catch (error) {
        this.$notify.error({
          title: '로그아웃 실패',
          message: `status: ${error.response.status}`,
        })
      }
    })
  },
}
</script>
