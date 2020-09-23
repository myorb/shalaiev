<template>
  <nav class="px-6 py-3 bg-indigo-700">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div class="flex items-center mx-3">
          <logo />
        </div>

        <div class="flex md:hidden">
          <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu" @click="isOpen = !isOpen">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="md:flex items-center" :class="isOpen ? 'block' : 'hidden'">
        <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
          <nuxt-link class="my-1 text-sm text-gray-200 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" to="/">
            Home
          </nuxt-link>
          <nuxt-link class="my-1 text-sm text-gray-200 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" to="/contact">
            Contact
          </nuxt-link>
          <nuxt-link class="my-1 text-sm text-gray-200 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" to="/card">
            Card
          </nuxt-link>
          <nuxt-link class="my-1 text-sm text-gray-200 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0" to="/test">
            Test
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from '@/components/Logo'

export default {
  components: {
    logo
  },
  data () {
    return {
      isOpen: false
    }
  },
  watch: {
    $route () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  font-weight: 800;
  color:black;
}
</style>
