import{Children as e,createElement as t,useEffect as l,useState as r,useCallback as a,useRef as n}from"react";import{createPortal as i}from"react-dom";import{Big as o}from"big.js";import{or as u,attribute as s,literal as d,greaterThan as c,greaterThanOrEqual as v,equals as m,notEqual as f,lessThan as p,lessThanOrEqual as b}from"mendix/filters/builders";var g,h={exports:{}};
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/g=h,function(){var e={}.hasOwnProperty;function t(){for(var l=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var n=typeof a;if("string"===n||"number"===n)l.push(a);else if(Array.isArray(a)&&a.length){var i=t.apply(null,a);i&&l.push(i)}else if("object"===n)for(var o in a)e.call(a,o)&&a[o]&&l.push(o)}}return l.join(" ")}g.exports?(t.default=t,g.exports=t):window.classNames=t}();var y=h.exports;const w=({className:l,bootstrapStyle:r,children:a})=>e.count(a)>0?t("div",{className:y("alert alert-".concat(r),l)},a):null;function N(e,t){const[i,o]=r(),u=a((()=>{const t=null==e?void 0:e.getBoundingClientRect();var l,r;r=i,(l=t)&&r&&l.height===r.height&&l.width===r.width&&l.bottom===r.bottom&&l.top===r.top&&l.left===r.left&&l.right===r.right||o(t)}),[i,e]);return function(e){const t=n(),r=a((()=>{e(),t.current=window.requestAnimationFrame(r)}),[e]);l((()=>{if(e)return t.current=window.requestAnimationFrame(r),()=>{window.cancelAnimationFrame(t.current)}}),[e,r])}(t?u:void 0),i}function q(e){const[o,u]=r(e.defaultFilter),[s,d]=r(!1),c=n(null),v=n(null);var m,f;l((()=>{const e=e=>{if(Array.isArray(m)){if(m.some((t=>!t.current||t.current.contains(e.target))))return}else if(!m.current||m.current.contains(e.target))return;f()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m=[c,v],f=()=>d(!1)]);const p=N(c.current,s),b=a((t=>{u(t),e.onChange(t),d(!1)}),[e.onChange]);l((()=>{u(e.defaultFilter),e.onChange(e.defaultFilter)}),[e.defaultFilter,e.onChange]);const g=i(t("ul",{ref:v,id:"".concat(e.id,"-filter-selectors"),className:"filter-selectors",role:"menu","data-focusindex":0,style:{position:"fixed",top:null==p?void 0:p.bottom,left:null==p?void 0:p.left}},e.options.map(((l,r)=>t("li",{className:y({"filter-selected":o===l.value}),key:r,onClick:e=>{e.preventDefault(),e.stopPropagation(),b(l.value)},onKeyDown:t=>{var a,n;"Enter"===t.key||" "===t.key?(t.preventDefault(),t.stopPropagation(),b(l.value)):"Tab"===t.key&&r+1===e.options.length?(t.preventDefault(),b(o)):("Tab"===t.key&&t.shiftKey&&0===r||"Escape"===t.key)&&(t.preventDefault(),null===(n=null===(a=c.current)||void 0===a?void 0:a.querySelector("button"))||void 0===n||n.focus(),d(!1))},role:"menuitem",tabIndex:0},t("div",{className:y("filter-icon",l.value),"aria-hidden":!0}),t("div",{className:"filter-label"},l.label))))),document.body),h=a((()=>{d((e=>!e)),setTimeout((()=>{var e,t;null===(t=null===(e=v.current)||void 0===e?void 0:e.querySelector("li.filter-selected"))||void 0===t||t.focus()}),10)}),[]);return t("div",{className:"filter-selector"},t("div",{className:"filter-selector-content",ref:c},t("button",{"aria-controls":"".concat(e.id,"-filter-selectors"),"aria-expanded":s,"aria-haspopup":!0,"aria-label":e.ariaLabel,className:y("btn btn-default filter-selector-button button-icon",o),onClick:h,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),e.stopPropagation(),h())}}," "),s&&g))}w.displayName="Alert";var C;function A(e){var i;const[u,s]=r(e.defaultFilter),[d,c]=r(void 0),[v,m]=r(void 0),f=n(null);l((()=>{e.value&&(m(e.value.toString()),c(e.value))}),[e.value]),l((()=>{var t;null===(t=e.updateFilters)||void 0===t||t.call(e,d,u)}),[d,u]);const p=a(((e,t)=>{let l=null;return(...r)=>{null!==l&&(clearTimeout(l),l=null),l=setTimeout((()=>e(...r)),t)}})((e=>c(e)),e.delay),[e.delay]),b=a((()=>{f.current&&f.current.focus()}),[f]);return t("div",{className:y("filter-container",e.className),"data-focusindex":null!==(i=e.tabIndex)&&void 0!==i?i:0,style:e.styles},e.adjustable&&t(q,{ariaLabel:e.screenReaderButtonCaption,id:e.id,defaultFilter:e.defaultFilter,onChange:a((e=>{s((t=>t===e?t:(b(),e)))}),[b]),options:[{value:"greater",label:"Greater than"},{value:"greaterEqual",label:"Greater than or equal"},{value:"equal",label:"Equal"},{value:"notEqual",label:"Not equal"},{value:"smaller",label:"Smaller than"},{value:"smallerEqual",label:"Smaller than or equal"}]}),t("input",{"aria-label":e.screenReaderInputCaption,className:y("form-control",{"filter-input":e.adjustable}),onChange:e=>{const t=e.target.value;t&&!isNaN(Number(t))?(m(t),p(new o(Number(t)))):(m(t),p(void 0))},placeholder:e.placeholder,ref:f,type:"number",value:v}))}function x(e){if(e&&1===e.length){const[t]=e;let l="equal";switch(t.type){case">":l="greater";break;case">=":l="greaterEqual";break;case"=":l="equal";break;case"!=":l="notEqual";break;case"<":l="smaller";break;case"<=":l="smallerEqual"}return{type:l,value:t.value}}}function F(e){const l=n("NumberFilter".concat(function(){const e="com.mendix.widgets.web.UUID";return window[e]||(window[e]=1),window[e]++}())),r=window["com.mendix.widgets.web.filterable.filterContext"],a=t(w,{bootstrapStyle:"danger"},"The Number filter widget must be placed inside the header of the Data grid 2.0 or Gallery widget."),i=t(w,{bootstrapStyle:"danger"},'The Number filter widget can\'t be used with the filters options you have selected. It requires a "Autonumber, Decimal, Integer or Long" attribute to be selected.');return(null==r?void 0:r.Consumer)?t(r.Consumer,null,(r=>{var n,o,s,d,c,v,m;if(!r||!r.filterDispatcher||!r.singleAttribute&&!r.multipleAttributes)return a;const{filterDispatcher:f,singleAttribute:p,multipleAttributes:b,singleInitialFilter:g,multipleInitialFilters:h}=r,y=[...p?[p]:[],...b&&null!==(n=E(b))&&void 0!==n?n:[]];if(0===y.length)return b?i:a;const N=x(g||(null==h?void 0:h[y[0].id])),q=(C=y[0].type)&&!C.match(/AutoNumber|Decimal|Integer|Long/)?"The attribute type being used for Number filter is not 'Autonumber, Decimal, Integer or Long'":null;var C;return q?t(w,{bootstrapStyle:"danger"},q):t(A,{adjustable:e.adjustable,className:e.class,defaultFilter:null!==(o=null==N?void 0:N.type)&&void 0!==o?o:e.defaultFilter,delay:e.delay,id:l.current,placeholder:null===(s=e.placeholder)||void 0===s?void 0:s.value,screenReaderButtonCaption:null===(d=e.screenReaderButtonCaption)||void 0===d?void 0:d.value,screenReaderInputCaption:null===(c=e.screenReaderInputCaption)||void 0===c?void 0:c.value,styles:e.style,tabIndex:e.tabIndex,updateFilters:(t,l)=>{var r,a,n,i,o;(t&&!(null===(a=null===(r=e.valueAttribute)||void 0===r?void 0:r.value)||void 0===a?void 0:a.eq(t))||t!==(null===(n=e.valueAttribute)||void 0===n?void 0:n.value))&&(null===(i=e.valueAttribute)||void 0===i||i.setValue(t),null===(o=e.onChange)||void 0===o||o.execute());const s=null==y?void 0:y.map((e=>k(e,t,l))).filter((e=>void 0!==e));f({getFilterCondition:()=>s&&s.length>1?u(...s):null==s?void 0:s[0],filterType:"number"})},value:null!==(v=null==N?void 0:N.value)&&void 0!==v?v:null===(m=e.defaultValue)||void 0===m?void 0:m.value})})):a}function E(e){if(e)return Object.keys(e).map((t=>e[t])).filter((e=>e.type.match(/AutoNumber|Decimal|Integer|Long/)))}function k(e,t,l){if(!e||!e.filterable||!t)return;return{greater:c,greaterEqual:v,equal:m,notEqual:f,smaller:p,smallerEqual:b}[l](s(e.id),d(t))}!function(e){e.Number="number",e.DateTime="datetime"}(C||(C={}));export{F as default};