<template>
  <div class="welcome">
    <Container class="welcome-container">
      <img
        class="welcome-image animate__animated animate__bounceIn"
        src="@/assets/images/pikachu.png"
        alt="Isotipo"
      />
      <span class="welcome-greeting">{{ welcome.title }}</span>
      <span class="welcome-description">
        {{ welcome.description }}
      </span>

      <Button title="Get started" class="button-started" :onClick="goHome" />
    </Container>
  </div>
</template>

<script lang="ts">
import router from "../../router";

import { welcome } from '../../shared/constants'

import { Container } from "../../global/components/common";
import { Button } from "../../global/components/common";

export default {
  name: 'Welcome',
  components: {
    Container,
    Button,
  },
  data() {
    return {
      welcome
    }
  },
  methods: {
    goHome() {
      router.push('home')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../global/styles/_mixins'
@import '../../global/styles/_variables'

.welcome
  position: relative
  width: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

  padding-left: 24px
  padding-right: 24px

  @include use-font(lato)

  &-container
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  &-image
    width: 325px

  &-greeting
    font-size: 26px
    font-weight: bold
    margin-top: 60px

    @include use-theme(color, $colorGray-1)
    @include use-media(max, $breakpoint-xs)
      margin-top: 30px

  &-description
    font-size: 18px
    font-weight: 500
    margin-top: 30px
    text-align: center

  .button-started
    margin-top: 50px
</style>