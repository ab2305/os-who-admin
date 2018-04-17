<template>
  <div>
    <div class="content">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
export default {
middleware: ["authenticated"],
}
</script>
