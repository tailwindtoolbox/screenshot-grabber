/* eslint-env browser */

module.exports = selector => {
  return new Promise(resolve => {
    if (document.querySelector(selector) === null) return resolve(false)
    var element = document.querySelector(selector)
    element.remove()
    resolve(true)
  })
}
