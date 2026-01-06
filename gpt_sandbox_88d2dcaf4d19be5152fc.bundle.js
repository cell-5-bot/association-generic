/*! © 2025 Yahoo Holdings, Inc. For license information, see js/gpt_sandbox_88d2dcaf4d19be5152fc.bundle.js.LICENSE.txt. */
(()=>{var e={p:""};(()=>{
if(!window.ymailAssetHost)throw new Error("window.ymailAssetHost must be set before running this application.")
;e.p=window.ymailAssetHost})(),(()=>{"use strict";function e(e,n,t){
if(void 0===t&&(t={}),!e){const e=new Error(n);e.name="Invariant"
;throw!t||0===Object.keys(t).length||(e.data=t),e}return e}let n,t,i,o,s,r
;!function(e){e.APP="APP",e.IFRAME="IFRAME"}(n||(n={})),function(e){e.REQ="REQ",
e.RES="RES"}(t||(t={})),function(e){
e.REFRESH="refresh",e.LOADED="loaded",e.INIT_ERROR="initError"
}(i||(i={})),function(e){e.MAIL="mail",e.BASIC_MAIL="basicMail",e.LOGIN="login",
e.AOL_LOGIN="aolLogin",
e.AOL_MAIL="aolMail",e.AOL_BASIC_MAIL="aolBasicMail",e.NOVATION="novation"
}(o||(o={})),function(e){
e.CLIENT="client",e.VERSION="version",e.YMREQID="ymreqid",
e.HAQ="haq",e.CACHE="cache",e.TEST_ID="testid",e.NCID="ncid"
}(s||(s={})),function(e){e.CONFIG="config"}(r||(r={}))
;const a="gpt-passback",l="ad-stacking-wrapper-";let d;!function(e){
e.SLOT_RENDER_ENDED="slotRenderEnded",
e.SLOT_REQUESTED="slotRequested",e.SLOT_RESPONSE_RECEIVED="slotResponseReceived",
e.IMPRESSION_VIEWABLE="impressionViewable"}(d||(d={}))
;const c="top_right",E="mid_center",u="message_list",g="tablet_right_rail",m="tablet_footer",L="message_read_triage",O="top_center_pg",h="desktop_footer",p={
[g]:"top_right",[m]:"top_center",[L]:"mid_center",[O]:"top_center",
[h]:"mid_center"};let I;!function(e){
e.LREC="LREC",e.LREC4="LREC4",e.LREC5="LREC5",
e.MON="MON",e.SKY="SKY",e.FULL_PANE="FULL_PANE",
e.FULL_SCREEN="FULL_SCREEN",e.HORIZON_DESKTOP="HORIZON_DESKTOP",
e.HORIZON_MOBILE="HORIZON_MOBILE",
e.BILLBOARD="BILLBOARD",e.FLUID="FLUID",e.SPOTLIGHT="SPOTLIGHT",
e.LIGHTHOUSE="LIGHTHOUSE",
e.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",e.LEADERBOARD="LEADERBOARD",
e.NATIVE_MOBILE_LEADERBOARD="NATIVE_MOBILE_LEADERBOARD",
e.DESKTOP_LEADERBOARD="DESKTOP_LEADERBOARD",
e.DESKTOP_LEADERBOARD_FOOTER="DESKTOP_LEADERBOARD_FOOTER"}(I||(I={}));const R={
[I.LREC]:[300,250],[I.LREC4]:[300,250],[I.LREC5]:[300,250],[I.MON]:[300,600],
[I.SKY]:[160,600],[I.FULL_PANE]:[1200,800],[I.FULL_SCREEN]:[1440,1024],
[I.HORIZON_DESKTOP]:[3,1],[I.HORIZON_MOBILE]:[3,1],[I.SPOTLIGHT]:[3,2],
[I.LIGHTHOUSE]:[2,2],[I.MEDIUM_RECTANGLE]:[300,250],[I.BILLBOARD]:[970,250],
[I.FLUID]:["fluid"],[I.LEADERBOARD]:[320,50],
[I.NATIVE_MOBILE_LEADERBOARD]:[380,100],[I.DESKTOP_LEADERBOARD]:[728,90],
[I.DESKTOP_LEADERBOARD_FOOTER]:[728,90]},A=(I.LREC,I.LREC4,I.MON,I.SKY,I.LREC5,{
[I.LREC]:"Slot300_250_1",[I.LREC4]:"Slot300_250_2",[I.LREC5]:"Slot300_250_3",
[I.MON]:"Slot300_600",[I.SKY]:"Slot160_600"
}),f=0,_=0,v="RENDER_SUCCEEDED",w="RENDER_FAILED",y="SLOT_REQUESTED",C="SLOT_RESPONSE_RECEIVED",D="IMPRESSION_VIEWABLE",S="index",b={
[o.MAIL]:"yahoo_mail",[o.NOVATION]:"yahoo_mail",[o.BASIC_MAIL]:"yahoo_mail",
[o.AOL_MAIL]:"aol_webmail",[o.AOL_BASIC_MAIL]:"aol_webmail",
[o.LOGIN]:"yahoo_login",[o.AOL_LOGIN]:"aol_login"},N={uk:"emea-",de:"emea-",
ca:"ca-",us:""};let M;!function(e){e.IAB="IAB",e.PEER39="PEER39"}(M||(M={}))
;const T={[M.IAB]:{2.2:"YAHOO_IAB_CONTENT_2_2",3.1:"YAHOO_IAB_CONTENT_3_1"},
[M.PEER39]:{"1.0":"PEER_39"}},B={YAHOO_IAB_CONTENT_2_2:6,YAHOO_IAB_CONTENT_3_1:9
},P={[M.IAB]:"yahoo.com"
},H=/^(https:\/\/([a-z0-9-]+[.])*(mail|login)\.(aol|yahoo)\.com)$/,x=/^(https:\/\/(?:norrin\.)?(alpha-|canary-)?gpt\.mail\.yahoo\.net)$/
;const U=class{constructor(t){
let{mode:i,appName:o,targetOrigin:s,iframeRef:r,useAdshieldProxy:a=!1}=t
;this.messageId=0,
this.listener=null,i&&Object.keys(n).map((e=>n[e])).includes(i)||e(!1,"Valid 'mode' needs to be specified"),
s||e(!1,"Valid 'targetOrigin' needs to be specified"),
i!==n.APP||r||e(!1,"Valid 'iframeRef' needs to be specified"),
this.mode=i,this.targetOrigin=s,
this.iframeRef=r,this.appName=o||"MAIL_APP",this.useAdshieldProxy=a}
sendMessage(e){var t,i
;if(e.requestId=++this.messageId,this.mode===n.APP)null==(t=this.iframeRef)||null==(i=t.contentWindow)||i.postMessage(e,this.targetOrigin);else if(this.mode===n.IFRAME){
var o,s;null==(o=window)||null==(s=o.parent)||s.postMessage(e,this.targetOrigin)
}}sendRequestMessage(e,n){void 0===n&&(n={}),this.sendMessage({app:this.appName,
type:t.REQ,name:e,data:n})}isReceivedMessageValid(e){const t=this.mode
;return!!Object.keys(n).map((e=>n[e])).includes(t)&&(t===n.APP?e.source===(null==(i=this.iframeRef)?void 0:i.contentWindow)&&(this.useAdshieldProxy?e.origin===this.targetOrigin:x.test(e.origin)):!!(t!==n.IFRAME||H.test(e.origin)&&e.source===window.parent))
;var i}attachListener(e){const n=n=>{this.isReceivedMessageValid(n)&&e(n)}
;this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null),window.addEventListener("message",n),this.listener=n}
detachListener(){
this.listener&&(window.removeEventListener("message",this.listener),
this.listener=null)}};function F(){var e,n
;return(null==(e=window)||null==(n=e.AppBootstrapData)?void 0:n.environment)||"production"
}function k(){return"devbox"===F()||"openhouse"===F()}const G=function(e,n){
void 0===n&&(n=1360);const t=document.getElementById(a);if(!t||!e)return
;const i=null==t?void 0:t.children[0],o=null==i?void 0:i.children[0],s=window.innerWidth,r=function(e,n,t){
switch(void 0===t&&(t=1360),n){case I.BILLBOARD:
return e>=970?250:Math.floor(e/3.88);case I.HORIZON_DESKTOP:{
const n=e>480&&e<t?4.44:5.33;return Math.floor(e/n)}case I.HORIZON_MOBILE:{
const n=1.78;return Math.floor(e/n)}case I.SPOTLIGHT:{const n=.89
;return Math.floor(e/n)}case I.MEDIUM_RECTANGLE:
return e>=300?250:Math.floor(e/1.2)}return 0}(innerWidth,e,n)
;if(e!==I.MEDIUM_RECTANGLE){if(e===I.LIGHTHOUSE){
const e=window.innerHeight,n=e/1.78
;return i.style.height="100%",i.style.width=n+"px",
o.height=e.toString(),o.width=n.toString(),void(t.style.textAlign="center")}
i&&o&&(i.style.height=r+"px",
i.style.width="100%",o.height=r.toString(),o.width=s.toString())
}else t.style.textAlign="center"};function j(){
return j=Object.assign?Object.assign.bind():function(e){
for(var n=1;n<arguments.length;n++){var t=arguments[n]
;for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e
},j.apply(null,arguments)}const K=["slot","yieldGroupIds"],V=e=>{
const{client:n,messageClient:t}=e;let i;return e=>{var s,r
;const l=null==e||null==(s=e.data)?void 0:s.id,c=null==e||null==(r=e.data)?void 0:r.size,E=(null==e?void 0:e.name)!==v,u=function(e,n){
if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){
if(-1!==n.indexOf(i))continue;t[i]=e[i]}return t
}(e.gptEvent||{},K),g=window._YMIframeConfig||{},{narrowScreenWidth:m}=g,L=((e,n,t)=>{
const i=Object.keys(A).find((n=>A[n]===e))||null;if(i)return i
;if(!Array.isArray(n)||!n)return null;if(0===n[0]&&0===n[1])return I.FLUID
;const{positions:o=[]}=t;let s=o.reduce(((e,n)=>{const{positionUnits:t=[]}=n
;return t.forEach((n=>{e.includes(n)||e.push(n)})),e}),[])
;s.length||(s=Object.keys(R));const r=s.find((e=>{const t=R[e]
;return t[0]===n[0]&&t[1]===n[1]}));return r||null
})(l,c,g),O=[I.LREC5,I.LREC4,I.LREC,I.MON]
;if(!E)if(n===o.LOGIN||n===o.AOL_LOGIN)(e=>{const n=document.getElementById(a)
;Array.isArray(e)&&n&&(0===e[0]&&0===e[1]?n.setAttribute("style","width:600px;height:1024px;padding-left:200px;padding-right:800px;"):600===e[0]&&470===e[1]?n.setAttribute("style","padding-left:138px;padding-top:12px;"):n.setAttribute("style","width:"+e[0]+"px;height:"+e[1]+"px"))
})(c);else if(L===I.NATIVE_MOBILE_LEADERBOARD||L===I.LEADERBOARD)(e=>{
const n=document.getElementById(a)
;n&&e&&n.setAttribute("style","text-align:center")})(L);else if(O.includes(L)){
const e=document.getElementById("Slot300_250_1"),t=document.getElementById("Slot300_250_3"),i=document.getElementById("Slot300_600")
;if(e&&t&&i){
const s=n===o.NOVATION?"532px":"536px",r="none"!==getComputedStyle(i).display&&"none"===getComputedStyle(e).display?"618px":s
;t.style&&r!==t.style.top&&(t.style.top=r)}
}else L===I.HORIZON_DESKTOP||L===I.HORIZON_MOBILE||L===I.BILLBOARD||L===I.SPOTLIGHT||L===I.LIGHTHOUSE||L===I.MEDIUM_RECTANGLE?(i&&window.removeEventListener("resize",i),
i=()=>{G(L,m)
},i(),window.addEventListener("resize",i)):i&&(window.removeEventListener("resize",i),
i=null);if(t){const e=j({},u,{position:L,isEmpty:E,size:c})
;t.sendRequestMessage(d.SLOT_RENDER_ENDED,e)}}
},q=(e,n)=>(n===o.LOGIN||n===o.AOL_LOGIN)&&(void 0===e||e),Y=e=>{
const{benji:n,messageClient:t,client:i}=e;n.on(y,(e=>{const{messageClient:n}=e
;return()=>{n.sendRequestMessage(d.SLOT_REQUESTED)}})({messageClient:t
})),n.on(v,V({client:i,messageClient:t})),n.on(w,V({client:i,messageClient:t})),
n.on(D,(e=>{const{messageClient:n}=e;return()=>{
n.sendRequestMessage(d.IMPRESSION_VIEWABLE)}})({messageClient:t})),n.on(C,(e=>{
const{messageClient:n}=e;return()=>{
n.sendRequestMessage(d.SLOT_RESPONSE_RECEIVED)}})({messageClient:t}))},z=e=>{
const{spaceId:n,senderDomain:t,senderKaminoLevel1:i,senderKaminoLevel2:o}=e
;return j({},n?{spaceid:n}:null,t?{senderdomain:t}:null,i?{senderkaminolevel1:i
}:null,o?{senderkaminolevel2:o}:null)},W=e=>{const{adLocation:n,adIndex:t}=e
;let i="";if(n===u){i=""+E+(1===t||!t?"":"_"+t)}else i=p[n]||n;return i},Z=e=>{
const{adLocation:n,adIndex:t,senderMatchedPremiumDomain:i="",senderDomainCategory:o="",senderDomainSubcategory:s="",region:r}=e,a=r&&N[r]||""
;return j({},i?{[a+"senderdomain"]:i}:null,o?{[a+"senderdomaincategory"]:o
}:null,s?{[a+"senderdomainsubcategory"]:s}:null,{loc:W({adLocation:n,adIndex:t})
})},Q=e=>{
const n=e.positions||[],{senderMatchedPremiumDomain:t,senderDomainCategory:i,senderDomainSubcategory:o,region:s}=e.targetingConfig||{}
;return n.reduce(((e,n)=>{
const{div:r,adLocation:a,adUnitPath:l,size:d,stackGroup:c,adIndex:E}=n
;return e[r]=j({id:r,kvs:Z({adLocation:a,adIndex:E,region:s,
senderMatchedPremiumDomain:t,senderDomainCategory:i,senderDomainSubcategory:o}),
path:l,region:S,size:d},c?{stackGroup:c}:null),e}),{})},$=function(e){
void 0===e&&(e={client:o.MAIL,benjiFeatures:[]})
;const{client:n,benjiFeatures:t}=e
;return n===o.LOGIN||n===o.AOL_LOGIN?t.filter((e=>"enableAssertiveYield"!==e)):t
},J=e=>{const{contextualSignals:n={}}=e,t=[];return Object.keys(n).forEach((e=>{
var i;const o=e,s=null==(i=n[o])?void 0:i.versions;switch(o){case M.IAB:
case M.PEER39:s&&Object.keys(s).forEach((e=>{var n
;const i=null==(n=s[e])?void 0:n.segments,r=T[o][e];if(i.length&&r){const e={
id:r,segment:i.map((e=>({id:e})))};P[o]&&(e.name=P[o]),B[r]&&(e.ext={segtax:B[r]
}),t.push(e)}}))}})),t},X=function(e,n){
void 0===e&&(e=[]),void 0===n&&(n=!1),e.forEach((e=>{
let{div:t,stackGroup:i}=e,o=document.getElementById(t)||i&&document.getElementById(t+"-collapse")
;if(o)return;o=document.createElement("div"),o.id=t;const s=t===A[I.LREC5]
;if(i){const e=""+l+i;let s=document.getElementById(e)
;return s||(s=document.createElement("div"),
s.id=e,s.style.width="300px",s.style.height="600px",
s.style.overflow="hidden",document.body.appendChild(s)),
n&&t===A[I.MON]&&(o.id=t+"-collapse",
o.style.overflow="hidden"),void s.appendChild(o)}if(s){const e=""+l+c
;let n=document.getElementById(e)
;return n||(n=document.createElement("div"),n.id=e,
n.style.width="300px",n.style.overflow="hidden",
n.style.position="relative",document.body.appendChild(n)),
n.style.height="866px",void n.appendChild(o)}document.body.appendChild(o)}))
},ee=e=>{var n;const{oldPositions:t,removeContainers:i=!0}=e,o=t.map((e=>{
let{div:n}=e;return n}));null==(n=window.benji)||n.destroy(o),i&&function(e){
void 0===e&&(e=[]),e.forEach((e=>{var n;let{div:t,stackGroup:i}=e;var o
;null==(n=document.getElementById(t))||n.remove(),
i&&(null==(o=document.getElementById(t+"-collapse"))||o.remove())}))}(t)
},ne=e=>{var n;const{renderConfig:t}=e,i=!t.yahooPrebid;X(t.positions,i)
;const o=Q(t);null==(n=window.benji)||n.render(o)},te=e=>{var t
;const{config:s,client:r,haqEnabled:l}=e,d=(e=>{
const{positions:n=[],adUnitPath:t,size:i,div:o=a,targetingConfig:s}=e
;return n.length||n.push({adUnitPath:t,adLocation:null==s?void 0:s.adLocation,
size:i,div:o}),n})(s),E=new U({mode:n.IFRAME,targetOrigin:s.pageUrl
}),u=!s.yahooPrebid
;s.positions=d,E.sendRequestMessage(i.LOADED),X(s.positions,u);const g=(e=>{
const{config:n,client:t=o.MAIL,haqEnabled:i=!0}=e,{targetingConfig:s={},headerBidderConfig:r={},adStackingV2Enabled:a=!1,benjiFeatures:l=[],allowFirstPartyAds:d=!0,disableAssertiveYield:c,yahooPrebid:E=!1,limited:u=!1,npa:g=!1,pageUrl:m="",geoCountryCode:L="",tosCountryCode:O="",collapseWhenNoFill:h=!0,perfOffset:p=0,mediaTypeSizeBlocking:I=!1,userSegments:R=!1,contextualSignals:A={},ynet:v}=n,{age:w=f,gender:y=_,colo:C="",lu:D="",device:S="",region:N="",lang:M="",spaceId:T="",AXIds:B="",ud:P,ubid:H,tblaId:x="",adBlocker:U="",senderDomain:F,senderKaminoLevel1:k,senderKaminoLevel2:G,dmiConsent:K,partner:V="",theme:Y}=s,{buckets:W=[],cobrand:Z=""}=r,X=b[t]||b[o.MAIL],ee=u?[]:J({
contextualSignals:A});return{i13n:j({bka:w.toString(),bkg:y.toString(),colo:C,
lu:D,site:X,device:S,region:N,lang:M,axids:B},P?{ud:P}:null,H?{ubid:H}:null,{
tbla_id:x,bucket:W,feature:$({client:t,benjiFeatures:l}),cobrand:V||Z,
partner:V||Z,url:m},U?{abk:U}:null,{usercountry:L.toUpperCase(),
toscountry:O.toUpperCase()},z({spaceId:T,senderDomain:F,senderKaminoLevel1:k,
senderKaminoLevel2:G}),{dmi_consent:"true"===K},Y?{theme:Y}:null,v?{ynet:v
}:null),feature:{headerBidding:!1,enableYahooPrebid:E,enableRefreshDebounce:!!E,
enableNTSFallback:!1,enableEdgeToEdge:!1,enableAdStacking:a,
collapseWhenNoFill:h,enablef10d509c:i,disableAssertiveYield:q(c,t),
enableMediaTypeSizeBlocking:I,enableUserSegments:R},setting:j({renderOnStart:!0,
consent:{allowOnlyLimitedAds:u,allowOnlyNonPersonalizedAds:g,
allowFirstPartyAds:d},tracking:{debug:!1,metrics:!1,performance:!0}},p?{logger:{
perfOffset:p}}:null),positions:Q(n),event:{},firstPartyData:j({},ee.length?{
content:ee}:null)}})({config:s,client:r,haqEnabled:l})
;void 0!==window.benji?window.benji.start(g):window.benji={benjiConfig:g
},null!=(t=window.benji)&&t.isReady?Y({client:r,benji:window.benji,
messageClient:E}):window.addEventListener("benji:ready",(()=>{Y({client:r,
benji:window.benji,messageClient:E})})),E.attachListener((e=>{var n
;if((null==e||null==(n=e.data)?void 0:n.name)===i.REFRESH){
const{data:n}=e.data,{config:i,spaceIdHasChanged:s,contextualSignalsChanged:r=!1,redefineTargeting:a=!1,redefinePositionTargeting:l=!1,targetingConfig:E={}}=n,{spaceId:u,senderKaminoLevel1:g,senderKaminoLevel2:m,senderDomain:L}=E,O="abp"===E.adBlocker
;var t;if(window._YMIframeConfig=i,a)null==(t=window.benji)||t.updateI13N(z({
spaceId:u,senderDomain:L,senderKaminoLevel1:g,senderKaminoLevel2:m}))
;const{positions:h,contextualSignals:p={}}=i;var o
;if(r)null==(o=window.benji)||null==o.updateFirstPartyData||o.updateFirstPartyData(J({
contextualSignals:p}),"content");d&&h&&h.length!==d.length?(ee({oldPositions:d,
removeContainers:!0}),ne({renderConfig:i})):l?(ee({oldPositions:d}),ne({
renderConfig:j({},i,{targetingConfig:E})})):((e,n)=>{var t
;const{isABPDetected:i,spaceIdHasChanged:o}=n||{};if(i){
const n=null==e?void 0:e.some((e=>{let{div:n}=e;return n===A[I.LREC]
})),t=null==e?void 0:e.some((e=>{let{div:n}=e;return n===A[I.LREC4]
})),i=null==e?void 0:e.every((e=>{let{adLocation:n}=e;return n.includes(c)}))
;var s,r
;if(n&&t&&i)return o?void(null==(r=window.benji)||r.refresh([A[I.LREC],A[I.LREC4]],{
checkViewport:!1})):void(null==(s=window.benji)||s.refresh([A[I.LREC]],{
checkViewport:!1}))}null==(t=window.benji)||t.refresh(S,{checkViewport:!1})
})(h,{isABPDetected:O,spaceIdHasChanged:s})}}))},ie=e=>{new U({mode:n.IFRAME,
targetOrigin:"*"}).sendRequestMessage(i.INIT_ERROR,e)};(()=>{var e
;window.googletag=window.googletag||{cmd:[]}
;const n=(null==(e=window.location.hash)?void 0:e.substring(1))||"",t=(e=>{
const n={};if(e){const t=e.substring(1).split("&");for(let e=0;e<t.length;e++){
const i=t[e].split("=");n[decodeURIComponent(i[0])]=decodeURIComponent(i[1]||"")
}}return n})(window.location.search),i=t.ymreqid,o=t.client,r="1"===t[s.HAQ]
;let a={};if(!n){const e="Config hash is empty";throw ie({error:e,ymreqid:i
}),new Error(e)}try{const e=n.split("=")[1]||"{}"
;a=JSON.parse(decodeURIComponent(e))}catch(l){if(ie({
error:"Failed to parse config",ymreqid:i}),k())throw l;return}
window._YMIframeConfig=a,te({config:a,client:o,haqEnabled:r})})()})()})();