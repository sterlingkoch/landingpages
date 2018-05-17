<template>
	<div class="step-circle rounded-circle border-color-primary3 color-primary3 d-flex justify-content-center align-items-center">
    <div>
		  <div class="h4 mt-2">{{step}}</div>
    </div>
	</div>
</template>

<script>
  export default {
    props: ['step']
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/main.scss';

  .step-circle { 
    width: 40px; 
    height:40px;
    border: 2px solid;
    /*border-color: $primary1;
    color: $primary1;*/
    background-color: transparent;
  }
</style>