"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94692],{674409:function(e,t,l){l.d(t,{IX:function(){return a},Ot:function(){return i},oZ:function(){return o}});const a="00000000-0000-0000-0000-000000000000";var o,n,i;!function(e){e.CXO_BST_DEFAULT="CXO_BST_DEFAULT",e.CXO_BST_EXPRESS_DEFAULT="CXO_BST_EXPRESS_DEFAULT",e.CXO_BST_EVERGREEN="CXO_BST_EVERGREEN",e.CXO_BST_EXPRESS="CXO_BST_EXPRESS",e.CXO_BST_REGULAR="CXO_BST_REGULAR",e.CXO_BST_UNSCHEDULED="CXO_BST_UNSCHEDULED",e.CXO_BST_INHOME_DELIVERY="CXO_BST_INHOME_DELIVERY",e.CXO_BST_FREE_DELIVERY="CXO_BST_FREE_DELIVERY",e.CXO_BST_RESERVE_PICK_DEL="CXO_BST_RESERVE_PICK_DEL",e.CXO_BST_WKLY_NO_RES="CXO_BST_WKLY_NO_RES",e.CXO_BST_WPLUS_FREE_DEL="CXO_BST_WPLUS_FREE_DEL",e.CXO_BST_WPLUS_EXPRESS="CXO_BST_WPLUS_EXPRESS",e.CXO_BST_WPLUS_FREE="CXO_BST_WPLUS_FREE",e.CXO_BST_WPLUS_INHOME="CXO_BST_WPLUS_INHOME"}(o||(o={})),function(e){e.CXO_BSST_POP_SPOKE="CXO_BSST_POP_SPOKE",e.CXO_BSST_INSTORE_PICKUP="CXO_BSST_INSTORE_PICKUP",e.CXO_BSST_DELIVERY="CXO_BSST_DELIVERY",e.CXO_BSST_WEEKLY_DELIVERY="CXO_BSST_WEEKLY_DELIVERY",e.CXO_BSST_WEEKLY_PICKUP="CXO_BSST_WEEKLY_PICKUP",e.CXO_BSST_RESERVATION_NEAR="CXO_BSST_RESERVATION_NEAR",e.CXO_BSST_WPLUS_DELIVERY="CXO_BSST_WPLUS_DELIVERY"}(n||(n={})),function(e){e.CXO_BSET_CHECKOUT_BY="CXO_BSET_CHECKOUT_BY",e.CXO_BSET_EXPRESS_DISCOUNT="CXO_BSET_EXPRESS_DISCOUNT",e.CXO_BSET_EXPRESS_FREE="CXO_BSET_EXPRESS_FREE",e.CXO_BSET_RESERVATION_EXPD="CXO_BSET_RESERVATION_EXPD",e.CXO_BSET_RES_UNSCHD="CXO_BSET_RES_UNSCHD",e.CXO_BSET_RESERVATION_SLA="CXO_BSET_RESERVATION_SLA"}(i||(i={}))},166407:function(e,t,l){l.d(t,{s:function(){return d}});var a=l(590723),o=l(224174),n=l(158529),i=l(156055),s=l(674409),r=l(812775),u=l(521638);const d=e=>{let{cartFulfillmentOption:t,reservation:l,customQueryKey:d,maxAvailableSlotsCount:c,requestSource:S,fulfillmentOptionParam:m,queryFulfillment:E,initialCartId:p,startDate:_,isInstallWithLazyCartId:y,paginationInput:C}=e;const v=(0,a.Dv)(),f=(0,n.iC)(r.V,o.YL),{enableExpressSla:b,enableWeeklyReservationCartBookslot:T,enableWalmartPlusFreeDiscountedExpress:I,enableFutureInventoryCartBookslot:O,enableLawnAndGarden:D,enableHolidayFreeExpressDelivery:P}=f.shared.values||{},{enableDeliveryAddressFromSlotData:F,enableCartFulfillmentOption:A,enablePassCartIdAcidCheck:g,enableFulfillmentOptionURLParam:x,enableMultipleInhomeAddresses:R,enableInstaCartSlots:h,enableAccSlotExpansion:B}=f.bookslot.values||{},X=(0,u.m)();let L=(0,a.cF)();"ACC_SERVICE"===t?L=p:(g&&X||y)&&(L=s.IX);const V=(0,a.EN)(),$={"x-o-in-home-slots":"true",...A?{"x-o-default-slot-intent":"true"}:{}},N=(0,a.dt)(),k="INSTALL"===t||"ACC_SERVICE"===t?"PICKUP":t;let U=t;"ACC_SERVICE"===t?U=t:x&&m&&"INSTALL"!==t&&!N?U=m:!A||"INSTALL"===t||S||"SHIPPING"!==t&&(l||N)||(U=void 0);return(0,i.useMemo)((()=>({variables:{cartId:L,fulfillmentOption:k,cartFulfillmentOption:U,isGuest:!!v,isExpressSla:!!b,enableWeeklyReservation:!!T,enableDeliveryAddressFromSlotData:!!F,enableWalmartPlusFreeDiscountedExpress:!!I,enableFutureInventoryCartBookslot:!!O,maxAvailableSlotsCount:c,requestSource:S,itemFulfillmentTypes:D?V:void 0,enableMultipleInhomeAddresses:R,enableCartCustomerContext:"ACC_SERVICE"!==t,enableInstaCartSlots:h,startDate:_,enableAccSlotExpansion:B,enableHolidayFreeExpressDelivery:P,enableExpressPricing:I||P,...C?{paginationInput:C}:{}},additionalHeaders:$,customQueryKey:d})),[L,k,v,t,T,F,I,O,A,B,P,b,E,_,C])}},448586:function(e,t,l){l.d(t,{w:function(){return o}});const a={type:"query",name:"getSlots",query:"query getSlots( $cartId:ID! $fulfillmentOption:FulfillmentOption! $cartFulfillmentOption:CartFulfillmentOption $isExpressSla:Boolean! $enableWeeklyReservation:Boolean! $enableDeliveryAddressFromSlotData:Boolean! $enableWalmartPlusFreeDiscountedExpress:Boolean! $enableFutureInventoryCartBookslot:Boolean! $maxAvailableSlotsCount:Int $requestSource:RequestSource $itemFulfillmentTypes:[ItemFulfillmentTypes!]$enableMultipleInhomeAddresses:Boolean = false $enableCartCustomerContext:Boolean = true $enableInstaCartSlots:Boolean = false $startDate:String $paginationInput:PaginationInput $enableAccSlotExpansion:Boolean = false $enableHolidayFreeExpressDelivery:Boolean = false $enableExpressPricing:Boolean = false ){slots( input:{cartId:$cartId fulfillmentOption:$fulfillmentOption cartFulfillmentOption:$cartFulfillmentOption maxAvailableSlotsCount:$maxAvailableSlotsCount requestSource:$requestSource itemFulfillmentTypes:$itemFulfillmentTypes startDate:$startDate paginationInput:$paginationInput}){...CommonSlotsFragment...BookslotSlotsFragment}}fragment CommonSlotsFragment on SlotData{slotDays{day hasUnreleasedSlots hasAvailableSlots hasInHomeSlot eachDaySlots{__typename...AmendEachDaySlotFields}}accessPoints{id nodeAccessType fulfillmentType fulfillmentOption cartFulfillmentOption address{addressLineOne addressLineTwo city state postalCode state}timeZone displayName assortmentStoreId isExpressEligible}nextAvailableSlots{...nextAvailableSlotsFragment}selectedSlotId customerLocationInfo{isDefaultStore inHomeEligible @include(if:$enableMultipleInhomeAddresses) intent deliveryAddress @include(if:$enableDeliveryAddressFromSlotData){id addressLineOne addressLineTwo city state postalCode firstName lastName phone}pickupStore{hasFreePickup selectionType}}}fragment nextAvailableSlotsFragment on NextAvailableSlots{pickupSlot{__typename...AmendNextAvailableSlotFields}deliverySlot{__typename...AmendNextAvailableSlotFields}earliestPickupSlotTime}fragment NextRegularSlotFragment on RegularSlot{id startTime endTime fulfillmentType nodeAccessType slotMetadata}fragment NextInHomeSlotFragment on InHomeSlot{id startTime endTime fulfillmentType nodeAccessType slotMetadata}fragment NextExpressSlotFragment on DynamicExpressSlot{id startTime endTime fulfillmentType nodeAccessType slotMetadata slaInMins}fragment AmendEachDaySlotFields on EachDaySlot{__typename...on RegularSlot{...AmendCommonSlotFields...NextRegularSlotFragment isPrimary slotIndicator slotExpiryTime available isWeeklyReserved @include(if:$enableWeeklyReservation) price{optedInTotal{displayValue}memberExpressDiscount @include(if:$enableWalmartPlusFreeDiscountedExpress){value displayValue}originaltotal @include(if:$enableWalmartPlusFreeDiscountedExpress){value displayValue}totalSavings @include(if:$enableWalmartPlusFreeDiscountedExpress){displayValue value}}isAlcoholRestricted ineligibleItemCount isPopular isVulnerable}...on DynamicExpressSlot{...AmendCommonSlotFields...NextExpressSlotFragment isPrimary slotIndicator slotExpiryTime slaInMins available id isSelectable endTime isAlcoholRestricted isVulnerable ineligibleItemCount maxItemAllowed price{optedInTotal{displayValue}memberExpressDiscount @include(if:$enableExpressPricing){value displayValue}originaltotal @include(if:$enableExpressPricing){value displayValue}totalSavings @include(if:$enableExpressPricing){displayValue value}baseExpressFee @include(if:$enableHolidayFreeExpressDelivery){value displayValue}}sla @include(if:$isExpressSla){displayValue}}...on InHomeSlot{...AmendCommonSlotFields...NextInHomeSlotFragment isPrimary slotIndicator slotExpiryTime available id endTime isAlcoholRestricted ineligibleItemCount isVulnerable price{optedInTotal{displayValue}memberExpressDiscount @include(if:$enableWalmartPlusFreeDiscountedExpress){value displayValue}originaltotal @include(if:$enableWalmartPlusFreeDiscountedExpress){value displayValue}totalSavings @include(if:$enableWalmartPlusFreeDiscountedExpress){displayValue value}}}}fragment AmendCommonSlotFields on CommonSlot{accessPointId slotMetadata price{baseFee{displayValue}expressFee{value displayValue}memberBaseFee{displayValue}total{value displayValue}}serviceProvider @include(if:$enableInstaCartSlots){__typename name displayMessage logoUrl}}fragment AmendNextAvailableSlotFields on EachDaySlot{__typename...on RegularSlot{id endTime fulfillmentType nodeAccessType slotMetadata startTime}...on DynamicExpressSlot{id endTime fulfillmentType nodeAccessType slaInMins slotMetadata startTime}...on InHomeSlot{id endTime fulfillmentType nodeAccessType slotMetadata startTime}}fragment BookslotSlotsFragment on SlotData{guestReservationExtensionMessage scheduledEnabled slotDays{eachDaySlots{...on RegularSlot{price{optedInTotal{displayValue}}serviceType}...on DynamicExpressSlot{price{optedInTotal{displayValue}}sla @include(if:$isExpressSla){displayValue}isEvergreen serviceType}...on InHomeSlot{price{optedInTotal{displayValue}}}}}nextAvailableSlots{unscheduledPickupSlot{unscheduledHoldInDays slotMetadata startTime price{total{displayValue}}}}hasFreeOfCostDeliverySlotsForWPlusUsers cartCustomerContext @include(if:$enableCartCustomerContext){isEligibleForFreeTrial isMembershipOptedIn membershipData{isActiveMember isPaidMember benefitCodes status}membershipPlan @include(if:$enableHolidayFreeExpressDelivery) paymentData{hasCreditCard}}allItemsAvailableOnDay @include(if:$enableFutureInventoryCartBookslot) slotPromotionDetails @include(if:$enableHolidayFreeExpressDelivery){__typename promotionSlotType promotionId promotionText promotionSubText promotionValidityPeriod eligibleMembershipStatus i18nPromotionText i18nPromotionSubText}paginationData @include(if:$enableAccSlotExpansion){currentPageIndex maxPageIndex pageZeroStartDate}}",hash:"57eeeb5b31cd4f080d5109389a35cc8d2bd9643402b86ae53cc59ce6b94ecf67"},o=(e,t)=>{let{variables:l,additionalHeaders:o={},customQueryKey:n}=t;return{queryKey:[n||"get-slots",l],queryFn:()=>e.getGqlFetch("cecxo",(e=>(t,l)=>(l&&Object.keys(o).forEach((e=>{l.headers[e]=o[e]})),e(t,l))))(a,l)}}},200597:function(e,t,l){l.d(t,{D:function(){return s}});var a=l(812775),o=l(158529),n=l(893109),i=l(780666);const s=()=>{var e;const{router:t}=(0,n.t)(),l=(0,o.iC)(a.V),{enableFulfillmentOptionURLParam:s}=(null===(e=l.bookslot)||void 0===e?void 0:e.values)||{};return s?(0,i.z)(null,null===t||void 0===t?void 0:t.query):void 0}},483770:function(e,t,l){l.d(t,{d:function(){return v}});var a=l(158529),o=l(271492),n=l(964226),i=l(978522),s=l(213176),r=l(970153),u=l(156055),d=l(812775),c=l(674409),S=l(448586),m=l(787937),E=l(192574),p=l(166407),_=l(521638);var y=l(200597),C=l(247298);const v=(e,t)=>{let{cartId:l,cartFulfillmentOption:v,reservation:f,cacheTime:b,customQueryKey:T,maxAvailableSlotsCount:I,requestSource:O,enabled:D,queryFulfillment:P,startDate:F,paginationInput:A}=e;const g=(0,y.D)(),{blockDelivery:x}=(e=>{var t;const{0:l,1:o}=(0,u.useState)(!1),n=(0,C.Jr)(),{isCAandESPAddressesSame:i,isCAandESPAddressesDifferent:s}=(0,C.w2)(),r=null===(t=(0,a.iC)(d.V).bookslot.values)||void 0===t?void 0:t.enableWirelessPostpaid;return{blockAddressChange:r&&n&&i,blockDelivery:"DELIVERY"===e&&r&&n&&s,showPostpaidAlertModal:l,setShowPostpaidAlertModal:o}})(v),{data:R,errors:h,isFetching:B,retry:X,refetch:L}=((e,t)=>{let{cartId:l,cartFulfillmentOption:y,reservation:C,blockDelivery:v=!1,cacheTime:f=0,customQueryKey:b,maxAvailableSlotsCount:T,requestSource:I,enabled:O=!0,fulfillmentOptionParam:D,queryFulfillment:P,startDate:F,paginationInput:A}=e;const{zipCodeFormatter:g=s.y}=(0,u.useContext)(r.V),{0:x,1:R}=(0,u.useState)(!1),h=(0,a.iC)(d.V),B="INSTALL"===y&&l===c.IX,{enableUnauthorizedAccessToCartErrorFix:X,enablePassCartIdAcidCheck:L,enableLocalizedStringInBookSlot:V}=h.bookslot.values||{},$=(0,p.s)({cartFulfillmentOption:y,reservation:C,customQueryKey:b,maxAvailableSlotsCount:T,requestSource:I,fulfillmentOptionParam:D,queryFulfillment:P,initialCartId:l,startDate:F,isInstallWithLazyCartId:B,paginationInput:A}),N=(0,_.m)(),k=L&&N,U=(0,n.Z)(),W=t||(0,S.w)(U,{...$,...x&&{variables:{...$.variables,cartId:"ACC_SERVICE"===y?l:c.IX,enableCartCustomerContext:"ACC_SERVICE"!==y,startDate:F,paginationInput:A}}}),{data:M,error:H,isFetching:K,refetch:q}=(0,i.a)({...W,config:{cacheTime:f,enabled:!!l&&!v&&O}});(0,u.useEffect)((()=>{var e,t;const a=null===M||void 0===M||null===(e=M.errors)||void 0===e?void 0:e.length;var n;k&&(0,o.cM)(["info","checkout","bookslot","getSlot query",a?"hasCidAndAcidError":"hasCidAndAcid"],{type:"log",message:a?JSON.stringify(null===M||void 0===M?void 0:M.errors):"cartId:".concat(l)}),X&&(null===M||void 0===M||null===(t=M.errors)||void 0===t?void 0:t.length)&&((0,E.e)(M)&&!x?((0,o.cM)(["info","checkout","bookslot","getSlot query","unauthorized-error"],{type:"log",message:"cartId:".concat(l)}),R(!0)):x&&(null===M||void 0===M||null===(n=M.errors)||void 0===n?void 0:n.length)&&(0,o.cM)(["info","checkout","bookslot","getSlot query","unauthorized-error-on-refetch"],{type:"log",message:JSON.stringify(null===M||void 0===M?void 0:M.errors)}))}),[null===M||void 0===M?void 0:M.errors,k]);const Y=(0,u.useMemo)((()=>{const e=null===M||void 0===M?void 0:M.data;if(null===e||void 0===e?void 0:e.slots)try{return((e,t)=>{if(!1===(null===t||void 0===t?void 0:t.expired)&&!1===(null===t||void 0===t?void 0:t.isUnscheduled)){var l,a,o,n;const s=null!==(n=null===(l=e.slots)||void 0===l?void 0:l.slotDays)&&void 0!==n?n:[],r=null===t||void 0===t||null===(a=t.reservedSlot)||void 0===a||null===(o=a.startTime)||void 0===o?void 0:o.slice(0,10),u=null===s||void 0===s?void 0:s.find((e=>e.day===r));if(u){var i;const e=null===(i=u.eachDaySlots)||void 0===i?void 0:i.find((e=>e.id===t.reservedSlot.id));e&&(e.available=!0)}}})(e,C),{parsedSlotsData:(0,m.ho)(e,!!V,g)}}catch(t){return{dataErrors:[t]}}else if(!K&&!v)return{dataErrors:(null===M||void 0===M?void 0:M.errors)||[new Error("Empty data response")]};return{}}),[M,C]),{parsedSlotsData:w=null,dataErrors:z=[]}=Y;return{errors:[H,...z].filter((e=>e)),isFetching:K,data:w,retry:!z.length&&x,refetch:q}})({cartId:l,cartFulfillmentOption:v,reservation:f,blockDelivery:x,cacheTime:b,customQueryKey:T,maxAvailableSlotsCount:I,requestSource:O,enabled:D,fulfillmentOptionParam:g,queryFulfillment:P,startDate:F,paginationInput:A},t),V=R||{};return{accessPoint:V.accessPoint,allAccessPoints:V.allAccessPoints,days:V.days,errors:h,timeZone:V.timeZone,earliestPickupSlotTime:V.earliestPickupSlotTime,isAnySlotsAvailable:V.isAnySlotsAvailable||!1,nextDeliverySlot:V.nextDeliverySlot,nextPickupSlot:V.nextPickupSlot,nextUnscheduledPickupSlot:V.nextUnscheduledPickupSlot,slotDays:V.slotDays,isFetching:B,guestReservationExtensionMessage:V.guestReservationExtensionMessage,slotPromotionDetails:V.slotPromotionDetails,cartCustomerContext:V.cartCustomerContext,scheduledEnabled:V.scheduledEnabled,hasFreeOfCostDeliverySlotsForWPlusUsers:V.hasFreeOfCostDeliverySlotsForWPlusUsers||!1,customerLocationInfo:V.customerLocationInfo,allItemsAvailableOnDay:V.allItemsAvailableOnDay,paginationData:V.paginationData,retry:X,refetch:L}}},780666:function(e,t,l){l.d(t,{z:function(){return a}});const a=(e,t)=>{try{const l=t||(e=>{if(e)return new Proxy(new URLSearchParams(e),{get:(e,t)=>e.get(t)})})(e),a=(null===l||void 0===l?void 0:l.fulfillmentOption)?l.fulfillmentOption.toString().toUpperCase():void 0;return"DELIVERY"===a||"PICKUP"===a?a:void 0}catch(l){return}}}}]);