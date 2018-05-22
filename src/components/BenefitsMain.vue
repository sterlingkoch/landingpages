<template>
	<div class="jumbotron background-color-white2">
      <div class="container">
        <benefits-title-area></benefits-title-area>
        <hr class="mb-3 mb-md-5 mt-4 mt-md-5">
        <div>
            <h1 class="mb-3 mb-md-4">Plan Benefits</h1>
            <benefits-highlights></benefits-highlights>
        </div>
        <div class="mt-5">
          <get-quote-btn v-bind:submit-form="isBBVA"></get-quote-btn>
          <!--button @click="goToQuote">Get Quote</button-->
        </div>
      </div>
    </div>
</template>

<script>
  import GetQuoteBtn from '@/components/common/GetQuoteBtn'
  import { BenefitsTitleArea, BenefitsHighlights } from '@/components/benefits'

  export default {
    components: {
      GetQuoteBtn,
      BenefitsTitleArea,
      BenefitsHighlights
    },
    computed: {
      account: function () {
        return this.$store.getters.account
      },
      product: function () {
        return this.$store.getters.product
      },
      content: function () {
        return this.$store.getters.product.content
      },
      isBBVA: function () {
        let bbva = (this.$store.state.current.account === "BBVA") ? true : false
        return bbva
      }
    },
    methods: {
      goToQuote: function () {
        let target = document.getElementById('quoter')
        this.$SmoothScroll(target, 300)
      }
    }
  }
</script>
