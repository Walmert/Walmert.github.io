(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70479],{212263:function(e,i,o){"use strict";o.d(i,{W:function(){return s}});var t=o(390239),n=(o(156055),o(489621)),r=o.n(n),l=o(949648),a=o.n(l);const d=(e,i)=>{if(e)return;const o="LD: ".concat(i||"unknown violation");console.error(o)},s=e=>{const{children:i,className:o,...n}=function(e,i){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const t=i.displayName||i.name||"Unknown";o&&d(void 0===e["aria-label"],"`".concat(t,"` accessibility violation. `").concat(t,"` is banned from using `aria-label`."));const n={};for(const l in e)if(e.hasOwnProperty(l)){const i=e[l];"UNSAFE_className"===l||"className"===l?n.className=r()(n.className,i):"UNSAFE_style"===l||"style"===l?n.style=n.style?{...n.style,...i}:i:n[l]=i}return n}(e,s,!0);return(0,t.jsx)("div",{className:r()(a().container,o),...n,children:i})};s.displayName="Container"},163137:function(e,i,o){"use strict";o.d(i,{i:function(){return r}});var t=o(390239),n=o(263123);function r(e,i,o){return r=>(0,n.v)()[e]?(0,t.jsx)(i,{...r}):(0,t.jsx)(o,{...r})}},656080:function(e,i,o){"use strict";o.d(i,{E:function(){return l}});var t=o(390239),n=o(156055),r=o(466046);function l(e){const i=(0,n.useRef)(null),{0:o,1:l}=(0,n.useState)(!1);var a;return(0,r.P)(i,(i=>{!o&&i.isIntersecting&&(l(!0),e.onInView&&e.onInView())}),{rootMargin:"0px 0px ".concat(e.offset,"px 0px"),threshold:[0,1]}),(0,t.jsx)("span",{ref:i,"data-testid":"lazy-render","data-rendered":o,children:o?e.children:null!==(a=e.placeholder)&&void 0!==a?a:null})}l.displayName="LazyRender"},162090:function(e,i,o){"use strict";var t,n,r,l,a;o.d(i,{i:function(){return v},t:function(){return u}}),function(e){e[e.Impression=1]="Impression",e[e.ViewableMRC50=2]="ViewableMRC50",e[e.ViewableMRC100=3]="ViewableMRC100",e[e.ViewableVideo50=4]="ViewableVideo50",e[e.ThirdPartyImpression=501]="ThirdPartyImpression",e[e.ThirdPartyViewability=502]="ThirdPartyViewability",e[e.ThirdPartyVideoViewability=504]="ThirdPartyVideoViewability"}(l||(l={})),function(e){e[e.Image=1]="Image",e[e.JS=2]="JS"}(a||(a={}));const d=e=>{const i={};return Object.keys(e).forEach((o=>{const t=e[o];return""!==t&&void 0!==t&&(i[o]=t),i})),i},s=function(e,i){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(e||[]).filter((e=>e.event===i&&e.method===o)).map((e=>e.url))},u=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(null===e||void 0===e||null===(t=e.metaData)||void 0===t?void 0:t.adServer)||"GAM";var o,n,r,d,u;if(!e||!e.assets||!e.metaData||!(null===(o=Object.keys(e.assets))||void 0===o?void 0:o.length)||!(null===(n=Object.keys(e.metaData))||void 0===n?void 0:n.length))return{__typename:"DisplayAd",status:"SUCCESS"};const v=e.assets,c=e.metaData,m=e.eventTrackers||[],h=s(m,l.Impression,a.Image),p=s(m,l.ViewableMRC50,a.Image),g=s(m,l.ThirdPartyImpression,a.Image).slice(0,3),y=s(m,l.ThirdPartyViewability,a.JS).slice(0,2);return{__typename:"DisplayAd",status:"SUCCESS",json:{headline:(null===v||void 0===v?void 0:v[601])||"",subhead:(null===v||void 0===v?void 0:v[602])||"",subHeading:(null===v||void 0===v?void 0:v[602])||"",logoAltText:(null===v||void 0===v?void 0:v[603])||"",imageAltText:(null===v||void 0===v?void 0:v[605])||"",legalDisclaimerLabel:(null===v||void 0===v?void 0:v[606])||"",legalDisclaimerText:(null===v||void 0===v?void 0:v[607])||"",heading:(null===v||void 0===v?void 0:v[608])||(null===v||void 0===v?void 0:v[601])||"",mobileImage:(null===v||void 0===v?void 0:v[701])||"",tabletImage:(null===v||void 0===v?void 0:v[702])||"",desktopImage:(null===v||void 0===v?void 0:v[703])||"",mobileLogo:(null===v||void 0===v?void 0:v[704])||"",tabletLogo:(null===v||void 0===v?void 0:v[705])||"",desktopLogo:(null===v||void 0===v?void 0:v[706])||"",logoImage:(null===v||void 0===v?void 0:v[707])||"",mainImage:(null===v||void 0===v?void 0:v[708])||"",image:(null===v||void 0===v?void 0:v[708])||(null===v||void 0===v?void 0:v[710])||"",mainShortImage:(null===v||void 0===v?void 0:v[709])||"",desktopBrandImage:(null===v||void 0===v?void 0:v[711])||(null===v||void 0===v?void 0:v[703])||"",desktopBrandLogo:(null===v||void 0===v?void 0:v[712])||(null===v||void 0===v?void 0:v[706])||"",mobileBrandImage:(null===v||void 0===v?void 0:v[713])||(null===v||void 0===v?void 0:v[701])||"",mobileBrandLogo:(null===v||void 0===v?void 0:v[714])||(null===v||void 0===v?void 0:v[704])||"",adUnitID:c.categoryId||(null===c||void 0===c||null===(r=c.extendedProps)||void 0===r?void 0:r.adUnitID)||"",advertiserID:c.advertiserId||"",orderID:c.campaignId||"",copyCardColor:(null===v||void 0===v?void 0:v[801])||"",accentBarColor:(null===v||void 0===v?void 0:v[802])||"",fontColor:(null===v||void 0===v?void 0:v[803])||"",headlineColor:(null===v||void 0===v?void 0:v[804])||"",subheadColor:(null===v||void 0===v?void 0:v[805])||"",ctaColor:(null===v||void 0===v?void 0:v[806])||"",legalDisclaimerColor:(null===v||void 0===v?void 0:v[807])||"",ctaTextColor:(null===v||void 0===v?void 0:v[808])||"",sponsoredTextColor:(null===v||void 0===v?void 0:v[809])||"",cta:(null===v||void 0===v?void 0:v[901])||"",shopNowText:(null===v||void 0===v?void 0:v[902])||(null===v||void 0===v?void 0:v[901])||"",logoAlignment:(null===v||void 0===v?void 0:v[1001])||"",headingFontWeight:(null===v||void 0===v?void 0:v[1102])||"",headlineFontWeight:(null===v||void 0===v?void 0:v[1103])||"",dedupe:(null===v||void 0===v?void 0:v[1201])||"",impTracker3PURL1:g[0]||"",impTracker3PURL2:g[1]||"",impTracker3PURL3:g[2]||"",viewIVT3PURL1:y[0]||"",viewIVT3PURL2:y[1]||"",IMPRESSION_URLS:h,DEST_URL:(null===(d=e.link)||void 0===d?void 0:d.url)||"",metaData:{beaconDebug:{cacheBuster:c.cacheBuster,forwardedIP:c.clientIp,ip:c.clientIp},cacheBuster:c.cacheBuster,dfpParams:{clientIp:c.clientIp,wmlh:c.wmlh,targeting:{categoryId:c.categoryId||"",location:c.adLocation,ptype:c.pageType,SKU:c.pageId,...(null===(u=c.keyword)||void 0===u?void 0:u.length)?{search:c.keyword}:{},sessId:c.impressionId}},dfpResponse:{googleCreativeId:c.creativeId,googleLineitemId:c.lineItemId},isInternal:c.isInternal},uuId:c.impressionId,extendedDSPProps:{deviceType:c.deviceType,viewabilityURLs:p,adServer:i,templateId:e.templateId,taxonomyId:c.taxonomyId,categoryName:c.categoryName},viewIVT3PVendor1:"",viewIVT3PVendor2:""}}},v=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(null===e||void 0===e||null===(n=e.json)||void 0===n||null===(r=n.extendedDSPProps)||void 0===r?void 0:r.adServer)||"GAM";var o,t,s,u,v,c,m,h,p,g,y,f,w,I,b;if(!e||!e.json||!(null===(o=Object.keys(e.json))||void 0===o?void 0:o.length))return{assets:{},metaData:{}};const T=e.json,C=T.metaData,k=(null===(t=C.dfpParams)||void 0===t?void 0:t.targeting)||{};return{__typename:"DisplayAdDSP",assets:d({601:(null===T||void 0===T?void 0:T.heading)||(null===T||void 0===T?void 0:T.headline),602:(null===T||void 0===T?void 0:T.subhead)||(null===T||void 0===T?void 0:T.subHeading),603:null===T||void 0===T?void 0:T.logoAltText,605:null===T||void 0===T?void 0:T.imageAltText,606:null===T||void 0===T?void 0:T.legalDisclaimerLabel,607:null===T||void 0===T?void 0:T.legalDisclaimerText,608:null===T||void 0===T?void 0:T.heading,701:(null===T||void 0===T?void 0:T.mobileImage)||(null===T||void 0===T?void 0:T.mobileBrandImage),702:null===T||void 0===T?void 0:T.tabletImage,703:(null===T||void 0===T?void 0:T.desktopImage)||(null===T||void 0===T?void 0:T.desktopBrandImage),704:(null===T||void 0===T?void 0:T.mobileLogo)||(null===T||void 0===T?void 0:T.mobileBrandLogo),705:null===T||void 0===T?void 0:T.tabletLogo,706:(null===T||void 0===T?void 0:T.desktopLogo)||(null===T||void 0===T?void 0:T.desktopBrandLogo),707:null===T||void 0===T?void 0:T.logoImage,708:(null===T||void 0===T?void 0:T.mainImage)||(null===T||void 0===T?void 0:T.image),709:null===T||void 0===T?void 0:T.mainShortImage,710:null===T||void 0===T?void 0:T.image,711:null===T||void 0===T?void 0:T.desktopBrandImage,712:null===T||void 0===T?void 0:T.desktopBrandLogo,713:null===T||void 0===T?void 0:T.mobileBrandImage,714:null===T||void 0===T?void 0:T.mobileBrandLogo,801:null===T||void 0===T?void 0:T.copyCardColor,802:null===T||void 0===T?void 0:T.accentBarColor,803:null===T||void 0===T?void 0:T.fontColor,804:null===T||void 0===T?void 0:T.headlineColor,805:null===T||void 0===T?void 0:T.subheadColor,806:null===T||void 0===T?void 0:T.ctaColor,807:null===T||void 0===T?void 0:T.legalDisclaimerColor,808:null===T||void 0===T?void 0:T.ctaTextColor,809:null===T||void 0===T?void 0:T.sponsoredTextColor,901:(null===T||void 0===T?void 0:T.cta)||(null===T||void 0===T?void 0:T.shopNowText),902:null===T||void 0===T?void 0:T.shopNowText,1001:null===T||void 0===T?void 0:T.logoAlignment,1102:null===T||void 0===T?void 0:T.headingFontWeight,1103:null===T||void 0===T?void 0:T.headlineFontWeight,1201:null===T||void 0===T?void 0:T.dedupe}),link:{url:T.DEST_URL},metaData:{adServer:i,categoryId:"GAM"===i?k.categoryId||"":T.adUnitID||"",adLocation:k.location,pageType:k.ptype,pageId:k.SKU,keyword:k.search||"",advertiserId:T.advertiserID||"",campaignId:T.orderID||"",isInternal:C.isInternal,cacheBuster:C.cacheBuster||(null===(s=C.beaconDebug)||void 0===s?void 0:s.cacheBuster),clientIp:(null===(u=C.beaconDebug)||void 0===u?void 0:u.ip)||(null===(v=C.beaconDebug)||void 0===v?void 0:v.forwardedIP),creativeId:null===(c=C.dfpResponse)||void 0===c?void 0:c.googleCreativeId,lineItemId:null===(m=C.dfpResponse)||void 0===m?void 0:m.googleLineitemId,wmlh:C.dfpParams.wmlh,impressionId:null===(h=C.dfpParams)||void 0===h||null===(p=h.targeting)||void 0===p?void 0:p.sessId,deviceType:(null===(g=T.extendedDSPProps)||void 0===g?void 0:g.deviceType)||"WMUS"===(null===k||void 0===k?void 0:k.platform)?"desktop":"mobile",taxonomyId:null===(y=T.extendedDSPProps)||void 0===y?void 0:y.taxonomyId,templateId:(null===(f=T.extendedDSPProps)||void 0===f?void 0:f.templateId)||"",categoryName:(null===(w=T.extendedDSPProps)||void 0===w?void 0:w.categoryName)||"",extendedProps:{adUnitID:T.adUnitID||k.categoryId}},templateId:(null===(I=T.extendedDSPProps)||void 0===I?void 0:I.templateId)||"",eventTrackers:[...T.IMPRESSION_URLS.map((e=>({url:e,event:l.Impression,method:a.Image}))),...((null===T||void 0===T||null===(b=T.extendedDSPProps)||void 0===b?void 0:b.viewabilityURLs)||[]).map((e=>({url:e,event:l.ViewableMRC50,method:a.Image}))),...[T.impTracker3PURL1,T.impTracker3PURL2,T.impTracker3PURL3].filter(Boolean).map((e=>({url:e,event:l.ThirdPartyImpression,method:a.Image}))),...[T.viewIVT3PURL1,T.viewIVT3PURL2].filter(Boolean).map((e=>({url:e,event:l.ThirdPartyViewability,method:a.JS})))]}}},264024:function(e,i,o){"use strict";o.d(i,{Fr:function(){return r},Jl:function(){return n},ft:function(){return t}});const t=["BrandAmplifierAd","BrandBoxDisplayAd","BuyBoxAd","DynamicAdContainer","GalleryDisplayAd","GridPOVBanners","MarqueeDisplayAd","POV2DisplayAd","POV3DisplayAd","POV4DisplayAd","POVDisplayAd","SkylineDisplayAd","SponsoredProductCarousel","SponsoredVideoAd","TriplePack","AdjustableBanner","TileTakeOverDisplayAd"],n={CLIPPED:"CLIPPED",UNLOCK:"UNLOCK",UNCLIPPED:"UNCLIPPED",APPLIED:"APPLIED",AVAILABLE:"AVAILABLE",UNKNOWN:"UNKNOWN",UNLOCK_WITH_W_PLUS:"UNLOCK_WITH_W_PLUS"},r=["fs1","fs2","fs3","feature4","feature5","gallery","galleryTop","galleryMiddle","galleryBottom","brandbox1","top","middle","bottom","marquee1","marquee2","marquee3","hppov2","hppov3","hppov4","cppov1","cppov2","cppov3","cppov4","cppov5","singletile1","singletile2","doubletile1","doubletile2","zonetop","zonebottom","zonemiddle"]},83959:function(e,i,o){"use strict";o.d(i,{E:function(){return a},V:function(){return d}});var t=o(390239),n=o(107401),r=o(415369),l=o(614711);const a=()=>{const{isMobile:e}=(0,n.vP)(),i=e?{height:"14px"}:{};return(0,t.jsx)("div",{className:"flex items-center lh-title h2-l normal",style:i,children:(0,t.jsx)(d,{})})},d=e=>{let{legalDisclaimerText:i,iconButtonClassNames:o="",sponsoredTextClassNames:n=""}=e;const a=(0,l.G)();return(0,t.jsx)(r.z,{legalDisclaimerText:i,showIcon:a,iconButtonClassNames:o,sponsoredTextClassNames:n})}},614711:function(e,i,o){"use strict";o.d(i,{G:function(){return l}});var t=o(3780),n=o(195101),r=o(263123);const l=()=>{const{moduleType:e,moduleLocation:i}=(0,n.TG)(),o=(0,t.Jv)(e,i,"feedbackIconEnable");return(0,r.v)()[o]}},567935:function(e,i,o){"use strict";o.d(i,{r:function(){return N},Z:function(){return V}});var t=o(390239),n=o(263123),r=o(873759),l=o(245260),a=o(466046),d=o(156055);var s=o(300599);function u(e){return e.nodeType===e.DOCUMENT_NODE}function v(e,i,o){return e?Array.from(e.querySelectorAll(i)).map(o):[]}class c extends Error{constructor(e,i,o){super("VASTError(".concat(e,")")),this.code=e,this.node=i,this.details=o||{}}}const m=e=>{if(!e)return"";const i=Array.from(e.childNodes).filter((e=>e.nodeType===e.CDATA_SECTION_NODE));return i.length?i[0].data:(e.textContent||"").trim()},h=e=>{const i=e.querySelectorAll("Tracking");return Array.from(i,(e=>{var i;return{event:(null===(i=e.attributes[0])||void 0===i?void 0:i.value)||"",trackingUrl:m(e)}}))},p=e=>{const i={},o=m(e);for(let r=0;r<e.attributes.length;r++){var t;const o=null===(t=e.attributes[r])||void 0===t?void 0:t.name;var n;if(o)i[o]=(null===(n=e.attributes[r])||void 0===n?void 0:n.value)||""}return{content:o,attributes:i}},g=e=>{const i=e.querySelectorAll("MediaFile"),o=Array.from(i,p).map((e=>{let{content:i,attributes:o}=e;return{videoSrc:i,attributes:o,width:parseInt(null===o||void 0===o?void 0:o.width,10)||0,height:parseInt(null===o||void 0===o?void 0:o.height,10)||0}})),t=e.querySelectorAll("ClosedCaptionFile"),n=Array.from(t,p).filter((e=>{let{attributes:i}=e;return"en"!==(null===i||void 0===i?void 0:i.lang)||"text/vtt"!==(null===i||void 0===i?void 0:i.type)})).map((e=>{let{content:i,attributes:o}=e;return{src:i,lang:o.language,attributes:o}})),r=e.querySelector("ClickThrough"),l=document.createElement("video");return{mediaFiles:o.filter((e=>{var i,o;return""!==l.canPlayType(null===(i=e.attributes)||void 0===i?void 0:i.type)&&"streaming"!==(null===e||void 0===e||null===(o=e.attributes)||void 0===o?void 0:o.delivery)})),trackFiles:n,duration:y(m(e.querySelector("Duration"))),trackingEvents:h(e),clickTracking:v(e,"ClickTracking",m),...r?{clickThrough:m(r)}:{}}};const y=e=>{if(!e)return 0;const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return parseInt(e,10)||0},[o,t,n=""]=e.split(":"),[r,l]=n.split(".");return i(l)+1e3*(i(r)+60*i(t)+3600*i(o))},f=e=>{const i=(new DOMParser).parseFromString(e,"application/xml"),o=i.querySelector("parsererror");if(o)throw new c(100,i,{xmlParsingError:o.textContent||""});!function(e){const i=e.documentElement;if(!i||"VAST"!==i.nodeName)throw new c(101,e);const o=i.getAttribute("version");if(!o||Number.isNaN(Number.parseFloat(o))||Number.parseFloat(o)<4)throw new c(102,e)}(i);const t=i.querySelector("Ad");var n;const r=null!==(n=null===t||void 0===t?void 0:t.id)&&void 0!==n?n:"";if(!t)throw new c(101,i);const l=Array.from(i.getElementsByTagName("InLine"));if(!(null===l||void 0===l?void 0:l.length)){if(t.querySelector("Wrapper"))throw new c(300,i);throw new c(400,i)}return l.map((e=>((e,i)=>{const o=v(i,"Impression",m),t=v(i,"ViewableImpression",(e=>({viewable:m(e.querySelector("Viewable")),notViewable:m(e.querySelector("NotViewable")),viewUndetermined:m(e.querySelector("ViewUndetermined"))}))),n=i.querySelector('Extensions > Extension[type="wmt"] > auto_generated'),r={autoGeneratedCC:"1"===m(n)};if(o.some((e=>!e.length)))throw new c(101,i);const l=Array.from(i.querySelectorAll("Creative > Linear")).map(g);if(!l.length)throw new c(200,i);if(!l.some((e=>{var i;return(null===(i=e.mediaFiles)||void 0===i?void 0:i.length)>0})))throw new c(403,i);return{adId:e,creatives:l,impressionBeacons:o,viewableBeacons:t,extensions:r}})(r,e)))},w=e=>!u(e)&&e.closest("Ad")?v(e.closest("Ad"),"Error",m):u(e)?v(e,"Error",m):v(e.ownerDocument,"Error",m),I=(e,i)=>{let o=e;return Object.entries(i).forEach((e=>{let[i,t]=e;o=o.replace(new RegExp("\\[".concat(i,"\\]"),"g"),t)})),o},b=(e,i,o)=>Math.abs(o-e)<Math.abs(i-e);class T{setDuration(e){this.duration=e,this.quartiles={start:0,firstQuartile:Math.round(25*this.duration)/100,midpoint:Math.round(50*this.duration)/100,thirdQuartile:Math.round(75*this.duration)/100}}fireTrackingEvent(e,i){const o=this.trackingEvents.filter((i=>{let{event:o}=i;return o===e}));if(o){const e=o.map((e=>{let{trackingUrl:i}=e;return i}));this.track(e,!0)}this.onEvent&&this.alwaysFiredEvents.includes(e)&&this.onEvent({type:e,...i&&{viewRecord:i}})}handleTimeUpdate(e,i){if(this.duration>0&&e>0){this._fireImpression(i);for(const o in this.quartiles){(this.quartiles[o]||0)<=e&&!this.alreadyTriggeredQuartiles[o]&&(this.fireTrackingEvent(o,i),this.alreadyTriggeredQuartiles[o]=!0)}}}_fireImpression(e){!this.isImpressionTriggered&&this.onEvent&&(this.onEvent({type:"impression",...e&&{viewRecord:e}}),this.isImpressionTriggered=!0)}handleTracking(e,i,o){switch(e){case"timeupdate":this.handleTimeUpdate(i,o);break;case"ended":this.isCompleteTriggered||(this.fireTrackingEvent("complete",o),this.isCompleteTriggered=!0);break;case"play":this.alreadyTriggeredQuartiles.start&&this.fireTrackingEvent("resume",o);break;case"mute":case"unmute":case"pause":this.fireTrackingEvent(e,o)}}constructor(e,i=r.UP,o){var t;this.alreadyTriggeredQuartiles={},this.creative=e,this.track=i,this.trackingEvents=e.trackingEvents||[],this.duration=null!==(t=e.duration)&&void 0!==t?t:0,this.isCompleteTriggered=!1,this.isImpressionTriggered=!1,this.onEvent=o,this.alwaysFiredEvents=["start","firstQuartile","midpoint","thirdQuartile","complete","resume"],this.quartiles={start:0,firstQuartile:Math.round(25*this.duration)/100,midpoint:Math.round(50*this.duration)/100,thirdQuartile:Math.round(75*this.duration)/100}}}var C=o(575115),k=o(295368),P=o(803528),x=o(369538);var S=()=>(0,t.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"12",fill:"white",fillOpacity:"0.7"}),(0,t.jsx)("path",{d:"M6 12C6 8.68629 8.68629 6 12 6C13.5219 6 14.9107 6.56605 15.9688 7.5H14.5C14.2239 7.5 14 7.72386 14 8C14 8.27614 14.2239 8.5 14.5 8.5H16.8779C17.2231 8.5 17.5029 8.22018 17.5029 7.875V5.5C17.5029 5.22386 17.2791 5 17.0029 5C16.7268 5 16.5029 5.22386 16.5029 5.5V6.64037C15.286 5.61704 13.7147 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 11.7239 18.7761 11.5 18.5 11.5C18.2239 11.5 18 11.7239 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z",fill:"black"})]});const D=[100,101,102,403,405];var E=e=>{let{error:i,retryVideoPlayer:o,thumbnail:n}=e;var r;const l={error:i},a=null===l||void 0===l||null===(r=l.error)||void 0===r?void 0:r.code;return(0,t.jsx)("div",{className:"relative skeleton-bone w-100",children:(0,t.jsxs)("div",{className:"relative flex items-center justify-center h-100 w-100",children:[(0,t.jsx)(P.Z,{alt:(0,C.m)(x,"videPosterImage"),src:n,preload:!0,loading:"eager",height:"100%",width:"100%"}),(0,t.jsxs)("div",{className:"absolute z-2o-70 top-0 left-0 ph1 ma3",children:[(0,t.jsx)("span",{className:"black bg-white",children:"00:00"}),(0,t.jsx)("span",{className:"white ml1",children:(0,C.m)(x,"videoError2")})]}),a&&!D.includes(a)&&(0,t.jsx)("div",{className:"absolute z-2 top-0 right-1 mt3",children:(0,t.jsx)(k.Z,{className:"pl2 z-1","aria-label":"retryVideo",onClick:()=>o([a]),variant:"tertiary",children:(0,t.jsx)(S,{})})})]})})},A=o(837261);const N=(0,d.forwardRef)(((e,i)=>{let{vasttag:o,configPreset:u="default",enableTracking:v=!0,showAutoGenCCDisclaimerCcm:m=!1,redirectsOnClick:h,clickMacroReplacement:p,thumbnail:g,loop:y,onEvent:C,onClick:k,features:P,...x}=e;var S,D;const{enableVASTErrorEx:N,ipBr1VideoTimeoutMs:V,videoCCEnable:B,enableVideoUIErrorState:L,enableVideoTracker:U}=(0,n.v)(),{0:R,1:M}=(0,d.useState)(!0),{0:j,1:O}=(0,d.useState)(!1),_=(0,d.useRef)(),{0:q,1:F}=(0,d.useState)(!1),{0:W,1:G}=(0,d.useState)(),Q=(0,d.useRef)(null),z=(0,d.useRef)(),K=(0,d.useRef)();(0,d.useEffect)((()=>{K.current=C}),[C]);const H=(0,d.useCallback)((e=>{(null===K||void 0===K?void 0:K.current)&&"function"===typeof K.current&&K.current(e)}),[K]),J=(0,d.useMemo)((()=>{try{return f(o)}catch(e){return G(e),[]}}),[o]),Z=null===J||void 0===J?void 0:J[0],Y=(null===Z||void 0===Z?void 0:Z.creatives)&&Z.creatives[0],X=(null===Z||void 0===Z?void 0:Z.extensions)&&Z.extensions,$=(null===X||void 0===X?void 0:X.autoGeneratedCC)&&m,ee=(0,d.useMemo)((()=>v?async function(){for(var e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];try{await(0,r.UP)(...i)}catch(t){}}:async()=>{}),[v]),ie=(0,d.useMemo)((()=>Y?new T(Y,ee,H):null),[Y,H,ee]);(0,d.useEffect)((()=>{if(W&&W instanceof c){const e=W.node?w(W.node):(e=>{const i=(new DOMParser).parseFromString(e,"application/xml"),o=i.querySelector("parsererror");if(o)throw new c(100,i,{xmlParsingError:o.textContent||""});return w(i)})(o);ee(e.map((e=>I(e,{ERRORCODE:W.code.toString()})))),C&&C({type:"vast_error",error:W,code:W.code})}}),[W,ee,o,C]);const oe=(0,d.useCallback)((async e=>{var i;if(ie&&(null===Y||void 0===Y||null===(i=Y.clickTracking)||void 0===i?void 0:i.length)){const e=Y.clickTracking.reduce(((e,i)=>[...e,ee(i)]),[]);await Promise.all(e)}k&&k(e),!(null===P||void 0===P?void 0:P.trackYabasClicks)&&h&&(null===Y||void 0===Y?void 0:Y.clickThrough)&&(p&&Object.keys(p||{}).length?window.location.href=I(Y.clickThrough,p):window.location.href=Y.clickThrough)}),[ie,null===Y||void 0===Y?void 0:Y.clickTracking,null===Y||void 0===Y?void 0:Y.clickThrough,k,p,h,ee,P]),te=(0,d.useCallback)((e=>{var i,o,t;("play"===e.type&&ie&&(null===Z||void 0===Z||null===(i=Z.impressionBeacons)||void 0===i?void 0:i.length)&&(ee(Z.impressionBeacons),F(!1)),"ended"===e.type&&F(!0),e.type&&ie&&Q.current)&&(ie.setDuration((null===P||void 0===P?void 0:P.useVASTDuration)&&Number.isInteger(null===Y||void 0===Y?void 0:Y.duration)?(null===Y||void 0===Y?void 0:Y.duration)/1e3:null===(o=Q.current)||void 0===o?void 0:o.duration),ie.handleTracking(e.type,null===(t=Q.current)||void 0===t?void 0:t.currentTime,e.viewRecord));C&&C(e)}),[Z,C,ee,ie,P,Y]),ne=(0,d.useCallback)((()=>{N&&(z.current=setTimeout((()=>{G(new c(402))}),V))}),[G,V,N]),re=(0,d.useCallback)((()=>{N&&z.current&&(clearTimeout(z.current),z.current=void 0)}),[N]),le=(0,d.useCallback)((()=>{if(N&&Q.current&&Q.current.error){const e=Q.current.error;re(),3===e.code||4===e.code?G(new c(405)):2===e.code?G(new c(402)):G(new c(400))}}),[Q,G,re,N]);(0,l.F)((()=>{!(null===Z||void 0===Z?void 0:Z.viewableBeacons)||j||"IntersectionObserver"in window||(ee(Z.viewableBeacons.map((e=>{let{viewUndetermined:i}=e;return i||""})).filter(Boolean)),O(!0))}),(()=>{_.current&&clearTimeout(_.current),(null===Z||void 0===Z?void 0:Z.viewableBeacons)&&!j&&ee(Z.viewableBeacons.map((e=>{let{notViewable:i}=e;return i||""})).filter(Boolean))})),(0,a.P)(Q,(e=>{j||(e.isIntersecting&&(null===Z||void 0===Z?void 0:Z.viewableBeacons)?_.current=setTimeout((()=>{ee(Z.viewableBeacons.map((e=>{let{viewable:i}=e;return i||""})).filter(Boolean)),O(!0)}),s.dB):_.current&&clearTimeout(_.current))}),{threshold:s.Wq}),(0,a.P)(Q,(e=>{q||M(!e.isIntersecting)}),{threshold:s.Wq,rootMargin:"-".concat(130,"px 0px 0px 0px")}),(0,d.useImperativeHandle)(i,(()=>Q.current));const ae=(0,d.useMemo)((()=>{var e,i;return function(e,i){let{width:o}=e,{optimalScale:t=1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!i.length)return;let n=i[0];for(let r=1;r<i.length;r++){const e=i[r];b(o,((null===n||void 0===n?void 0:n.width)||0)/t,((null===e||void 0===e?void 0:e.width)||0)/t)&&(n=e)}return n}({width:parseInt((null===(e=x.width)||void 0===e?void 0:e.toString())||"",10)||(null===(i=Q.current)||void 0===i?void 0:i.getBoundingClientRect().width)},(null===Y||void 0===Y?void 0:Y.mediaFiles)||[])}),[Q.current,x.width,null===Y||void 0===Y?void 0:Y.mediaFiles]),de=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default"){case"default":return{autoPlay:!0,muted:!0,loop:!1,showPlayButton:!0,showCountdown:!0,showMuteButton:!0,endState:"rewind"};case"configPreset1":return{autoPlay:!0,muted:!0,loop:!1,showPlayButton:!0,showCountdown:!0,showMuteButton:!0,endState:"play"}}}(u),se={error:W},ue=(0,d.useMemo)((()=>{if((null===P||void 0===P?void 0:P.trackYabasClicks)&&(null===Y||void 0===Y?void 0:Y.clickThrough)&&!x.cta){const e=p?I(Y.clickThrough,p):Y.clickThrough;return{linkText:"itemClick",clickThrough:{value:e,rawValue:e}}}return x.cta}),[P,p,null===Y||void 0===Y?void 0:Y.clickThrough,x.cta]);return W||(null===W||void 0===W?void 0:W.resetValue)?L?(0,t.jsx)(E,{error:W,retryVideoPlayer:e=>{se.resetValue=e,G(void 0)},thumbnail:g||""}):(0,t.jsx)("span",{className:"dn","data-ads-error":W,"data-testid":"VASTErrorBoundary"}):(0,t.jsx)(A.ZP,{...x,...de,features:P,onClick:oe,src:null===ae||void 0===ae?void 0:ae.videoSrc,attributes:null===(S=null===Y||void 0===Y?void 0:Y.mediaFiles[0])||void 0===S?void 0:S.attributes,paused:R,onEvent:te,onError:le,onLoadStart:ne,onLoadedData:re,tracks:null===Y||void 0===Y||null===(D=Y.trackFiles)||void 0===D?void 0:D.map((e=>({src:null===e||void 0===e?void 0:e.src,lang:null===e||void 0===e?void 0:e.lang,attributes:null===e||void 0===e?void 0:e.attributes}))),ref:Q,loop:y,showAutoGenCCDisclaimer:$,videoCCEnable:B,enableVideoTracker:U,cta:ue})}));var V=N},949648:function(e){e.exports={container:"w_PLoZ"}}}]);