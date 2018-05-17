<template>
  <div class="text-left container">
    <div class="h1">Interaction Stats</div>
    <div>
      <div class="h2 mt-3">Routing Totals</div>
      <div>Total routed to SBLI: {{fbTotalsObj.sbli}}</div>
      <div>Total routed to Securian: {{fbTotalsObj.securian}}</div>
    </div>
    <div>
      <div class="h2 mt-5">Interactions</div>
      <div>Total visits with interactions: {{totalVisits}}</div>
      <div class="small">This is the # of visitors who have actually interacted with the page (i.e. not views).  These are not necessarily unique visitors (i.e. refreshes are counted as a new visit)</div>
    </div>
    <div class="mt-2">
      <div class="h3">SBLI</div>
      <div>Total: {{visitsTotals.SBLI_AU.total}}</div>
      <div class="small">Total # of visitors who have interacted with the SBLI version of the page</div>
      <div class="mt-2">Total over Max Face: {{visitsTotals.SBLI_AU.overMaxFace}}</div>
      <div class="small">Total # of visitors who have needed more than the allowable max face amount ($500,000)</div>
      <div class="mt-2">Total knocked out: {{visitsTotals.SBLI_AU.knockedOut}}</div>
      <div class="small">Total # of visitors who have ended their experience with a "yes" for any of the knockout questions.  This does not count those who change it back to "no".</div>
    </div>
    <div class="mt-2">
      <div class="h3">Securian</div>
      <div>Total:  {{visitsTotals.Securian.total}}</div>
      <div class="small">Total # of visitors who have interacted with the Securian version of the page</div>
      <div class="mt-2">Total over Max Face: {{visitsTotals.Securian.overMaxFace}}</div>
      <div class="small">Total # of visitors who have needed more than the allowable max face amount ($250,000)</div>
    </div>
    <div class="mt-5">
      <div class="h2">Face Amount Needed</div>
    </div>
    <div class="mt-2">
      <div class="h3">Roll-up Metrics</div>
      <div>Average Face Amount Needed: ${{ parseInt(visitsTotals.faceNeedsAvg).toLocaleString() }}</div>
      <div>Sum of Face Amounts Needed: ${{ parseInt(visitsTotals.faceNeedsSum).toLocaleString() }}</div>
    </div>
    <div class="mt-2">
      <div class="h3">Amounts by # of Requesters</div>
      <small>Regardless of the max face amount allowable ($250K for Securian, $500K for SBLI), this is how much users needed based on their income (x7). The number of people who requested this amount is in parenthesis.</small>
      <ul>
        <li v-for="item in visitsFaceNeeded">
          {{ item.amount }} ({{ item.quantity }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { db } from '@/utils/firebase.js'

  export default {
    name: 'Stats',

    data () {
      return {
        visitsArr: [],
        visitsTotals: {},
        visitsFaceNeeded: [],
        fbVisits: [],
      }
    },
    computed: {
      totalVisits: function() {
        return this.visitsArr.length
      },
    },
    created: function () {

    },
    methods: {
      getCount: function () {
        let count = 0
        db.ref('/visits').once('value', function(snapshot) { count = snapshot.numChildren() })
        return count
      },
      makeFBArray: function () {
        let self = this
        let faceNeedsObj = []
        let faceNeedsArr = []

        self.$firebaseRefs.fbVisits.on('value', function (snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val()
            item.key = childSnapshot.key

            if (item.behavior.isOverMaxFace === true) {
              self.visitsTotals[item.product].overMaxFace++
            }

            if (item.behavior.knockedOut === true) {
              self.visitsTotals[item.product].knockedOut++
            }

            if (!self.visitsTotals[item.product]) { self.visitsTotals[item.product] = {} }

            self.visitsTotals[item.product].total++

            self.visitsArr.push(item)

            // get the face needed into an object & find average
            if (item.behavior.faceNeeded && Number.isInteger(item.behavior.faceNeeded) && item.behavior.faceNeeded > 0 && item.behavior.faceNeeded < 3500000) {
              if (faceNeedsObj[item.behavior.faceNeeded]) {
                faceNeedsObj[item.behavior.faceNeeded]++
              } else {
                faceNeedsObj[item.behavior.faceNeeded] = 1
              }
              faceNeedsArr.push(item.behavior.faceNeeded)
            }

          })

          // create face needed array
          for (var prop in faceNeedsObj) {
            // x = amount; y = quantity
            self.visitsFaceNeeded.push({ 'amount': '$' + parseInt(prop).toLocaleString(), 'quantity': faceNeedsObj[prop] })
          }

          // sort by quantity
          function compare(a,b) {
            let comparison = 0
            if (a.quantity > b.quantity) {
              comparison = 1
            } else if (a.quantity < b.quantity) {
              comparison = -1
            }
            return comparison * -1
          }

          self.visitsFaceNeeded.sort(compare)

          // get the average
          self.visitsTotals.faceNeedsSum = faceNeedsArr.reduce((previous,current) => current += previous)
          self.visitsTotals.faceNeedsAvg = self.visitsTotals.faceNeedsSum / faceNeedsArr.length

        })
      }
    },
    watch: {
      fbVisits() {
        this.visitsArr = []
        this.visitsTotals = {
          SBLI_AU: { overMaxFace: 0, knockedOut: 0, total: 0 },
          Securian: { overMaxFace: 0, knockedOut: 0, total: 0 },
          faceNeedsSum:0,
          faceNeedsAvg:0
        }
        this.visitsFaceNeeded = []
        this.makeFBArray()
      }
    },
    firebase: {
      fbTotalsObj: {
        source: db.ref('totals'),
        asObject: true
      },
      fbVisits: {
        source: db.ref('visits'),
        readyCallback: function(ref) {
          // this.makeFBArray(ref)
        }
      }
      /*fbVisitsObj: {
        source: db.ref('visits'),
        asObject: true
      }*/
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/styles/main.scss';
</style>