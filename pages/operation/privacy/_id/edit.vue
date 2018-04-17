<template>
  <my-privacy-editor :form="form" :isEdit="true"></my-privacy-editor>
</template>

<script>
import PrivacyEditor from '~/components/PrivacyEditor'

export default {
	layout: 'authorized',
	async asyncData({ app, route }) {
		const { title, body } = await app.$axios.$get(`/other-notices/${route.params.id}`, {
			params: { category: 'privacy' },
		})

		return {
			form: { title, body },
		}
	},
	components: {
		myPrivacyEditor: PrivacyEditor,
	},
}
</script>
