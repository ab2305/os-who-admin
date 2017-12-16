<template>
  <div>
    notice {{ id }}
  </div>
</template>

<script>
export default {
  layout: 'authorized',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
