<template>
  <div class="jumbotron bg-white">
  	<div class="container">
  		<h1 class="mb-5">Just a Few Easy Steps to Protect the Things that Matter Most</h1>
  		<div class="row">
  			
        <step 
          v-for="(item,index) in content.steps" 
          v-bind:number="index + 1"
          v-bind:title="item.title"
          v-bind:text="item.text"
          :key="item.title"
        ></step>

  		</div>

      <!-- TODO: Every 3rd item needs a row -->
  		<div 
        v-if="1===0"
        class="steps-step-4"><!-- Step 4 -->
  			<div class="row">
	  			<div class="col-auto">
	  				<step-circle step="4"></step-circle>
	  			</div>
	  			<div class="col text-left">
	  				<div class="h4 mt-0 mt-md-2">You're covered!</div>
            <p>Your information is reviewed (a process called "underwriting").  Once you're approved (usually within a week), you can rest assured that your loved ones are protected!</p>
	  			</div>
	  		</div>
	  	</div>

  	</div>
    <div class="mt-5">
          <get-quote-btn></get-quote-btn>
        </div>
  </div>
</template>

<script>
  import Step from './common/Step'
  import GetQuoteBtn from './common/GetQuoteBtn'
  export default {
    components: {
      Step,
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
      goToQuoter: function (e) {
        e.preventDefault()
        let target = document.getElementById('quoter')
        this.$SmoothScroll(target, 700)
      }
    }
  }
</script>

<style scoped lang="scss">
  /* @import "~bootstrap/scss/bootstrap.scss";

  @include media-breakpoint-up(lg) {
    .steps-step-4 .row {
        -webkit-box-pack: center !important;
        -ms-flex-pack: center !important;
        justify-content: center !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
    }
  } */

</style>