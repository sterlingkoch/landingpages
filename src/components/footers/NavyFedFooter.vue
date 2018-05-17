<template>
<div class="container text-left">
  <div>
      <br>
      <div style="font-size: 11px;  color: #555555">
        Insurance offered through Navy Federal Financial Group, LLC, an insurance agency and wholly owned subsidiary of Navy Federal Credit Union. Nondeposit investment and insurance products are not NCUA/NCUSIF or otherwise federally insured, not guaranteed or obligations of the credit union, are not offered, recommended, sanctioned or encouraged by the Federal Government, involve investment risk, including the possible loss of principal, and may be offered by an employee who serves both functions of accepting member deposits and selling nondeposit investment and insurance products.<br>
        <br>
        <a href="https://www.navyfederal.org/financial-group/disclosures.php">https://www.navyfederal.org/financial-group/disclosures.php</a>
      </div>
  </div>

  <div ng-hide="model.Embedded" class="">
    <!-- show footer links and account ID -->
    <table style="width:100%">
      <tbody><tr>
        <td style="vertical-align: top;">
          <div style="padding-top: 5px; font-size: 10px;">
            <a href="https://www.navyfederalinsurance.com/Home/SecurityPrivacyPolicy" target="_blank">Security &amp; Privacy Policy</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.navyfederalinsurance.com/Home/ContactUs"> Contact Us</a>&nbsp; &nbsp; &nbsp; &nbsp;
              Copyright © {{getCurrentYear()}}
          </div>
        </td>
        <td style="vertical-align: top;">
            <!--always show account ID at bottom right -->
            <div style="text-align: right; padding-top: 5px; font-size: 10px;">
                    <span>Account ID: 437</span>
            </div>
        </td>
      </tr>
      </tbody></table>
    </div>

    <!-- Put rep mode links below BottomContent so they are displayed even when in embedded mode and we hide bottom content -->
    </div>
</template>

<script>
  export default {
    methods: {
      getCurrentYear: function () {
        let d = new Date()
        return d.getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/styles/main.scss';

</style>