const state = {
  SBLI_AU: {
    minFace: 100000,
    maxFace: 500000,
    allowedFace: [100000, 125000, 150000, 175000, 200000, 225000, 250000, 275000, 300000, 325000, 350000, 375000, 400000, 425000, 450000, 475000, 500000],
    minCost: 19,
    idealTerm: 20,
    minAge: 18,
    maxAge: 60,
    name: 'SBLI',
    urlParam: 'sbli',
    content: {
      benefitsHeader: 'Get a quote and apply online in less than 7 minutes!',
      benefitsProcess: 'With no in-person medical exam to hassle with, you just get your quote and apply online (in less than 7 minutes!), then have a convenient phone conversation',
      benefitsCompletion: 'In most cases the process is completed in <strong>less than a week!</strong>',
      benefitsMedical: 'No in-person medical exam - just answer a few question online and over the phone!',
      faqRequirement: 'Unlike most life insurance policies, no in-person medical examination is required. Instead, you\'ll be asked some questions about your health and habits online and over the phone (it doesn\'t take long).',
      steps: [
        {
          title: 'Get a quote',
          text: 'Easily calculate how much you need, answer four simple questions, and decide how long you need insurance to get your initial quote.'
        },
        {
          title: 'Apply online',
          text: 'Just enter your basic information to get the process started.'
        },
        {
          title: 'Have a conversation',
          text: 'A friendly representative will call to ask basic questions about your health, lifestyle, income, and beneficiaries (those who would receive the money in the event of your unexpected death).'
        },
        {
          title: 'You\'re covered',
          text: 'Your information is reviewed (a process called "underwriting"). Once you\'re approved (usually within a week), you can rest assured that your loved ones are protected!'
        }
      ]
    },
    term: {
      available: [
        {
          term: 10,
          value: 3
        },
        {
          term: 15,
          value: 4
        },
        {
          term: 20,
          value: 5
        },
        {
          term: 25,
          value: 6
        },
        {
          term: 30,
          value: 7
        }
      ]
    },
    fields: {
      military: false,
      totalFields: 4
    }
  },
  Securian: {
    minFace: 10000,
    maxFace: 250000,
    allowedFace: [10000, 25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 225000, 250000],
    minCost: 37,
    minAge: 18,
    maxAge: 60,
    idealTerm: 10,
    urlParam: 'minnmls',
    name: 'Securian',
    content: {
      benefitsHeader: 'Get a quote and complete the process online!',
      benefitsProcess: 'With no medical exam to hassle with, you just get your quote and complete the entire process online',
      benefitsCompletion: 'Completely online process with <strong>immediate approval</strong> for qualifying applicants!',
      benefitsMedical: 'No medical exam - just answer basic medical questions online!',
      faqRequirement: 'Unlike most life insurance policies, no medical examination is required. Instead, you\'ll be asked some questions about your health and habits online (it doesn\'t take long).',
      steps: [
        {
          title: 'Get a quote',
          text: 'Easily calculate how much you need, answer four simple questions, and decide how long you need insurance to get your initial quote.'
        },
        {
          title: 'Get approved online',
          text: 'Just enter your basic information and complete everything through our easy online process.'
        },
        {
          title: 'You\'re covered',
          text: 'Your information is reviewed (a process called "underwriting"). Once you\'re approved (usually within a week), you can rest assured that your loved ones are protected!'
        }
      ]
    },
    term: {
      available: [
        {
          term: 5,
          value: 5
        },
        {
          term: 10,
          value: 10
        },
        {
          term: 15,
          value: 15
        },
        {
          term: 20,
          value: 20
        }
      ]
    },
    fields: {
      military: true,
      totalFields: 5
    }
  }
}

export default {
  state
}
