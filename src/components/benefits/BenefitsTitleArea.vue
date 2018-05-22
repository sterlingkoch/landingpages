<template>
  <div>
      <div v-if="isVantis">
        <h2>It’s so <strong>easy, fast, and affordable</strong> to take care of your final expenses without burdening your family.</h2>
        <p>The online process is just <strong>5 steps</strong> and you’re <strong>guaranteed to be accepted</strong> <sup><small>2</small></sup> with <strong>no medical exam</strong>.  {{account.name.fullName}} and Covr Financial Technologies are pleased to offer this easy Final Expense Insurance plan.</p>
      </div>

      <div v-else>
        <h2>{{content.benefitsHeader}}</h2>
        <p>{{account.name.fullName}} is pleased to offer this innovative life insurance plan - it's <strong>a fast, simple, and convenient way to protect the ones you love!</strong>  {{content.benefitsProcess}} - <strong>it's that easy!</strong></p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'BenefitsTitleArea',
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
    }
  }
</script>

<style scoped lang="scss">
</style>