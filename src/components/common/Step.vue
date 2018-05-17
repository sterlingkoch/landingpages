<template>
    <div class="col-lg">
      <div class="row">
        <div class="col-auto">
          <step-circle :step="number"></step-circle>
        </div>
        <div class="col text-left">
          <div class="h4 mt-0 mt-md-2">{{title}}</div>
          <p v-html="text"></p>
        </div>
        
      </div>
    </div>
</template>

<script>
  import StepCircle from './StepCircle'
  export default {
    components: {
      StepCircle
    },
    props: ['number', 'title', 'text'],
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
  @import '../../assets/styles/main.scss';

  
</style>