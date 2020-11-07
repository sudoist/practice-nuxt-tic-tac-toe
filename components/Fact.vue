<template>
  <div>
    <p class="title">{{ randomFact }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    randomFact() {
      return this.$store.getters.getFact
    },
  },
}
</script>

<style scoped>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
