(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/motivated.66df8206.svg"},function(e,t,a){e.exports=a.p+"static/media/dynamic.e729c695.svg"},function(e,t,a){e.exports=a.p+"static/media/confident.6c61df9b.svg"},function(e,t,a){e.exports=a.p+"static/media/close-envelope.89e02d41.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin-logo.a1baa9e9.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.c6f60b42.svg"},function(e,t,a){e.exports=a.p+"static/media/github-logo.944a4dd6.svg"},function(e){e.exports=[{name:"Eternal Hub",slug:"eternal-hub",desc:"A gaming hub website for Habbo and Minecraft players.",thumb:"https://reactimages.blob.core.windows.net/images/eternal.png",tags:["PHP","HTML/CSS","MySQL"]},{name:"Elit Studios",slug:"elit-studios",desc:"A website for the group of developers",thumb:"https://reactimages.blob.core.windows.net/images/elit.png",tags:["PHP","HTML/CSS","MySQL"]},{name:"Science Marketing Development Inc. Version 1",slug:"smdi1",desc:"Version 1 of Science Marketing and Development Inc.",thumb:"https://reactimages.blob.core.windows.net/images/smdi1.png",tags:["PHP","HTML/CSS","MySQL","PDO"]},{name:"Science Marketing Development Inc. Version 2",slug:"smdi2",desc:"Online shop of SMDI, distibutor of high quality industrial and household products.",thumb:"https://reactimages.blob.core.windows.net/images/smdi2.png",tags:["PHP","HTML/CSS","MySQL","PDO"]},{name:"onyxRay: Android Application",slug:"onyx",desc:"An android Mobile Application for detecting nail abnormalities using Microsoft Cognitive Services.",thumb:"https://reactimages.blob.core.windows.net/images/onyx.png",tags:["Java","AI","Cognitive Services"]}]},,,function(e,t,a){e.exports=a(31)},,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),i=a.n(c),s=a(7),r=a(8),l=a(18),m=a(9),d=a(2),u=a(19),h=a(3),_=a.n(h),f=a(1),v=a.n(f),g=a(10),p=a.n(g),E=a(11),w=a.n(E),b=a(12),N=a.n(b),T=a(13),y=a.n(T),k=a(14),S=a.n(k),C=a(15),F=a.n(C),O=a(16),M=a.n(O),I=a(17),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={height:0,sectionOne:!0,sectionTwo:!1,sectionThree:!1,sectionFour:!1,burger:!1,nav:!1,projects:[]},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.burgerClick=a.burgerClick.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){var t=document.documentElement.scrollTop;t>=e._sectionOne.offsetTop-140&&t<e._sectionOne.offsetTop-150+e._sectionOne.offsetHeight?e.setState({sectionOne:!0,sectionTwo:!1,sectionThree:!1,sectionFour:!1}):t>=e._sectionTwo.offsetTop-140&&t<e._sectionTwo.offsetTop-140+e._sectionTwo.offsetHeight?e.setState({sectionOne:!1,sectionTwo:!0,sectionThree:!1,sectionFour:!1}):t>=e._sectionThree.offsetTop-140&&t<e._sectionThree.offsetTop-140+e._sectionThree.offsetHeight?e.setState({sectionOne:!1,sectionTwo:!1,sectionThree:!0,sectionFour:!1}):t>=e._sectionFour.offsetTop-140&&t<e._sectionFour.offsetTop-140+e._sectionFour.offsetHeight&&e.setState({sectionOne:!1,sectionTwo:!1,sectionThree:!1,sectionFour:!0})}),window.addEventListener("resize",function(){window.innerWidth<=768?(e.setState({burger:!0}),e.setState({nav:!0})):(e.setState({burger:!1}),e.setState({nav:!1}))}),window.innerWidth<=768?(this.setState({burger:!0}),this.setState({nav:!0})):(this.setState({burger:!1}),this.setState({nav:!1}))}},{key:"handleClick",value:function(e,t){e.preventDefault(),"sectionOne"===t?window.scrollTo(0,this._sectionOne.offsetTop-140):"sectionTwo"===t?window.scrollTo(0,this._sectionTwo.offsetTop-140):"sectionThree"===t?window.scrollTo(0,this._sectionThree.offsetTop-140):"sectionFour"===t&&window.scrollTo(0,this._sectionFour.offsetTop-140)}},{key:"burgerClick",value:function(e){e.preventDefault(),this.state.nav?this.setState({nav:!1}):this.setState({nav:!0})}},{key:"render",value:function(){var e=this;return _()({ssrFadeout:!0}),o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"nav"},o.a.createElement("div",{className:"nav__logo"},o.a.createElement("div",{className:"nav__logo--first-character"},"S"),o.a.createElement("div",{className:"nav__logo--second-character"},"P")),o.a.createElement("ul",{className:"nav__list ".concat(this.state.nav?"hide":"show")},o.a.createElement("li",{className:"nav__list--item ".concat(this.state.sectionOne?"active":"none"),onClick:function(t){return e.handleClick(t,"sectionOne")}},"Home"),o.a.createElement("li",{className:"nav__list--item ".concat(this.state.sectionTwo?"active":"none"),onClick:function(t){return e.handleClick(t,"sectionTwo")}},"About"),o.a.createElement("li",{className:"nav__list--item ".concat(this.state.sectionThree?"active":"none"),onClick:function(t){return e.handleClick(t,"sectionThree")}},"Projects"),o.a.createElement("li",{className:"nav__list--item ".concat(this.state.sectionFour?"active":"none"),onClick:function(t){return e.handleClick(t,"sectionFour")}},"Contact Me"),o.a.createElement("a",{href:"https://reactimages.blob.core.windows.net/images/resume.pdf",target:"_resume"},o.a.createElement("li",{className:"nav__list--item"},"Resume"))),o.a.createElement("div",{className:"nav__burger ".concat(this.state.burger?"show":"hide"),onClick:this.burgerClick},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("div",{className:"main"},o.a.createElement("header",{className:"header",ref:function(t){return e._sectionOne=t},id:"sectionOne"},o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"header__title"},"I am Sholomon Pinoliad",o.a.createElement("div",{className:"header__title--subtitle"},"Motivated. Dynamic. Confident"))),o.a.createElement("div",{className:"header__cover",style:{backgroundImage:"url('https://reactimages.blob.core.windows.net/images/cover-photo.png')"}})),o.a.createElement("section",{ref:function(t){return e._sectionTwo=t},id:"sectionTwo"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__half"},o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__half--svg",style:{backgroundImage:"url(".concat(p.a,")")}}))),o.a.createElement("div",{className:"container__half"},o.a.createElement("div",{className:"container__half--content"},o.a.createElement(v.a,{right:!0,ssrFadeout:!0},o.a.createElement("h1",null,"Motivated"),o.a.createElement("p",null,"Motivated in making things possible by turning visions into reality."))))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__half"},o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__half--svg",style:{backgroundImage:"url(".concat(w.a,")")}}))),o.a.createElement("div",{className:"container__half"},o.a.createElement("div",{className:"container__half--content"},o.a.createElement(v.a,{right:!0,ssrFadeout:!0},o.a.createElement("h1",null,"Dynamic"),o.a.createElement("p",null,"I am a positive and energetic person who continuously learn something new."))))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__half"},o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__half--svg",style:{backgroundImage:"url(".concat(N.a,")")}}))),o.a.createElement("div",{className:"container__half"},o.a.createElement("div",{className:"container__half--content"},o.a.createElement(v.a,{right:!0,ssrFadeout:!0},o.a.createElement("h1",null,"Confident"),o.a.createElement("p",null,"Confident enough with my skills to empower every person."))))),o.a.createElement("div",{className:"container__information"},o.a.createElement("div",{className:"curve-top"}),o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__information--text"},"A graduating student of Lyceum of the Philippines University - Manila taking Bachelor of Science in Information Technology, and a student leader currently leading the university-wide organization - LPU Manila Microsoft Student Community - as Execute Vice President.")))),o.a.createElement("section",{ref:function(t){return e._sectionThree=t},id:"sectionThree"},o.a.createElement("div",{className:"container"},I.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement(v.a,{right:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__project"},o.a.createElement("div",{className:"container__project--content"},o.a.createElement("div",{className:"container__project--content__image",style:{backgroundImage:"url(".concat(e.thumb,")")}}),o.a.createElement("div",{className:"container__project--content__title"},e.name),o.a.createElement("div",{className:"container__project--content__description"},e.desc),o.a.createElement("div",{className:"container__project--content__tags"},e.tags.map(function(e){return o.a.createElement("span",null,e)}))))))}))),o.a.createElement("section",{ref:function(t){return e._sectionFour=t},id:"sectionFour"},o.a.createElement("div",{className:"container"},o.a.createElement(v.a,{bottom:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__half"},o.a.createElement("h1",null,"Do you have more questions?"),o.a.createElement("p",null,"You can reach me out through my social media accounts or personal email."))),o.a.createElement(v.a,{right:!0,ssrFadeout:!0},o.a.createElement("div",{className:"container__half"},o.a.createElement("div",{className:"container__half--contact"},o.a.createElement("div",{className:"container__half--contact__icon",style:{backgroundImage:"url(".concat(y.a,")")}}),o.a.createElement("div",{className:"container__half--contact__text"},"sholomon.pinoliad@gmail.com")),o.a.createElement("div",{className:"container__half--contact"},o.a.createElement("a",{href:"https://www.linkedin.com/in/sholomon"},o.a.createElement("div",{className:"container__half--contact__icon",style:{backgroundImage:"url(".concat(S.a,")")}}),o.a.createElement("div",{className:"container__half--contact__text"},"/sholomon"))),o.a.createElement("div",{className:"container__half--contact"},o.a.createElement("a",{href:"https://www.instagram.com/onemonstar"},o.a.createElement("div",{className:"container__half--contact__icon",style:{backgroundImage:"url(".concat(F.a,")")}}),o.a.createElement("div",{className:"container__half--contact__text"},"@onemonstar"))),o.a.createElement("div",{className:"container__half--contact"},o.a.createElement("a",{href:"https://www.github.com/monpinoliad"},o.a.createElement("div",{className:"container__half--contact__icon",style:{backgroundImage:"url(".concat(M.a,")")}}),o.a.createElement("div",{className:"container__half--contact__text"},"/monpinoliad"))))))),o.a.createElement("footer",{className:"footer"},"\xa9 Copyright 2019. All Rights Reserved. Icons from ",o.a.createElement("a",{href:"https://www.flaticon.com",target:"_flaticon"},"Flaticon"),".")))}}]),t}(n.Component);a(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.ae8c6496.chunk.js.map