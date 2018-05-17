export default {
  product: state => state.products[state.current.product],
  account: state => state.accounts[state.current.account]
}
