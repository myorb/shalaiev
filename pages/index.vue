<template>
  <div class="flex items-center">
    <div class="w-490px flex-grow-0">
      <div
        id="photo"
        class="bg-center bg-white bg-cover bg-no-repeat pb-150 shadow"
      />
    </div>
    <div class="flex-1 pl-8 pt-16">
      <h1
        class="text-black uppercase font-extrabold text-4xl leading-none mb-5"
      >
        Full Stack Web
        <div class="relative">
          <div
            class="absolute w-120px right-100 top-50 border-blue border-b-5 line-transform"
          />
          <span class="text-blue">Engeneer</span>
        </div>
      </h1>
      <p class="text-gray:900">
        {{ position }}
      </p>
      <p class="text-gray">
        {{ aboutMe }}
      </p>
      <br>
      <div class="flex flex-row bg-gray-200">
        <div class="text-center text-white bg-blue px-4 py-4 m-2">
          PDF
        </div>
        <div class="text-center text-white bg-blue px-4 py-4 m-2">
          DOC
        </div>
        <div class="text-center text-white bg-blue px-4 py-4 m-2">
          JSON
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firstName, lastName, position, aboutMe } from '@/docs/profile.json'

export default {
  data () {
    return {
      firstName,
      lastName,
      position,
      aboutMe
    }
  }
}
</script>

<style scoped>
.line-transform {
  transform: translate(-25px, -50%);
}
#photo {
  background-image: url('/photo.jpg');
}
</style>
