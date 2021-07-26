<template>
  <div class="item" @click="handleClickItem">
    <span class="item-title">
      {{ pokemonInfo.name }}
    </span>
    <Favorites v-model="pokemonInfo.favorite" />
  </div>
</template>

<script lang="ts">
import { Mutation, Action } from "vuex-class";
import { Vue, Component, Prop } from "vue-property-decorator";

import { PokemonGeneralInfo } from "../../../interfaces/poke-response";
import Favorites from "./Favorites.vue";

@Component({
  components: {
    Favorites,
  },
})
export default class Item extends Vue {
  @Prop() readonly pokemonInfo!: PokemonGeneralInfo;
  @Mutation toggleModal!: () => void;
  @Action setCurrentPokemonAction!: (pokemon: PokemonGeneralInfo) => void;

  handleClickItem() {
    this.toggleModal();
    this.setCurrentPokemonAction(this.pokemonInfo);
  }
}
</script>

<style lang="sass" scoped>
@import '../../../global/styles/_mixins'

.item
  width: 100%
  height: 60px
  border-radius: 5px
  display: flex
  align-items: center
  justify-content: space-between
  padding-left: 20px
  padding-right: 10px

  @include use-theme(background-color, $colorNeutral)

  &-title
    font-weight: 500
    font-size: 22px
    text-transform: capitalize

    @include use-font(lato)
    @include use-theme(color, $colorGray-1)
</style>