<template>
  <div class="jumbotron background-color-white2">
  	<div class="container">
  		<h1 class="mb-3 mb-lg-5">Plan FAQ's</h1>
  		<div class="row mb-4 mb-lg-5">
  			<div class="col-lg mr-lg-3" style="overflow: hidden;">
          <div class=" mb-4">
          	<img src="../../assets/img_insurance.jpg" class="faq-img" >
        </div>
        </div>
        <div class="col-lg text-left">
          <div class="h5 font-weight-bold">What is term life insurance?</div>
          <p>This type of life insurance policy is known as term insurance, which means that it provides protection for a selected period of time (also known as a "term") that meets your needs.  The available time periods are {{coveragePeriods()}} years.</p>
          <div class="h5 font-weight-bold">Why should I choose term life insurance?</div>
          <p>Term life insurance is the most affordable (and most popular) way to protect your loved ones if something should unexpectedly happen to you ("the insured").  Your family ("beneficiaries") would have the money they need to pay bills and survive in your absence.</p>
          <div class="h5 font-weight-bold">Will my term payments ever change?</div>
          <p>No!  This policy is known as a "level term" policy, which means that your payments will remain the same (level) for the entire length of the policy.</p>
          <div class="h5 font-weight-bold">What is required to get this life insurance?</div>
          <p v-html="content.faqRequirement"></p>
        </div>
  		</div>

      <div>
        <get-quote-btn submit-form="false"></get-quote-btn>
      </div>
  	</div>
  </div>
</template>

<script>
  import GetQuoteBtn from '@/components/common/GetQuoteBtn'
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
      }
    },
    methods: {
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
  @import "~bootstrap/scss/bootstrap.scss";
  @import '../../assets/styles/main.scss';

  @include media-breakpoint-down(md) {
    .faq-img {
      @include img-fluid;
    }
  }

  @include media-breakpoint-up(lg) {
    .faq-img {
      position: absolute;
      left: 50%;
      top: 50%;
      height: 100%;
      width: auto;
      -webkit-transform: translate(-50%,-50%);
          -ms-transform: translate(-50%,-50%);
              transform: translate(-50%,-50%);

    }
  }
</style>