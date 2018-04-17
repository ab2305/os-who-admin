<template>
  <my-faq-editor :form="form" :isEdit="true"></my-faq-editor>
</template>

<script>
import FaqEditor from "~/components/FaqEditor"

export default {
layout: "authorized",
async asyncData({ app, route }) {
const { title, body } = await app.$axios.$get(`/faqs/${route.params.id}`)

return {
form: { title, body },
}
},
components: {
myFaqEditor: FaqEditor,
},
}
</script>
