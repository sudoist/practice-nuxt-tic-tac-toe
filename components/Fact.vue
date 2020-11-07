<template>
  <div>
    <p>{{ randomFact }}</p>
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
