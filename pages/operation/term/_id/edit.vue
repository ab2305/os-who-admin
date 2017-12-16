<template>
  <my-term-editor :form="form" :isEdit="true"></my-term-editor>
</template>

<script>
import TermEditor from '~/components/TermEditor'

export default {
  layout: 'authorized',
  async asyncData({ app, route }) {
    const { title, body } = await app.$axios.$get(`/other-notices/${route.params.id}`, {
      params: { category: 'term' },
    })

    return {
      form: { title, body },
    }
  },
  components: {
    myTermEditor: TermEditor,
  },
}
</script>
