(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Navbar_nav__1kN1A",item:"Navbar_item__2Dxc4",activeLink:"Navbar_activeLink__2bKak",settings:"Navbar_settings__zyO7u",friendsBar:"Navbar_friendsBar__1L8v9",friendsBarIcons:"Navbar_friendsBarIcons__3yUKd"}},117:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i});var a=n(34),r=n(5),o={dialogs:[{id:1,name:"Maksim"},{id:2,name:"Alyona"},{id:3,name:"Dima"},{id:4,name:"Dania"},{id:5,name:"Nastya"},{id:6,name:"Nysha"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Hi Max!"},{id:4,message:"Dania"},{id:5,message:"Meow"},{id:6,message:"Hi Alex"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}},i=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}},123:function(e,t,n){e.exports=n.p+"static/media/user.e1b4db72.png"},125:function(e,t,n){e.exports=n.p+"static/media/Spinner-1s-200px.859f1396.svg"},13:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i});var a=n(122),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"df2c97a1-d114-4ffe-a785-344c39bc609e"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},unfollowUser:function(e){return r.delete("follow/".concat(e)).then(function(e){return e.data})},followUser:function(e){return r.post("follow/".concat(e)).then(function(e){return e.data})}},u={auth:function(){return r.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:n}).then(function(e){return e.data})},logout:function(){return r.delete("/auth/login").then(function(e){return e.data})}},i={getProfile:function(e){return r.get("profile/".concat(e)).then(function(e){return e.data})},getStatus:function(e){return r.get("profile/status/".concat(e)).then(function(e){return e.data})},updateStatus:function(e){return r.put("profile/status",{status:e}).then(function(e){return e.data})}}},155:function(e,t,n){e.exports=n(285)},157:function(e,t,n){},161:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(157),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,295)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,u=t.getTTFB;n(e),a(e),r(e),o(e),u(e)})}),u=n(121),i=n.n(u),c=n(22),s=n(23),l=n(25),f=n(24),m=(n(161),n(124)),p=n(290),d=n(10),g=n(8),v=n.n(g),h=n(14),E=n(34),b=n(5),O=n(13),w=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(b.a)(Object(b.a)({},e),a):e})},S={users:[],pageSize:10,totalUsersCount:1,currentPage:1,isFetching:!0,followingProgress:[]},j=function(e){return{type:"FOLLOW",userID:e}},_=function(e){return{type:"UNFOLLOW",userID:e}},P=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},y=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},C=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",followingProgress:e,userId:t}},N=function(){var e=Object(h.a)(v.a.mark(function e(t,n,a,r){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(C(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),k=n(119),x=n(39),U=n.n(x),T=function(e){for(var t=e.totalItemsCount,n=e.currentPage,o=e.onPageChanged,u=e.pageSize,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/u),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/c),p=Object(a.useState)(1),d=Object(k.a)(p,2),g=d[0],v=d[1],h=(g-1)*c+1,E=g*c;return r.a.createElement("div",null,r.a.createElement("div",{className:U.a.pagesWrapper},g>1&&r.a.createElement("button",{className:U.a.prevButton,onClick:function(){v(g-1)}},"<<"),l.filter(function(e){return e>=h&&e<=E}).map(function(e){return r.a.createElement("span",{className:n===e?U.a.selectedPage:U.a.page,key:e,onClick:function(t){o(e)}},e)}),m>g&&r.a.createElement("button",{className:U.a.nextButton,onClick:function(){v(g+1)}},">>")))},L=n(84),I=n.n(L),A=n(123),F=n.n(A),B=n(289),D=function(e){var t=e.user,n=e.followingProgress,a=e.follow,o=e.unfollow;return r.a.createElement("div",{className:I.a.userWrapper},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(B.a,{to:"/profile/"+t.id},r.a.createElement("img",{alt:"img",src:null!=t.photos.small?t.photos.small:F.a,className:I.a.usersPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.city"),r.a.createElement("div",null,"user.location.country"))))},R=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalUsersCount,o=e.followingProgress,u=e.follow,i=e.unfollow,c=e.users,s=e.pageSize;return r.a.createElement("div",null,r.a.createElement(T,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:s}),r.a.createElement("div",null,c.map(function(e){return r.a.createElement(D,{key:e.id,user:e,followingProgress:o,follow:u,unfollow:i})})))},z=n(45),M=n(96),G=n(7),W=n(129),H=Object(W.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),J=function(e){return e.usersPage.pageSize},K=function(e){return e.usersPage.totalUsersCount},X=function(e){return e.usersPage.currentPage},Y=function(e){return e.usersPage.isFetching},V=function(e){return e.usersPage.followingProgress},Z=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(z.a,null):null,r.a.createElement(R,{totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingProgress:this.props.followingProgress,pageSize:this.props.pageSize}))}}]),n}(r.a.Component),q=Object(G.d)(Object(d.b)(function(e){return{users:H(e),pageSize:J(e),totalUsersCount:K(e),currentPage:X(e),isFetching:Y(e),followingProgress:V(e)}},{follow:function(e){return function(){var t=Object(h.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=O.c.followUser.bind(O.c),N(n,e,a,j);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=O.c.unfollowUser.bind(O.c),N(n,e,a,_);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:P,setFollowingProgress:C,getUsers:function(e,t){return function(){var n=Object(h.a)(v.a.mark(function n(a){var r;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(y(!0)),a(P(e)),n.next=4,O.c.getUsers(e,t);case 4:r=n.sent,a(y(!1)),a({type:"SET-USERS",users:r.items}),a({type:"SET-TOTAL-USERS-COUNT",count:r.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}}),M.a)(Z),Q=n(11),$=n.n(Q),ee=n(65),te=n.n(ee),ne=function(e){return r.a.createElement("div",{className:te.a.wrapper},r.a.createElement("div",{className:te.a.avatar},r.a.createElement("img",{alt:"avatar",src:e.avatar})),r.a.createElement("div",{className:te.a.names},e.name))},ae=Object(d.b)(function(e){return{sideBar:e.sideBar}},function(){return{}})(function(e){var t=e.sideBar.friendBar.map(function(e){return r.a.createElement(ne,{avatar:e.avatar,name:e.name})});return r.a.createElement("nav",{className:$.a.nav},r.a.createElement("div",{className:$.a.item},r.a.createElement(B.a,{to:"/profile",activeClassName:$.a.activeLink},"Profile")),r.a.createElement("div",{className:$.a.item},r.a.createElement(B.a,{to:"/dialogs",activeClassName:$.a.activeLink},"Messages")),r.a.createElement("div",{className:$.a.item},r.a.createElement(B.a,{to:"/users",activeClassName:$.a.activeLink},"Users")),r.a.createElement("div",{className:$.a.item},r.a.createElement(B.a,{to:"/news",activeClassName:$.a.activeLink},"News")),r.a.createElement("div",{className:$.a.item},r.a.createElement(B.a,{to:"/music",activeClassName:$.a.activeLink},"Music")),r.a.createElement("div",{className:$.a.settings},r.a.createElement(B.a,{to:"/settings",activeClassName:$.a.activeLink},"Settings")),r.a.createElement("div",{className:$.a.friendsBar},r.a.createElement(B.a,{to:"/dialogs",activeClassName:$.a.activeLink},"Friends"),r.a.createElement("div",{className:$.a.friendsBarIcons},t)))}),re=n(85),oe=n.n(re),ue=function(e){return r.a.createElement("header",{className:oe.a.header},r.a.createElement("img",{alt:"logo",src:"https://www.clipartmax.com/png/small/184-1841721_web-development-web-design-logo-download-logo-website-png.png"}),r.a.createElement("div",{className:oe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(B.a,{to:"/login"},"Login")))},ie=n(40),ce={id:20058,email:null,login:null,isAuth:!1},se=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{userId:e,email:t,login:n,isAuth:a}}},le=function(){return function(){var e=Object(h.a)(v.a.mark(function e(t){var n,a,r,o,u;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.auth();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.email,u=a.login,t(se(r,o,u,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},fe=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(ue,this.props)}}]),n}(r.a.Component),me=Object(d.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(h.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.logout();case 2:0===e.sent.resultCode&&t(se(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(fe),pe=n(118),de=n(31),ge=n(80),ve=n(286),he=n(50),Ee=n.n(he),be=Object(pe.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(de.c)([ge.b],"Email","email",de.a),Object(de.c)([ge.b],"Password","password",de.a,{type:"password"}),Object(de.c)([],null,"rememberMe",de.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:Ee.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),Oe=Object(d.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(){var a=Object(h.a)(v.a.mark(function a(r){var o,u;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.login(e,t,n);case 2:0===(o=a.sent).resultCode?r(le()):(u=o.messages.length>0?o.messages[0]:"Some error",r(Object(ie.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){var t=e.login;return e.isAuth?r.a.createElement(ve.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(be,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))}),we={initialized:!1},Se=r.a.lazy(function(){return n.e(4).then(n.bind(null,297))}),je=r.a.lazy(function(){return n.e(3).then(n.bind(null,296))}),_e=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(me,null),r.a.createElement(ae,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(z.a,null)},r.a.createElement(m.a,{path:"/dialogs",render:function(){return r.a.createElement(Se,null)}}),r.a.createElement(m.a,{path:"/profile/:userId?",render:function(){return r.a.createElement(je,null)}})),r.a.createElement(m.a,{path:"/users",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(m.a,{path:"/login",render:function(){return r.a.createElement(Oe,null)}}))):r.a.createElement(z.a,null)}}]),n}(r.a.Component),Pe=Object(G.d)(p.a,Object(d.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(le());Promise.all([t]).then(function(){e({type:"INITIALIZED-SUCCESS"})})}}}))(_e),ye=n(89),Ce=n(117),Ne={friendBar:[{id:1,name:"Maksim ",avatar:"https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png"},{id:2,name:"Alyona ",avatar:"https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png"},{id:3,name:"Dima ",avatar:"https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png"}]},ke=n(128),xe=n(120),Ue=Object(G.c)({profilePage:ye.d,messagesPage:Ce.a,sideBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne;arguments.length>1&&arguments[1];return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:w(e.users,t.userID,"id",{followed:!0})});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:w(e.users,t.userID,"id",{followed:!1})});case"SET-USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingProgress:t.followingProgress?[].concat(Object(E.a)(e.followingProgress),[t.userId]):e.followingProgress.filter(function(e){return e!==t.userId})});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(b.a)(Object(b.a)({},e),t.data);default:return e}},form:xe.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED-SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}}}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,Le=Object(G.e)(Ue,Te(Object(G.a)(ke.a)));window.__store__=Le;var Ie=n(288);i.a.render(r.a.createElement(Ie.a,null,r.a.createElement(d.a,{store:Le},r.a.createElement(Pe,null))),document.getElementById("root")),o()},31:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return d});var a=n(88),r=n(0),o=n.n(r),u=n(50),i=n.n(u),c=n(83),s=["input","meta","child","element"],l=["input","meta","child","element"],f=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,u=n&&a;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("div",null,r),u&&o.a.createElement("span",null,a))},m=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(a.a)(e,s));return o.a.createElement(f,e,o.a.createElement("textarea",Object.assign({},t,n)))},p=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(a.a)(e,l));return o.a.createElement(f,e,o.a.createElement("input",Object.assign({},t,n)))},d=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({validate:e,placeholder:t,name:n,component:a},r)),u)}},39:function(e,t,n){e.exports={pagesWrapper:"Paginator_pagesWrapper__2mVQI",selectedPage:"Paginator_selectedPage__3m_IG",page:"Paginator_page__pgKh4",prevButton:"Paginator_prevButton__2AM3U",nextButton:"Paginator_nextButton__3nyFD"}},45:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n.n(a),o=n(125),u=n.n(o),i=function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"preloader",src:u.a}))}},50:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1afCX",error:"FormsControls_error__2gDy6",formSummaryError:"FormsControls_formSummaryError__1EPtY"}},65:function(e,t,n){e.exports={wrapper:"FriendBar_wrapper__1BGIA",avatar:"FriendBar_avatar__14Nsx",names:"FriendBar_names__MS4Sw"}},80:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols ")}}},84:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__N5vct",userWrapper:"Users_userWrapper__2eA42"}},85:function(e,t,n){e.exports={header:"Header_header__1YCFH",loginBlock:"Header_loginBlock__3iOpN"}},89:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return d}),n.d(t,"e",function(){return g});var a=n(8),r=n.n(a),o=n(14),u=n(34),i=n(5),c=n(13),s={posts:[{id:1,message:"Hi, how are you?",likesCount:23},{id:2,message:"Hi boys",likesCount:12}],profile:null,status:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SET-USER-STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}},f=function(e){return{type:"ADD-POST",newPostText:e}},m=function(e){return{type:"SET-USER-STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n({type:"SET-USER-PROFILE",profile:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(m(a));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark(function t(n){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},96:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(22),r=n(23),o=n(25),u=n(24),i=n(0),c=n.n(i),s=n(286),l=n(10),f=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(u.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(s.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(function(e){return{isAuth:e.auth.isAuth}})(t)}}},[[155,1,2]]]);
//# sourceMappingURL=main.778eaea7.chunk.js.map