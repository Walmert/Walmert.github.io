(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9003],{91402:function(e,a,s){"use strict";s.d(a,{W:function(){return c}});var t=s(30567),r=s(94358),n=s.n(r),i=s(85158),l=s.n(i),o=s(61613);const c=e=>{const{children:a,className:s,...r}=(0,o.p)(e,c,!0);return(0,t.jsx)("div",{className:n()(l().container,s),...r,children:a})};c.displayName="Container"},89496:function(e,a,s){"use strict";s.d(a,{p:function(){return c}});var t=s(30567),r=s(94358),n=s.n(r),i=s(16153),l=s.n(i),o=s(61613);const c=e=>{const{as:a="span",className:s,variant:r="1",...i}=(0,o.p)(e,c,!0);return(0,t.jsx)(a,{className:n()(l().subheading,"1"===r&&l().subheading1,"2"===r&&l().subheading2,s),...i})};c.displayName="Subheading"},76152:function(e,a,s){"use strict";s.d(a,{ZP:function(){return E}});var t=s(30567),r=s(30919),n=s(52406),i=s(89496),l=s(92652),o=s(70640),c=s(69866),d=s(5166),p=s(91622),u=s(71683),m=s(22517);let f;!function(e){e.WPP="WalmartShield",e.APPLE_CARE="Apple",e.IN_HOME_INSTALLATION="Installation",e.TIRE_INSTALLATION="Tire"}(f||(f={}));const g="I don't need protection at this time",h="I don't need help",v="_NO_SELECT",y=({serviceTitle:e,selectedSubtext:a,expanded:s,serviceSubTitle:r})=>(0,t.jsxs)("div",{className:"flex items-left flex-column",children:[(0,t.jsx)(i.p,{as:"h3",children:e}),a&&!s?(0,t.jsx)(c.Z,{iconType:"Check",className:"flex",showIcon:!0,extraIconMargin:!0,children:a}):r&&(0,t.jsx)("p",{className:"ma0 f6 o-70",children:r})]}),x=e=>e.currentPrice?`${e.selectedDisplayName} - ${e.currentPrice.priceString}`:`${e.selectedDisplayName}`,N=({serviceType:e,groupType:a,offerId:s,price:t,pageName:r})=>{if("cart"===r)return{ta:{ss:{sg:e,sr:a,sp:t,ao:s},mo:"addOnServices"},pg:{nm:r}}},b=({groups:e,serviceType:a,DetailOverlay:s,onItemSelect:r,selectedOption:i,pageName:o})=>(0,t.jsxs)(n.Fragment,{children:[null==e?void 0:e.map((e=>(0,t.jsxs)("div",{"data-testid":`${a}_Group`,role:"radiogroup","aria-labelledby":`${e.groupType}`,children:[(0,t.jsxs)("div",{className:"inline-flex lh-title pt3",children:["APPLE_CARE"===e.groupType?(0,t.jsx)(u.Z,{src:"//i5.walmartimages.com/dfw/63fd9f59-48db/f3a7ea93-6a99-406f-a0d9-1d4ec2053aa9/v1/applecareplus-logo.png",alt:"AppleCare Logo",preload:!1,width:16,height:16,"aria-hidden":!0,"data-testid":"APPLE_CARE_Icon",className:"mr3"}):(0,t.jsx)(p.J,{size:"small",name:f[e.groupType],className:"mr3","aria-hidden":!0,"data-testid":`${e.groupType}_Icon`}),(0,t.jsx)("span",{className:"mr2 mid-gray lh-title f6",id:`${e.groupType}`,children:`Add ${e.groupTitle}`}),s&&(0,t.jsx)(s,{content:e.shortDescription||"",logoImageUrl:e.assetUrl||"",title:e.groupTitle,groupType:e.groupType,serviceType:a})]}),T({services:e.services,groupType:e.groupType,serviceType:a,onItemSelect:r,selectedOption:i,pageName:o})]},e.groupType))),(0,t.jsx)(l.i,{className:"mt3 ml5"}),(0,t.jsx)(m.Z,{label:"HOME_SERVICE"===a?h:g,value:v,name:a,onChange:()=>r({offerId:a+v,selectedDisplayName:"",currentPrice:null,groupType:""}),checked:a+v===i,className:"w-100 ml5 mt3",onLinkName:"cart"===o?"addService":void 0,onLinkExtras:N({serviceType:a,groupType:"none",offerId:"none",price:"",pageName:o})})]}),T=({services:e,groupType:a,serviceType:s,onItemSelect:r,selectedOption:n,pageName:i})=>null==e?void 0:e.map((e=>{var l,o;return(0,t.jsx)(m.Z,{label:e.displayName,value:e.name,name:s,onChange:()=>{r({offerId:e.offerId,selectedDisplayName:x(e),currentPrice:e.currentPrice,groupType:a})},checked:e.offerId===n,className:"w-100 ml5 mt3",onLinkName:"cart"===i?"addService":void 0,onLinkExtras:N({serviceType:s,groupType:a,price:(null==e||null==(l=e.currentPrice)||null==(o=l.price)?void 0:o.toString())||"",offerId:e.offerId,pageName:i})},e.offerId)})),S=({serviceTitle:e,selectedSubtext:a,expanded:s,serviceSubTitle:t})=>a&&!s?e+a:e+t;var w=e=>{const{serviceData:a,selectCallback:s,selectedServices:r,detailOverlay:i,pageName:c,autoExpanded:u}=e,{serviceType:m,serviceTitle:f,serviceSubTitle:g,groups:h}=a,{0:N,1:T}=(0,n.useState)(u||!1),{0:w,1:I}=(0,n.useState)(`${m+v}`),{0:E,1:C}=(0,n.useState)(""),j=""+(N?"collapse":"expand"),k=(0,n.useCallback)(((e,a)=>{for(const s of e.services)if(s.offerId===a[e.groupType]){C(x(s));break}}),[]);(0,n.useEffect)((()=>{if(r&&null!=h&&h.length)for(let e=0;e<h.length;e++){const a=h[e];if(r[a.groupType]){I(r[a.groupType]),k(a,r);break}e===h.length-1&&(I(`${m+v}`),C(""))}}),[r]);return(0,t.jsxs)("section",{"data-testid":`${m}_SERVICE`,className:"expand-collapse-section",children:[(0,t.jsxs)("div",{className:"accordion-heading","data-testid":m,children:[y({serviceTitle:f,selectedSubtext:E,expanded:N,serviceSubTitle:g}),(0,t.jsx)(d.Z,{onLinkName:null==m?void 0:m.toLowerCase(),"aria-controls":"","aria-label":S({serviceTitle:f,selectedSubtext:E,expanded:N,serviceSubTitle:g}),"aria-expanded":N,onClick:()=>T(!N),type:"button",useLDButton:!1,className:"accordion-heading-button nt4 pa0",onLinkExtras:{ta:{sg:m,mo:"addOnServices"},li:{nm:j},nm:{nm:j},pg:{nm:c}},children:(0,t.jsx)(p.J,{"aria-hidden":"true",className:"pa0",name:N?"ChevronUp":"ChevronDown",size:"medium"})})]}),(0,t.jsx)(o.U,{className:"expand-collapse-content accordion-collapse pr5",isOpen:N,children:b({groups:h,serviceType:m,DetailOverlay:i,onItemSelect:({offerId:e,selectedDisplayName:a,currentPrice:t,groupType:r})=>{const n=e.includes(v)?"":e;I(e),C(a||""),s({offerId:n||"",serviceType:m,currentPrice:t||null,groupType:r})},selectedOption:w,pageName:c})}),(0,t.jsx)(l.i,{})]})};const I=e=>{const a=[];return e.forEach((e=>{var s;null==(s=e.groups)||s.forEach((s=>{var t;null==(t=s.services)||t.forEach((t=>{var r;a.push({sg:e.serviceType,sr:s.groupType,sp:`${(null==(r=t.currentPrice)?void 0:r.price)||0}`,ao:t.offerId,us:t.usItemId})}))}))})),a};var E=({servicesList:e,selectedServices:a,selectCallback:s,detailOverlay:i,pageName:l,autoExpanded:o,expandFirstService:c})=>{const d=(0,n.useMemo)((()=>(e=>null!=e&&e.length?e.reduce(((e,a)=>(e[a.groupType]=a.offerId,e)),{}):{})(a)),[a]),p=(0,r.wG)();return(0,n.useEffect)((()=>{p({context:l,action:"moduleView",name:"addOnServices",payload:{ta:{as:I(e),nm:"addOnServices",ty:"external"},pg:{nm:l}}})}),[]),(0,t.jsx)(n.Fragment,{children:e.map(((e,a)=>{const r=o||(0===a?c:o);return(0,t.jsx)(w,{serviceData:e,selectCallback:s,selectedServices:d,detailOverlay:i,pageName:l,autoExpanded:r},e.serviceType)}))})}},89003:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return b},getDefaultAOS:function(){return N}});var t=s(30567),r=s(76152),n=s(38253),i=s(72929),l=s(91402),o=s(19144),c=s(7741),d=s(58769),p=s(9848),u=s(52406),m=s(42457),f=s(5166),g=s(40909),h=s(71683),v=s(94358),y=s.n(v);var x=({content:e,logoImageUrl:a,title:s,groupType:r,serviceType:n})=>{const{0:i,1:l}=(0,u.useState)(!1),{isMobile:o}=(0,d.vP)(),c=(0,t.jsxs)("div",{className:y()("flex items-center ",{mt6:o}),style:{marginLeft:o?"-32px":"0"},children:[(0,t.jsx)(h.Z,{src:a,alt:"",width:50,height:50,preload:!0}),(0,t.jsx)("div",{className:"f3 dark-gray lh-copy ml3",children:s})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.Z,{onClick:()=>l(!0),variant:"tertiary",className:"pa0 h-auto lh-solid","aria-label":`Details of ${s}`,onLinkExtras:{ta:{sg:n,sr:r,mo:"addOnServices"},li:{nm:"details"},pg:{nm:"itemPage"},nm:{nm:"details"}},children:"Details"}),i&&(0,t.jsx)(g.Z,{isOpen:!0,onClose:()=>l(!1),className:"relative pa0 vh-100 w-40 pb3",title:c,size:"large",children:(0,t.jsx)(m.I,{className:"mid-gray f5",element:"span",htmlString:e})})]})};const N=e=>{const a={};for(const s of e)a[s.serviceType]={currentPrice:null,offerId:"",groupType:""};return a};var b=()=>{const{isMobile:e}=(0,d.vP)(),a=(0,n.mn)(),{selectedAddonServices:s,setSelectedAddonServices:m}=(0,i.N)(),f=(0,p.Zl)(),g=e?l.W:o.Z;return(0,u.useEffect)((()=>{m(N(a)),(0,c.cM)(["info","item","addOnServices"],{type:"log",message:"AddOnServices render",addonServices:a,isomorphicSessionId:f.isomorphicSessionId})}),[]),(0,t.jsx)(g,{"data-testid":"item-addon-services",className:"pa3 pv0 mv3",children:(0,t.jsx)(r.ZP,{servicesList:a,detailOverlay:x,selectCallback:({serviceType:e,currentPrice:a,offerId:t,groupType:r})=>{const n={...s,[e]:{currentPrice:a,offerId:t,groupType:r}};m(n)},pageName:"productPage",autoExpanded:!e})})}},69866:function(e,a,s){"use strict";var t=s(30567),r=(s(52406),s(71683)),n=s(91622),i=s(94358),l=s.n(i);a.Z=({showIcon:e=!0,extraIconMargin:a,iconType:s,children:i,className:o,customIcon:c})=>{const d=a?"mr2":"mr1";return(0,t.jsxs)("div",{className:l()("f6 mr3",o),children:[e&&(c?(0,t.jsx)(r.Z,{src:c,width:16,height:16,preload:!0,alt:"",className:d,"data-testid":"icontext-icon","aria-hidden":!0}):(0,t.jsx)(n.J,{"aria-hidden":!0,name:s,className:d,"data-testid":"icontext-icon"})),(0,t.jsx)("span",{className:"lh-title",children:i})]})}},40909:function(e,a,s){"use strict";var t=s(30567),r=s(74600),n=s(7551),i=s(58769),l=s(31985),o=s(73164),c=s(52406),d=s(97831);const p=(0,o.default)((()=>Promise.all([s.e(9902),s.e(1952),s.e(7410)]).then(s.bind(s,7410)).then((({BottomSheet:e})=>e))),{loadableGenerated:{webpack:()=>[7410],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/livingdesign-components/BottomSheet"]}}),u=(0,o.default)((()=>Promise.all([s.e(9902),s.e(1952),s.e(9943)]).then(s.bind(s,39943)).then((({DeprecatedModal:e})=>e))),{loadableGenerated:{webpack:()=>[39943],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-modal"]}}),m=(0,o.default)((()=>Promise.all([s.e(9902),s.e(1952),s.e(7566)]).then(s.bind(s,682)).then((({DeprecatedPanel:e})=>e))),{loadableGenerated:{webpack:()=>[682],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-panel"]}}),f=()=>{};let g=0;const h={bottomsheet:p,modal:u,panel:m};a.Z=e=>{const{desktopComponent:a="modal",isHighPriority:s,isOpen:o,onLinkExtras:p={},onLinkExtrasForClose:u,mobileComponent:m="bottomsheet",onClose:v,style:y,...x}=e,N=(0,c.useRef)(null),{setIsDialogOpen:b}=(0,c.useContext)(l.s),T=(0,c.useContext)(d.Z);if(!T)throw new Error("Dialog should only be used within a DialogProvider");const{isMobile:S}=(0,i.vP)(),{0:w,1:I}=(0,c.useState)(o),{setIsOverlay:E}=(0,c.useContext)(r.fC),C=(0,c.useRef)(-1);-1===C.current&&(C.current=g,g+=1);const j=(0,n.C)(N,{...e,onClick:v,onLinkName:"close",...u&&{onLinkExtras:u}});(0,c.useEffect)((()=>{E();const e=T.visibleStackIndexes[C.current];o?void 0===e?T.dispatch({type:"addDialog",payload:{id:C.current,isHighPriority:s}}):I(e===T.state.visibleStack.length-1):void 0!==e&&T.dispatch({type:"removeDialog",payload:C.current})}),[s,o,T,C]),(0,c.useEffect)((()=>()=>{T.dispatch({type:"removeDialog",payload:C.current})}),[]);const k={...y};w||(k.display="none"),(0,c.useEffect)((()=>{o&&b&&b(o)}),[o]);const P=S?h[m]:h[a];return(0,t.jsx)(P,{isOpen:o,closeButtonProps:{ref:N},onClose:w?e=>{j(e),"function"===typeof b&&b(!1)}:f,style:k,...x})}},22517:function(e,a,s){"use strict";s.d(a,{Z:function(){return m}});var t=s(30567),r=s(52406),n=s(94358),i=s.n(n),l=s(68794),o=s.n(l);const c={},d=(e,a)=>r.useMemo((()=>a||(e=>{const a=c[e];let s=0;return"undefined"!==typeof a&&(s=a+1),c[e]=s,`ld_${e}_${s}`})(e)),[e,a]),p=r.forwardRef(((e,a)=>{const{a11yLabelledBy:s,checked:r=!1,className:n,disabled:l=!1,id:c,label:p,name:u,onChange:m,radioProps:f={},value:g,...h}=((e,a,s=!1)=>{const t={};for(const r in e)if(e.hasOwnProperty(r)){const a=e[r];"UNSAFE_className"===r||"className"===r?t.className=i()(t.className,a):"UNSAFE_style"===r||"style"===r?t.style=t.style?{...t.style,...a}:a:t[r]=a}return t})(e,0,!0);(p?1:0)+(s?1:0)===1||console.error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");const{className:v,...y}=f,x=d("radio",c);return(0,t.jsxs)("label",{className:i()(o().label,r&&o().checked,l&&o().disabled,n),htmlFor:x,...h,children:[(0,t.jsx)("input",{checked:r,className:i()(o().input,v),disabled:l,id:x,name:u,onChange:m,ref:a,type:"radio",...s&&{"aria-labelledby":s},...g&&{value:g},...y}),(0,t.jsxs)("svg",{"aria-hidden":!0,className:i()(o().radio,!!p&&o().hasLabel),viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{className:o().radioRing,cx:"10",cy:"10",r:"9"}),(0,t.jsx)("circle",{className:o().radioDot,cx:"10",cy:"10",r:"6"})]}),p]})}));p.displayName="DeprecatedRadio";var u=s(7551);var m=(0,r.forwardRef)(((e,a)=>{const s=(0,r.useRef)(null),{onLinkName:n,onLinkExtras:i,...l}=e,o=(0,u.C)(s,{onLinkName:n,onLinkExtras:i,onClick:e.onChange});return(0,t.jsx)(p,{...l,ref:e=>{"function"===typeof a?a(e):a&&(a.current=e),s.current=e},onChange:o})}))},85158:function(e){e.exports={container:"w_0"}},16153:function(e){e.exports={subheading:"w_CO",subheading1:"w_CP",subheading2:"w_CQ"}},68794:function(e){e.exports={label:"w_D6",checked:"w_D7",disabled:"w_D8",input:"w_D9",radio:"w_EA",hasLabel:"w_EB",radioRing:"w_EC",radioDot:"w_ED"}}}]);