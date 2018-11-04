;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-bbgzhuzhishouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M947.001 551.472c-22.014 22.014-57.71 22.014-79.723 0l-334.701-278.327c-5.513-5.231-12.515-8.017-19.601-7.938-7.092-0.079-14.093 2.707-19.607 7.938l-334.694 276.562c-22.019 22.019-57.71 22.019-79.729 0-22.014-22.014-22.014-57.71 0-79.723l393.34-335.197c11.224-11.224 25.982-16.573 40.69-16.354 14.708-0.219 29.467 5.13 40.69 16.354 0 0 54.112 56.835 38.34 41.068l360.389 304.016c15.344 21.98 14.223 51.982-5.395 71.6zM738.47 174.198c0-31.135 25.238-56.373 56.373-56.373 31.135 0 56.373 25.238 56.373 56.373v167.046l-112.746-102.176v-64.869zM794.843 558.378v292.302c0 31.135-25.238 56.373-56.373 56.373h-112.747v-112.747c0-31.135-25.238-56.373-56.373-56.373s-56.373 25.238-56.373 56.373v112.747h-225.494c-31.135 0-56.373-25.238-56.373-56.373v-292.302l281.867-225.494 281.866 225.494z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
