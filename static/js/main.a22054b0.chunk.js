(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return G}));var n=a(5),c=a(52),r=a.n(c),s=a(18),o=(a(96),a(176)),i=a(178),j=a(173),p=a(172),u="onlineChat/login",d="onlineChat/chat",l=a(102),b=a.n(l),h=a(50),O=a(9),x=function(){var e=Object(n.useContext)(G).auth,t=Object(h.a)(e),a=Object(s.a)(t,1)[0];return Object(O.jsx)(o.a,{position:"static",children:Object(O.jsxs)(i.a,{variant:"dense",children:[Object(O.jsx)(j.a,{container:!0,justify:"flex-end"}),a?Object(O.jsx)(p.a,{onClick:function(){e.signOut()},variant:"contained",children:"Logout"}):Object(O.jsx)(b.a,{to:u,children:Object(O.jsx)(p.a,{variant:"contained",children:"Login"})})]})})},m=a(56),f=a(0),v=a.n(f),g=a(3),W=a(53),C=a.n(W),_=a(48),w=function(){var e=Object(n.useContext)(G).auth,t=function(){var t=Object(g.a)(v.a.mark((function t(){var a,n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new _.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(a);case 3:n=t.sent,c=n.user,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:C.a.loginWrapper,children:Object(O.jsx)(p.a,{variant:"outlined",onClick:t,children:"Enter with Google"})})},y=a(175),N=a(171),k=a(107),I=function(){return Object(O.jsx)("div",{className:C.a.loaderWrapper,children:Object(O.jsx)("div",{className:"lds-hourglass"})})},A=function(){var e=Object(n.useContext)(G),t=e.auth,a=e.firestore,c=Object(h.a)(t),r=Object(s.a)(c,1)[0],o=Object(n.useState)(""),i=Object(s.a)(o,2),j=i[0],u=i[1],d=Object(k.a)(a.collection("messages").orderBy("createdAt")),l=Object(s.a)(d,2),b=l[0],x=l[1],m=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.collection("messages").add({uid:r.uid,displayName:r.displayName,photoURL:r.photoURL,text:j,createdAt:_.a.firestore.FieldValue.serverTimestamp()}),u("");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return x?Object(O.jsx)(I,{}):Object(O.jsxs)("div",{className:C.a.chatWrapper,children:[Object(O.jsx)("div",{className:C.a.chatWindow,children:b.map((function(e){return Object(O.jsxs)("div",{className:C.a.messageWrapper,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(y.a,{src:e.photoURL}),Object(O.jsx)("div",{children:e.displayName})]}),Object(O.jsx)("div",{children:e.text})]},e.uid)}))}),Object(O.jsx)(N.a,{fullWidth:!0,maxRows:2,id:"filled-basic",label:"Filled",variant:"filled",value:j,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)(p.a,{onClick:m,variant:"outlined",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},B=[{path:u,Component:w}],L=[{path:d,Component:A}],R=a(89),z=a.n(R),P=function(){var e=Object(n.useContext)(G).auth,t=Object(h.a)(e);return Object(s.a)(t,1)[0]?Object(O.jsxs)(m.c,{children:[L.map((function(e){var t=e.path,a=e.Component;return Object(O.jsx)(m.b,{path:t,component:a})})),Object(O.jsx)(z.a,{to:d})]}):Object(O.jsxs)(m.c,{children:[B.map((function(e){var t=e.path,a=e.Component;return Object(O.jsx)(m.b,{path:t,component:a})})),Object(O.jsx)(z.a,{to:u})]})},S=function(){var e=Object(n.useContext)(G).auth,t=Object(h.a)(e),a=Object(s.a)(t,3),c=(a[0],a[1]);a[2];return c?Object(O.jsx)(I,{}):Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsx)(P,{})]})};a(63),a(41);_.a.initializeApp({apiKey:"AIzaSyB1S8zZhOP8dBNM2Hph0RAVBpq040ooMm0",authDomain:"chat-react-cedb2.firebaseapp.com",projectId:"chat-react-cedb2",storageBucket:"chat-react-cedb2.appspot.com",messagingSenderId:"966615400212",appId:"1:966615400212:web:565efb0db115ce87f2cc01",measurementId:"${config.measurementId}"});var V=_.a.auth(),E=_.a.firestore(),G=Object(n.createContext)(null);r.a.render(Object(O.jsx)(m.a,{children:Object(O.jsx)(G.Provider,{value:{firebase:_.a,auth:V,firestore:E},children:Object(O.jsx)(S,{})})}),document.getElementById("root"))},53:function(e,t,a){e.exports={loginWrapper:"components_loginWrapper__2WKxz",loaderWrapper:"components_loaderWrapper__JEvcV",chatWrapper:"components_chatWrapper__3VhGm",chatWindow:"components_chatWindow__2X90Q",messageWrapper:"components_messageWrapper__clqad"}},96:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.a22054b0.chunk.js.map