// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase'
import {mapGetters, mapActions} from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueMask from 'di-vue-mask'
import vueSmoothScroll from 'vue-smoothscroll'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'vue-popperjs/dist/css/vue-popper.css'
import 'url-search-params-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'babel-polyfill'
Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
Vue.use(VueMask)

Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.directive('radio', {
  twoWay: true,
  bind: function () {
    var self = this
    var btns = $(self.el).find('.btn')
    btns.each(function () {
      $(this).on('click', function () {
        var v = $(this).find('input').get(0).value
        self.set(v)
      })
    })
  },
  update: function () {
    var value = this._watcher.value
    if (value) {
      this.set(value)
      var btns = $(this.el).find('.btn')
      btns.each(function () {
        $(this).removeClass('active')
        var v = $(this).find('input').get(0).value

        if (v === value) {
          $(this).addClass('active')
        }
      })
    } else {
      var input = $(this.el).find('.active input').get(0)
      if (input) {
        this.set(input.value)
      }
    }
  }
})

window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
