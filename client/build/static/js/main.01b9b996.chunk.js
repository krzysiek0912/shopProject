(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{160:function(e,t){},45:function(e,t,n){},564:function(e,t,n){},565:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n(11),i=n(14),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){var n=e;n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(84),p=n(28),d=n(12),f=n(13),g=n.n(f),m=n(21),b=n(26),v=n(25),y=n.n(v),O=Object({NODE_ENV:"production",PUBLIC_URL:""}),E=(O.DOTPAY_PIN,O.DOTPAY_ID,[{id:1,path:"/",title:"Home"},{id:2,path:"/faq",title:"Faq"},{id:3,path:"/regulations",title:"Regulamin"},{id:4,path:"/contact",title:"Kontakt"}]);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){return"app/".concat("request","/").concat(e)},w=function(e){return e.request},k=P("START_REQUEST"),x=P("END_REQUEST"),A=P("RESET_REQUEST"),C=P("ERROR_REQUEST"),I=function(e){return{palyload:e,type:k}},S=function(e){return{palyload:e,type:x}},G=function(e,t){return{palyload:t,error:e,type:C}},D={products:{success:!1,pending:!1,error:""}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.products,n=e.setting.sorting;return Object(b.a)(t.data).sort((function(e,t){return e[n.key]>t[n.key]?"asc"===n.direction?1:-1:e[n.key]<t[n.key]?"asc"===n.direction?-1:1:0}))},T=function(e){return"app/".concat("products","/").concat(e)},z=T("LOAD_PRODUCTS"),Y=T("LOAD_PRODUCTS_PAGE"),Z=T("LOAD_SINGLE_PRODUCT"),U=function(e,t,n){return function(){var a=Object(m.a)(g.a.mark((function a(r){var c,o,i,u,l,s,p;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(I("products")),c=n.key,o=n.direction,i="",u="",c&&(i="/".concat(c)),o&&(u="/".concat(o)),a.prev=6,l=(e-1)*t,s=t,a.next=11,y.a.get("".concat("/api","/products/range/").concat(l,"/").concat(s).concat(i).concat(u));case 11:p=a.sent,r({payload:{products:p.data.products,amount:p.data.amount},type:Y}),r(S("products")),a.next=19;break;case 16:a.prev=16,a.t0=a.catch(6),r(G(a.t0.message,"products"));case 19:case"end":return a.stop()}}),a,null,[[6,16]])})));return function(e){return a.apply(this,arguments)}}()},F={data:[],singleProduct:{},amount:0};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){return e.cart.cartList},V=function(e){return"app/".concat("cart","/").concat(e)},J=V("ADD_TO_CART"),Q=V("REMOVE_FROM_CART"),H=V("SET_COUNT_PRODUCT"),X=V("SET_CHK"),q=function(e){return{payload:e,type:Q}},B=null!==localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],K={cartList:B,cartIds:B.map((function(e){return e._id})),chk:""};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(e){return e.setting.sorting},ne=function(e){return e.setting.currency},ae=function(e){var t=e.products,n=e.setting;return Math.ceil(t.amount/n.pagination.productsPerPage)},re=function(e){return e.setting.pagination.productsPerPage},ce=function(e){return"app/".concat("setting","/").concat(e)},oe=ce("SET_SORTING_OPTIONS"),ie=ce("SET_PAGINATION_OPTIONS"),ue=ce("SET_PAGINATION_PAGE"),le={sorting:{direction:"",key:""},currency:"PLN",pagination:{productsPerPage:6,presentPage:1}};var se=Object(p.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case z:return L({},e,{data:t.payload});case Y:return L({},e,{data:Object(b.a)(t.payload.products),amount:t.payload.amount});case Z:return L({},e,{singleProduct:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=0;switch(t.type){case J:return e.cartList[t.payload.product._id]&&(n=parseInt(e.cartList[t.payload.product._id].count,2)),M({},e,{cartList:[].concat(Object(b.a)(e.cartList),[{_id:t.payload.product._id,count:n+t.payload.count,price:t.payload.price}]),cartIds:[].concat(Object(b.a)(e.cartIds),[t.payload.product._id])});case Q:return M({},e,{cartList:Object(b.a)(e.cartList.filter((function(e){return!(e._id===t.payload)}))),cartIds:Object(b.a)(e.cartIds.filter((function(e){return!(e===t.payload)})))});case H:return M({},e,{cartList:e.cartList.map((function(e){return e._id===t.payload._id?M({},e,{count:t.payload.count}):e}))});case X:return M({},e,{chk:t.payload});default:return e}},request:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case k:return j({},e,Object(d.a)({},t.palyload,{pending:!0,error:null,success:null}));case x:return j({},e,Object(d.a)({},t.palyload,{pending:!1,error:null,success:!0}));case A:return j({},e,Object(d.a)({},t.palyload,{pending:!1,error:null,success:null}));case C:return j({},e,Object(d.a)({},t.palyload,{pending:!1,error:t.error,success:!1}));default:return e}},setting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case oe:return ee({},e,{sorting:{key:t.payload.key,direction:t.payload.direction},pagination:ee({},e.pagination,{presentPage:1})});case ie:return ee({},e,{pagination:{productsPerPage:t.payload.productsPerPage,presentPage:t.payload.presentPage}});case ue:return ee({},e,{pagination:ee({},e.pagination,{presentPage:t.payload})});default:return e}}}),pe="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):p.d,de=Object(p.e)(se,pe(Object(p.a)(s.a,(function(e){var t=e.getState;return function(e){return function(n){var a=e(n);return localStorage.setItem("cart",JSON.stringify(t().cart.cartList)),a}}})))),fe=n(16),ge=n(52),me=n(2),be=n(32),ve=n(3),ye=n(87),Oe=n.n(ye);function Ee(){var e=Object(me.a)(["\n  &.navbar-brand {\n    padding: 42px 0;\n  }\n"]);return Ee=function(){return e},e}var he=Object(ve.a)(i.b)(Ee()),je=function(){return r.a.createElement(he,{className:"navbar-brand",to:"/"},r.a.createElement("img",{src:Oe.a,alt:"logo shop"}))},Pe=n(38);function we(){var e=Object(me.a)(["\n  a {\n    font-family: 'PT Sans', sans-serif;\n    text-transform: uppercase;\n\n    padding: ",";\n    color: #000000;\n    opacity: 0.5;\n    letter-spacing: 6.2px;\n    &:hover {\n      color: #000000;\n      opacity: 1;\n    }\n  }\n"]);return we=function(){return e},e}var ke=ve.a.ul(we(),(function(e){return e.padding?e.padding:"0 17.8px;"})),xe=function(e){var t=e.links,n=e.location;return r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement(ke,{className:"navbar-nav ml-auto"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(i.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))}))),r.a.createElement(i.b,{to:"/cart"},r.a.createElement(Pe.IonIcon,{name:"cart",size:"large",strokeWidth:3})))},Ae=Object(fe.g)((function(e){return r.a.createElement(xe,e)})),Ce=(n(566),function(e){var t=e.links;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(Ae,{links:t}))});function Ie(){var e=Object(me.a)(["\n  &.navbar {\n    padding: 0;\n  }\n"]);return Ie=function(){return e},e}var Se=ve.a.nav(Ie()),Ge=function(){return r.a.createElement(be.a,null,r.a.createElement(Se,{className:"navbar navbar-expand-lg"},r.a.createElement(je,null),r.a.createElement(Ce,{links:E})))};function De(){var e=Object(me.a)(["\n  &.navbar {\n    padding: 0;\n  }\n"]);return De=function(){return e},e}var Re=ve.a.p(De()),Le=function(){return r.a.createElement(be.a,null,r.a.createElement(Re,null,"All rights reserved"),r.a.createElement(Ce,{links:E}))};function Ne(){var e=Object(me.a)(["\n  padding-top: 158px;\n"]);return Ne=function(){return e},e}var Te=Object(ve.a)(be.a)(Ne()),ze=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,null),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(Te,null,t)),r.a.createElement(Le,null))},Ye=n(15),Ze=n(23),Ue=n(24),Fe=n(37),_e=n(33),Me=n(35),We=n(34),Ve=n(8),Je=n(57),Qe=function(){return r.a.createElement(Ye.a,null,r.a.createElement(Ve.a,null,"NoMatch"))};n(45);function He(){var e=Object(me.a)(["\n  margin: $base-size 0;\n  font-size: 25px;\n  font-weight: normal;\n  position: relative;\n  color: $color-text;\n  padding-bottom: 10px;\n  letter-spacing: 0.9px;\n"]);return He=function(){return e},e}var Xe=ve.a.h2(He()),qe=function(e){var t=e.children;return r.a.createElement(Xe,null,t)},Be=n(98),Ke=n(91),$e=n.n(Ke),et=function(e){var t=e.children,n=Object(Be.a)(e,["children"]);return r.a.createElement("div",n,$e()(t))};et.defaultProps={children:""};var tt=et;function nt(){var e=Object(me.a)(["\n  letter-spacing: 0.4px;\n  opacity: 0.7;\n"]);return nt=function(){return e},e}function at(){var e=Object(me.a)(["\n  font-size: 18px;\n"]);return at=function(){return e},e}function rt(){var e=Object(me.a)(["\n  max-width: 100%;\n"]);return rt=function(){return e},e}function ct(){var e=Object(me.a)(["\n  position: absolute;\n  top: 20px;\n  left: 38px;\n  font-size: 18px;\n  letter-spacing: 0.4px;\n"]);return ct=function(){return e},e}function ot(){var e=Object(me.a)(["\n  min-height: 500px;\n  background: #f5f5f5;\n  padding: 50px 0;\n  text-align: center;\n"]);return ot=function(){return e},e}var it=ve.a.div(ot()),ut=ve.a.span(ct()),lt=ve.a.img(rt()),st=ve.a.div(at()),pt=ve.a.div(nt()),dt=function(e){function t(){var e,n;Object(Ze.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Fe.a)(this,(e=Object(_e.a)(t)).call.apply(e,[this].concat(r)))).state={inCart:!1},n.handlerAddToCart=function(){var e=n.props,t=e.addToCart,a=e.singleProduct;t({product:a,count:1,price:a.price}),n.setState({inCart:!0})},n.handlerRemoveFromCart=function(){var e=n.props;(0,e.removeFromCart)(e.singleProduct._id),n.setState({inCart:!1})},n}return Object(Me.a)(t,e),Object(Ue.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadSingleProduct,n=e.id,a=e.cartList;t(n),a.find((function(e){return e._id===n}))&&this.setState({inCart:!0})}},{key:"render",value:function(){var e=this.handlerAddToCart,t=this.handlerRemoveFromCart,n=this.props,a=n.singleProduct,c=n.request,o=n.currency,i=this.state.inCart,u=c.products.pending;return r.a.createElement("div",null,u&&r.a.createElement(We.a,null)||a._id&&r.a.createElement(Ye.a,null,r.a.createElement(Ve.a,{xs:5},r.a.createElement(it,null,""!==a.label&&r.a.createElement(ut,null,a.label),r.a.createElement(lt,{src:""+a.img,alt:a.name}))),r.a.createElement(Ve.a,{xs:7},r.a.createElement(st,null,r.a.createElement(qe,null,a.name),r.a.createElement(pt,null,o,a.price,r.a.createElement(tt,null,a.content),!i&&r.a.createElement(Je.a,{onClick:e,variant:"dark"},"Dodaj do koszyka")||r.a.createElement(Je.a,{onClick:t,variant:"warning"},"Usu\u0144 z koszyka")))))||r.a.createElement(Qe,null))}}]),t}(r.a.Component);dt.defaultProps={cartList:[]};var ft=Object(o.b)((function(e){return{singleProduct:(t=e,t.products.singleProduct),cartList:W(e),currency:ne(e),request:w(e)};var t}),(function(e){return{addToCart:function(t){return e({payload:t,type:J})},removeFromCart:function(t){return e(q(t))},loadSingleProduct:function(t){return e(function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I("products")),t.prev=1,t.next=4,y.a.get("".concat("/api","/product/").concat(e));case 4:a=t.sent,n({payload:a.data,type:Z}),n(S("products")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(G(t.t0.message,"products"));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(fe.g)((function(e){return r.a.createElement(dt,e)}))),gt=function(e){var t=e.match;return r.a.createElement(Ye.a,null,r.a.createElement(ft,{id:t.params.id}))};function mt(){var e=Object(me.a)(["\n  color: #000000;\n  opacity: 0.7;\n  padding: 10.8px 0;\n  font-size: 18px;\n  letter-spacing: 0.8px;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n"]);return mt=function(){return e},e}function bt(){var e=Object(me.a)(["\n  padding: 0 0 35px;\n  list-style: none;\n  border-bottom: 1px solid #b2b2b2;\n"]);return bt=function(){return e},e}var vt=ve.a.ul(bt()),yt=ve.a.li(mt()),Ot=Object(o.b)((function(e){return{sorting:te(e),pages:ae(e),productsPerPage:re(e)}}),(function(e){return{changeSorting:function(t,n){return e(function(e,t){return function(){var n=Object(m.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(I("setting")),n.prev=1,n.next=4,a({payload:t,type:oe});case 4:return n.next=6,a(U(1,e,t));case 6:a(S("setting")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a(G(n.t0.message,"setting"));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))((function(e){var t=e.changeSorting,n=e.productsPerPage;return r.a.createElement(vt,null,r.a.createElement(yt,{onClick:function(){return t(n,{key:"name",direction:"asc"})}},"Nazwa A-Z"),r.a.createElement(yt,{onClick:function(){return t(n,{key:"name",direction:"desc"})}},"Nazwa Z-A"),r.a.createElement(yt,{onClick:function(){return t(n,{key:"price",direction:"asc"})}},"Cena rosn\u0105co"),r.a.createElement(yt,{onClick:function(){return t(n,{key:"price",direction:"desc"})}},"Cena malej\u0105co"))})),Et=n(95);function ht(){var e=Object(me.a)(["\n  margin: $base-size 0;\n  font-size: 18px;\n  letter-spacing: 0.8px;\n"]);return ht=function(){return e},e}var jt=ve.a.h3(ht()),Pt=function(e){var t=e.children;return r.a.createElement(jt,null,t)};function wt(){var e=Object(me.a)(["\n  letter-spacing: 0.4px;\n  opacity: 0.7;\n"]);return wt=function(){return e},e}function kt(){var e=Object(me.a)(["\n  position: absolute;\n  bottom: 0;\n  padding: 28px 25px;\n  font-size: 18px;\n  text-align: left;\n"]);return kt=function(){return e},e}function xt(){var e=Object(me.a)(["\n  max-width: 100%;\n"]);return xt=function(){return e},e}function At(){var e=Object(me.a)(["\n  position: absolute;\n  top: 20px;\n  left: 38px;\n  font-size: 18px;\n  letter-spacing: 0.4px;\n"]);return At=function(){return e},e}function Ct(){var e=Object(me.a)(["\n  min-height: 500px;\n  background: #f5f5f5;\n  padding: 50px 0;\n  text-align: center;\n"]);return Ct=function(){return e},e}var It=ve.a.div(Ct()),St=ve.a.span(At()),Gt=ve.a.img(xt()),Dt=ve.a.div(kt()),Rt=ve.a.div(wt()),Lt=function(e){var t=e.currency,n=e.product;return r.a.createElement(r.a.Fragment,null,n._id&&r.a.createElement(It,null,""!==n.label&&r.a.createElement(St,null,n.label),r.a.createElement(Gt,{src:""+n.img,alt:n.name}),r.a.createElement(Dt,null,r.a.createElement(Pt,null,n.name),r.a.createElement(Rt,null,t,n.price))),!n._id&&r.a.createElement("div",null," Brak produktu"))};Lt.defaultProps={currency:"$"};var Nt=Object(o.b)((function(e){return{currency:ne(e)}}))(Lt),Tt=n(41),zt=n(93),Yt=n(22),Zt=n(92),Ut=n.n(Zt);function Ft(){var e=Object(me.a)(["\n  a {\n    padding: 0;\n  }\n"]);return Ft=function(){return e},e}function _t(){var e=Object(me.a)(["\n  justify-content: right;\n  font-size: 24px;\n  margin-top: 25px;\n\n  .page-item span.page-link {\n    color: black;\n    background: none;\n    border: none;\n  }\n  .page-link {\n    border: none;\n    color: black;\n    opacity: 0.6;\n  }\n  .active .page-link {\n    opacity: 1;\n  }\n  svg {\n    font-size: 42px;\n    padding: 0;\n  }\n"]);return _t=function(){return e},e}Object(Pe.addIcons)(Ut.a);var Mt=ve.a.div(_t()),Wt=Object(ve.a)(Yt.f)(Ft()),Vt=function(e){function t(e){var n;return Object(Ze.a)(this,t),(n=Object(Fe.a)(this,Object(_e.a)(t).call(this,e))).changePageRight=function(){var e=n.state.presentPage;(0,Object(Tt.a)(n).changePage)(e+1)},n.changePageLeft=function(){var e=n.state.presentPage;(0,Object(Tt.a)(n).changePage)(e-1)},n.changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.createPaginationList=function(){for(var e=[],t=n.state.presentPage,a=n.props.pages,c=function(a){e.push(r.a.createElement(Yt.f,{onClick:function(){a!==t&&n.changePage(a)},key:a,active:a===t},a<10&&"0",a))},o=1;o<=a;o++)c(o);return e},n.state={presentPage:e.initialPage||1},n}return Object(Me.a)(t,e),Object(Ue.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,n=this.changePageLeft,a=this.changePageRight;return r.a.createElement(Mt,null,r.a.createElement(zt.a,null,t>1&&r.a.createElement(Wt,{onClick:n},r.a.createElement(Pe.IonIcon,{name:"arrow-round-back",sizes:42})),this.createPaginationList(e),t<e&&r.a.createElement(Wt,{onClick:a},r.a.createElement(Pe.IonIcon,{name:"arrow-round-forward",sizes:42}))))}}]),t}(r.a.Component);function Jt(){var e=Object(me.a)(["\n  margin-bottom: 20px;\n"]);return Jt=function(){return e},e}function Qt(){var e=Object(me.a)(["\n  padding-left: 55px;\n"]);return Qt=function(){return e},e}var Ht=Object(ve.a)(Ye.a)(Qt()),Xt=ve.a.div(Jt()),qt=function(e){function t(){var e,n;Object(Ze.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(Fe.a)(this,(e=Object(_e.a)(t)).call.apply(e,[this].concat(r)))).loadProductsPage=function(e){var t=n.props,a=t.loadProductsByPage,r=t.productsPerPage,c=t.sortingOptions;(0,t.setPage)(e),a(e,r,c)},n}return Object(Me.a)(t,e),Object(Ue.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadProductsByPage,n=e.presentPage;t(void 0===n?1:n,e.productsPerPage,e.sortingOptions)}},{key:"render",value:function(){var e=this.loadProductsPage,t=this.props,n=t.products,a=t.request,c=t.pages,o=t.presentPage,u=a.products,l=u.success,s=u.pending,p=u.error;return r.a.createElement(Ht,null,l&&n.map((function(e){return r.a.createElement(Ve.a,{key:e._id,sm:6,as:Xt},r.a.createElement(i.b,{to:"/product/".concat(e._id)},r.a.createElement(Nt,{product:e})))}))||s&&r.a.createElement(Ve.a,null,r.a.createElement(We.a,{animation:"border"}))||r.a.createElement(Ve.a,null,r.a.createElement(Et.a,{variant:"danger"}," ",p," ")),l&&c>1&&r.a.createElement(Ve.a,null,r.a.createElement(Vt,{pages:c,onPageChange:e,initialPage:o})))}}]),t}(r.a.Component),Bt=Object(o.b)((function(e){return{products:N(e),request:w(e),pages:ae(e),productsPerPage:re(e),presentPage:(t=e,t.setting.pagination.presentPage),sortingOptions:te(e)};var t}),(function(e){return{loadProductsByPage:function(t,n,a,r){return e(U(t,n,a))},setPage:function(t){return e({payload:t,type:ue})}}}))(qt),Kt=function(){return r.a.createElement(Ye.a,null,r.a.createElement(Ve.a,{lg:3},r.a.createElement(qe,null,"Sortuj:"),r.a.createElement(Ot,null)),r.a.createElement(Ve.a,{lg:9},r.a.createElement(Bt,null)))},$t=n(42),en=function(e,t){return e.length<1?"Error":e.length<=t?e:"".concat(e.substr(0,e.lastIndexOf(" ",t)),"...")};function tn(){var e=Object(me.a)(["\n  margin-top: 60px;\n"]);return tn=function(){return e},e}function nn(){var e=Object(me.a)(["\n  font-size: 18px;\n  opacity: 0.7;\n  margin-top: 35px;\n"]);return nn=function(){return e},e}function an(){var e=Object(me.a)(["\n  background: none;\n  border: none;\n  display: inline-block;\n  font-weight: normal;\n  font-size: 24px;\n  padding: 10px;\n"]);return an=function(){return e},e}function rn(){var e=Object(me.a)(["\n  font-size: 14px;\n  width: 100%;\n  text-align: right;\n  color: red;\n  border: 0;\n  background: none;\n"]);return rn=function(){return e},e}function cn(){var e=Object(me.a)(["\n  width: 40px;\n  height: 50px;\n  text-align: center;\n  background: #f5f5f5;\n  border: none;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n"]);return cn=function(){return e},e}function on(){var e=Object(me.a)(["\n  display: flex;\n  padding-bottom: 10px;\n  justify-content: flex-end;\n  align-items: center;\n"]);return on=function(){return e},e}function un(){var e=Object(me.a)(["\n  font-size: 18px;\n"]);return un=function(){return e},e}function ln(){var e=Object(me.a)(["\n  font-size: 26px;\n  margin-bottom: 18px;\n"]);return ln=function(){return e},e}function sn(){var e=Object(me.a)(["\n  padding-bottom: 15px;\n  align-items: center;\n"]);return sn=function(){return e},e}function pn(){var e=Object(me.a)(["\n  padding: 15px 0;\n  background: #f5f5f5;\n  img {\n    max-width: 100%;\n  }\n"]);return pn=function(){return e},e}var dn=ve.a.div(pn()),fn=Object(ve.a)(Ye.a)(sn()),gn=ve.a.h2(ln()),mn=Object(ve.a)(tt)(un()),bn=ve.a.div(on()),vn=ve.a.input(cn()),yn=ve.a.button(rn()),On=ve.a.button(an()),En=Object(ve.a)(Ve.a)(nn()),hn=Object(ve.a)(Ve.a)(tn()),jn=Object(o.b)((function(e){return{cartList:W(e)}}),(function(e){return{setCount:function(t){return e({payload:t,type:H})},removeFromCart:function(t){return e(q(t))}}}))((function(e){var t=e.item,n=e.currency,c=e.setCount,o=e.removeFromCart,u=Object(a.useState)(t.count),l=Object($t.a)(u,2),s=l[0],p=l[1];return r.a.createElement(fn,null,r.a.createElement(Ve.a,{xs:2},r.a.createElement(dn,null,r.a.createElement("img",{src:""+t.img,alt:""}))),r.a.createElement(Ve.a,{xs:{span:6,offset:1}},r.a.createElement(i.b,{to:"".concat("","/product/").concat(t._id)},r.a.createElement(gn,null,t.name)),r.a.createElement(mn,null,en(t.content,150))),r.a.createElement(En,{xs:1},n+t.price),r.a.createElement(hn,{xs:2},r.a.createElement(bn,null,r.a.createElement(On,{type:"button",onClick:function(){var e=t._id,n=1*s-1;n<1||(c({_id:e,count:n}),p(n))}},"-")," ",r.a.createElement(vn,{type:"number",onChange:function(e){var n=1*e.target.value;if(!(n<1)){var a=t._id;c({_id:a,count:n}),p(e.target.value)}},value:s}),r.a.createElement(On,{type:"button",onClick:function(){var e=t._id,n=1*s+1;c({_id:e,count:n}),p(n)}},"+"),"szt"),r.a.createElement(yn,{type:"button",onClick:function(){var e=t._id;o(e)}},"usu\u0144 produkt")))}));function Pn(){var e=Object(me.a)(["\n  display: flex;\n  justify-content: right;\n"]);return Pn=function(){return e},e}function wn(){var e=Object(me.a)(["\n  border: 0;\n  background: black;\n  color: white;\n  width: 258px;\n  max-width: 100%;\n  padding: 10px 15px;\n  font-size: 22px;\n"]);return wn=function(){return e},e}var kn=ve.a.button(wn()),xn=ve.a.div(Pn()),An=function(e){var t=e.chk,n=e.setChk,a=e.currency,c=e.amount,o=e.description,i={id:"728035",amount:c,currency:a,description:o,url:"".concat("https://shopprojectkb.herokuapp.com/","payment"),type:"4",bylaw:"1",personalData:"1",ignoreLastPaymentChannel:"1"};return n(i),r.a.createElement(r.a.Fragment,null,r.a.createElement(xn,null,r.a.createElement("form",{action:"https://ssl.dotpay.pl/test_payment/",method:"post",target:"_parent"},r.a.createElement("input",{name:"description",value:o,type:"hidden"}),r.a.createElement("input",{name:"ignore_last_payment_channel",value:i.ignoreLastPaymentChannel,type:"hidden"}),r.a.createElement("input",{type:"hidden",name:"type",value:i.type}),r.a.createElement("input",{type:"hidden",name:"bylaw",value:i.bylaw}),r.a.createElement("input",{type:"hidden",name:"personal_data",value:i.personalData}),r.a.createElement("input",{name:"url",value:i.url,type:"hidden"}),r.a.createElement("input",{name:"amount",value:c,type:"hidden",required:!0}),r.a.createElement("input",{type:"hidden",name:"chk",value:t}),r.a.createElement("input",{type:"hidden",name:"currency",value:i.currency}),r.a.createElement("input",{name:"id",value:i.id,type:"hidden"}),r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement(kn,{type:"submit"},"Zap\u0142a\u0107"))),r.a.createElement("br",null)))};An.defaultProps={description:"Oplacenie zamowienia"};var Cn=Object(o.b)((function(e){return{chk:(t=e,t.cart.chk)};var t}),(function(e){return{setChk:function(t){return e(function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I("cart")),t.prev=1,t.next=4,y.a.get("".concat("/api","/chk"),{params:{options:e}});case 4:a=t.sent,n({payload:a.data,type:X}),n(S("cart")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(G(t.t0.message,"cart"));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(An);function In(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Sn=Object(o.b)((function(e){return{currency:ne(e),cartList:W(e),cartAmount:(n=e,n.cart.cartList.map((function(e){return e.count*e.price})).reduce((function(e,t){return e+t}),0)),cartIdList:(t=e,t.cart.cartIds)};var t,n}))((function(e){var t=e.cartIdList,n=e.cartList,c=e.cartAmount,o=e.currency,i=Object(a.useState)({items:[]}),u=Object($t.a)(i,2),l=u[0],s=u[1],p=Object(a.useState)(!1),f=Object($t.a)(p,2),b=f[0],v=f[1];Object(a.useEffect)((function(){(function(){var e=Object(m.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,y.a.get("".concat("/api","/cart"),{params:{productsIdList:t}}).then((function(e){s({items:e.data}),v(!1)})).catch((function(e){return v(!1),e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var O=l.items.map((function(e){var t=n.find((function(t){return t._id===e._id})),a=t?t.count:1,c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?In(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):In(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{count:a});return r.a.createElement(jn,{key:e._id,item:c,currency:o})}));return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement(We.a,{animation:"border"})||(0===O.length?r.a.createElement(r.a.Fragment,null,"koszyk jest pusty"):r.a.createElement(r.a.Fragment,null,O,r.a.createElement(Cn,{amount:c,currency:o}))))}));function Gn(){var e=Object(me.a)(["\n  margin: $base-size 0;\n  font-size: 32px;\n  font-weight: normal;\n  position: relative;\n  color: $color-text;\n  padding-bottom: 50px;\n  letter-spacing: 0.9px;\n"]);return Gn=function(){return e},e}var Dn=ve.a.h2(Gn()),Rn=function(e){var t=e.children;return r.a.createElement(Dn,null,t)},Ln=function(){return r.a.createElement(Ye.a,null,r.a.createElement(Ve.a,null,r.a.createElement(Rn,null,"Koszyk"),r.a.createElement(Sn,null)))},Nn=function(e){var t=e.location,n=new URLSearchParams(t.search.slice(1)).get("status");return Object(a.useEffect)((function(){document.title="Klikni\u0119to  razy"})),"OK"===n?r.a.createElement("div",null,"Payment Succes"):r.a.createElement("div",null,"Payment Error")};n(564);function Tn(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function zn(e){return Object(ge.b)(e,{stiffness:330,damping:22})}var Yn={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:zn(0),scale:zn(.8)},atActive:{opacity:zn(1),scale:zn(1)}},Zn=function(){return r.a.createElement(ze,null,r.a.createElement(fe.c,null,r.a.createElement(ge.a,{atEnter:Yn.atEnter,atLeave:Yn.atLeave,atActive:Yn.atActive,mapStyles:Tn,className:"route-wrapper"},r.a.createElement(fe.a,{exact:!0,path:"/",component:Kt}),r.a.createElement(fe.a,{exact:!0,path:"/product/:id",component:gt}),r.a.createElement(fe.a,{exact:!0,path:"/cart",component:Ln}),r.a.createElement(fe.a,{exact:!0,path:"/payment",component:Nn}),r.a.createElement(fe.a,{component:Qe}))))},Un=document.getElementById("root");Object(c.render)(r.a.createElement((function(){return r.a.createElement(o.a,{store:de},r.a.createElement(i.a,null,r.a.createElement(Zn,null)))}),null),Un),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()},87:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVwAAAAXCAYAAABH/vc3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkEwQkNERjlGRjE3MTFFOUI4MDdCOTc3RkQ5ODFCMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkEwQkNERkFGRjE3MTFFOUI4MDdCOTc3RkQ5ODFCMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTBCQ0RGN0ZGMTcxMUU5QjgwN0I5NzdGRDk4MUIxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTBCQ0RGOEZGMTcxMUU5QjgwN0I5NzdGRDk4MUIxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjF0K1sAAAbjSURBVHja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"},99:function(e,t,n){e.exports=n(565)}},[[99,1,2]]]);
//# sourceMappingURL=main.01b9b996.chunk.js.map