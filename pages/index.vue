<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
  >
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
      <div class="pl-8 pt-16 text-gray-600">
        <SocialIcons />
      </div>
      <div class="pl-8 pt-16">
        <p class="text-gray:900">
          {{ position }}
        </p>
        <p class="text-gray">
          {{ aboutMe }}
        </p>
        <br>
        <p>
          <b>Skills</b>
        </p>
        <p class="text-gray">
          {{ skills }}... and much more!
        </p>
        <br>
      </div>
      <Download />
    </div>
  </div>
</template>

<script>
import {
  firstName,
  lastName,
  position,
  aboutMe,
  skills
} from '@/config/profile.json'
import SocialIcons from '@/components/SocialIcons'
import Download from '@/components/Download'

export default {
  components: {
    SocialIcons,
    Download
  },
  data () {
    return {
      firstName,
      lastName,
      position,
      aboutMe,
      skills
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#photo {
  background-image: url("~assets/photo.jpg");
}
</style>
