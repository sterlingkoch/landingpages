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
          <div class="h5 font-weight-bold">What is final expense insurance?</div>
          <p>This insurance is for people 50 to 80, designed to cover the bills that your loved ones will face after your death (though the money can be directed however you specify). Pricing is primarily based on your age (the younger you are, the less expensive it will be).</p>
          <p>It’s guaranteed <sup>2</sup>, which means that the full amount will be paid out no matter what, so long as you’ve held the policy for more than two years.  If you’ve had the policy for less than two years, all your premiums will be returned instead of receiving the full benefit (unless your death is a sudden accident, in which case the full benefit will be paid).</p>

          <div class="h5 font-weight-bold">How much final expense insurance should I have?</div>
          <p>As of 2017, the median price of a funeral and burial was over $7,000 (according to the <a href="http://www.nfda.org/news/statistics">NFDA</a>).  Personalization and extras add to that amount, plus provisions for out-of-town guests and so forth.  Additionally, consider whether your loved ones may need to pay your final bills, debts, and other costs.</p>
          <p>Finally, the money from your final expense insurance payout can be used for anything, so consider whether you’d like some left over for family or your favorite charity.</p>

          <div class="h5 font-weight-bold">Will my term payments ever change?</div>
           <p>Your payments will never change.  Your final expense insurance policy is yours for life, with the same benefits and payments throughout.</p>
          
          <div class="h5 font-weight-bold">What is required to get this life insurance?</div>
          <p>All that’s required is a few minutes of your time!  The application process is easy and straightforward with no medical questions.  Once you’ve finished it, you’re approved online and your policy takes effect immediately.</p>

          <div class="h5 font-weight-bold">Why should I buy insurance from Navy Federal and Covr?</div>
          <p>Navy Federal Credit Union, a trusted financial institution since 1933, has partnered with <a href="https://covrtech.com/">Covr Financial Technologies</a> to bring the best life, disability, and final expense insurance options to its constituents.  Covr Financial Technologies is committed to making insurance simple, with the lowest rates, best support, and most convenient processes possible.</p>
          
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