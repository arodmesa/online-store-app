"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[139],{4139:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(4165),i=t(5861),s=t(8152);function a(e){var r,t,n,i=2;for("undefined"!=typeof Symbol&&(t=Symbol.asyncIterator,n=Symbol.iterator);i--;){if(t&&null!=(r=e[t]))return r.call(e);if(n&&null!=(r=e[n]))return new c(r.call(e));t="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function c(e){function r(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var r=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:r}}))}return c=function(e){this.s=e,this.n=e.next},c.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(e){var t=this.s.return;return void 0===t?Promise.resolve({value:e,done:!0}):r(t.apply(this.s,arguments))},throw:function(e){var t=this.s.return;return void 0===t?Promise.reject(e):r(t.apply(this.s,arguments))}},new c(e)}t(3558);var o=t(184);var u=function(e){var r=e.iconCard,t=e.titleCard,n=e.textCard;return(0,o.jsxs)("div",{className:"divCard divColumn",children:[(0,o.jsx)("img",{className:"imgCard",src:r,alt:"icono"}),(0,o.jsxs)("div",{className:"divColumn organizeTextInCard",children:[(0,o.jsx)("h3",{className:"cardTitle",children:t}),(0,o.jsx)("p",{className:"cardText",children:n})]})]})},l=t(8070),d=t(2791),m=t(6871),p=t(9434),h=t(8898),v=t(5171),f=t(8530),b=t(5178);function x(){var e=h.Z.getState().userEmailAddressReducer.userEmailAddress;window.Email.send({SecureToken:"be618017-4606-4c16-925b-474c0be7185b",To:e,From:"testOnlineStoreReact@gmail.com",Subject:"Thanks for subscribing!!!",Body:"Thanks for subcribing \u2764\ufe0f. You will receive news \u2709\ufe0f from us soon..."}).then((function(e){(0,b.d)("Thanks for subscribing. If you dont receive our mail check your spam inbox",3e3)}))}function y(e){h.Z.dispatch((0,f.Q)(e.target.checkValidity(e.target.value))),h.Z.dispatch((0,v.E)(e.target.value))}var j=t(3708),w=t(9621);function N(){return(N=(0,i.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.Z)(j.QH+"&id=".concat(r));case 3:return t=e.sent,e.abrupt("return",t.hits[0]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{customError:"Error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var g=function(e){return N.apply(this,arguments)};var C=function(){var e=(0,m.s0)(),r=(0,p.v9)((function(e){return e.userEmailAddressReducer.userEmailAddress})),t=(0,p.v9)((function(e){return e.enableSubscribeButtonReducer.isButtonEnabled})),c=(0,d.useState)([]),h=(0,s.Z)(c,2),v=h[0],f=h[1];(0,d.useEffect)((function(){(0,i.Z)((0,n.Z)().mark((function e(){var r,t,i,s,c,u,d,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=j.qO.map((function(e){return g(e)})),t=[],i=!1,s=!1,e.prev=4,u=a(r);case 6:return e.next=8,u.next();case 8:if(!(i=!(d=e.sent).done)){e.next=14;break}(m=d.value).customError?(0,b.d)("Some error has occurred, check your internet connection or try again later...",2e3):t.push((0,o.jsx)(l.Z,{portraitID:m.id,price:m.webformatHeight,tags:m.tags,imagePreview:m.webformatURL},m.id));case 11:i=!1,e.next=6;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),s=!0,c=e.t0;case 20:if(e.prev=20,e.prev=21,!i||null==u.return){e.next=25;break}return e.next=25,u.return();case 25:if(e.prev=25,!s){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(20);case 30:f(t.slice());case 31:case"end":return e.stop()}}),e,null,[[4,16,20,30],[21,,25,29]])})))()}),[]);var w=j.l3.map((function(e,r){return(0,o.jsx)(u,{iconCard:e.iconCard,titleCard:e.titleCard,textCard:e.textCard},r)}));return(0,o.jsxs)("div",{className:"divHome divColumn",children:[(0,o.jsxs)("div",{className:"section1 divColumn",children:[(0,o.jsx)("h1",{className:"section1Title",children:"Portraitify"}),(0,o.jsx)("p",{className:"section1Text",children:"...the right portrait awaits you"}),(0,o.jsx)("button",{type:"button",className:"shopNowBtn",onClick:function(){return e("products/pageNum/1")},children:"SHOP NOW"})]}),(0,o.jsxs)("div",{className:"section2 divColumn",children:[(0,o.jsx)("h2",{className:"section2Title",children:"Featured Portraits"}),(0,o.jsx)("div",{className:"organizeImgPreview",children:v}),(0,o.jsx)("button",{className:"shopNowBtn section2Btn",onClick:function(){return e("products/pageNum/1")},children:"All portraits"})]}),(0,o.jsx)("div",{className:"section3",children:w}),(0,o.jsxs)("div",{className:"section4 divColumn",children:[(0,o.jsx)("h3",{className:"section4Title",children:"Join our newsletter and get 10% off"}),(0,o.jsx)("p",{className:"textSection4",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?"}),(0,o.jsxs)("div",{className:"divRow",children:[(0,o.jsx)("input",{type:"email",placeholder:"Enter Email",className:"emailInput"+(t?"":" redInput"),required:!0,value:r,onChange:y,onKeyDown:function(e){t&&"Enter"===e.key&&x()}}),(0,o.jsx)("button",{type:"button",className:"sendEmailBtn"+(t?"":" disabledBtn"),disabled:!t,onClick:x,children:"Subscribe \ud83d\udd14"})]})]})]})}}}]);
//# sourceMappingURL=139.ead85ec0.chunk.js.map