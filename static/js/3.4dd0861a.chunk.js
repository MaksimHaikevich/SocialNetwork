(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2C4wi",wallpaper:"ProfileInfo_wallpaper__2N-s1",info:"ProfileInfo_info__2-Z84",description:"ProfileInfo_description__m4WWx"}},293:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__3VRrn",posts:"MyPosts_posts__1XzNh"}},294:function(e,t,a){e.exports={item:"Post_item__3kVbI"}},296:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(23),s=a(25),r=a(24),l=a(0),i=a.n(l),u=a(292),c=a.n(u),p=a(45),m=a(119),d=function(e){var t=Object(l.useState)(!1),a=Object(m.a)(t,2),n=a[0],o=a[1],s=Object(l.useState)(e.status),r=Object(m.a)(s,2),u=r[0],c=r[1];Object(l.useEffect)(function(){c(e.status)},[]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){return o(!0)}},e.status||"\u041f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(u)},autoFocus:!0,value:u})))},f=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?i.a.createElement("div",null,i.a.createElement("div",{className:c.a.info},i.a.createElement("div",{className:c.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||"https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png",alt:""})),i.a.createElement("div",{className:c.a.description},i.a.createElement("p",null,t.fullName.toUpperCase()),i.a.createElement("p",null,t.aboutMe),i.a.createElement("p",null,i.a.createElement("strong",null,i.a.createElement(d,{updateStatus:n,status:a}))),i.a.createElement("div",null,i.a.createElement("p",null,"\u0421\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u0438\u0441\u043a\u0430:"," ",i.a.createElement("strong",null,t.lookingForAJob?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b":"\u041d\u0435 \u0438\u0449\u0443")),i.a.createElement("p",null,t.lookingForAJobDescription))))):i.a.createElement(p.a,null)},E=a(89),g=a(34),A=a(293),b=a.n(A),h=a(294),k=a.n(h),v=function(e){return i.a.createElement("div",{className:"".concat(k.a.item)},i.a.createElement("img",{src:"data:image/png;base64,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",alt:""}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"LIKE: ",e.likesCount)))},D=a(83),P=a(118),O=a(80),w=a(31),U=i.a.memo(function(e){var t=Object(g.a)(e.profilePage.posts).reverse().map(function(e){return i.a.createElement(v,{message:e.message,likesCount:e.likesCount})});return i.a.createElement("div",{className:b.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:b.a.posts},t))}),j=Object(O.a)(30),I=Object(P.a)({form:"postAddMessageForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(D.a,{validate:[O.b,j],component:w.b,name:"newPostText",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),z=a(10),R=Object(z.b)(function(e){return{profilePage:e.profilePage}},function(e){return{addPost:function(t){e(Object(E.a)(t))}}})(U),x=function(e){return i.a.createElement("div",null,i.a.createElement(f,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(R,{profile:e.profile}))},K=a(290),N=a(7),X=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(N.d)(Object(z.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}},{getProfile:E.b,getStatus:E.c,updateStatus:E.e}),K.a)(X)}}]);
//# sourceMappingURL=3.4dd0861a.chunk.js.map