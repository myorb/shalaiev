<template>
  <nuxt-link to="/">
    <div
      class="logo relative inline-block uppercase text-white font-extrabold leading-none inline-block"
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

<style lang="scss" scoped>
strong {
  font-size: 12px;
}

small {
  font-size: 16px;
}

.logo {
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.25s, transform 0.25s;
    transform: translateY(-50%);

    font-size: 32px;
    line-height: 1;
  }

  &::before {
    content: '<';
    right: 100%;
  }

  &::after {
    content: '/>';
    left: 100%;
  }

  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 0.3;
    }

    &:before {
      transform: translate(-10px, -50%);
    }

    &:after {
      transform: translate(10px, -50%);
    }
  }
}
</style>
