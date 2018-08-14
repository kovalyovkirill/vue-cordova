exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof FCMPlugin === 'undefined') {
      return cb(false)
    }

    // default values
    Vue.cordova.FCMPlugin = FCMPlugin

    return cb(true)

  }, false)
}
