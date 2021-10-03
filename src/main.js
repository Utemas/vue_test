// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './vue/Index'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.setCookie = function (cName, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cName + '=' + escape(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}
Vue.prototype.getCookie = function (cName) {
  if (document.cookie.length > 0) {
    var cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      var cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) cEnd = document.cookie.length
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...Index,
  data: function () {
    return {
      name: 'ddd'
    }
  }
})
