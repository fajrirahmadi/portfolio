(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},186:function(e,t,a){e.exports=a(348)},348:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),l=(a(105),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(64),m=(a(270),a(22)),u=a(23),d=a(25),h=a(24),p=a(26),f=(a(92),a(349)),b=a(351),v=f.a.Header,g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v,{className:"header"},o.a.createElement(b.b,{className:"menu",selectedKeys:[this.props.selectedNavbar],mode:"horizontal"},o.a.createElement(b.b.Item,{className:"nav",key:"home"},o.a.createElement("a",{href:"/"},"Home")),o.a.createElement(b.b.Item,{className:"nav",key:"portfolio"},o.a.createElement("a",{href:"/portfolio"},"Portfolio")),o.a.createElement(b.b.Item,{className:"nav",key:"about"},o.a.createElement("a",{href:"/about"},"About")))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={id:e.match.params.id,sajak:{}},console.log(a.props),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.database().ref("/portfolio/"+this.state.id).once("value").then(function(t){console.log(e.state.id),console.log(t.val()),e.setState({sajak:t.val()})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{selectedNavbar:"portfolio"}),o.a.createElement("div",{className:"content-detail-portfolio"},o.a.createElement("img",{className:"image-large",alt:"portfolio",src:this.state.sajak.image}),o.a.createElement("h1",{style:{marginTop:36,fontSize:36}},o.a.createElement("b",null,this.state.sajak.title)),o.a.createElement("p",{className:"content-detail"},'"',this.state.sajak.description,'"')))}}]),t}(n.Component),E=a(181),w=a(56),j=a(350),k=a(352),I=a(76),O=a(133),N=j.a.Meta,A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a.state={sajakList:[],nama:"My Portfolio",title:"",description:"",image:"",visible:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.database().ref("/portfolio").once("value").then(function(t){var a=[];t.forEach(function(e){a.push(e.val())}),e.setState({sajakList:a,title:a[0].title,description:a[0].description,image:a[0].image})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"content-portfolio"},o.a.createElement("h1",{style:{color:"#fff"}},this.state.nama),o.a.createElement("div",{id:"rounded-line-white"}),o.a.createElement(k.a,{title:this.state.title,visible:this.state.visible,footer:[o.a.createElement(I.a,{key:"back",onClick:this.handleOk},"Ok")]},o.a.createElement("p",null,this.state.description)),o.a.createElement(O.Row,null,this.state.sajakList.map(function(t,a){return o.a.createElement(O.Col,{xs:12,sm:12,md:6,lg:3},o.a.createElement("div",{style:{marginBottom:15}},o.a.createElement(j.a,{onClick:function(){return e.handleClick(t)},hoverable:!0,cover:o.a.createElement("img",{alt:"portfolio",src:t.image})},o.a.createElement(N,{title:t.title}))))}))))}},{key:"handleClick",value:function(e){this.setState({title:e.title,description:e.description,image:e.image,visible:!0})}}]),t}(n.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-about"},o.a.createElement("h1",null,"It's About Me"),o.a.createElement("div",{id:"rounded-line-green"}),o.a.createElement("p",{className:"p"},"I am Fajri Rahmadi and just call me Fajri. I am 22 years old and I graduate from University of Indonesia at 2018. I interested on creating Android application. I started learn programming since I was at college. I learn C, python, Assembly, HTML, CSS, and Java. From college, I get basic programming like algorithm, data structure, modularization, and others."),o.a.createElement("p",{className:"p"},"I interested on android application and I learn how to create it individually. I remember that my first project is Restaurant Menu's and I install it in my phone, I was really excited at that moment. Then, I continue to explore about developing android application from component, integration, service API, and others."),o.a.createElement("p",{className:"p"},"I get my professional project at my third years as student of university. I learn new technology that help me until today, it was Firebase as a service. This technology was help me to fast development without think about service, because he provided it. Since this project, I always use my fast development apps using firebase. You can see my application using firebase in my portfolio page, I show there."),o.a.createElement("p",{className:"p"},"I work on company before my graduate day, PT Nostra Solusi Teknologi is my first company. I join as Android Developer and follow my top lead Mr. ",o.a.createElement("a",{href:"https://www.linkedin.com/in/sony-indrajid-248667132/"},"Sony Indrajid"),". He teach me how to make code readable, reusable, maintainable, and he show me many technology, I really proud of him. 8 month later, I quit my company and follow my way as Android Developer on Boost Indonesia. In this company, I learn about product, start from business requirement, journey, design, development, testing, and release a feature. It was my first time to work on my own product. And I am an Android Developer here until today."),o.a.createElement("p",{className:"p"},"I loved to discuss with you, you can contact me below"))}}]),t}(n.Component),S=a(49),R=function(){return o.a.createElement("div",{className:"bottom-layout"},o.a.createElement("a",{href:"https://www.facebook.com/thegeanfu",target:"blank"},o.a.createElement(S.a,null)),o.a.createElement("a",{href:"https://www.instagram.com/fajri_rahmadi",target:"blank"},o.a.createElement(S.b,null)),o.a.createElement("a",{href:"https://twitter.com/Arloji_2213",target:"blank",className:"medium-icon"},o.a.createElement(S.d,null)),o.a.createElement("a",{href:"https://www.youtube.com/channel/UCOVLR2Qp13FI_W6_C9Yjaxg",target:"blank",className:"medium-icon"},o.a.createElement(S.f,null)),o.a.createElement("a",{href:"https://www.linkedin.com/in/fajri-rahmadi-a06692148/",target:"blank"},o.a.createElement(S.c,null)),o.a.createElement("a",{href:"mailto:fajrirahmadi@gmail.com"},o.a.createElement(S.g,null)),o.a.createElement("a",{href:"https://fajrirahmadi.wordpress.com",target:"blank",className:"medium-icon"},o.a.createElement(S.e,null)))},L=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},o.a.createElement("h1",{className:"title"},"Fajri Rahmadi"),o.a.createElement("h3",{className:"description"},"Native Android Developer")),o.a.createElement(R,null),o.a.createElement(A,null),o.a.createElement(C,null),o.a.createElement("div",{className:"footer"},o.a.createElement("h3",{style:{color:"#fff"}},"Copyright \xa92019 | This page created with Love by Fajri Rahmadi")))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e){a.setState({current:e.key})},a.getRouterName=function(e){a.setState({current:e})},a.state={current:"home"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement(w.a,{path:"/portfolio",component:A}),o.a.createElement(w.a,{path:"/detail-portfolio/:id",component:y}),o.a.createElement(w.a,{path:"/about",component:C}),o.a.createElement(w.a,{exact:!0,path:"/",component:L}))}}]),t}(n.Component);s.initializeApp({apiKey:"AIzaSyANyS7cLKqNmARrV1RmeI9zZUnfyApLh-A",authDomain:"fajri-portfolio.firebaseapp.com",databaseURL:"https://fajri-portfolio.firebaseio.com",projectId:"fajri-portfolio",storageBucket:"fajri-portfolio.appspot.com",messagingSenderId:"718080219766"}),r.a.render(o.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}()},92:function(e,t,a){}},[[186,1,2]]]);
//# sourceMappingURL=main.87ddc134.chunk.js.map