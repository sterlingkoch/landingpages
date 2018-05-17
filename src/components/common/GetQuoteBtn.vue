<template>
	<button 
    class="bg-btn-primary btn-lg text-white pl-4 pr-4 font-weight-bold" 
    v-bind:disabled="getQuoteDisabled"
    @click="getQuote">{{buttonText}}</button>
</template>

<script>
  export default {
    props: {
      submitForm: false,
    },
    methods: {
      getQuote: function (e) {
        e.preventDefault()
        if (this.$props.submitForm === 'true') {
          let birthday = (this.$parent.birthday) ? this.$parent.birthday : '01/01/1977'
          let amount = (this.$parent.coverageAmt < this.product.maxFace) ? Math.round(this.$parent.coverageAmt / 25000) * 25000 : this.product.maxFace
          let params = {
            coverage: 'coverageAmount=' + this.$parent.coverageAmt,
            state: 'state=' + this.$parent.state,
            dob: 'birthdate=' + encodeURIComponent(birthday),
            tobacco: 'tobaccoUse=' + this.$parent.tobacco,
            term: 'coverageLength=' + this.$parent.term,
            gender: 'gender=' + this.$parent.gender,
            payment: 'paymentMode=' + 'Monthly',
            health: 'healthClass=' + 'P',
            product: 'productType=' + this.product.urlParam,
            skipStart: 'skipStartScreen=true',
            military: 'activeMilitary=' + this.$parent.military
          }

          if (this.current.product === 'Securian') {
            params.tobacco = 'tobaccoUser=' + this.$parent.tobacco
          }

          /*** CREATE THE URL STRING **/
          let urlParams = new URLSearchParams(window.location.search)

          // pass along all existing parameters
          let urlRoot = 'https://' + this.account.url.production + this.product.urlParam + '/RunQuote?' + window.location.search.replace(/^\?/, "") + '&'

          // allow for staging (url includes 'staging')
          if (this.current.environment === 'staging') {
            urlRoot = 'https://' + this.account.url.staging + this.product.urlParam + '/RunQuote?' + window.location.search.replace(/^\?/, "") + '&'
          }

          //THIS IS STUPID!!!
          if (this.current.account === 'NavyFed' && this.current.product == 'Securian') {
            urlRoot = 'https://' + this.account.url.alt_production + this.product.urlParam + '/RunQuote?' + window.location.search.replace(/^\?/, "") + '&'

            if (this.current.environment === 'staging') {
              urlRoot = 'https://' + this.account.url.alt_staging + this.product.urlParam + '/RunQuote?' + window.location.search.replace(/^\?/, "") + '&'
            }
          }

          let url = urlRoot + params.coverage + '&' + params.state + '&' + params.dob + '&' + params.tobacco + '&' + params.term + '&' + params.gender + '&' + params.payment + '&' + params.health + '&' + params.product + '&' + params.skipStart + '&' + params.military

          if (urlParams.has('test')) {
            if (urlParams.get('test') === 'true') {
              alert(url)
            }
          } else {
            window.location.href = url
          }

        } else {
          let target = document.getElementById('quoter')
          this.$SmoothScroll(target, 700)
        }
      }
    },
    computed: {
      getQuoteDisabled: function () {
        let disabled = false
        if (this.$props.submitForm === 'true') {
          if (this.$parent.isNY || this.$parent.isKnockedOut) {
            disabled = true
          }
        }
        return disabled
      },
      account: function () {
        return this.$store.getters.account
      },
      product: function () {
        return this.$store.getters.product
      },
      content: function () {
        return this.$store.getters.product.content
      },
      current: function () {
        return this.$store.state.current
      }
    },
    data () {
      return {
        buttonText: (this.$props.submitForm === 'true') ? 'Get Your Quote' : 'Start now!'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/main.scss';
</style>