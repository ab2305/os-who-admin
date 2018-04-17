<template>
  <nav>
    <el-menu mode="horizontal" :router="true" :default-active="$route.path">
      <template v-for="page in pages">
        <el-menu-item
          :key="page.path" v-if="!page.children"
          :index="page.path"
          :float="page.float">
          {{ page.name }}
        </el-menu-item>

        <el-submenu
          :key="page.path" v-else
          :index="page.path"
          :float="page.float">
          <template slot="title">{{ page.name }}</template>
          <el-menu-item
            v-for="child in page.children" :key="child.path"
            :index="child.path">
              {{ child.name }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </nav>
</template>

<script>
export default {
	data() {
		return {
			pages: [
				{ name: '홈', path: '/dashboard' },
				{
					name: '결제관리',
					path: '/transactions',
					children: [
						{ name: '결제완료', path: '/transactions/payments' },
						{ name: '환불완료', path: '/transactions/refunds' },
					],
				},
				{
					name: '회원관리',
					path: '/users',
					children: [
						{ name: '회원목록', path: '/users/active' },
						{ name: '탈퇴회원목록', path: '/users/deleted' },
					],
				},
				{
					name: '매출통계',
					path: '/stats',
					children: [
						{ name: '일간 매출통계', path: '/stats/daily' },
						{ name: '월간 매출통계', path: '/stats/monthly' },
						{ name: '회원별 매출통계', path: '/stats/users' },
					],
				},
				{
					name: '운영관리',
					path: '/operation',
					children: [
						{ name: '뉴스&공지사항', path: '/operation/notices' },
						{ name: '관리자 메세지', path: '/operation/notes' },
						{ name: 'FAQ', path: '/operation/faqs' },
						{ name: '1:1 문의', path: '/operation/qnas' },
						{ name: '이용약관', path: '/operation/terms' },
						{ name: '개인정보취급방침', path: '/operation/privacies' },
						{ name: '관리자 정보', path: '/operation/admins' },
					],
				},
				{
					name: `${this.$store.state.me.nickname} 님`,
					path: '/me',
					float: 'right',
					children: [
						{ name: '로그아웃', path: '/logout' },
					],
				},
			],
		}
	},
}
</script>
