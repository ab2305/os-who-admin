<template>
  <my-notice-editor :form="form" :isEdit="true"></my-notice-editor>
</template>

<script>
import NoticeEditor from '~/components/NoticeEditor'

export default {
	layout: 'authorized',
	async asyncData({ app, route }) {
		const { title, body, isTop } = await app.$axios.$get(`/notices/${route.params.id}`)

		return {
			form: { title, body, isTop },
		}
	},
	components: {
		myNoticeEditor: NoticeEditor,
	},
}
</script>
