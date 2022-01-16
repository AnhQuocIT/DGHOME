<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
</script>
<template>
  <Header></Header>
  <div class="content-wrapper">
    <Menu></Menu>
    <router-view />
  </div>
</template>

<style lang="sass">
@import "./assets/css/common"
@import "./assets/css/constants"
@import "./assets/fonts/fonts"
#app
  font-family: Inter
  height: 100%
  background: $color-white
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $color-black-1
  .content-wrapper
    display: flex
    flex-direction: row
    overflow-y: auto
    align-items: flex-start
    height: calc(100% - 80px)
    border: 1px solid $color-gray-5
</style>
