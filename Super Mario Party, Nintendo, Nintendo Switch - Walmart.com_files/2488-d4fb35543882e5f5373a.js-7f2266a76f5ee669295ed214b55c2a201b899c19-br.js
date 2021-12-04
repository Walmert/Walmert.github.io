"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2488,6533],{40909:function(e,t,i){var s=i(30567),a=i(74600),n=i(7551),l=i(58769),o=i(31985),r=i(73164),c=i(52406),m=i(97831);const d=(0,r.default)((()=>Promise.all([i.e(9902),i.e(1952),i.e(7410)]).then(i.bind(i,7410)).then((({BottomSheet:e})=>e))),{loadableGenerated:{webpack:()=>[7410],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/livingdesign-components/BottomSheet"]}}),u=(0,r.default)((()=>Promise.all([i.e(9902),i.e(1952),i.e(9943)]).then(i.bind(i,39943)).then((({DeprecatedModal:e})=>e))),{loadableGenerated:{webpack:()=>[39943],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-modal"]}}),h=(0,r.default)((()=>Promise.all([i.e(9902),i.e(1952),i.e(7566)]).then(i.bind(i,682)).then((({DeprecatedPanel:e})=>e))),{loadableGenerated:{webpack:()=>[682],modules:["../../../../libs/ui/dialog/src/lib/dialog.tsx -> @walmart-web/ui-panel"]}}),p=()=>{};let x=0;const v={bottomsheet:d,modal:u,panel:h};t.Z=e=>{const{desktopComponent:t="modal",isHighPriority:i,isOpen:r,onLinkExtras:d={},onLinkExtrasForClose:u,mobileComponent:h="bottomsheet",onClose:g,style:f,...b}=e,w=(0,c.useRef)(null),{setIsDialogOpen:C}=(0,c.useContext)(o.s),y=(0,c.useContext)(m.Z);if(!y)throw new Error("Dialog should only be used within a DialogProvider");const{isMobile:j}=(0,l.vP)(),{0:k,1:N}=(0,c.useState)(r),{setIsOverlay:E}=(0,c.useContext)(a.fC),D=(0,c.useRef)(-1);-1===D.current&&(D.current=x,x+=1);const S=(0,n.C)(w,{...e,onClick:g,onLinkName:"close",...u&&{onLinkExtras:u}});(0,c.useEffect)((()=>{E();const e=y.visibleStackIndexes[D.current];r?void 0===e?y.dispatch({type:"addDialog",payload:{id:D.current,isHighPriority:i}}):N(e===y.state.visibleStack.length-1):void 0!==e&&y.dispatch({type:"removeDialog",payload:D.current})}),[i,r,y,D]),(0,c.useEffect)((()=>()=>{y.dispatch({type:"removeDialog",payload:D.current})}),[]);const L={...f};k||(L.display="none"),(0,c.useEffect)((()=>{r&&C&&C(r)}),[r]);const I=j?v[h]:v[t];return(0,s.jsx)(I,{isOpen:r,closeButtonProps:{ref:w},onClose:k?e=>{S(e),"function"===typeof C&&C(!1)}:p,style:L,...b})}},34632:function(e,t,i){i.d(t,{w:function(){return x}});var s=i(30567),a=i(50461),n=i(91622),l=i(94358),o=i.n(l),r=i(52406),c=i(2757),m=i(89331);const d={DEFAULT:{backgroundColor:"bg-gold",fontColor:"black"},WARNING:{backgroundColor:"bg-red",fontColor:"white"},EXPIRED:{backgroundColor:"bg-near-white",fontColor:"black"}},u={fontSize:".625rem",verticalAlign:"-.01875em",marginTop:"2px",marginRight:"2px"},h=e=>{const{timeUnits:t,showClockIcon:i=!0}=e;return(0,s.jsxs)("div",{className:o()("flex lh-copy f5 br1 justify-center","bg-washed-blue","black"),style:{width:"61px"},"data-testid":"unit-timer",children:[i&&(0,s.jsx)(n.J,{name:"Clock",title:"timer",className:"mr1 mt1"}),(0,s.jsx)("span",{"aria-hidden":!0,className:o()("b"),children:0===t.minutes?`${t.minutes+1}min`:`${t.minutes+1}mins`}),(0,s.jsx)(a.T,{role:"timer","aria-live":"assertive","aria-atomic":"true","aria-relevant":"all",children:0===t.minutes?`Estimated wait time ${t.minutes+1}min`:`Estimated wait time ${t.minutes+1}mins`})]})},p=e=>{const{timeUnits:t,timerState:i,showClockIcon:l=!0,size:r,ariaLabelAddOnMessage:c}=e,{backgroundColor:m,fontColor:h}=d[i];let p=l?"75px":"52px";"small"===r&&(p=l?"45px":"35px");const x="small"===r;return(0,s.jsxs)("div",{className:o()("flex lh-copy br1 justify-center",m,h,{f5:!x},{f8:x}),style:{width:p},"data-testid":"queue-timer",children:[l&&(0,s.jsx)(n.J,{name:"Clock",title:"timer",className:o()({"mr1 mt1":!x}),style:x?u:{}}),(0,s.jsxs)("span",{"aria-hidden":!0,className:"b",children:[String(t.minutes).padStart(2,"0"),":",String(t.seconds).padStart(2,"0")]}),(0,s.jsx)(a.T,{role:"timer","aria-live":"off","aria-atomic":"true","aria-relevant":"all",children:c?`${t.minutes} minutes ${c}`:`${t.minutes} minutes left to buy your item`})]})},x=e=>{const{endTime:t,onTimeChange:i,ticketState:a="valid",showClockIcon:n,className:l,size:o="default",ariaLabelAddOnMessage:d}=e,{timeRemainingInSec:u}=(0,c.A)(t.getTime()),x=(0,m.E3)(u),v=0===x.minutes&&0===x.seconds?"EXPIRED":x.minutes<2?"WARNING":"DEFAULT",{0:g,1:f}=(0,r.useState)(v);return(0,r.useEffect)((()=>{i&&i(u),0===x.minutes&&0===x.seconds?f("EXPIRED"):x.minutes>=2?f("DEFAULT"):f("WARNING")}),[x,u,i]),(0,s.jsxs)("div",{className:l,children:[("pending"===a||"paused"===a)&&(0,s.jsx)(h,{timeUnits:x,showClockIcon:n}),"valid"===a&&(0,s.jsx)(p,{timeUnits:x,timerState:g,showClockIcon:n,size:o,ariaLabelAddOnMessage:d})]})}},32488:function(e,t,i){i.d(t,{Z:function(){return I}});var s=i(30567),a=i(58769),n=i(94358),l=i.n(n),o=i(31842),r=i(48083),c=i(71687),m=i(30919),d=i(11907),u=i(96284),h=i(40909),p=i(4368),x=i(52406),v=i(91622);const g=({onClose:e,titleId:t,title:i})=>(0,s.jsxs)("div",{className:"bg-blue white items-center flex flex-row-reverse justify-between ph4 pv3",children:[(0,s.jsx)("button",{"aria-label":"Close dialog",className:"bg-blue pa0 white bn pointer h1",onClick:e,children:(0,s.jsx)(v.J,{name:"Close",size:"medium"})}),(0,s.jsx)("h3",{id:t,className:"f4 mv0",children:i})]});var f=i(9979),b=i(5166);const w="Something went wrong. Please try again.",C="If you leave now, you'll lose your chance to purchase this item.",y=({isError:e,isLeaveDialogueLoading:t,isOpen:i,onClose:a,onStayInLine:n,onDismissError:l,onLeaveQueue:o})=>{const{pageTitle:r}=(0,x.useContext)(d.z1),c=(0,m.wG)();return(0,x.useEffect)((()=>{i&&c({context:r||"queueing",action:"overlayView",name:"leaveLineConfirm",payload:{nm:{nm:"leaveLineConfirm"},ta:{ov:"leaveLineConfirm",pt:r||"waitingRoom"}}})}),[i,c,r]),(0,s.jsx)(u.Z,{children:(0,s.jsx)(h.Z,{title:"Leave the line?",isOpen:i,onClose:a,size:"small",actions:e?(0,s.jsx)("div",{className:"flex flex-column flex-row-reverse-m w-100 w-auto-m",children:(0,s.jsx)(b.Z,{className:"mt4 pv0 f6-m pv2-m mt0-m",onClick:l,variant:"primary",children:"Ok"})}):(0,s.jsx)("div",{className:"flex flex-column flex-row-reverse-m w-100 w-auto-m",children:t?(0,s.jsx)(f.$,{color:"gray",size:"small",className:"tc"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{variant:"primary",isFullWidth:!0,onClick:n,className:"f6-m",children:"Stay in line"}),(0,s.jsx)(b.Z,{className:"mt4 pv0 f6-m pv2-m mt0-m",isFullWidth:!0,onClick:o,variant:"tertiary",children:"Leave"})]})}),children:(0,s.jsx)("p",{className:"mv0 dark-gray tc f6 f5-m tl-m lh-copy",children:e?w:C})})})};y.DEFAULT_MESSAGE=C,y.ERROR_MESSAGE=w;const j=({children:e,className:t,isQueueDialog:i,onClick:a,text:n})=>(0,s.jsxs)("div",{className:l()("flex w-100 pv2",{"bg-navy white":!i,"bb b--near-white":i},t),children:[(0,s.jsx)("div",{className:"flex items-center justify-start flex-auto pv0",children:e}),a&&(n?(0,s.jsx)(b.Z,{className:l()("self-center h2",{white:!i,pr0:i}),onClick:a,variant:"tertiary",children:(0,s.jsx)("span",{className:i?"":"white",children:n})}):(0,s.jsx)(b.Z,{"aria-label":"Close banner",className:l()("bg-transparent bn h2 pb0 pointer pt0 self-center w3",i?"color-inherit pr0":"white"),onClick:a,type:"button",useLDButton:!1,children:(0,s.jsx)(v.J,{className:"v-btm",name:"Close"})}))]});var k=i(76139);var N=i(71683);var E=i(33890);var D=i(34632);const S=({children:e,float:t,...i})=>{var n;const{isMobile:l}=(0,a.vP)(),r=null==(n=(0,o.useRouter)())?void 0:n.asPath,c=t?L(l,r):{};return(0,s.jsx)("div",{...i,...c,"data-testid":"queue-banner",children:e})},L=(e,t)=>{const i="fixed z-1",s=null==t?void 0:t.includes("/ip");return e?{className:l()(i,"w-100 left-0 right-0",{"bottom-0":!s}),style:s?{bottom:"72px"}:{}}:{className:l()(i,"br2 overflow-hidden shadow-3"),style:{bottom:"24px",left:"24px",width:"400px"}}};S.Body=j,S.Cta=({onClick:e})=>(0,s.jsx)(k.Z,{className:"ml2",onClick:e,size:"small",variant:"secondary",children:"View"}),S.Image=({className:e,isQueueDialog:t,isQueueFooterOpen:i,src:n,height:o,width:r,name:c})=>{const{isMobile:m}=(0,a.vP)(),{imageHeight:d,imageWidth:u}=(p=!m&&!i,{imageHeight:(h={src:n,height:o,width:r}).height||(p?85:40),imageWidth:h.width||(p?85:40)});var h,p;const x=(0,E.P)({src:n,height:d.toString(),width:u.toString()});return(0,s.jsx)("div",{className:l()("br2 overflow-hidden",{"ml2 ml3-m":!t},e),style:{maxWidth:u,maxHeight:d},children:(0,s.jsx)(N.Z,{alt:c,"data-testid":"queue-product-image",preload:!0,loading:"eager",src:x,srcSet:`${x} 1x, ${x} 2x`,height:"auto",width:"auto"})})},S.Dialog=({children:e,isOpen:t,onClose:i,title:n,queueTickets:l})=>{var o;const{pageTitle:v}=(0,x.useContext)(d.z1),{isMobile:f}=(0,a.vP)(),b=(0,m.wG)(),w=null==(o=(0,c.i)(r.Y).shared.values)?void 0:o.queueTimeToCompletePurchase;return(0,x.useEffect)((()=>{if(t){const e=null==l?void 0:l.map((e=>{var t,i,s;return{us:null==e||null==(t=e.customMetadata)||null==(i=t.item)?void 0:i.itemID,qp:(0,p.H)(null==e||null==(s=e.customMetadata)?void 0:s.admissionLikelihood),wt:"pending"===e.state||"paused"===e.state?6e4*new Date(null==e?void 0:e.expectedTurnTimeUnixTimestamp).getMinutes():6e4*new Date(null==e?void 0:e.expires).getMinutes()}}));b({context:v,action:"overlayView",name:"lineDetails",payload:{nm:{nm:"lineDetails"},pr:e}})}}),[t,l,v,b]),(0,s.jsx)(u.Z,{children:(0,s.jsxs)(h.Z,{title:f?n:({titleId:e})=>(0,s.jsx)(g,{title:n,onClose:i,titleId:e}),isOpen:t,onClose:i,position:"right",desktopComponent:"panel",size:"medium",children:[(0,s.jsx)("p",{className:"f7 bb pb3 b--near-white mv0 pl2-m",children:`Once it's your turn, you'll have ${w} minutes to complete your\n            purchase.`}),e]})})},S.Error=()=>{const{isMobile:e}=(0,a.vP)();return(0,s.jsxs)(j,{children:[(0,s.jsx)("div",{className:"mr3 ml2 ml3-m","data-testid":"queue-error-banner",children:(0,s.jsx)(N.Z,{src:"//i5.walmartimages.com/dfw/63fd9f59-c8e4/ed49269a-8c86-40fb-b2ee-ce85f558b14e/v1/warning-yellow.svg",alt:"Warning",preload:!1,height:24,width:24,"aria-hidden":"true"})}),(0,s.jsxs)("p",{className:"f6 mv2 mv6-m lh-title",style:{...!e&&{marginTop:"39px",marginBottom:"39px"}||{}},children:["Hang on, we're getting you in line.",(0,s.jsx)("br",{}),"Please don't refresh or leave the line."]})]})},S.LeaveQueueDialog=y,S.Footer=({message:e,onClick:t})=>(0,s.jsxs)("div",{className:"flex w-100 bg-navy white items-start f6 justify-between items-center b--white bt pa2 pa3-m","data-testid":"queue-banner-footer",children:[(0,s.jsx)("span",{children:e}),t&&(0,s.jsx)(k.Z,{"aria-label":e,className:"white no-underline pa0 h1",onClick:t,variant:"tertiary",children:(0,s.jsx)(v.J,{name:"ChevronRight",size:"small"})})]}),S.Timer=e=>(0,s.jsx)("div",{className:"ml2",children:(0,s.jsx)(D.w,{...e})}),S.TimerMessage=({className:e,isQueueDialog:t,message:i,onClick:a})=>a?(0,s.jsx)(k.Z,{className:l()("pa0 ml1 f6 h2",{white:!t,ml2:t},e),onClick:a,variant:"tertiary",children:i}):(0,s.jsx)("p",{className:l()("ml1 mv0 f6 h2 flex items-center",{white:!t,ml2:t},e),children:i});var I=S},4368:function(e,t,i){i.d(t,{H:function(){return s}});const s=e=>"guaranteed"===e?"1":"likely"===e?"2":"3"}}]);