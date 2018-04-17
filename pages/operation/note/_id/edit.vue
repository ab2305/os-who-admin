<template>
  <my-note-viewer :form="form"></my-note-viewer>
</template>

<script>
import NoteViewer from '~/components/NoteViewer'

export default {
	layout: 'authorized',
	async asyncData({ app, route }) {
		const {
			title, body, isTop, userId, user,
		} = await app.$axios.$get(`/notes/${route.params.id}`)

		const name = `${user.name}(${user.email})`

		return {
			form: {
				title, body, isTop, userId, name,
			},
		}
	},
	components: {
		myNoteViewer: NoteViewer,
	},
}
</script>
