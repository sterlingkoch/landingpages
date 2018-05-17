<template>
    <div class="account-header background-color-primary1">
      <div class="text-left">
          <div class="container pb-2 pt-2">
            <div 
              class="account-image img-fluid"
              v-bind:style="{ 
                backgroundImage: 'url(' + getLogoUrl() + ')',
                width: account.logo.width,
                height: account.logo.height
              }"
              ></div>
          </div>
      </div>
      <div
        v-if="isNavyFed" 
        class="navbar navbar-expand-md justify-content-center background-color-primary3 text-white">
        <div class="row">
          <div class="col-md-auto">
            <span>Are you currently an active duty military member?</span>
          </div>
          <div class="col-md-auto">
            <a href="https://navymutual.org/">
              <button class="background-color-primary3 border-white rounded" @click="gotomilitary">
                <span class="font-weight-bold text-white small p-2">Click here</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      account: function () {
        return this.$store.getters.account
      },
      isNavyFed: function () {
        let isNF = (this.$store.state.current.account === "NavyFed") ? true : false
        return isNF
      }
    },
    methods: {
      getLogoUrl (pic) {
        let logo = this.account.logo.img
        return require('../assets/account_images/' + logo)
      },
      gotomilitary: function () {
        // https://navymutual.org/NavyFederal.aspx?utm_source=NFFG&utm_medium=Referral&utm_content=NFFG_Active&utm_campaign=Navy%20Federal
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  .account-image { 
    background-repeat: no-repeat;
    background-size: contain
  }

</style>