(self.webpackChunkgatsby_ilymun_website=self.webpackChunkgatsby_ilymun_website||[]).push([[189],{84944:function(e,t,a){"use strict";var n=a(82109),l=a(6790),r=a(47908),s=a(26244),c=a(19303),o=a(65417);n({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=r(this),a=s(t),n=o(t,0);return n.length=l(n,t,t,a,0,void 0===e?1:c(e)),n}})},33792:function(e,t,a){a(51223)("flat")},39238:function(e,t,a){"use strict";a.d(t,{$:function(){return r}});var n=a(51721),l=a(67294),r=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement("footer",{id:"footer-section"},l.createElement("div",{class:"footer-section"},l.createElement("div",{class:"container"},l.createElement("div",{class:"row"},l.createElement("div",{class:"footer-social-btn col-md-4 col-sm-3"},l.createElement("a",{target:"_blank",href:"https://www.facebook.com/internationallyonmun",class:"facebook-btn"},l.createElement("i",{class:"fa fa-facebook"})),l.createElement("a",{target:"_blank",href:"https://www.instagram.com/_ilymun/",class:"instagram-btn"},l.createElement("i",{class:"fa fa-instagram"})),l.createElement("a",{target:"_blank",href:"https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA",class:"youtube-btn"},l.createElement("i",{class:"fa fa-youtube-play"}))),l.createElement("div",{class:"copyrights col-md-8 col-sm-9"},l.createElement("span",{style:{float:"right"}},"© ",l.createElement("a",{href:"/"},"ILYMUN")," 2017, All Rights Reserved, Developed by ",l.createElement("a",{href:"http://pablogamito.com"},"Pablo Gamito")))))))},t}(l.Component)},88488:function(e,t,a){"use strict";a.d(t,{w:function(){return c}});var n=a(51721),l=a(67294),r=a(48747),s=a.n(r),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).resize=function(){return a.forceUpdate()},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;window.addEventListener("resize",this.resize),window.addEventListener("scroll",this.handleScroll),s()(document).on("scroll",(function(){return e.onScroll}))},r.componentWillUnmount=function(){window.removeEventListener("resize",this.resize),window.removeEventListener("scroll",this.handleScroll)},r.handleScroll=function(){this.props.landing&&(s()(document).scrollTop()>=s()(".upper-navbar").height()?(s()(".navbar").removeClass("navbar-static-top"),s()(".navbar").addClass("navbar-fixed-top"),s()(".navbar").addClass("navbar-sm"),s()(window).width()):(s()(".navbar").removeClass("navbar-fixed-top"),s()(".navbar").addClass("navbar-static-top"),s()(".navbar").removeClass("navbar-sm")))},r.render=function(){var e=l.createElement("div",{class:"container upper-navbar"},l.createElement("div",{class:"row"},l.createElement("div",{class:"col-md-3"},l.createElement("p",null,l.createElement("i",{class:"fa fa-envelope"})," ",l.createElement("a",{href:"mailto:support@ilymun.org"},"support@ilymun.org"))),l.createElement("div",{class:"col-md-2"},l.createElement("p",null,l.createElement("i",{class:"fa fa-phone"})," ",l.createElement("a",{href:"tel:+33478696006"},"+33 4 78 69 60 06"))),l.createElement("div",{class:"col-md-3"},l.createElement("p",null,l.createElement("a",{class:"fa fa-facebook link",href:"https://www.facebook.com/internationallyonmun",target:"_blank"}),l.createElement("a",{class:"fa fa-instagram link",href:"https://www.instagram.com/_ilymun/",target:"_blank"}),l.createElement("a",{class:"fa fa-medium link",href:"https://medium.com/@ilymun",target:"_blank"}),l.createElement("a",{class:"fa fa-youtube-play link",href:"https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA",target:"_blank"}))),l.createElement("div",{class:"col-md-4"},l.createElement("p",null,l.createElement("i",{class:"fa fa-calendar"})," Next Event in:"," ",l.createElement("span",{id:"top-time"}))))),t=l.createElement("nav",{className:"navbar "+(this.props.landing?"navbar-static-top":"navbar-fixed-top navbar-sm")},l.createElement("div",{class:"container"},l.createElement("div",{class:"navbar-header"},l.createElement("span",{class:"tablet-navbar"}),l.createElement("button",{class:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar"},l.createElement("i",{class:"fa fa-bars"})),l.createElement("a",{href:"/"},l.createElement("a",{class:"navbar-brand",href:"/"},l.createElement("img",{src:a(89241),alt:""})))),l.createElement("div",{id:"navbar",class:"navbar-collapse collapse"},l.createElement("ul",{class:"nav navbar-nav"},l.createElement("li",{class:"dropdown"},l.createElement("a",{class:"dropdown-toggle",role:"button","aria-haspopup":"true","aria-expanded":"false"},"About ",l.createElement("span",{class:"caret"})),l.createElement("ul",{class:"dropdown-menu"},l.createElement("li",null,l.createElement("a",{href:"/about"},"The Conference")),l.createElement("li",null,l.createElement("a",{href:"/committees/"},"Committees & Issues Debated")),l.createElement("li",null,l.createElement("a",{href:"/action-assembly/"},"Action Assembly")),l.createElement("li",null,l.createElement("a",{href:"/international-court-of-justice/"},"International Court of Justice")))),l.createElement("li",{class:"dropdown"},l.createElement("a",{class:"dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Mini Ilymun",l.createElement("span",{class:"caret"})),l.createElement("ul",{class:"dropdown-menu"},l.createElement("li",null,l.createElement("a",{href:"/mini-ilymun-conference/"},"The Conference")),l.createElement("li",null,l.createElement("a",{href:"/mini-ilymun-committees-and-issues/"},"The Committees and Issues")),l.createElement("li",null,l.createElement("a",{href:"/mini-ilymun-challenge/"},"The UNHCR Challenge")))),l.createElement("li",{class:"dropdown"},l.createElement("a",{class:"dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Get Ready ",l.createElement("span",{class:"caret"})),l.createElement("ul",{class:"dropdown-menu"},l.createElement("li",null,l.createElement("a",{href:"/debate-help/"},"How to Act & Debate")),l.createElement("li",null,l.createElement("a",{href:"/dress/"},"How to Dress")))),l.createElement("li",{class:"dropdown"},l.createElement("a",{class:"dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Press",l.createElement("span",{class:"caret"})),l.createElement("ul",{class:"dropdown-menu"},l.createElement("li",null,l.createElement("a",{href:"/articles/"},"Articles")),l.createElement("li",null,l.createElement("a",{href:"/gallery/"},"Gallery")),l.createElement("li",null,l.createElement("a",{href:"https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"},"Videos")))),l.createElement("li",null,l.createElement("a",{href:"/poster-gallery/"},"Poster Gallery")),l.createElement("li",null,l.createElement("a",{href:"/other-muns/"},"Other MUNs"))),l.createElement("ul",{class:"nav navbar-nav navbar-right"},l.createElement("li",null,l.createElement("a",{href:"/fund"},"Help Fund"))))));return l.createElement("div",null,this.props.landing?e:"",t)},t}(l.Component);c.defaultProps={landing:!1}},99929:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(67294),l=a(88488),r=a(39238);function s(e){var t=e.data.markdownRemark,a=t.frontmatter,s=t.html;return n.createElement("div",{class:"plainPage"},n.createElement(l.w,null),n.createElement("div",{id:"content",class:"container",style:{marginBottom:"100px"}},a.title?n.createElement("h1",{class:"title"},a.title):"",n.createElement("div",{dangerouslySetInnerHTML:{__html:s}})),n.createElement(r.$,null))}},89241:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAADSAQAAAAB7wabDAAAAAnRSTlMAAHaTzTgAAAMeSURBVHgB7dYBhu9IEAbwakED+gh9lD5a+gZ7pb7BXiFHCAtB9LeK4p/pqpqk2dk3SHmPma9/+ZSMROhnZwX/p4CTf0vYaEUlInB2cJbRCCDOuskbURh58/lOtIx8dzmrNPLT5yebgcPnnagoXl2OSlB883kLmh8+3xbNu8+PqDmqy89s8ObyXgy+uxww+DnHwbw85w2diB7zbY4fc7w/550Th68GLz4vQF8Hnn2egXPk0ecR2EcefL4A28jJ5wFoiheX8z/Fk89L1zz6PJ+aB5/HXXFWHl82g2eXh2rwBOfxICKDL3OcNM/f8XWO5yvvtzzO8UXx8h2nDydgjgt6zOscbxw85dxLYYLvM7zwWZzgJ1F6zDP4mhm+BTzmCTw/xeMcX+Z4mOM0ydc5XuZ4muNxjgfGfz/iAoC/nvMM9PScL8AxwamgTnCel/8f3PzsfPnL25Wf/y3Pj3mf4eTzMsurx/nowrvPobig1eKCnvOqOW44QIoDpHlBG7hUBJ+HCb7xUf/KG9GCbvCMnY+EXyqiz+PAOUs4DZ5wyNGHZ86yzTnJI+/8w2HwCPmYvPDEGTzeCNgHvkXONF+AIw48gsfkQT44rnyRzOdN+JB532LV4NXiq+ZSQeR+iwm8VnSTZzkS/qk4TZ7kSPin4jB5lFss/JppLjd5E3jNmslJjj5csqq4AIAGXiBQ8wycI0/A4fAI7CNfgOZwAurIqXTyeNyJGMqLlGQ8ruflv4vfzstf/jv575133nln2aZ4RNVhaR7P6DoEAJuvwK4WBM9u6ADo+gQ4/dHiBV59sjhg10uRXtCrh8EjZPCIZ7j168glk6n3uwd85rB4Vat79VlnGX590rzArw86Eudsz1wV+NsXoLlc168G34nKP7aHzYkW5T2+0Rd/Xk4d7vhF8UsQlY9Spq63fdL8eq/z4LPDlZe54VTuuf9XVs/YMl6fbtu7/TDK1JGjeY+X6hLuPzDHHQ/O6g6nfPM4Dpy81eVGbPrN6796hFs3Ux9li0f3PZjMV3VxVqfF5EGvrh8nvf6mclV+3ajqmk4zs1b68/MvEfThohIkzsYAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=component---src-templates-plain-page-jsx-9bba1468fb6df805de87.js.map