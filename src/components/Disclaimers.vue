<template>
  <div class="jumbotron background-color-white2 mb-0 pt-3 pb-3 text-left">
    <div class="container">
      <small><sup>1</sup>Sample monthly premium for a female age 30, ${{product.idealTerm}}-year, ${{ parseNumber(product.maxFace) }} fully-guaranteed {{product.name}} term life insurance policy, preferred plus non-nicotine.</small>
    </div>
  </div>
</template>

<script>
  export default {
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
      parseNumber (num) {
        let number = parseInt(num)
        return number.toLocaleString('en')
      }
    }
  }
</script>