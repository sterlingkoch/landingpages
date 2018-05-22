<template>
  <div class="jumbotron jumbotron-fluid mb-0 background-color-primary2 text-white">
    <div class="container">
      <div class="row">
        <div class="col-sm text-left">
        	<h1 class="pr-md-5 mb-3 page-title">
        		Up to ${{ parseNumber(product.maxFace) }} of 
            <span
              v-b-tooltip="{
                title: helpContent.term, 
                template: helpContent.template,
                trigger: 'click hover focus'
              }"
              class="defined-word">term</span> 
            life insurance for as little as ${{ product.minCost }} a month.<sup><small style="font-size: .5em;">1</small></sup>
        	</h1>
        </div>
        <div class="col-sm">
        	<div style="height:100%" class="img-fluid d-flex align-items-center justify-content-center">
        		<img src="../../assets/family.png" class="img-fluid">
        	</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        helpContent: {
          template: '<div class="tooltip covr-tooltip" role="tooltip"> <div class="arrow"></div> <div class="tooltip-inner text-left"></div> </div>',
          term: '"Term" life insurance provides protection for a selected period of time (a "term"), according to your needs.  It\'s the most popular type of life insurance.'
        }
      }
    },
    computed: {
      account: function () {
        return this.$store.getters.account
      },
      product: function () {
        return this.$store.getters.product
      }
    },
    methods: {
      parseNumber (num) {
        let number = parseInt(num)
        return number.toLocaleString('en')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/main.scss';

  .page-title {
    text-align: center;
  }
  @include media-breakpoint-up(sm) {
    .page-title {
      text-align: left;
    }
  }

  .defined-word:after {
    border-bottom: 2px dashed $primary3b;
    content: "";
    right: 0px;
    left: 0;
    bottom: 0;
    position: absolute;
    transition: all 0.3s ease 0s;
  }
  .defined-word {
    position: relative;
    cursor: help;
  }
  .defined-word:hover:after {
    border-color: $primary3;
    transition: all 0.3s ease 0s;
  }
</style>