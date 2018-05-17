export default {
  /* setProduct ({ state, commit }, product) {
    commit('setProduct', product)
  } */

  setProduct ({state}, product) {
    state.current.update({product: product})
  }
}
