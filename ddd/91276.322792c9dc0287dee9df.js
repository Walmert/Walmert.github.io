"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91276],{22271:function(e,a,n){n.d(a,{d:function(){return u},M:function(){return d}});const l={browse:{SkylineDisplayAd:{top:{renderEnable:"bpSkRenderEnable",fp:"bpSkMeasure1PEnable",tp:"bpSkMeasure1PEnable"}},MarqueeDisplayAd:{marquee1:{renderEnable:"bpMq1RenderEnable",fp:"bpMq1Measure1PEnable",tp:"bpMq1Measure3PEnable"},marquee2:{renderEnable:"bpMq2RenderEnable",fp:"bpMq2Measure1PEnable",tp:"bpMq2Measure3PEnable"}}},homepage:{POV2DisplayAd:{hppov2:{fp:"hpPov2Measure1PEnable",tp:"hpPov2Measure3PEnable"}},POV3DisplayAd:{hppov3:{fp:"hpPov3Measure1PEnable",tp:"hpPov3Measure3PEnable"}},POV4DisplayAd:{hppov4:{fp:"hpPov3Measure1PEnable",tp:"hpPov3Measure3PEnable"}},MarqueeDisplayAd:{marquee1:{renderEnable:"hpMq1RenderEnable",fp:"hpMq1Measure1PEnable",tp:"hpMq1Measure3PEnable"},marquee2:{renderEnable:"hpMq2RenderEnable",fp:"hpMq2Measure1PEnable",tp:"hpMq2Measure3PEnable"}}},item:{SkylineDisplayAd:{top:{renderEnable:"ipSkRenderEnable",fp:"ipSkMeasure1PEnable",tp:"ipSkMeasure3PEnable"}},MarqueeDisplayAd:{marquee1:{renderEnable:"ipMq1RenderEnable",fp:"ipMq1Measure1PEnable",tp:"ipMq1Measure3PEnable"},marquee2:{renderEnable:"ipMq2RenderEnable",fp:"ipMq2Measure1PEnable",tp:"ipMq2Measure3PEnable"}}},search:{SkylineDisplayAd:{top:{renderEnable:"spSkRenderEnable",fp:"spSkMeasure1PEnable",tp:"spSkMeasure3PEnable"}},MarqueeDisplayAd:{marquee1:{renderEnable:"spMq1RenderEnable",fp:"spMq1Measure1PEnable",tp:"spMq1Measure3PEnable"},marquee2:{renderEnable:"spMq2RenderEnable",fp:"spMq2Measure1PEnable",tp:"spMq2Measure3PEnable"}}},thankYou:{},addItems:{},stockup:{}};var r=n(27881),t=n(7257),p=n(79497),s=n(52406),o=n(82510);const u=(e,a)=>{var n,t;const p=(0,r.D)();return null==(n=l[p.pageType][e])||null==(t=n[a])?void 0:t.renderEnable};function d(e,a,n,u){const{pageType:d}=(0,r.D)(),i=(0,t.E)(),b=(0,s.useRef)(Date.now()),M=(0,p.v)(),E=(0,s.useMemo)((()=>{var n;return null==(n=l[d][e])?void 0:n[a]}),[a,e,d]),c=(0,s.useMemo)((()=>!E||"string"!==typeof E.renderEnable||M[E.renderEnable]),[M,E]),P=(0,s.useMemo)((()=>{var e,a;const l=M.blockInternal&&(null==n||null==(e=n.metaData)?void 0:e.isInternal),r=null==n||null==(a=n.metaData)?void 0:a.cacheBuster,t=M.cacheBusterTimeDiffMs,p="true"===(0,o.ej)("adsdebug");return!(!p&&l)&&!(!p&&t&&r&&b.current-r>t)}),[M,n]);let f=!0,q=!0,C=M.measure3PImpEnable;return E&&(f=M[E.fp],q=M[E.tp]),!P||i||null!=u&&u.disableTracking?(f=!1,q=!1,C=!1):q||(C=!1),{measure3PImpEnable:C,renderEnable:c,trackingEnable:P,track1PEnable:f,track3PEnable:q}}},90898:function(e,a,n){n.d(a,{lk:function(){return t},yS:function(){return p},w0:function(){return s}});var l=n(35564);const r=["BrandAmplifierAd","BuyBoxAd","MarqueeDisplayAd","POV2DisplayAd","POV3DisplayAd","POV4DisplayAd","SkylineDisplayAd","SponsoredProductCarousel"];const t=(e,a)=>{if(a.moduleType.endsWith("DisplayAd")){const a="string"===typeof e?e:e.url;return`/swag/graphql${-1===a.indexOf("?")?"":a.slice(a.indexOf("?"))}`}return e},p=(e,a,n,t)=>{var p,s,o,u,d,i,b;const M=(e=>{let a={adsContext:{},pageContext:{},adRequestComposite:{},storeId:"",stateCode:"",zipCode:""};for(const t of Object.values(e))if(l=t.type,r.includes(l)){var n;const e=t.configs,l=null==e?void 0:e.ad,r=null==e||null==(n=e._rawConfigs)?void 0:n.lazy;if((null===r||void 0===r)&&l){a={adsContext:l.adsContext||{},pageContext:l.pageContext,adRequestComposite:l.adRequestComposite||{},storeId:l.storeId,stateCode:l.stateCode,zipCode:l.zipCode};break}}var l;return a})(n),E=(null==t?void 0:t.pageId)||"",c=M.pageContext;return{adRequestComposite:M.adRequestComposite,adsContext:M.adsContext,pageContext:c&&!(0,l.Q)(c)?c:null==t||null==(p=t.pageMetadata)?void 0:p.pageContext,pageId:E,pageType:a,platform:e?"MOBILE_WEB":"DESKTOP",tenant:"WM_GLASS",locationContext:{storeId:M.storeId||(null==t||null==(s=t.pageMetadata)||null==(o=s.location)?void 0:o.storeId)||"",stateCode:M.stateCode||(null==t||null==(u=t.pageMetadata)||null==(d=u.location)?void 0:d.stateOrProvinceCode)||"",zipCode:M.zipCode||(null==t||null==(i=t.pageMetadata)||null==(b=i.location)?void 0:b.postalCode)||""}}},s=(e,a)=>{const n=e.type;return{...a,moduleConfigs:{moduleLocation:e.configs._rawConfigs.moduleLocation,lazy:e.configs._rawConfigs.lazy},moduleType:n}}}}]);