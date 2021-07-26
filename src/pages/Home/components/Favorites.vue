<template>
  <label class="favorites">
    <input type="checkbox" class="favorites-input" v-model="model" />
    <img
      class="favorites-unchecked"
      src="../../../assets/icons/start-empty.png"
      alt="Estrella no seleccionado"
      v-if="!model"
    />
    <img
      class="favorites-checked"
      src="../../../assets/icons/start-check.png"
      alt="Estrella seleccionado"
      v-else
    />
  </label>
</template>

<script lang="ts">
import { Vue, Component, VModel } from "vue-property-decorator";

import Button from "../../../global/components/common/Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Favorites extends Vue {
  @VModel() readonly model?: boolean;
}
</script>

<style lang="sass" scoped>
@import '../../../global/styles/_mixins'

.favorites
  width: 44px
  height: 44px
  border-radius: 100%
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  @include use-theme(background-color, $colorWhite-2)

  &:hover
    @include use-theme(background-color, $colorWhite-1)

    &-unchecked,
    &-checked
      width: 26px
      height: 26px

  &-input
    display: none
</style>