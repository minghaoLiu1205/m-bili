(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(e,t,a){"use strict";var n=a(42),r={modifyPwd:"".concat(n.a.reqUrl,"/foundation/user/selfPassword/update"),getQiNiuToken:"".concat(n.a.reqUrl,"/foundation/qiniu/auth/file"),getMenus:"".concat(n.a.reqUrl,"/foundation/user/func/list"),queryVendorStore:"".concat(n.a.reqUrl,"/foundation/store/queryVendorStore"),vendorList:"".concat(n.a.reqUrl,"/foundation/user/vendor"),queryVendorGoodsPageList:"".concat(n.a.reqUrl,"/foundation/region/goods/info/queryVendorGoodsPageList")};t.a=r},279:function(e,t,a){"use strict";var n=a(42),r={orderList:"".concat(n.a.reqUrlSupplier,"/supplier/a/vendor/order/list"),orderDetail:"".concat(n.a.reqUrlSupplier,"/supplier/a/vendor/order/detail"),orderOpen:"".concat(n.a.reqUrlSupplier,"/supplier/a/vendor/order/open"),acceptOrders:"".concat(n.a.reqUrlSupplier,"/supplier/a/vendor/order/accept")};t.a=r},306:function(e,t,a){"use strict";var n=a(29),r=a(30),o=a(27),i=a(31),s=a(32),l=a(1),c=a.n(l),u=a(376),d=a.n(u),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).createCode=function(){var e=a.state.barCodeMsg||"no paperNo";d()(a.refs.barCode,e,{displayValue:!1,background:"#FFFFFF",lineColor:"rgba(0,0,0,1)",width:1,height:50})},a.state={barCodeMsg:e.paperNo},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.createCode()}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement("svg",{ref:"barCode",style:{height:0}}))}}]),t}(l.Component);t.a=m},33:function(e,t,a){"use strict";var n=a(59),r=void 0,o=window.localStorage;t.a={set:function(e,t){if(e&&!n.a.isJson(e))o.setItem(e,JSON.stringify(t));else if(e&&n.a.isJson(e)&&!t)for(var a in e)r.set(a,e[a])},get:function(e){return e?n.a.formatData(o.getItem(e)):""},clear:function(){o.clear()},remove:function(e){o.removeItem(e)}}},388:function(e,t,a){},391:function(e,t,a){e.exports=a(871)},396:function(e,t,a){},42:function(e,t,a){"use strict";var n="https://api-blx-test.benlai.com",r="https://api-blx-test.benlai.com",o="\u6d4b\u8bd5\u73af\u5883";"localhost:3001"===window.location.host&&(n="https://api-blx-test.benlai.com",r="https://api-blx-test.benlai.com",o="\u672c\u5730\u73af\u5883"),"192.168.60.155:6161"===window.location.host&&(n="https://api-blx-test.benlai.com",r="https://api-blx-test.benlai.com",o="\u6d4b\u8bd5\u73af\u5883"),"supplier-pre.benlai.com"===window.location.hostname&&(n="https://api-blx-pre.benlai.com",r="https://supplier-pre.benlai.com",o="\u9884\u53d1\u73af\u5883"),"supplier.benlai.com"===window.location.hostname&&(n="https://api-blx.benlai.com",r="https://supplier.benlai.com",o="\u751f\u4ea7\u73af\u5883");t.a={reqUrl:n,reqUrlSupplier:r,sysStr:o,commonMenus:[{menuId:"/"},{menuId:"/404"},{menuId:"/opt"},{menuId:"/login"}]}},453:function(e,t,a){},560:function(e,t,a){},564:function(e,t,a){},59:function(e,t,a){"use strict";a(214);var n=a(115),r=a(33);t.a={isMobile:function(){return!!navigator.userAgent.match(/(iPhone|iPod|Android|iOS|iPad|Mobile)/i)},isWeChat:function(){return!!navigator.userAgent.match(/MicroMessenger/i)},isJson:function(e){return"object"===typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&!e.length},formatData:function(e){if("string"===typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}},dateFormat:function(e,t){10===t.toString().length&&(t*=1e3);var a,n=new Date(t),r={"y+":n.getFullYear().toString(),"M+":(n.getMonth()+1).toString(),"d+":n.getDate().toString(),"H+":n.getHours().toString(),"m+":n.getMinutes().toString(),"s+":n.getSeconds().toString()};for(var o in r)(a=new RegExp("("+o+")").exec(e))&&(e=e.replace(a[1],1===a[1].length?r[o]:r[o].padStart(a[1].length,"0")));return e},isKeyInArray:function(e,t){var a=!1,n=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var l=i.value;if(a)break;if("object"===typeof l)for(var c=0,u=Object.keys(l);c<u.length;c++)if(e===l[u[c]]){a=!0;break}}}catch(d){r=!0,o=d}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a},removeItemByKey:function(e,t){t.forEach(function(a,n){if("object"===typeof a)for(var r=0,o=Object.keys(a);r<o.length;r++){var i=o[r];if(e===a[i]){t.splice(n,1);break}}})},removeItemByKeyVal:function(e,t,a){return a.filter(function(a){return t!==a[e]})},getSubtract:function(e,t,a){for(var n=[],r=0;r<e.length;r++){for(var o=!0,i=0;i<t.length;i++)if(e[r][a]===t[i][a]){o=!1;break}o&&n.push(e[r])}return n},findIndexByKey:function(e,t){var a=-1;return t.forEach(function(t,n){if("object"===typeof t)for(var r=0,o=Object.keys(t);r<o.length;r++){var i=o[r];if(e===t[i]){a=n;break}}}),a},getUrlPath:function(){var e=window.location.href;return e.slice(e.lastIndexOf("/")+1,-1===e.indexOf("?")?e.length:e.indexOf("?"))},toUrlFormat:function(e){for(var t="",a=0,n=Object.keys(e);a<n.length;a++){var r=n[a];t+=e[r]&&"".concat(r,"=").concat(e[r],"&")}return t=t.substr(0,t.length-1)},toPrice:function(e){return e?parseFloat(e).toFixed(2):"0.00"},arrSort:function(e,t){return t.sort(function(e){return function(t,a){var n=t[e],r=a[e];return n<r?-1:n>r?1:0}}(e))},moveArrItem:function(e,t,a){return e[t]=e.splice(a,1,e[t])[0],e},hmsToMinutes:function(e){var t=e.split(":");return t[2]?60*parseInt(t[0])*60+60*parseInt(t[1])+parseInt(t[2]):t[1]?60*parseInt(t[0])*60+60*parseInt(t[1]):60*parseInt(t[0])*60},compareDate:function(e,t){for(var a=e.sort(),n=t.sort(),r=1;r<a.length;r++)if(a[r]<=n[r-1])return!1;return!0},formatSearchOptions:function(e){var t={},a=(e||"").substr(1).split("&")||[];for(var n in a)t[a[n].split("=")[0]]=a[n].split("=")[1];return t},loginOut:function(){r.a.clear(),sessionStorage.clear(),window.location.replace("/login")},openNotification:function(e,t,a,r){var o=r?0:4.5;n.a[e]({message:t,description:a,duration:o})}}},871:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),i=a.n(o);a(396),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(397);var s=a(10),l=a(29),c=a(30),u=a(27),d=a(31),m=a(32),p=(a(399),a(158)),h=a(876),f=a(873),g=a(877),b=a(70),v=(a(278),a(196)),w=a(199),y=(a(123),a(7)),E=a(154),O="ADD_BREADCRUMB",S="SET_USER_PERMISSION",j="SET_ORDER_MESSAGE",N={breadcrumbList:[]};var k={userPermissionMap:{}};var I={orderMsg:{}};var C,x,M=Object(E.b)({breadcrumb:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var a=JSON.parse(JSON.stringify(e));return a.breadcrumbList=t.props||[],a;default:return e}},userPermission:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var a=JSON.parse(JSON.stringify(e));return a.userPermissionMap=t.props||[],a;default:return e}},orderMgt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var a=JSON.parse(JSON.stringify(e));return a.orderMsg=t.props||{},a;default:return e}}}),P=Object(E.c)(M,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),L=function(e){return{type:O,props:e}},D=a(33),_=a(42),T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={Component:null,breadcrumbList:e.breadcrumbList||[]},document.title=e.title||"\u672c\u6765\u9c9c-\u4f9b\u5e94\u5546\u7cfb\u7edf",e.load().then(function(e){return a.setState({Component:e.default})}),P.dispatch(L(a.state.breadcrumbList)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=D.a.get("menus")||[],t=_.a.commonMenus||[],a=[].concat(Object(b.a)(t),Object(b.a)(e)),n=this.props,r=n.match,o=n.history,i=a.map(function(e){return e.menuId}),s=r.path.indexOf(":")>-1?r.path.substring(0,r.path.indexOf(":")-1):r.path;i.includes(s)||o.push("/500")}},{key:"render",value:function(){var e=r.a.createElement(y.a,{type:"loading",style:{fontSize:24},spin:!0}),t=this.props,a=(t.load,Object(w.a)(t,["load"])),n=this.state.Component;return n?r.a.createElement(n,a):r.a.createElement("div",{className:"page-loading"},r.a.createElement(v.a,{indicator:e}))}}]),t}(n.Component),U=[{path:"/order_mgt",exact:!0,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,912))},breadcrumbList:[{name:"\u8ba2\u8d27\u7ba1\u7406",path:""}],title:"\u8ba2\u8d27\u7ba1\u7406"}))}},{path:"/order_mgt/:id",exact:!0,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,913))},breadcrumbList:[{name:"\u8ba2\u8d27\u7ba1\u7406",path:"/order_mgt"},{name:"\u8ba2\u5355\u8be6\u60c5",path:""}],title:"\u8ba2\u5355\u8be6\u60c5"}))}}],q=[{path:"/sale_search",exact:!0,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return Promise.all([a.e(0),a.e(1),a.e(9),a.e(5)]).then(a.bind(null,915))},breadcrumbList:[{name:"\u9500\u552e\u67e5\u8be2",path:""}],title:"\u9500\u552e\u67e5\u8be2"}))}},{path:"/sale_search/:goodsNo",exact:!0,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return Promise.all([a.e(0),a.e(1),a.e(6)]).then(a.bind(null,914))},breadcrumbList:[{name:"\u9500\u552e\u67e5\u8be2",path:"/sale_search"},{name:"\u5546\u54c1\u8be6\u60c5",path:""}],title:"\u95e8\u5e97\u4e2d\u5546\u54c1\u8be6\u60c5"}))}}],A=[{path:"/",exact:!0,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return a.e(12).then(a.bind(null,909))},breadcrumbList:[{name:"\u9996\u9875",path:""}],title:"\u672c\u6765\u9c9c-\u4f9b\u5e94\u5546\u7cfb\u7edf"}))}},{path:"/404",exact:!1,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return a.e(11).then(a.bind(null,910))},breadcrumbList:[{name:"\u9996\u9875",path:"/"},{name:"\u672a\u627e\u5230\u9875\u9762",path:""}],title:"\u672a\u627e\u5230\u9875\u9762"}))}},{path:"/500",exact:!1,component:function(e){return r.a.createElement(T,Object.assign({},e,{load:function(){return a.e(10).then(a.bind(null,911))},breadcrumbList:[{name:"\u9996\u9875",path:"/"},{name:"\u65e0\u8bbf\u95ee\u6743\u9650",path:""}],title:"\u65e0\u8bbf\u95ee\u6743\u9650"}))}}].concat(Object(b.a)(U),Object(b.a)(q)),F=a(369),H=function(e){var t=e.component,a=Object(w.a)(e,["component"]);return r.a.createElement(F.a,Object.assign({},a,{render:function(e){return localStorage.getItem("loginInfo")?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},R=(a(453),a(383),a(276)),z=(a(273),a(66)),W=(a(274),a(102)),J=(a(122),a(38)),K=(a(214),a(115)),V=a(80),B=(a(384),a(114)),$=a(124),G=a(209),Q=a.n(G),Z=a(159),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showModel=function(){a.setState({visible:!0})},a.handleCancel=function(){a.setState({visible:!1})},a.inputChange=function(e){a.setState(Object($.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d`~!@#$%^&*()_+-=,.?]{8,20}$/;if(""!==a.state.oldPasswd)if(""!==a.state.newPasswd)if(e.test(a.state.newPasswd))if(""!==a.state.comfirmNewPasswd)if(e.test(a.state.comfirmNewPasswd))if(a.state.newPasswd===a.state.comfirmNewPasswd){var t={oldPasswd:Q.a.encode(a.state.oldPasswd),newPasswd:Q.a.encode(a.state.newPasswd),comfirmNewPasswd:Q.a.encode(a.state.comfirmNewPasswd)};a.setState({confirmLoading:!0}),a.$http.post(Z.a.modifyPwd,Object(V.a)({},t)).then(function(e){if(a.setState({confirmLoading:!1}),0===e.code)return localStorage.removeItem("loginInfo"),void window.location.replace("/login?status=pok");throw new Error(e.msg)}).catch(function(e){a.setState({confirmLoading:!1}),K.a.error({message:"\u63d0\u793a",description:e.message})})}else B.a.warning("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4");else B.a.warning("\u65b0\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u6570\u5b57\u53ca\u5927\u3001\u5c0f\u5199\u5b57\u6bcd\uff0c\u957f\u5ea6\u4e3a8-20\u4e2a\u5b57\u7b26");else B.a.warning("\u8bf7\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801");else B.a.warning("\u65b0\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u6570\u5b57\u53ca\u5927\u3001\u5c0f\u5199\u5b57\u6bcd\uff0c\u957f\u5ea6\u4e3a8-20\u4e2a\u5b57\u7b26");else B.a.warning("\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801");else B.a.warning("\u8bf7\u8f93\u5165\u65e7\u5bc6\u7801")},a.state={visible:!1,confirmLoading:!1,oldPasswd:"",newPasswd:"",comfirmNewPasswd:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this.props.isFirstLogin,t=e?null:r.a.createElement(J.a,{key:"back",onClick:this.handleCancel},"\u53d6\u6d88");return r.a.createElement("div",null,r.a.createElement(R.a,{title:"\u4fee\u6539\u5bc6\u7801",width:440,visible:this.state.visible,onCancel:this.handleCancel,closable:!e,keyboard:!e,maskClosable:!e,footer:[t,r.a.createElement(J.a,{key:"submit",type:"primary",loading:this.state.confirmLoading,onClick:this.handleSubmit},"\u786e\u8ba4")]},r.a.createElement(z.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}},{className:"dialog-wraper"}),r.a.createElement(z.a.Item,{label:"\u65e7\u5bc6\u7801",required:!0},r.a.createElement(W.a,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u65e7\u5bc6\u7801",allowClear:!0,name:"oldPasswd",onChange:this.inputChange,onPressEnter:this.handleSubmit})),r.a.createElement(z.a.Item,{label:"\u65b0\u5bc6\u7801",required:!0},r.a.createElement(W.a,{type:"password",placeholder:"\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801",allowClear:!0,name:"newPasswd",onChange:this.inputChange,onPressEnter:this.handleSubmit})),r.a.createElement(z.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",required:!0},r.a.createElement(W.a,{type:"password",placeholder:"\u8bf7\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801",allowClear:!0,name:"comfirmNewPasswd",onChange:this.inputChange,onPressEnter:this.handleSubmit})),r.a.createElement(z.a.Item,{label:"\u6ce8\u610f:"},e?r.a.createElement("div",{style:{color:"#f5222d"}},"\u7528\u6237\u7b2c\u4e00\u6b21\u767b\u5f55\u5f3a\u5236\u4fee\u6539\u5bc6\u7801"):null,r.a.createElement("div",null,"\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u6570\u5b57\u53ca\u5927\u3001\u5c0f\u5199\u5b57\u6bcd\uff0c\u81f3\u5c11\u516b\u4f4d")))))}}]),t}(n.Component),Y=a(59),ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).showSlowDown=function(){a.setState({isShowSlowDown:!0})},a.hideSlowDown=function(){a.setState({isShowSlowDown:!1})},a.loginOut=function(){Y.a.loginOut()},a.changePass=function(){a.child.showModel()},a.onRef=function(e){a.child=e},a.closeMenuHandel=function(){a.setState({collapsed:!a.state.collapsed}),a.props.closeMenuHandel()},a.state={collapsed:!1,isShowSlowDown:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=!!D.a.get("loginInfo")&&D.a.get("loginInfo").isFirstLogin;this.setState({isFirstLogin:e}),e&&this.child.showModel()}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrap"},r.a.createElement(y.a,{className:"menu-control-btn-wrap",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.closeMenuHandel}),r.a.createElement("div",{className:"per-mesg",onMouseEnter:this.showSlowDown,onMouseLeave:this.hideSlowDown},r.a.createElement("div",{className:"username"},r.a.createElement("span",null,r.a.createElement(y.a,{type:"user"})),r.a.createElement("span",null,D.a.get("loginInfo")?D.a.get("loginInfo").userNickname||D.a.get("loginInfo").userName:"--"),r.a.createElement("span",null,this.state.isShowSlowDown?r.a.createElement(y.a,{type:"up"}):r.a.createElement(y.a,{type:"down"}))),this.state.isShowSlowDown?r.a.createElement("div",{className:"handel-wrap","v-show":"isShowSlowDown"},r.a.createElement("a",{href:"",className:"slow-icon"},"\u25b2"),r.a.createElement("p",{onClick:this.changePass},"\u4fee\u6539\u5bc6\u7801"),r.a.createElement("p",{onClick:this.loginOut},"\u9000\u51fa\u767b\u5f55")):null),r.a.createElement("div",null,r.a.createElement(X,{onRef:this.onRef,isFirstLogin:this.state.isFirstLogin})))}}]),t}(n.Component),te=(a(537),a(271)),ae=a(198),ne=a(874),re=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={breadecrumbList:e.breadcrumbList||[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.breadcrumbList&&this.setState({breadecrumbList:e.breadcrumbList})}},{key:"render",value:function(){var e=this.state.breadecrumbList.map(function(e,t){return r.a.createElement(te.a.Item,{key:e.path},0===t?r.a.createElement(y.a,{type:"environment"}):null,e.path?r.a.createElement(ne.a,{to:e.path},e.name):r.a.createElement("span",null,e.name))});return r.a.createElement("div",{style:{paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20}},r.a.createElement(te.a,{separator:">"},e))}}]),t}(n.Component),oe=Object(ae.b)(function(e){return{breadcrumbList:e.breadcrumb.breadcrumbList}},{})(re),ie=(a(366),a(79)),se=a(374),le=(a(560),ie.a.SubMenu),ce=[],ue={},de=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).formatMenus=function(e){e.forEach(function(e){if(e.children&&e.children.length)a.formatMenus(e.children);else{var t={sysno:e.sysno,parentSysNo:e.parentSysNo,menuId:e.menuId,menuName:e.menuName||""};ce.push(t),e.powerList&&e.powerList.length&&(ue[e.menuId]=e.powerList)}})},a.formatTree=function(e,t){return a.buildMenu(e,t)},a.buildMenu=function(e,t){var n;if((n=e)&&Array.isArray(n))return e.map(function(e){return(n=e)&&n.children&&Array.isArray(n.children)&&n.children.length>0?r.a.createElement(le,{key:e.sysno,title:r.a.createElement("span",null,e.menuId?r.a.createElement("i",{className:"".concat(e.menuId," iconfont-mh-icon"),"aria-hidden":"true"}):null,r.a.createElement("span",null,e.menuName))},a.buildMenu(e.children,t)):r.a.createElement(ie.a.Item,{key:e.menuId,onClick:function(){return t(e)}},"/sale_search"===e.menuId?r.a.createElement(y.a,{type:"security-scan"}):null,"/order_mgt"===e.menuId?r.a.createElement(y.a,{type:"codepen-circle"}):null,r.a.createElement("span",null,e.menuName));var n})},a.gotoUrl=function(e){var t=a.props,n=t.history;t.location.pathname!==e.menuId&&(D.a.remove("searchContent"),n.push(e.menuId))},a.setDefaultOpenKey=function(){var e=a.state.defaultSelectedKey,t=ce.filter(function(t){return t.menuId===e})[0],n=t&&t.parentSysNo.toString()||"";a.setState({defaultOpenKey:n})},a.state={collapsed:e.collapsed,menusList:e.data,formatMenusList:[],defaultSelectedKey:"/"===e.location.pathname?"/":e.location.pathname.match(/\/[^\/]+/)[0]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.formatMenus(this.props.data),P.dispatch({type:S,props:ue}),this.setDefaultOpenKey()}},{key:"componentDidMount",value:function(){D.a.set("menus",ce)}},{key:"render",value:function(){var e=this.formatTree(this.state.menusList,this.gotoUrl),t=this.state,a=t.defaultSelectedKey,n=t.defaultOpenKey;return r.a.createElement("div",{style:{height:"calc(100% - 50px)"}},this.state.collapsed?r.a.createElement("div",{className:"logo-wraper"},r.a.createElement("img",{src:"/imgs/menus.png",alt:"",width:"24",height:"22",style:{margin:"0 auto"}})):r.a.createElement("div",{className:"logo-wraper"},r.a.createElement("img",{src:"/imgs/logo.png",alt:"",width:"150",height:"24"})),r.a.createElement(se.Scrollbars,{style:{width:"100%",height:"100%"}},r.a.createElement(ie.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[a],defaultOpenKeys:[n]},e)))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({collapsed:e.collapsed})}}]),t}(n.Component),me=(C=de,x={reqType:"POST",reqUrl:Z.a.getMenus,params:{queryUserPower:!0,clientId:6}},function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={formatData:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=x.reqType,a=x.reqUrl,n=x.params;"POST"===t?this.$http.post(a,Object(V.a)({},n)).then(function(t){if(0!==t.code)throw new Error(t.msg);e.setState({formatData:t.data})}).catch(function(e){console.log("\u3010\u63d0\u793a\u3011\uff1a",e.message)}):this.$http.get(a,Object(V.a)({},n)).then(function(t){if(0!==t.code)throw new Error(t.msg);e.setState({formatData:t.data})}).catch(function(e){console.log("\u3010\u63d0\u793a\u3011\uff1a",e.message)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%"}},this.state.formatData?r.a.createElement(C,Object.assign({},this.props,{data:this.state.formatData})):null)}}]),t}(n.Component)),pe=p.a.Sider,he=p.a.Content,fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).closeMenuHandel=function(){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(pe,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement(me,Object.assign({},this.props,{collapsed:this.state.collapsed}))),r.a.createElement(p.a,null,r.a.createElement(ee,{closeMenuHandel:this.closeMenuHandel}),r.a.createElement(he,null,r.a.createElement(oe,null),r.a.createElement(h.a,null,A.map(function(e,t){return r.a.createElement(H,{key:t,exact:!!e.exact,path:e.path,component:e.component})}),r.a.createElement(f.a,{to:{pathname:"/404"}})))))}}]),t}(n.Component),ge=Object(g.a)(fe),be=a(381),ve=a(121),we=a.n(ve);a(561);we.a.locale("zh-cn");var ye=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){window.localStorage&&window.sessionStorage||Y.a.openNotification("warning","\u7cfb\u7edf\u63d0\u793a","\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e\uff0c\u8bf7\u5347\u7ea7\u6d4f\u89c8\u5668\uff01")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{locale:be.a},this.props.count,r.a.createElement(ge,null)))}}]),t}(n.Component),Ee=a(375),Oe=a.n(Ee),Se=(a(564),{getVerificationImage:"".concat(_.a.reqUrl,"/basal/adminUser/getVerificationImage"),token:"".concat(_.a.reqUrl,"/authorization/login")}),je=(0,a(119).createBrowserHistory)(),Ne=!1,ke=null,Ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).inputChangeHandel=function(e){if(!Ne){var t=e.target.value,n=e.target.name;a.setState(Object($.a)({},n,t.replace(/\s+/g,"")))}},a.focusHandel=function(){Ne=!1,a.setState({displayName:"none",errTipMsg:""})},a.doLoginHandel=function(){var e=Oe()(),t=a.state.userName,n=a.state.password;if(t)if(n){var r={username:t,password:n,grant_type:"password",uuid:e};a.setState({isDisabled:!0}),a.$http.postP(Se.token,Object(V.a)({},r),{urlType:1}).then(function(e){if(a.setState({isDisabled:!1}),e.token_type&&e.access_token)return D.a.remove("loginInfo"),D.a.set("loginInfo",{Operator:e["user:name"],UserNO:e["user:name"],UserName:e["user:nickname"],token_type:e.token_type,access_token:e.access_token,refresh_token:e.refresh_token,net_token:e.net_token,userName:e["user:name"],userNickname:e["user:nickname"],isFirstLogin:"1"===e.isFirstLogin,loginTime:(new Date).getTime()}),void je.push("/");throw new Error(e.msg)}).catch(function(e){a.setState({isDisabled:!1}),a.setState({displayName:"block",errTipMsg:e.message})})}else a.setState({displayName:"block",errTipMsg:"\u8bf7\u8f93\u5165\u5bc6\u7801"});else a.setState({displayName:"block",errTipMsg:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})},a.onPasteHandel=function(e){Ne=!0,ke=setTimeout(function(){Ne=!1},1e3)},a.state={userName:"",password:"",isErrorTipShow:!1,errTipMsg:"",displayName:"none",isDisabled:!1},D.a.get("loginInfo")?(je.push("/"),Object(u.a)(a)):a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Y.a.formatSearchOptions(this.props.location.search).status;"401"===e?K.a.warning({message:"\u6e29\u99a8\u63d0\u793a",description:"\u767b\u5f55\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01"}):"pok"===e&&K.a.warning({message:"\u6e29\u99a8\u63d0\u793a",description:"\u4fee\u6539\u5bc6\u7801\u6210\u529f\uff0c\u8bf7\u518d\u6b21\u767b\u5f55\uff01"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-wraper"},r.a.createElement("img",{src:"/imgs/logo.8566620.png",alt:"",width:"140",height:"32",style:{margin:"0 auto",position:"absolute",top:"20px",left:"20px"}}),r.a.createElement("div",{className:"login-form-wrap"},r.a.createElement("div",{className:"sys-tip-txt"},"\u672c\u6765\u9c9c-\u4f9b\u5e94\u5546\u7cfb\u7edf"),r.a.createElement(z.a,{className:"login-form"},r.a.createElement(z.a.Item,null,r.a.createElement(W.a,{prefix:r.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",allowClear:!0,onChange:this.inputChangeHandel,onPressEnter:this.doLoginHandel.bind(this),onFocus:this.focusHandel.bind(this),value:this.state.userName,name:"userName",size:"large"})),r.a.createElement(z.a.Item,null,r.a.createElement(W.a.Password,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",allowClear:!0,onChange:this.inputChangeHandel,onPressEnter:this.doLoginHandel.bind(this),onFocus:this.focusHandel.bind(this),value:this.state.password,name:"password",size:"large",onPaste:this.onPasteHandel})),r.a.createElement(z.a.Item,{className:"no-mb"},r.a.createElement(J.a,{loading:this.state.isDisabled,type:"primary",className:"login-form-button",onClick:this.doLoginHandel.bind(this),disabled:this.state.isDisabled,size:"large"},"\u767b\u5f55")),r.a.createElement("div",{className:"login-err-txt-tip",style:{display:this.state.displayName}},this.state.errTipMsg))),r.a.createElement("div",{className:"copy-p"},"\u672c\u6765\u9c9c\u79d1\u6280\u6709\u9650\u516c\u53f8@2017-2018 Benlai \u4eacICP\u8bc1120338\u53f7 \u4eac\u516c\u7f51\u5907\u6848 11010502022386\u53f7"))}},{key:"componentWillUnmount",value:function(){clearTimeout(ke)}}]),t}(n.Component),Ce=(a(382),a(275)),xe=(a(386),a(153)),Me=(a(387),a(86)),Pe=a(306),Le=(a(388),a(377)),De=function(e){var t=e.content,a=e.pageStyle,n=e.onBeforePrint,r=e.onAfterPrint,i=e.bodyClass,s=void 0===i?"":i,l=e.copyStyles,c=void 0===l||l,u=t;if(void 0!==u&&null!==u){var d=document.createElement("iframe");d.style.position="absolute",d.style.top="-1000px",d.style.left="-1000px";var m=Object(o.findDOMNode)(u),p=document.querySelectorAll('link[rel="stylesheet"]').length||0,h=[],f=[],g=function(e){n&&n(),setTimeout(function(){e.contentWindow.focus(),e.contentWindow.print(),function(e){setTimeout(function(){e.parentNode.removeChild(e)},500)}(e),r&&r()},500)},v=function(e,t){t?h.push(e):(console.error("'react-to-print' was unable to load a link. It may be invalid. 'react-to-print' will continue attempting to print the page. The link the errored was:",e),f.push(e)),h.length+f.length===p&&g(d)};return d.onload=function(){window.navigator&&window.navigator.userAgent.indexOf("Trident/7.0")>-1&&(d.onload=null);var e=d.contentDocument||d.contentWindow.document,t=Object(b.a)(m.querySelectorAll("canvas"));e.open(),e.write(m.outerHTML),e.close();var n=void 0===a?"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } } html,body { overflow: auto!important; height: auto!important; }":a,r=e.createElement("style");r.appendChild(e.createTextNode(n)),e.head.appendChild(r),s.length&&e.body.classList.add(s);var o=e.querySelectorAll("canvas");if(Object(b.a)(o).forEach(function(e,a){e.getContext("2d").drawImage(t[a],0,0)}),!1!==c){var i=document.querySelectorAll('style, link[rel="stylesheet"]');Object(b.a)(i).forEach(function(t,a){if("STYLE"===t.tagName){var n=e.createElement(t.tagName);if(t.sheet){for(var r="",o=0;o<t.sheet.cssRules.length;o++)"string"===typeof t.sheet.cssRules[o].cssText&&(r+="".concat(t.sheet.cssRules[o].cssText,"\r\n"));n.setAttribute("id","react-to-print-".concat(a)),n.appendChild(e.createTextNode(r)),e.head.appendChild(n)}}else{var i=Object(b.a)(t.attributes),s=i.filter(function(e){return"href"===e.nodeName});if(s.length&&s[0].nodeValue){var l=e.createElement(t.tagName);i.forEach(function(e){l.setAttribute(e.nodeName,e.nodeValue)}),l.onload=v.bind(null,l,!0),l.onerror=v.bind(null,l,!1),e.head.appendChild(l)}else console.warn("'react-to-print' encountered a <link> tag with an empty 'href' attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",t),v(t,!0)}})}0!==p&&!1!==c||g(d)},document.body.appendChild(d),Object(Le.delay)(1e3)}console.error("Refs are not available for stateless components. For 'react-to-print' to work only Class based components can be printed")},_e=a(279),Te=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getDetailHandel=function(){a.setState({loading:!0});var e=a.state,t={pageNum:e.pageNum,pageSize:e.pageSize,paperNo:e.paperNo};a.$http.post(_e.a.orderDetail,Object(V.a)({},t)).then(function(e){if(a.setState({loading:!1}),0!==e.code)throw new Error(e.msg);var t=(e.data&&e.data.result&&e.data.result.length?e.data.result:[]).map(function(e){return e.unique="".concat(e.barcode).concat(e.erpGoodsNo).concat(e.vendorGoodsNo),e});a.setState({tableData:t})}).catch(function(e){a.setState({loading:!1}),Y.a.openNotification("error","\u7cfb\u7edf\u63d0\u793a",e.message||"")})},a.doPrintHandel=function(){De({content:a.refs}).then(function(){})},a.state={paperNo:e.match.params.id||"",orderMsg:D.a.get("orderMsg"),pageNum:1,pageSize:2e3,columns:[{title:"\u8d27\u53f7",dataIndex:"vendorGoodsNo",width:60},{title:"\u6761\u7801",dataIndex:"barcode",width:70},{title:"\u5546\u54c1\u7f16\u7801",dataIndex:"erpGoodsNo",width:80},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"goodsName",width:90},{title:"\u5355\u4f4d",dataIndex:"unit",width:70},{title:"\u89c4\u683c",dataIndex:"spec",width:70},{title:"\u8ba2\u5355\u91d1\u989d",dataIndex:"amount",width:80},{title:"\u8ba2\u5355\u6570\u91cf",dataIndex:"qty",width:80},{title:"\u6536\u8d27\u6570\u91cf",dataIndex:"receiveQty",width:80},{title:"\u8d60\u54c1\u6570\u91cf",dataIndex:"giftQty",width:80},{title:"\u6536\u8d27\u5355\u4ef7",dataIndex:"price",width:80},{title:"\u6536\u8d27\u603b\u91d1\u989d",dataIndex:"totalReceiveAmount",width:100},{title:"\u5907\u6ce8",dataIndex:"remark",width:90}],tableData:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getDetailHandel()}},{key:"render",value:function(){var e=this,t=this.state.orderMsg,a=t.paperNo,n=t.storeName,o=t.createUserName,i=t.createUserContact,s=t.authDatetime,l=t.expectDatetime,c=this.state.tableData,u=this.state.columns;return r.a.createElement("div",{className:"common-main-container"},r.a.createElement("div",{className:"left-container-wrap"},r.a.createElement(J.a,{type:"primary",onClick:this.doPrintHandel},r.a.createElement(y.a,{type:"printer"}),"\u6253\u5370\u5355\u636e")),r.a.createElement("div",{className:"right-container-wrap print-content",ref:function(t){e.refs=t}},r.a.createElement("div",{className:"print-header operation-wraper"},r.a.createElement("h3",{style:{textAlign:"center",fontWeight:700,fontSize:18}},"\u8ba2\u8d27\u7ba1\u7406\u5355"),r.a.createElement(xe.a,{type:"flex",align:"bottom",gutter:10},r.a.createElement(Me.a,{span:16},r.a.createElement(xe.a,null,r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u95e8\u5e97/\u4ed3\u5e93\uff1a",n||"--")),r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u8ba2\u5355\u7f16\u53f7\uff1a",a))),r.a.createElement(xe.a,null,r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u8054\u7cfb\u4eba: ",o||"--")),r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u8054\u7cfb\u7535\u8bdd: ",i||"--"))),r.a.createElement(xe.a,null,r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u5355\u636e\u65f6\u95f4: ",s||"--")),r.a.createElement(Me.a,{span:12},r.a.createElement("span",{style:{paddingLeft:"10px"}},"\u671f\u671b\u9001\u8fbe\u65f6\u95f4: ",l||"--")))),r.a.createElement(Me.a,{span:8},r.a.createElement(Pe.a,{paperNo:a})))),r.a.createElement("div",{className:"print-table content-wraper"},r.a.createElement(Ce.a,{columns:u,dataSource:c,loading:this.state.loading,size:"middle",pagination:!1}))))}}]),t}(n.Component),Ue=a(875),qe=a(101),Ae=a.n(qe);Ae.a.defaults.timeout=6e4,Ae.a.defaults.withCredentials=!0;var Fe=function(e,t){var a=D.a.get("loginInfo")||{},n={device_type:"web",version:"1.0"};return n["Content-Type"]="body"===e?"application/json;charset=UTF-8":"application/x-www-form-urlencoded",t&&t.urlType&&1===t.urlType?n.Authorization="Basic d2ViOmQ4YmZjMzQwMWE3NTg5ZTc4NGIwNmJkZmdhMmFkMWM0ZQ==":n.Authorization="".concat(a.token_type," ").concat(a.access_token),n},He=function(e){if("[object Array]"===Object.prototype.toString.call(e))return e;var t={};for(var a in e){var n=e[a];a.indexOf("_options")>-1||"undefined"!==typeof n&&"function"!==typeof n&&null!==n&&""!==n&&(t[a]=n)}return t};Ae.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),Ae.a.interceptors.response.use(function(e){return e.data},function(e){return void 0===e.response?{code:500,msg:e.response.data.error_description||"\u672a\u6536\u5230\u670d\u52a1\u5668\u54cd\u5e94",status:504}:404===e.response.status?{code:404,msg:"\u8bf7\u6c42\u63a5\u53e3\u672a\u627e\u5230",status:e.response.status}:401===e.response.status?(D.a.clear(),sessionStorage.clear(),je.push("/login?status=401"),{code:401,msg:e.response.data.error_description,status:e.response.status}):500===e.response.status||504===e.response.status||503===e.response.status?{code:500,msg:e.response.data.error_description||"\u670d\u52a1\u5668\u5f02\u5e38",status:e.response.status}:Promise.reject({code:e.response.status,msg:e.response.data.error_description||e.response.statusText,status:e.response.status})});var Re={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;return Ae.a.get(e,{params:He(t),headers:Fe("params",a)})},post:function(e,t,a){return Ae()({method:"post",url:e,data:He(t),headers:Fe("body",a)})},postP:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;return Ae()({method:"post",url:e,data:He(t),transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:Fe("params",a)})}};r.a.Component.prototype.$http=Re,i.a.render(r.a.createElement(ae.a,{store:P},r.a.createElement(Ue.a,{history:je},r.a.createElement(h.a,null,r.a.createElement(F.a,{exact:!0,path:"/login",component:Ie}),r.a.createElement(F.a,{exact:!0,path:"/886072e393710563/print/:id",component:Te}),r.a.createElement(F.a,{component:ye})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[391,3,4]]]);
//# sourceMappingURL=main.7f4310ba.chunk.js.map