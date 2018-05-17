<template>
	<div class="jumbotron background-color-white2">
      <div class="container">
        <div>
            <h2>{{content.benefitsHeader}}</h2>
            <p>{{account.name.fullName}} is pleased to offer this innovative life insurance plan - it's <strong>a fast, simple, and convenient way to protect the ones you love!</strong>  {{content.benefitsProcess}} - <strong>it's that easy!</strong></p>
        </div>
        <hr class="mb-3 mb-md-5 mt-4 mt-md-5">
        <div>
            <h1 class="mb-3 mb-md-4">Plan Benefits</h1>
            <div class="row text-left">
                <div class="col-lg">
                  <div class="h5 font-weight-bold">Great coverage at an affordable price</div>
                  <ul>
                    <li>Options ranging from ${{ parseNumber(product.minFace) }} to ${{ parseNumber(product.maxFace) }}</li>
                    <li>Guaranteed level rate remains the same for the policy's duration</li>
                    <li>As little as ${{product.minCost}} a month for ${{ parseNumber(product.maxFace) }} of life insurance<sup>1</sup></li>
                  </ul>
                </div>
                <div class="col-lg">
                  <div class="h5 font-weight-bold">Fast and simple application process</div>
                  <ul>
                    <li><span v-html="content.benefitsCompletion"></span></li>
                    <li><span v-html="content.benefitsMedical"></span></li>
                    <li>No one is excluded from the process</li>
                  </ul>
                </div>
                <div class="col-lg">
                  <div class="h5 font-weight-bold">Flexible coverage periods</div>
                  <ul>
                    <li>Coverage periods (also known as "Terms") available for {{coveragePeriods()}} years</li>
                    <li>The coverage you need to protect your loved ones, when they need it most</li>
                  </ul>
                </div>
            </div>
        </div>
        <div class="mt-5">
          <get-quote-btn v-bind:submit-form="isBBVA"></get-quote-btn>
          <!--button @click="goToQuote">Get Quote</button-->
        </div>
      </div>
    </div>
</template>

<script>
  import GetQuoteBtn from './common/GetQuoteBtn'

  export default {
    components: {
      GetQuoteBtn
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
        let bbva = (this.$store.state.current.account === "BBVA") ? "true" : "false"
        return bbva
      }
    },
    methods: {
      goToQuote: function () {
        let target = document.getElementById('quoter')
        this.$SmoothScroll(target, 300)
      },
      parseNumber (num) {
        let number = parseInt(num)
        return number.toLocaleString('en')
      },
      coveragePeriods () {
        let terms = this.product.term.available
        let s = ''
        terms.forEach(function (term) {
          s += term.term + ', '
        })
        s = s.slice(0, -2)
        let finalSpace = s.lastIndexOf(' ')
        return s.slice(0, finalSpace) + ' or ' + s.slice(finalSpace)
      }
    }
  }
</script>

<!--style scoped lang="sass">
</style-->