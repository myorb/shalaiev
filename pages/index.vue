<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
    <div class="w-full h-64 lg:h-screen">
      <div
        id="photo"
        class="bg-center bg-white bg-cover bg-no-repeat pb-150 shadow w-full h-full"
      />
    </div>
    <div class="flex-1">
      <h1
        class="text-black uppercase font-extrabold text-4xl leading-none mb-5 pl-8 pt-16"
      >
        Full Stack Web
        <div class="relative">
          <div
            class=" w-120px right-100 top-50 border-blue border-b-5 line-transform"
          />
          <span class="text-blue">Engeneer</span>
        </div>
      </h1>
      <div class="pl-8 pt-16">
        <p class="text-gray:900">
          {{ position }}
        </p>
        <p class="text-gray">
          {{ aboutMe }}
        </p>
        <br>
        <div class="flex">
          <h3>Download curriculum vitae</h3>
        </div>
        <div class="flex flex-wrap">
          <div class="m-4">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" @click="downloadPdf">
              PDF
            </button>
          </div>
          <div class="m-4">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              DOC
            </button>
          </div>
          <div class="m-4">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" @click="downloadJson">
              JSON
            </button>
          </div>
        </div>
      </div>

      <div class="flex">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import { firstName, lastName, position, aboutMe } from '@/config/profile.json'
import ContactForm from '@/components/ContactForm'
import cvData from '@/config/cv.json'
import JsPDF from 'jspdf'

export default {
  components: {
    ContactForm
  },
  data () {
    return {
      firstName,
      lastName,
      position,
      aboutMe
    }
  },
  methods: {
    downloadPdf () {
      const doc = new JsPDF('p', 'mm', 'a4')
      doc.text('Hello World', 10, 10)
      doc.save('OlexanderShalaiev' + new Date().toISOString().slice(0, 10) + '.pdf')
    },
    downloadJson () {
      const data = JSON.stringify(cvData)
      const blob = new Blob([data], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = 'test.json'
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
    }
  }
}
</script>

<style scoped>
#photo {
  background-image: url("~assets/photo.jpg");
}
</style>
