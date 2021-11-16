import{Children as e,createElement as t,useEffect as l,useState as a,useCallback as r,useRef as n}from"react";import{createPortal as i}from"react-dom";import{or as o,attribute as u,literal as s,contains as d,startsWith as c,endsWith as v,greaterThan as f,greaterThanOrEqual as p,equals as m,notEqual as b,lessThan as h,lessThanOrEqual as g}from"mendix/filters/builders";var y,w={exports:{}};
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/y=w,function(){var e={}.hasOwnProperty;function t(){for(var l=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var n=typeof r;if("string"===n||"number"===n)l.push(r);else if(Array.isArray(r)&&r.length){var i=t.apply(null,r);i&&l.push(i)}else if("object"===n)for(var o in r)e.call(r,o)&&r[o]&&l.push(o)}}return l.join(" ")}y.exports?(t.default=t,y.exports=t):window.classNames=t}();var x=w.exports;const q=({className:l,bootstrapStyle:a,children:r})=>e.count(r)>0?t("div",{className:x("alert alert-".concat(a),l)},r):null;function C(e,t){const[i,o]=a(),u=r((()=>{const t=null==e?void 0:e.getBoundingClientRect();var l,a;a=i,(l=t)&&a&&l.height===a.height&&l.width===a.width&&l.bottom===a.bottom&&l.top===a.top&&l.left===a.left&&l.right===a.right||o(t)}),[i,e]);return function(e){const t=n(),a=r((()=>{e(),t.current=window.requestAnimationFrame(a)}),[e]);l((()=>{if(e)return t.current=window.requestAnimationFrame(a),()=>{window.cancelAnimationFrame(t.current)}}),[e,a])}(t?u:void 0),i}function k(e){const[o,u]=a(e.defaultFilter),[s,d]=a(!1),c=n(null),v=n(null);var f,p;l((()=>{const e=e=>{if(Array.isArray(f)){if(f.some((t=>!t.current||t.current.contains(e.target))))return}else if(!f.current||f.current.contains(e.target))return;p()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f=[c,v],p=()=>d(!1)]);const m=C(c.current,s),b=r((t=>{u(t),e.onChange(t),d(!1)}),[e.onChange]);l((()=>{u(e.defaultFilter),e.onChange(e.defaultFilter)}),[e.defaultFilter,e.onChange]);const h=i(t("ul",{ref:v,id:"".concat(e.id,"-filter-selectors"),className:"filter-selectors",role:"menu","data-focusindex":0,style:{position:"fixed",top:null==m?void 0:m.bottom,left:null==m?void 0:m.left}},e.options.map(((l,a)=>t("li",{className:x({"filter-selected":o===l.value}),key:a,onClick:e=>{e.preventDefault(),e.stopPropagation(),b(l.value)},onKeyDown:t=>{var r,n;"Enter"===t.key||" "===t.key?(t.preventDefault(),t.stopPropagation(),b(l.value)):"Tab"===t.key&&a+1===e.options.length?(t.preventDefault(),b(o)):("Tab"===t.key&&t.shiftKey&&0===a||"Escape"===t.key)&&(t.preventDefault(),null===(n=null===(r=c.current)||void 0===r?void 0:r.querySelector("button"))||void 0===n||n.focus(),d(!1))},role:"menuitem",tabIndex:0},t("div",{className:x("filter-icon",l.value),"aria-hidden":!0}),t("div",{className:"filter-label"},l.label))))),document.body),g=r((()=>{d((e=>!e)),setTimeout((()=>{var e,t;null===(t=null===(e=v.current)||void 0===e?void 0:e.querySelector("li.filter-selected"))||void 0===t||t.focus()}),10)}),[]);return t("div",{className:"filter-selector"},t("div",{className:"filter-selector-content",ref:c},t("button",{"aria-controls":"".concat(e.id,"-filter-selectors"),"aria-expanded":s,"aria-haspopup":!0,"aria-label":e.ariaLabel,className:x("btn btn-default filter-selector-button button-icon",o),onClick:g,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),g())}}," "),s&&h))}q.displayName="Alert";var E;function F(e){var i;const[o,u]=a(e.defaultFilter),[s,d]=a(""),[c,v]=a(""),f=n(null);l((()=>{e.value&&(v(e.value),d(e.value))}),[e.value]),l((()=>{var t;null===(t=e.updateFilters)||void 0===t||t.call(e,s,o)}),[s,o]);const p=r(((e,t)=>{let l=null;return(...a)=>{null!==l&&(clearTimeout(l),l=null),l=setTimeout((()=>e(...a)),t)}})((e=>d(e)),e.delay),[e.delay]),m=r((()=>{f.current&&f.current.focus()}),[f]);return t("div",{className:x("filter-container",e.className),"data-focusindex":null!==(i=e.tabIndex)&&void 0!==i?i:0,style:e.styles},e.adjustable&&t(k,{ariaLabel:e.screenReaderButtonCaption,id:e.id,defaultFilter:e.defaultFilter,onChange:r((e=>{u((t=>t===e?t:(m(),e)))}),[m]),options:[{value:"contains",label:"Contains"},{value:"startsWith",label:"Starts with"},{value:"endsWith",label:"Ends with"},{value:"greater",label:"Greater than"},{value:"greaterEqual",label:"Greater than or equal"},{value:"equal",label:"Equal"},{value:"notEqual",label:"Not equal"},{value:"smaller",label:"Smaller than"},{value:"smallerEqual",label:"Smaller than or equal"}]}),t("input",{"aria-label":e.screenReaderInputCaption,className:x("form-control",{"filter-input":e.adjustable}),onChange:e=>{v(e.target.value),p(e.target.value)},placeholder:e.placeholder,ref:f,type:"text",value:c}))}function N(e){if(e&&1===e.length){const[t]=e;let l="equal";switch(t.type){case"contains":l="contains";break;case"starts-with":l="startsWith";break;case"ends-with":l="endsWith";break;case">":l="greater";break;case">=":l="greaterEqual";break;case"=":l="equal";break;case"!=":l="notEqual";break;case"<":l="smaller";break;case"<=":l="smallerEqual"}return{type:l,value:String(t.value)}}}function S(e){const l=n("TextFilter".concat(function(){const e="com.mendix.widgets.web.UUID";return window[e]||(window[e]=1),window[e]++}())),a=window["com.mendix.widgets.web.filterable.filterContext"],r=t(q,{bootstrapStyle:"danger"},"The Text filter widget must be placed inside the header of the Data grid 2.0 or Gallery widget."),i=t(q,{bootstrapStyle:"danger"},'The Text filter widget can\'t be used with the filters options you have selected. It requires a "Hashed string or String" attribute to be selected.');return(null==a?void 0:a.Consumer)?t(a.Consumer,null,(a=>{var n,u,s,d,c,v,f;if(!a||!a.filterDispatcher||!a.singleAttribute&&!a.multipleAttributes)return r;const{filterDispatcher:p,singleAttribute:m,multipleAttributes:b,singleInitialFilter:h,multipleInitialFilters:g}=a,y=[...m?[m]:[],...b&&null!==(n=A(b))&&void 0!==n?n:[]];if(0===y.length)return b?i:r;const w=N(h||(null==g?void 0:g[y[0].id])),x=(C=y[0].type)&&!C.match(/HashString|String/)?"The attribute type being used for Text filter is not 'Hashed string or String'":null;var C;return x?t(q,{bootstrapStyle:"danger"},x):t(F,{adjustable:e.adjustable,className:e.class,defaultFilter:null!==(u=null==w?void 0:w.type)&&void 0!==u?u:e.defaultFilter,delay:e.delay,id:l.current,placeholder:null===(s=e.placeholder)||void 0===s?void 0:s.value,screenReaderButtonCaption:null===(d=e.screenReaderButtonCaption)||void 0===d?void 0:d.value,screenReaderInputCaption:null===(c=e.screenReaderInputCaption)||void 0===c?void 0:c.value,styles:e.style,tabIndex:e.tabIndex,updateFilters:(t,l)=>{var a,r,n;const i=(null===(a=e.valueAttribute)||void 0===a?void 0:a.value)||"";t!==i&&(null===(r=e.valueAttribute)||void 0===r||r.setValue(t),null===(n=e.onChange)||void 0===n||n.execute());const u=null==y?void 0:y.map((e=>T(e,t,l))).filter((e=>void 0!==e));p({getFilterCondition:()=>u&&u.length>1?o(...u):null==u?void 0:u[0],filterType:"string"})},value:null!==(v=null==w?void 0:w.value)&&void 0!==v?v:null===(f=e.defaultValue)||void 0===f?void 0:f.value})})):r}function A(e){if(e)return Object.keys(e).map((t=>e[t])).filter((e=>e.type.match(/HashString|String/)))}function T(e,t,l){if(!e||!e.filterable||!t)return;return{contains:d,startsWith:c,endsWith:v,greater:f,greaterEqual:p,equal:m,notEqual:b,smaller:h,smallerEqual:g}[l](u(e.id),s(t))}!function(e){e.Number="number",e.DateTime="datetime"}(E||(E={}));export{S as default};
