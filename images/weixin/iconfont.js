;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M308.192709 344.503195m-37.696554 0a36.838 36.838 0 1 0 75.393107 0 36.838 36.838 0 1 0-75.393107 0Z"  ></path>'+
      ''+
      '<path d="M593.603041 539.442002m-29.510104 0a28.838 28.838 0 1 0 59.020208 0 28.838 28.838 0 1 0-59.020208 0Z"  ></path>'+
      ''+
      '<path d="M500.482177 344.503195m-37.696554 0a36.838 36.838 0 1 0 75.393107 0 36.838 36.838 0 1 0-75.393107 0Z"  ></path>'+
      ''+
      '<path d="M813.979194 61.609173 208.995453 61.609173c-80.099293 0-145.035234 65.147766-145.035234 145.512095L63.960219 811.351855c0 80.364329 64.935941 145.512095 145.035234 145.512095l604.983741 0c80.100316 0 145.035234-65.147766 145.035234-145.512095L959.014428 207.122291C959.015452 126.756939 894.080533 61.609173 813.979194 61.609173zM399.842059 661.400658c-33.871435 0-61.108776-6.918573-95.051843-13.624299l-94.859461 47.563272 27.13808-81.628112c-67.935252-47.481408-108.585067-108.655675-108.585067-183.206602 0-129.11259 122.1889-230.774991 271.358291-230.774991 133.427872 0 250.313999 81.236186 273.795806 190.570313-8.633634-0.964978-17.334807-1.594311-26.1291-1.594311-128.900765 0-230.705406 96.198969-230.705406 214.751039 0 19.73139 3.070942 38.733163 8.373715 56.861032C416.803359 660.97701 408.358013 661.400658 399.842059 661.400658zM800.123628 756.453525l20.410865 67.815525-74.436316-40.770566c-27.139104 6.80294-54.398958 13.626345-81.422428 13.626345-129.108496 0-230.797503-88.24788-230.797503-196.924022 0-108.495016 101.689007-196.929138 230.797503-196.929138 121.937167 0 230.496651 88.434122 230.496651 196.929138C895.172401 661.400658 854.591147 715.590861 800.123628 756.453525z"  ></path>'+
      ''+
      '<path d="M741.470787 539.442002m-29.510104 0a28.838 28.838 0 1 0 59.020208 0 28.838 28.838 0 1 0-59.020208 0Z"  ></path>'+
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
