<template>
<div class="jumbotron background-color-white2 pb-3 pt-3">
  <div class="container">
  <div class="row text-left small">
      <div class="col">
          <div class="text parbase section">
              <p>
                  <span class="disclosure">
                      You understand and acknowledge that (a) the purchase of insurance or other similar products from a particular
                      source is not a condition to the provision of, and will not affect the terms of, any loan or extension of credit
                      by Compass Bank or its affiliates, (b) insurance and other similar products are available through insurance
                      agents not associated with BBVA Compass Insurance Agency, Inc., Compass Bank or any of their affiliates, (c) the
                      choice of another insurance provider will not affect a decision relating to, or the terms of, any loan or extension
                      of credit by Compass Bank or its affiliates and (d) you accept and assume full responsibility for the evaluation,
                      selection and suitability of insurance or other similar products.
                  </span><br>
              </p>

          </div>
          <div class="text parbase section">
              <p><span class="disclosure">Insurance products are offered through BBVA Compass Insurance Agency, Inc., an affiliate of Compass Bank.</span></p>
              <p>
                  <span class="disclosure">
                      BBVA Compass Insurance Agency does not provide, nor is it liable for, any of the products, services or content on
                      the third party website. Before accessing the website, please review the privacy and security policies and terms
                      and conditions for the third party website <a href="https://bbva.1clickcoverage.com/BBVA/PrivacyPolicy">here</a>.
                  </span>
              </p>

          </div>
          <div class="htmleditor section">
              <table class="disclosure disclosure-table">
                  <tbody>
                      <tr class="title">
                          <td colspan="2">Insurance Products:</td>
                      </tr>
                      <tr>
                          <td>ARE NOT DEPOSITS</td>
                          <td>ARE NOT FDIC INSURED</td>
                      </tr>
                      <tr>
                          <td>ARE NOT BANK GUARANTEED</td>
                          <td>MAY LOSE VALUE</td>
                      </tr>
                      <tr>
                          <td colspan="2">ARE NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
  </div>
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

  /* Disclosure Tables */
table.disclosure {
    color: #666666;
    background-color: transparent;
    font-size: .9em;
}

    table.disclosure td {
        border: 1px solid #666666;
        padding: .35rem;
        text-transform: uppercase;
    }

        table.disclosure td:first-child {
            max-width: 40rem;
        }

    table.disclosure .title {
        border: none;
    }

        table.disclosure .title td {
            border: none;
            padding-left: 0;
            padding-bottom: 1rem;
            border: none;
            text-transform: none;
        }

</style>