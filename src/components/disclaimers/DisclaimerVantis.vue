<template>
  <div class="jumbotron background-color-white2 mb-0 pt-3 pb-3 text-left">
    <div class="container">
      <div><small><sup>1</sup> Limited coverage in the first two policy years, full coverage thereafter.</small></div>
      <div><small><sup>2</sup> Unfortunately, we can’t accept applications for someone: a) with dementia that renders that individual unable to perform the common activities of daily living without regular assistance of others; b) that is currently admitted to or resides in a hospital, hospice, or skilled nursing facility; c) with Power of Attorney or court authorized guardianship currently in effect on their behalf.</small></div>
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

<style scoped lang="scss">
  sup {
    font-weight: bold;
  }
</style>