<template>
  <div class="bg-gray-300">
    <top-nav />
    <Nuxt />
  </div>
</template>

<script>
import TopNav from '@/components/Nav'

export default {
  components: {
    TopNav
  },

  computed: {
    expandSidebar () {
      return ['index', 'contact'].includes(this.$route.name)
    }
  }
}
</script>
