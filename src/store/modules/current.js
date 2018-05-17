let url = window.location.href.toLowerCase()

let currentAccount = ''
let currentProduct = ''
let currentEnv = 'staging'

/* eslint-disable */
switch (true) {
  case url.indexOf('bbva') > -1:
    currentAccount = 'BBVA'
    currentProduct = 'Securian'
    break
  case url.indexOf('navyfederal') > -1:
    currentAccount = 'NavyFed'
    break
  default:
    currentAccount = 'NavyFed'
    currentProduct = 'Securian'
}

if (currentAccount == 'NavyFed') {
  var urlHasProduct = false
  switch (true) {
    case url.indexOf('sbli') > -1:
      currentProduct = 'SBLI_AU'
      urlHasProduct = true
      break
    case url.indexOf('securian') > -1:
      currentProduct = 'Securian'
      urlHasProduct = true
      break
  }

  if (urlHasProduct) {
    localStorage.setItem('covrLP_product', currentProduct)
  }
}

if (currentAccount == 'NavyFed' && !currentProduct) {
  currentProduct = (localStorage.getItem('covrLP_product')) ? localStorage.getItem('covrLP_product') : 'Securian'
  console.log('set from local storage:' + currentProduct)
}

if (url.indexOf('1clickcoverage') > -1) {
  currentEnv = 'production'
}

const state = {
  product: currentProduct,
  account: currentAccount,
  environment: currentEnv
}

export default {
  state
}
