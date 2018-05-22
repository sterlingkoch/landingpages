<template>
  <div>
    <div class="row text-left" v-if="isVantis">
      <div class="col-lg">
        <div class="h5 font-weight-bold">Great coverage at an affordable price</div>
        <ul>
          <li>Options ranging from ${{ parseNumber(product.minFace) }} to ${{ parseNumber(product.maxFace) }}</li>
          <li>Price and coverage will NEVER change</li>
          <li>Lifetime coverage <sup>1</sup></li>
        </ul>
      </div>
      <div class="col-lg">
        <div class="h5 font-weight-bold">Fast and simple application process</div>
        <ul>
          <li>Completely online process with <strong>immediate approval</strong></li>
          <li>Guaranteed Acceptance with no medical exam <sup>2</sup></li>
          <li>Easy payment options - you choose the date!</li>
        </ul>
      </div>
      <div class="col-lg">
        <div class="h5 font-weight-bold">Useful and flexible insurance</div>
        <ul>
          <li>Cover funeral and burial costs</li>
          <li>Pay off final debts</li>
          <li>Pass money along to chldren or grandchildren</li>
          <li>Make a donation to your favorite charity</li>
        </ul>
      </div>
    </div>

    <div class="row text-left" v-else>
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
</template>

<script>
  export default {
    name: 'BenefitsHighlights',
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
      isVantis: function () {
        let vantis = (this.$store.state.current.product === "Vantis") ? true : false
        return vantis
      }
    },
    methods: {
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

<style scoped lang="scss">
</style>