(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8880],{

/***/ 68115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(7446);
  } else {}
  

/***/ }),

/***/ 7446:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(66526)):0}(this,(function(n,e,t){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=116)}({0:function(n,e,t){n.exports=t(21)()},1:function(e,t){e.exports=n},10:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(6),c=t(7),f=t(1),l=t.n(f),d=t(0),p=t.n(d),h=function(n){return l.a.createElement("div",n)},g={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},m={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,shrink:p.a.number,wrap:p.a.string};h.defaultProps=g,h.propTypes=m;var b={direction:!0},v=u()(s.Box).withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(c.a)("gap",e,t)}),(function(n){return n.justifyContent}));v.defaultProps=g,v.propTypes=m},11:function(n,e,t){var r=t(27),o=t(28),i=t(24),a=t(29);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},116:function(n,e,t){"use strict";t.r(e),t.d(e,"Crumb",(function(){return w})),t.d(e,"Breadcrumbs",(function(){return S}));var r,o=t(4),i=t.n(o),a=t(3),u=t.n(a),s=t(1),c=t.n(s),f=t(0),l=t.n(f),d=t(2),p=t.n(d),h=t(50),g=t.n(h),m=t(9),b=t(6),v=t(10),y=t(20),x=["children","label"],O=p()(v.Flex)(r||(r=u()(["\n  svg {\n    height: ","rem;\n    width: ","rem;\n    path {\n      fill: ",";\n    }\n  }\n  :last-of-type "," {\n    display: none;\n  }\n  :last-of-type "," {\n    color: ",";\n    font-weight: ",";\n  }\n"])),.625,.625,(function(n){return n.theme.colors.neutral500}),b.Box,m.Typography,(function(n){return n.theme.colors.neutral800}),(function(n){return n.theme.fontWeights.bold})),w=function(n){var e=n.children;return c.a.createElement(O,{inline:!0,as:"li"},c.a.createElement(m.Typography,{variant:"pi",textColor:"neutral600"},e),c.a.createElement(b.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},c.a.createElement(g.a,null)))};w.displayName="Crumb",w.propTypes={children:l.a.node.isRequired};var T=l.a.shape({type:l.a.oneOf([w])}),S=function(n){var e=n.children,t=n.label,r=i()(n,x);return c.a.createElement(v.Flex,r,c.a.createElement(y.VisuallyHidden,null,t),c.a.createElement("ol",{"aria-hidden":!0},e))};S.displayName="Breadcrumbs",S.propTypes={children:l.a.oneOfType([l.a.arrayOf(T),T]).isRequired,label:l.a.string.isRequired}},13:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return a}));var r=t(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var e=n.variant,t=n.theme;switch(e){case r.a:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}},a=function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}},15:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";t.r(e),t.d(e,"VisuallyHidden",(function(){return u}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a).a.div(r||(r=i()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},21:function(n,e,t){"use strict";var r=t(22);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},22:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e,t){var r=t(23);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){var r=t(26);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},50:function(n,e){n.exports=t},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),f=t.n(c),l=t(0),d=t.n(l),p=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},g={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};p.defaultProps=h,p.propTypes=g;var m={color:!0},b=u.a.div.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=g},7:function(n,e,t){"use strict";var r=t(11),o=t.n(r),i=t(15),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],l="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),l}var d=t.spaces[r]||r;return"".concat(n,": ").concat(d,";")}}},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"d",(function(){return a})),t.d(e,"e",(function(){return u})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return c})),t.d(e,"h",(function(){return f}));var r="alpha",o="beta",i="delta",a="epsilon",u="omega",s="pi",c="sigma",f=[r,o,i,a,u,s,c]},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(13),c=t(1),f=t.n(c),l=t(0),d=t.n(l),p=t(8),h=function(n){return f.a.createElement("div",n)},g={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},m={ellipsis:d.a.bool,fontSize:d.a.oneOfType([d.a.number,d.a.string]),fontWeight:d.a.string,lineHeight:d.a.oneOfType([d.a.number,d.a.string]),textAlign:d.a.string,textColor:d.a.string,textTransform:d.a.string,variant:d.a.oneOf(p.h)};h.defaultProps=g,h.propTypes=m;var b={fontSize:!0,fontWeight:!0},v=u.a.span.withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),s.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),s.a,s.c);v.defaultProps=g,v.propTypes=m}})}));

/***/ }),

/***/ 60985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(34387);
  } else {}
  

/***/ }),

/***/ 34387:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,t){ true?module.exports=t(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(39711)):0}(this,(function(n,t,e){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=120)}({0:function(n,t,e){n.exports=e(21)()},1:function(t,e){t.exports=n},11:function(n,t,e){var r=e(27),o=e(28),i=e(24),a=e(29);n.exports=function(n,t){return r(n)||o(n,t)||i(n,t)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},120:function(n,t,e){"use strict";e.r(t),e.d(t,"LinkButton",(function(){return S}));var r,o=e(5),i=e.n(o),a=e(4),c=e.n(a),u=e(3),s=e.n(u),d=e(1),l=e.n(d),f=e(40),p=e(2),h=e.n(p),b=e(0),g=e.n(b),m=e(9),v=e(6),x=e(37),y=e(19),O=e(42),_=["variant","startIcon","endIcon","disabled","children","size","href","to"],w=h()(O.BaseButtonWrapper)(r||(r=s()(["\n  padding: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n  /**\n    Link specific properties\n  */\n  display: inline-flex;\n  text-decoration: none;\n  pointer-events: ",";\n"])),(function(n){var t=n.theme,e=n.size;return"".concat("S"===e?t.spaces[2]:"10px"," ").concat(t.spaces[4])}),(function(n){return n.theme.colors.buttonPrimary600}),(function(n){return n.theme.colors.buttonPrimary600}),(function(n){return n.theme.borderRadius}),v.Box,m.Typography,(function(n){return n.theme.colors.buttonNeutral0}),x.b,x.b,x.c,x.a,x.d,(function(n){return n.disabled?"none":void 0})),S=l.a.forwardRef((function(n,t){var e=n.variant,r=n.startIcon,o=n.endIcon,a=n.disabled,u=n.children,s=n.size,d=n.href,p=n.to,h=c()(n,_),b=d?"_blank":void 0,g=d?"noreferrer noopener":void 0;return l.a.createElement(w,i()({ref:t,"aria-disabled":a,size:s,variant:e,target:b,rel:g,to:a?void 0:p,href:a?"#":d},h,{as:p&&!a?f.NavLink:"a"}),r&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingRight:2},r),"S"===s?l.a.createElement(m.Typography,{variant:"pi",fontWeight:"bold"},u):l.a.createElement(m.Typography,{fontWeight:"bold"},u),o&&l.a.createElement(v.Box,{"aria-hidden":!0,paddingLeft:2},o))}));S.displayName="LinkButton",S.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},S.propTypes={children:g.a.node.isRequired,disabled:g.a.bool,endIcon:g.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},onClick:g.a.func,size:g.a.oneOf(y.a),startIcon:g.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")},variant:g.a.oneOf(y.k)}},13:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return a}));var r=e(8),o=function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "},i=function(n){var t=n.variant,e=n.theme;switch(t){case r.a:return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[5],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case r.b:return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[4],";\n        line-height: ").concat(e.lineHeights[1],";\n      ");case r.c:return"\n        font-weight: ".concat(e.fontWeights.semiBold,";\n        font-size: ").concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[2],";\n      ");case r.d:return"\n        font-size: ".concat(e.fontSizes[3],";\n        line-height: ").concat(e.lineHeights[6],";\n      ");case r.e:return"\n        font-size: ".concat(e.fontSizes[2],";\n        line-height: ").concat(e.lineHeights[4],";\n      ");case r.f:return"\n        font-size: ".concat(e.fontSizes[1],";\n        line-height: ").concat(e.lineHeights[3],";\n      ");case r.g:return"\n        font-weight: ".concat(e.fontWeights.bold,";\n        font-size: ").concat(e.fontSizes[0],";\n        line-height: ").concat(e.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(e.fontSizes[2],";\n      ")}},a=function(n){var t=n.theme,e=n.textColor;return t.colors[e||"neutral800"]}},15:function(n,t){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=e=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),e(t)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},18:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var r=function(n){return function(t){var e=t.theme,r=t.size;return e.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(t){var e=t.theme,r=t.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?e.colors.danger600:e.colors.primary600,";\n        box-shadow: ").concat(r?e.colors.danger600:e.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var t=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(t.colors.primary600,";\n    }\n  }\n")}},19:function(n,t,e){"use strict";e.d(t,"i",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return i})),e.d(t,"j",(function(){return a})),e.d(t,"g",(function(){return c})),e.d(t,"b",(function(){return u})),e.d(t,"h",(function(){return s})),e.d(t,"e",(function(){return d})),e.d(t,"f",(function(){return l})),e.d(t,"k",(function(){return f})),e.d(t,"a",(function(){return p}));var r="success-light",o="danger-light",i="default",a="tertiary",c="secondary",u="danger",s="success",d="ghost",l=[r,o],f=[i,a,c,u,s,d].concat(l),p=["S","L"]},2:function(n,e){n.exports=t},21:function(n,t,e){"use strict";var r=e(22);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},22:function(n,t,e){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},23:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,t,e){var r=e(23);n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,t){n.exports=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,t){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},28:function(n,t){n.exports=function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(n){c=!0,o=n}finally{try{a||null==e.return||e.return()}finally{if(c)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},29:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,t){n.exports=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},32:function(n,t,e){var r=e(45),o=e(46),i=e(24),a=e(47);n.exports=function(n){return r(n)||o(n)||i(n)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},37:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return d})),e.d(t,"d",(function(){return l}));var r=e(32),o=e.n(r),i=e(9),a=e(19),c=function(n){return a.f.includes(n)?n.substring(0,n.lastIndexOf("-")):n===a.j?"neutral":[a.d,a.g].includes(n)||!a.k.includes(n)?"primary":n},u=function(n){var t=n.theme;return"\n    border: 1px solid ".concat(t.colors.neutral200,";\n    background: ").concat(t.colors.neutral150,";\n    ").concat(i.Typography," {\n      color: ").concat(t.colors.neutral600,";\n    }\n    svg {\n      > g, path {\n        fill: ").concat(t.colors.neutral600,";\n      }\n    }\n  ")},s=function(n){var t=n.theme,e=n.variant;return[].concat(o()(a.f),[a.g]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n    "):e===a.j||e===a.e?"\n      background-color: ".concat(t.colors.neutral100,";\n    "):e===a.d?"\n      border: 1px solid ".concat(t.colors.buttonPrimary500,";\n      background: ").concat(t.colors.buttonPrimary500,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"500")],";\n    background: ").concat(t.colors["".concat(c(e),"500")],";\n  ")},d=function(n){var t=n.theme,e=n.variant;return[].concat(o()(a.f),[a.g]).includes(e)?"\n      background-color: ".concat(t.colors.neutral0,";\n      border: 1px solid ").concat(t.colors["".concat(c(e),"600")],";\n      ").concat(i.Typography," {\n        color: ").concat(t.colors["".concat(c(e),"600")],";\n      }\n      svg {\n        > g, path {\n          fill: ").concat(t.colors["".concat(c(e),"600")],";\n        }\n      }\n    "):e===a.j?"\n      background-color: ".concat(t.colors.neutral150,";\n    "):"\n    border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n    background: ").concat(t.colors["".concat(c(e),"600")],";\n  ")},l=function(n){var t=n.theme,e=n.variant;switch(e){case a.c:case a.i:case a.g:return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"200")],";\n          background: ").concat(t.colors["".concat(c(e),"100")],";\n          ").concat(i.Typography," {\n            color: ").concat(t.colors["".concat(c(e),"700")],";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors["".concat(c(e),"700")],";\n            }\n          }\n        ");case a.j:return"\n          border: 1px solid ".concat(t.colors.neutral200,";\n          background: ").concat(t.colors.neutral0,";\n          ").concat(i.Typography," {\n            color: ").concat(t.colors.neutral800,";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(t.colors.neutral800,";\n            }\n          }\n        ");case a.e:return"\n        border: 1px solid transparent;\n        background: transparent;\n\n        ".concat(i.Typography," {\n          color: ").concat(t.colors.neutral800,";\n        }\n\n        svg {\n          > g, path {\n            fill: ").concat(t.colors.neutral500,";\n          }\n        }\n      ");case a.h:case a.b:return"\n          border: 1px solid ".concat(t.colors["".concat(c(e),"600")],";\n          background: ").concat(t.colors["".concat(c(e),"600")],";\n          ").concat(i.Typography," {\n            color: ").concat(t.colors.neutral0,";\n          }\n        ");default:return"\n          svg {\n            > g, path {\n              fill: ".concat(t.colors.buttonNeutral0,";\n            }\n          }\n        ")}}},4:function(n,t,e){var r=e(26);n.exports=function(n,t){if(null==n)return{};var e,o,i=r(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},40:function(n,t){n.exports=e},42:function(n,t,e){"use strict";e.r(t),e.d(t,"BaseButtonWrapper",(function(){return v})),e.d(t,"BaseButton",(function(){return x}));var r,o=e(5),i=e.n(o),a=e(4),c=e.n(a),u=e(3),s=e.n(u),d=e(1),l=e.n(d),f=e(0),p=e.n(f),h=e(2),b=e.n(h),g=e(18),m=["disabled","children"],v=b.a.button(r||(r=s()(["\n  display: flex;\n  cursor: pointer;\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n  border: 1px solid ",";\n  svg {\n    height: ",";\n    width: ",";\n  }\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &[aria-disabled='true'] {\n    pointer-events: none;\n  }\n\n  ","\n"])),(function(n){return n.theme.spaces[2]}),(function(n){return n.theme.borderRadius}),(function(n){return n.theme.colors.neutral0}),(function(n){return n.theme.colors.neutral200}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.spaces[3]}),(function(n){return n.theme.colors.neutral0}),g.a),x=l.a.forwardRef((function(n,t){var e=n.disabled,r=n.children,o=c()(n,m);return l.a.createElement(v,i()({ref:t,"aria-disabled":e,type:"button",disabled:e},o),r)}));x.displayName="BaseButton",x.defaultProps={disabled:!1},x.propTypes={children:p.a.node.isRequired,disabled:p.a.bool}},45:function(n,t,e){var r=e(23);n.exports=function(n){if(Array.isArray(n))return r(n)},n.exports.default=n.exports,n.exports.__esModule=!0},46:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)},n.exports.default=n.exports,n.exports.__esModule=!0},47:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,t){function e(){return n.exports=e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,e.apply(this,arguments)}n.exports=e,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,t,e){"use strict";e.r(t),e.d(t,"Box",(function(){return m}));var r,o=e(3),i=e.n(o),a=e(2),c=e.n(a),u=e(7),s=e(1),d=e.n(s),l=e(0),f=e.n(l),p=function(n){return d.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},b={_hover:f.a.func,background:f.a.string,basis:f.a.oneOfType([f.a.string,f.a.string]),borderColor:f.a.string,children:f.a.oneOfType([f.a.node,f.a.string]),color:f.a.string,flex:f.a.oneOfType([f.a.string,f.a.string]),grow:f.a.oneOfType([f.a.string,f.a.string]),hasRadius:f.a.bool,hiddenS:f.a.bool,hiddenXS:f.a.bool,padding:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingBottom:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingLeft:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingRight:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),paddingTop:f.a.oneOfType([f.a.number,f.a.arrayOf(f.a.number)]),shadow:f.a.string,shrink:f.a.oneOfType([f.a.string,f.a.string])};p.defaultProps=h,p.propTypes=b;var g={color:!0},m=c.a.div.withConfig({shouldForwardProp:function(n,t){return!g[n]&&t(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t}),(function(n){var t=n.theme,e=n.background;return t.colors[e]}),(function(n){var t=n.theme,e=n.color;return t.colors[e]}),(function(n){var t=n.theme,e=n.padding;return Object(u.a)("padding",e,t)}),(function(n){var t=n.theme,e=n.paddingTop;return Object(u.a)("padding-top",e,t)}),(function(n){var t=n.theme,e=n.paddingRight;return Object(u.a)("padding-right",e,t)}),(function(n){var t=n.theme,e=n.paddingBottom;return Object(u.a)("padding-bottom",e,t)}),(function(n){var t=n.theme,e=n.paddingLeft;return Object(u.a)("padding-left",e,t)}),(function(n){var t=n.theme,e=n.marginLeft;return Object(u.a)("margin-left",e,t)}),(function(n){var t=n.theme,e=n.marginRight;return Object(u.a)("margin-right",e,t)}),(function(n){var t=n.theme,e=n.marginTop;return Object(u.a)("margin-top",e,t)}),(function(n){var t=n.theme,e=n.marginBottom;return Object(u.a)("margin-bottom",e,t)}),(function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var t=n.theme,e=n.hasRadius,r=n.borderRadius;return e?t.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var t=n.borderColor;return n.theme.colors[t]}),(function(n){var t=n.theme,e=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(e&&!r&&!o)return"1px solid ".concat(t.colors[e])}),(function(n){var t=n.theme,e=n.shadow;return t.shadows[e]}),(function(n){return n.pointerEvents}),(function(n){var t=n._hover,e=n.theme;return t?t(e):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var t=n.left;return n.theme.spaces[t]||t}),(function(n){var t=n.right;return n.theme.spaces[t]||t}),(function(n){var t=n.top;return n.theme.spaces[t]||t}),(function(n){var t=n.bottom;return n.theme.spaces[t]||t}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var t=n.width;return n.theme.spaces[t]||t}),(function(n){var t=n.maxWidth;return n.theme.spaces[t]||t}),(function(n){var t=n.minWidth;return n.theme.spaces[t]||t}),(function(n){var t=n.height;return n.theme.spaces[t]||t}),(function(n){var t=n.maxHeight;return n.theme.spaces[t]||t}),(function(n){var t=n.minHeight;return n.theme.spaces[t]||t}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));m.defaultProps=h,m.propTypes=b},7:function(n,t,e){"use strict";var r=e(11),o=e.n(r),i=e(15),a=e.n(i);t.a=function(n,t,e){var r=t;if(Array.isArray(t)||"object"!==a()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,c=o()(i,3),u=c[0],s=c[1],d=c[2],l="".concat(n,": ").concat(e.spaces[u],";");return void 0!==s&&(l+="".concat(e.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(e.spaces[s],";\n        }")),void 0!==d&&(l+="".concat(e.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(e.spaces[d],";\n        }")),l}var f=e.spaces[r]||r;return"".concat(n,": ").concat(f,";")}}},8:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return a})),e.d(t,"e",(function(){return c})),e.d(t,"f",(function(){return u})),e.d(t,"g",(function(){return s})),e.d(t,"h",(function(){return d}));var r="alpha",o="beta",i="delta",a="epsilon",c="omega",u="pi",s="sigma",d=[r,o,i,a,c,u,s]},9:function(n,t,e){"use strict";e.r(t),e.d(t,"Typography",(function(){return v}));var r,o=e(3),i=e.n(o),a=e(2),c=e.n(a),u=e(13),s=e(1),d=e.n(s),l=e(0),f=e.n(l),p=e(8),h=function(n){return d.a.createElement("div",n)},b={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},g={ellipsis:f.a.bool,fontSize:f.a.oneOfType([f.a.number,f.a.string]),fontWeight:f.a.string,lineHeight:f.a.oneOfType([f.a.number,f.a.string]),textAlign:f.a.string,textColor:f.a.string,textTransform:f.a.string,variant:f.a.oneOf(p.h)};h.defaultProps=b,h.propTypes=g;var m={fontSize:!0,fontWeight:!0},v=c.a.span.withConfig({shouldForwardProp:function(n,t){return!m[n]&&t(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-align: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var t=n.theme,e=n.fontWeight;return t.fontWeights[e]}),(function(n){var t=n.theme,e=n.fontSize;return t.fontSizes[e]}),(function(n){var t=n.theme,e=n.lineHeight;return t.lineHeights[e]}),u.b,(function(n){return n.textAlign}),(function(n){return n.textTransform}),u.a,u.c);v.defaultProps=b,v.propTypes=g}})}));

/***/ }),

/***/ 93362:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=37)}({0:function(t,r){t.exports=e},37:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#4945FF",stroke:"#4945FF"}),n.createElement("path",{d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082zM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782z",fill:"#fff"}))}}})}));

/***/ }),

/***/ 95832:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=113)}({0:function(t,r){t.exports=e},113:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM3.6 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 22.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 11.28H18v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 22.8a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",fill:"#212134"}),n.createElement("path",{d:"M18.328 13.863L6.49 19.765l-.652-1.307 11.838-5.902.652 1.307zM18.358 10.078L6.398 4.115l-.646 1.294 11.961 5.963.645-1.294z",fill:"#212134"}),n.createElement("path",{d:"M18.323 18.83L6.252 12.813l-.643 1.29 12.071 6.019.643-1.29zM18.136 5.228L6.207 11.176l-.653-1.311 11.928-5.948.654 1.311z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 37685:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=114)}({0:function(t,r){t.exports=e},114:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17.76 11.28H6v1.44h11.76v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M18.129 10.699L9.782 4.523l-.86 1.162 8.347 6.177.86-1.163zM18.101 13.354L9.755 19.53l-.864-1.167 8.347-6.176.863 1.167z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 22.8a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 23379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=115)}({0:function(t,r){t.exports=e},115:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14.132a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 11.011h13.44v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M5.872 10.43l8.347-6.176.86 1.163-8.347 6.176-.86-1.162zM5.9 13.087l8.346 6.177.864-1.168-8.347-6.176-.864 1.167zM18.72 8.613l5.28 3.12-5.28 3.12v-6.24z",fill:"#212134"}),n.createElement("path",{d:"M12.72 2.633L18.82 2 16.43 7.649 12.72 2.633zM12.72 21.307l6.1.633-2.389-5.649-3.711 5.016z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 92197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=130)}({0:function(t,r){t.exports=e},130:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M6.24 11.28H18v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M5.871 10.699l8.347-6.176.86 1.162-8.347 6.177-.86-1.163zM5.899 13.354l8.346 6.176.864-1.167-8.347-6.176-.863 1.167z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 22.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 97314:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=131)}({0:function(t,r){t.exports=e},131:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 10.881H18v1.44H6.24v-1.44z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 53666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=132)}({0:function(t,r){t.exports=e},132:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.128 12.321a3.601 3.601 0 110-1.44H18.72v-2.4L24 11.6l-5.28 3.12v-2.4H7.128zM6 11.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 31447:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=138)}({0:function(t,r){t.exports=e},138:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#FDF4DC",stroke:"#FAE7B9"}),n.createElement("path",{d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 012.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 00.433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 00-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887z",fill:"#D9822F"}))}}})}));

/***/ }),

/***/ 17734:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=159)}({0:function(t,r){t.exports=e},159:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAF5FF",stroke:"#B8E1FF"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 00-.138-.302A.465.465 0 0018.82 8h-8.357a.465.465 0 00-.326.127.397.397 0 00-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 00.327-.127.397.397 0 00.138-.301zm2.785 2.713v.857a.397.397 0 01-.137.301.465.465 0 01-.327.128H10.464a.465.465 0 01-.326-.128.397.397 0 01-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 01.326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 01.137.302zm-1.857 3.574v.857a.397.397 0 01-.137.302.465.465 0 01-.327.127h-9.286a.465.465 0 01-.326-.127.397.397 0 01-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 01.326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 01.138.301z",fill:"#0C75AF"}))}}})}));

/***/ }),

/***/ 67772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=170)}({0:function(t,r){t.exports=e},170:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#0C75AF",stroke:"#0C75AF"}),n.createElement("path",{d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71zM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781z",fill:"#fff"}))}}})}));

/***/ }),

/***/ 68314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(78384);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5493);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_icons_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29685);
/* harmony import */ var _strapi_icons_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_icons_CollectionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93362);
/* harmony import */ var _strapi_icons_CollectionType__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_CollectionType__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99544);
/* harmony import */ var _strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_icons_Boolean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18561);
/* harmony import */ var _strapi_icons_Boolean__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Boolean__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strapi_icons_DynamicZone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71066);
/* harmony import */ var _strapi_icons_DynamicZone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_DynamicZone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_icons_Email__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74642);
/* harmony import */ var _strapi_icons_Email__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Email__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _strapi_icons_Enumeration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60178);
/* harmony import */ var _strapi_icons_Enumeration__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Enumeration__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strapi_icons_Json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60493);
/* harmony import */ var _strapi_icons_Json__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Json__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _strapi_icons_RichText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17734);
/* harmony import */ var _strapi_icons_RichText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_RichText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46966);
/* harmony import */ var _strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _strapi_icons_Password__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31447);
/* harmony import */ var _strapi_icons_Password__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Password__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _strapi_icons_Relation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81641);
/* harmony import */ var _strapi_icons_Relation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Relation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _strapi_icons_SingleType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67772);
/* harmony import */ var _strapi_icons_SingleType__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_SingleType__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _strapi_icons_Text__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(18772);
/* harmony import */ var _strapi_icons_Text__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Text__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _strapi_icons_Uid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10301);
/* harmony import */ var _strapi_icons_Uid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Uid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35020);
/* harmony import */ var _strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





















const iconByTypes = {
  biginteger: (_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default()),
  boolean: (_strapi_icons_Boolean__WEBPACK_IMPORTED_MODULE_5___default()),
  collectionType: (_strapi_icons_CollectionType__WEBPACK_IMPORTED_MODULE_3___default()),
  component: (_strapi_icons_Component__WEBPACK_IMPORTED_MODULE_2___default()),
  contentType: (_strapi_icons_CollectionType__WEBPACK_IMPORTED_MODULE_3___default()),
  date: (_strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4___default()),
  datetime: (_strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4___default()),
  decimal: (_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default()),
  dynamiczone: (_strapi_icons_DynamicZone__WEBPACK_IMPORTED_MODULE_6___default()),
  email: (_strapi_icons_Email__WEBPACK_IMPORTED_MODULE_7___default()),
  enum: (_strapi_icons_Enumeration__WEBPACK_IMPORTED_MODULE_8___default()),
  enumeration: (_strapi_icons_Enumeration__WEBPACK_IMPORTED_MODULE_8___default()),
  file: (_strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11___default()),
  files: (_strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11___default()),
  float: (_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default()),
  integer: (_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default()),
  json: (_strapi_icons_Json__WEBPACK_IMPORTED_MODULE_9___default()),
  JSON: (_strapi_icons_Json__WEBPACK_IMPORTED_MODULE_9___default()),
  media: (_strapi_icons_Media__WEBPACK_IMPORTED_MODULE_11___default()),
  number: (_strapi_icons_Number__WEBPACK_IMPORTED_MODULE_17___default()),
  password: (_strapi_icons_Password__WEBPACK_IMPORTED_MODULE_12___default()),
  relation: (_strapi_icons_Relation__WEBPACK_IMPORTED_MODULE_13___default()),
  richtext: (_strapi_icons_RichText__WEBPACK_IMPORTED_MODULE_10___default()),
  singleType: (_strapi_icons_SingleType__WEBPACK_IMPORTED_MODULE_14___default()),
  string: (_strapi_icons_Text__WEBPACK_IMPORTED_MODULE_15___default()),
  text: (_strapi_icons_Text__WEBPACK_IMPORTED_MODULE_15___default()),
  time: (_strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4___default()),
  timestamp: (_strapi_icons_Date__WEBPACK_IMPORTED_MODULE_4___default()),
  uid: (_strapi_icons_Uid__WEBPACK_IMPORTED_MODULE_16___default())
};
const IconBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_19__["default"])(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__.Box)`
  width: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18__.pxToRem)(32)};
  height: ${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18__.pxToRem)(24)};
  box-sizing: content-box;
`;
const AttributeIcon = (_a) => {
  var _b = _a, { type, customField } = _b, rest = __objRest(_b, ["type", "customField"]);
  const customFieldsRegistry = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_18__.useCustomFields)();
  let Compo = iconByTypes[type];
  if (customField) {
    const { icon } = customFieldsRegistry.get(customField);
    if (icon) {
      Compo = icon;
    }
  }
  if (!iconByTypes[type]) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconBox, __spreadProps(__spreadValues({
    as: Compo
  }, rest), {
    "aria-hidden": true
  }));
};
AttributeIcon.defaultProps = {
  customField: null
};
AttributeIcon.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().string.isRequired),
  customField: (prop_types__WEBPACK_IMPORTED_MODULE_20___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributeIcon);


/***/ }),

/***/ 7955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const DataManagerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManagerContext);


/***/ }),

/***/ 98422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const FormModalNavigationContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormModalNavigationContext);


/***/ }),

/***/ 13588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7955);


const useDataManager = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_DataManagerContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataManager);


/***/ }),

/***/ 26478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98422);


const useFormModalNavigation = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_FormModalNavigationContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormModalNavigation);


/***/ }),

/***/ 18391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(15482);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(78862);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/permissions.js
var permissions = __webpack_require__(57176);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pluginId.js
var pluginId = __webpack_require__(96124);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/DataManagerContext.js
var DataManagerContext = __webpack_require__(7955);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useFormModalNavigation.js
var useFormModalNavigation = __webpack_require__(26478);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/axiosInstance.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



const instance = axios_default().create({
  baseURL: `${""}/${pluginId/* default */.Z}`
});
instance.interceptors.request.use(
  (config) => __async(void 0, null, function* () {
    config.headers = {
      Authorization: `Bearer ${build.auth.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  }),
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    var _a;
    if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
      build.auth.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
/* harmony default export */ const axiosInstance = (instance);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getTrad.js
var getTrad = __webpack_require__(5002);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/makeUnique.js
var makeUnique = __webpack_require__(85169);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var lodash_get = __webpack_require__(27361);
var get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);
// EXTERNAL MODULE: ./node_modules/lodash/has.js
var has = __webpack_require__(18721);
var has_default = /*#__PURE__*/__webpack_require__.n(has);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
// EXTERNAL MODULE: ./node_modules/lodash/toLower.js
var toLower = __webpack_require__(7334);
var toLower_default = /*#__PURE__*/__webpack_require__.n(toLower);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(14276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(75146);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Tabs.js
var Tabs = __webpack_require__(11402);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(67826);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/hooks/useDataManager.js
var useDataManager = __webpack_require__(13588);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(43808);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AllowedTypesSelect/index.js





const options = [
  {
    label: "All",
    children: [
      { label: "images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)", value: "images" },
      { label: "videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)", value: "videos" },
      { label: "audios (MP3, WAV, OGG)", value: "audios" },
      { label: "files (CSV, ZIP, PDF, Excel, JSON, ...)", value: "files" }
    ]
  }
];
const AllowedTypesSelect = ({ intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const displayedValue = value === null || value.length === 0 ? formatMessage({ id: "global.none", defaultMessage: "None" }) : [...value].sort().map((v) => upperFirst_default()(v)).join(", ");
  const label = intlLabel.id ? formatMessage({ id: intlLabel.id, defaultMessage: intlLabel.defaultMessage }) : name;
  return /* @__PURE__ */ react.createElement(Select.MultiSelectNested, {
    id: "select1",
    label,
    customizeContent: () => displayedValue,
    onChange: (values) => {
      if (values.length > 0) {
        onChange({ target: { name, value: values, type: "allowed-types-select" } });
      } else {
        onChange({ target: { name, value: null, type: "allowed-types-select" } });
      }
    },
    options,
    value: value || []
  });
};
AllowedTypesSelect.defaultProps = {
  value: null
};
AllowedTypesSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).array])
};
/* harmony default export */ const components_AllowedTypesSelect = (AllowedTypesSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/isAllowedContentTypesForRelations.js
const isAllowedContentTypesForRelations = (contentType) => {
  return contentType.kind === "collectionType" && (contentType.restrictRelationsTo === null || Array.isArray(contentType.restrictRelationsTo) && contentType.restrictRelationsTo.length > 0);
};
/* harmony default export */ const utils_isAllowedContentTypesForRelations = (isAllowedContentTypesForRelations);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/index.js



// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(34626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/KeyboardNavigable.js
var KeyboardNavigable = __webpack_require__(65967);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeIcon/index.js
var AttributeIcon = __webpack_require__(68314);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(78384);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/OptionBoxWrapper/index.js


const BoxWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
    border: 1px solid ${({ theme }) => theme.colors.primary200};
  }
`;
/* harmony default export */ const OptionBoxWrapper = (BoxWrapper);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeOption/index.js










const AttributeOption = ({ type }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { onClickSelectField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    const step = type === "component" ? "1" : null;
    onClickSelectField({
      attributeType: type,
      step
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, {
    padding: 4,
    as: "button",
    hasRadius: true,
    type: "button",
    onClick: handleClick
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, {
    type
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage({ id: (0,getTrad/* default */.Z)(`attribute.${type}`), defaultMessage: type }))), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${type}.description`),
    defaultMessage: "A type for modeling data"
  }))))));
};
AttributeOption.defaultProps = {
  type: "text"
};
AttributeOption.propTypes = {
  type: (prop_types_default()).string
};
/* harmony default export */ const AttributeOptions_AttributeOption = (AttributeOption);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/utils/getPadding.js
const getPadding = (index) => {
  const isOdd = index % 2 === 1;
  const paddingLeft = isOdd ? 2 : 0;
  const paddingRight = isOdd ? 0 : 2;
  return { paddingLeft, paddingRight };
};
/* harmony default export */ const utils_getPadding = (getPadding);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/AttributeList/index.js








const AttributeList = ({ attributes }) => /* @__PURE__ */ react.createElement(KeyboardNavigable.KeyboardNavigable, {
  tagName: "button"
}, /* @__PURE__ */ react.createElement(Stack.Stack, {
  spacing: 8
}, attributes.map((attributeRow, index) => {
  return /* @__PURE__ */ react.createElement(Grid.Grid, {
    key: index,
    gap: 0
  }, attributeRow.map((attribute, index2) => {
    const { paddingLeft, paddingRight } = utils_getPadding(index2);
    return /* @__PURE__ */ react.createElement(Grid.GridItem, {
      key: attribute,
      col: 6,
      style: { height: "100%" }
    }, /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft,
      paddingRight,
      paddingBottom: 1,
      style: { height: "100%" }
    }, /* @__PURE__ */ react.createElement(AttributeOptions_AttributeOption, {
      type: attribute
    })));
  }));
})));
AttributeList.propTypes = {
  attributes: (prop_types_default()).array.isRequired
};
/* harmony default export */ const AttributeOptions_AttributeList = (AttributeList);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Link.js
var Link = __webpack_require__(85104);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/LinkButton.js
var LinkButton = __webpack_require__(60985);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Icon.js
var Icon = __webpack_require__(15804);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(80768);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/EmptyDocuments.js
var EmptyDocuments = __webpack_require__(85407);
var EmptyDocuments_default = /*#__PURE__*/__webpack_require__.n(EmptyDocuments);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/EmptyAttributes/index.js











const EmptyCard = (0,styled_components_browser_cjs["default"])(Box.Box)`
  background: ${({ theme }) => `linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${theme.colors.neutral150} 100%)`};
  opacity: 0.33;
`;
const EmptyCardGrid = () => {
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    wrap: "wrap",
    gap: 4
  }, [...Array(4)].map((_, idx) => {
    return /* @__PURE__ */ react.createElement(EmptyCard, {
      key: `empty-card-${idx}`,
      height: "138px",
      width: "375px",
      hasRadius: true
    });
  }));
};
const EmptyAttributes = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box.Box, {
    position: "relative"
  }, /* @__PURE__ */ react.createElement(EmptyCardGrid, null), /* @__PURE__ */ react.createElement(Box.Box, {
    position: "absolute",
    top: 6,
    width: "100%"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "center",
    justifyContent: "center",
    direction: "column"
  }, /* @__PURE__ */ react.createElement(Icon.Icon, {
    as: (EmptyDocuments_default()),
    color: "",
    width: "160px",
    height: "88px"
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 4
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    textAlign: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "p",
    textColor: "neutral600"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.heading"),
    defaultMessage: "Nothing in here yet."
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta",
    as: "p",
    textColor: "neutral600"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.sub-heading"),
    defaultMessage: "Find what you are looking for through a wide range of extensions."
  }))))), /* @__PURE__ */ react.createElement(LinkButton.LinkButton, {
    to: "/marketplace",
    variant: "secondary",
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.empty.button"),
    defaultMessage: "Add custom fields"
  })))));
};
/* harmony default export */ const AttributeOptions_EmptyAttributes = (EmptyAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldOption/index.js









const CustomFieldOption = ({ customFieldUid, customField }) => {
  const { type, intlLabel, intlDescription } = customField;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { onClickSelectCustomField } = (0,useFormModalNavigation/* default */.Z)();
  const handleClick = () => {
    onClickSelectCustomField({
      attributeType: type,
      customFieldUid
    });
  };
  return /* @__PURE__ */ react.createElement(OptionBoxWrapper, {
    padding: 4,
    as: "button",
    hasRadius: true,
    type: "button",
    onClick: handleClick
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, {
    type,
    customField: customFieldUid
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 4
  }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold"
  }, formatMessage(intlLabel))), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, formatMessage(intlDescription))))));
};
CustomFieldOption.propTypes = {
  customFieldUid: (prop_types_default()).string.isRequired,
  customField: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired,
    icon: (prop_types_default()).func,
    intlLabel: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired,
    intlDescription: prop_types_default().shape({
      id: (prop_types_default()).string.isRequired,
      defaultMessage: (prop_types_default()).string.isRequired
    }).isRequired
  }).isRequired
};
/* harmony default export */ const AttributeOptions_CustomFieldOption = (CustomFieldOption);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/CustomFieldsList/index.js












const CustomFieldsList = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const customFields = (0,build.useCustomFields)();
  const registeredCustomFields = Object.entries(customFields.getAll());
  if (!registeredCustomFields.length) {
    return /* @__PURE__ */ react.createElement(AttributeOptions_EmptyAttributes, null);
  }
  const sortedCustomFields = registeredCustomFields.sort(
    (a, b) => a[1].name > b[1].name ? 1 : -1
  );
  return /* @__PURE__ */ react.createElement(KeyboardNavigable.KeyboardNavigable, {
    tagName: "button"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 3
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 0
  }, sortedCustomFields.map(([uid, customField], index) => {
    const { paddingLeft, paddingRight } = utils_getPadding(index);
    return /* @__PURE__ */ react.createElement(Grid.GridItem, {
      key: uid,
      col: 6,
      style: { height: "100%" }
    }, /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft,
      paddingRight,
      paddingBottom: 1,
      style: { height: "100%" }
    }, /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldOption, {
      key: uid,
      customFieldUid: uid,
      customField
    })));
  })), /* @__PURE__ */ react.createElement(Link.Link, {
    href: "https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",
    isExternal: true
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("modalForm.tabs.custom.howToLink"),
    defaultMessage: "How to add custom fields"
  }))));
};
/* harmony default export */ const AttributeOptions_CustomFieldsList = (CustomFieldsList);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/AttributeOptions/index.js












const AttributeOptions = ({ attributes, forTarget, kind }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const defaultTabId = (0,getTrad/* default */.Z)("modalForm.tabs.default");
  const customTabId = (0,getTrad/* default */.Z)("modalForm.tabs.custom");
  const titleIdSuffix = forTarget.includes("component") ? "component" : kind;
  const titleId = (0,getTrad/* default */.Z)(`modalForm.sub-header.chooseAttribute.${titleIdSuffix}`);
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, {
    padding: 6
  }, /* @__PURE__ */ react.createElement(Tabs.TabGroup, {
    label: formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.tabs.label"),
      defaultMessage: "Default and Custom types tabs"
    }),
    id: "attribute-type-tabs",
    variant: "simple"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "beta",
    as: "h2"
  }, formatMessage({ id: titleId, defaultMessage: "Select a field" })), /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({ id: defaultTabId, defaultMessage: "Default" })), /* @__PURE__ */ react.createElement(Tabs.Tab, null, formatMessage({ id: customTabId, defaultMessage: "Custom" })))), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 6
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(AttributeOptions_AttributeList, {
    attributes
  })), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(AttributeOptions_CustomFieldsList, null)))));
};
AttributeOptions.propTypes = {
  attributes: (prop_types_default()).array.isRequired,
  forTarget: (prop_types_default()).string.isRequired,
  kind: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_AttributeOptions = (AttributeOptions);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Dialog.js
var Dialog = __webpack_require__(16758);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/ToggleInput.js
var ToggleInput = __webpack_require__(47857);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(51359);
var ExclamationMarkCircle_default = /*#__PURE__*/__webpack_require__.n(ExclamationMarkCircle);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DraftAndPublishToggle/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};












const TypographyTextAlign = (0,styled_components_browser_cjs["default"])(Typography.Typography)`
  text-align: center;
`;
const DraftAndPublishToggle = ({
  description,
  disabled,
  intlLabel,
  isCreating,
  name,
  onChange,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showWarning, setShowWarning] = (0,react.useState)(false);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    __spreadValues({}, intlLabel.values)
  ) : name;
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    __spreadValues({}, description.values)
  ) : "";
  const handleToggle = () => setShowWarning((prev) => !prev);
  const handleConfirm = () => {
    onChange({ target: { name, value: false } });
    handleToggle();
  };
  const handleChange = ({ target: { checked } }) => {
    if (!checked && !isCreating) {
      handleToggle();
      return;
    }
    onChange({ target: { name, value: checked } });
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ToggleInput.ToggleInput, {
    checked: value || false,
    disabled,
    hint,
    label,
    name,
    offLabel: formatMessage({
      id: "app.components.ToggleCheckbox.off-label",
      defaultMessage: "Off"
    }),
    onLabel: formatMessage({
      id: "app.components.ToggleCheckbox.on-label",
      defaultMessage: "On"
    }),
    onChange: handleChange
  }), showWarning && /* @__PURE__ */ react.createElement(Dialog.Dialog, {
    onClose: handleToggle,
    title: "Confirmation",
    isOpen: showWarning
  }, /* @__PURE__ */ react.createElement(Dialog.DialogBody, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null)
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(TypographyTextAlign, {
    id: "confirm-description"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.message"),
    defaultMessage: "If you disable the Draft/Publish system, your drafts will be deleted."
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    id: "confirm-description"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.second-message"),
    defaultMessage: "Are you sure you want to disable it?"
  }))))), /* @__PURE__ */ react.createElement(Dialog.DialogFooter, {
    startAction: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleToggle,
      variant: "tertiary"
    }, formatMessage({
      id: "components.popUpWarning.button.cancel",
      defaultMessage: "No, cancel"
    })),
    endAction: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "danger-light",
      onClick: handleConfirm
    }, formatMessage({
      id: (0,getTrad/* default */.Z)("popUpWarning.draft-publish.button.confirm"),
      defaultMessage: "Yes, disable"
    }))
  })));
};
DraftAndPublishToggle.defaultProps = {
  description: null,
  disabled: false,
  value: false
};
DraftAndPublishToggle.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).bool
};
/* harmony default export */ const components_DraftAndPublishToggle = (DraftAndPublishToggle);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(68115);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalHeader/index.js













const FormModalHeader = ({
  actionType,
  attributeName,
  attributeType,
  categoryName,
  contentTypeKind,
  dynamicZoneTarget,
  forTarget,
  modalType,
  targetUid,
  customFieldUid
}) => {
  var _a;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { modifiedData } = (0,useDataManager/* default */.Z)();
  let icon;
  let headers = [];
  const schema = ((_a = modifiedData == null ? void 0 : modifiedData[forTarget]) == null ? void 0 : _a[targetUid]) || (modifiedData == null ? void 0 : modifiedData[forTarget]) || null;
  let displayName = schema == null ? void 0 : schema.schema.displayName;
  if (modalType === "contentType") {
    icon = contentTypeKind;
  }
  if (["component", "editCategory"].includes(modalType)) {
    icon = "component";
  }
  const isCreatingMainSchema = ["component", "contentType"].includes(modalType);
  if (isCreatingMainSchema) {
    let headerId = (0,getTrad/* default */.Z)(`modalForm.component.header-${actionType}`);
    if (modalType === "contentType") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.${contentTypeKind}.header-create`);
    }
    if (actionType === "edit") {
      headerId = (0,getTrad/* default */.Z)(`modalForm.header-edit`);
    }
    return /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, {
      type: icon
    })), /* @__PURE__ */ react.createElement(Box.Box, {
      paddingLeft: 3
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      fontWeight: "bold",
      textColor: "neutral800",
      as: "h2",
      id: "title"
    }, formatMessage({ id: headerId }, { name: displayName })))));
  }
  headers = [
    {
      label: displayName,
      info: { category: (schema == null ? void 0 : schema.category) || null, name: schema == null ? void 0 : schema.schema.displayName }
    }
  ];
  if (modalType === "chooseAttribute") {
    icon = ["component", "components"].includes(forTarget) ? "component" : schema.schema.kind;
  }
  if (modalType === "addComponentToDynamicZone") {
    icon = "dynamiczone";
    headers.push({ label: dynamicZoneTarget });
  }
  if (modalType === "attribute" || modalType === "customField") {
    icon = attributeType;
    headers.push({ label: attributeName });
  }
  if (modalType === "editCategory") {
    const label = formatMessage({
      id: (0,getTrad/* default */.Z)("modalForm.header.categories"),
      defaultMessage: "Categories"
    });
    headers = [{ label }, { label: categoryName }];
  }
  const breadcrumbsLabel = headers.map(({ label }) => label).join(",");
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3
  }, /* @__PURE__ */ react.createElement(AttributeIcon/* default */.Z, {
    type: icon,
    customField: customFieldUid
  }), /* @__PURE__ */ react.createElement(Breadcrumbs.Breadcrumbs, {
    label: breadcrumbsLabel
  }, headers.map((header, index) => {
    var _a2;
    const label = upperFirst_default()(header.label);
    if (!label) {
      return null;
    }
    const key = `${header.label}.${index}`;
    if ((_a2 = header.info) == null ? void 0 : _a2.category) {
      const content = `${label} (${upperFirst_default()(header.info.category)} - ${upperFirst_default()(
        header.info.name
      )})`;
      return /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, {
        key
      }, content);
    }
    return /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, {
      key
    }, label);
  }))));
};
FormModalHeader.defaultProps = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  contentTypeKind: null,
  targetUid: null,
  customFieldUid: null
};
FormModalHeader.propTypes = {
  actionType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  categoryName: (prop_types_default()).string,
  contentTypeKind: (prop_types_default()).string,
  dynamicZoneTarget: (prop_types_default()).string,
  forTarget: prop_types_default().oneOf(["contentType", "component", "components"]),
  modalType: (prop_types_default()).string.isRequired,
  targetUid: (prop_types_default()).string,
  customFieldUid: (prop_types_default()).string
};
/* harmony default export */ const components_FormModalHeader = (FormModalHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalEndActions/index.js






const FormModalEndActions = ({
  categoryName,
  deleteCategory,
  deleteComponent,
  deleteContentType,
  isAttributeModal,
  isCustomFieldModal,
  isComponentAttribute,
  isComponentToDzModal,
  isContentTypeModal,
  isCreatingComponent,
  isCreatingComponentAttribute,
  isCreatingComponentInDz,
  isCreatingComponentWhileAddingAField,
  isCreatingContentType,
  isCreatingDz,
  isComponentModal,
  isDzAttribute,
  isEditingAttribute,
  isEditingCategory,
  isInFirstComponentStep,
  onSubmitAddComponentAttribute,
  onSubmitAddComponentToDz,
  onSubmitCreateContentType,
  onSubmitCreateComponent,
  onSubmitCreateDz,
  onSubmitEditAttribute,
  onSubmitEditCategory,
  onSubmitEditComponent,
  onSubmitEditContentType,
  onSubmitEditCustomFieldAttribute,
  onSubmitEditDz
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (isComponentToDzModal) {
    if (isCreatingComponentInDz) {
      return /* @__PURE__ */ react.createElement(Button.Button, {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentToDz(e, true);
        },
        startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
      }, formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
        defaultMessage: "Add first field to the component"
      }));
    }
    return /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "default",
      type: "submit",
      onClick: (e) => {
        e.preventDefault();
        onSubmitAddComponentToDz(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    }));
  }
  if (isAttributeModal && isDzAttribute && !isCreatingDz) {
    return /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "default",
      type: "submit",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditDz(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    }));
  }
  if (isAttributeModal && isDzAttribute && isCreatingDz) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      type: "submit",
      onClick: (e) => {
        e.preventDefault();
        onSubmitCreateDz(e, true);
      },
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,getTrad/* default */.Z)("form.button.add-components-to-dynamiczone"),
      defaultMessage: "Add components to the zone"
    })));
  }
  if (isAttributeModal && isComponentAttribute) {
    if (isInFirstComponentStep) {
      return /* @__PURE__ */ react.createElement(Button.Button, {
        variant: "secondary",
        type: "submit",
        onClick: (e) => {
          e.preventDefault();
          onSubmitAddComponentAttribute(e, true);
        }
      }, isCreatingComponentAttribute ? formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.configure-component"),
        defaultMessage: "Configure the component"
      }) : formatMessage({
        id: (0,getTrad/* default */.Z)("form.button.select-component"),
        defaultMessage: "Configure the component"
      }));
    }
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      type: "submit",
      onClick: (e) => {
        e.preventDefault();
        onSubmitAddComponentAttribute(e, true);
      },
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, isCreatingComponentWhileAddingAField ? formatMessage({
      id: (0,getTrad/* default */.Z)("form.button.add-first-field-to-created-component"),
      defaultMessage: "Add first field to the component"
    }) : formatMessage({
      id: (0,getTrad/* default */.Z)("form.button.add-field"),
      defaultMessage: "Add another field"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "default",
      type: "button",
      onClick: (e) => {
        e.preventDefault();
        onSubmitAddComponentAttribute(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    })));
  }
  if (isAttributeModal && !isComponentAttribute && !isDzAttribute) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      type: isEditingAttribute ? "button" : "submit",
      variant: "secondary",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditAttribute(e, true);
      },
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,getTrad/* default */.Z)("form.button.add-field"),
      defaultMessage: "Add another field"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      type: isEditingAttribute ? "submit" : "button",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditAttribute(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    })));
  }
  if (isContentTypeModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingContentType && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      type: "button",
      variant: "danger",
      onClick: (e) => {
        e.preventDefault();
        deleteContentType();
      }
    }, formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditContentType(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    }))), isCreatingContentType && /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      variant: "secondary",
      onClick: (e) => {
        e.preventDefault();
        onSubmitCreateContentType(e, true);
      }
    }, formatMessage({
      id: "global.continue",
      defaultMessage: "Continue"
    })));
  }
  if (isComponentModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, !isCreatingComponent && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      type: "button",
      variant: "danger",
      onClick: (e) => {
        e.preventDefault();
        deleteComponent();
      }
    }, formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditComponent(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    }))), isCreatingComponent && /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      variant: "secondary",
      onClick: (e) => {
        e.preventDefault();
        onSubmitCreateComponent(e, true);
      }
    }, formatMessage({
      id: "global.continue",
      defaultMessage: "Continue"
    })));
  }
  if (isEditingCategory) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      type: "button",
      variant: "danger",
      onClick: (e) => {
        e.preventDefault();
        deleteCategory(categoryName);
      }
    }, formatMessage({
      id: "global.delete",
      defaultMessage: "Delete"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditCategory(e);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "finish"
    })));
  }
  if (isCustomFieldModal) {
    return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Button.Button, {
      type: isEditingAttribute ? "button" : "submit",
      variant: "secondary",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditCustomFieldAttribute(e, true);
      },
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null)
    }, formatMessage({
      id: (0,getTrad/* default */.Z)("form.button.add-field"),
      defaultMessage: "Add another field"
    })), /* @__PURE__ */ react.createElement(Button.Button, {
      type: isEditingAttribute ? "submit" : "button",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        onSubmitEditCustomFieldAttribute(e, false);
      }
    }, formatMessage({
      id: "global.finish",
      defaultMessage: "Finish"
    })));
  }
  return null;
};
FormModalEndActions.defaultProps = {
  categoryName: null
};
FormModalEndActions.propTypes = {
  categoryName: (prop_types_default()).string,
  deleteCategory: (prop_types_default()).func.isRequired,
  deleteComponent: (prop_types_default()).func.isRequired,
  deleteContentType: (prop_types_default()).func.isRequired,
  isAttributeModal: (prop_types_default()).bool.isRequired,
  isCustomFieldModal: (prop_types_default()).bool.isRequired,
  isComponentAttribute: (prop_types_default()).bool.isRequired,
  isComponentModal: (prop_types_default()).bool.isRequired,
  isComponentToDzModal: (prop_types_default()).bool.isRequired,
  isContentTypeModal: (prop_types_default()).bool.isRequired,
  isCreatingComponent: (prop_types_default()).bool.isRequired,
  isCreatingComponentAttribute: (prop_types_default()).bool.isRequired,
  isCreatingComponentInDz: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  isCreatingContentType: (prop_types_default()).bool.isRequired,
  isCreatingDz: (prop_types_default()).bool.isRequired,
  isDzAttribute: (prop_types_default()).bool.isRequired,
  isEditingAttribute: (prop_types_default()).bool.isRequired,
  isEditingCategory: (prop_types_default()).bool.isRequired,
  isInFirstComponentStep: (prop_types_default()).bool.isRequired,
  onSubmitAddComponentAttribute: (prop_types_default()).func.isRequired,
  onSubmitAddComponentToDz: (prop_types_default()).func.isRequired,
  onSubmitCreateContentType: (prop_types_default()).func.isRequired,
  onSubmitCreateComponent: (prop_types_default()).func.isRequired,
  onSubmitCreateDz: (prop_types_default()).func.isRequired,
  onSubmitEditAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditCategory: (prop_types_default()).func.isRequired,
  onSubmitEditComponent: (prop_types_default()).func.isRequired,
  onSubmitEditContentType: (prop_types_default()).func.isRequired,
  onSubmitEditCustomFieldAttribute: (prop_types_default()).func.isRequired,
  onSubmitEditDz: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_FormModalEndActions = (FormModalEndActions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/getModalTitleSubHeader.js

const getModalTitleSubHeader = ({ modalType, forTarget, kind, actionType, step }) => {
  switch (modalType) {
    case "chooseAttribute":
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.chooseAttribute.${forTarget.includes("component") ? "component" : kind || "collectionType"}`
      );
    case "attribute": {
      return (0,getTrad/* default */.Z)(
        `modalForm.sub-header.attribute.${actionType}${step !== "null" && step !== null && actionType !== "edit" ? ".step" : ""}`
      );
    }
    case "customField": {
      return (0,getTrad/* default */.Z)(`modalForm.sub-header.attribute.${actionType}`);
    }
    case "addComponentToDynamicZone":
      return (0,getTrad/* default */.Z)("modalForm.sub-header.addComponentToDynamicZone");
    default:
      return (0,getTrad/* default */.Z)("configurations");
  }
};
/* harmony default export */ const FormModalSubHeader_getModalTitleSubHeader = (getModalTitleSubHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalSubHeader/index.js








const FormModalSubHeader = ({
  actionType,
  modalType,
  forTarget,
  kind,
  step,
  attributeType,
  attributeName,
  customField
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const intlLabel = modalType === "customField" ? customField.intlLabel : { id: (0,getTrad/* default */.Z)(`attribute.${attributeType}`) };
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    direction: "column",
    alignItems: "flex-start",
    paddingBottom: 2,
    gap: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    as: "h2",
    variant: "beta"
  }, formatMessage(
    {
      id: FormModalSubHeader_getModalTitleSubHeader({
        actionType,
        forTarget,
        kind,
        step,
        modalType
      }),
      defaultMessage: "Add new field"
    },
    {
      type: upperFirst_default()(formatMessage(intlLabel)),
      name: upperFirst_default()(attributeName),
      step
    }
  )), /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "neutral600"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)(`attribute.${attributeType}.description`),
    defaultMessage: "A type for modeling data"
  })));
};
FormModalSubHeader.defaultProps = {
  actionType: null,
  modalType: null,
  forTarget: null,
  kind: null,
  step: null,
  attributeType: null,
  attributeName: null,
  customField: null
};
FormModalSubHeader.propTypes = {
  actionType: (prop_types_default()).string,
  modalType: (prop_types_default()).string,
  forTarget: (prop_types_default()).string,
  kind: (prop_types_default()).string,
  step: (prop_types_default()).string,
  attributeType: (prop_types_default()).string,
  attributeName: (prop_types_default()).string,
  customField: (prop_types_default()).object
};
/* harmony default export */ const components_FormModalSubHeader = (FormModalSubHeader);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanDefaultValueSelect/index.js
var BooleanDefaultValueSelect_defProp = Object.defineProperty;
var BooleanDefaultValueSelect_getOwnPropSymbols = Object.getOwnPropertySymbols;
var BooleanDefaultValueSelect_hasOwnProp = Object.prototype.hasOwnProperty;
var BooleanDefaultValueSelect_propIsEnum = Object.prototype.propertyIsEnumerable;
var BooleanDefaultValueSelect_defNormalProp = (obj, key, value) => key in obj ? BooleanDefaultValueSelect_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var BooleanDefaultValueSelect_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (BooleanDefaultValueSelect_hasOwnProp.call(b, prop))
      BooleanDefaultValueSelect_defNormalProp(a, prop, b[prop]);
  if (BooleanDefaultValueSelect_getOwnPropSymbols)
    for (var prop of BooleanDefaultValueSelect_getOwnPropSymbols(b)) {
      if (BooleanDefaultValueSelect_propIsEnum.call(b, prop))
        BooleanDefaultValueSelect_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const BooleanDefaultValueSelect = ({ intlLabel, name, options, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    BooleanDefaultValueSelect_spreadValues({}, intlLabel.values)
  ) : name;
  const handleChange = (value2) => {
    let nextValue = "";
    if (value2 === "true") {
      nextValue = true;
    }
    if (value2 === "false") {
      nextValue = false;
    }
    onChange({ target: { name, value: nextValue, type: "select-default-boolean" } });
  };
  return /* @__PURE__ */ react.createElement(Select.Select, {
    label,
    id: name,
    name,
    onChange: handleChange,
    value: (value === null ? "" : value).toString()
  }, options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
    return /* @__PURE__ */ react.createElement(Select.Option, {
      key,
      value: value2,
      disabled,
      hidden
    }, intlLabel2.defaultMessage);
  }));
};
BooleanDefaultValueSelect.defaultProps = {
  value: null
};
BooleanDefaultValueSelect.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).any
};
/* harmony default export */ const components_BooleanDefaultValueSelect = (BooleanDefaultValueSelect);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/themes.js
var themes = __webpack_require__(12871);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/components.js




const Wrapper = (0,styled_components_browser_cjs["default"])(Stack.Stack)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,themes.inputFocusStyle)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    will-change: transform, opacity;
    background: ${({ theme }) => theme.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({ theme }) => theme.colors.neutral0};
      width: ${({ theme }) => theme.spaces[5]};
      height: ${({ theme }) => theme.spaces[5]};
      border: solid 1px ${({ theme }) => theme.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({ theme }) => theme.spaces[3]};
        height: ${({ theme }) => theme.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({ theme }) => theme.colors.primary100};
    ${Typography.Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }
    border: 1px solid ${({ theme }) => theme.colors.primary200};
    .checkmark {
      border: solid 1px ${({ theme }) => theme.colors.primary600};
      &::after {
        background: ${({ theme }) => theme.colors.primary600};
        transform: scale(1);
      }
    }
  }
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CustomRadioGroup/index.js








const CustomRadioGroup = ({ intlLabel, name, onChange, radios, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral800",
    htmlFor: name,
    as: "label"
  }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(Wrapper, {
    horizontal: true,
    spacing: 4,
    style: { alignItems: "stretch" }
  }, radios.map((radio) => {
    return /* @__PURE__ */ react.createElement("label", {
      htmlFor: radio.value.toString(),
      key: radio.value,
      className: "container"
    }, /* @__PURE__ */ react.createElement("input", {
      id: radio.value.toString(),
      name,
      className: "option-input",
      checked: radio.value === value,
      value: radio.value,
      key: radio.value,
      onChange,
      type: "radio"
    }), /* @__PURE__ */ react.createElement(Box.Box, {
      className: "option",
      padding: 4
    }, /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(Box.Box, {
      paddingRight: 4
    }, /* @__PURE__ */ react.createElement("span", {
      className: "checkmark"
    })), /* @__PURE__ */ react.createElement(Stack.Stack, {
      spacing: 2
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      fontWeight: "bold"
    }, formatMessage(radio.title)), /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "pi",
      textColor: "neutral600"
    }, formatMessage(radio.description))))));
  })));
};
CustomRadioGroup.defaultProps = {
  radios: []
};
CustomRadioGroup.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  radios: prop_types_default().arrayOf(
    prop_types_default().shape({
      title: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      description: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }),
      value: (prop_types_default()).any.isRequired
    })
  ),
  value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).bool]).isRequired
};
/* harmony default export */ const components_CustomRadioGroup = (CustomRadioGroup);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/BooleanRadioGroup/index.js
var BooleanRadioGroup_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var BooleanRadioGroup_getOwnPropSymbols = Object.getOwnPropertySymbols;
var BooleanRadioGroup_hasOwnProp = Object.prototype.hasOwnProperty;
var BooleanRadioGroup_propIsEnum = Object.prototype.propertyIsEnumerable;
var BooleanRadioGroup_defNormalProp = (obj, key, value) => key in obj ? BooleanRadioGroup_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var BooleanRadioGroup_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (BooleanRadioGroup_hasOwnProp.call(b, prop))
      BooleanRadioGroup_defNormalProp(a, prop, b[prop]);
  if (BooleanRadioGroup_getOwnPropSymbols)
    for (var prop of BooleanRadioGroup_getOwnPropSymbols(b)) {
      if (BooleanRadioGroup_propIsEnum.call(b, prop))
        BooleanRadioGroup_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (BooleanRadioGroup_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && BooleanRadioGroup_getOwnPropSymbols)
    for (var prop of BooleanRadioGroup_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && BooleanRadioGroup_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const BooleanRadioGroup = (_a) => {
  var _b = _a, { onChange, name } = _b, rest = __objRest(_b, ["onChange", "name"]);
  const handleChange = (e) => {
    const checked = e.target.value !== "false";
    onChange({ target: { name, value: checked, type: "boolean-radio-group" } });
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, __spreadProps(BooleanRadioGroup_spreadValues({}, rest), {
    name,
    onChange: handleChange
  }));
};
BooleanRadioGroup.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_BooleanRadioGroup = (BooleanRadioGroup);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Checkbox.js
var Checkbox = __webpack_require__(81325);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/NumberInput.js
var NumberInput = __webpack_require__(97377);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(55967);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/CheckboxWithNumberField/index.js
var CheckboxWithNumberField_defProp = Object.defineProperty;
var CheckboxWithNumberField_getOwnPropSymbols = Object.getOwnPropertySymbols;
var CheckboxWithNumberField_hasOwnProp = Object.prototype.hasOwnProperty;
var CheckboxWithNumberField_propIsEnum = Object.prototype.propertyIsEnumerable;
var CheckboxWithNumberField_defNormalProp = (obj, key, value) => key in obj ? CheckboxWithNumberField_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var CheckboxWithNumberField_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (CheckboxWithNumberField_hasOwnProp.call(b, prop))
      CheckboxWithNumberField_defNormalProp(a, prop, b[prop]);
  if (CheckboxWithNumberField_getOwnPropSymbols)
    for (var prop of CheckboxWithNumberField_getOwnPropSymbols(b)) {
      if (CheckboxWithNumberField_propIsEnum.call(b, prop))
        CheckboxWithNumberField_defNormalProp(a, prop, b[prop]);
    }
  return a;
};








const CheckboxWithNumberField = ({ error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showInput, setShowInput] = (0,react.useState)(!!value || value === 0);
  const label = intlLabel.id ? formatMessage(
    { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
    CheckboxWithNumberField_spreadValues({}, intlLabel.values)
  ) : name;
  const type = modifiedData.type === "biginteger" ? "text" : "number";
  const disabled = !modifiedData.type;
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 2
  }, /* @__PURE__ */ react.createElement(Checkbox.Checkbox, {
    id: name,
    name,
    onValueChange: (value2) => {
      const initValue = type === "text" ? "0" : 0;
      const nextValue = value2 ? initValue : null;
      onChange({ target: { name, value: nextValue } });
      setShowInput((prev) => !prev);
    },
    value: showInput
  }, label), showInput && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 6,
    style: { maxWidth: "200px" }
  }, type === "text" ? /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    "aria-label": label,
    disabled,
    error: errorMessage,
    id: name,
    name,
    onChange,
    value: value === null ? "" : value
  }) : /* @__PURE__ */ react.createElement(NumberInput.NumberInput, {
    "aria-label": label,
    disabled,
    error: errorMessage,
    id: name,
    name,
    onValueChange: (value2) => {
      onChange({ target: { name, value: value2, type } });
    },
    value: value || 0
  })));
};
CheckboxWithNumberField.defaultProps = {
  error: null,
  value: null
};
CheckboxWithNumberField.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: prop_types_default().oneOfType([
    (prop_types_default()).string,
    (prop_types_default()).object,
    (prop_types_default()).bool,
    (prop_types_default()).number
  ])
};
/* harmony default export */ const components_CheckboxWithNumberField = (CheckboxWithNumberField);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeRadioGroup/index.js
var ContentTypeRadioGroup_defProp = Object.defineProperty;
var ContentTypeRadioGroup_defProps = Object.defineProperties;
var ContentTypeRadioGroup_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var ContentTypeRadioGroup_getOwnPropSymbols = Object.getOwnPropertySymbols;
var ContentTypeRadioGroup_hasOwnProp = Object.prototype.hasOwnProperty;
var ContentTypeRadioGroup_propIsEnum = Object.prototype.propertyIsEnumerable;
var ContentTypeRadioGroup_defNormalProp = (obj, key, value) => key in obj ? ContentTypeRadioGroup_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var ContentTypeRadioGroup_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (ContentTypeRadioGroup_hasOwnProp.call(b, prop))
      ContentTypeRadioGroup_defNormalProp(a, prop, b[prop]);
  if (ContentTypeRadioGroup_getOwnPropSymbols)
    for (var prop of ContentTypeRadioGroup_getOwnPropSymbols(b)) {
      if (ContentTypeRadioGroup_propIsEnum.call(b, prop))
        ContentTypeRadioGroup_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var ContentTypeRadioGroup_spreadProps = (a, b) => ContentTypeRadioGroup_defProps(a, ContentTypeRadioGroup_getOwnPropDescs(b));
var ContentTypeRadioGroup_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (ContentTypeRadioGroup_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && ContentTypeRadioGroup_getOwnPropSymbols)
    for (var prop of ContentTypeRadioGroup_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && ContentTypeRadioGroup_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const ContentTypeRadioGroup = (_a) => {
  var _b = _a, { onChange } = _b, rest = ContentTypeRadioGroup_objRest(_b, ["onChange"]);
  const toggleNotification = (0,build.useNotification)();
  const handleChange = (e) => {
    toggleNotification({
      type: "info",
      message: {
        id: (0,getTrad/* default */.Z)("contentType.kind.change.warning"),
        defaultMessage: "You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."
      }
    });
    onChange(e);
  };
  return /* @__PURE__ */ react.createElement(components_CustomRadioGroup, ContentTypeRadioGroup_spreadProps(ContentTypeRadioGroup_spreadValues({}, rest), {
    onChange: handleChange
  }));
};
ContentTypeRadioGroup.propTypes = {
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_ContentTypeRadioGroup = (ContentTypeRadioGroup);

// EXTERNAL MODULE: ./node_modules/react-window/dist/index.cjs.js
var index_cjs = __webpack_require__(88180);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Searchbar.js
var Searchbar = __webpack_require__(21263);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(30741);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Search.js
var Search = __webpack_require__(57465);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(67814);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/utils/getIndexFromColAndRow.js
const getIndexFromColAndRow = (columnIndex, rowIndex, numCols) => {
  return columnIndex + rowIndex * numCols;
};

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/Cell.js


const Cell = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  svg {
    z-index: 2;
    color: ${({ isSelected, theme }) => isSelected ? theme.colors.primary600 : theme.colors.neutral300};
  }
  ${({ isSelected, theme }) => {
  if (isSelected) {
    return `
      &::after {
        content: '';
        position: absolute;
        top: 8px;
        left: 8px;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        background-color: ${theme.colors.primary200};
        z-index: 1;
      }
    `;
  }
  return "";
}}
`;
/* harmony default export */ const ComponentIconPicker_Cell = (Cell);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ComponentIconPicker/index.js
















const CELL_WIDTH = 42;
const COLUMN_COUNT = 18;
const ComponentIconPicker = ({ error, intlLabel, name, onChange, value }) => {
  const { allIcons } = (0,useDataManager/* default */.Z)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const searchWrapperRef = (0,react.useRef)();
  const [showSearch, setShowSearch] = (0,react.useState)(false);
  const [search, setSearch] = (0,react.useState)("");
  const [icons, setIcons] = (0,react.useState)(allIcons);
  const toggleSearch = () => setShowSearch((prev) => !prev);
  (0,react.useEffect)(() => {
    if (showSearch) {
      searchWrapperRef.current.querySelector("input").focus();
    }
  }, [showSearch]);
  const handleChangeSearch = ({ target: { value: value2 } }) => {
    setSearch(value2);
    setIcons(() => allIcons.filter((icon) => icon.includes(value2)));
  };
  const IconRenderer = ({ columnIndex, rowIndex, style }) => {
    const icon = icons[getIndexFromColAndRow(columnIndex, rowIndex, COLUMN_COUNT)];
    return /* @__PURE__ */ react.createElement("div", {
      style,
      key: `col-${columnIndex}`
    }, icon && /* @__PURE__ */ react.createElement(ComponentIconPicker_Cell, {
      style: { width: "100%", height: "100%" },
      alignItems: "center",
      justifyContent: "center",
      onClick: () => {
        onChange({ target: { name, value: icon } });
      },
      isSelected: icon === value,
      as: "button",
      type: "button"
    }, /* @__PURE__ */ react.createElement(index_es/* FontAwesomeIcon */.G, {
      icon
    })));
  };
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral800",
    htmlFor: name,
    as: "label"
  }, formatMessage(intlLabel)), showSearch ? /* @__PURE__ */ react.createElement("div", {
    ref: searchWrapperRef,
    style: { width: 206 }
  }, /* @__PURE__ */ react.createElement(Searchbar.Searchbar, {
    name: "searchbar",
    onBlur: () => {
      if (!search) {
        toggleSearch();
      }
    },
    onClear: () => {
      setSearch("");
      setIcons(allIcons);
      toggleSearch();
    },
    value: search,
    onChange: handleChangeSearch,
    clearLabel: "Clearing the icon search",
    placeholder: formatMessage({
      id: (0,getTrad/* default */.Z)("ComponentIconPicker.search.placeholder"),
      defaultMessage: "Search for an icon"
    }),
    size: "S"
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("ComponentIconPicker.search.placeholder"),
    defaultMessage: "Search for an icon"
  }))) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: toggleSearch,
    "aria-label": "Edit",
    icon: /* @__PURE__ */ react.createElement((Search_default()), null),
    noBorder: true
  })), /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 1,
    background: "neutral100",
    borderColor: error ? "danger600" : "",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(index_cjs/* FixedSizeGrid */.Ym, {
    columnCount: COLUMN_COUNT,
    columnWidth: CELL_WIDTH,
    height: 132,
    rowHeight: CELL_WIDTH,
    rowCount: Math.ceil(icons.length / COLUMN_COUNT),
    width: CELL_WIDTH * COLUMN_COUNT
  }, IconRenderer)), error && /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    id: `${name}-error`,
    textColor: "danger600",
    "data-strapi-field-error": true
  }, errorMessage))));
};
ComponentIconPicker.defaultProps = {
  error: null
};
ComponentIconPicker.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ComponentIconPicker = (ComponentIconPicker);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/getRelationType.js
var getRelationType = __webpack_require__(1734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/SimpleMenu.js
var SimpleMenu = __webpack_require__(33097);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/constants.js
var constants = __webpack_require__(59015);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/RelationTargetPicker/index.js








const RelationTargetPicker = ({ oneThatIsCreatingARelationWithAnother, target }) => {
  const { contentTypes, sortedContentTypesList } = (0,useDataManager/* default */.Z)();
  const dispatch = (0,lib.useDispatch)();
  const allowedContentTypesForRelation = sortedContentTypesList.filter(
    utils_isAllowedContentTypesForRelations
  );
  const plugin = get_default()(contentTypes, [target, "plugin"], null);
  const targetFriendlyName = get_default()(contentTypes, [target, "schema", "displayName"], "error");
  return /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, {
    id: "label",
    label: `${targetFriendlyName}
    ${plugin ? `(from: ${plugin})` : ""}`
  }, allowedContentTypesForRelation.map(({ uid, title, restrictRelationsTo, plugin: plugin2 }) => {
    const handleChange = () => {
      const selectedContentTypeFriendlyName = plugin2 ? `${plugin2}_${title}` : title;
      dispatch({
        type: constants/* ON_CHANGE_RELATION_TARGET */.aG,
        target: {
          value: uid,
          oneThatIsCreatingARelationWithAnother,
          selectedContentTypeFriendlyName,
          targetContentTypeAllowedRelations: restrictRelationsTo
        }
      });
    };
    return /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, {
      key: uid,
      onClick: handleChange
    }, title, "\xA0", plugin2 && /* @__PURE__ */ react.createElement(react.Fragment, null, "(from: ", plugin2, ")"));
  }));
};
RelationTargetPicker.defaultProps = {
  target: null
};
RelationTargetPicker.propTypes = {
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  target: (prop_types_default()).string
};
/* harmony default export */ const RelationField_RelationTargetPicker = (RelationTargetPicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationField/index.js









const RelationFormBox = ({
  disabled,
  error,
  header,
  isMain,
  name,
  onChange,
  oneThatIsCreatingARelationWithAnother,
  target,
  value
}) => {
  return /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100",
    hasRadius: true,
    borderColor: "neutral200"
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingTop: isMain ? 4 : 1,
    paddingBottom: isMain ? 3 : 1,
    justifyContent: "center"
  }, isMain ? /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold",
    textColor: "neutral800"
  }, header) : /* @__PURE__ */ react.createElement(RelationField_RelationTargetPicker, {
    target,
    oneThatIsCreatingARelationWithAnother
  })), /* @__PURE__ */ react.createElement(Divider.Divider, {
    background: "neutral200"
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 4
  }, /* @__PURE__ */ react.createElement(build.GenericInput, {
    disabled,
    error: (error == null ? void 0 : error.id) || null,
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.defineRelation.fieldName"),
      defaultMessage: "Field name"
    },
    name,
    onChange,
    type: "text",
    value
  })));
};
RelationFormBox.defaultProps = {
  disabled: false,
  error: null,
  header: null,
  isMain: false,
  onChange() {
  },
  oneThatIsCreatingARelationWithAnother: null,
  target: null,
  value: ""
};
RelationFormBox.propTypes = {
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).object,
  header: (prop_types_default()).string,
  isMain: (prop_types_default()).bool,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string,
  target: (prop_types_default()).string,
  value: (prop_types_default()).string
};
/* harmony default export */ const RelationField = (RelationFormBox);

// EXTERNAL MODULE: ./node_modules/lodash/truncate.js
var truncate = __webpack_require__(39138);
var truncate_default = /*#__PURE__*/__webpack_require__.n(truncate);
// EXTERNAL MODULE: ./node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__(23450);
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/OneToOne.js
var OneToOne = __webpack_require__(97314);
var OneToOne_default = /*#__PURE__*/__webpack_require__.n(OneToOne);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/OneWay.js
var OneWay = __webpack_require__(53666);
var OneWay_default = /*#__PURE__*/__webpack_require__.n(OneWay);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ManyWays.js
var ManyWays = __webpack_require__(23379);
var ManyWays_default = /*#__PURE__*/__webpack_require__.n(ManyWays);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/OneToMany.js
var OneToMany = __webpack_require__(92197);
var OneToMany_default = /*#__PURE__*/__webpack_require__.n(OneToMany);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ManyToOne.js
var ManyToOne = __webpack_require__(37685);
var ManyToOne_default = /*#__PURE__*/__webpack_require__.n(ManyToOne);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ManyToMany.js
var ManyToMany = __webpack_require__(95832);
var ManyToMany_default = /*#__PURE__*/__webpack_require__.n(ManyToMany);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/components.js



const components_Wrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary600};
    z-index: 0;
  }
`;
const IconWrapper = (0,styled_components_browser_cjs["default"])(Box.Box)`
  background: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary100" : "neutral0"]};
  border: 1px solid
    ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral200"]};
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({ theme, isSelected }) => theme.colors[isSelected ? "primary700" : "neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
const InfosWrapper = (0,styled_components_browser_cjs["default"])(Flex.Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/RelationNaturePicker/index.js





















const relations = {
  oneWay: (OneWay_default()),
  oneToOne: (OneToOne_default()),
  oneToMany: (OneToMany_default()),
  manyToOne: (ManyToOne_default()),
  manyToMany: (ManyToMany_default()),
  manyWay: (ManyWays_default())
};
const RelationNaturePicker = ({
  naturePickerType,
  oneThatIsCreatingARelationWithAnother,
  relationType,
  target
}) => {
  const dispatch = (0,lib.useDispatch)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { contentTypes, modifiedData } = (0,useDataManager/* default */.Z)();
  const ctRelations = ["oneWay", "oneToOne", "oneToMany", "manyToOne", "manyToMany", "manyWay"];
  const componentRelations = ["oneWay", "manyWay"];
  const dataType = naturePickerType === "contentType" ? get_default()(modifiedData, [naturePickerType, "schema", "kind"], "") : naturePickerType;
  const relationsType = dataType === "collectionType" ? ctRelations : componentRelations;
  const areDisplayedNamesInverted = relationType === "manyToOne";
  const targetLabel = get_default()(contentTypes, [target, "schema", "displayName"], "unknown");
  const leftTarget = areDisplayedNamesInverted ? targetLabel : oneThatIsCreatingARelationWithAnother;
  const rightTarget = areDisplayedNamesInverted ? oneThatIsCreatingARelationWithAnother : targetLabel;
  const leftDisplayedValue = pluralize_default()(leftTarget, relationType === "manyToMany" ? 2 : 1);
  const restrictedRelations = get_default()(contentTypes, [target, "schema", "restrictRelationsTo"], null);
  const rightDisplayedValue = pluralize_default()(
    rightTarget,
    ["manyToMany", "oneToMany", "manyToOne", "manyWay"].includes(relationType) ? 2 : 1
  );
  if (!relationType) {
    return null;
  }
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    style: { flex: 1 }
  }, /* @__PURE__ */ react.createElement(components_Wrapper, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 1,
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(KeyboardNavigable.KeyboardNavigable, {
    tagName: "button"
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 3,
    horizontal: true
  }, relationsType.map((relation) => {
    const Asset = relations[relation];
    const isEnabled = restrictedRelations === null || restrictedRelations.includes(relation);
    return /* @__PURE__ */ react.createElement(IconWrapper, {
      as: "button",
      isSelected: relationType === relation,
      disabled: !isEnabled,
      key: relation,
      onClick: () => {
        if (isEnabled) {
          dispatch({
            type: constants/* ON_CHANGE_RELATION_TYPE */.QQ,
            target: {
              oneThatIsCreatingARelationWithAnother,
              targetContentType: target,
              value: relation
            }
          });
        }
      },
      padding: 2,
      type: "button"
    }, /* @__PURE__ */ react.createElement(Asset, {
      key: relation
    }));
  }))))), /* @__PURE__ */ react.createElement(InfosWrapper, {
    justifyContent: "center"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, truncate_default()(leftDisplayedValue, { length: 24 }), "\xA0"), /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "primary600"
  }, formatMessage({ id: (0,getTrad/* default */.Z)(`relation.${relationType}`) }), "\xA0"), /* @__PURE__ */ react.createElement(Typography.Typography, null, truncate_default()(rightDisplayedValue, { length: 24 }))));
};
RelationNaturePicker.defaultProps = {
  relationType: null,
  target: null
};
RelationNaturePicker.propTypes = {
  naturePickerType: (prop_types_default()).string.isRequired,
  oneThatIsCreatingARelationWithAnother: (prop_types_default()).string.isRequired,
  relationType: (prop_types_default()).string,
  target: (prop_types_default()).string
};
/* harmony default export */ const Relation_RelationNaturePicker = (RelationNaturePicker);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/Relation/index.js






const Relation = ({ formErrors, mainBoxHeader, modifiedData, naturePickerType, onChange }) => {
  const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
  return /* @__PURE__ */ react.createElement(Flex.Flex, {
    style: { position: "relative" }
  }, /* @__PURE__ */ react.createElement(RelationField, {
    isMain: true,
    header: mainBoxHeader,
    error: (formErrors == null ? void 0 : formErrors.name) || null,
    name: "name",
    onChange,
    value: (modifiedData == null ? void 0 : modifiedData.name) || ""
  }), /* @__PURE__ */ react.createElement(Relation_RelationNaturePicker, {
    naturePickerType,
    oneThatIsCreatingARelationWithAnother: mainBoxHeader,
    relationType,
    target: modifiedData.target
  }), /* @__PURE__ */ react.createElement(RelationField, {
    disabled: ["oneWay", "manyWay"].includes(relationType),
    error: (formErrors == null ? void 0 : formErrors.targetAttribute) || null,
    name: "targetAttribute",
    onChange,
    oneThatIsCreatingARelationWithAnother: mainBoxHeader,
    target: modifiedData.target,
    value: (modifiedData == null ? void 0 : modifiedData.targetAttribute) || ""
  }));
};
Relation.propTypes = {
  formErrors: (prop_types_default()).object.isRequired,
  mainBoxHeader: (prop_types_default()).string.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  naturePickerType: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_Relation = (Relation);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/nameToSlug.js
var nameToSlug = __webpack_require__(97406);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/PluralName/index.js
var PluralName_defProp = Object.defineProperty;
var PluralName_getOwnPropSymbols = Object.getOwnPropertySymbols;
var PluralName_hasOwnProp = Object.prototype.hasOwnProperty;
var PluralName_propIsEnum = Object.prototype.propertyIsEnumerable;
var PluralName_defNormalProp = (obj, key, value) => key in obj ? PluralName_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var PluralName_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (PluralName_hasOwnProp.call(b, prop))
      PluralName_defNormalProp(a, prop, b[prop]);
  if (PluralName_getOwnPropSymbols)
    for (var prop of PluralName_getOwnPropSymbols(b)) {
      if (PluralName_propIsEnum.call(b, prop))
        PluralName_defNormalProp(a, prop, b[prop]);
    }
  return a;
};






const PluralName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = (modifiedData == null ? void 0 : modifiedData.displayName) || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      const value2 = (0,nameToSlug/* default */.Z)(displayName);
      try {
        const plural = pluralize_default()(value2, 2);
        onChangeRef.current({ target: { name, value: plural } });
      } catch (err) {
        onChangeRef.current({ target: { name, value: value2 } });
      }
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    PluralName_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    error: errorMessage,
    label,
    id: name,
    hint,
    name,
    onChange,
    value: value || ""
  });
};
PluralName.defaultProps = {
  description: null,
  error: null,
  value: null
};
PluralName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_PluralName = (PluralName);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Combobox.js
var Combobox = __webpack_require__(54675);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectCategory/index.js





const SelectCategory = ({ error, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { allComponentsCategories } = (0,useDataManager/* default */.Z)();
  const [categories, setCategories] = (0,react.useState)(allComponentsCategories);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2, type: "select-category" } });
  };
  const handleCreateOption = (value2) => {
    setCategories((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ react.createElement(Combobox.CreatableCombobox, {
    error: errorMessage,
    id: name,
    label,
    name,
    onChange: handleChange,
    onCreateOption: handleCreateOption,
    value
  }, categories.map((category) => /* @__PURE__ */ react.createElement(Combobox.ComboboxOption, {
    key: category,
    value: category
  }, category)));
};
SelectCategory.defaultProps = {
  error: null,
  value: null
};
SelectCategory.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectCategory = (SelectCategory);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponent/index.js





const SelectComponent = ({
  error,
  intlLabel,
  isAddingAComponentToAnotherComponent,
  isCreating,
  isCreatingComponentWhileAddingAField,
  componentToCreate,
  name,
  onChange,
  targetUid,
  forTarget,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const label = formatMessage(intlLabel);
  const { componentsGroupedByCategory, componentsThatHaveOtherComponentInTheirAttributes } = (0,useDataManager/* default */.Z)();
  const isTargetAComponent = ["component", "components"].includes(forTarget);
  let options = Object.entries(componentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const compos = components.map((component) => {
      return {
        uid: component.uid,
        label: component.schema.displayName,
        categoryName
      };
    });
    return [...acc, ...compos];
  }, []);
  if (isAddingAComponentToAnotherComponent) {
    options = options.filter((option) => {
      return !componentsThatHaveOtherComponentInTheirAttributes.includes(option.uid);
    });
  }
  if (isTargetAComponent) {
    options = options.filter((option) => {
      return option.uid !== targetUid;
    });
  }
  if (isCreatingComponentWhileAddingAField) {
    options = [
      {
        uid: value,
        label: componentToCreate.displayName,
        categoryName: componentToCreate.category
      }
    ];
  }
  return /* @__PURE__ */ react.createElement(Select.Select, {
    disabled: isCreatingComponentWhileAddingAField || !isCreating,
    error: errorMessage,
    label,
    id: name,
    name,
    onChange: (value2) => {
      onChange({ target: { name, value: value2, type: "select-category" } });
    },
    value: value || ""
  }, options.map((option) => {
    return /* @__PURE__ */ react.createElement(Select.Option, {
      key: option.uid,
      value: option.uid
    }, `${option.categoryName} - ${option.label}`);
  }));
};
SelectComponent.defaultProps = {
  componentToCreate: null,
  error: null
};
SelectComponent.propTypes = {
  componentToCreate: (prop_types_default()).object,
  forTarget: (prop_types_default()).string.isRequired,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  isAddingAComponentToAnotherComponent: (prop_types_default()).bool.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isCreatingComponentWhileAddingAField: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  targetUid: (prop_types_default()).string.isRequired,
  value: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_SelectComponent = (SelectComponent);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/findAttribute.js
const findAttribute = (attributes, attributeToFind) => {
  return attributes.find(({ name }) => name === attributeToFind);
};
/* harmony default export */ const utils_findAttribute = (findAttribute);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectComponents/index.js







const SelectComponents = ({ dynamicZoneTarget, intlLabel, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { componentsGroupedByCategory, modifiedData } = (0,useDataManager/* default */.Z)();
  const dzSchema = utils_findAttribute(modifiedData.contentType.schema.attributes, dynamicZoneTarget) || {};
  const alreadyUsedComponents = dzSchema.components || [];
  const filteredComponentsGroupedByCategory = Object.keys(componentsGroupedByCategory).reduce(
    (acc, current) => {
      const filteredComponents = componentsGroupedByCategory[current].filter(({ uid }) => {
        return !alreadyUsedComponents.includes(uid);
      });
      if (filteredComponents.length > 0) {
        acc[current] = filteredComponents;
      }
      return acc;
    },
    {}
  );
  const options = Object.entries(filteredComponentsGroupedByCategory).reduce((acc, current) => {
    const [categoryName, components] = current;
    const section = {
      label: categoryName,
      children: components.map(({ uid, schema: { displayName } }) => {
        return { label: displayName, value: uid };
      })
    };
    acc.push(section);
    return acc;
  }, []);
  const displayedValue = formatMessage(
    {
      id: (0,getTrad/* default */.Z)("components.SelectComponents.displayed-value"),
      defaultMessage: "{number, plural, =0 {# components} one {# component} other {# components}} selected"
    },
    { number: value.length }
  );
  return /* @__PURE__ */ react.createElement(Select.MultiSelectNested, {
    id: "select1",
    label: formatMessage(intlLabel),
    customizeContent: () => displayedValue,
    name,
    onChange: (values) => {
      onChange({ target: { name, value: values, type: "select-components" } });
    },
    options,
    value: value || []
  });
};
SelectComponents.propTypes = {
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  dynamicZoneTarget: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).array.isRequired
};
/* harmony default export */ const components_SelectComponents = (SelectComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectDateType/index.js




const SelectDateType = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (modifiedData.default !== void 0 && modifiedData.default !== null) {
      onChange({ target: { name: "default", value: null } });
    }
  };
  return /* @__PURE__ */ react.createElement(Select.Select, {
    error: errorMessage,
    label,
    id: name,
    name,
    onChange: handleChange,
    value: value || ""
  }, options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
    return /* @__PURE__ */ react.createElement(Select.Option, {
      key,
      value: value2,
      disabled,
      hidden
    }, formatMessage(
      { id: intlLabel2.id, defaultMessage: intlLabel2.defaultMessage },
      intlLabel2.values
    ));
  }));
};
SelectDateType.defaultProps = {
  error: void 0,
  value: ""
};
SelectDateType.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectDateType = (SelectDateType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SelectNumber/index.js




const SelectNumber = ({ intlLabel, error, modifiedData, name, onChange, options, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const label = formatMessage(intlLabel);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const handleChange = (nextValue) => {
    onChange({ target: { name, value: nextValue, type: "select" } });
    if (!value) {
      return;
    }
    if (nextValue === "biginteger" && value !== "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
    if (["decimal", "float", "integer"].includes(nextValue) && value === "biginteger") {
      if (modifiedData.default !== void 0 && modifiedData.default !== null) {
        onChange({ target: { name: "default", value: null } });
      }
      if (modifiedData.max !== void 0 && modifiedData.max !== null) {
        onChange({ target: { name: "max", value: null } });
      }
      if (modifiedData.min !== void 0 && modifiedData.min !== null) {
        onChange({ target: { name: "min", value: null } });
      }
    }
  };
  return /* @__PURE__ */ react.createElement(Select.Select, {
    error: errorMessage,
    label,
    id: name,
    name,
    onChange: handleChange,
    value: value || ""
  }, options.map(({ metadatas: { intlLabel: intlLabel2, disabled, hidden }, key, value: value2 }) => {
    return /* @__PURE__ */ react.createElement(Select.Option, {
      key,
      value: value2,
      disabled,
      hidden
    }, formatMessage(intlLabel2));
  }));
};
SelectNumber.defaultProps = {
  error: void 0,
  value: ""
};
SelectNumber.propTypes = {
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  options: prop_types_default().arrayOf(
    prop_types_default().shape({
      metadatas: prop_types_default().shape({
        intlLabel: prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string.isRequired
        }).isRequired,
        disabled: (prop_types_default()).bool,
        hidden: (prop_types_default()).bool
      }).isRequired,
      key: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired,
      value: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]).isRequired
    }).isRequired
  ).isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SelectNumber = (SelectNumber);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/SingularName/index.js
var SingularName_defProp = Object.defineProperty;
var SingularName_getOwnPropSymbols = Object.getOwnPropertySymbols;
var SingularName_hasOwnProp = Object.prototype.hasOwnProperty;
var SingularName_propIsEnum = Object.prototype.propertyIsEnumerable;
var SingularName_defNormalProp = (obj, key, value) => key in obj ? SingularName_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var SingularName_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (SingularName_hasOwnProp.call(b, prop))
      SingularName_defNormalProp(a, prop, b[prop]);
  if (SingularName_getOwnPropSymbols)
    for (var prop of SingularName_getOwnPropSymbols(b)) {
      if (SingularName_propIsEnum.call(b, prop))
        SingularName_defNormalProp(a, prop, b[prop]);
    }
  return a;
};





const SingularName = ({ description, error, intlLabel, modifiedData, name, onChange, value }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const onChangeRef = (0,react.useRef)(onChange);
  const displayName = (modifiedData == null ? void 0 : modifiedData.displayName) || "";
  (0,react.useEffect)(() => {
    if (displayName) {
      onChangeRef.current({ target: { name, value: (0,nameToSlug/* default */.Z)(displayName) } });
    } else {
      onChangeRef.current({ target: { name, value: "" } });
    }
  }, [displayName, name]);
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    SingularName_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  return /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    error: errorMessage,
    label,
    id: name,
    hint,
    name,
    onChange,
    value: value || ""
  });
};
SingularName.defaultProps = {
  description: null,
  error: null,
  value: null
};
SingularName.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_SingularName = (SingularName);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TabForm/index.js
var TabForm_defProp = Object.defineProperty;
var TabForm_defProps = Object.defineProperties;
var TabForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var TabForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TabForm_hasOwnProp = Object.prototype.hasOwnProperty;
var TabForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var TabForm_defNormalProp = (obj, key, value) => key in obj ? TabForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TabForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TabForm_hasOwnProp.call(b, prop))
      TabForm_defNormalProp(a, prop, b[prop]);
  if (TabForm_getOwnPropSymbols)
    for (var prop of TabForm_getOwnPropSymbols(b)) {
      if (TabForm_propIsEnum.call(b, prop))
        TabForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var TabForm_spreadProps = (a, b) => TabForm_defProps(a, TabForm_getOwnPropDescs(b));








const TabForm = ({ form, formErrors, genericInputProps, modifiedData, onChange }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return form.map((section, sectionIndex) => {
    if (section.items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ react.createElement(Box.Box, {
      key: sectionIndex
    }, section.sectionTitle && /* @__PURE__ */ react.createElement(Box.Box, {
      paddingBottom: 4
    }, /* @__PURE__ */ react.createElement(Typography.Typography, {
      variant: "delta",
      as: "h3"
    }, formatMessage(section.sectionTitle))), /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 4
    }, section.items.map((input, i) => {
      const key = `${sectionIndex}.${i}`;
      const value = get_default()(modifiedData, input.name, "");
      const pluginOptionError = Object.keys(formErrors).find((key2) => key2 === input.name);
      const errorId = pluginOptionError ? formErrors[pluginOptionError].id : get_default()(
        formErrors,
        [
          ...input.name.split(".").filter((key2) => key2 !== "componentToCreate"),
          "id"
        ],
        null
      );
      if (input.type === "pushRight") {
        return /* @__PURE__ */ react.createElement(Grid.GridItem, {
          col: input.size || 6,
          key: input.name || key
        }, /* @__PURE__ */ react.createElement("div", null));
      }
      return /* @__PURE__ */ react.createElement(Grid.GridItem, {
        col: input.size || 6,
        key: input.name || key
      }, /* @__PURE__ */ react.createElement(build.GenericInput, TabForm_spreadProps(TabForm_spreadValues(TabForm_spreadValues({}, input), genericInputProps), {
        error: errorId,
        onChange,
        value
      })));
    })));
  });
};
TabForm.propTypes = {
  form: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  formErrors: (prop_types_default()).object.isRequired,
  genericInputProps: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_TabForm = (TabForm);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Textarea.js
var Textarea = __webpack_require__(59626);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/TextareaEnum/index.js
var TextareaEnum_defProp = Object.defineProperty;
var TextareaEnum_getOwnPropSymbols = Object.getOwnPropertySymbols;
var TextareaEnum_hasOwnProp = Object.prototype.hasOwnProperty;
var TextareaEnum_propIsEnum = Object.prototype.propertyIsEnumerable;
var TextareaEnum_defNormalProp = (obj, key, value) => key in obj ? TextareaEnum_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var TextareaEnum_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (TextareaEnum_hasOwnProp.call(b, prop))
      TextareaEnum_defNormalProp(a, prop, b[prop]);
  if (TextareaEnum_getOwnPropSymbols)
    for (var prop of TextareaEnum_getOwnPropSymbols(b)) {
      if (TextareaEnum_propIsEnum.call(b, prop))
        TextareaEnum_defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const TextareaEnum = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  value
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const errorMessage = error ? formatMessage({ id: error, defaultMessage: error }) : "";
  const hint = description ? formatMessage(
    { id: description.id, defaultMessage: description.defaultMessage },
    TextareaEnum_spreadValues({}, description.values)
  ) : "";
  const label = formatMessage(intlLabel);
  const formattedPlaceholder = placeholder ? formatMessage(
    { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
    TextareaEnum_spreadValues({}, placeholder.values)
  ) : "";
  const inputValue = Array.isArray(value) ? value.join("\n") : "";
  const handleChange = (e) => {
    const arrayValue = e.target.value.split("\n");
    onChange({ target: { name, value: arrayValue } });
  };
  return /* @__PURE__ */ react.createElement(Textarea.Textarea, {
    disabled,
    error: errorMessage,
    label,
    labelAction,
    id: name,
    hint,
    name,
    onChange: handleChange,
    placeholder: formattedPlaceholder,
    value: inputValue
  }, inputValue);
};
TextareaEnum.defaultProps = {
  description: null,
  disabled: false,
  error: "",
  labelAction: void 0,
  placeholder: null,
  value: ""
};
TextareaEnum.propTypes = {
  description: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  intlLabel: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }).isRequired,
  labelAction: (prop_types_default()).element,
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  placeholder: prop_types_default().shape({
    id: (prop_types_default()).string.isRequired,
    defaultMessage: (prop_types_default()).string.isRequired,
    values: (prop_types_default()).object
  }),
  value: prop_types_default().oneOfType([(prop_types_default()).array, (prop_types_default()).string])
};
/* harmony default export */ const components_TextareaEnum = (TextareaEnum);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/canEditContentType.js


const canEditContentType = (data, modifiedData) => {
  const kind = get_default()(data, ["contentType", "schema", "kind"], "");
  if (kind === "singleType" || kind === modifiedData.kind) {
    return true;
  }
  const contentTypeAttributes = get_default()(data, ["contentType", "schema", "attributes"], []);
  const relationAttributes = contentTypeAttributes.filter(({ relation, type, targetAttribute }) => {
    const relationType = (0,getRelationType/* default */.Z)(relation, targetAttribute);
    return type === "relation" && !["oneWay", "manyWay"].includes(relationType);
  });
  return relationAttributes.length === 0;
};
/* harmony default export */ const utils_canEditContentType = (canEditContentType);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getAttributesToDisplay.js
const getAttributes = (dataTarget = "", targetUid, nestedComponents) => {
  const defaultAttributes = [
    "text",
    "email",
    "richtext",
    "password",
    "number",
    "enumeration",
    "date",
    "media",
    "boolean",
    "json",
    "relation"
  ];
  const isPickingAttributeForAContentType = dataTarget === "contentType";
  const isNestedInAnotherComponent = nestedComponents.includes(targetUid);
  const canAddComponentInAnotherComponent = !isPickingAttributeForAContentType && !isNestedInAnotherComponent;
  if (isPickingAttributeForAContentType) {
    return [
      [...defaultAttributes, "uid"],
      ["component", "dynamiczone"]
    ];
  }
  if (canAddComponentInAnotherComponent) {
    return [defaultAttributes, ["component"]];
  }
  return [defaultAttributes];
};
/* harmony default export */ const getAttributesToDisplay = (getAttributes);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/getFormInputNames.js
const getFormInputNames = (form) => form.reduce((acc, current) => {
  const names = current.items.reduce((acc2, current2) => {
    if (current2.name) {
      acc2.push(current2.name);
    }
    return acc2;
  }, []);
  return [...acc, ...names];
}, []);
/* harmony default export */ const utils_getFormInputNames = (getFormInputNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/index.js




// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/utils/createUid.js
var createUid = __webpack_require__(97392);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/form.js

const form_form = {
  base: {
    sections: [
      {
        sectionTitle: null,
        items: [
          {
            autoFocus: true,
            name: "name",
            type: "text",
            intlLabel: {
              id: "global.name",
              defaultMessage: "Name"
            },
            description: {
              id: (0,getTrad/* default */.Z)("modalForm.editCategory.base.name.description"),
              defaultMessage: "No space is allowed for the name of the category"
            }
          }
        ]
      }
    ]
  }
};
/* harmony default export */ const category_form = (form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/regex.js
const CATEGORY_NAME_REGEX = /^[A-Za-z][-_0-9A-Za-z]*$/;
/* harmony default export */ const regex = (CATEGORY_NAME_REGEX);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/createCategorySchema.js




const createCategorySchema = (usedCategoryNames) => {
  const shape = {
    name: yup_lib/* string */.Z_().matches(regex, build.translatedErrors.regex).test({
      name: "nameNotAllowed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !usedCategoryNames.includes((0,lodash.toLower)(value));
      }
    }).required(build.translatedErrors.required)
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const category_createCategorySchema = (createCategorySchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/category/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/createComponentSchema.js






const createComponentSchema = (usedComponentNames, reservedNames, category) => {
  const shape = {
    displayName: yup_lib/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createComponentUid */.N)(value, category);
        return !usedComponentNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedNames.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    category: yup_lib/* string */.Z_().matches(regex, build.translatedErrors.regex).required(build.translatedErrors.required),
    icon: yup_lib/* string */.Z_()
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const component_createComponentSchema = (createComponentSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/componentField.js

const componentField = {
  intlLabel: {
    id: "global.type",
    defaultMessage: "Type"
  },
  name: "createComponent",
  type: "boolean-radio-group",
  size: 12,
  radios: [
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create"),
        defaultMessage: "Create a new component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.create.description"),
        defaultMessage: "A component is shared across types and components, it will be available and accessible everywhere."
      },
      value: true
    },
    {
      title: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing"),
        defaultMessage: "Use an existing component"
      },
      description: {
        id: (0,getTrad/* default */.Z)("form.attribute.component.option.reuse-existing.description"),
        defaultMessage: "Reuse a component already created to keep your data consistent across content-types."
      },
      value: false
    }
  ]
};
/* harmony default export */ const component_componentField = (componentField);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/form.js

const componentForm = {
  base(prefix = "") {
    const sections = [
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}displayName`,
            type: "text",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
              defaultMessage: "Display Name"
            }
          },
          {
            name: `${prefix}category`,
            type: "select-category",
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.create-component.category.label"),
              defaultMessage: "Select a category or enter a name to create a new one"
            }
          }
        ]
      },
      {
        sectionTitle: null,
        items: [
          {
            name: `${prefix}icon`,
            type: "component-icon-picker",
            size: 12,
            intlLabel: {
              id: (0,getTrad/* default */.Z)("modalForm.components.icon.label"),
              defaultMessage: "Icon"
            }
          }
        ]
      }
    ];
    return sections;
  },
  advanced() {
    const sections = [];
    return sections;
  }
};
/* harmony default export */ const component_form = (componentForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/component/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/attributeOptions.js

const attributeOptions = {
  default: {
    name: "default",
    type: "text",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
      defaultMessage: "Default value"
    }
  },
  max: {
    name: "max",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximum"),
      defaultMessage: "Maximum value"
    }
  },
  maxLength: {
    name: "maxLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.maximumLength"),
      defaultMessage: "Maximum length"
    }
  },
  min: {
    name: "min",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimum"),
      defaultMessage: "Minimum value"
    }
  },
  minLength: {
    name: "minLength",
    type: "checkbox-with-number-field",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.minimumLength"),
      defaultMessage: "Minimum length"
    }
  },
  private: {
    name: "private",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField"),
      defaultMessage: "Private field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.privateField.description"),
      defaultMessage: "This field will not show up in the API response"
    }
  },
  regex: {
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex"),
      defaultMessage: "RegExp pattern"
    },
    name: "regex",
    type: "text",
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.text.regex.description"),
      defaultMessage: "The text of the regular expression"
    }
  },
  required: {
    name: "required",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField"),
      defaultMessage: "Required field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.requiredField.description"),
      defaultMessage: "You won't be able to create an entry if this field is empty"
    }
  },
  unique: {
    name: "unique",
    type: "checkbox",
    intlLabel: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField"),
      defaultMessage: "Unique field"
    },
    description: {
      id: (0,getTrad/* default */.Z)("form.attribute.item.uniqueField.description"),
      defaultMessage: "You won't be able to create an entry if there is an existing entry with identical content"
    }
  }
};
/* harmony default export */ const attributes_attributeOptions = (attributeOptions);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/advancedForm.js
var advancedForm_defProp = Object.defineProperty;
var advancedForm_defProps = Object.defineProperties;
var advancedForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var advancedForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var advancedForm_hasOwnProp = Object.prototype.hasOwnProperty;
var advancedForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var advancedForm_defNormalProp = (obj, key, value) => key in obj ? advancedForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var advancedForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (advancedForm_hasOwnProp.call(b, prop))
      advancedForm_defNormalProp(a, prop, b[prop]);
  if (advancedForm_getOwnPropSymbols)
    for (var prop of advancedForm_getOwnPropSymbols(b)) {
      if (advancedForm_propIsEnum.call(b, prop))
        advancedForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var advancedForm_spreadProps = (a, b) => advancedForm_defProps(a, advancedForm_getOwnPropDescs(b));



const advancedForm = {
  boolean() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              type: "select-default-boolean",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              name: "default",
              options: [
                {
                  value: "true",
                  key: "true",
                  metadatas: { intlLabel: { id: "true", defaultMessage: "true" } }
                },
                {
                  value: "",
                  key: "null",
                  metadatas: { intlLabel: { id: "null", defaultMessage: "null" } }
                },
                {
                  value: "false",
                  key: "false",
                  metadatas: { intlLabel: { id: "false", defaultMessage: "false" } }
                }
              ]
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  component({ repeatable }, step) {
    if (step === "1") {
      return { sections: component_form.advanced("componentToCreate") };
    }
    if (repeatable) {
      return {
        sections: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [attributes_attributeOptions.required, attributes_attributeOptions["private"], attributes_attributeOptions.max, attributes_attributeOptions.min]
          }
        ]
      };
    }
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  date({ type }) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), {
              type: type || "date",
              value: null,
              withDefaultValue: false,
              disabled: !type,
              autoFocus: false
            })
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  dynamiczone() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.max, attributes_attributeOptions.min]
        }
      ]
    };
  },
  email() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), {
              type: "email"
            })
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions["private"]
          ]
        }
      ]
    };
  },
  enumeration(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              name: "default",
              type: "select",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {},
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    }
                  }
                },
                ...(data.enum || []).filter((value, index) => data.enum.indexOf(value) === index && value).map((value) => {
                  return {
                    key: value,
                    value,
                    metadatas: {
                      intlLabel: { id: `${value}.no-override`, defaultMessage: value }
                    }
                  };
                })
              ]
            },
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql"),
                defaultMessage: "Name override for GraphQL"
              },
              name: "enumName",
              type: "text",
              validations: {},
              description: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.graphql.description"),
                defaultMessage: "Allows you to override the default generated name for GraphQL"
              }
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  json() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.media.allowed-types"),
                defaultMessage: "Select allowed types of media"
              },
              name: "allowedTypes",
              type: "allowed-types-select",
              size: 7,
              value: "",
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  number(data) {
    const inputStep = data.type === "decimal" || data.type === "float" ? "any" : 1;
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              autoFocus: true,
              name: "default",
              type: data.type === "biginteger" ? "text" : "number",
              step: inputStep,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.settings.default"),
                defaultMessage: "Default value"
              },
              validations: {}
            }
          ]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.unique, attributes_attributeOptions.max, attributes_attributeOptions.min, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  password() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  richtext() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"]] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [attributes_attributeOptions["default"], attributes_attributeOptions.regex] },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [
            attributes_attributeOptions.required,
            attributes_attributeOptions.unique,
            attributes_attributeOptions.maxLength,
            attributes_attributeOptions.minLength,
            attributes_attributeOptions["private"]
          ]
        }
      ]
    };
  },
  uid(data) {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [advancedForm_spreadProps(advancedForm_spreadValues({}, attributes_attributeOptions["default"]), { disabled: Boolean(data.targetField), type: "text" })]
        },
        {
          sectionTitle: {
            id: "global.settings",
            defaultMessage: "Settings"
          },
          items: [attributes_attributeOptions.required, attributes_attributeOptions.maxLength, attributes_attributeOptions.minLength, attributes_attributeOptions["private"]]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_advancedForm = (advancedForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/nameField.js

const nameField = {
  name: "name",
  type: "text",
  intlLabel: {
    id: "global.name",
    defaultMessage: "Name"
  },
  description: {
    id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.description"),
    defaultMessage: "No space is allowed for the name of the attribute"
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/baseForm.js
var baseForm_defProp = Object.defineProperty;
var baseForm_defProps = Object.defineProperties;
var baseForm_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var baseForm_getOwnPropSymbols = Object.getOwnPropertySymbols;
var baseForm_hasOwnProp = Object.prototype.hasOwnProperty;
var baseForm_propIsEnum = Object.prototype.propertyIsEnumerable;
var baseForm_defNormalProp = (obj, key, value) => key in obj ? baseForm_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var baseForm_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (baseForm_hasOwnProp.call(b, prop))
      baseForm_defNormalProp(a, prop, b[prop]);
  if (baseForm_getOwnPropSymbols)
    for (var prop of baseForm_getOwnPropSymbols(b)) {
      if (baseForm_propIsEnum.call(b, prop))
        baseForm_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var baseForm_spreadProps = (a, b) => baseForm_defProps(a, baseForm_getOwnPropDescs(b));



const baseForm = {
  component(data, step) {
    if (step === "1") {
      const itemsToConcat = data.createComponent === true ? component_form.base("componentToCreate.") : [];
      return {
        sections: [{ sectionTitle: null, items: [component_componentField] }, ...itemsToConcat]
      };
    }
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              name: "component",
              type: "select-component",
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attributes.select-component"),
                defaultMessage: "Select a component"
              },
              isMultiple: false
            }
          ]
        },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "repeatable",
              type: "boolean-radio-group",
              size: 12,
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable"),
                    defaultMessage: "Repeatable component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.repeatable.description"),
                    defaultMessage: "Best for multiple instances (array) of ingredients, meta tags, etc.."
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single"),
                    defaultMessage: "Single component"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.component.option.single.description"),
                    defaultMessage: "Best for grouping fields like full address, main information, etc..."
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  date() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              type: "select-date",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "date",
                  value: "date",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.date"),
                      defaultMessage: "date (ex: 01/01/{currentYear})",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "datetime",
                  value: "datetime",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.datetime"),
                      defaultMessage: "datetime (ex: 01/01/{currentYear} 00:00 AM)",
                      values: { currentYear: new Date().getFullYear() }
                    }
                  }
                },
                {
                  key: "time",
                  value: "time",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.date.type.time"),
                      defaultMessage: "time (ex: 00:00 AM)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  enumeration() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              name: "enum",
              type: "textarea-enum",
              size: 6,
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.rules"),
                defaultMessage: "Values (one line per value)"
              },
              placeholder: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.enumeration.placeholder"),
                defaultMessage: "Ex:\nmorning\nnoon\nevening"
              },
              validations: {
                required: true
              }
            }
          ]
        }
      ]
    };
  },
  media() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "multiple",
              size: 12,
              type: "boolean-radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple"),
                    defaultMessage: "Multiple media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.multiple.description"),
                    defaultMessage: "Best for sliders, carousels or multiple files download"
                  },
                  value: true
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single"),
                    defaultMessage: "Single media"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.media.option.single.description"),
                    defaultMessage: "Best for avatar, profile picture or cover"
                  },
                  value: false
                }
              ]
            }
          ]
        }
      ]
    };
  },
  number() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            nameField,
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("form.attribute.item.number.type"),
                defaultMessage: "Number format"
              },
              name: "type",
              type: "select-number",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: {
                    intlLabel: {
                      id: "components.InputSelect.option.placeholder",
                      defaultMessage: "Choose here"
                    },
                    hidden: true
                  }
                },
                {
                  key: "integer",
                  value: "integer",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.integer"),
                      defaultMessage: "integer (ex: 10)"
                    }
                  }
                },
                {
                  key: "biginteger",
                  value: "biginteger",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.biginteger"),
                      defaultMessage: "biginteger (ex: 123456789)"
                    }
                  }
                },
                {
                  key: "decimal",
                  value: "decimal",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.decimal"),
                      defaultMessage: "decimal (ex: 2.22)"
                    }
                  }
                },
                {
                  key: "float",
                  value: "float",
                  metadatas: {
                    intlLabel: {
                      id: (0,getTrad/* default */.Z)("form.attribute.item.number.type.float"),
                      defaultMessage: "decimal (ex: 3.3333333)"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    };
  },
  relation() {
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: { id: "FIXME", defaultMessage: "FIXME" },
              name: "relation",
              size: 12,
              type: "relation"
            }
          ]
        }
      ]
    };
  },
  string() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  text() {
    return {
      sections: [
        { sectionTitle: null, items: [nameField] },
        {
          sectionTitle: null,
          items: [
            {
              intlLabel: {
                id: "global.type",
                defaultMessage: "Type"
              },
              name: "type",
              size: 12,
              type: "radio-group",
              radios: [
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text"),
                    defaultMessage: "Sort text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.short-text.description"),
                    defaultMessage: "Best for titles, names, links (URL). It also enables exact search on the field."
                  },
                  value: "string"
                },
                {
                  title: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text"),
                    defaultMessage: "Long text"
                  },
                  description: {
                    id: (0,getTrad/* default */.Z)("form.attribute.text.option.long-text.description"),
                    defaultMessage: "Best for descriptions, biography. Exact search is disabled."
                  },
                  value: "text"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  uid(data, step, attributes) {
    const options = attributes.filter(({ type }) => ["string", "text"].includes(type)).map(({ name }) => ({
      key: name,
      value: name,
      metadatas: {
        intlLabel: { id: `${name}.no-override`, defaultMessage: name }
      }
    }));
    return {
      sections: [
        {
          sectionTitle: null,
          items: [
            baseForm_spreadProps(baseForm_spreadValues({}, nameField), {
              placeholder: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.form.base.name.placeholder"),
                defaultMessage: "e.g. Slug, SEO URL, Canonical URL"
              }
            }),
            {
              intlLabel: {
                id: (0,getTrad/* default */.Z)("modalForm.attribute.target-field"),
                defaultMessage: "Attached field"
              },
              name: "targetField",
              type: "select",
              options: [
                {
                  key: "__null_reset_value__",
                  value: "",
                  metadatas: { intlLabel: { id: "global.none", defaultMessage: "None" } }
                },
                ...options
              ]
            }
          ]
        }
      ]
    };
  }
};
/* harmony default export */ const attributes_baseForm = (baseForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/form.js


const attributes_form_form = {
  advanced: attributes_advancedForm,
  base: attributes_baseForm
};
/* harmony default export */ const attributes_form = (attributes_form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/commonBaseForm.js

const commonBaseForm = {
  sections: [{ sectionTitle: null, items: [nameField] }]
};
/* harmony default export */ const attributes_commonBaseForm = (commonBaseForm);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(44908);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);
// EXTERNAL MODULE: ./node_modules/@sindresorhus/slugify/index.js
var slugify = __webpack_require__(46831);
var slugify_default = /*#__PURE__*/__webpack_require__.n(slugify);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/utils/toRegressedEnumValue.js

const toRegressedEnumValue = (value) => slugify_default()(value, {
  decamelize: false,
  lowercase: false,
  separator: "_"
});
/* harmony default export */ const utils_toRegressedEnumValue = (toRegressedEnumValue);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/validation/common.js




const NAME_REGEX = /^[A-Za-z][_0-9A-Za-z]*$/;
const alreadyUsedAttributeNames = (usedNames) => {
  return {
    name: "attributeNameAlreadyUsed",
    message: build.translatedErrors.unique,
    test(value) {
      if (!value) {
        return false;
      }
      return !usedNames.includes(value);
    }
  };
};
const getUsedContentTypeAttributeNames = (ctShema, isEdition, attributeNameToEdit) => {
  const attributes = get(ctShema, ["schema", "attributes"], {});
  return Object.keys(attributes).filter((attr) => {
    if (isEdition) {
      return attr !== attributeNameToEdit;
    }
    return true;
  });
};
const isNameAllowed = (reservedNames) => {
  return {
    name: "forbiddenAttributeName",
    message: (0,getTrad/* default */.Z)("error.attributeName.reserved-name"),
    test(value) {
      if (!value) {
        return false;
      }
      return !reservedNames.includes(value);
    }
  };
};
const validators = {
  default: () => yup_lib/* string */.Z_().nullable(),
  max: () => yup_lib/* number */.Rx().integer().nullable(),
  min: () => yup_lib/* number */.Rx().integer().when("max", (max, schema) => {
    if (max) {
      return schema.max(max, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  maxLength: () => yup_lib/* number */.Rx().integer().positive((0,getTrad/* default */.Z)("error.validation.positive")).nullable(),
  minLength: () => yup_lib/* number */.Rx().integer().min(0).when("maxLength", (maxLength, schema) => {
    if (maxLength) {
      return schema.max(maxLength, (0,getTrad/* default */.Z)("error.validation.minSupMax"));
    }
    return schema;
  }).nullable(),
  name(usedNames, reservedNames) {
    return yup_lib/* string */.Z_().test(alreadyUsedAttributeNames(usedNames)).test(isNameAllowed(reservedNames)).matches(NAME_REGEX, build.translatedErrors.regex).required(build.translatedErrors.required);
  },
  required: () => yup_lib/* boolean */.O7(),
  type: () => yup_lib/* string */.Z_().required(build.translatedErrors.required),
  unique: () => yup_lib/* boolean */.O7().nullable()
};
const createTextShape = (usedAttributeNames, reservedNames) => {
  const shape = {
    name: validators.name(usedAttributeNames, reservedNames),
    type: validators.type(),
    default: validators.default(),
    unique: validators.unique(),
    required: validators.required(),
    maxLength: validators.maxLength(),
    minLength: validators.minLength(),
    regex: yup_lib/* string */.Z_().test({
      name: "isValidRegExpPattern",
      message: (0,getTrad/* default */.Z)("error.validation.regex"),
      test(value) {
        return new RegExp(value) !== null;
      }
    }).nullable()
  };
  return shape;
};
const isMinSuperiorThanMax = {
  name: "isMinSuperiorThanMax",
  message: (0,getTrad/* default */.Z)("error.validation.minSupMax"),
  test(min) {
    if (!min) {
      return true;
    }
    const { max } = this.parent;
    if (!max) {
      return true;
    }
    if (Number.isNaN((0,lodash.toNumber)(min))) {
      return true;
    }
    return (0,lodash.toNumber)(max) >= (0,lodash.toNumber)(min);
  }
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/types.js







const types = {
  date(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  datetime(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  time(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  default(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type()
    };
    return yup_lib/* object */.Ry(shape);
  },
  biginteger(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* string */.Z_().nullable().matches(/^-?\d*$/),
      unique: validators.unique(),
      required: validators.required(),
      max: yup_lib/* string */.Z_().nullable().matches(/^-?\d*$/, build.translatedErrors.regex),
      min: yup_lib/* string */.Z_().nullable().test(isMinSuperiorThanMax).matches(/^-?\d*$/, build.translatedErrors.regex)
    };
    return yup_lib/* object */.Ry(shape);
  },
  boolean(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      default: yup_lib/* boolean */.O7().nullable(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_lib/* object */.Ry(shape);
  },
  component(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min(),
      component: yup_lib/* string */.Z_().required(build.translatedErrors.required)
    };
    return yup_lib/* object */.Ry(shape);
  },
  decimal(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* number */.Rx(),
      required: validators.required(),
      max: yup_lib/* number */.Rx(),
      min: yup_lib/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_lib/* object */.Ry(shape);
  },
  dynamiczone(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_lib/* object */.Ry(shape);
  },
  email(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* string */.Z_().email().nullable(),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  enumeration(usedAttributeNames, reservedNames) {
    const GRAPHQL_ENUM_REGEX = /^[_A-Za-z][_0-9A-Za-z]*$/;
    const shape = {
      name: yup_lib/* string */.Z_().test(alreadyUsedAttributeNames(usedAttributeNames)).test(isNameAllowed(reservedNames)).matches(GRAPHQL_ENUM_REGEX, build.translatedErrors.regex).required(build.translatedErrors.required),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      enum: yup_lib/* array */.IX().of(yup_lib/* string */.Z_()).min(1, build.translatedErrors.min).test({
        name: "areEnumValuesUnique",
        message: (0,getTrad/* default */.Z)("error.validation.enum-duplicate"),
        test(values) {
          const duplicates = uniq_default()(
            values.map(utils_toRegressedEnumValue).filter((value, index, values2) => values2.indexOf(value) !== index)
          );
          return !duplicates.length;
        }
      }).test({
        name: "doesNotHaveEmptyValues",
        message: (0,getTrad/* default */.Z)("error.validation.enum-empty-string"),
        test: (values) => !values.map(utils_toRegressedEnumValue).some((val) => val === "")
      }).test({
        name: "doesMatchRegex",
        message: (0,getTrad/* default */.Z)("error.validation.enum-regex"),
        test: (values) => values.map(utils_toRegressedEnumValue).every((value) => GRAPHQL_ENUM_REGEX.test(value))
      }),
      enumName: yup_lib/* string */.Z_().nullable()
    };
    return yup_lib/* object */.Ry(shape);
  },
  float(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      default: yup_lib/* number */.Rx(),
      max: yup_lib/* number */.Rx(),
      min: yup_lib/* number */.Rx().test(isMinSuperiorThanMax)
    };
    return yup_lib/* object */.Ry(shape);
  },
  integer(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: yup_lib/* number */.Rx().integer(),
      unique: validators.unique(),
      required: validators.required(),
      max: validators.max(),
      min: validators.min()
    };
    return yup_lib/* object */.Ry(shape);
  },
  json(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      required: validators.required(),
      unique: validators.unique()
    };
    return yup_lib/* object */.Ry(shape);
  },
  media(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      multiple: yup_lib/* boolean */.O7(),
      required: validators.required(),
      allowedTypes: yup_lib/* array */.IX().of(yup_lib/* string */.Z_().oneOf(["images", "videos", "files", "audios"])).min(1).nullable()
    };
    return yup_lib/* object */.Ry(shape);
  },
  password(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  relation(usedAttributeNames, reservedNames, alreadyTakenTargetAttributes, { initialData, modifiedData }) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      target: yup_lib/* string */.Z_().required(build.translatedErrors.required),
      relation: yup_lib/* string */.Z_().required(),
      type: yup_lib/* string */.Z_().required(),
      targetAttribute: yup_lib/* lazy */.Vo(() => {
        const relationType = (0,getRelationType/* default */.Z)(modifiedData.relation, modifiedData.targetAttribute);
        if (relationType === "oneWay" || relationType === "manyWay") {
          return yup_lib/* string */.Z_().nullable();
        }
        let schema = yup_lib/* string */.Z_().test(isNameAllowed(reservedNames));
        const initialForbiddenName = [
          ...alreadyTakenTargetAttributes.map(({ name }) => name),
          modifiedData.name
        ];
        let forbiddenTargetAttributeName = initialForbiddenName.filter(
          (val) => val !== initialData.targetAttribute
        );
        return schema.matches(NAME_REGEX, build.translatedErrors.regex).test({
          name: "forbiddenTargetAttributeName",
          message: (0,getTrad/* default */.Z)("error.validation.relation.targetAttribute-taken"),
          test(value) {
            if (!value) {
              return false;
            }
            return !forbiddenTargetAttributeName.includes(value);
          }
        }).required(build.translatedErrors.required);
      })
    };
    return yup_lib/* object */.Ry(shape);
  },
  richtext(usedAttributeNames, reservedNames) {
    const shape = {
      name: validators.name(usedAttributeNames, reservedNames),
      type: validators.type(),
      default: validators["default"](),
      unique: validators.unique(),
      required: validators.required(),
      maxLength: validators.maxLength(),
      minLength: validators.minLength()
    };
    return yup_lib/* object */.Ry(shape);
  },
  string(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  },
  text(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  },
  uid(usedAttributeNames, reservedNames) {
    const shape = createTextShape(usedAttributeNames, reservedNames);
    return yup_lib/* object */.Ry(shape);
  }
};
/* harmony default export */ const attributes_types = (types);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/attributes/index.js




;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/form.js

const form_nameField = {
  name: "displayName",
  type: "text",
  intlLabel: {
    id: (0,getTrad/* default */.Z)("contentType.displayName.label"),
    defaultMessage: "Display name"
  }
};
const form_forms = {
  advanced: {
    default() {
      return {
        sections: [
          {
            sectionTitle: {
              id: (0,getTrad/* default */.Z)("form.contentType.divider.draft-publish"),
              defaultMessage: "Draft/Publish"
            },
            items: [
              {
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.label"),
                  defaultMessage: "Draft/publish system"
                },
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.draftAndPublish.description"),
                  defaultMessage: "Write a draft version of each entry before publishing it"
                },
                name: "draftAndPublish",
                type: "toggle-draft-publish",
                validations: {}
              }
            ]
          }
        ]
      };
    }
  },
  base: {
    create() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text-singular"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text-plural"
              }
            ]
          }
        ]
      };
    },
    edit() {
      return {
        sections: [
          {
            sectionTitle: null,
            items: [
              form_nameField,
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.description"),
                  defaultMessage: "Used to generate the API routes and databases tables/collections"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-singular.label"),
                  defaultMessage: "API ID (Singular)"
                },
                name: "singularName",
                type: "text"
              },
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                disabled: true,
                description: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.description"),
                  defaultMessage: "Pluralized API ID"
                },
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("contentType.apiId-plural.label"),
                  defaultMessage: "API ID (Plural)"
                },
                name: "pluralName",
                type: "text"
              },
              {
                intlLabel: {
                  id: "global.type",
                  defaultMessage: "Type"
                },
                name: "kind",
                type: "content-type-radio-group",
                size: 12,
                radios: [
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.name"),
                      defaultMessage: "Collection Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.collection-type.description"),
                      defaultMessage: "Best for multiple instances like articles, products, comments, etc."
                    },
                    value: "collectionType"
                  },
                  {
                    title: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.name"),
                      defaultMessage: "Single Type"
                    },
                    description: {
                      id: (0,getTrad/* default */.Z)("form.button.single-type.description"),
                      defaultMessage: "Best for single instance like about us, homepage, etc."
                    },
                    value: "singleType"
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const contentType_form = (form_forms);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/createContentTypeSchema.js





const createContentTypeSchema = ({
  usedContentTypeNames = [],
  reservedModels = [],
  singularNames = [],
  pluralNames = []
}) => {
  const shape = {
    displayName: yup_lib/* string */.Z_().test({
      name: "nameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        const name = (0,createUid/* createUid */.E)(value);
        return !usedContentTypeNames.includes(name);
      }
    }).test({
      name: "nameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    pluralName: yup_lib/* string */.Z_().test({
      name: "pluralNameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !pluralNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.pluralName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.singularName !== value;
      }
    }).test({
      name: "pluralNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    singularName: yup_lib/* string */.Z_().test({
      name: "singularNameAlreadyUsed",
      message: build.translatedErrors.unique,
      test(value) {
        if (!value) {
          return false;
        }
        return !singularNames.includes(value);
      }
    }).test({
      name: "pluralAndSingularAreUnique",
      message: (0,getTrad/* default */.Z)("error.contentType.singularName-used"),
      test(value, context) {
        if (!value) {
          return false;
        }
        return context.parent.pluralName !== value;
      }
    }).test({
      name: "singularNameNotAllowed",
      message: (0,getTrad/* default */.Z)("error.contentTypeName.reserved-name"),
      test(value) {
        if (!value) {
          return false;
        }
        return !reservedModels.includes((0,lodash.toLower)((0,lodash.trim)(value)));
      }
    }).required(build.translatedErrors.required),
    draftAndPublish: yup_lib/* boolean */.O7(),
    kind: yup_lib/* string */.Z_().oneOf(["singleType", "collectionType"])
  };
  return yup_lib/* object */.Ry(shape);
};
/* harmony default export */ const contentType_createContentTypeSchema = (createContentTypeSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/contentType/index.js



;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/form.js


const dynamicZone_form_form = {
  advanced: {
    default() {
      return {
        sections: component_form.advanced("componentToCreate.")
      };
    }
  },
  base: {
    createComponent() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          ...component_form.base("componentToCreate.")
        ]
      };
    },
    default() {
      return {
        sections: [
          { sectionTitle: null, items: [component_componentField] },
          {
            sectionTitle: null,
            items: [
              {
                type: "pushRight",
                size: 6,
                intlLabel: { id: "", defaultMessage: "" },
                name: "pushRight"
              },
              {
                name: "components",
                type: "select-components",
                intlLabel: {
                  id: (0,getTrad/* default */.Z)("modalForm.attributes.select-components"),
                  defaultMessage: "Select the components"
                },
                isMultiple: true
              }
            ]
          }
        ]
      };
    }
  }
};
/* harmony default export */ const dynamicZone_form = (dynamicZone_form_form);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/dynamicZone/index.js


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/addItemsToFormSection.js
const addItemsToFormSection = (formTypeOptions, sections) => {
  formTypeOptions.forEach((item) => {
    if (!("sectionTitle" in item)) {
      sections[0].items.push(item);
      return;
    }
    sections.push(item);
  });
};
/* harmony default export */ const utils_addItemsToFormSection = (addItemsToFormSection);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/utils/getUsedAttributeNames.js
const getUsedAttributeNames = (attributes, schemaData) => {
  return attributes.filter(({ name }) => {
    return name !== schemaData.initialData.name;
  }).map(({ name }) => name);
};
/* harmony default export */ const utils_getUsedAttributeNames = (getUsedAttributeNames);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/forms/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var forms_defProp = Object.defineProperty;
var forms_defProps = Object.defineProperties;
var forms_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var forms_getOwnPropSymbols = Object.getOwnPropertySymbols;
var forms_hasOwnProp = Object.prototype.hasOwnProperty;
var forms_propIsEnum = Object.prototype.propertyIsEnumerable;
var forms_defNormalProp = (obj, key, value) => key in obj ? forms_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var forms_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (forms_hasOwnProp.call(b, prop))
      forms_defNormalProp(a, prop, b[prop]);
  if (forms_getOwnPropSymbols)
    for (var prop of forms_getOwnPropSymbols(b)) {
      if (forms_propIsEnum.call(b, prop))
        forms_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var forms_spreadProps = (a, b) => forms_defProps(a, forms_getOwnPropDescs(b));
var forms_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (forms_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && forms_getOwnPropSymbols)
    for (var prop of forms_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && forms_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};











const forms_forms = {
  customField: {
    schema({
      schemaAttributes,
      attributeType,
      customFieldValidator,
      reservedNames,
      schemaData,
      ctbFormsAPI
    }) {
      const usedAttributeNames = utils_getUsedAttributeNames(schemaAttributes, schemaData);
      const attributeShape = attributes_types[attributeType](
        usedAttributeNames,
        reservedNames.attributes
      );
      return ctbFormsAPI.makeCustomFieldValidator(
        attributeShape,
        customFieldValidator,
        usedAttributeNames,
        reservedNames.attributes,
        schemaData
      );
    },
    form: {
      base({ customField }) {
        var _a;
        const sections = [{ sectionTitle: null, items: [nameField] }];
        if ((_a = customField.options) == null ? void 0 : _a.base) {
          utils_addItemsToFormSection(customField.options.base, sections);
        }
        return { sections };
      },
      advanced(_a) {
        var _b = _a, { customField, data, step, extensions } = _b, rest = forms_objRest(_b, ["customField", "data", "step", "extensions"]);
        var _a2;
        const sections = [{ sectionTitle: null, items: [] }];
        const injectedInputs = extensions.getAdvancedForm(["attribute", customField.type], forms_spreadValues({
          data,
          type: customField.type,
          step
        }, rest));
        if ((_a2 = customField.options) == null ? void 0 : _a2.advanced) {
          utils_addItemsToFormSection(customField.options.advanced, sections);
        }
        if (injectedInputs) {
          const extendedSettings = {
            sectionTitle: {
              id: (0,getTrad/* default */.Z)("modalForm.custom-fields.advanced.settings.extended"),
              defaultMessage: "Extended settings"
            },
            items: injectedInputs
          };
          sections.push(extendedSettings);
        }
        return { sections };
      }
    }
  },
  attribute: {
    schema(currentSchema, attributeType, reservedNames, alreadyTakenTargetContentTypeAttributes, options, extensions) {
      const attributes = get_default()(currentSchema, ["schema", "attributes"], []);
      const usedAttributeNames = utils_getUsedAttributeNames(attributes, options);
      try {
        let attributeShape = attributes_types[attributeType](
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
        return extensions.makeValidator(
          ["attribute", attributeType],
          attributeShape,
          usedAttributeNames,
          reservedNames.attributes,
          alreadyTakenTargetContentTypeAttributes,
          options
        );
      } catch (err) {
        console.error("Error yup build schema", err);
        return attributes_types["default"](usedAttributeNames, reservedNames.attributes);
      }
    },
    form: {
      advanced(_c) {
        var _d = _c, { data, type, step, extensions } = _d, rest = forms_objRest(_d, ["data", "type", "step", "extensions"]);
        try {
          const baseForm = attributes_form.advanced[type](data, step).sections;
          const itemsToAdd = extensions.getAdvancedForm(["attribute", type], forms_spreadValues({
            data,
            type,
            step
          }, rest));
          const sections = baseForm.reduce((acc, current) => {
            if (current.sectionTitle === null) {
              acc.push(current);
            } else {
              acc.push(forms_spreadProps(forms_spreadValues({}, current), { items: [...current.items, ...itemsToAdd] }));
            }
            return acc;
          }, []);
          return { sections };
        } catch (err) {
          console.error(err);
          return { sections: [] };
        }
      },
      base({ data, type, step, attributes }) {
        try {
          return attributes_form.base[type](data, step, attributes);
        } catch (err) {
          return attributes_commonBaseForm;
        }
      }
    }
  },
  contentType: {
    schema(alreadyTakenNames, isEditing, ctUid, reservedNames, extensions, contentTypes) {
      const singularNames = Object.values(contentTypes).map((contentType) => {
        return contentType.schema.singularName;
      });
      const pluralNames = Object.values(contentTypes).map((contentType) => {
        return get_default()(contentType, ["schema", "pluralName"], "");
      });
      const takenNames = isEditing ? alreadyTakenNames.filter((uid) => uid !== ctUid) : alreadyTakenNames;
      const takenSingularNames = isEditing ? singularNames.filter((singName) => {
        const currentSingularName = get_default()(contentTypes, [ctUid, "schema", "singularName"], "");
        return currentSingularName !== singName;
      }) : singularNames;
      const takenPluralNames = isEditing ? pluralNames.filter((pluralName) => {
        const currentPluralName = get_default()(contentTypes, [ctUid, "schema", "pluralName"], "");
        return currentPluralName !== pluralName;
      }) : pluralNames;
      const contentTypeShape = contentType_createContentTypeSchema({
        usedContentTypeNames: takenNames,
        reservedModels: reservedNames.models,
        singularNames: takenSingularNames,
        pluralNames: takenPluralNames
      });
      return extensions.makeValidator(
        ["contentType"],
        contentTypeShape,
        takenNames,
        reservedNames.models,
        takenSingularNames,
        takenPluralNames
      );
    },
    form: {
      base({ actionType }) {
        if (actionType === "create") {
          return contentType_form.base.create();
        }
        return contentType_form.base.edit();
      },
      advanced(_e) {
        var _f = _e, { extensions } = _f, rest = forms_objRest(_f, ["extensions"]);
        const baseForm = contentType_form.advanced["default"](rest).sections;
        const itemsToAdd = extensions.getAdvancedForm(["contentType"]);
        return {
          sections: [
            ...baseForm,
            {
              sectionTitle: {
                id: "global.settings",
                defaultMessage: "Settings"
              },
              items: itemsToAdd
            }
          ]
        };
      }
    }
  },
  component: {
    schema(alreadyTakenAttributes, componentCategory, reservedNames, isEditing = false, compoUid = null) {
      const takenNames = isEditing ? alreadyTakenAttributes.filter((uid) => uid !== compoUid) : alreadyTakenAttributes;
      return component_createComponentSchema(takenNames, reservedNames.models, componentCategory);
    },
    form: {
      advanced() {
        return {
          sections: component_form.advanced()
        };
      },
      base() {
        return {
          sections: component_form.base()
        };
      }
    }
  },
  addComponentToDynamicZone: {
    form: {
      advanced() {
        return dynamicZone_form.advanced["default"]();
      },
      base({ data }) {
        const isCreatingComponent = get_default()(data, "createComponent", false);
        if (isCreatingComponent) {
          return dynamicZone_form.base.createComponent();
        }
        return dynamicZone_form.base["default"]();
      }
    }
  },
  editCategory: {
    schema(allCategories, initialData) {
      const allowedCategories = allCategories.filter((cat) => cat !== initialData.name).map((cat) => toLower_default()(cat));
      return category_createCategorySchema(allowedCategories);
    },
    form: {
      advanced: () => ({ sections: [] }),
      base() {
        return category_form.base;
      }
    }
  }
};
/* harmony default export */ const FormModal_forms = (forms_forms);

// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var reselect_lib = __webpack_require__(42279);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/reducer.js + 1 modules
var reducer = __webpack_require__(88372);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/selectors.js



const formModalDomain = () => (state) => state[`${pluginId/* default */.Z}_formModal`] || reducer/* initialState */.E;
const makeSelectFormModal = () => (0,reselect_lib/* createSelector */.P1)(formModalDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const selectors = (makeSelectFormModal);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModal/index.js
/* provided dependency */ var FormModal_console = __webpack_require__(25108);
var FormModal_defProp = Object.defineProperty;
var FormModal_defProps = Object.defineProperties;
var FormModal_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FormModal_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FormModal_hasOwnProp = Object.prototype.hasOwnProperty;
var FormModal_propIsEnum = Object.prototype.propertyIsEnumerable;
var FormModal_defNormalProp = (obj, key, value) => key in obj ? FormModal_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FormModal_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FormModal_hasOwnProp.call(b, prop))
      FormModal_defNormalProp(a, prop, b[prop]);
  if (FormModal_getOwnPropSymbols)
    for (var prop of FormModal_getOwnPropSymbols(b)) {
      if (FormModal_propIsEnum.call(b, prop))
        FormModal_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FormModal_spreadProps = (a, b) => FormModal_defProps(a, FormModal_getOwnPropDescs(b));
var FormModal_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (FormModal_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && FormModal_getOwnPropSymbols)
    for (var prop of FormModal_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && FormModal_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var FormModal_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
















































const FormModal = () => {
  const {
    onCloseModal,
    onNavigateToChooseAttributeModal,
    onNavigateToAddCompoToDZModal,
    onNavigateToCreateComponentStep2,
    actionType,
    attributeName,
    attributeType,
    customFieldUid,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    modalType,
    isOpen,
    kind,
    step,
    targetUid
  } = (0,useFormModalNavigation/* default */.Z)();
  const customField = (0,build.useCustomFields)().get(customFieldUid);
  const tabGroupRef = (0,react.useRef)();
  const formModalSelector = (0,react.useMemo)(selectors, []);
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const reducerState = (0,lib.useSelector)((state) => formModalSelector(state), lib.shallowEqual);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { getPlugin } = (0,build.useStrapiApp)();
  const ctbPlugin = getPlugin(pluginId/* default */.Z);
  const ctbFormsAPI = ctbPlugin.apis.forms;
  const inputsFromPlugins = ctbFormsAPI.components.inputs;
  const {
    addAttribute,
    addCustomFieldAttribute,
    addCreatedComponentToDynamicZone,
    allComponentsCategories,
    changeDynamicZoneComponents,
    contentTypes,
    components,
    createSchema,
    deleteCategory,
    deleteData,
    editCategory,
    editCustomFieldAttribute,
    submitData,
    modifiedData: allDataSchema,
    nestedComponents,
    setModifiedData,
    sortedContentTypesList,
    updateSchema,
    reservedNames
  } = (0,useDataManager/* default */.Z)();
  const {
    componentToCreate,
    formErrors,
    initialData,
    isCreatingComponentWhileAddingAField,
    modifiedData
  } = reducerState;
  const pathToSchema = forTarget === "contentType" || forTarget === "component" ? [forTarget] : [forTarget, targetUid];
  (0,react.useEffect)(() => {
    if (isOpen) {
      const collectionTypesForRelation = sortedContentTypesList.filter(
        utils_isAllowedContentTypesForRelations
      );
      if (modalType === "editCategory") {
        setModifiedData();
      }
      if (actionType === "edit" && modalType === "attribute" && forTarget === "contentType") {
        trackUsage("willEditFieldOfContentType");
      }
      const pathToAttributes = [...pathToSchema, "schema", "attributes"];
      const foundDynamicZoneTarget = utils_findAttribute(get_default()(allDataSchema, pathToAttributes, []), dynamicZoneTarget) || null;
      if (modalType === "editCategory" && actionType === "edit") {
        dispatch({
          type: constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            name: categoryName
          }
        });
      }
      if (modalType === "contentType" && actionType === "create") {
        dispatch({
          type: constants/* SET_DATA_TO_EDIT */._H,
          modalType,
          actionType,
          data: {
            draftAndPublish: true
          },
          pluginOptions: {}
        });
      }
      if (modalType === "contentType" && actionType === "edit") {
        const { displayName, draftAndPublish, kind: kind2, pluginOptions, pluralName, singularName } = get_default()(
          allDataSchema,
          [...pathToSchema, "schema"],
          {
            displayName: null,
            pluginOptions: {},
            singularName: null,
            pluralName: null
          }
        );
        dispatch({
          type: constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName,
            draftAndPublish,
            kind: kind2,
            pluginOptions,
            pluralName,
            singularName
          }
        });
      }
      if (modalType === "component" && actionType === "edit") {
        const data = get_default()(allDataSchema, pathToSchema, {});
        dispatch({
          type: constants/* SET_DATA_TO_EDIT */._H,
          actionType,
          modalType,
          data: {
            displayName: data.schema.displayName,
            category: data.category,
            icon: data.schema.icon
          }
        });
      }
      if (modalType === "addComponentToDynamicZone" && actionType === "edit") {
        const attributeToEdit = FormModal_spreadProps(FormModal_spreadValues({}, foundDynamicZoneTarget), {
          components: [],
          name: dynamicZoneTarget,
          createComponent: false,
          componentToCreate: { type: "component" }
        });
        dispatch({
          type: constants/* SET_DYNAMIC_ZONE_DATA_SCHEMA */.VZ,
          attributeToEdit
        });
      }
      if (attributeType) {
        const attributeToEditNotFormatted = utils_findAttribute(
          get_default()(allDataSchema, pathToAttributes, []),
          attributeName
        );
        const attributeToEdit = FormModal_spreadProps(FormModal_spreadValues({}, attributeToEditNotFormatted), {
          name: attributeName
        });
        if (attributeType === "component" && actionType === "edit") {
          if (!attributeToEdit.repeatable) {
            set_default()(attributeToEdit, "repeatable", false);
          }
        }
        if (modalType === "customField") {
          dispatch({
            type: constants/* SET_CUSTOM_FIELD_DATA_SCHEMA */.OY,
            customField,
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            forTarget
          });
        } else {
          dispatch({
            type: constants/* SET_ATTRIBUTE_DATA_SCHEMA */.S0,
            attributeType,
            nameToSetForRelation: get_default()(collectionTypesForRelation, ["0", "title"], "error"),
            targetUid: get_default()(collectionTypesForRelation, ["0", "uid"], "error"),
            isEditing: actionType === "edit",
            modifiedDataToSetForEditing: attributeToEdit,
            step,
            forTarget
          });
        }
      }
    } else {
      dispatch({ type: constants/* RESET_PROPS */.c2 });
    }
  }, [
    actionType,
    attributeName,
    attributeType,
    categoryName,
    dynamicZoneTarget,
    forTarget,
    isOpen,
    modalType
  ]);
  const isCreatingContentType = modalType === "contentType";
  const isCreatingComponent = modalType === "component";
  const isCreatingAttribute = modalType === "attribute";
  const isCreatingCustomFieldAttribute = modalType === "customField";
  const isComponentAttribute = attributeType === "component" && isCreatingAttribute;
  const isCreating = actionType === "create";
  const isCreatingComponentFromAView = get_default()(modifiedData, "createComponent", false) || isCreatingComponentWhileAddingAField;
  const isInFirstComponentStep = step === "1";
  const isEditingCategory = modalType === "editCategory";
  const isPickingAttribute = modalType === "chooseAttribute";
  const uid = (0,createUid/* createUid */.E)(modifiedData.displayName || "");
  const attributes = get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], null);
  const checkFormValidity = () => FormModal_async(void 0, null, function* () {
    var _a;
    let schema;
    const dataToValidate = isCreatingComponentFromAView && step === "1" ? get_default()(modifiedData, "componentToCreate", {}) : modifiedData;
    if (isCreatingContentType) {
      schema = FormModal_forms.contentType.schema(
        Object.keys(contentTypes),
        actionType === "edit",
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        reservedNames,
        ctbFormsAPI,
        contentTypes
      );
    } else if (isCreatingComponent) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        modifiedData.category || "",
        reservedNames,
        actionType === "edit",
        get_default()(allDataSchema, [...pathToSchema, "uid"], null),
        ctbFormsAPI
      );
    } else if (isCreatingCustomFieldAttribute) {
      schema = FormModal_forms.customField.schema({
        schemaAttributes: get_default()(allDataSchema, [...pathToSchema, "schema", "attributes"], []),
        attributeType: customField.type,
        reservedNames,
        schemaData: { modifiedData, initialData },
        ctbFormsAPI,
        customFieldValidator: (_a = customField.options) == null ? void 0 : _a.validator
      });
    } else if (isComponentAttribute && isCreatingComponentFromAView && isInFirstComponentStep) {
      schema = FormModal_forms.component.schema(
        Object.keys(components),
        get_default()(modifiedData, "componentToCreate.category", ""),
        reservedNames,
        ctbFormsAPI
      );
    } else if (isCreatingAttribute && !isInFirstComponentStep) {
      const type = attributeType === "relation" ? "relation" : modifiedData.type;
      let alreadyTakenTargetContentTypeAttributes = [];
      if (type === "relation") {
        const targetContentTypeUID = get_default()(modifiedData, ["target"], null);
        const targetContentTypeAttributes = get_default()(
          contentTypes,
          [targetContentTypeUID, "schema", "attributes"],
          []
        );
        alreadyTakenTargetContentTypeAttributes = targetContentTypeAttributes.filter(
          ({ name: attrName }) => {
            if (actionType !== "edit") {
              return true;
            }
            return attrName !== initialData.targetAttribute;
          }
        );
      }
      schema = FormModal_forms.attribute.schema(
        get_default()(allDataSchema, pathToSchema, {}),
        type,
        reservedNames,
        alreadyTakenTargetContentTypeAttributes,
        { modifiedData, initialData },
        ctbFormsAPI
      );
    } else if (isEditingCategory) {
      schema = FormModal_forms.editCategory.schema(allComponentsCategories, initialData, ctbFormsAPI);
    } else {
      if (isInFirstComponentStep && isCreatingComponentFromAView) {
        schema = FormModal_forms.component.schema(
          Object.keys(components),
          get_default()(modifiedData, "componentToCreate.category", ""),
          reservedNames,
          ctbFormsAPI
        );
      } else {
        return;
      }
    }
    yield schema.validate(dataToValidate, { abortEarly: false });
  });
  const handleChange = (0,react.useCallback)(
    (_a) => {
      var { target: _b } = _a, _c = _b, { name, value, type } = _c, rest = FormModal_objRest(_c, ["name", "value", "type"]);
      const namesThatCanResetToNullValue = [
        "enumName",
        "max",
        "min",
        "maxLength",
        "minLength",
        "regex",
        "default"
      ];
      let val;
      if (namesThatCanResetToNullValue.includes(name) && value === "") {
        val = null;
      } else {
        val = value;
      }
      const clonedErrors = Object.assign({}, formErrors);
      if (name === "max") {
        delete clonedErrors.min;
      }
      if (name === "maxLength") {
        delete clonedErrors.minLength;
      }
      delete clonedErrors[name];
      dispatch({
        type: constants/* SET_ERRORS */.Ey,
        errors: clonedErrors
      });
      dispatch(FormModal_spreadValues({
        type: constants/* ON_CHANGE */.P0,
        keys: name.split("."),
        value: val
      }, rest));
    },
    [dispatch, formErrors]
  );
  const handleSubmit = (_0, ..._1) => FormModal_async(void 0, [_0, ..._1], function* (e, shouldContinue = isCreating) {
    e.preventDefault();
    try {
      yield checkFormValidity();
      sendButtonAddMoreFieldEvent(shouldContinue);
      const ctTargetUid = forTarget === "components" ? targetUid : uid;
      if (isCreatingContentType) {
        if (isCreating) {
          createSchema(FormModal_spreadProps(FormModal_spreadValues({}, modifiedData), { kind }), modalType, uid);
          push({ pathname: `/plugins/${pluginId/* default */.Z}/content-types/${uid}` });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          if (utils_canEditContentType(allDataSchema, modifiedData)) {
            onCloseModal();
            submitData(modifiedData);
          } else {
            toggleNotification({
              type: "warning",
              message: { id: "notification.contentType.relations.conflict" }
            });
          }
          return;
        }
      } else if (modalType === "component") {
        if (isCreating) {
          const componentUid = (0,createUid/* createComponentUid */.N)(modifiedData.displayName, modifiedData.category);
          const _a = modifiedData, { category } = _a, rest = FormModal_objRest(_a, ["category"]);
          createSchema(rest, "component", componentUid, category);
          push({
            pathname: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${componentUid}`
          });
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: componentUid
          });
        } else {
          updateSchema(modifiedData, modalType, targetUid);
          onCloseModal();
          return;
        }
      } else if (isEditingCategory) {
        if (toLower_default()(initialData.name) === toLower_default()(modifiedData.name)) {
          onCloseModal();
          return;
        }
        editCategory(initialData.name, modifiedData);
        return;
      } else if (isCreatingCustomFieldAttribute) {
        const customFieldAttributeUpdate = {
          attributeToSet: FormModal_spreadProps(FormModal_spreadValues({}, modifiedData), { customField: customFieldUid }),
          forTarget,
          targetUid,
          initialAttribute: initialData
        };
        if (actionType === "edit") {
          editCustomFieldAttribute(customFieldAttributeUpdate);
        } else {
          addCustomFieldAttribute(customFieldAttributeUpdate);
        }
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid: ctTargetUid
          });
        } else {
          onCloseModal();
        }
        return;
      } else if (isCreatingAttribute && !isCreatingComponentFromAView) {
        const isDynamicZoneAttribute = attributeType === "dynamiczone";
        if (isDynamicZoneAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (isCreating) {
            dispatch({
              type: constants/* RESET_PROPS_AND_SET_THE_FORM_FOR_ADDING_A_COMPO_TO_A_DZ */.I
            });
            tabGroupRef.current._handlers.setSelectedTabIndex(0);
            onNavigateToAddCompoToDZModal({ dynamicZoneTarget: modifiedData.name });
          } else {
            onCloseModal();
          }
          return;
        }
        if (!isComponentAttribute) {
          addAttribute(modifiedData, forTarget, targetUid, actionType === "edit", initialData);
          if (shouldContinue) {
            onNavigateToChooseAttributeModal({
              forTarget,
              targetUid: ctTargetUid
            });
          } else {
            onCloseModal();
          }
          return;
        }
        if (isInFirstComponentStep) {
          onNavigateToCreateComponentStep2();
          dispatch({
            type: constants/* RESET_PROPS_AND_SET_FORM_FOR_ADDING_AN_EXISTING_COMPO */.yC,
            forTarget
          });
          return;
        }
        addAttribute(
          modifiedData,
          forTarget,
          targetUid,
          actionType === "edit",
          initialData,
          true
        );
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({
            forTarget,
            targetUid
          });
        } else {
          onCloseModal();
        }
      } else if (isCreatingAttribute && isCreatingComponentFromAView) {
        if (isInFirstComponentStep) {
          trackUsage("willCreateComponentFromAttributesModal");
          dispatch({
            type: constants/* RESET_PROPS_AND_SAVE_CURRENT_DATA */.oF,
            forTarget
          });
          onNavigateToCreateComponentStep2();
          return;
        }
        const _b = componentToCreate, { category, type } = _b, rest = FormModal_objRest(_b, ["category", "type"]);
        const componentUid = (0,createUid/* createComponentUid */.N)(componentToCreate.displayName, category);
        createSchema(
          rest,
          type,
          componentUid,
          category,
          isCreatingComponentFromAView
        );
        addAttribute(modifiedData, forTarget, targetUid, false);
        dispatch({ type: constants/* RESET_PROPS */.c2 });
        if (shouldContinue) {
          onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
        } else {
          onCloseModal();
        }
        return;
      } else {
        if (isInFirstComponentStep) {
          if (isCreatingComponentFromAView) {
            const _c = modifiedData.componentToCreate, { category, type } = _c, rest = FormModal_objRest(_c, ["category", "type"]);
            const componentUid = (0,createUid/* createComponentUid */.N)(
              modifiedData.componentToCreate.displayName,
              category
            );
            createSchema(
              rest,
              type,
              componentUid,
              category,
              isCreatingComponentFromAView
            );
            addCreatedComponentToDynamicZone(dynamicZoneTarget, [componentUid]);
            onNavigateToChooseAttributeModal({ forTarget: "components", targetUid: componentUid });
          } else {
            changeDynamicZoneComponents(dynamicZoneTarget, modifiedData.components);
            onCloseModal();
          }
        } else {
          FormModal_console.error("This case is not handled");
        }
        return;
      }
      dispatch({
        type: constants/* RESET_PROPS */.c2
      });
    } catch (err) {
      const errors = (0,build.getYupInnerErrors)(err);
      FormModal_console.log({ err, errors });
      dispatch({
        type: constants/* SET_ERRORS */.Ey,
        errors
      });
    }
  });
  const handleClosed = () => {
    onCloseModal();
    dispatch({
      type: constants/* RESET_PROPS */.c2
    });
  };
  const sendAdvancedTabEvent = (tab) => {
    if (tab !== "advanced") {
      return;
    }
    if (isCreatingContentType) {
      trackUsage("didSelectContentTypeSettings");
      return;
    }
    if (forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldSettings");
    }
  };
  const sendButtonAddMoreFieldEvent = (shouldContinue) => {
    if (modalType === "attribute" && forTarget === "contentType" && attributeType !== "dynamiczone" && shouldContinue) {
      trackUsage("willAddMoreFieldToContentType");
    }
  };
  const shouldDisableAdvancedTab = () => {
    if (modalType === "editCategory") {
      return true;
    }
    if (modalType === "component") {
      return true;
    }
    if (has_default()(modifiedData, "createComponent")) {
      return true;
    }
    return false;
  };
  const displayedAttributes = getAttributesToDisplay(
    forTarget,
    targetUid,
    nestedComponents
  );
  if (!isOpen) {
    return null;
  }
  if (!modalType) {
    return null;
  }
  const formToDisplay = get_default()(FormModal_forms, [modalType, "form"], {
    advanced: () => ({
      sections: []
    }),
    base: () => ({
      sections: []
    })
  });
  const isAddingAComponentToAnotherComponent = forTarget === "components" || forTarget === "component";
  const genericInputProps = {
    customInputs: FormModal_spreadValues({
      "allowed-types-select": components_AllowedTypesSelect,
      "boolean-radio-group": components_BooleanRadioGroup,
      "checkbox-with-number-field": components_CheckboxWithNumberField,
      "component-icon-picker": components_ComponentIconPicker,
      "content-type-radio-group": components_ContentTypeRadioGroup,
      "radio-group": components_CustomRadioGroup,
      relation: components_Relation,
      "select-category": components_SelectCategory,
      "select-component": components_SelectComponent,
      "select-components": components_SelectComponents,
      "select-default-boolean": components_BooleanDefaultValueSelect,
      "select-number": components_SelectNumber,
      "select-date": components_SelectDateType,
      "toggle-draft-publish": components_DraftAndPublishToggle,
      "text-plural": components_PluralName,
      "text-singular": components_SingularName,
      "textarea-enum": components_TextareaEnum
    }, inputsFromPlugins),
    componentToCreate,
    dynamicZoneTarget,
    formErrors,
    isAddingAComponentToAnotherComponent,
    isCreatingComponentWhileAddingAField,
    mainBoxHeader: get_default()(allDataSchema, [...pathToSchema, "schema", "displayName"], ""),
    modifiedData,
    naturePickerType: forTarget,
    isCreating,
    targetUid,
    forTarget
  };
  const advancedForm = formToDisplay.advanced({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseForm = formToDisplay.base({
    data: modifiedData,
    type: attributeType,
    step,
    actionType,
    attributes,
    extensions: ctbFormsAPI,
    forTarget,
    contentTypeSchema: allDataSchema.contentType || {},
    customField
  }).sections;
  const baseFormInputNames = utils_getFormInputNames(baseForm);
  const advancedFormInputNames = utils_getFormInputNames(advancedForm);
  const doesBaseFormHasError = Object.keys(formErrors).some(
    (key) => baseFormInputNames.includes(key)
  );
  const doesAdvancedFormHasError = Object.keys(formErrors).some(
    (key) => advancedFormInputNames.includes(key)
  );
  const schemaKind = get_default()(contentTypes, [targetUid, "schema", "kind"]);
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: handleClosed,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement(components_FormModalHeader, {
    actionType,
    attributeName,
    categoryName,
    contentTypeKind: kind,
    dynamicZoneTarget,
    modalType,
    forTarget,
    targetUid,
    attributeType,
    customFieldUid
  }), isPickingAttribute && /* @__PURE__ */ react.createElement(components_AttributeOptions, {
    attributes: displayedAttributes,
    forTarget,
    kind: schemaKind || "collectionType"
  }), !isPickingAttribute && /* @__PURE__ */ react.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Tabs.TabGroup, {
    label: "todo",
    id: "tabs",
    variant: "simple",
    ref: tabGroupRef,
    onTabChange: (selectedTab) => {
      if (selectedTab === 1) {
        sendAdvancedTabEvent("advanced");
      }
    }
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "space-between"
  }, /* @__PURE__ */ react.createElement(components_FormModalSubHeader, {
    actionType,
    forTarget,
    kind,
    step,
    modalType,
    attributeType,
    attributeName,
    customField
  }), /* @__PURE__ */ react.createElement(Tabs.Tabs, null, /* @__PURE__ */ react.createElement(Tabs.Tab, {
    hasError: doesBaseFormHasError
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpForm.navContainer.base"),
    defaultMessage: "Basic settings"
  })), /* @__PURE__ */ react.createElement(Tabs.Tab, {
    hasError: doesAdvancedFormHasError,
    disabled: shouldDisableAdvancedTab()
  }, formatMessage({
    id: (0,getTrad/* default */.Z)("popUpForm.navContainer.advanced"),
    defaultMessage: "Advanced settings"
  })))), /* @__PURE__ */ react.createElement(Divider.Divider, null), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6
  }, /* @__PURE__ */ react.createElement(Tabs.TabPanels, null, /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, /* @__PURE__ */ react.createElement(components_TabForm, {
    form: baseForm,
    formErrors,
    genericInputProps,
    modifiedData,
    onChange: handleChange
  }))), /* @__PURE__ */ react.createElement(Tabs.TabPanel, null, /* @__PURE__ */ react.createElement(Stack.Stack, {
    spacing: 6
  }, /* @__PURE__ */ react.createElement(components_TabForm, {
    form: advancedForm,
    formErrors,
    genericInputProps,
    modifiedData,
    onChange: handleChange
  }))))))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    endActions: /* @__PURE__ */ react.createElement(components_FormModalEndActions, {
      deleteCategory,
      deleteContentType: deleteData,
      deleteComponent: deleteData,
      categoryName: initialData.name,
      isAttributeModal: modalType === "attribute",
      isCustomFieldModal: modalType === "customField",
      isComponentToDzModal: modalType === "addComponentToDynamicZone",
      isComponentAttribute: attributeType === "component",
      isComponentModal: modalType === "component",
      isContentTypeModal: modalType === "contentType",
      isCreatingComponent: actionType === "create",
      isCreatingDz: actionType === "create",
      isCreatingComponentAttribute: modifiedData.createComponent || false,
      isCreatingComponentInDz: modifiedData.createComponent || false,
      isCreatingComponentWhileAddingAField,
      isCreatingContentType: actionType === "create",
      isEditingAttribute: actionType === "edit",
      isDzAttribute: attributeType === "dynamiczone",
      isEditingCategory: modalType === "editCategory",
      isInFirstComponentStep: step === "1",
      onSubmitAddComponentAttribute: handleSubmit,
      onSubmitAddComponentToDz: handleSubmit,
      onSubmitCreateComponent: handleSubmit,
      onSubmitCreateContentType: handleSubmit,
      onSubmitCreateDz: handleSubmit,
      onSubmitEditAttribute: handleSubmit,
      onSubmitEditCategory: handleSubmit,
      onSubmitEditComponent: handleSubmit,
      onSubmitEditContentType: handleSubmit,
      onSubmitEditCustomFieldAttribute: handleSubmit,
      onSubmitEditDz: handleSubmit
    }),
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "tertiary",
      onClick: handleClosed
    }, formatMessage({ id: "app.components.Button.cancel", defaultMessage: "Cancel" }))
  })));
};
/* harmony default export */ const components_FormModal = (FormModal);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createDataObject.js
const createDataObject = (arr) => arr.reduce((acc, current) => {
  acc[current.uid] = current;
  return acc;
}, {});
/* harmony default export */ const utils_createDataObject = (createDataObject);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/createModifiedDataSchema.js

const createModifiedDataSchema = (contentTypeSchema, retrievedComponents, allComponentsSchema, isInContentTypeView) => {
  const componentsAssociatedToContentType = retrievedComponents.reduce((acc, current) => {
    const componentSchema = get_default()(allComponentsSchema, current, {});
    acc[current] = componentSchema;
    return acc;
  }, {});
  const keyName = isInContentTypeView ? "contentType" : "component";
  const schema = {
    [keyName]: contentTypeSchema,
    components: componentsAssociatedToContentType
  };
  return schema;
};
/* harmony default export */ const utils_createModifiedDataSchema = (createModifiedDataSchema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveSpecificInfoFromComponents.js


const retrieveSpecificInfoFromComponents = (allComponents, keysToRetrieve) => {
  const allData = Object.keys(allComponents).map((compo) => {
    return (0,lodash.get)(allComponents, [compo, ...keysToRetrieve], "");
  });
  return (0,makeUnique/* default */.Z)(allData);
};
/* harmony default export */ const utils_retrieveSpecificInfoFromComponents = (retrieveSpecificInfoFromComponents);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsFromSchema.js
var retrieveComponentsFromSchema = __webpack_require__(19525);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveNestedComponents.js


const retrieveNestedComponents = (appComponents) => {
  const nestedComponents = Object.keys(appComponents).reduce((acc, current) => {
    const componentAttributes = (0,lodash.get)(appComponents, [current, "schema", "attributes"], []);
    const currentComponentNestedCompos = getComponentsFromComponent(componentAttributes);
    return [...acc, ...currentComponentNestedCompos];
  }, []);
  return (0,makeUnique/* default */.Z)(nestedComponents);
};
const getComponentsFromComponent = (componentAttributes) => {
  return componentAttributes.reduce((acc, current) => {
    const { type, component } = current;
    if (type === "component") {
      acc.push(component);
    }
    return acc;
  }, []);
};
/* harmony default export */ const utils_retrieveNestedComponents = (retrieveNestedComponents);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/retrieveComponentsThatHaveComponents.js


const retrieveComponentsThatHaveComponents = (allComponents) => {
  const componentsThatHaveNestedComponents = Object.keys(allComponents).reduce((acc, current) => {
    const currentComponent = get_default()(allComponents, [current], {});
    const uid = currentComponent.uid;
    if (doesComponentHaveAComponentField(currentComponent)) {
      acc.push(uid);
    }
    return acc;
  }, []);
  return (0,makeUnique/* default */.Z)(componentsThatHaveNestedComponents);
};
const doesComponentHaveAComponentField = (component) => {
  const attributes = get_default()(component, ["schema", "attributes"], []);
  return attributes.some((attribute) => {
    const { type } = attribute;
    return type === "component";
  });
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/cleanData.js
var cleanData_defProp = Object.defineProperty;
var cleanData_defProps = Object.defineProperties;
var cleanData_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var cleanData_getOwnPropSymbols = Object.getOwnPropertySymbols;
var cleanData_hasOwnProp = Object.prototype.hasOwnProperty;
var cleanData_propIsEnum = Object.prototype.propertyIsEnumerable;
var cleanData_defNormalProp = (obj, key, value) => key in obj ? cleanData_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var cleanData_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (cleanData_hasOwnProp.call(b, prop))
      cleanData_defNormalProp(a, prop, b[prop]);
  if (cleanData_getOwnPropSymbols)
    for (var prop of cleanData_getOwnPropSymbols(b)) {
      if (cleanData_propIsEnum.call(b, prop))
        cleanData_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var cleanData_spreadProps = (a, b) => cleanData_defProps(a, cleanData_getOwnPropDescs(b));
var cleanData_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (cleanData_hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && cleanData_getOwnPropSymbols)
    for (var prop of cleanData_getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && cleanData_propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};



const getCreatedAndModifiedComponents = (allComponents, initialComponents) => {
  const componentUIDsToReturn = Object.keys(allComponents).filter((compoUid) => {
    const currentCompo = (0,lodash.get)(allComponents, compoUid, {});
    const initialCompo = (0,lodash.get)(initialComponents, compoUid, {});
    const hasComponentBeenCreated = (0,lodash.get)(currentCompo, ["isTemporary"], false);
    const hasComponentBeenModified = !(0,lodash.isEqual)(currentCompo, initialCompo);
    return hasComponentBeenCreated || hasComponentBeenModified;
  });
  return (0,makeUnique/* default */.Z)(componentUIDsToReturn);
};
const formatComponent = (component, mainDataUID) => {
  const formattedAttributes = formatAttributes(
    (0,lodash.get)(component, "schema.attributes", []),
    mainDataUID
  );
  const compoUID = (0,lodash.get)(component, "isTemporary", false) ? { tmpUID: component.uid } : { uid: component.uid };
  const formattedComponent = Object.assign(
    {},
    compoUID,
    { category: component.category },
    (0,lodash.omit)(component.schema, "attributes"),
    { attributes: formattedAttributes }
  );
  return formattedComponent;
};
const formatMainDataType = (data, isComponent = false) => {
  const mainDataUID = (0,lodash.get)(data, "uid", null);
  const formattedAttributes = formatAttributes((0,lodash.get)(data, "schema.attributes", []), mainDataUID);
  const initObj = isComponent ? { category: (0,lodash.get)(data, "category", "") } : {};
  const formattedContentType = Object.assign(initObj, (0,lodash.omit)(data.schema, "attributes"), {
    attributes: formattedAttributes
  });
  delete formattedContentType.uid;
  delete formattedContentType.isTemporary;
  delete formattedContentType.visible;
  delete formattedContentType.restrictRelationsTo;
  return formattedContentType;
};
const formatAttributes = (attributes, mainDataUID) => {
  return attributes.reduce((acc, _a) => {
    var _b = _a, { name } = _b, rest = cleanData_objRest(_b, ["name"]);
    const currentAttribute = rest;
    const hasARelationWithMainDataUID = currentAttribute.target === mainDataUID;
    const isRelationType = currentAttribute.type === "relation";
    const currentTargetAttribute = (0,lodash.get)(currentAttribute, "targetAttribute", null);
    if (!hasARelationWithMainDataUID) {
      if (isRelationType) {
        const relationAttr = Object.assign({}, currentAttribute, {
          targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
        });
        acc[name] = removeNullKeys(relationAttr);
      } else {
        acc[name] = removeNullKeys(currentAttribute);
      }
    }
    if (hasARelationWithMainDataUID) {
      const target = currentAttribute.target;
      const formattedRelationAttribute = Object.assign({}, currentAttribute, {
        target,
        targetAttribute: formatRelationTargetAttribute(currentTargetAttribute)
      });
      acc[name] = removeNullKeys(formattedRelationAttribute);
    }
    if (currentAttribute.customField) {
      const customFieldAttribute = cleanData_spreadProps(cleanData_spreadValues({}, currentAttribute), { type: "customField" });
      acc[name] = removeNullKeys(customFieldAttribute);
    }
    return acc;
  }, {});
};
const formatRelationTargetAttribute = (targetAttribute) => targetAttribute === "-" ? null : targetAttribute;
const removeNullKeys = (obj) => Object.keys(obj).reduce((acc, current) => {
  if (obj[current] !== null && current !== "plugin") {
    acc[current] = obj[current];
  }
  return acc;
}, {});
const getComponentsToPost = (allComponents, initialComponents, mainDataUID, isCreatingData = false) => {
  const componentsToFormat = getCreatedAndModifiedComponents(allComponents, initialComponents);
  const formattedComponents = componentsToFormat.map((compoUID) => {
    const currentCompo = (0,lodash.get)(allComponents, compoUID, {});
    const formattedComponent = formatComponent(currentCompo, mainDataUID, isCreatingData);
    return formattedComponent;
  });
  return formattedComponents;
};
const sortContentType = (types) => (0,lodash.sortBy)(
  Object.keys(types).map((uid) => ({
    visible: types[uid].schema.visible,
    name: uid,
    title: types[uid].schema.displayName,
    plugin: types[uid].plugin || null,
    uid,
    to: `/plugins/${pluginId/* default */.Z}/content-types/${uid}`,
    kind: types[uid].schema.kind,
    restrictRelationsTo: types[uid].schema.restrictRelationsTo
  })).filter((obj) => obj !== null),
  (obj) => (0,lodash.camelCase)(obj.title)
);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/serverRestartWatcher.js
const SERVER_HAS_NOT_BEEN_KILLED_MESSAGE = "did-not-kill-server";
const SERVER_HAS_BEEN_KILLED_MESSAGE = "server is down";
function serverRestartWatcher(response, didShutDownServer) {
  return new Promise((resolve) => {
    fetch(`${strapi.backendURL}/_health`, {
      method: "HEAD",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Keep-Alive": false
      }
    }).then((res) => {
      if (res.status >= 400) {
        throw new Error(SERVER_HAS_BEEN_KILLED_MESSAGE);
      }
      if (!didShutDownServer) {
        throw new Error(SERVER_HAS_NOT_BEEN_KILLED_MESSAGE);
      }
      resolve(response);
    }).catch((err) => {
      setTimeout(() => {
        return serverRestartWatcher(
          response,
          err.message !== SERVER_HAS_NOT_BEEN_KILLED_MESSAGE
        ).then(resolve);
      }, 100);
    });
  });
}

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/validateSchema.js
const validateSchema = (schema) => {
  const dynamicZoneAttributes = Object.values(schema.attributes).filter(
    ({ type }) => type === "dynamiczone"
  );
  return dynamicZoneAttributes.every(
    ({ components }) => Array.isArray(components) && components.length > 0
  );
};
/* harmony default export */ const utils_validateSchema = (validateSchema);

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/constants.js
var DataManagerProvider_constants = __webpack_require__(92407);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/reducer.js
var DataManagerProvider_reducer = __webpack_require__(87431);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/selectors.js



const dataManagerProviderDomain = () => (state) => state[`${pluginId/* default */.Z}_dataManagerProvider`] || DataManagerProvider_reducer/* initialState */.E;
const makeSelectDataManagerProvider = () => (0,reselect_lib/* createSelector */.P1)(dataManagerProviderDomain(), (substate) => {
  return substate;
});
/* harmony default export */ const DataManagerProvider_selectors = (makeSelectDataManagerProvider);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/utils/formatSchemas.js
var formatSchemas_defProp = Object.defineProperty;
var formatSchemas_defProps = Object.defineProperties;
var formatSchemas_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatSchemas_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatSchemas_hasOwnProp = Object.prototype.hasOwnProperty;
var formatSchemas_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatSchemas_defNormalProp = (obj, key, value) => key in obj ? formatSchemas_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatSchemas_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatSchemas_hasOwnProp.call(b, prop))
      formatSchemas_defNormalProp(a, prop, b[prop]);
  if (formatSchemas_getOwnPropSymbols)
    for (var prop of formatSchemas_getOwnPropSymbols(b)) {
      if (formatSchemas_propIsEnum.call(b, prop))
        formatSchemas_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatSchemas_spreadProps = (a, b) => formatSchemas_defProps(a, formatSchemas_getOwnPropDescs(b));
const formatSchemas = (schemas) => {
  return Object.keys(schemas).reduce((acc, current) => {
    const schema = schemas[current].schema;
    acc[current] = formatSchemas_spreadProps(formatSchemas_spreadValues({}, schemas[current]), {
      schema: formatSchemas_spreadProps(formatSchemas_spreadValues({}, schema), { attributes: toAttributesArray(schema.attributes) })
    });
    return acc;
  }, {});
};
const toAttributesArray = (attributes) => {
  return Object.keys(attributes).reduce((acc, current) => {
    acc.push(formatSchemas_spreadProps(formatSchemas_spreadValues({}, attributes[current]), { name: current }));
    return acc;
  }, []);
};
/* harmony default export */ const utils_formatSchemas = (formatSchemas);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/DataManagerProvider/index.js
/* provided dependency */ var DataManagerProvider_console = __webpack_require__(25108);
var DataManagerProvider_defProp = Object.defineProperty;
var DataManagerProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var DataManagerProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var DataManagerProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var DataManagerProvider_defNormalProp = (obj, key, value) => key in obj ? DataManagerProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var DataManagerProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (DataManagerProvider_hasOwnProp.call(b, prop))
      DataManagerProvider_defNormalProp(a, prop, b[prop]);
  if (DataManagerProvider_getOwnPropSymbols)
    for (var prop of DataManagerProvider_getOwnPropSymbols(b)) {
      if (DataManagerProvider_propIsEnum.call(b, prop))
        DataManagerProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var DataManagerProvider_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



























const DataManagerProvider = ({
  allIcons,
  children,
  components,
  contentTypes,
  isLoading,
  isLoadingForDataToBeSet,
  initialData,
  modifiedData,
  reservedNames
}) => {
  const dispatch = (0,lib.useDispatch)();
  const toggleNotification = (0,build.useNotification)();
  const { lockAppWithAutoreload, unlockAppWithAutoreload } = (0,build.useAutoReloadOverlayBlocker)();
  const { setCurrentStep } = (0,build.useGuidedTour)();
  const { getPlugin } = (0,build.useStrapiApp)();
  const { apis } = getPlugin(pluginId/* default */.Z);
  const { autoReload } = (0,build.useAppInfos)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { refetchPermissions } = (0,build.useRBACProvider)();
  const { pathname } = (0,react_router_dom_min.useLocation)();
  const { onCloseModal } = (0,useFormModalNavigation/* default */.Z)();
  const contentTypeMatch = (0,react_router_dom_min.useRouteMatch)(`/plugins/${pluginId/* default */.Z}/content-types/:uid`);
  const componentMatch = (0,react_router_dom_min.useRouteMatch)(
    `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid/:componentUid`
  );
  const formatMessageRef = (0,react.useRef)();
  formatMessageRef.current = formatMessage;
  const isInDevelopmentMode = autoReload;
  const isInContentTypeView = contentTypeMatch !== null;
  const firstKeyToMainSchema = isInContentTypeView ? "contentType" : "component";
  const currentUid = isInContentTypeView ? (0,lodash.get)(contentTypeMatch, "params.uid", null) : (0,lodash.get)(componentMatch, "params.componentUid", null);
  const getDataRef = (0,react.useRef)();
  const endPoint = isInContentTypeView ? "content-types" : "components";
  getDataRef.current = () => DataManagerProvider_async(void 0, null, function* () {
    try {
      const [
        {
          data: { data: componentsArray }
        },
        {
          data: { data: contentTypesArray }
        },
        { data: reservedNames2 }
      ] = yield Promise.all(
        ["components", "content-types", "reserved-names"].map((endPoint2) => {
          return axiosInstance.get(endPoint2);
        })
      );
      const components2 = utils_createDataObject(componentsArray);
      const formattedComponents = utils_formatSchemas(components2);
      const contentTypes2 = utils_createDataObject(contentTypesArray);
      const formattedContentTypes = utils_formatSchemas(contentTypes2);
      dispatch({
        type: DataManagerProvider_constants/* GET_DATA_SUCCEEDED */.Id,
        components: formattedComponents,
        contentTypes: formattedContentTypes,
        reservedNames: reservedNames2
      });
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  (0,react.useEffect)(() => {
    getDataRef.current();
    return () => {
      dispatch({ type: DataManagerProvider_constants/* RELOAD_PLUGIN */.Zl });
    };
  }, []);
  (0,react.useEffect)(() => {
    if (!isLoading && currentUid) {
      setModifiedData();
    }
  }, [isLoading, pathname, currentUid]);
  (0,react.useEffect)(() => {
    if (!autoReload) {
      toggleNotification({
        type: "info",
        message: { id: (0,getTrad/* default */.Z)("notification.info.autoreaload-disable") }
      });
    }
  }, [autoReload, toggleNotification]);
  const addAttribute = (attributeToSet, forTarget, targetUid, isEditing = false, initialAttribute, shouldAddComponentToData = false) => {
    const actionType = isEditing ? DataManagerProvider_constants/* EDIT_ATTRIBUTE */.JO : DataManagerProvider_constants/* ADD_ATTRIBUTE */.gz;
    dispatch({
      type: actionType,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute,
      shouldAddComponentToData
    });
  };
  const addCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CUSTOM_FIELD_ATTRIBUTE */.Ir,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const editCustomFieldAttribute = ({ attributeToSet, forTarget, targetUid, initialAttribute }) => {
    dispatch({
      type: DataManagerProvider_constants/* EDIT_CUSTOM_FIELD_ATTRIBUTE */.Ly,
      attributeToSet,
      forTarget,
      targetUid,
      initialAttribute
    });
  };
  const addCreatedComponentToDynamicZone = (dynamicZoneTarget, componentsToAdd) => {
    dispatch({
      type: DataManagerProvider_constants/* ADD_CREATED_COMPONENT_TO_DYNAMIC_ZONE */.Uu,
      dynamicZoneTarget,
      componentsToAdd
    });
  };
  const createSchema = (data, schemaType, uid, componentCategory, shouldAddComponentToData = false) => {
    const type = schemaType === "contentType" ? DataManagerProvider_constants/* CREATE_SCHEMA */.Sh : DataManagerProvider_constants/* CREATE_COMPONENT_SCHEMA */.VR;
    dispatch({
      type,
      data,
      componentCategory,
      schemaType,
      uid,
      shouldAddComponentToData
    });
  };
  const changeDynamicZoneComponents = (dynamicZoneTarget, newComponents) => {
    dispatch({
      type: DataManagerProvider_constants/* CHANGE_DYNAMIC_ZONE_COMPONENTS */.o_,
      dynamicZoneTarget,
      newComponents
    });
  };
  const removeAttribute = (mainDataKey, attributeToRemoveName, componentUid = "") => {
    const type = mainDataKey === "components" ? DataManagerProvider_constants/* REMOVE_FIELD_FROM_DISPLAYED_COMPONENT */.lw : DataManagerProvider_constants/* REMOVE_FIELD */.ai;
    if (mainDataKey === "contentType") {
      trackUsage("willDeleteFieldOfContentType");
    }
    dispatch({
      type,
      mainDataKey,
      attributeToRemoveName,
      componentUid
    });
  };
  const deleteCategory = (categoryUid) => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/component-categories/${categoryUid}`;
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)("popUpWarning.bodyMessage.category.delete")
        })
      );
      onCloseModal();
      if (userConfirm) {
        lockAppWithAutoreload();
        yield axiosInstance["delete"](requestURL);
        yield serverRestartWatcher(true);
        yield unlockAppWithAutoreload();
        yield updatePermissions();
      }
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const deleteData = () => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/${endPoint}/${currentUid}`;
      const isTemporary = (0,lodash.get)(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const userConfirm = window.confirm(
        formatMessage({
          id: (0,getTrad/* default */.Z)(
            `popUpWarning.bodyMessage.${isInContentTypeView ? "contentType" : "component"}.delete`
          )
        })
      );
      onCloseModal();
      if (userConfirm) {
        if (isTemporary) {
          dispatch({ type: DataManagerProvider_constants/* DELETE_NOT_SAVED_TYPE */.Ap });
          return;
        }
        lockAppWithAutoreload();
        yield axiosInstance["delete"](requestURL);
        yield serverRestartWatcher(true);
        yield unlockAppWithAutoreload();
        yield updatePermissions();
      }
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const editCategory = (categoryUid, body) => DataManagerProvider_async(void 0, null, function* () {
    try {
      const requestURL = `/component-categories/${categoryUid}`;
      onCloseModal();
      lockAppWithAutoreload();
      yield axiosInstance({ url: requestURL, method: "PUT", data: body });
      yield serverRestartWatcher(true);
      yield unlockAppWithAutoreload();
      yield updatePermissions();
    } catch (err) {
      DataManagerProvider_console.error({ err });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const getAllComponentsThatHaveAComponentInTheirAttributes = () => {
    const allCompos = Object.assign({}, components, modifiedData.components);
    if (!isInContentTypeView) {
      const currentEditedCompo = (0,lodash.get)(modifiedData, "component", {});
      (0,lodash.set)(allCompos, (0,lodash.get)(currentEditedCompo, ["uid"], ""), currentEditedCompo);
    }
    const composWithCompos = retrieveComponentsThatHaveComponents(allCompos);
    return (0,makeUnique/* default */.Z)(composWithCompos);
  };
  const getAllNestedComponents = () => {
    const appNestedCompo = utils_retrieveNestedComponents(components);
    const editingDataNestedCompos = utils_retrieveNestedComponents(modifiedData.components || {});
    return (0,makeUnique/* default */.Z)([...editingDataNestedCompos, ...appNestedCompo]);
  };
  const removeComponentFromDynamicZone = (dzName, componentToRemoveIndex) => {
    dispatch({
      type: DataManagerProvider_constants/* REMOVE_COMPONENT_FROM_DYNAMIC_ZONE */.NG,
      dzName,
      componentToRemoveIndex
    });
  };
  const setModifiedData = () => {
    const currentSchemas = isInContentTypeView ? contentTypes : components;
    const schemaToSet = (0,lodash.get)(currentSchemas, currentUid, {
      schema: { attributes: [] }
    });
    const retrievedComponents = (0,retrieveComponentsFromSchema/* default */.Z)(
      schemaToSet.schema.attributes,
      components
    );
    const newSchemaToSet = utils_createModifiedDataSchema(
      schemaToSet,
      retrievedComponents,
      components,
      isInContentTypeView
    );
    const hasJustCreatedSchema = (0,lodash.get)(schemaToSet, "isTemporary", false) && (0,lodash.size)((0,lodash.get)(schemaToSet, "schema.attributes", [])) === 0;
    dispatch({
      type: DataManagerProvider_constants/* SET_MODIFIED_DATA */.xx,
      schemaToSet: newSchemaToSet,
      hasJustCreatedSchema
    });
  };
  const shouldRedirect = (0,react.useMemo)(() => {
    const dataSet = isInContentTypeView ? contentTypes : components;
    if (currentUid === "create-content-type") {
      return false;
    }
    return !Object.keys(dataSet).includes(currentUid) && !isLoading;
  }, [components, contentTypes, currentUid, isInContentTypeView, isLoading]);
  const redirectEndpoint = (0,react.useMemo)(() => {
    const allowedEndpoints = Object.keys(contentTypes).filter((uid) => (0,lodash.get)(contentTypes, [uid, "schema", "visible"], true)).sort();
    return (0,lodash.get)(allowedEndpoints, "0", "create-content-type");
  }, [contentTypes]);
  if (shouldRedirect) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, {
      to: `/plugins/${pluginId/* default */.Z}/content-types/${redirectEndpoint}`
    });
  }
  const submitData = (additionalContentTypeData) => DataManagerProvider_async(void 0, null, function* () {
    var _a, _b;
    try {
      const isCreating = (0,lodash.get)(modifiedData, [firstKeyToMainSchema, "isTemporary"], false);
      const body = {
        components: getComponentsToPost(
          modifiedData.components,
          components,
          currentUid,
          isCreating
        )
      };
      if (isInContentTypeView) {
        const contentType = apis.forms.mutateContentTypeSchema(
          DataManagerProvider_spreadValues(DataManagerProvider_spreadValues({}, formatMainDataType(modifiedData.contentType)), additionalContentTypeData),
          initialData.contentType
        );
        const isValidSchema = utils_validateSchema(contentType);
        if (!isValidSchema) {
          toggleNotification({
            type: "warning",
            message: {
              id: (0,getTrad/* default */.Z)("notification.error.dynamiczone-min.validation"),
              defaultMessage: "At least one component is required in a dynamic zone to be able to save a content type"
            }
          });
          return;
        }
        body.contentType = contentType;
        trackUsage("willSaveContentType");
      } else {
        body.component = formatMainDataType(modifiedData.component, true);
        trackUsage("willSaveComponent");
      }
      const method = isCreating ? "POST" : "PUT";
      const baseURL = `/${endPoint}`;
      const requestURL = isCreating ? baseURL : `${baseURL}/${currentUid}`;
      lockAppWithAutoreload();
      yield axiosInstance({
        url: requestURL,
        method,
        data: body
      });
      yield serverRestartWatcher(true);
      yield unlockAppWithAutoreload();
      if (isCreating && (((_a = initialData.contentType) == null ? void 0 : _a.schema.kind) === "collectionType" || ((_b = initialData.contentType) == null ? void 0 : _b.schema.kind) === "singleType")) {
        setCurrentStep("contentTypeBuilder.success");
      }
      if (isInContentTypeView) {
        trackUsage("didSaveContentType");
        const oldName = (0,lodash.get)(body, ["contentType", "schema", "name"], "");
        const newName = (0,lodash.get)(initialData, ["contentType", "schema", "name"], "");
        if (!isCreating && oldName !== newName) {
          trackUsage("didEditNameOfContentType");
        }
      } else {
        trackUsage("didSaveComponent");
      }
      yield updatePermissions();
    } catch (err) {
      if (!isInContentTypeView) {
        trackUsage("didNotSaveComponent");
      }
      DataManagerProvider_console.error({ err: err.response });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    } finally {
      unlockAppWithAutoreload();
    }
  });
  const updatePermissions = () => DataManagerProvider_async(void 0, null, function* () {
    yield refetchPermissions();
  });
  const updateSchema = (data, schemaType, componentUID) => {
    dispatch({
      type: DataManagerProvider_constants/* UPDATE_SCHEMA */.bi,
      data,
      schemaType,
      uid: componentUID
    });
  };
  return /* @__PURE__ */ react.createElement(DataManagerContext/* default.Provider */.Z.Provider, {
    value: {
      addAttribute,
      addCustomFieldAttribute,
      addCreatedComponentToDynamicZone,
      allComponentsCategories: utils_retrieveSpecificInfoFromComponents(components, ["category"]),
      allIcons,
      changeDynamicZoneComponents,
      components,
      componentsGroupedByCategory: (0,lodash.groupBy)(components, "category"),
      componentsThatHaveOtherComponentInTheirAttributes: getAllComponentsThatHaveAComponentInTheirAttributes(),
      contentTypes,
      createSchema,
      deleteCategory,
      deleteData,
      editCategory,
      editCustomFieldAttribute,
      isInDevelopmentMode,
      initialData,
      isInContentTypeView,
      modifiedData,
      nestedComponents: getAllNestedComponents(),
      removeAttribute,
      removeComponentFromDynamicZone,
      reservedNames,
      setModifiedData,
      sortedContentTypesList: sortContentType(contentTypes),
      submitData,
      updateSchema
    }
  }, isLoadingForDataToBeSet ? /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) : /* @__PURE__ */ react.createElement(react.Fragment, null, children, isInDevelopmentMode && /* @__PURE__ */ react.createElement(components_FormModal, null)));
};
DataManagerProvider.defaultProps = {
  components: {}
};
DataManagerProvider.propTypes = {
  allIcons: (prop_types_default()).array.isRequired,
  children: (prop_types_default()).node.isRequired,
  components: (prop_types_default()).object,
  contentTypes: (prop_types_default()).object.isRequired,
  isLoading: (prop_types_default()).bool.isRequired,
  isLoadingForDataToBeSet: (prop_types_default()).bool.isRequired,
  initialData: (prop_types_default()).object.isRequired,
  modifiedData: (prop_types_default()).object.isRequired,
  reservedNames: (prop_types_default()).object.isRequired
};
const mapStateToProps = DataManagerProvider_selectors();
const withConnect = (0,lib.connect)(mapStateToProps, null);
/* harmony default export */ const components_DataManagerProvider = ((0,redux.compose)(withConnect)((0,react.memo)(DataManagerProvider)));

// EXTERNAL MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/contexts/FormModalNavigationContext.js
var FormModalNavigationContext = __webpack_require__(98422);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/constants.js
const INITIAL_STATE_DATA = {
  actionType: null,
  attributeName: null,
  attributeType: null,
  categoryName: null,
  dynamicZoneTarget: null,
  forTarget: null,
  modalType: null,
  isOpen: false,
  kind: null,
  step: null,
  targetUid: null,
  customFieldUid: null
};


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/FormModalNavigationProvider/index.js
var FormModalNavigationProvider_defProp = Object.defineProperty;
var FormModalNavigationProvider_defProps = Object.defineProperties;
var FormModalNavigationProvider_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var FormModalNavigationProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var FormModalNavigationProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var FormModalNavigationProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var FormModalNavigationProvider_defNormalProp = (obj, key, value) => key in obj ? FormModalNavigationProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var FormModalNavigationProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (FormModalNavigationProvider_hasOwnProp.call(b, prop))
      FormModalNavigationProvider_defNormalProp(a, prop, b[prop]);
  if (FormModalNavigationProvider_getOwnPropSymbols)
    for (var prop of FormModalNavigationProvider_getOwnPropSymbols(b)) {
      if (FormModalNavigationProvider_propIsEnum.call(b, prop))
        FormModalNavigationProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var FormModalNavigationProvider_spreadProps = (a, b) => FormModalNavigationProvider_defProps(a, FormModalNavigationProvider_getOwnPropDescs(b));





const FormModalNavigationProvider = ({ children }) => {
  const [state, setFormModalNavigationState] = (0,react.useState)(INITIAL_STATE_DATA);
  const { trackUsage } = (0,build.useTracking)();
  const onClickSelectCustomField = ({ attributeType, customFieldUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        modalType: "customField",
        attributeType,
        customFieldUid
      });
    });
  };
  const onClickSelectField = ({ attributeType, step }) => {
    if (state.forTarget === "contentType") {
      trackUsage("didSelectContentTypeFieldType", { type: attributeType });
    }
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        modalType: "attribute",
        step,
        attributeType
      });
    });
  };
  const onOpenModalAddComponentsToDZ = ({ dynamicZoneTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        dynamicZoneTarget,
        targetUid,
        modalType: "addComponentToDynamicZone",
        forTarget: "contentType",
        step: "1",
        actionType: "edit",
        isOpen: true
      });
    });
  };
  const onOpenModalAddField = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        actionType: "create",
        forTarget,
        targetUid,
        modalType: "chooseAttribute",
        isOpen: true
      });
    });
  };
  const onOpenModalCreateSchema = (nextState) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues(FormModalNavigationProvider_spreadValues({}, prevState), nextState), { isOpen: true });
    });
  };
  const onOpenModalEditCategory = (categoryName) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        categoryName,
        actionType: "edit",
        modalType: "editCategory",
        isOpen: true
      });
    });
  };
  const onOpenModalEditCustomField = ({
    forTarget,
    targetUid,
    attributeName,
    attributeType,
    customFieldUid
  }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType: "customField",
        customFieldUid,
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        isOpen: true
      });
    });
  };
  const onOpenModalEditField = ({ forTarget, targetUid, attributeName, attributeType, step }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType: "attribute",
        actionType: "edit",
        forTarget,
        targetUid,
        attributeName,
        attributeType,
        step,
        isOpen: true
      });
    });
  };
  const onOpenModalEditSchema = ({ modalType, forTarget, targetUid, kind }) => {
    setFormModalNavigationState((prevState) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prevState), {
        modalType,
        actionType: "edit",
        forTarget,
        targetUid,
        kind,
        isOpen: true
      });
    });
  };
  const onCloseModal = () => {
    setFormModalNavigationState(INITIAL_STATE_DATA);
  };
  const onNavigateToChooseAttributeModal = ({ forTarget, targetUid }) => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        forTarget,
        targetUid,
        modalType: "chooseAttribute"
      });
    });
  };
  const onNavigateToCreateComponentStep2 = () => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        attributeType: "component",
        modalType: "attribute",
        step: "2"
      });
    });
  };
  const onNavigateToAddCompoToDZModal = ({ dynamicZoneTarget }) => {
    setFormModalNavigationState((prev) => {
      return FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, prev), {
        dynamicZoneTarget,
        modalType: "addComponentToDynamicZone",
        actionType: "create",
        step: "1",
        attributeType: null,
        attributeName: null
      });
    });
  };
  return /* @__PURE__ */ react.createElement(FormModalNavigationContext/* default.Provider */.Z.Provider, {
    value: FormModalNavigationProvider_spreadProps(FormModalNavigationProvider_spreadValues({}, state), {
      onClickSelectField,
      onClickSelectCustomField,
      onCloseModal,
      onNavigateToChooseAttributeModal,
      onNavigateToAddCompoToDZModal,
      onOpenModalAddComponentsToDZ,
      onNavigateToCreateComponentStep2,
      onOpenModalAddField,
      onOpenModalCreateSchema,
      onOpenModalEditCategory,
      onOpenModalEditField,
      onOpenModalEditCustomField,
      onOpenModalEditSchema,
      setFormModalNavigationState
    })
  }, children);
};
FormModalNavigationProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const components_FormModalNavigationProvider = (FormModalNavigationProvider);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/RecursivePath/index.js



const ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-recursive-path */ 5905).then(__webpack_require__.bind(__webpack_require__, 95096))
);
const RecursivePath = () => {
  const { url } = (0,react_router_dom_min.useRouteMatch)();
  const { categoryUid } = (0,react_router_dom_min.useParams)();
  return /* @__PURE__ */ react.createElement(react.Suspense, {
    fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `${url}/:componentUid`
  }, /* @__PURE__ */ react.createElement(ListView, {
    categoryId: categoryUid
  }))));
};
/* harmony default export */ const pages_RecursivePath = (RecursivePath);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/App/utils/icons.json
const icons_namespaceObject = JSON.parse('["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"]');
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/v2/SubNav.js
var SubNav = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextButton.js
var TextButton = __webpack_require__(83662);
// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(41609);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(89734);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__(63852);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/useContentTypeBuilderMenu.js
var useContentTypeBuilderMenu_defProp = Object.defineProperty;
var useContentTypeBuilderMenu_defProps = Object.defineProperties;
var useContentTypeBuilderMenu_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useContentTypeBuilderMenu_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useContentTypeBuilderMenu_hasOwnProp = Object.prototype.hasOwnProperty;
var useContentTypeBuilderMenu_propIsEnum = Object.prototype.propertyIsEnumerable;
var useContentTypeBuilderMenu_defNormalProp = (obj, key, value) => key in obj ? useContentTypeBuilderMenu_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useContentTypeBuilderMenu_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useContentTypeBuilderMenu_hasOwnProp.call(b, prop))
      useContentTypeBuilderMenu_defNormalProp(a, prop, b[prop]);
  if (useContentTypeBuilderMenu_getOwnPropSymbols)
    for (var prop of useContentTypeBuilderMenu_getOwnPropSymbols(b)) {
      if (useContentTypeBuilderMenu_propIsEnum.call(b, prop))
        useContentTypeBuilderMenu_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useContentTypeBuilderMenu_spreadProps = (a, b) => useContentTypeBuilderMenu_defProps(a, useContentTypeBuilderMenu_getOwnPropDescs(b));











const useContentTypeBuilderMenu = () => {
  const {
    components,
    componentsGroupedByCategory,
    contentTypes,
    isInDevelopmentMode,
    sortedContentTypesList,
    modifiedData,
    initialData
  } = (0,useDataManager/* default */.Z)();
  const toggleNotification = (0,build.useNotification)();
  const { trackUsage } = (0,build.useTracking)();
  const [search, setSearch] = (0,react.useState)("");
  const { onOpenModalCreateSchema, onOpenModalEditCategory } = (0,useFormModalNavigation/* default */.Z)();
  const componentsData = sortBy_default()(
    Object.keys(componentsGroupedByCategory).map((category) => ({
      name: category,
      title: category,
      isEditable: isInDevelopmentMode,
      onClickEdit(e, data2) {
        e.stopPropagation();
        if (canOpenModalCreateCTorComponent) {
          onOpenModalEditCategory(data2.name);
        } else {
          toggleNotificationCannotCreateSchema();
        }
      },
      links: sortBy_default()(
        componentsGroupedByCategory[category].map((compo) => ({
          name: compo.uid,
          to: `/plugins/${pluginId/* default */.Z}/component-categories/${category}/${compo.uid}`,
          title: compo.schema.displayName
        })),
        (obj) => obj.title
      )
    })),
    (obj) => obj.title
  );
  const canOpenModalCreateCTorComponent = !Object.keys(contentTypes).some((ct) => contentTypes[ct].isTemporary === true) && !Object.keys(components).some((component) => components[component].isTemporary === true) && isEqual_default()(modifiedData, initialData);
  const handleClickOpenModalCreateCollectionType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateContentType`);
      const nextState = {
        modalType: "contentType",
        kind: "collectionType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateSingleType = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage(`willCreateSingleType`);
      const nextState = {
        modalType: "contentType",
        kind: "singleType",
        actionType: "create",
        forTarget: "contentType"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const handleClickOpenModalCreateComponent = () => {
    if (canOpenModalCreateCTorComponent) {
      trackUsage("willCreateComponent");
      const nextState = {
        modalType: "component",
        kind: null,
        actionType: "create",
        forTarget: "component"
      };
      onOpenModalCreateSchema(nextState);
    } else {
      toggleNotificationCannotCreateSchema();
    }
  };
  const toggleNotificationCannotCreateSchema = () => {
    toggleNotification({
      type: "info",
      message: {
        id: `${(0,getTrad/* default */.Z)("notification.info.creating.notSaved")}`,
        defaultMessage: "Please save your work before creating a new collection type or component"
      }
    });
  };
  const displayedContentTypes = sortedContentTypesList.filter((obj) => obj.visible);
  const data = [
    {
      name: "models",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.models.name")}`,
        defaultMessage: "Collection Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.model.create")}`,
        defaultMessage: "Create new collection type",
        onClick: handleClickOpenModalCreateCollectionType
      },
      links: displayedContentTypes.filter((contentType) => contentType.kind === "collectionType")
    },
    {
      name: "singleTypes",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.single-types.name")}`,
        defaultMessage: "Single Types"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.single-types.create")}`,
        defaultMessage: "Create new single type",
        onClick: handleClickOpenModalCreateSingleType
      },
      links: displayedContentTypes.filter((singleType) => singleType.kind === "singleType")
    },
    {
      name: "components",
      title: {
        id: `${(0,getTrad/* default */.Z)("menu.section.components.name")}`,
        defaultMessage: "Components"
      },
      customLink: isInDevelopmentMode && {
        id: `${(0,getTrad/* default */.Z)("button.component.create")}`,
        defaultMessage: "Create a new component",
        onClick: handleClickOpenModalCreateComponent
      },
      links: componentsData
    }
  ];
  const matchByTitle = (links) => (0,match_sorter_cjs/* default */.ZP)(links, toLower_default()(search), { keys: [(item) => toLower_default()(item.title)] });
  const getMenu = () => {
    return data.map((section) => {
      const hasChild = section.links.some((l) => !isEmpty_default()(l.links));
      if (hasChild) {
        return useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, section), {
          links: section.links.map((l) => useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, l), { links: matchByTitle(l.links) }))
        });
      }
      return useContentTypeBuilderMenu_spreadProps(useContentTypeBuilderMenu_spreadValues({}, section), {
        links: matchByTitle(section.links)
      });
    });
  };
  return { menu: getMenu(), searchValue: search, onSearchChange: setSearch };
};
/* harmony default export */ const ContentTypeBuilderNav_useContentTypeBuilderMenu = (useContentTypeBuilderMenu);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/components/ContentTypeBuilderNav/index.js










const ContentTypeBuilderNav = () => {
  const { menu, searchValue, onSearchChange } = ContentTypeBuilderNav_useContentTypeBuilderMenu();
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(SubNav.SubNav, {
    ariaLabel: formatMessage({
      id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
      defaultMessage: "Content-Types Builder"
    })
  }, /* @__PURE__ */ react.createElement(SubNav.SubNavHeader, {
    searchable: true,
    value: searchValue,
    onClear: () => onSearchChange(""),
    onChange: (e) => onSearchChange(e.target.value),
    label: formatMessage({
      id: `${(0,getTrad/* default */.Z)("plugin.name")}`,
      defaultMessage: "Content-Types Builder"
    }),
    searchLabel: formatMessage({
      id: "global.search",
      defaultMessage: "Search"
    })
  }), /* @__PURE__ */ react.createElement(SubNav.SubNavSections, null, menu.map((section) => /* @__PURE__ */ react.createElement(react.Fragment, {
    key: section.name
  }, /* @__PURE__ */ react.createElement(SubNav.SubNavSection, {
    label: formatMessage({
      id: section.title.id,
      defaultMessage: section.title.defaultMessage
    }),
    collapsable: true,
    badgeLabel: section.links.length.toString()
  }, section.links.map((link) => {
    if (link.links) {
      return /* @__PURE__ */ react.createElement(SubNav.SubNavLinkSection, {
        key: link.name,
        label: upperFirst_default()(link.title)
      }, link.links.map((subLink) => /* @__PURE__ */ react.createElement(SubNav.SubNavLink, {
        as: react_router_dom_min.NavLink,
        to: subLink.to,
        active: subLink.active,
        key: subLink.name,
        isSubSectionChild: true
      }, upperFirst_default()(
        formatMessage({ id: subLink.name, defaultMessage: subLink.title })
      ))));
    }
    return /* @__PURE__ */ react.createElement(SubNav.SubNavLink, {
      as: react_router_dom_min.NavLink,
      to: link.to,
      active: link.active,
      key: link.name
    }, upperFirst_default()(formatMessage({ id: link.name, defaultMessage: link.title })));
  })), section.customLink && /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 7
  }, /* @__PURE__ */ react.createElement(TextButton.TextButton, {
    onClick: section.customLink.onClick,
    startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
    marginTop: 2
  }, formatMessage({
    id: section.customLink.id,
    defaultMessage: section.customLink.defaultMessage
  })))))));
};
/* harmony default export */ const components_ContentTypeBuilderNav = (ContentTypeBuilderNav);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-content-type-builder/admin/src/pages/App/index.js













const App_ListView = (0,react.lazy)(
  () => __webpack_require__.e(/* import() | content-type-builder-list-view */ 5905).then(__webpack_require__.bind(__webpack_require__, 95096))
);
const App = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const title = formatMessage({
    id: `${pluginId/* default */.Z}.plugin.name`,
    defaultMessage: "Content Types Builder"
  });
  const { startSection } = (0,build.useGuidedTour)();
  const startSectionRef = (0,react.useRef)(startSection);
  (0,react.useEffect)(() => {
    if (startSectionRef.current) {
      startSectionRef.current("contentTypeBuilder");
    }
  }, []);
  return /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
    permissions: permissions/* default.main */.Z.main
  }, /* @__PURE__ */ react.createElement(Helmet.Helmet, {
    title
  }), /* @__PURE__ */ react.createElement(components_FormModalNavigationProvider, null, /* @__PURE__ */ react.createElement(components_DataManagerProvider, {
    allIcons: icons_namespaceObject
  }, /* @__PURE__ */ react.createElement(Layout.Layout, {
    sideNav: /* @__PURE__ */ react.createElement(components_ContentTypeBuilderNav, null)
  }, /* @__PURE__ */ react.createElement(react.Suspense, {
    fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${pluginId/* default */.Z}/content-types/create-content-type`,
    component: App_ListView
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${pluginId/* default */.Z}/content-types/:uid`,
    component: App_ListView
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${pluginId/* default */.Z}/component-categories/:categoryUid`,
    component: pages_RecursivePath
  })))))));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 5002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pluginId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96124);

const getTrad = (id) => `${_pluginId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z}.${id}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrad);


/***/ }),

/***/ 23933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ 96347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsRegExp = __webpack_require__(23933),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ 39138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(80531),
    castSlice = __webpack_require__(40180),
    hasUnicode = __webpack_require__(62689),
    isObject = __webpack_require__(13218),
    isRegExp = __webpack_require__(96347),
    stringSize = __webpack_require__(88016),
    stringToArray = __webpack_require__(83140),
    toInteger = __webpack_require__(40554),
    toString = __webpack_require__(79833);

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;


/***/ }),

/***/ 44908:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseUniq = __webpack_require__(45652);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ })

}]);