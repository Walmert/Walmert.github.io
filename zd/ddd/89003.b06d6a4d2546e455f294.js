(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89003],{91402:function(e,a,s){"use strict";s.d(a,{W:function(){return c}});var t=s(30567),n=s(94358),r=s.n(n),i=s(85158),l=s.n(i),o=s(61613);const c=e=>{const{children:a,className:s,...n}=(0,o.p)(e,c,!0);return(0,t.jsx)("div",{className:r()(l().container,s),...n,children:a})};c.displayName="Container"},89496:function(e,a,s){"use strict";s.d(a,{p:function(){return c}});var t=s(30567),n=s(94358),r=s.n(n),i=s(16153),l=s.n(i),o=s(61613);const c=e=>{const{as:a="span",className:s,variant:n="1",...i}=(0,o.p)(e,c,!0);return(0,t.jsx)(a,{className:r()(l().subheading,"1"===n&&l().subheading1,"2"===n&&l().subheading2,s),...i})};c.displayName="Subheading"},76152:function(e,a,s){"use strict";s.d(a,{ZP:function(){return I}});var t=s(30567),n=s(30919),r=s(52406),i=s(89496),l=s(92652),o=s(70640),c=s(69866),d=s(5166),p=s(91622),u=s(71683),m=s(22517);let f;!function(e){e.WPP="WalmartShield",e.APPLE_CARE="Apple",e.IN_HOME_INSTALLATION="Installation",e.TIRE_INSTALLATION="Tire"}(f||(f={}));const g="I don't need protection at this time",v="I don't need help",h="_NO_SELECT",x=({serviceTitle:e,selectedSubtext:a,expanded:s,serviceSubTitle:n})=>(0,t.jsxs)("div",{className:"flex items-left flex-column",children:[(0,t.jsx)(i.p,{as:"h3",children:e}),a&&!s?(0,t.jsx)(c.Z,{iconType:"Check",className:"flex",showIcon:!0,extraIconMargin:!0,children:a}):n&&(0,t.jsx)("p",{className:"ma0 f6 o-70",children:n})]}),y=e=>e.currentPrice?`${e.selectedDisplayName} - ${e.currentPrice.priceString}`:`${e.selectedDisplayName}`,N=({serviceType:e,groupType:a,offerId:s,price:t,pageName:n})=>{if("cart"===n)return{ta:{ss:{sg:e,sr:a,sp:t,ao:s},mo:"addOnServices"},pg:{nm:n}}},b=({groups:e,serviceType:a,DetailOverlay:s,onItemSelect:n,selectedOption:i,pageName:o})=>(0,t.jsxs)(r.Fragment,{children:[null==e?void 0:e.map((e=>(0,t.jsxs)("div",{"data-testid":`${a}_Group`,role:"radiogroup","aria-labelledby":`${e.groupType}`,children:[(0,t.jsxs)("div",{className:"inline-flex lh-title pt3",children:["APPLE_CARE"===e.groupType?(0,t.jsx)(u.Z,{src:"//i5.walmartimages.com/dfw/63fd9f59-48db/f3a7ea93-6a99-406f-a0d9-1d4ec2053aa9/v1/applecareplus-logo.png",alt:"AppleCare Logo",preload:!1,width:16,height:16,"aria-hidden":!0,"data-testid":"APPLE_CARE_Icon",className:"mr3"}):(0,t.jsx)(p.J,{size:"small",name:f[e.groupType],className:"mr3","aria-hidden":!0,"data-testid":`${e.groupType}_Icon`}),(0,t.jsx)("span",{className:"mr2 mid-gray lh-title f6",id:`${e.groupType}`,children:`Add ${e.groupTitle}`}),s&&(0,t.jsx)(s,{content:e.shortDescription||"",logoImageUrl:e.assetUrl||"",title:e.groupTitle,groupType:e.groupType,serviceType:a})]}),T({services:e.services,groupType:e.groupType,serviceType:a,onItemSelect:n,selectedOption:i,pageName:o})]},e.groupType))),(0,t.jsx)(l.i,{className:"mt3 ml5"}),(0,t.jsx)(m.Z,{label:"HOME_SERVICE"===a?v:g,value:h,name:a,onChange:()=>n({offerId:a+h,selectedDisplayName:"",currentPrice:null,groupType:""}),checked:a+h===i,className:"w-100 ml5 mt3",onLinkName:"cart"===o?"addService":void 0,onLinkExtras:N({serviceType:a,groupType:"none",offerId:"none",price:"",pageName:o})})]}),T=({services:e,groupType:a,serviceType:s,onItemSelect:n,selectedOption:r,pageName:i})=>null==e?void 0:e.map((e=>{var l,o;return(0,t.jsx)(m.Z,{label:e.displayName,value:e.name,name:s,onChange:()=>{n({offerId:e.offerId,selectedDisplayName:y(e),currentPrice:e.currentPrice,groupType:a})},checked:e.offerId===r,className:"w-100 ml5 mt3",onLinkName:"cart"===i?"addService":void 0,onLinkExtras:N({serviceType:s,groupType:a,price:(null==e||null==(l=e.currentPrice)||null==(o=l.price)?void 0:o.toString())||"",offerId:e.offerId,pageName:i})},e.offerId)})),S=({serviceTitle:e,selectedSubtext:a,expanded:s,serviceSubTitle:t})=>a&&!s?e+a:e+t;var w=e=>{const{serviceData:a,selectCallback:s,selectedServices:n,detailOverlay:i,pageName:c,autoExpanded:u}=e,{serviceType:m,serviceTitle:f,serviceSubTitle:g,groups:v}=a,{0:N,1:T}=(0,r.useState)(u||!1),{0:w,1:E}=(0,r.useState)(`${m+h}`),{0:I,1:j}=(0,r.useState)(""),k=""+(N?"collapse":"expand"),C=(0,r.useCallback)(((e,a)=>{for(const s of e.services)if(s.offerId===a[e.groupType]){j(y(s));break}}),[]);(0,r.useEffect)((()=>{if(n&&null!=v&&v.length)for(let e=0;e<v.length;e++){const a=v[e];if(n[a.groupType]){E(n[a.groupType]),C(a,n);break}e===v.length-1&&(E(`${m+h}`),j(""))}}),[n]);return(0,t.jsxs)("section",{"data-testid":`${m}_SERVICE`,className:"expand-collapse-section",children:[(0,t.jsxs)("div",{className:"accordion-heading","data-testid":m,children:[x({serviceTitle:f,selectedSubtext:I,expanded:N,serviceSubTitle:g}),(0,t.jsx)(d.Z,{onLinkName:null==m?void 0:m.toLowerCase(),"aria-controls":"","aria-label":S({serviceTitle:f,selectedSubtext:I,expanded:N,serviceSubTitle:g}),"aria-expanded":N,onClick:()=>T(!N),type:"button",useLDButton:!1,className:"accordion-heading-button nt4 pa0",onLinkExtras:{ta:{sg:m,mo:"addOnServices"},li:{nm:k},nm:{nm:k},pg:{nm:c}},children:(0,t.jsx)(p.J,{"aria-hidden":"true",className:"pa0",name:N?"ChevronUp":"ChevronDown",size:"medium"})})]}),(0,t.jsx)(o.U,{className:"expand-collapse-content accordion-collapse pr5",isOpen:N,children:b({groups:v,serviceType:m,DetailOverlay:i,onItemSelect:({offerId:e,selectedDisplayName:a,currentPrice:t,groupType:n})=>{const r=e.includes(h)?"":e;E(e),j(a||""),s({offerId:r||"",serviceType:m,currentPrice:t||null,groupType:n})},selectedOption:w,pageName:c})}),(0,t.jsx)(l.i,{})]})};const E=e=>{const a=[];return e.forEach((e=>{var s;null==(s=e.groups)||s.forEach((s=>{var t;null==(t=s.services)||t.forEach((t=>{var n;a.push({sg:e.serviceType,sr:s.groupType,sp:`${(null==(n=t.currentPrice)?void 0:n.price)||0}`,ao:t.offerId,us:t.usItemId})}))}))})),a};var I=({servicesList:e,selectedServices:a,selectCallback:s,detailOverlay:i,pageName:l,autoExpanded:o,expandFirstService:c})=>{const d=(0,r.useMemo)((()=>(e=>null!=e&&e.length?e.reduce(((e,a)=>(e[a.groupType]=a.offerId,e)),{}):{})(a)),[a]),p=(0,n.wG)();return(0,r.useEffect)((()=>{p({context:l,action:"moduleView",name:"addOnServices",payload:{ta:{as:E(e),nm:"addOnServices",ty:"external"},pg:{nm:l}}})}),[]),(0,t.jsx)(r.Fragment,{children:e.map(((e,a)=>{const n=o||(0===a?c:o);return(0,t.jsx)(w,{serviceData:e,selectCallback:s,selectedServices:d,detailOverlay:i,pageName:l,autoExpanded:n},e.serviceType)}))})}},89003:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return S},getDefaultAOS:function(){return T}});var t=s(30567),n=s(76152),r=s(22326),i=s(38253),l=s(72929),o=s(91402),c=s(19144),d=s(71687),p=s(7741),u=s(58769),m=s(9848),f=s(52406),g=s(42457),v=s(5166),h=s(40909),x=s(71683),y=s(94358),N=s.n(y);var b=({content:e,logoImageUrl:a,title:s,groupType:n,serviceType:r})=>{const{0:i,1:l}=(0,f.useState)(!1),{isMobile:o}=(0,u.vP)(),c=(0,t.jsxs)("div",{className:N()("flex items-center ",{mt6:o}),style:{marginLeft:o?"-32px":"0"},children:[(0,t.jsx)(x.Z,{src:a,alt:"",width:50,height:50,preload:!0}),(0,t.jsx)("div",{className:"f3 dark-gray lh-copy ml3",children:s})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Z,{onClick:()=>l(!0),variant:"tertiary",className:"pa0 h-auto lh-solid","aria-label":`Details of ${s}`,onLinkExtras:{ta:{sg:r,sr:n,mo:"addOnServices"},li:{nm:"details"},pg:{nm:"itemPage"},nm:{nm:"details"}},children:"Details"}),i&&(0,t.jsx)(h.Z,{isOpen:!0,onClose:()=>l(!1),className:"relative pa0 vh-100 w-40 pb3",title:c,size:"large",children:(0,t.jsx)(g.I,{className:"mid-gray f5",element:"span",htmlString:e})})]})};const T=e=>{const a={};for(const s of e)a[s.serviceType]={currentPrice:null,offerId:"",groupType:""};return a};var S=()=>{var e,a;const{isMobile:s}=(0,u.vP)(),g=(0,i.mn)(),{selectedAddonServices:v,setSelectedAddonServices:h,updateAddOnServiceRef:x}=(0,l.N)(),y=(0,m.Zl)(),N=(0,d.i)(r.N),S=(null==N||null==(e=N.product)||null==(a=e.values)?void 0:a.addOnServiceRef)||"",w=(0,f.useRef)(null),E=s?o.W:c.Z,I=(0,f.useCallback)((e=>{const a=w.current;a&&!e?window.cancelAnimationFrame(a):!a&&e&&(w.current=window.requestAnimationFrame((()=>{x(e)})))}),[x]);return(0,f.useEffect)((()=>{h(T(g)),(0,p.cM)(["info","item","addOnServices"],{type:"log",message:"AddOnServices render",addonServices:g,isomorphicSessionId:y.isomorphicSessionId})}),[]),(0,t.jsxs)(t.Fragment,{children:["top"===S&&(0,t.jsx)("span",{ref:I}),(0,t.jsx)(E,{"data-testid":"item-addon-services",className:"pa3 pv0 mv3",children:(0,t.jsx)(n.ZP,{servicesList:g,detailOverlay:b,selectCallback:({serviceType:e,currentPrice:a,offerId:s,groupType:t})=>{const n={...v,[e]:{currentPrice:a,offerId:s,groupType:t}};h(n)},pageName:"productPage",autoExpanded:!s})}),"bottom"===S&&(0,t.jsx)("span",{ref:I})]})}},69866:function(e,a,s){"use strict";var t=s(30567),n=(s(52406),s(71683)),r=s(91622),i=s(94358),l=s.n(i);a.Z=({showIcon:e=!0,extraIconMargin:a,iconType:s,children:i,className:o,customIcon:c})=>{const d=a?"mr2":"mr1";return(0,t.jsxs)("div",{className:l()("f6 mr3",o),children:[e&&(c?(0,t.jsx)(n.Z,{src:c,width:16,height:16,preload:!0,alt:"",className:d,"data-testid":"icontext-icon","aria-hidden":!0}):(0,t.jsx)(r.J,{"aria-hidden":!0,name:s,className:d,"data-testid":"icontext-icon"})),(0,t.jsx)("span",{className:"lh-title",children:i})]})}},40909:function(e,a,s){"use strict";var t=s(30567),n=s(74600),r=s(7551),i=s(58769),l=s(31985),o=s(73164),c=s(52406),d=s(97831);const p=(0,o.default)((()=>Promise.all([s.e(69902),s.e(71952),s.e(7410)]).then(s.bind(s,7410)).then((({BottomSheet:e})=>e))),{loadableGenerated:{webpack:()=>[7410],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/livingdesign-components/BottomSheet"]}}),u=(0,o.default)((()=>Promise.all([s.e(69902),s.e(71952),s.e(39943)]).then(s.bind(s,39943)).then((({DeprecatedModal:e})=>e))),{loadableGenerated:{webpack:()=>[39943],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-modal"]}}),m=(0,o.default)((()=>Promise.all([s.e(69902),s.e(71952),s.e(67566)]).then(s.bind(s,682)).then((({DeprecatedPanel:e})=>e))),{loadableGenerated:{webpack:()=>[682],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-panel"]}}),f=()=>{};let g=0;const v={bottomsheet:p,modal:u,panel:m};a.Z=e=>{const{desktopComponent:a="modal",isHighPriority:s,isOpen:o,onLinkExtras:p={},onLinkExtrasForClose:u,mobileComponent:m="bottomsheet",onClose:h,style:x,...y}=e,N=(0,c.useRef)(null),{setIsDialogOpen:b}=(0,c.useContext)(l.s),T=(0,c.useContext)(d.Z);if(!T)throw new Error("Dialog should only be used within a DialogProvider");const{isMobile:S}=(0,i.vP)(),{0:w,1:E}=(0,c.useState)(o),{setIsOverlay:I}=(0,c.useContext)(n.fC),j=(0,c.useRef)(-1);-1===j.current&&(j.current=g,g+=1);const k=(0,r.C)(N,{...e,onClick:h,onLinkName:"close",...u&&{onLinkExtras:u}});(0,c.useEffect)((()=>{I();const e=T.visibleStackIndexes[j.current];o?void 0===e?T.dispatch({type:"addDialog",payload:{id:j.current,isHighPriority:s}}):E(e===T.state.visibleStack.length-1):void 0!==e&&T.dispatch({type:"removeDialog",payload:j.current})}),[s,o,T,j]),(0,c.useEffect)((()=>()=>{T.dispatch({type:"removeDialog",payload:j.current})}),[]);const C={...x};w||(C.display="none"),(0,c.useEffect)((()=>{o&&b&&b(o)}),[o]);const P=S?v[m]:v[a];return(0,t.jsx)(P,{isOpen:o,closeButtonProps:{ref:N},onClose:w?e=>{k(e),"function"===typeof b&&b(!1)}:f,style:C,...y})}},22517:function(e,a,s){"use strict";s.d(a,{Z:function(){return m}});var t=s(30567),n=s(52406),r=s(94358),i=s.n(r),l=s(68794),o=s.n(l);const c={},d=(e,a)=>n.useMemo((()=>a||(e=>{const a=c[e];let s=0;return"undefined"!==typeof a&&(s=a+1),c[e]=s,`ld_${e}_${s}`})(e)),[e,a]),p=n.forwardRef(((e,a)=>{const{a11yLabelledBy:s,checked:n=!1,className:r,disabled:l=!1,id:c,label:p,name:u,onChange:m,radioProps:f={},value:g,...v}=((e,a,s=!1)=>{const t={};for(const n in e)if(e.hasOwnProperty(n)){const a=e[n];"UNSAFE_className"===n||"className"===n?t.className=i()(t.className,a):"UNSAFE_style"===n||"style"===n?t.style=t.style?{...t.style,...a}:a:t[n]=a}return t})(e,0,!0);(p?1:0)+(s?1:0)===1||console.error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");const{className:h,...x}=f,y=d("radio",c);return(0,t.jsxs)("label",{className:i()(o().label,n&&o().checked,l&&o().disabled,r),htmlFor:y,...v,children:[(0,t.jsx)("input",{checked:n,className:i()(o().input,h),disabled:l,id:y,name:u,onChange:m,ref:a,type:"radio",...s&&{"aria-labelledby":s},...g&&{value:g},...x}),(0,t.jsxs)("svg",{"aria-hidden":!0,className:i()(o().radio,!!p&&o().hasLabel),viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{className:o().radioRing,cx:"10",cy:"10",r:"9"}),(0,t.jsx)("circle",{className:o().radioDot,cx:"10",cy:"10",r:"6"})]}),p]})}));p.displayName="DeprecatedRadio";var u=s(7551);var m=(0,n.forwardRef)(((e,a)=>{const s=(0,n.useRef)(null),{onLinkName:r,onLinkExtras:i,...l}=e,o=(0,u.C)(s,{onLinkName:r,onLinkExtras:i,onClick:e.onChange});return(0,t.jsx)(p,{...l,ref:e=>{"function"===typeof a?a(e):a&&(a.current=e),s.current=e},onChange:o})}))},85158:function(e){e.exports={container:"w_k"}},16153:function(e){e.exports={subheading:"w_CL",subheading1:"w_CM",subheading2:"w_CN"}},68794:function(e){e.exports={label:"w_D8",checked:"w_D9",disabled:"w_EA",input:"w_EB",radio:"w_EC",hasLabel:"w_ED",radioRing:"w_EE",radioDot:"w_EF"}}}]);