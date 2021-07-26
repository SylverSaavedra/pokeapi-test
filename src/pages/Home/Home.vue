<template>
  <div class="home">
    <div class="home-container" v-if="!loading">
      <Container>
        <Input
          class="home-input"
          placeholder="Search"
          icon="search"
          v-model="$store.state.filter"
        />

        <List class="home-list" />
      </Container>

      <Modal v-if="showModal">
        <PokemonInfo />
      </Modal>

      <Navbar />
    </div>
    <div v-else class="home-Spinner">
      <Spinner />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";

import {
  Input,
  Button,
  Container,
  Navbar,
  Modal,
  Spinner,
} from "../../global/components/common";

import { List, PokemonInfo } from './components'

@Component({
  components: {
    Container,
    Input,
    Button,
    Navbar,
    List,
    Modal,
    PokemonInfo,
    Spinner,
  },
})
export default class Home extends Vue {
  @State loading!: boolean;
  @State showModal!: boolean;
  @Action fetchPokemonsAction!: () => void;

  mounted() {
    this.fetchPokemonsAction();
  }
}
</script>

<style lang="sass" scoped>
@import '../../global/styles/_mixins'

.home
  &-input
    margin-top: 35px

    &::placeholder
      @include use-theme(color, $colorGray-3)

  @include use-font(lato)

  &-list
    margin-top: 40px
    margin-bottom: 100px

  &-Spinner
    width: 106px
    height: 106px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>