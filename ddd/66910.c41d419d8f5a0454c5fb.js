"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66910],{66910:function(e,n,t){t.r(n),t.d(n,{ACTIVE_ACTION_TEXT:function(){return c},ACTIVE_MESSAGE:function(){return s},EXPIRED_ACTION_TEXT:function(){return m},EXPIRED_MESSAGE:function(){return v},default:function(){return C}});var u=t(30567),r=t(38253),a=t(32488),o=t(3705),i=t(30301),l=t(52406);const s="left to buy",c="Leave",m="Remove",v="Time expired",d=e=>"valid"===e.state;var C=e=>{const{children:n,className:t}=e,{queueData:C,removeTicketByQueueValue:f}=(0,o.B)(),E=(0,r.e0)(),{0:T,1:k}=(0,l.useState)(!1),{0:p,1:x}=(0,l.useState)(!1),{0:D,1:h}=(0,l.useState)(!1),[b]=(0,i.p)({onSuccess:(e,n)=>{f(n)},onError:()=>{h(!0)}}),y=(0,l.useMemo)((()=>C.filter(d).find((e=>e.customMetadata.item.itemID===E))),[C,E]),L=null==y?void 0:y.expires,S=null==y?void 0:y.queue,I=(0,l.useCallback)((e=>{e<=0&&k(!0)}),[]),Q=(0,l.useCallback)((e=>()=>{T?b(e):x(!0)}),[T,b]),_=(0,l.useCallback)((()=>{x(!1)}),[]),g=(0,l.useCallback)((e=>()=>{b(e),_()}),[_,b]);if(!y||!L)return(e=>{try{return l.Children.only(e),!0}catch(n){return!1}})(n)?n:null;const w=T?v:s,A=T?m:c;return(0,u.jsxs)(a.Z,{className:t,children:[(0,u.jsxs)(a.Z.Body,{text:A,onClick:Q(S),children:[(0,u.jsx)(a.Z.Timer,{endTime:(q=L,new Date(q)),onTimeChange:I}),(0,u.jsx)(a.Z.TimerMessage,{message:w,className:"ml2"})]}),(0,u.jsx)(a.Z.LeaveQueueDialog,{isError:D,onLeaveQueue:g(S),onClose:_,onStayInLine:_,isOpen:p,onDismissError:()=>{h(!1)}})]});var q}},30301:function(e,n,t){t.d(n,{p:function(){return s}});var u=t(30919),r=t(11907),a=t(9848),o=t(52406),i=t(35968),l=t(22866);const s=e=>{const{pageTitle:n}=(0,o.useContext)(r.z1),t=(0,a.Zl)(),s=(0,u.wG)(),c=null==e?void 0:e.onSuccess,m=null==e?void 0:e.onError;return(0,i.Db)((e=>(0,l.Ch)(t,"discardTicket",e)),{onSuccess:(e,t)=>{s({context:n||"queueing",action:"onClick",name:"leaveLine",payload:{nm:{nm:"leaveLine"},li:{nm:"leaveLine"},ta:{ov:"leaveLineConfirm",pt:n||"waitingRoom"}}}),null==c||c(e,t)},onError:(...e)=>{s({context:n||"queueing",action:"onClick",name:"leaveLine",payload:{nm:{nm:"error"},li:{nm:"leaveLine"},ta:{ov:"leaveLineConfirm",pt:n||"waitingRoom"}}}),null==m||m(...e)}})}},3705:function(e,n,t){t.d(n,{B:function(){return a}});var u=t(52406),r=t(49413);const a=()=>{const{error:e,itemQueueData:n,setItemQueueData:t,...a}=(()=>{const e=(0,u.useContext)(r.e);if(!e)throw new Error("useQueueContext must be used within ItemQueueContextProvider");return e})(),o=(0,u.useCallback)((e=>{Array.isArray(e)?null==t||t(e):null==t||t([...n,e])}),[n,t]),i=(0,u.useCallback)((e=>{const t=n.filter((n=>n.queue!==e));o(t)}),[n,o]);return{...a,queueData:n,queueError:e,removeTicketByQueueValue:i,setQueueData:t,updateQueueData:o}}}}]);