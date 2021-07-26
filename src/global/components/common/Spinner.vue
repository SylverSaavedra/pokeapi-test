<template>
  <div class="animate__infinite">
    <img src="../../../assets/images/pokebola.png" alt="loading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Spinner extends Vue {}
</script>

<style lang="sass" scoped>

.animate__infinite
  animation: spin 3s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

</style>