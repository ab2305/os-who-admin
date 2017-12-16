<template>
  <div>
    <header>
      <my-nav></my-nav>
    </header>

    <div class="content">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  middleware: ['authenticated', 'authorized'],
  components: {
    myNav: Nav,
  },
}
</script>
