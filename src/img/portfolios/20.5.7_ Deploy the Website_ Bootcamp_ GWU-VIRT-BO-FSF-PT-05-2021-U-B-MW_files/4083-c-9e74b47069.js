(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4083],{"1ffV":function(t,n,e){"use strict"
e.d(n,"c",(function(){return r}))
e.d(n,"b",(function(){return i}))
e.d(n,"a",(function(){return u}))
let o
function r(t){i()
o=function(n){return n.returnValue=t||""}
window.addEventListener("beforeunload",o)}function i(){if(o){window.removeEventListener("beforeunload",o)
o=null}}function u(t){const n=document.getElementsByTagName("IFRAME")
for(let e=0;e<n.length;e+=1)if(n[e].contentWindow===t)return n[e]
return null}},bSyB:function(t,n,e){"use strict"
e.r(n)
e.d(n,"default",(function(){return i}))
var o=e("oG6o")
var r=e("1ffV")
function i({message:t,event:n}){const e=new o["a"]
let i=t.height
i<=0&&(i=1)
const u=e.tool_content_wrapper(t.token||n.origin).data("height_overridden",true)
if(u.length>0)e.resize_tool_content_wrapper(i,u)
else{const t=Object(r["a"])(n.source)
if(t){"number"===typeof i&&(i+="px")
t.height=i
t.style.height=i}}}},oG6o:function(t,n,e){"use strict"
e.d(n,"a",(function(){return i}))
var o=e("ouhR")
var r=e.n(o)
class i{constructor(t){this.minToolHeight=t||450}sanitizedWrapperId(t){var n
return null===t||void 0===t||null===(n=t.toString())||void 0===n?void 0:n.replace(/[^a-zA-Z0-9_-]/g,"")}tool_content_wrapper(t){let n=r()(`div[data-tool-wrapper-id*='${this.sanitizedWrapperId(t)}']`)
n.length<=0&&1===r()(".tool_content_wrapper").length&&(n=r()(".tool_content_wrapper"))
return n}resize_tool_content_wrapper(t,n){let e=t
"number"!==typeof e&&(e=this.minToolHeight)
const o=n||this.tool_content_wrapper()
o.height(!t||this.minToolHeight>e?this.minToolHeight:e)}}}}])

//# sourceMappingURL=4083-c-9e74b47069.js.map