<template>
  <div class="container" style="padding-top: 10px; padding-bottom: 10px;">
    <div class="row">
      <div class="col-2 color-box background-color-primary1">primary1</div>
      <div class="col-2 color-box background-color-primary2">primary2</div>
      <div class="col-2 color-box background-color-primary3">primary3</div>
      <div class="col-2 color-box background-color-primary4">primary4</div>
      <div class="col-2 color-box background-color-primary5">primary5</div>
      <div class="col-2 color-box background-color-secondary1">secondary1</div>
      <div class="col-2 color-box background-color-white1 color-bodytext">white1</div>
      <div class="col-2 color-box background-color-white2 color-bodytext">white2</div>
      <div class="col-2 color-box background-color-white3 color-bodytext">white3</div>
    </div>
    <div class="row">
      <div class="col-2 color-box color-bodytext">text1</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StyleGuide',
    methods: {
      getCurrentYear: function () {
        let d = new Date()
        return d.getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';

  .color-box {
    height: 50px;
    margin: 5px;
    border-radius: 4px;
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .color-box.alt-text-color {
    color: inherit;
  }
</style>