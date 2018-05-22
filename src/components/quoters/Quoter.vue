<template>
  <div class="jumbotron bg-white" id="quoter">
  	
    <form class="container">
      
  		<h1 class="mb-3 font-weight-bold">{{account.content.quoterTitle}}</h1>

      <div class="p-5 background-color-white3">
    		<div class="mb-4"><!-- Step 1 - Calculate Needs -->
  	  		<div class="row">
  	  			<div class="col-3 col-sm-auto">
  	  				<step-circle step="1"></step-circle>
  	  			</div>
  	  			<div class="col-9 col-sm text-left">
  	  				<div class="mt-0 mt-md-2 mb-4 h5">Use this simple formula to calculate your suggested coverage amount.</div>
  	  			
  			  		<div class="row text-center">

  			  			<div class="col-lg"><!-- gross income -->
                  <div class="row">
                    <div 
                      class="col-3 pt-1" 
                      style="line-height: 1;">
                      <small>START<br>HERE</small>
                    </div>
  				  				<div class="col">
                      <label for="grossIncome" class="sr-only">Enter your gross annual income</label>
                      <currency-input 
                        v-model.number="grossIncome" 
                        mask-type="currency" 
                        name="grossIncomeInput" 
                        id="grossIncomeInput" 
                        v-on:blur.native="getCoverageAmt()"
                        ></currency-input>
                      <div
                        class="mt-2"
                        v-b-tooltip="{
                          title: helpContent.grossIncome, 
                          template: helpContent.template
                        }"
                        v-on:mouseenter="isHelpActive"
                        v-on:mouseleave="isHelpActive">
    					  				<small 
                          class="form-text mb-1" 
                          style="line-height: 1">Enter your gross annual income</small>
                        <icon 
                          name="question-circle" 
                          class="help-icon mb-3"
                          scale="1.1"
                          v-bind:class="{ active: isHelpActive }"
                          ></icon>
                      </div>
  					  			</div>
                  </div>
  			  			</div>

  			  			<div class="col-lg"><!-- multiplied by 7 -->
                  <div class="row">
                    <div 
                      class="col-3 h1" 
                      style="line-height: .8">x</div>
                    <div class="col">
      			  				<label for="grossIncomeMultiplied" class="sr-only">Multiplied by 7</label>
      			  				<input 
                        id="grossIncomeMultiplied" 
                        class="form-control border-top-0 border-left-0 border-right-0 border-secondary text-center background-color-white3"
                        readonly 
                        v-model="incomeMultiplier"
                        tabindex="-1">
                      <div
                        class="mt-2"
                        v-b-tooltip="{
                          title: helpContent.incomeMultiplier, 
                          template: helpContent.template
                        }"
                        v-on:mouseenter="isHelpActive"
                        v-on:mouseleave="isHelpActive">
      			  			    <small class="form-text mb-1" style="line-height: 1">(Multiplied by 7)</small>
                        <icon 
                          name="question-circle" 
                          class="help-icon mb-3"
                          scale="1.1"
                          ></icon>
                      </div>
                    </div>
                  </div>
  			  			</div>

                <div class="col-lg"><!-- existing insurance -->
                  <div class="row">
                    <div 
                      class="col-3 h1" 
                      style="line-height: .8">-</div>
      			  			<div class="col">
      			  				<label 
                        for="existingInsuranceInput" 
                        class="sr-only">Subtract any existing life insurance protection</label>
                      <currency-input 
                        v-model.number="existingInsurance" 
                        mask-type="currency"
                        v-on:blur.native="getCoverageAmt()"
                        ></currency-input>
                      <div 
                        class="mt-2"
                        v-b-tooltip="{
                          title: helpContent.existingInsurance, 
                          template: helpContent.template
                        }">
        			  				<small 
                          class="form-text mb-1" 
                          style="line-height: 1">Subtract any existing life insurance</small>
                        <icon 
                          name="question-circle" 
                          class="help-icon mb-3"
                          scale="1.1"
                          ></icon>
                      </div>
      			  			</div>
                  </div>
                </div>

                <div class="col-lg"><!-- recommended coverage -->
                  <div class="row">
      			  			<div 
                      class="col-3 h1" 
                      style="line-height: .8">=</div>
      							<div class="col">
      			  				<label for="recommendedCoverage" class="sr-only">{{account.content.quoterCoverageAmtLabel}}</label>
      			  				<input 
                        v-if="$store.getters.account.options.isCoverageAmtReadOnly"
                        id="recommendedCoverage" 
                        class="form-control text-center font-weight-bold border-top-0 border-left-0 border-right-0 border-secondary background-color-white3" 
                        readonly
                        v-model="matchCoverageToFaceAmt"
                        tabindex="-1">
                      <select
                        v-if="!$store.getters.account.options.isCoverageAmtReadOnly"
                        id="recommendedCoverage"
                        class="form-control font-weight-bold"
                        v-model="matchCoverageToFaceAmt"
                        @change="setCoverageAmt"
                        >
                        <option value="0">$0</option>
                        <option 
                          v-for="option in $store.getters.product.allowedFace"
                          v-bind:value="option">
                          ${{ option.toLocaleString('en') }}
                        </option>
                      </select>
                      <div
                        class="mt-2"
                        v-b-tooltip="{
                          title: coverageAmtHelp, 
                          template: helpContent.template
                        }"
                        v-on:mouseenter="isHelpActive"
                        v-on:mouseleave="isHelpActive">
        			  				<small 
                          class="form-text mb-1" 
                          style="line-height: 1"><strong>{{account.content.quoterCoverageAmtLabel}}</strong></small>
                        <icon 
                          name="question-circle" 
                          class="help-icon mb-3"
                          scale="1.1"
                          ></icon>
                      </div>
      			  			</div>	  	
                  </div>
                </div>		

  			  		</div>
              <b-collapse
                    v-model="isOverMaxCoverage"
                    class="row">
                    <div class="col">
                      <div class="font-weight-bold">Why only ${{ product.maxFace.toLocaleString('en') }}?</div>
                      <p>
                      The maximum coverage amount for this policy is ${{ product.maxFace.toLocaleString('en') }}.  And even though your total recommended coverage is actually ${{coverageAmtOriginal.toLocaleString('en')}}, this policy is an easy and inexpensive way to get started towards that goal (there's nothing wrong with having multiple policies - in fact, many experts recommend that approach).
                    </p>
                    <p>
                      If you'd like to speak with one of our experts about coverage over ${{ product.maxFace.toLocaleString('en') }} and other life insurance options, call us at <a href="tel:855-561-5901">855-561-5901</a>.
                    </p>
                   </div>
                  </b-collapse>

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
                    for="genderInput" 
                    class="pr-3">Your gender</label>
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
  			  			<div class="col-lg pb-3">
  			  				<label 
                    for="tobaccoInput" 
                    class="pr-3">Do you use tobacco?</label>
                  <b-form-radio-group 
                    id="tobacco-select" 
                    name="tobacco-select" 
                    class="radio-btns"
                    buttons 
                    v-model="tobacco" 
                    :options="tobaccoOptions" />
                  <!--small class="form-text text-muted">Do you use tobacco?</small-->
  			  			</div>
                <div class="w-100 d-block d-l-none" v-if="this.product.fields.military"></div>
                <div class="col-lg pb-3" v-if="this.product.fields.military">
                  <label 
                    for="militaryInput" 
                    class="pr-3">Are you active duty military?</label>
                  <b-form-radio-group 
                    id="military-select" 
                    name="military-select" 
                    class="radio-btns"
                    buttons 
                    v-model="military" 
                    :options="militaryOptions" />
                  <!--small class="form-text text-muted">Do you use tobacco?</small-->
                </div>

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

  	  	<div class="mb-5"><!-- Step 3 -->
  	  		<div class="row">
  	  			<div class="col-3 col-sm-auto">
  	  				<step-circle step="3"></step-circle>
  	  			</div>
  	  			<div class="col-9 col-sm text-left">
  	  				<div class="mt-0 mt-md-2 mb-4 h5">Decide how long you need to be insured.</div>
  					</div>
  	  		</div>
          <div class="text-left" style="margin-top: -1em;">
            <div style="padding-left: 4.5em;">
              <small class="form-text mb-4">Experts recommend getting coverage until your children are on their own, your mortgage is paid off, and you retire.</small>
            </div>
            <div class="how-long-radio-container">
              <b-form-radio-group 
                id="term-select" 
                name="term-select" 
                class="radio-btns"
                buttons v-model="term" 
                :options="createTermOptions()" />
            </div>
          </div>
  	  	</div>

        <div class="mb-4"  v-if="$store.state.current.product === 'SBLI_AU'"><!-- Step 4 -->
          <div class="row">
            <div class="col-3 col-sm-auto">
              <step-circle step="4"></step-circle>
            </div>
            <div class="col-9 col-sm text-left">
              <div class="mt-0 mt-md-2 mb-4 h5">Ensure a good fit</div>
              <div class="text-left" style="margin-top: -1em;">
                <small class="form-text mb-4">Let's make sure you're likely to qualify for this coverage.  Don't worry if you don't - we've got other easy options!</small>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12 pb-3 h5"
                        style="opacity: .75"> In the past 2 years, have you...</div>

                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                          <label for="previously-declined">...been declined for life insurance?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                          id="previously-declined" 
                          name="previously-declined" 
                          class="radio-btns"
                          buttons 
                          v-model="sbli_knockouts.values.previouslyDeclined" 
                          :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>

                    <div class="w-100 d-block"></div>
                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                          <label 
                            for="previously-hospitalized" 
                            class="pr-3">...had severe psychiatric or medical issues?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                            id="previously-hospitalized" 
                            name="previously-hospitalized" 
                            class="radio-btns"
                            buttons 
                            v-model="sbli_knockouts.values.previouslyHospitalized" 
                            :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>

                    <div class="w-100 d-block"></div>
                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                          <label 
                            for="previously-bankrupt" 
                            class="pr-3 knockout-label">...filed for bankruptcy?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                            id="previously-bankrupt" 
                            name="previously-bankrupt" 
                            class="radio-btns"
                            buttons 
                            v-model="sbli_knockouts.values.previouslyBankrupt" 
                            :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>

                    <div class="w-100 d-block"></div>
                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                        <label 
                          for="previously-disabled" 
                          class="pr-3 knockout-label">...received disability or social security for more than 6 months?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                            id="previously-disabled" 
                            name="previously-disabled" 
                            class="radio-btns"
                            buttons 
                            v-model="sbli_knockouts.values.previoulsyDisabled" 
                            :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mt-4 mt-lg-0">
                  <div class="row">
                    <div class="col-12 pb-3 h5"
                      style="opacity: .75">Have you ever...</div>
                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                          <label for="diagnosed-HIV" class="knockout-label">...been diagnosed with HIV, AIDS, or ARC?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                            id="diagnosed-HIV" 
                            name="diagnosed-HIV" 
                            class="radio-btns"
                            buttons 
                            v-model="sbli_knockouts.values.diagnosedHIV" 
                            :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>

                    <div class="w-100 d-block"></div>

                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                        <div class="col-lg-8">
                          <label for="alcohol-drugs" class="knockout-label">...received treatment for alcohol or drug use?</label>
                        </div>
                        <div class="col">
                          <b-form-radio-group 
                          id="alcohol-drugs" 
                          name="alcohol-drugs" 
                          class="radio-btns"
                          buttons 
                          v-model="sbli_knockouts.values.alcoholDrugs" 
                          :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>

                    <div class="w-100 d-block"></div>
                    
                    <div class="col-lg pb-3 ml-2">
                      <div class="row">
                      <div class="col-lg-8">
                        <label for="convicted-felony" class="knockout-label">...been convicted of a felony?</label>
                      </div>
                      <div class="col">
                          <b-form-radio-group 
                          id="convicted-felony" 
                          name="convicted-felony" 
                          class="radio-btns"
                          buttons 
                          v-model="sbli_knockouts.values.convictedFelony" 
                          :options="sbli_knockouts.options" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <b-collapse
                v-model="isKnockedOut"
                class="row">
                <div class="col">
                  <div class="font-weight-bold text-danger">
                    There are better options for you!
                  </div>
                  <p>Based on your answer, it looks like different coverage may be better for you.</p>
                  <p><span class="font-weight-bold">Call our experts</span> at <a href="tel:855-561-5901">855-561-5901</a> to talk about our full line of affordable life insurance options.</p>
               </div>
              </b-collapse>
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
  import CurrencyInput from '@/components/common/CurrencyInput'
  import SelectStates from '@/components/common/SelectStates'
  import VueMask from 'di-vue-mask'
  import moment from 'moment'
  import { getNextHighestIndex } from '@/utils/index.js'
  import { db } from '@/utils/firebase.js'

  export default {
    name: 'Quoter',
    components: {
      StepCircle,
      GetQuoteBtn,
      CurrencyInput,
      SelectStates,
      VueMask
    },
    data () {
      return {
        grossIncome: '',
        existingInsurance: '',
        state: '',
        birthday: '',
        yearsSinceBirthday: -1,
        isInvalidBirthday: false,
        gender: 'M',
        tobacco: 'False',
        military: 'False',
        term: this.$store.getters.product.term.available.slice(-1)[0]['value'],
        coverageAmt: '',
        coverageIsFaceMatch: true,
        coverageAmtOriginal: '',
        email: '',
        phone: '',
        knockedOut: false,
        genderOptions: [
          {text: 'Male', value: 'M'},
          {text: 'Female', value: 'F'}
        ],
        tobaccoOptions: [
          {text: 'Yes', value: 'True'},
          {text: 'No', value: 'False'}
        ],
        militaryOptions: [
          {text: 'Yes', value: 'True'},
          {text: 'No', value: 'False'}
        ],
        termOptions: [
          {text: '10', value: '3'},
          {text: '15', value: '4'},
          {text: '20', value: '5'},
          {text: '25', value: '6'},
          {text: '30 years', value: '7'}
        ],
        sbli_knockouts: {
          options: [
            {text: 'Yes', value: 'True'},
            {text: 'No', value: 'False'}
          ],
          values: {
            previouslyDeclined: 'False',
            previouslyHospitalized: 'False',
            previouslyBankrupt: 'False',
            previoulsyDisabled: 'False',
            diagnosedHIV: 'False',
            alcoholDrugs: 'False',
            convictedFelony: 'False'
          }
        },
        helpContent: {
          template: '<div class="tooltip covr-tooltip" role="tooltip"> <div class="arrow"></div> <div class="tooltip-inner text-left"></div> </div>',
          incomeMultiplier: 'Seven years of income replacement is an easy way to calculate your insurance needs.',
          grossIncome: 'This is your total pre-tax income that would need to be replaced if something happened to you.',
          coverageAmt: 'Here\'s your estimate of how much life insurance you need to protect your loved ones.',
          coverageAmtAdjusted: 'Here\'s your estimate of how much life insurance you need to protect your loved ones.  Insurance is available in set increments, and your coverage has been adjusted to match that.',
          existingInsurance: 'Enter any insurance or savings that can be used by loved ones if something happens to you.'
        },
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
      createTermOptions: function () {
        let terms = this.product.term.available
        let termsArr = []
        terms.forEach(function (term, index) {
          termsArr.push({
            text: term.term,
            value: term.value
          })
        })
        termsArr[termsArr.length - 1].text = termsArr[termsArr.length - 1].text + ' years'
        return termsArr
      },
      stripDollars: function (value) {
        value = parseFloat(value.replace(/[^\d.]/g, ''))
        return isNaN(value)
          ? 0
          : value
      },
      getQuote: function (e) {
        e.preventDefault()
        console.log('test')
      },
      highlight: function (e) {
        console.log('active')
      },
      testMethod: function (value) {
        console.log(value)
        let str = value
        return str + '000'
      },
      getCoverageAmt: function () { // this is a method (not computed) because I want it triggered on blur
        if (this.grossIncome > 0) {
          let amt = this.grossIncome * 7 - this.existingInsurance
          this.coverageAmt = amt
          this.coverageAmtOriginal = amt
        } else {
          this.coverageAmt = ''
          this.coverageAmtOriginal = ''
        }
      },
      unHighlightField: function () {
        $('#highlight-box').remove()
      },
      isHelpActive: function (e) {
        /* if (e.type === 'mouseenter') {
          $(e.target).addClass('active')
        } else { // mouseleave
          $(e.target).removeClass('active')
        } */
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
      setCoverageAmt: function () {
        let rc = document.getElementById('recommendedCoverage')
        this.coverageAmt = rc.options[rc.selectedIndex - 1].value
        return this.coverageAmt
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
      incomeMultiplier: function () {
        if (this.grossIncome > 0) {
          let amt = this.grossIncome * 7
          this.recordBehavior()
          return '$' + amt.toLocaleString('en')
        }
      },
      isCoverageAmtReadOnly: function () {
        let classes = ''
        if (this.$store.getters.account.options.isCoverageAmtReadOnly === true) {
          classes = 'border-top-0 border-left-0 border-right-0 border-secondary background-color-white3'
        }
        return classes
      },
      matchCoverageToFaceAmt: function () {

        if (this.coverageAmt) {
          let faces = this.product.allowedFace
          this.coverageIsFaceMatch = faces.includes(this.coverageAmt)

          if (!this.coverageIsFaceMatch) {

            if (this.coverageAmt > this.product.maxFace) {
              this.coverageAmt = this.product.maxFace
            } else {
              let facesIndex = getNextHighestIndex(faces, this.coverageAmt)
              this.coverageAmt = faces[facesIndex]
            }
          }
          if (this.account.options.isCoverageAmtReadOnly) {
            return '$' + this.coverageAmt.toLocaleString('en')
          } else {
            return this.coverageAmt
          }
        }
        return this.coverageAmt
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
      },
      isKnockedOut: function () {
        let koQs = this.sbli_knockouts.values
        if (koQs.previouslyDeclined == 'True' || koQs.previouslyHospitalized == 'True' ||koQs.previouslyBankrupt == 'True' || koQs.previoulsyDisabled == 'True' || koQs.diagnosedHIV == 'True' || koQs.alcoholDrugs == 'True' ||koQs.convictedFelony == 'True') {
          this.knockedOut = true
        } else {
          this.knockedOut = false
        }
        this.recordBehavior()
        return this.knockedOut
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

  @include media-breakpoint-up(md) {
    .how-long-radio-container {
      padding-left: 4.5em;
    }
  } 

  .knockout-label {
    line-height: 1.3em;
  }

</style>