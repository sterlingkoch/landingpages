<template>
  <div id="app" v-bind:class="theme">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '@/utils/firebase.js'
import { redirectBasedOnCounter } from '@/utils/index.js'

export default {
    computed: {
      theme: function () {
        return this.setCurrentTheme()
      }
    },
    methods: {
      setCurrentTheme: function() {
        let currentTheme = 'theme-' + this.$store.state.current.account
        document.body.classList.add(currentTheme)
        document.title = "Life Insurance from " + this.$store.getters.account.name.fullName
        return currentTheme
      }
    },
    beforeCreate: function () {
      if (this.$store.state.current.account === 'NavyFed') {
        if (!localStorage.getItem('covrLP_product')) {
          redirectBasedOnCounter(db)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import './assets/styles/main.scss';

#app {
  /*font-family: $font_primary;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
