;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-yx" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M889.917724 247.183705c0-63.660902-51.597145-115.258047-115.237581-115.258047L248.08268 131.925658c-63.640436 0-115.238604 51.597145-115.238604 115.258047l0 526.558577c0 63.659879 51.597145 115.258047 115.238604 115.258047l526.597463 0c63.640436 0 115.237581-51.598168 115.237581-115.258047L889.917724 247.183705zM261.974062 331.156212l503.795131 0c6.886851 0 13.502525-5.447059 19.611663-2.957355L513.657244 534.044062 237.730914 332.129376C244.930897 328.197834 253.218654 331.156212 261.974062 331.156212zM214.949049 668.621107c-2.0241-5.214768-2.411933-10.93505-2.411933-16.848737L212.537116 483.516272 212.537116 368.452653c0-1.595334-0.662079-3.151783-0.584308-4.747117l207.090569 155.375743L214.949049 668.621107zM765.769192 709.693548 261.974062 709.693548c-3.540639 0-7.004531-4.202719-10.428513-4.90266l206.935026-153.62589 40.974203 29.78742 14.669094 10.447956 14.475689-11.402701 42.491767-32.860409 208.647017 156.737764C775.263427 705.276958 770.595105 709.693548 765.769192 709.693548zM810.22673 650.916886c0 5.252631 2.529613 10.194176 1.011027 14.981203l-202.051809-149.383262L811.705408 358.569562c0.62217 3.152806-1.477654 6.499018-1.477654 9.884115L810.227754 650.916886z"  ></path>'+
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
