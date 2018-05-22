<template>
  <div class="font-family-primary">
    <div>
      <accountHeader></accountHeader >
      <component :is="productTop"></component>
      <benefitsMain></benefitsMain>
      <component :is="productQuoter"></component>
      <component :is="productFAQ"></component>
      <steps></steps>
      <component :is="productDisclaimers"></component>
      <component :is="accountFooter"></component>
    </div>
  </div>
</template>

<script>
  import { AccountHeader, BenefitsMain, Steps } from '@/components'
  import { BBVAFooter, NavyFedFooter } from '@/components/footers'
  import { Top, VantisTop } from '@/components/tops'
  import { Quoter, QuoterVantis } from '@/components/quoters'
  import { FAQ, FAQVantis } from '@/components/faqs'
  import { Disclaimer, DisclaimerVantis } from '@/components/disclaimers'
  import { addScript } from '@/utils/index.js'

  export default {
    name: 'LandingPage',
    components: {
      AccountHeader,
      BenefitsMain,
      Quoter,
      QuoterVantis,
      FAQ,
      FAQVantis,
      Steps,
      Top,
      VantisTop,
      BBVAFooter,
      NavyFedFooter,
      Disclaimer,
      DisclaimerVantis
    },
    data () {
      return {
        accountFooter: this.$store.state.current.account + 'Footer',
        productTop: (this.$store.state.current.product === 'Vantis') ? 'VantisTop' : 'Top',
        productQuoter: (this.$store.state.current.product === 'Vantis') ? 'QuoterVantis' : 'Quoter',
        productFAQ: (this.$store.state.current.product === 'Vantis') ? 'FAQVantis' : 'FAQ',
        productDisclaimers: (this.$store.state.current.product === 'Vantis') ? 'DisclaimerVantis' : 'Disclaimer',
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
