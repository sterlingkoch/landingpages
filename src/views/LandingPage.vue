<template>
  <div class="font-family-primary">
    <div>
      <accountHeader></accountHeader >
      <top></top>
      <benefits></benefits>
      <quoter></quoter>
      <faqs></faqs>
      <steps></steps>
      <disclaimers></disclaimers>
      <component :is="accountFooter"></component>
    </div>
  </div>
</template>

<script>
  import { AccountHeader, Top, Benefits, Quoter, Faqs, Steps, Disclaimers } from '@/components'
  import { BBVAFooter, NavyFedFooter } from '@/components/footers'
  import { addScript } from '@/utils/index.js'

  export default {
    name: 'LandingPage',
    components: {
      AccountHeader,
      Top,
      Benefits,
      Quoter,
      Faqs,
      Steps,
      Disclaimers,
      BBVAFooter,
      NavyFedFooter
    },
    data () {
      return {
        accountFooter: this.$store.state.current.account + 'Footer'
      }
    },
    mounted () {
      if (this.$store.state.current.account === 'BBVA') {
        let stagingURL = '//assets.adobedtm.com/95bb966a4c61b200a089c37679aaf96e22114787/satelliteLib-f516ffe729454f82a22ff6c7b4e78587db69b27f-staging.js'
        let productionURL = '//assets.adobedtm.com/95bb966a4c61b200a089c37679aaf96e22114787/satelliteLib-f516ffe729454f82a22ff6c7b4e78587db69b27f.js'
        let headScript = (this.$store.state.current.environment === 'production') ? productionURL : stagingURL
        addScript(headScript, '', 'head')
        addScript('', '_satellite.pageBottom();', 'foot')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';
</style>
