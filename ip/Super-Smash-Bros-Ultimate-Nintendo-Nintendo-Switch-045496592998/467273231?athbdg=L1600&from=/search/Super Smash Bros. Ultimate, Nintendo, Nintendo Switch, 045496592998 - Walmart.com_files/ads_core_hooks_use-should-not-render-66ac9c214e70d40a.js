"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9763],{279406:function(t,e,i){i.d(e,{H:function(){return l}});var n=i(314074),a=i(156055),o=i(654292),s=i(263123),r=i(245260);function l(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=t.metaData.dfpParams.targeting.location,l=t.metaData.dfpParams.targeting.ptype,c=(0,a.useMemo)((()=>n.Y2.uuids().includes(t.uuId)),[t.uuId]),d=(0,a.useMemo)((()=>e&&"skyline1"===i&&("search"===l||"browse"===l)),[e,i,l]),u=(0,s.v)().enableSyncSkylineReRender&&d,m=(0,a.useMemo)((()=>(0,o.U2)("wm_client_ip")),[]),I=(0,a.useMemo)((()=>(0,o.U2)("wmlh")),[]);return(0,r.F)((()=>{n.Y2.rendered(t)})),(0,a.useMemo)((()=>{const e=m===t.metaData.dfpParams.clientIp||I===t.metaData.dfpParams.wmlh;return(0,s.v)().displayCheckIp&&!e?"ip-mismatch":!(!(0,s.v)().displayPreviousRenderCheck||!c||u)&&"dup-render"}),[m,t.metaData.dfpParams.clientIp,I,t.metaData.dfpParams.wmlh,c,u])}},323457:function(t,e,i){i.d(e,{a:function(){return n}});const n=()=>{let t,e;return"undefined"!==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):"undefined"!==typeof document.documentElement&&"undefined"!==typeof document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):(t=document.getElementsByTagName("body")[0].clientWidth,e=document.getElementsByTagName("body")[0].clientHeight),[t,e]}},130840:function(t,e,i){i.d(e,{r:function(){return a}});var n=i(259470);const a=t=>{let{elementRef:e,commonDisplayAdPayload:i,track3PEnable:a,onBeacon:o,dbg:s,root:r}=t;(0,n.p)({commonDisplayAdPayload:i,target:e,track3PEnable:a,onBeacon:o,dbg:s,root:r})}},259470:function(t,e,i){i.d(e,{p:function(){return rt}});var n=i(263123),a=i(466046),o=i(727163),s=i(158031),r=i(156055);var l=t=>t?(t.forEach((t=>{clearTimeout(t)})),[]):[],c=i(400177),d=i.n(c),u=i(935366);var m=(t,e)=>{let i=!1;return function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];i||(i=!0,setTimeout((()=>{t(...a),i=!1}),e))}};var I=t=>function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];let a=[];const o=m((()=>{for(let e=0;e<a.length;e++)try{a[e]()}catch(t){0}}),t),s=!0;return s&&i.forEach((t=>{document.addEventListener(t,o)})),t=>(a.push(t),()=>{a=a.filter((e=>e!==t))})};var T=I(10)("visibilitychange");const E=(t,e)=>{let i=!1;const n=t.trackingState,a=t.commonTrackingTimeoutList[u.jI];a.length&&(t.commonTrackingTimeoutList[u.jI]=l(a)),n.viewabilityMRC||(n.viewabilityMRC=!0,i=!0,t.beaconUtil.fire(u.Au.MRC_VIEWABLE,u.JY.AD_VIEWABLE)),i&&e(u.tY.moat,n,"viewabilityMRC")};var h=(t,e,i)=>{const n=e.commonTrackingTimeoutList[u.jI];t.intersectionRatio>=u.TY?n.push(window.setTimeout(E,u.WT,e,i)):e.commonTrackingTimeoutList[u.jI]=l(n)};var A=i(323457);function V(){return"function"===typeof window.f?window.f():{}}var v=i(119674),f=i(67449),p=i(314074);const g="iasTeamId",D=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(t.windowNotVisibleTime)return t.windowNotVisibleTime-e;const n=Date.now();let a=i;return a=n-e+a,t.windowVisibleTimes.forEach((t=>{if(t.notVisible&&t.visible&&t.notVisible>e){const e=t.visible-t.notVisible;a-=e}})),a},_=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const i=t.windowNotVisibleTime||Date.now();let n=i-e;const a=t.windowVisibleTimes.length,o=t.windowVisibleTimes[a-1]&&t.windowVisibleTimes[a-1].visible;return o&&e<o?i-o:(t.windowVisibleTimes.forEach((t=>{if(t.notVisible&&t.visible&&t.notVisible>e){const e=t.visible-t.notVisible;n-=e}})),n)},w=(t,e,i,n,a)=>{for(let o=0;o<t.length;o++){const s=t[o]-n/1e3;if(s>=0){e.trackingTimeoutList[i].push(setTimeout(a,1e3*s))}}},y=(t,e,i,n)=>{const a=D(t,e,i);return e?a:i||n},C=(t,e,i,n)=>{const a=_(t,e);return e&&a>i?a:i||n},O={[u.X9.PERIODIC_UPDATE]:-1,[u.Au.AD_IMPRESSION]:0,[u.Au.UNLOAD]:1,[u.Au.CLICK]:2,[u.Au.TOUCH]:3,[u.Au.MRC_VIEWABLE]:4,[u.X9.GROUPM_VIEWABLE]:5,[u.C7.INVIEW_50_5s]:6,[u.C7.INVIEW_50_15s]:7,[u.C7.FULL_VIEWABLE]:8};var b=(t,e,i)=>{const n=Date.now(),a=t.trackingState;a.eventTypeCount[e]++;const o=Number(t.element.offsetHeight),s=Number(t.element.offsetWidth),[r,l]=(0,A.a)(),c=n-a.adLoadedTime,d=a.adLoadedTime,m=n,I=y(t,t.startMrcViewTime,a.totalMrcViewTime,0),T=y(t,t.startFullInViewOTS,a.fullInViewOTS,0),E=C(t,t.startFiftyPctContTime,a.totalFiftyPctContTime,0),h=C(t,t.startHundredPctContTime,a.totalHundredPctContTime,0),{adIds:D,adLocation:_,assetUrl:w,dfpTag:b,pageType:L,random:M,adUnitId:P,categoryId:S}=t.getAdCustomInfo(),k=p.Y2.getAdsXpa(),R=null!==P&&void 0!==P?P:"0",U=null!==S&&void 0!==S?S:"0",B=(0,v.W)(),W={moatId:(0,f.D)(),ev:O[e],ivTime50:I,adUrl:w,adIds:D,pubUrl:window.location.href,fullUrl:window.location.href,ivc50:E,ivTime100:T,h:o,ivc100:h,ts:m,sessId:M,sh:l,sw:r,reqTs:d,loadTime:c,count:a.eventTypeCount[e]-1,w:s,measurable:!0,fullIvMeasurable:!0,zMoatAdLocation:_,zMoatAdUnit1:b,zMoatAdUnit2:L,zMoatAdUnitId:R,zMoatCategoryId:U,zMoatXpa:k,zMoatImpId:M,zMoatPageId:B,zMoatImpTs:d,[g]:(null===i||void 0===i?void 0:i.iasTeamId)||"",moatIvt:V()},F=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e&&(W[t]=i)};return F("groupView",a.groupMViewable),F("fvOts",a.groupMViewable),F("viewable",a.viewabilityMRC),F("pubivots",a.publicisFullInViewOTS),F("clickOffset",Boolean(t.touchOrClickTimeOffset)),F("clickCount",e===u.Au.CLICK,a.eventTypeCount[e]),{payload:W}};const L="viewabilityMRCStatusTimeout",M="viewabilityFiftyCumulativeTimeout",P="groupMViewableTimeout",S="publicisFullInViewOTSTimeout",k=[5,10,15,30,60,120,180],R={[u.X9.PERIODIC_UPDATE]:-1,[u.Au.AD_IMPRESSION]:0,[u.Au.CLICK]:2,[u.Au.MRC_VIEWABLE]:5,[u.X9.GROUPM_VIEWABLE]:9,[u.Au.UNLOAD]:21,[u.Au.TOUCH]:23,[u.Bs.AD_VIDEO_IMPRESSION]:0,[u.Bs.AD_VIDEO_CLICK]:2,[u.Bs.AD_VIDEO_VIEWABLE]:5,[u.Bs.AD_VIDEO_VIEWABLE_GM]:9,[u.Bs.AD_VIDEO_REMOVE]:21,[u.Bs.AD_VIDEO_COMPLETE]:28,[u.Bs.AD_VIDEO_QUARTILE]:29},U=(t,e,i,n)=>{const a=D(t,e,i);return e?a:i||n},B=(t,e,i,n)=>{const a=_(t,e);return e&&a>i?a:i||n},W=(t,e)=>{if(!u.yh.includes(e))return{};const i=t.trackingState.videoViewRecord,{duration:n,audOnTime:a,audOffTime:o,totalPlayTime:s,audVis100Time:r,vis100Time:l,vis50Time:c,audVis80Time:d,visAudStatusQ0:m,visAudStatusQ1:I,visAudStatusQ2:T,visAudStatusQ3:E,visAudStatusQ4:h}=i||{},A={bq:7,i:(0,f.v)(),et:1,hc:1,dh:Math.round(n),ds:Math.round(s),er:Math.round(a),eu:Math.round(r)},V=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e&&(A[t]=i)};return V("ef",m,m),V("eg",I,I),V("eh",T,T),V("ei",E,E),V("ej",h,h),V("hd",r>=15e3||r>=n/2),V("he",a>=n),V("hf",l>=n),V("hg",c>=n&&a>=n),V("hi",c>=n&&o>=n),V("hj",l>=n/2),V("hk",r>=n),V("ka",c>=2e3),V("nc",d>=15e3||d>=n/2),A};var F=(t,e)=>{const i=Date.now(),a=t.trackingState;a.eventTypeCount[e]++;const o=Number(t.element.offsetHeight),s=Number(t.element.offsetWidth),[r,l]=(0,A.a)(),c=i-a.adLoadedTime,d=a.adLoadedTime,m=U(t,t.startMrcViewTime,a.totalMrcViewTime,0),I=U(t,t.startFullInViewOTS,a.fullInViewOTS,0),T=B(t,t.startFiftyPctContTime,a.totalFiftyPctContTime,0),E=B(t,t.startHundredPctContTime,a.totalHundredPctContTime,0),{adIds:h,adLocation:g,assetUrl:D,dfpTag:_,pageType:w,random:y,adUnitId:C,categoryId:O,adServer:b}=t.getAdCustomInfo(),L=p.Y2.getAdsXpa(),M=null!==C&&void 0!==C?C:"0",P=null!==O&&void 0!==O?O:"0",S=(0,v.W)(),k={ac:1,bq:0,fr:1,i:(0,f.D)(),sl:1,e:R[e],ag:m,ak:D,d:h,gu:window.location.href,ia:T,gh:1,gf:I,h:o,ic:E,fq:1,de:y,qb:l,qa:r,t:d,m:c,q:a.eventTypeCount[e]-1,w:s,zMoatAdServer:b,zMoatAdLocation:g,zMoatAdUnit1:_,zMoatAdUnit2:w,zMoatAdUnitId:M,zMoatCategoryId:P,zMoatXpa:L,zMoatImpId:y,zMoatPageId:S,zMoatImpTs:d,...V()},F=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e&&(k[t]=i)};F("in",a.groupMViewable),F("gi",a.groupMViewable),F("as",a.viewabilityMRC),F("pd",a.publicisFullInViewOTS),F("c",t.touchOrClickTimeOffset,t.touchOrClickTimeOffset),F("tc",e===u.Au.CLICK,a.eventTypeCount[e]);let N={};return(0,n.v)().ipBr1VideoMeasure3PEnable&&(N=W(t,e)),{payload:{...k,...N}}};var N=(t,e,i)=>{let n=!1;const a=e.trackingState,o=Date.now();if(a.totalFiftyPctContTime||(a.totalFiftyPctContTime=0),t.intersectionRatio>=u.TY)e.startFiftyPctContTime||(e.startFiftyPctContTime=o);else if(e.startFiftyPctContTime){const t=_(e,e.startFiftyPctContTime);(!a.totalFiftyPctContTime||t>a.totalFiftyPctContTime)&&(a.totalFiftyPctContTime=t,n=!0),e.startFiftyPctContTime=0}else e.startFiftyPctContTime=0;n&&i(u.tY.moat,a,"totalFiftyPctContTime")};var H=(t,e,i)=>{let n=!1;const a=e.trackingState;t.intersectionRatio>=e.getFullViewPercentage()?e.startFullInViewOTS||(e.startFullInViewOTS=Date.now()):e.startFullInViewOTS?(a.fullInViewOTS=D(e,e.startFullInViewOTS,a.fullInViewOTS),n=!0,e.groupMTotalPeriodicTime=Date.now()-e.startFullInViewOTS+e.groupMTotalPeriodicTime,e.startFullInViewOTS=0):e.startFullInViewOTS=0,n&&i(u.tY.moat,a,"fullInViewOTS")};const Y=(t,e)=>{let i=!1;const n=t.trackingState,a=t.trackingTimeoutList.groupMViewableTimeout;a.length&&(t.trackingTimeoutList.groupMViewableTimeout=l(a)),n.groupMViewable||(n.groupMViewable=!0,i=!0,t.beaconUtil.fire(u.X9.GROUPM_VIEWABLE,u.wM.AD_VIEWABLE_GM)),i&&e(u.tY.moat,n,"groupMViewable"),w(k,t,P,t.groupMTotalPeriodicTime,(()=>{t.beaconUtil.fire(u.X9.GROUPM_VIEWABLE,u.wM.AD_STATUS)}))};var G=(t,e,i)=>{const n=e.trackingState.isAdLarge?u.TY:e.getFullViewPercentage(),a=e.trackingTimeoutList.groupMViewableTimeout;t.intersectionRatio>=n?a.push(window.setTimeout(Y,u.WT,e,i)):e.trackingTimeoutList.groupMViewableTimeout=l(a)};var Q=(t,e,i)=>{let n=!1;const a=e.trackingState,o=Date.now();if(e.startHundredPctContTime||(e.startHundredPctContTime=0),t.intersectionRatio>=e.getFullViewPercentage())e.startHundredPctContTime||(e.startHundredPctContTime=o);else if(e.startHundredPctContTime){const t=_(e,e.startHundredPctContTime);(!a.totalHundredPctContTime||t>a.totalHundredPctContTime)&&(a.totalHundredPctContTime=t,n=!0),e.startHundredPctContTime=0}else e.startHundredPctContTime=0;n&&i(u.tY.moat,a,"totalHundredPctContTime")};var z=(t,e)=>{e.lastObservedEntry=t};const K=(t,e)=>{const i=t.trackingState,n=t.trackingTimeoutList.publicisFullInViewOTSTimeout;n.length&&(t.trackingTimeoutList.publicisFullInViewOTSTimeout=l(n)),i.publicisFullInViewOTS=!0,e(u.tY.moat,i,"publicisFullInViewOTS")};var j=(t,e,i)=>{const n=e.trackingState;if(!n.publicisFullInViewOTS){const a=e.trackingTimeoutList.publicisFullInViewOTSTimeout,o=n.isAdLarge?u.Rl:e.getFullViewPercentage();t.intersectionRatio>=o?a.push(window.setTimeout(K,u.WT,e,i)):e.trackingTimeoutList.publicisFullInViewOTSTimeout=l(a)}};var x=(t,e,i)=>{let n=!1;const a=e.trackingState;t.intersectionRatio>=u.TY?e.startMrcViewTime||(e.startMrcViewTime=Date.now()):e.startMrcViewTime?(a.totalMrcViewTime=D(e,e.startMrcViewTime,a.totalMrcViewTime),n=!0,e.mrcTotalPeriodicTime=Date.now()-e.startMrcViewTime+e.mrcTotalPeriodicTime,e.startMrcViewTime=0):e.startMrcViewTime=0,n&&i(u.tY.moat,a,"totalMrcViewTime")};const X={5e3:u.C7.INVIEW_50_5s,15e3:u.C7.INVIEW_50_15s};var J=(t,e)=>{t.intersectionRatio>=u.TY?(e.lastInViewFiftyTime=Date.now(),e.trackingTimeoutList.viewabilityFiftyCumulativeTimeout=[...e.trackingTimeoutList.viewabilityFiftyCumulativeTimeout,...Object.keys(X).filter((t=>!e.firedBeacons.has(t))).map((t=>window.setTimeout((()=>{((t,e)=>{t.firedBeacons.has(e)||(t.beaconUtil.fire(e,u.JY.AD_VIEWABLE),t.firedBeacons.add(e))})(e,X[t])}),Math.max(0,Number(t)-e.cumulativeInViewFifty))))]):(e.cumulativeInViewFifty+=Date.now()-e.lastInViewFiftyTime,e.trackingTimeoutList.viewabilityFiftyCumulativeTimeout=l(e.trackingTimeoutList.viewabilityFiftyCumulativeTimeout))};var q=(t,e)=>{t.intersectionRatio>=u.nJ&&!e.firedBeacons.has(u.C7.FULL_VIEWABLE)&&(e.beaconUtil.fire(u.C7.FULL_VIEWABLE,u.JY.AD_VIEWABLE),e.firedBeacons.add(u.C7.FULL_VIEWABLE))},Z=i(873759);const $=t=>{var e,i,a;const o=t.trackingTimeoutList.viewabilityMRCStatusTimeout;var s,r;(o.length&&(t.trackingTimeoutList.viewabilityMRCStatusTimeout=l(o)),(0,n.v)().dspProcessingEnable&&(null===(e=t.displayAdProps)||void 0===e||null===(i=e.extendedDSPProps)||void 0===i||null===(a=i.viewabilityURLs)||void 0===a?void 0:a.length))&&(0,Z.ZR)(null===(s=t.displayAdProps)||void 0===s||null===(r=s.extendedDSPProps)||void 0===r?void 0:r.viewabilityURLs);w(k,t,L,t.mrcTotalPeriodicTime,(()=>{t.beaconUtil.fire(u.Au.MRC_VIEWABLE,u.wM.AD_STATUS)}))};var tt=(t,e)=>{const i=e.trackingTimeoutList.viewabilityMRCStatusTimeout;t.intersectionRatio>=u.TY?i.push(window.setTimeout($,u.WT,e)):e.trackingTimeoutList.viewabilityMRCStatusTimeout=l(i)};class et extends class{onClick(){this.beaconUtil.fire(u.Au.CLICK,u.JY.AD_CLICK),this.element instanceof HTMLIFrameElement||this.element.removeEventListener("click",this.onClickHandler)}initialize(){this.beaconUtil.fire(u.Au.AD_IMPRESSION,u.JY.AD_IMPRESSION),d()((t=>{this.element.id===t.id&&"click"===t.type&&this.onClick()})),this.element instanceof HTMLIFrameElement||this.element.addEventListener("click",this.onClickHandler),T((()=>{"visible"!==document.visibilityState?this.windowNotVisibleTime=Date.now():"visible"===document.visibilityState&&(this.windowVisibleTimes.push({notVisible:this.windowNotVisibleTime,visible:Date.now()}),this.windowNotVisibleTime=null),this.onVisibilityChange(document.visibilityState)}))}onVisibilityChange(t){}getFullViewPercentage(){return(0,u.wf)(this.adCvValues)}getBaseTrackers(){return[h]}adSizeCheck(){return Number(this.element.offsetHeight)*Number(this.element.offsetWidth)>=242500}unmount(){for(const t of Object.values(this.commonTrackingTimeoutList))l(t);this.beaconUtil.fire(u.Au.UNLOAD,u.JY.AD_REMOVE)}constructor(t,e,i,n,a){this.windowVisibleTimes=[],this.windowNotVisibleTime=null,this.commonTrackingTimeoutList={[u.jI]:[]},this.element=t,this.displayAdProps=e,this.trackingState=i,this.beaconUtil=n,this.adCvValues=a,this.trackingState.adLoadedTime=Date.now(),this.touchOrClickTimeOffset=0,this.trackingState.isAdLarge=this.adSizeCheck(),this.onClickHandler=this.onClick.bind(this)}}{initialize(){super.initialize()}onVisibilityChange(t){this.lastObservedEntry&&("hidden"===t?this.getAllTrackers().filter((t=>t!==z)).forEach((t=>{t({...this.lastObservedEntry,isIntersecting:!1,intersectionRatio:0},this,(()=>{}))})):"visible"===t&&this.getAllTrackers().filter((t=>t!==z)).forEach((t=>{t(this.lastObservedEntry,this,(()=>{}))})))}getAdCustomInfo(){var t;const{advertiserID:e,orderID:i,adUnitID:a,metaData:o}=this.displayAdProps,s=o.dfpResponse,r=o.dfpParams,l=s.googleLineitemId,c=s.googleCreativeId,d=r.dfpTag,u=r.targeting,m=u.location,I=u.categoryId,T=u.ptype,E=e&&i&&l&&c?"".concat(e,":").concat(i,":").concat(l,":").concat(c):void 0,h=(t=>{let{desktopImage:e,mobileImage:i,desktopLogo:n,mobileLogo:a,mainImage:o,logoImage:s,desktopBrandImage:r,mobileBrandImage:l,desktopBrandLogo:c,mobileBrandLogo:d,image:u,mainShortImage:m,tabletImage:I}=t;return e||i||n||a||o||s||r||l||c||d||u||m||I})(this.displayAdProps);let A="",V="";var v,f;(0,n.v)().dspProcessingEnable&&(null===(t=this.displayAdProps.extendedDSPProps)||void 0===t?void 0:t.deviceType)?A="desktop"===(null===(v=this.displayAdProps.extendedDSPProps)||void 0===v?void 0:v.deviceType)?"WMUS":"WMUS-Mobile":A=d&&d.split("/")[2]||"";(0,n.v)().displayIdentifyAdServer&&(V=(null===(f=this.displayAdProps.extendedDSPProps)||void 0===f?void 0:f.adServer)||"GAM");return{adIds:E,adLocation:m,adUnitId:a,assetUrl:h,categoryId:I,dfpTag:A,pageType:T,random:this.displayAdProps.metaData.dfpParams.targeting.sessId,adServer:V}}unmount(){for(const t of Object.values(this.trackingTimeoutList))l(t);super.unmount()}getAllTrackers(){return[...this.getTrackers(),...this.getBaseTrackers()]}getTrackers(){return[H,j,tt,x,N,G,Q,z,...(0,n.v)().displayCommonTrackingExtendedEvents?[q,J]:[]]}getCommonTrackers(){return[]}getPayload(t){return(0,n.v)().displayCommonTracking?b(this,t):F(this,t)}constructor(t,e,i,n,a){super(t,e,i,n,a),this.startMrcViewTime=0,this.startFiftyPctContTime=0,this.startHundredPctContTime=0,this.startFullInViewOTS=0,this.mrcTotalPeriodicTime=0,this.cumulativeInViewFifty=0,this.lastInViewFiftyTime=0,this.groupMTotalPeriodicTime=0,this.firedBeacons=new Set,this.lastObservedEntry=null,this.trackingTimeoutList={[L]:[],[P]:[],[S]:[],[M]:[]},n.attachTracker(this,u.tY.moat),this.initialize()}}function it(t){var e;const i={...(null===(e=t.detail)||void 0===e?void 0:e.viewRecord)||{}},n=null===i||void 0===i?void 0:i.visAudStatusAtEvent;switch(t.type){case"start":i.visAudStatusQ0=n;break;case"firstQuartile":i.visAudStatusQ1=n;break;case"midpoint":i.visAudStatusQ2=n;break;case"thirdQuartile":i.visAudStatusQ3=n;break;case"complete":i.visAudStatusQ4=n}return i}var nt=(t,e,i)=>{if("video"===t&&e instanceof CustomEvent){const t=i.trackingState;t.videoViewRecord={...t.videoViewRecord||{},...it(e)};const{eventType:n,actionType:a}=u.Si[e.type]||{};n&&a&&i.beaconUtil.fire(n,a)}};var at=(t,e,i)=>{if("video"===t&&e instanceof CustomEvent){const t=i.trackingState;if(null===t||void 0===t?void 0:t.videoViewRecord){const{duration:e,audVis100Time:n}=t.videoViewRecord;!t.videoGroupMViewable&&(n>=u.VG||n>=e/2)&&(t.videoGroupMViewable=!0,i.beaconUtil.fire(u.Bs.AD_VIDEO_VIEWABLE_GM,u.jo.AD_VIDEO_VIEWABLE_GM))}}};class ot{onClick(){this.beaconUtil.fire(u.Au.CLICK,u.JY.AD_CLICK),this.element instanceof HTMLIFrameElement||this.element.removeEventListener("click",this.onClickHandler)}initialize(){this.beaconUtil.fire(u.Au.AD_IMPRESSION,u.JY.AD_IMPRESSION),d()((t=>{this.element.id===t.id&&"click"===t.type&&this.onClick()})),this.element instanceof HTMLIFrameElement||this.element.addEventListener("click",this.onClickHandler),T((()=>{"visible"!==document.visibilityState?this.windowNotVisibleTime=Date.now():"visible"===document.visibilityState&&(this.windowVisibleTimes.push({notVisible:this.windowNotVisibleTime,visible:Date.now()}),this.windowNotVisibleTime=null),this.onVisibilityChange(document.visibilityState)}))}onVisibilityChange(t){this.lastObservedEntry&&("hidden"===t?this.getAllTrackers().filter((t=>t!==z)).forEach((t=>{t({...this.lastObservedEntry,isIntersecting:!1,intersectionRatio:0},this,(()=>{}))})):"visible"===t&&this.getAllTrackers().filter((t=>t!==z)).forEach((t=>{t(this.lastObservedEntry,this,(()=>{}))})))}getFullViewPercentage(){return(0,u.wf)(this.adCvValues)}getBaseTrackers(){return[h]}adSizeCheck(){return Number(this.element.offsetHeight)*Number(this.element.offsetWidth)>=242500}getAdCustomInfo(){var t;const{advertiserID:e,orderID:i,adUnitID:a,metaData:o}=this.displayAdProps,s=o.dfpResponse,r=o.dfpParams,l=s.googleLineitemId,c=s.googleCreativeId,d=r.dfpTag,u=r.targeting,m=u.location,I=u.categoryId,T=u.ptype,E=e&&i&&l&&c?"".concat(e,":").concat(i,":").concat(l,":").concat(c):void 0,h=(t=>{let{desktopImage:e,mobileImage:i,desktopLogo:n,mobileLogo:a,mainImage:o,logoImage:s,desktopBrandImage:r,mobileBrandImage:l,desktopBrandLogo:c,mobileBrandLogo:d,image:u,mainShortImage:m,tabletImage:I}=t;return e||i||n||a||o||s||r||l||c||d||u||m||I})(this.displayAdProps);let A="",V="";var v,f;(0,n.v)().dspProcessingEnable&&(null===(t=this.displayAdProps.extendedDSPProps)||void 0===t?void 0:t.deviceType)?A="desktop"===(null===(v=this.displayAdProps.extendedDSPProps)||void 0===v?void 0:v.deviceType)?"WMUS":"WMUS-Mobile":A=d&&d.split("/")[2]||"";(0,n.v)().displayIdentifyAdServer&&(V=(null===(f=this.displayAdProps.extendedDSPProps)||void 0===f?void 0:f.adServer)||"GAM");return{adIds:E,adLocation:m,adUnitId:a,assetUrl:h,categoryId:I,dfpTag:A,pageType:T,random:this.displayAdProps.metaData.dfpParams.targeting.sessId,adServer:V}}unmount(){for(const t of Object.values(this.trackingTimeoutList))l(t);for(const t of Object.values(this.commonTrackingTimeoutList))l(t);this.beaconUtil.fire(u.Au.UNLOAD,u.JY.AD_REMOVE),this.element instanceof HTMLVideoElement&&this.beaconUtil.fire(u.Bs.AD_VIDEO_REMOVE,u.jo.AD_VIDEO_REMOVE)}getAllTrackers(){return[H,j,tt,x,N,G,Q,z,h]}getTrackers(){return[H,j,tt,x,N,G,Q,z,h]}getCommonTrackers(){return[nt,at]}getPayload(t){return F(this,t)}constructor(t,e,i,n,a){this.startMrcViewTime=0,this.startFiftyPctContTime=0,this.startHundredPctContTime=0,this.startFullInViewOTS=0,this.mrcTotalPeriodicTime=0,this.cumulativeInViewFifty=0,this.lastInViewFiftyTime=0,this.groupMTotalPeriodicTime=0,this.firedBeacons=new Set,this.lastObservedEntry=null,this.trackingTimeoutList={[L]:[],[P]:[],[S]:[],[M]:[]},this.windowVisibleTimes=[],this.windowNotVisibleTime=null,this.commonTrackingTimeoutList={[u.jI]:[]},this.element=t,this.displayAdProps=e,this.trackingState=i,this.beaconUtil=n,this.adCvValues=a,this.trackingState.adLoadedTime=Date.now(),this.touchOrClickTimeOffset=0,this.trackingState.isAdLarge=this.adSizeCheck(),this.onClickHandler=this.onClick.bind(this),n.attachTracker(this,u.tY.moat),this.initialize()}}class st{attachTracker(t,e){this.trackers.set(e,t)}payloadCheck(t,e){let i=!0;const n=new Set([g]),a=Object.keys(t),s=[];for(let o=0;o<a.length;o++){const e=a[o];void 0!==t[e]||n.has(e)||(s.push(e),i=!1)}return i||(0,o.L)({type:"BEACON_MISSING_KEY",payload:{action:e,missingKeys:s,payload:t}}),i}fire(t,e){const i={...this.commonDisplayAdPayload.metaData.beaconDebug||{},adSource:"S2S",ip:this.commonDisplayAdPayload.metaData.dfpParams.clientIp,s:this.adUuid,t:[],ignore:!1},a={};let o=!1;switch(t){case u.Au.AD_IMPRESSION:case u.Au.CLICK:case u.Au.TOUCH:case u.Au.MRC_VIEWABLE:case u.C7.FULL_VIEWABLE:case u.C7.INVIEW_50_15s:case u.C7.INVIEW_50_5s:case u.Au.UNLOAD:this.trackers.forEach(((s,r)=>{const{payload:l}=s.getPayload(t);var c;this.payloadCheck(l,e)&&(i.t.push(r),(0,n.v)().displayCommonTracking&&(null===(c=this.commonDisplayAdPayload.iasTeamId)||void 0===c?void 0:c.length)&&i.t.push(u.tY.ias),(0,n.v)().displayCommonTracking?a.event=l:a[u.tY.moat]=l,o=!0)}));break;case u.X9.GROUPM_VIEWABLE:case u.X9.PERIODIC_UPDATE:{const r=this.trackers.get(u.tY.moat);if(r){const{payload:l}=r.getPayload(t);var s;if(this.payloadCheck(l,e))i.t.push(u.tY.moat),(0,n.v)().displayCommonTracking&&(null===(s=this.commonDisplayAdPayload.iasTeamId)||void 0===s?void 0:s.length)&&i.t.push(u.tY.ias),(0,n.v)().displayCommonTracking?a.event=l:a[u.tY.moat]=l,o=!0}break}case u.Bs.AD_VIDEO_IMPRESSION:case u.Bs.AD_VIDEO_VIEWABLE:case u.Bs.AD_VIDEO_VIEWABLE_GM:case u.Bs.AD_VIDEO_QUARTILE:case u.Bs.AD_VIDEO_COMPLETE:case u.Bs.AD_VIDEO_CLICK:case u.Bs.AD_VIDEO_REMOVE:this.trackers.forEach(((e,n)=>{const{payload:s}=e.getPayload(t);i.t.push(n),a[u.tY.moat]=s,o=!0}))}if(!o)return;const r={mt:i,pl:a};p.Y2.sendBeacon({context:"displayWlmt",action:"ads",name:e,payload:r}),this.onBeacon&&this.onBeacon(r)}constructor(t,e,i,n){this.adUuid=t,this.commonDisplayAdPayload=e,this.trackingStates=i,this.onBeacon=n,this.trackers=new Map}}const rt=t=>{let{target:e,commonDisplayAdPayload:i,track3PEnable:l,onBeacon:c,dbg:d,root:m}=t;const I=(0,n.v)(),T=I.viewableBeaconFix,E={root:m,rootMargin:"0px",threshold:[u.G1,u.Rl,u.TY,(0,u.wf)(I)]},h=(0,r.useMemo)((()=>(t=>{const e={};return t&&(e.moat={adLoadedTime:0,isAdLarge:!1,viewabilityMRC:!1,groupMViewable:!1,totalMrcViewTime:0,totalFiftyPctContTime:0,totalHundredPctContTime:0,publicisFullInViewOTS:!1,fullInViewOTS:0,eventTypeCount:{AD_IMPRESSION:0,CLICK:0,MRC_VIEWABLE:0,GROUPM_VIEWABLE:0,PERIODIC_UPDATE:0,TOUCH:0,UNLOAD:0,AD_VIDEO_IMPRESSION:0,AD_VIDEO_QUARTILE:0,AD_VIDEO_COMPLETE:0,AD_VIDEO_VIEWABLE:0,AD_VIDEO_VIEWABLE_GM:0,AD_VIDEO_CLICK:0,AD_VIDEO_REMOVE:0}}),e})(l)),[l]),{0:A,1:V}=(0,r.useState)(e.current),v=(0,n.v)();(0,r.useEffect)((()=>{V(e.current)}),[e,V]);const f=(0,r.useMemo)((()=>i.uuId||""),[i]),p=(0,r.useRef)(new st(f,i,h,c)),g=(0,r.useRef)(null),{0:D,1:_}=(0,r.useState)(null);(0,r.useEffect)((()=>{l&&A&&!g.current&&((0,n.v)().moatRefactorEnable?g.current=new ot(A,i,h.moat,p.current,v):g.current=new et(A,i,h.moat,p.current,v),_(g.current))}),[v,i,A,l,h.moat,_]),(0,r.useEffect)((()=>()=>{g.current&&g.current.unmount()}),[]);const w=(0,r.useCallback)(((t,e,i)=>{(0,o.L)({payload:{state:e},type:"GLASS_3P_AD_UPDATE",meta:{stateChange:"".concat(t,":").concat(i),id:f}})}),[f]),y=(0,r.useCallback)((t=>{if(g.current&&l){g.current.getAllTrackers().forEach((e=>{e(t,g.current,w)}))}}),[l,w]);(0,a.P)(e,y,E,{root:m,dbg:!0,auxData:{adType:"display",displayAd:i,dbg:d}},T?[D]:[null]);const C=(0,r.useMemo)((()=>t=>{if(g.current&&l){g.current.getCommonTrackers().forEach((e=>{e("video",t,g.current,w)}))}}),[l,w]);(0,s.x)(A,u.ml,C)}},935366:function(t,e,i){i.d(e,{Au:function(){return o},Bs:function(){return d},C7:function(){return s},G1:function(){return E},JY:function(){return l},Rl:function(){return h},Si:function(){return T},TY:function(){return A},VG:function(){return v},WT:function(){return p},X9:function(){return r},jI:function(){return n},jo:function(){return u},ml:function(){return m},nJ:function(){return V},tY:function(){return a},wM:function(){return c},wf:function(){return f},yh:function(){return I}});const n="viewabilityMRCTimeout";var a,o,s,r,l,c,d,u;!function(t){t.moat="moat",t.ias="ias",t.doubleverify="doubleverify"}(a||(a={})),function(t){t.AD_IMPRESSION="AD_IMPRESSION",t.CLICK="CLICK",t.TOUCH="TOUCH",t.MRC_VIEWABLE="MRC_VIEWABLE",t.UNLOAD="UNLOAD"}(o||(o={})),function(t){t.FULL_VIEWABLE="FULL_VIEWABLE",t.INVIEW_50_5s="INVIEW_50_5s",t.INVIEW_50_15s="INVIEW_50_15s"}(s||(s={})),function(t){t.GROUPM_VIEWABLE="GROUPM_VIEWABLE",t.PERIODIC_UPDATE="AD_STATUS"}(r||(r={})),function(t){t.AD_IMPRESSION="adImpression",t.AD_VIEWABLE="adViewable",t.AD_TOUCH="adTouch",t.AD_CLICK="adClick",t.AD_REMOVE="adRemove"}(l||(l={})),function(t){t.AD_VIEWABLE_GM="adViewableGm",t.AD_STATUS="adStatus"}(c||(c={})),function(t){t.AD_VIDEO_IMPRESSION="AD_VIDEO_IMPRESSION",t.AD_VIDEO_QUARTILE="AD_VIDEO_QUARTILE",t.AD_VIDEO_COMPLETE="AD_VIDEO_COMPLETE",t.AD_VIDEO_VIEWABLE="AD_VIDEO_VIEWABLE",t.AD_VIDEO_VIEWABLE_GM="AD_VIDEO_VIEWABLE_GM",t.AD_VIDEO_CLICK="AD_VIDEO_CLICK",t.AD_VIDEO_REMOVE="AD_VIDEO_REMOVE"}(d||(d={})),function(t){t.AD_VIDEO_IMPRESSION="adVideoImpression",t.AD_VIDEO_QUARTILE="adVideoQuartile",t.AD_VIDEO_COMPLETE="adVideoComplete",t.AD_VIDEO_VIEWABLE="adVideoViewable",t.AD_VIDEO_VIEWABLE_GM="adVideoViewableGM",t.AD_VIDEO_CLICK="adVideoClick",t.AD_VIDEO_REMOVE="adVideoRemove"}(u||(u={}));const m=["impression","viewable","viewableGm","start","firstQuartile","midpoint","thirdQuartile","complete","videoClick","trackingUpdate"],I=[d.AD_VIDEO_IMPRESSION,d.AD_VIDEO_QUARTILE,d.AD_VIDEO_COMPLETE,d.AD_VIDEO_VIEWABLE,d.AD_VIDEO_VIEWABLE_GM,d.AD_VIDEO_CLICK,d.AD_VIDEO_REMOVE],T={impression:{eventType:d.AD_VIDEO_IMPRESSION,actionType:u.AD_VIDEO_IMPRESSION},viewable:{eventType:d.AD_VIDEO_VIEWABLE,actionType:u.AD_VIDEO_VIEWABLE},viewableGm:{eventType:d.AD_VIDEO_VIEWABLE_GM,actionType:u.AD_VIDEO_VIEWABLE_GM},start:{eventType:d.AD_VIDEO_QUARTILE,actionType:u.AD_VIDEO_QUARTILE},firstQuartile:{eventType:d.AD_VIDEO_QUARTILE,actionType:u.AD_VIDEO_QUARTILE},midpoint:{eventType:d.AD_VIDEO_QUARTILE,actionType:u.AD_VIDEO_QUARTILE},thirdQuartile:{eventType:d.AD_VIDEO_QUARTILE,actionType:u.AD_VIDEO_QUARTILE},complete:{eventType:d.AD_VIDEO_COMPLETE,actionType:u.AD_VIDEO_COMPLETE},videoClick:{eventType:d.AD_VIDEO_CLICK,actionType:u.AD_VIDEO_CLICK},videoRemove:{eventType:d.AD_VIDEO_REMOVE,actionType:u.AD_VIDEO_REMOVE}},E=0,h=.3,A=.5,V=1,v=15e3,f=t=>t.povMrcFix?V:.999,p=1e3}}]);