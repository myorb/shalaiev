<template>
  <div class="bg-gray-300 text-gray-900 px-8 py-10 pb-40">
    <div class="text-center w-full">
      <div class="mx-auto w-56">
        <SocialIcons />
      </div>
    </div>
    <div
      class="max-w-screen-xl mt-12 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg"
    >
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div class="text-gray-700 mt-8">
            Hate forms? Send me an <span class="underline">
              <a :href="'mailto:' + email">email</a>
            </span> instead.
          </div>
        </div>
        <div class="mt-8 text-center">
          <img src="/contact.svg">
        </div>
      </div>
      <div class="">
        <div>
          <span class="uppercase text-sm text-gray-600 font-bold">You Name</span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          >
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">You Email</span>
          <input
            class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          >
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-gray-600 font-bold">You Message</span>
          <textarea
            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mt-8">
          <button
            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from '@/components/SocialIcons'

import { email } from '@/config/profile.json'

export default {
  components: {
    SocialIcons
  },
  data () {
    return {
      // phone,
      email
      // form: {
      //   name: '',
      //   email: '',
      //   message: ''
      // }
    }
  }

//   methods: {
//     sendMail () {
//       alert('ok')
//     }
//   }
}
</script>
