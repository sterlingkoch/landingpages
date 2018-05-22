<template>
  <div class="jumbotron bg-white" id="quoter">
  	
    <form class="container">
      
  		<h1 class="mb-3 font-weight-bold">{{account.content.quoterTitle}}</h1>

      <div class="p-5 background-color-white3">
    		<div class="mb-5"><!-- Step 1 - How much do you want -->
          <div class="row">
            <div class="col-3 col-sm-auto">
              <step-circle step="1"></step-circle>
            </div>
            <div class="col-9 col-sm text-left">
              <div class="mt-0 mt-md-2 mb-4"><span class="h5">Select how much insurance you’d like.</span>  <a href="" class="pl-2" @click="showHelp">Want help?</a></div>
            </div>
          </div>
          <div class="text-left" style="margin-top: -1em;">
            <b-collapse
              v-model="isHelpVisible"
              class="row">
              <div style="padding-left: 5.5em;">
                <p class="form-text mb-4">As of 2017, the median price of a funeral and burial was over $7,000 (over $6,000 for cremation) (source: NFDA).  Personalization and extras add to that amount, plus provisions for out-of-town guests and so forth.  Additionally, consider whether your loved ones may need to pay your final bills, debts, and other costs.</p>
                <p>Finally, the money from your final expense insurance payout can be used for anything, so consider whether you’d like some left over after the costs are covered for family or your favorite charity.
                </P>
              </div>
            </b-collapse>
            <div class="how-long-radio-container">
              <b-form-radio-group 
                id="face-select" 
                name="face-select" 
                class="radio-btns"
                buttons v-model="coverageAmt" 
                :options="createFaceOptions()" />
            </div>
          </div>
        </div>

  	  	<div class="mb-4"><!-- Step 2 - 4 Questions -->
  	  		<div class="row">
  	  			<div class="col-3 col-sm-auto">
  	  				<step-circle step="2"></step-circle>
  	  			</div>
  	  			<div class="col-9 col-sm text-left">
  	  				<div class="mt-0 mt-md-2 mb-4 h5">Answer {{ product.fields.totalFields }} simple questions.</div>
  	  		
  			  		<div class="row">
  			  			
  			  			<div class="col-lg pb-3">
  			  				<label for="stateInput">Your state</label>
                  <select-states></select-states>
                  <!--small class="form-text text-muted">Select your state</small-->
  			  			</div>
  			  			<div class="col-lg pb-3">
  			  				<label for="birthdayInput">Your birthday</label>
                    <input 
                    type="tel" 
                    class="form-control" 
                    v-bind:class="{ 'is-invalid': ( isTooDamnYoung || isTooDamnOld || isInvalidBirthday ) }"
                    id="birthdayInput" 
                    placeholder="eg. 01/01/1977" 
                    v-mask="'##/##/####'" 
                    v-model="birthday"
                    v-on:blur="checkBirthday()"
                    maxlength="10">
                    <div
                      v-show="isInvalidBirthday"
                      class="text-danger"
                      style="font-size: .85em;">That appears to either be an invalid date or is in the future.  Please try again.</div>
  			  			</div>
  			  			<div class="col-lg pb-3">
  			  				<label 
                    for="genderInput" class="d-block">Your gender</label>
                  <b-form-radio-group 
                    id="gender-select" 
                    name="gender-select" 
                    class="radio-btns"
                    buttons 
                    v-model="gender" 
                    :options="genderOptions" />
                  <!--small class="form-text text-muted">Select your gender</small-->
  			  			</div>
                <div class="w-100 d-block d-xl-none"></div>

                <b-collapse
                    v-model="isTooDamnOld"
                    class="row">
                    <div class="col">
                      <div class="font-weight-bold text-danger">
                        <icon 
                          name="exclamation-triangle" 
                          class="help-icon mr-2"
                          style="margin-bottom: -2px; fill: #dc3545;"
                          scale="1"
                          ></icon>We're so sorry!
                      </div>
                      <p>The maximum age for this policy is {{ product.maxAge }} years old. Based on your birthday, it appears you may be just a bit beyond that.</p>
                      <p>If you'd like to speak with one of our experts about other life insurance options available for you, call us at <a href="tel:855-561-5901">855-561-5901</a>.</p>
                   </div>
                  </b-collapse>
                  <b-collapse
                    v-model="isTooDamnYoung"
                    class="row">
                    <div class="col">
                      <div class="font-weight-bold text-danger">
                        <icon 
                          name="exclamation-triangle" 
                          class="help-icon mr-2"
                          style="margin-bottom: -2px; fill: #dc3545;"
                          scale="1"
                          ></icon>We're so sorry!
                      </div>
                      <p>The minimum age for this policy is {{ product.minAge }} years old. Based on your birthday, it appears you may be just a bit younger than that.</p>
                      <p>If you'd like to speak with one of our experts about other life insurance options available for you, call us at <a href="tel:855-561-5901">855-561-5901</a>.</p>
                   </div>
                  </b-collapse>
                  <b-collapse
                    v-model="isNY"
                    class="row">
                    <div class="col">
                      <div class="font-weight-bold text-danger">
                        <icon 
                          name="exclamation-triangle" 
                          class="help-icon mr-2"
                          style="margin-bottom: -2px; fill: #dc3545;"
                          scale="1"
                          ></icon>We're so sorry!
                      </div>
                      <p>New York may be a wonderful place, but it's also the one state where this specific policy isn't available.  However, there are similar policies available to New Yorkers that we'd love to tell you about.</p>
                      <p>If you'd like to speak with one of our experts about other life insurance options available for you, call us at <a href="tel:855-561-5901">855-561-5901</a>.</p>
                   </div>
                  </b-collapse>
  			  		</div>
  			  	</div>
  			  </div>
  	  	</div>

  	  	<div class="mb-2">
  	  		<get-quote-btn 
            v-bind:record-on-click="account.recordBehavior"
            submit-form="true"></get-quote-btn>
  	  	</div>
        <div class="mt-5" style="font-size: .9em; color: #777777;">
          Have questions?  Want help?  Call us at <a href="tel:855-561-5901">855-561-5901</a>
        </div>
      </div>
  	</form>
    <div 
      id="highlight-box" 
      class="hl-box-container" 
      v-show="fieldHighlighter.visible"
      v-bind:style="fieldHighlighter.styles"></div>
      
  </div>
</template>

<script>
  import StepCircle from '@/components/common/StepCircle'
  import GetQuoteBtn from '@/components/common/GetQuoteBtn'
  import SelectStates from '@/components/common/SelectStates'
  import VueMask from 'di-vue-mask'
  import moment from 'moment'
  import { db } from '@/utils/firebase.js'

  export default {
    name: 'QuoterVantis',
    components: {
      StepCircle,
      GetQuoteBtn,
      SelectStates,
      VueMask
    },
    data () {
      return {
        state: '',
        birthday: '',
        yearsSinceBirthday: -1,
        isInvalidBirthday: false,
        gender: 'M',
        coverageAmt: this.$store.getters.product.idealFace,
        genderOptions: [
          {text: 'Male', value: 'M'},
          {text: 'Female', value: 'F'}
        ],
        helpContent: {
          template: '<div class="tooltip covr-tooltip" role="tooltip"> <div class="arrow"></div> <div class="tooltip-inner text-left"></div> </div>',
          incomeMultiplier: 'Seven years of income replacement is an easy way to calculate your insurance needs.'
        },
        isHelpVisible: false,
        fieldHighlighter: {
          visible: false,
          styles: {
            top: '',
            left: '',
            width: '',
            height: ''
          }
        },
        db: {
          visitKey: 0,
          behavior: {
            callClicked: false
          }
        }
      }
    },
    methods: {
      createFaceOptions: function () {
        let faces = this.product.allowedFace
        let facesArr = []
        faces.forEach(function (face, index) {
          facesArr.push({
            text: '$' + face.toLocaleString('en'),
            value: face
          })
        })
        // facesArr[facesArr.length - 1].text = '$' + facesArr[facesArr.length - 1].text
        return facesArr
      },
      checkBirthday: function () { // this is a method (not computed) because I want it triggered on blur
        var date = moment(this.birthday, 'MM/DD/YYYY')

        if (!date.isValid() || date.isAfter(moment())) { // not in the future, not a fake date
          this.isInvalidBirthday = true
        } else {
          this.isInvalidBirthday = false
        }

        if (!this.isInvalidBirthday) {
          let now = moment()
          let diff = now.diff(date, 'years', true)
          console.log(diff)
          this.yearsSinceBirthday = diff
        }
      },
      recordBehavior: function () {
        if (this.account.recordBehavior === true) {

          let obj = {
            date: new Date(),
            product: this.$store.state.current.product,
            behavior: this.db.behavior
          }
          obj.behavior.email = this.email
          obj.behavior.faceNeeded = this.coverageAmtOriginal
          obj.behavior.isOverMaxFace = this.isOverMaxCoverage
          obj.behavior.phone = this.phone
          obj.behavior.knockedOut = this.knockedOut

          if (this.db.visitKey) {
            this.$firebaseRefs.visits.child(this.db.visitKey).set(obj,
              function () {
                return true
              })
          } else {
            let newVisit = this.$firebaseRefs.visits.push(obj,
              function () {
                return true
              })
            this.db.visitKey = newVisit.key
          }

        }
      },
      showHelp: function (e) {
        e.preventDefault()
        let help = (this.isHelpVisible == false) ? true : false
        this.isHelpVisible = help
      }
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
      },
      timestamp: function () {
        return moment().format('DD-MM-YYYY [at] hh:mm')
      },
      coverageAmtHelp: function() {
        if (this.coverageIsFaceMatch) {
          return this.helpContent.coverageAmt
        } else {
          return this.helpContent.coverageAmtAdjusted
        }
      },
      isOverMaxCoverage: function () {
        let overAmt = false
        if (this.coverageAmtOriginal >= this.product.maxFace) {
          overAmt = true
        }
        return overAmt
      },
      isTooDamnOld: function () {
        let tooDamnOld = false
        if (this.yearsSinceBirthday > this.product.maxAge) {
          tooDamnOld = true
        }
        return tooDamnOld
      },
      isTooDamnYoung: function () {
        let tooDamnYoung = false
        if (this.yearsSinceBirthday < this.product.minAge && this.yearsSinceBirthday >= 0) {
          tooDamnYoung = true
        }
        return tooDamnYoung
      },
      isNY: function () {
        let NY = false
        if (this.state === 'NY') {
          NY = true
        }
        return NY
      }
    },
    firebase: {
      visits: db.ref('visits'),
    }
  }
</script>
<style lang="scss">
  @import '../../assets/styles/main.scss';
</style>
<style scoped lang="scss">
  @import '~bootstrap/scss/bootstrap.scss';
  @import '../../assets/styles/main.scss';

  .help-icon { 
    cursor: help; 
    fill: #6c757d;}
  .active .help-icon { fill: $secondary2; }
  .hl-box-container { 
    position: absolute; 
    background: #6c757d; 
    z-index: 1; 
  }
  .how-long-radio-container {
    padding-left: 0;
  }

  @include media-breakpoint-up(sm) {
    .how-long-radio-container {
      padding-left: 4.5em;
    }
  } 

  .knockout-label {
    line-height: 1.3em;
  }

</style>