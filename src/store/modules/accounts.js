const state = {
  NavyFed: {
    name: {
      fullName: 'Navy Federal Credit Union',
      shortName: 'Navy Federal',
      abbreviation: 'NFCU'
    },
    logo: {
      img: 'NFCU_horizontal_sm_rev.svg',
      width: '278px',
      height: '27px'
    },
    url: {
      staging: 'staging.1clickcoverage.com/products/',
      production: 'www.navyfederalinsurance.com/products/',
      alt_staging: 'staging.1clickcoverage.com/ns/dataimport/',
      alt_production: 'www.navyfederalinsurance.com/ns/dataimport/'
    },
    options: {
      isCoverageAmtReadOnly: true
    },
    content: {
      quoterTitle: 'Start here to get your quote.  It\'s easy!',
      quoterCoverageAmtLabel: 'Your coverage amount'
    },
    recordBehavior: true
  },
  BBVA: {
    name: {
      fullName: 'BBVA Compass Insurance Agency',
      shortName: 'BBVA Compass',
      abbreviation: 'BBVA Compass'
    },
    logo: {
      img: 'Compass_Insurance_Agency_Logo.png',
      width: '400px',
      height: '44px'
    },
    url: {
      staging: 'bbvastaging.1clickcoverage.com/ns/dataimport/',
      production: 'bbva.1clickcoverage.com/ns/dataimport/'
    },
    options: {
      isCoverageAmtReadOnly: false
    },
    content: {
      quoterTitle: 'How much coverage do I need?',
      quoterCoverageAmtLabel: 'Recommended coverage amount'
    },
    recordBehavior: false
  }
}

export default {
  state
}
