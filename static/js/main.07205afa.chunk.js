(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){},181:function(e,t,a){e.exports=a(343)},343:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),l=(a(131),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(29),m=(a(265),a(30)),u=a(31),d=a(33),p=a(32),h=a(34),f=(a(88),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={id:e.match.params.id,sajak:{}},console.log(a.props),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getRouterName("portfolio"),s.database().ref("/portfolio/"+this.state.id).once("value").then(function(t){console.log(e.state.id),console.log(t.val()),e.setState({sajak:t.val()})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"content-detail-portfolio"},o.a.createElement("img",{className:"image-large",alt:"portfolio",src:this.state.sajak.image}),o.a.createElement("h1",{style:{marginTop:36,fontSize:36}},o.a.createElement("b",null,this.state.sajak.title)),o.a.createElement("p",{className:"content-detail"},'"',this.state.sajak.description,'"'))}}]),t}(n.Component)),g=a(41),b=a(51),v=a(344),y=a(346),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={sajakList:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.getRouterName("home"),this.getListSajak()}},{key:"getListSajak",value:function(){s.database().ref().child("portfolio").on("child_changed",function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h1",{className:"title"},"Fajri Rahmadi"),o.a.createElement("h3",{className:"description"},"Native Android Developer"))}}]),t}(n.Component),E=a(345),w=a(126),k=E.a.Meta,N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={sajakList:[],nama:"My Portfolio",title:"",description:"",image:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getRouterName("portfolio"),s.database().ref("/portfolio").once("value").then(function(t){var a=[];t.forEach(function(e){a.push(e.val())}),e.setState({sajakList:a,title:a[0].title,description:a[0].description,image:a[0].image})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"content-portfolio"},o.a.createElement("h1",{className:"title"},this.state.nama),o.a.createElement("div",null,o.a.createElement(w.Row,null,this.state.sajakList.map(function(e,t){return o.a.createElement(w.Col,{xs:12,sm:12,md:4,lg:3,key:t},o.a.createElement(g.b,{to:"/detail-portfolio/".concat(e.key)},o.a.createElement("div",{style:{marginBottom:20}},o.a.createElement(E.a,{hoverable:!0,cover:o.a.createElement("img",{alt:"portfolio",src:e.image})},o.a.createElement(k,{style:{textAlign:"justify"},title:e.title,description:e.description})))))}))))}}]),t}(n.Component),I=a(53),O=function(){return o.a.createElement("div",{className:"bottom-layout"},o.a.createElement("a",{href:"https://www.facebook.com/thegeanfu",target:"blank"},o.a.createElement(I.a,null)),o.a.createElement("a",{href:"https://www.instagram.com/fajri_rahmadi",target:"blank"},o.a.createElement(I.b,null)),o.a.createElement("a",{href:"https://www.youtube.com/channel/UCOVLR2Qp13FI_W6_C9Yjaxg",target:"blank",className:"medium-icon"},o.a.createElement(I.d,null)),o.a.createElement("a",{href:"https://www.linkedin.com/in/fajri-rahmadi-a06692148/",target:"blank"},o.a.createElement(I.c,null)),o.a.createElement("a",{href:"mailto:fajrirahmadi@gmail.com"},o.a.createElement(I.f,null)),o.a.createElement("a",{href:"https://fajrirahmadi.wordpress.com",target:"blank",className:"medium-icon"},o.a.createElement(I.e,null)))},R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={sajakList:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getListSajak(),this.props.getRouterName("about")}},{key:"getListSajak",value:function(){s.database().ref().child("portfolio").on("child_changed",function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"content-about"},o.a.createElement("h1",{className:"title"},"It's About Me"),o.a.createElement("p",{className:"p"},"I am Fajri Rahmadi and just call me Fajri. I am 22 years old and I graduate from University of Indonesia at 2018. I interested on creating Android application. I started learn programming since I was at college. I learn C, python, Assembly, HTML, CSS, and Java. From college, I get basic programming like algorithm, data structure, modularization, and others."),o.a.createElement("p",{className:"p"},"I interested on android application and I learn how to create it individually. I remember that my first project is Restaurant Menu's and I install it in my phone, I was really excited at that moment. Then, I continue to explore about developing android application from component, integration, service API, and others."),o.a.createElement("p",{className:"p"},"I get my professional project at my third years as student of university. I learn new technology that help me until today, it was Firebase as a service. This technology was help me to fast development without think about service, because he provided it. Since this project, I always use my fast development apps using firebase. You can see my application using firebase in my portfolio page, I show there."),o.a.createElement("p",{className:"p"},"I work on company before my graduate day, PT Nostra Solusi Teknologi is my first company. I join as Android Developer and follow my top lead Mr. Sony Indrajid. He teach me how to make code readable, reusable, maintainable, and he show me many technology, I really proud of him. 8 month later, I quit my company and follow my way as Android Developer on Boost Indonesia. In this company, I learn about product, start from business requirement, journey, design, development, testing, and release a feature. It was my first time to work on my own product. And I am an Android Developer here until today."),o.a.createElement("p",{className:"p"},"I loved to discuss with you, you can contact me below"),o.a.createElement(O,null))}}]),t}(n.Component),A=v.a.Header,S=v.a.Content,C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){a.setState({current:e.key})},a.getRouterName=function(e){a.setState({current:e})},a.state={current:"home"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(g.a,null,o.a.createElement(b.c,null,o.a.createElement(v.a,{className:"body"},o.a.createElement(A,{className:"header"},o.a.createElement(y.b,{className:"menu",onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},o.a.createElement(y.b.Item,{className:"nav",key:"home"},o.a.createElement(g.b,{to:"/"},"Home")),o.a.createElement(y.b.Item,{className:"nav",key:"portfolio"},o.a.createElement(g.b,{to:"/portfolio"},"Portfolio")),o.a.createElement(y.b.Item,{className:"nav",key:"about"},o.a.createElement(g.b,{to:"/about"},"About")))),o.a.createElement(S,null,o.a.createElement(b.a,{path:"/portfolio",render:function(t){return o.a.createElement(N,Object.assign({getRouterName:e.getRouterName},t))}}),o.a.createElement(b.a,{path:"/detail-portfolio/:id",render:function(t){return o.a.createElement(f,Object.assign({getRouterName:e.getRouterName},t))}}),o.a.createElement(b.a,{path:"/about",render:function(t){return o.a.createElement(R,Object.assign({getRouterName:e.getRouterName},t))}}),o.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(j,Object.assign({getRouterName:e.getRouterName},t))}})))))}}]),t}(n.Component);s.initializeApp({apiKey:"AIzaSyANyS7cLKqNmARrV1RmeI9zZUnfyApLh-A",authDomain:"fajri-portfolio.firebaseapp.com",databaseURL:"https://fajri-portfolio.firebaseio.com",projectId:"fajri-portfolio",storageBucket:"fajri-portfolio.appspot.com",messagingSenderId:"718080219766"}),i.a.render(o.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fajrirahmadi/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fajrirahmadi/portfolio","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):c(t,e)})}}()},88:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.07205afa.chunk.js.map