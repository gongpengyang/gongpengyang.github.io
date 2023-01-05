var ultimateApp=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r,n,o,c,i,a,u=e(t((function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports})));!function(e){e.GetVersion="getVersion",e.CheckExist="checkMethodExist",e.SetTitle="setWebTitle",e.LHHeight="getLHHeight",e.OpenWebView="openNewWebView",e.CloseWebView="closeWebPage",e.OpenMp="openWeChatMiniProgram",e.GetImages="getImagesFromAlbum",e.CallCamera="callCamera",e.UpdateOrderList="updateOrderList",e.YChallenge="yChallenge",e.YChallengeFinish="challengeCompleted",e.ShareImageToWxFriends="shareImageToWXFriend",e.ShareImageToWxCircle="shareImageToWeChatCircle",e.ShareMiniProgramForWeb="shareMiniProgramForWeb",e.ShareWechatWebPage="shareWeChatWebPage",e.GetCityInfo="getCityInfo",e.GetLatLon="getLatLonForWeb",e.CallPhone="callPhoneForWeb",e.CallFlutterChangeRole="callFlutterChangeRole",e.CallPayCenter="callPayCenter",e.CallPayWeChatOrAli="callPayWeChatOrAli",e.QrCodeScan="qrCodeScan",e.QrCodeScanForOriginalResult="qrCodeScanForOriginalResult",e.VideoInterview="videoInterview",e.IsWifiConnected="isWifiConnected",e.BackgroundCheck="backgroundCheck",e.ServiceAreaLocation="serviceAreaLocation",e.Logout="logout",e.GetUserInfo="getUserInfo",e.CallMapNavigation="callMapNavigation",e.ChangePassport="changePassword",e.StartFaceBankCertify="startFaceBankCertify",e.FaaContractSigningPermission="faaContractSigningPermission",e.SetWebReturnParams="setWebReturnParams",e.FamilyPermissions="familyPermissions",e.ShowOrHideTitleBar="showOrHideTitleBar",e.OpenPhotoBrowser="openPhotoBrowser",e.OpenPDFReaderPage="openPDFReaderPage",e.OpenMeetingPage="openMeetingPage",e.WebCallSavePicture="webCallSavePicture",e.GetSomeInfo="getSomeInfo",e.DoLaunchOffAccount="doLaunchOffAccount",e.WebGetCropImage="webGetCropImage",e.OpenFlutterPage="openFlutterPage",e.WebSetKV="webSetKV",e.WebGetV="webGetV",e.OpenWebPageWithBrowser="openWebPageWithBrowser",e.MoveTakePhotoComplete="moveTakePhotoComplete",e.OpenUrlWithCheckGesturePassword="openUrlWithCheckGesturePassword",e.GetMeetingSDKVersion="getMeetingSDKVersion"}(r||(r={})),function(e){e.Show="pageshow",e.Hide="pagehide"}(n||(n={})),function(e){e.PushMessage="pushMessage"}(o||(o={})),function(e){e[e.KeyBoard=1]="KeyBoard"}(c||(c={})),function(e){e.KeyBoard="keyboardToggle"}(i||(i={})),function(e){e.Release="release",e.Preview="preview",e.Test="test"}(a||(a={}));var f=t((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t.indexOf(r=c[n])>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports}));e(f);var s=f,p=e(t((function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o=s(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t.indexOf(r=c[n])>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.__esModule=!0,e.exports.default=e.exports}))),O={debug:!0,name:"aunt",sdkName:"ultimateApp",entry:"./src/index.ts",outputDir:"dist",format:["iife","esm"],schema:"ultimate",nativePath:"native/func/core",timeout:3e3},l=O,b=200,y=~~O.timeout||3e3;function g(e){return Array.isArray(e)}function P(e){return"[object Object]"===function(e){return Object.prototype.toString.call(e)}(e)}function j(e){return"function"==typeof e}function h(e){return"string"==typeof e}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;return new Promise((function(t,r){setTimeout((function(){r(new Error("调用超时"))}),e)}))}var v=function(){var e;l.debug&&(e=console).log.apply(e,arguments)},m=function(){var e;l.debug&&(e=console).error.apply(e,arguments)},d=e(t((function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports}))),S=e(t((function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports})));var C=void 0!==window.Map?window.Map:function(){function e(){d(this,e),u(this,"data",{})}return S(e,[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"delete",value:function(e){delete this.data[e]}}]),e}(),D=new C;function E(e,t){if(e&&h(e)){var r=D.get(e);g(r)?r.forEach((function(e){e(t)})):j(r)&&r(t)}else m("[emit]: 触发事件eventName为必传")}var k=new C;function W(e){var t="".concat(Date.now());return k.set(t,e),t}var I=["responseId"],F=["type"],L=["type"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){if(!e||!h(e))throw new Error("invoke Error: invoke name is required");var n=function(e,t,r){var n=t,o=r||function(){};return j(t)&&(n={},o=t),j(o)||(o=function(){}),n&&P(n)||(n={}),{apiName:e,args:n,cb:o}}(e,t,r);return function(e,t,r){var n=W(r),o=l.schema,c=l.nativePath,i=encodeURIComponent(JSON.stringify(T(T({},t),{},{requestId:n})));v("[log]invoke调用native方法：".concat(e,", requestId：").concat(n,"，参数："),t);var a="".concat(o,"://").concat(c,"/").concat(e,"?params=").concat(i);return v("[log]invoke调用native方法：".concat(a)),function(e){var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout((function(){document.body.removeChild(t)}),200)}(a),n}(n.apiName,n.args,n.cb)}var G,A,U,R,B,_,H,K,q,J,Q,Y,z,X,Z,$=Object.freeze({__proto__:null,_dispatchMessageFromNative:function(e){v("[log]dispatch结果：",e);try{var t=h(e)?JSON.parse(e):e,r=t.code,n=t.message,o=t.data,c=o.responseId,i=p(o,I);if(+r!==b)throw new Error(n);!function(e,t){var r=k.get(e);r&&j(r)?(r.call(null,t),k.delete(e)):m("[callStackTrigger]: 未找到responseId为".concat(e,"的调用"))}(c,{code:r,msg:n,data:M({},i)})}catch(e){m("[dispatch]: ",e)}},_dispatchLifeCircleFromNative:function(e){v("[log]dispatchLifeCircle结果：",e);try{var t=h(e)?JSON.parse(e):e,r=t.code,n=t.message,o=t.data,c=o.type,i=p(o,F);if(+r!==b)throw new Error(n);E(c,i)}catch(e){m("[dispatchLifeCircle]: ",e)}},_dispatchPushMessageFromNative:function(e){v("[log]dispatchPushMessage结果：",e);try{var t=h(e)?JSON.parse(e):e,r=t.data;if(+t.code!==b)throw new Error(t.message);E(o.PushMessage,r)}catch(e){m("[dispatchPushMessage]: ",e)}},_dispatchEventListenerFromNative:function(e){v("[log]dispatchEventListener结果：",e);try{var t=h(e)?JSON.parse(e):e,r=t.data;if(+t.code!==b)throw new Error(t.message);var n=r||{},o=n.type,a=p(n,L);if(+o===c.KeyBoard)return void E(i.KeyBoard,a);m("[dispatchEventListener]: 当前事件未添加到事件库")}catch(e){m("[dispatchEventListener]: ",e)}},on:function(e,t){if(e&&h(e))if(t&&j(t)){var r=D.get(e);r?(r.push(t),D.set(e,r)):D.set(e,t)}else m("[on]: 注册监听事件callBack回调为必传，且需要为function类型");else m("[on]: 注册监听事件eventName参数为必传，且需要为string类型")},off:function(e,t){if(e&&h(e)){var r=D.get(e);r&&(g(r)&&(r=r.filter((function(e){return e!==t}))).length>0?D.set(e,r):D.delete(e))}else m("[off]: 取消监听事件eventName为必传")},emit:E,invoke:V});function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=V(r.CallCamera,re({},e),(function(e){t&&t(e)}));return n}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e,t){if(P(e)){var n=V(r.CallPayCenter,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e,t){if(P(e)){var n=V(r.CallPayWeChatOrAli,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}}function fe(e,t){if(t&&j(t))return V(r.CheckExist,{methodName:e},(function(e){t&&t(e)}))}function se(e){return V(r.FaaContractSigningPermission,(function(t){e&&e(t)}))}function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=V(r.GetImages,Oe({},e),(function(e){t&&t(e)}));return n}function be(e){return V(r.GetLatLon,(function(t){e&&e(t)}))}function ye(e){if(e&&j(e))return V(r.LHHeight,(function(t){e&&e(t)}))}function ge(e){if(e&&j(e))return V(r.GetUserInfo,(function(t){e&&e(t)}))}function Pe(e){if(e&&j(e))return V(r.GetVersion,(function(t){e&&e(t)}))}function je(e){return V(r.IsWifiConnected,(function(t){e&&e(t)}))}function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function de(e){return V(r.QrCodeScan,(function(t){e&&e(t)}))}function Se(e){return V(r.QrCodeScanForOriginalResult,(function(t){e&&e(t)}))}function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function We(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ie(e,t){return V(r.StartFaceBankCertify,e,(function(e){t&&t(e)}))}function Fe(e){return V(r.VideoInterview,(function(t){e&&e(t)}))}function Le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e,t){var n=V(r.FamilyPermissions,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ae(e,t){var n=V(r.WebCallSavePicture,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}function Ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e,t){var n=V(r.GetSomeInfo,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ue(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e,t){var n=V(r.WebGetCropImage,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Je(e,t){var n=V(r.WebGetV,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){t&&t(e)}));return n}function Qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Xe(e){if(e&&j(e))return V(r.GetMeetingSDKVersion,(function(t){e&&e(t)}))}!function(e){e.Normal="0",e.Self="1"}(G||(G={})),function(e){e[e.SUCCESS=1]="SUCCESS",e[e.FAIL=0]="FAIL"}(A||(A={})),function(e){e[e.SUCCESS=1]="SUCCESS",e[e.FAIL=0]="FAIL"}(U||(U={})),function(e){e[e.Wechat=1]="Wechat",e[e.Alipay=2]="Alipay"}(R||(R={})),function(e){e.Exist="1",e.NotExist="0"}(B||(B={})),function(e){e.Success="0",e.Fail="1"}(_||(_={})),function(e){e.FIX="1",e.AUTO="0"}(H||(H={})),function(e){e.Show="1",e.Hide="0"}(K||(K={})),function(e){e.Close="1",e.Show="0"}(q||(q={})),function(e){e[e.CIRCLE=1]="CIRCLE",e[e.FRIEND=2]="FRIEND"}(J||(J={})),function(e){e.SUCCESS="1",e.FAIL="0"}(Q||(Q={})),function(e){e[e.UNFINISH=1]="UNFINISH",e[e.FINISH=0]="FINISH"}(Y||(Y={})),function(e){e.Success="0",e.Fail="1"}(z||(z={})),function(e){e.Fail="0",e.Success="1"}(X||(X={})),function(e){e[e.Success=0]="Success",e[e.Fail=1]="Fail"}(Z||(Z={}));var Ze=Object.freeze({__proto__:null,backgroundCheck:function(e){var t=V(r.BackgroundCheck,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},callCamera:ne,callCameraSync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new Promise((function(t,r){try{ne(e,(function(e){t((e.data||{}).imageUrl)}))}catch(e){r(e)}}));return Promise.race([t,w(20*y)])},callFlutterChangeRole:function(){return V(r.CallFlutterChangeRole)},callMapNavigation:function(e){var t=V(r.CallMapNavigation,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e||{}));return t},callPayCenter:ie,callPayCenterSync:function(e){return new Promise((function(t,r){try{ie(e,(function(e){t(e.data)}))}catch(e){r(e)}}))},callPayWeChatOrAli:ue,callPayWeChatOrAliSync:function(e){return new Promise((function(t,r){try{ue(e,(function(e){t(e.data)}))}catch(e){r(e)}}))},callPhone:function(e){if(h(e))return V(r.CallPhone,{phoneNumber:e})},changePassword:function(){return V(r.ChangePassport)},checkExist:fe,checkExistSync:function(e){var t=new Promise((function(t,r){try{fe(e,(function(e){t("".concat((e.data||{}).exist)===B.Exist)}))}catch(e){r(e)}}));return Promise.race([t,w(y)])},closeWebView:function(){return V(r.CloseWebView)},faaContractSigningPermission:se,faaContractSigningPermissionSync:function(){return new Promise((function(e,t){try{se((function(t){e(t.data||{})}))}catch(e){t(e)}}))},getCityInfo:function(e){return V(r.GetCityInfo,e)},getImages:le,getImagesSync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new Promise((function(t,r){try{le(e,(function(e){var r=(e.data||{}).images,n=g(r)?r:JSON.parse(r||"[]");t(n||[])}))}catch(e){r(e)}}));return Promise.race([t,w(20*y)])},getLatLon:be,getLatLonSync:function(){var e=new Promise((function(e,t){try{be((function(t){var r=t.data||{},n=P(r)?r:JSON.parse(r||"{}");e(n||{})}))}catch(e){t(e)}}));return Promise.race([e,w(20*y)])},getLHHeight:ye,getLHHeightSync:function(){var e=new Promise((function(e,t){try{ye((function(t){e((t.data||{}).height)}))}catch(e){t(e)}}));return Promise.race([e,w(2*y)])},getUserInfo:ge,getUserInfoSync:function(){var e=new Promise((function(e,t){try{ge((function(t){e(t.data||{})}))}catch(e){t(e)}}));return Promise.race([e,w(y)])},getVersion:Pe,getVersionSync:function(){var e=new Promise((function(e,t){try{Pe((function(t){e((t.data||{}).version)}))}catch(e){t(e)}}));return Promise.race([e,w(y)])},isWifiConnected:je,isWifiConnectedSync:function(){var e=new Promise((function(e,t){try{je((function(t){e((t.data||{}).isWifiConnected)}))}catch(e){t(e)}}));return Promise.race([e,w(y)])},logout:function(){return V(r.Logout)},openMp:function(e){if(e&&P(e))return V(r.OpenMp,we(we({},{userName:"",path:"",miniProgramType:a.Release}),e))},openPhotoBrowser:function(e){return V(r.OpenPhotoBrowser,e)},openWebView:function(e,t){if(e&&P(e))return V(r.OpenWebView,me(me({},{requestUrl:"",isTitle:H.AUTO,isNavigationbar:K.Show,isCloseCurrent:q.Show}),e),(function(e){t&&t(e)}))},qrCodeScan:de,qrCodeScanSync:function(){return new Promise((function(e,t){try{de((function(t){e((t||{}).data)}))}catch(e){t(e)}}))},qrCodeScanForOriginalResult:Se,qrCodeScanForOriginalResultSync:function(){return new Promise((function(e,t){try{Se((function(t){e((t||{}).data)}))}catch(e){t(e)}}))},serviceAreaLocation:function(e){if(e&&P(e)){var t=V(r.ServiceAreaLocation,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t}},setTitle:function(e){if(h(e))return V(r.SetTitle,{title:e})},shareImageToWxFriends:function(e){if(P(e))return V(r.ShareImageToWxFriends,{imageUrl:e.url})},shareImageToWxCircle:function(e){if(P(e))return V(r.ShareImageToWxCircle,{imageUrl:e.url})},shareMiniProgramForWeb:function(e){if(P(e))return V(r.ShareMiniProgramForWeb,Ee(Ee({},{userName:"",path:"",title:"",miniProgramType:a.Release}),e))},shareWeChatWebPage:function(e,t){if(P(e)){var n={scene:J.FRIEND,title:document.title||"",description:"",thumbImageUrl:"",webpageUrl:window.location.href};return V(r.ShareWechatWebPage,We(We({},n),e),(function(e){t&&t(e)}))}},startFaceBankCertify:Ie,startFaceBankCertifySync:function(e){return new Promise((function(t,r){try{Ie(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},updateOrderList:function(e){return V(r.UpdateOrderList,e)},videoInterview:Fe,videoInterviewSync:function(){return new Promise((function(e,t){try{Fe((function(t){e(t.data||{})}))}catch(e){t(e)}}))},faceChallenge:function(e,t){v("yChallenge参数",e);var n=V(r.YChallenge,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),(function(e){P(e.data)&&t&&t(e.data.result||"")}));return n},faceChallengeFinish:function(e){var t=V(r.YChallengeFinish,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},setWebReturnParams:function(e){return V(r.SetWebReturnParams,{returnParams:JSON.stringify(e)})},familyPermissions:Ne,familyPermissionsSync:function(e){return new Promise((function(t,r){try{Ne(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},showOrHideTitleBar:function(e){return V(r.ShowOrHideTitleBar,e)},openPDFReaderPage:function(e){var t=V(r.OpenPDFReaderPage,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},openMeetingPage:function(e){var t=V(r.OpenMeetingPage,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},webCallSavePicture:Ae,webCallSavePictureSync:function(e){return new Promise((function(t,r){try{Ae(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},getSomeInfo:Re,getSomeInfoSync:function(e){return new Promise((function(t,r){try{Re(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},doLaunchOffAccount:function(){return V(r.DoLaunchOffAccount)},webGetCropImage:_e,webGetCropImageSync:function(e){return new Promise((function(t,r){try{_e(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},openFlutterPage:function(e){var t=V(r.OpenFlutterPage,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?He(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},webSetKV:function(e){var t=V(r.WebSetKV,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},webGetV:Je,webGetVSync:function(e){return new Promise((function(t,r){try{Je(e,(function(e){t(e.data||{})}))}catch(e){r(e)}}))},openWebPageWithBrowser:function(e){var t=V(r.OpenWebPageWithBrowser,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},moveTakePhotoComplete:function(e){var t=V(r.MoveTakePhotoComplete,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},openUrlWithCheckGesturePassword:function(e){var t=V(r.OpenUrlWithCheckGesturePassword,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e));return t},getMeetingSDKVersion:Xe,getMeetingSDKVersionSync:function(){var e=new Promise((function(e,t){try{Xe((function(t){e((t.data||{}).sdkVersion)}))}catch(e){t(e)}}));return Promise.race([e,w(2*y)])}});function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function et(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}return et(et({},Ze),$)}();
