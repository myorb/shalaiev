<template>
  <nuxt-link to="/">
    <div
      class="
        logo
        px-2
        relative
        inline-block
        uppercase
        text-white
        font-extrabold
        leading-none
        inline-block
      "
    >
      <strong class="block">{{ firstName }}</strong>
      <small class="block leading-normal">{{ lastName }}</small>
    </div>
  </nuxt-link>
</template>

<script>
import { lastName, firstName } from '@/config/profile.json'

export default {
  data () {
    return {
      lastName,
      firstName
    }
  }
}
</script>

<style scoped>
strong {
  font-size: 12px;
}

small {
  font-size: 16px;
}

.logo::before,
.logo::after {
  position: absolute;
  top: 36%;
  font-weight: 600;
  opacity: 0.3;
  transition: opacity 0.25s, transform 0.25s;
  transform: translateY(-50%);
  font-size: 32px;
  line-height: 1;
}

.logo::before {
  content: "<";
  right: 100%;
}

.logo::after {
  content: "/>";
  left: 100%;
}

.logo:hover:before,
.logo:focus:before,
.logo:hover:after,
.logo:focus:after {
  opacity: 0.9;
}

.logo:hover:before,
.logo:focus:before {
  transform: translate(-10px, -50%);
}

.logo:hover:after,
.logo:focus:after {
  transform: translate(10px, -50%);
}
</style>
