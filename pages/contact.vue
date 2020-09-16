<template>
  <div class="flex">
    <div class="w-490px flex-grow-0">
      <form class="bg-black shadow p-10 mb-10" @submit.prevent="sendMail">
        <p class="text-white text-xl font-bold mb-10">
          Send a message
        </p>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Your Name
          </label>
          <input
            id="username"
            v-model="form.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Name"
          >
        </div>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="email">
            Your Email
          </label>
          <input
            id="email"
            v-model="form.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Your Email"
          >
        </div>

        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="message">
            Your Message
          </label>
          <input
            id="message"
            v-model="form.message"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="I`m want contact about ..."
          >
        </div>
        <br>

        <button
          class="uppercase text-white font-black tracking-widest w-full text-center p-3 rounded-full bg-blue"
        >
          Send
        </button>
      </form>

      <google-maps :lat="48.15" :lng="11.582" :zoom="9" class="h-300px" />
    </div>

    <div class="flex-1 pl-8">
      <div class="max-w-3/5">
        <h1 class="uppercase text-4xl font-black leading-none mb-10">
          Contact me
        </h1>

        <div class="p-6 shadow-lighter mb-8">
          <p class="font-bold mb-2">
            Email
          </p>
          <a :href="'mailto:' + email">{{ email }}</a>
        </div>

        <div class="p-6 mb-8">
          <p class="font-bold mb-2">
            Phone
          </p>
          <a :href="'tel:' + phone">{{ phone }}</a>
        </div>

        <div class="p-6">
          <p class="font-bold mb-2">
            Addresss
          </p>
          <p>München, Germany</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps'

import { phone, email } from '@/docs/profile.json'

export default {
  components: {
    GoogleMaps
  },

  data () {
    return {
      phone,
      email,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },

  methods: {
    sendMail () {
      alert('ok')
    }
  }
}
</script>
