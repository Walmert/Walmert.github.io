(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1903],{45895:function(e){function t(e,t,s){var n,r,l,i,a;function o(){var c=Date.now()-i;c<t&&c>=0?n=setTimeout(o,t-c):(n=null,s||(a=e.apply(l,r),l=r=null))}null==t&&(t=100);var c=function(){l=this,r=arguments,i=Date.now();var c=s&&!n;return n||(n=setTimeout(o,t)),c&&(a=e.apply(l,r),l=r=null),a};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(a=e.apply(l,r),l=r=null,clearTimeout(n),n=null)},c}t.debounce=t,e.exports=t},31903:function(e,t,s){"use strict";s.d(t,{Z:function(){return S}});var n=s(30567),r=s(18513),l=s(52406),i=s(74600),a=s(30919),o=s(52453);const c=({children:e,containerRef:t,currentSlide:s,moduleContext:r="",moduleLinkExtras:c={},moduleName:d="",moduleViewExtras:u={},pageTitle:h,slideMap:p,style:b,...v})=>{const{moduleProps:m,zone:f}=(0,l.useContext)(o.p),x=(0,l.useRef)({}),S=(0,l.useRef)({}),g=(0,l.useRef)({}),C=(0,l.useRef)(!1),y=(0,l.useRef)({}),w=(0,l.useRef)(),{0:E,1:P}=(0,l.useState)(!1),A=(0,a.wG)();return[u,c]=(0,i.U0)({pageTitle:h,moduleLinkExtras:c,moduleViewExtras:u}),(0,l.useEffect)((()=>{if(t.current&&"IntersectionObserver"in window){const e=new IntersectionObserver((e=>{e.forEach((e=>{P(e.isIntersecting)}))}),{threshold:.05});return e.observe(t.current),()=>e.disconnect()}}),[]),(0,l.useEffect)((()=>{t.current&&void 0!==w.current&&(t.current.scrollLeft=w.current,w.current=void 0),y.current=b}),[t,b]),(0,l.useEffect)((()=>{let e=0;x.current.length||p.forEach(((t,s)=>{x.current[`slide-${s}`]={firstIndex:String(e),hasFired:!1},e+=t.length})),x.current.totalSlides=e}),[p]),(0,l.useEffect)((()=>{const e=x.current[`slide-${s}`],t=Object.keys(S.current).length&&{co:{...S.current[0].co}},n={pl:{tn:x.current.totalSlides,sn:s+1},...t};if(E&&!e.hasFired){const e=Object.values(S.current).slice(parseInt(x.current[`slide-${s}`].firstIndex,10),parseInt(x.current.hasOwnProperty(`slide-${s+1}`)?x.current[`slide-${s+1}`].firstIndex:"",10)||void 0),t={},l=(0,i.TF)(d);e.forEach((e=>{Object.keys(e).forEach((s=>{if(Array.isArray(e[s])){const n=t.hasOwnProperty(s)?t[s]:[];t[s]=[...n,...e[s]]}}))})),A({context:r,name:l,action:C.current?"overlayView":"moduleView",payload:{...t,...n,...u}}),x.current[`slide-${s}`].hasFired=!0}}),[s,x,E]),t.current&&y.current&&b&&"x mandatory"===b.scrollSnapType&&y.current.scrollSnapType!==b.scrollSnapType&&(w.current=t.current.scrollLeft),(0,n.jsx)(i.fC.Provider,{value:{doAddToPayload:e=>{var t;const s=(null==(t=e.moduleElement.closest("[data-slide]"))?void 0:t.getAttribute("data-slide"))||"0";S.current[s]=S.current[s]||{};const{type:n,name:l,moduleId:a}=m||{};return f&&(S.current[s].co={zn:f,...m&&{ty:n,id:a,nm:l}}),(0,i.nt)({...e,moduleContext:r,moduleLinkExtras:c,moduleViewStore:S.current[s],onLinkStore:g.current,sendBeacon:A})},setIsOverlay:()=>C.current=!0},children:(0,n.jsx)("ul",{ref:t,style:b,...v,children:e})})};var d=s(91622),u=s(94358),h=s.n(u),p=s(45895),b=s(58769);const v=e=>e?{borderColor:"transparent transparent transparent black",borderWidth:"5px 0px 5px 8px",padding:"0",borderStyle:"solid"}:{height:"9px",borderStyle:"double",borderColor:"transparent transparent transparent black",borderWidth:"0 0 0 7px"},m=({carouselRef:e,count:t,activeIndex:s,handleSlideClick:r,isPaused:i,shouldAutoRotate:a,handleRotationClick:o,onScrollEnd:c,onScrollStart:d,povScrollbar:u,scrollbarContainerClassName:p,carouselControllerAriaHidden:m})=>{const{0:f,1:x}=(0,l.useState)(0),{0:S,1:g}=(0,l.useState)(0),{0:C,1:y}=(0,l.useState)(0),{0:w,1:E}=(0,l.useState)(void 0),P=(0,l.useRef)(null);(0,l.useEffect)((()=>{const t=()=>{P.current&&y(P.current.clientWidth),e.current&&g(e.current.clientWidth/e.current.scrollWidth)};return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)}),[]),(0,l.useEffect)((()=>{const t=()=>{e.current&&x(e.current.scrollLeft/e.current.scrollWidth)};return e.current&&(e.current.removeEventListener("scroll",t),e.current.addEventListener("scroll",t,{passive:!0})),()=>{e.current&&e.current.removeEventListener("scroll",t)}}),[e.current,P.current]),(0,l.useEffect)((()=>{const t=t=>{if(e.current&&void 0!==w){const s=e.current.scrollWidth*w.scrubberLeftPercent;e.current.scrollLeft=s-(w.clientX-t.clientX)*(e.current.scrollWidth/C)}},s=()=>{E(void 0),c()};return window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",s),void 0!==w&&(window.addEventListener("pointermove",t),window.addEventListener("pointerup",s)),()=>{window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",s)}}),[e.current,w]);const{isMobile:A}=(0,b.vP)(),k=S*C;let L=f*C;if(k<40){L-=(40-k)*(L/(C-k)||0)}L-=2;const N=Math.max(k,40)+4,I={className:"absolute b--none bg-transparent h-100 outline-0 top-0"};return(0,n.jsxs)("div",{"aria-hidden":m,"aria-label":""+(i?"play":"pause"),"data-testid":"carousel-controller",className:h()("flex items-center",u?"absolute bg-white-80 bottom-1 br-pill":"dn-l"),style:u?{marginLeft:"50%",transform:"translateX(-50%)",width:A?184:343}:void 0,children:[u&&a&&(0,n.jsx)("button",{className:"bg-transparent flex bn items-center mh2 pa0",onClick:o,style:{height:24,width:24},"aria-label":""+(i?"play":"pause"),children:(0,n.jsx)("span",{className:"center",style:v(i)})}),(0,n.jsxs)("div",{className:h()("flex-auto flex flex-column justify-center pr3 relative",u&&!a&&"pl3",p),"data-testid":"scrollbar-container",style:{height:u?24:44},children:[(0,n.jsxs)("div",{className:"flex flex-column justify-center h-100 relative",ref:P,children:[(0,n.jsx)("div",{className:"bg-near-white br-pill w-100",style:{height:2}}),(0,n.jsx)("button",{className:"absolute b--none bg-transparent h-100 outline-0 pa0 top-0 z-1",onPointerDown:e=>{d(),E({clientX:e.clientX,scrubberLeftPercent:f})},style:{left:L,touchAction:"none",width:N},children:(0,n.jsx)("span",{className:h()("db b--solid bg-gray br-pill bw1",w?"b--gray":"b--transparent"),style:{backgroundClip:"padding-box",height:4}})})]}),(0,n.jsx)("button",{...I,className:h()(I.className,"left-0"),"data-testid":"carousel-controller-next",onClick:()=>r(Math.max(s-1,0)),style:{width:Math.max(40,L+16)}}),(0,n.jsx)("button",{...I,className:h()(I.className,"right-0"),"data-testid":"carousel-controller-prev",onClick:()=>r(Math.min(s+1,t-1)),style:{width:Math.max(40,C-L-N+16)}})]})]})},f=(0,l.memo)((({children:e,classNameTile:t,inputRefs:s,isAccessibleMode:r,shouldAutoRotate:i})=>(0,n.jsx)(n.Fragment,{children:l.Children.map(e,((e,l)=>(0,n.jsx)("li",{className:`flex flex-column items-center ${t}`,"aria-hidden":!r&&i?"true":void 0,"data-slide":l,tabIndex:!r&&i?-1:void 0,ref:e=>{s[l]=e},children:e},`carousel-tile-${l}-${r?"aria":""}`)))})));class x extends l.Component{constructor(e){if(super(e),(0,r.Z)(this,"hasAutoAdvanced",void 0),(0,r.Z)(this,"rotationInterval",void 0),(0,r.Z)(this,"inputRefs",void 0),(0,r.Z)(this,"carouselContainer",void 0),(0,r.Z)(this,"scrollCallback",void 0),!1===e.povScrollbar&&e.shouldAutoRotate)throw new Error("Error: `HorizontalScrollbar` can only have `shouldAutoRotate=true` when `povScrollbar` is not false.");this.state={currentSlide:0,isFocusPaused:!1,isPaused:!1,scrolling:!1,slideCount:0,isAccessibleMode:!1,slideMap:[],maxHeight:"fix-content"},this.carouselContainer=l.createRef(),this.inputRefs=[],this.hasAutoAdvanced=!1,this.rotationInterval=null,this.scrollCallback=(0,p.debounce)((()=>{this.calculateIndex()}),100),this.calculatePageCount=this.calculatePageCount.bind(this),this.handlePause=this.handlePause.bind(this),this.handlePlay=this.handlePlay.bind(this),this.handleFocusIn=this.handleFocusIn.bind(this),this.handleFocusOut=this.handleFocusOut.bind(this),this.handleScrollEnd=this.handleScrollEnd.bind(this),this.handleScrollStart=this.handleScrollStart.bind(this),this.handleAccessibility=this.handleAccessibility.bind(this),this.setTargetSlide=this.setTargetSlide.bind(this),this.nextSlide=this.nextSlide.bind(this),this.getSlideHeight=this.getSlideHeight.bind(this)}componentDidMount(){var e;null==(e=this.carouselContainer.current)||e.addEventListener("scroll",this.scrollCallback,{passive:!0}),this.props.shouldAutoRotate&&this.handlePlay(),this.calculatePageCount(),window.addEventListener("resize",this.calculatePageCount)}componentDidUpdate(e,t){const{currentSlide:s,maxHeight:n}=this.state,{children:r,shouldEnableDynamicHeight:l}=this.props;if(s!==t.currentSlide){const{onSlideChange:e}=this.props;e&&e(s)}if(this.shouldRecalculatePageCount(r,e.children)&&this.calculatePageCount(),l){const e=this.getSlideHeight(s);e!==n&&this.updateHeight(e)}}componentWillUnmount(){var e;window.removeEventListener("resize",this.calculatePageCount),null==(e=this.carouselContainer.current)||e.removeEventListener("scroll",this.scrollCallback),this.scrollCallback.clear(),this.rotationInterval&&clearInterval(this.rotationInterval)}updateHeight(e){this.setState({maxHeight:e})}calculatePageCount(){const{clientWidth:e=0}=this.carouselContainer.current||{},t=[[]];let s=0,n=e+1,r=0;this.inputRefs.forEach(((l,i)=>{if(l){const{width:a,x:o}=l.getBoundingClientRect();0===i&&(r=o);const c=o-r;let d="";0===i&&(d="start"),c+a>n?(t.push([l]),s++,n=c+e,d="start"):t[s].push(l),l.style.setProperty("scroll-snap-align",d)}})),this.setState({slideCount:t.length,slideMap:t})}getSlideHeight(e){let t=this.inputRefs[e],s=-1;for(;1===(null==(n=t)||null==(r=n.children)?void 0:r.length);){var n,r;t=t.children[0];const e=t.getBoundingClientRect().height||-1;e>s&&(s=e)}return s?s+20:-1}shouldRecalculatePageCount(e,t){var s,n;return l.Children.count(e)!==l.Children.count(t)||(null==(s=l.Children.map(t,(e=>null==e?void 0:e.key)))?void 0:s.join())!==(null==(n=l.Children.map(e,(e=>null==e?void 0:e.key)))?void 0:n.join())}getIndex(e,t){if(this.carouselContainer.current){const{scrollLeft:n,scrollWidth:r}=this.carouselContainer.current;let l=e-1,i=0;for(let a=0;a<e;a++){var s;const e=null==(s=t[a][0])?void 0:s.offsetLeft;if(n<=e){const{shouldEnablePartialScrollSnap:t=!0}=this.props,s=e-i;l=t&&a>0&&s>0&&n-s/2<=i&&n+s<r?a-1:a;break}i=e}return l}return 0}calculateIndex(){this.hasAutoAdvanced?this.hasAutoAdvanced=!1:this.handlePause(),this.setState((({slideCount:e,slideMap:t})=>({currentSlide:this.getIndex(e,t)})))}handlePause(){this.rotationInterval&&clearInterval(this.rotationInterval),this.setState({isPaused:!0})}handlePlay(){this.rotationInterval=setInterval((()=>{this.state.isPaused||this.state.isFocusPaused||this.nextSlide(!0)}),5e3),this.setState({isPaused:!1})}handleFocusIn(){this.setState({isFocusPaused:!0})}handleFocusOut(){this.setState({isFocusPaused:!1})}handleScrollEnd(){const e=this.getIndex(this.state.slideCount,this.state.slideMap);this.setTargetSlide(e,(()=>this.setState({scrolling:!1})))}handleScrollStart(){this.setState({scrolling:!0})}setTargetSlide(e,t){if(this.carouselContainer.current){var s;const n=null==(s=this.state.slideMap[e][0])?void 0:s.offsetLeft;if(t){const e=n.toFixed(),s=()=>{this.carouselContainer.current&&this.carouselContainer.current.scrollLeft.toFixed()===e&&(this.carouselContainer.current.removeEventListener("scroll",s),t())};this.carouselContainer.current.addEventListener("scroll",s),s()}this.carouselContainer.current.scrollTo&&this.carouselContainer.current.scrollTo({left:n,behavior:"smooth"})}}nextSlide(e){if(this.carouselContainer.current){let t=this.state.currentSlide+1;this.state.slideMap[t]||(t=0),this.hasAutoAdvanced=e,this.setTargetSlide(t)}}handleAccessibility(){this.setState((e=>({isAccessibleMode:!e.isAccessibleMode,isPaused:!0}))),this.carouselContainer.current&&(this.carouselContainer.current.scrollLeft=0)}render(){const{children:e,className:t,classNameTile:s="",shouldSnap:r=!0,shouldAutoRotate:l=!1,shouldSuppressPagination:i,shouldEnableDynamicWidth:a,moduleContext:o,moduleName:u,moduleViewExtras:p,moduleLinkExtras:b,isScrollArrowHidden:v=!1,onSlideChange:x,povScrollbar:S=!1,scrollbarContainerClassName:g,showSmallNavButtons:C=!1,shouldEnableDynamicHeight:y=!1,shouldEnablePartialScrollSnap:w=!0,carouselControllerAriaHidden:E=!1,anchorNavButtonTopOffset:P,...A}=this.props,k=!!l||S,{isAccessibleMode:L}=this.state,{inputRefs:N}=this;return(0,n.jsxs)("div",{className:"flex flex-column justify-center relative",children:[this.props.shouldAutoRotate&&(0,n.jsx)("button",{"aria-expanded":this.state.isAccessibleMode,className:"absolute right-0 top-0 h-100 w-100",style:{clip:"rect(1px, 1px, 1px, 1px)"},onClick:this.handleAccessibility,children:"Carousel"}),(0,n.jsx)(c,{moduleViewExtras:p,moduleLinkExtras:b,moduleContext:o,moduleName:u,currentSlide:this.state.currentSlide,slideMap:this.state.slideMap,className:h()(`list ma0 pl0 overflow-x-scroll hidesb hidesb-wk relative overflow-y-hidden ${t}`,{"carousel-height-transition":y}),"data-testid":"carousel-container",containerRef:this.carouselContainer,style:{display:a?"flex":"grid",gridAutoFlow:"column",scrollSnapType:r&&!this.state.scrolling?"x mandatory":"",maxHeight:y?this.state.maxHeight:"fit-content"},onFocus:this.handleFocusIn,onBlur:this.handleFocusOut,onMouseOver:this.handleFocusIn,onMouseOut:this.handleFocusOut,...A,children:(0,n.jsx)(f,{classNameTile:s,inputRefs:N,isAccessibleMode:L,shouldAutoRotate:l,children:e})}),!v&&!k&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{"aria-hidden":"true",tabIndex:-1,className:h()("absolute dn z-999 bg-white br-100 pa0 pointer ba",{"db-l":this.state.currentSlide+1!==this.state.slideCount,"br-100 ba b--black nav-control right-1":!C,"b--black right-0":C,db:this.state.currentSlide+1!==this.state.slideCount&&i}),style:P?{top:P}:void 0,onClick:()=>this.setTargetSlide(this.state.currentSlide+1),children:(0,n.jsx)(d.J,{name:"ChevronRight",className:h()({pa2:C}),style:C?void 0:{padding:12},size:"medium"})}),(0,n.jsx)("button",{"aria-hidden":"true",tabIndex:-1,className:h()("absolute dn z-999 bg-white br-100 pa0 pointer ba",{"db-l":0!==this.state.currentSlide,"hidden-child":!i,"br-100 ba b--black nav-control left-1":!C,"b--black left-0":C,db:0!==this.state.currentSlide&&i}),style:P?{top:P}:void 0,onClick:()=>this.setTargetSlide(this.state.currentSlide-1),children:(0,n.jsx)(d.J,{name:"ChevronLeft",className:h()({pa2:C}),style:C?void 0:{padding:12},size:"medium"})})]}),(0,n.jsx)("div",{className:h()({dn:i}),children:this.state.slideCount>1&&(0,n.jsx)(m,{carouselRef:this.carouselContainer,count:this.state.slideCount,activeIndex:this.state.currentSlide,handleSlideClick:e=>{this.setTargetSlide(e)},handleRotationClick:this.state.isPaused?this.handlePlay:this.handlePause,isPaused:this.state.isPaused,onScrollEnd:this.handleScrollEnd,onScrollStart:this.handleScrollStart,povScrollbar:k,scrollbarContainerClassName:g,shouldAutoRotate:l,carouselControllerAriaHidden:E})})]})}}var S=x}}]);