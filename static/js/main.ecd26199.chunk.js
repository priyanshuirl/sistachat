(this.webpackJsonpsistachat=this.webpackJsonpsistachat||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var s=n(4),c=n.n(s),a=n(15),r=n.n(a),i=(n(24),n(13)),o=n.n(i),u=n(16),d=n(10),j=(n(26),n(9)),h=(n(33),n(28),n(31),n(18)),l=n(19),b=n(3);j.a.initializeApp({apiKey:"AIzaSyAnwCas3WWmywhJQ7_tCrADvC_hHOPQP6Q",authDomain:"sistachat-edd3e.firebaseapp.com",projectId:"sistachat-edd3e",storageBucket:"sistachat-edd3e.appspot.com",messagingSenderId:"264187157963",appId:"1:264187157963:web:6e191eaf1c3633e7a1ea4e",measurementId:"G-7XK5127ZXV"});var p=j.a.auth(),O=j.a.firestore();function m(){return Object(b.jsxs)("div",{className:"intro",children:[Object(b.jsx)("h1",{children:"Welcome to sistachat"}),Object(b.jsx)("p",{children:"A place for you to discuss your Experiences, Ideas, Problems and Solutions with other people."}),Object(b.jsx)("button",{className:"sign-in",onClick:function(){var e=new j.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Continue with Google"}),Object(b.jsxs)("p",{children:["Made By ",Object(b.jsx)("b",{children:"Priyanshu\xa0Mishra"})]})]})}function x(){return p.currentUser&&Object(b.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign\xa0Out"})}function f(){var e=Object(s.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(l.a)(n,{idField:"id"}),a=Object(d.a)(c,1)[0],r=Object(s.useState)(""),i=Object(d.a)(r,2),h=i[0],m=i[1],x=function(){var n=Object(u.a)(o.a.mark((function n(s){var c,a,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.preventDefault(),c=p.currentUser,a=c.uid,r=c.photoURL,n.next=4,t.add({text:h,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:r});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("main",{children:[a&&a.map((function(e){return Object(b.jsx)(g,{message:e},e.id)})),Object(b.jsx)("span",{ref:e})]}),Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsx)("input",{value:h,id:"input",onChange:function(e){return m(e.target.value)},placeholder:"Type your message...",autocomplete:"off"}),Object(b.jsx)("button",{type:"submit",id:"button",disabled:!h,children:"Send"})]})]})}function g(e){var t=e.message,n=t.text,s=t.uid,c=t.photoURL,a=s===p.currentUser.uid?"sent":"received";return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"message ".concat(a),children:[Object(b.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png",alt:""}),Object(b.jsx)("p",{children:n})]})})}var v=function(){var e=Object(h.a)(p),t=Object(d.a)(e,1)[0];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"sistachat"}),Object(b.jsxs)("p",{children:["Made By ",Object(b.jsx)("b",{children:"Priyanshu Mishra"})]}),Object(b.jsx)(x,{})]}),Object(b.jsx)("section",{children:t?Object(b.jsx)(f,{}):Object(b.jsx)(m,{})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.ecd26199.chunk.js.map