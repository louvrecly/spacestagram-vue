(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,5,6],{289:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("76bd1ae8",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n.r(e);var o={name:"LikeButton",props:{liked:{type:Boolean,default:!1}},computed:{iconType:function(){return this.liked?"fas":"far"}},methods:{toggleLike:function(){this.$emit("toggleLike",this.liked)}}},r=(n(292),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"like-button icon-button",class:{liked:t.liked},on:{click:t.toggleLike}},[n("font-awesome-icon",{attrs:{icon:[t.iconType,"heart"]}})],1)}),[],!1,null,"9f6128bc",null);e.default=component.exports},291:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("a89267c6",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(289)},293:function(t,e,n){var o=n(45)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-9f6128bc]{font-size:13px;line-height:20px}.text-small[data-v-9f6128bc]{font-size:16px;line-height:24px}.text-normal[data-v-9f6128bc]{font-size:20px;line-height:32px}.text-large[data-v-9f6128bc]{font-size:30px;line-height:42px}.text-larger[data-v-9f6128bc]{font-size:50px;line-height:64px}.text-bold[data-v-9f6128bc]{font-weight:700}.text-italic[data-v-9f6128bc]{font-style:italic}.like-button.liked[data-v-9f6128bc]{color:#dc143c}",""]),t.exports=o},294:function(t,e,n){"use strict";n(291)},295:function(t,e,n){var o=n(45)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,'.text-smaller[data-v-3bc53679]{font-size:13px;line-height:20px}.text-small[data-v-3bc53679]{font-size:16px;line-height:24px}.text-normal[data-v-3bc53679]{font-size:20px;line-height:32px}.text-large[data-v-3bc53679]{font-size:30px;line-height:42px}.text-larger[data-v-3bc53679]{font-size:50px;line-height:64px}.text-bold[data-v-3bc53679]{font-weight:700}.text-italic[data-v-3bc53679]{font-style:italic}.post[data-v-3bc53679]{border-radius:8px;box-shadow:0 5px 10px rgba(0,0,0,.3);overflow:hidden;transition:transform .3s ease}.post[data-v-3bc53679]:hover{transform:scale(1.05)}.post .wrapper[data-v-3bc53679]{display:flex}.post .wrapper .media[data-v-3bc53679]{width:100%;border:none}.post .wrapper .media.div[data-v-3bc53679],.post .wrapper .media.iframe[data-v-3bc53679]{height:230px}@media only screen and (min-width:768px){.post .wrapper .media.div[data-v-3bc53679],.post .wrapper .media.iframe[data-v-3bc53679]{height:510px}}@media only screen and (min-width:1025px){.post .wrapper .media.div[data-v-3bc53679],.post .wrapper .media.iframe[data-v-3bc53679]{height:770px}}.post .wrapper .media.div[data-v-3bc53679]{background-color:#222;display:flex;justify-content:center;align-items:center}.post .wrapper .media.div[data-v-3bc53679]:before{content:"Invalid Media Type"}.post .container .header[data-v-3bc53679]{padding:20px 20px 10px;display:flex;justify-content:space-between;align-items:center}@media only screen and (min-width:768px){.post .container .header[data-v-3bc53679]{padding:20px 30px 10px}}.post .container .header .info[data-v-3bc53679]{margin:0 10px 0 0;flex:1}.post .container .header .info .title[data-v-3bc53679]{font-size:16px;line-height:24px}@media only screen and (min-width:768px){.post .container .header .info .title[data-v-3bc53679]{font-size:20px;line-height:32px}}.post .container .body[data-v-3bc53679],.post .container .header .info .date[data-v-3bc53679]{color:rgba(255,215,0,.6);font-size:13px;line-height:20px}.post .container .body[data-v-3bc53679]{padding:10px 20px 20px}@media only screen and (min-width:768px){.post .container .body[data-v-3bc53679]{font-size:16px;line-height:24px;padding:10px 30px 30px}}.post .container .body .explanation[data-v-3bc53679]{margin:0 0 20px;overflow:hidden;transition:all .3s ease}.post .container .body .explanation.collapsed[data-v-3bc53679]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;cursor:pointer}.post .container .body .copyright[data-v-3bc53679]{text-align:right}',""]),t.exports=o},296:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("7356051b",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);var o={name:"ImagePost",components:{LikeButton:n(290).default},props:{url:{type:String,required:!0},mediaType:{type:String,required:!0},title:{type:String,default:"Missing Title"},date:{type:String,default:"Date Unknown"},explanation:{type:String,default:"Missing Explanation"},copyright:{type:String,default:""}},data:function(){return{liked:!1,collapsed:!0}},methods:{mediaComponent:function(t){switch(t){case"image":return"img";case"video":return"iframe";default:return"div"}},mediaProps:function(t){switch(t){case"image":return{src:this.url,alt:this.title};case"video":return{src:this.url,title:this.title};default:return{}}},toggleLike:function(t){this.liked=!t},toggleCollapsed:function(){this.collapsed=!this.collapsed}}},r=(n(294),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"post"},[n("div",{staticClass:"wrapper"},[n(t.mediaComponent(t.mediaType),t._b({tag:"component",staticClass:"media",class:t.mediaComponent(t.mediaType)},"component",t.mediaProps(t.mediaType),!1))],1),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"info"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"date"},[t._v(t._s(t.date))])]),t._v(" "),n("like-button",{staticClass:"button",attrs:{liked:t.liked},on:{toggleLike:t.toggleLike}})],1),t._v(" "),n("div",{staticClass:"body"},[n("p",{staticClass:"explanation",class:{collapsed:t.collapsed},on:{click:t.toggleCollapsed}},[t._v(t._s(t.explanation))]),t._v(" "),t.copyright?n("p",{staticClass:"copyright text-italic"},[t._v("© "+t._s(t.copyright))]):t._e()])])])}),[],!1,null,"3bc53679",null);e.default=component.exports;installComponents(component,{LikeButton:n(290).default})},299:function(t,e,n){"use strict";n(296)},300:function(t,e,n){var o=n(45)(!1);o.push([t.i,".posts-list[data-v-ea028c72]{color:gold}.posts-list .post[data-v-ea028c72]:not(:last-of-type){margin:0 0 50px}@media only screen and (min-width:768px){.posts-list .post[data-v-ea028c72]:not(:last-of-type){margin:0 0 100px}}",""]),t.exports=o},303:function(t,e,n){"use strict";n.r(e);var o={name:"PostsList",components:{ImagePost:n(298).default},props:{posts:{type:Array,default:function(){return[]}}}},r=(n(299),n(19)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"posts-list"},t._l(t.posts,(function(t,e){return n("image-post",{key:e,staticClass:"post",attrs:{url:t.url,"media-type":t.media_type,title:t.title,date:t.date,explanation:t.explanation,copyright:t.copyright}})})),1)}),[],!1,null,"ea028c72",null);e.default=component.exports},439:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("ee197388",content,!0,{sourceMap:!1})},443:function(t,e,n){var map={"./af":304,"./af.js":304,"./ar":305,"./ar-dz":306,"./ar-dz.js":306,"./ar-kw":307,"./ar-kw.js":307,"./ar-ly":308,"./ar-ly.js":308,"./ar-ma":309,"./ar-ma.js":309,"./ar-sa":310,"./ar-sa.js":310,"./ar-tn":311,"./ar-tn.js":311,"./ar.js":305,"./az":312,"./az.js":312,"./be":313,"./be.js":313,"./bg":314,"./bg.js":314,"./bm":315,"./bm.js":315,"./bn":316,"./bn-bd":317,"./bn-bd.js":317,"./bn.js":316,"./bo":318,"./bo.js":318,"./br":319,"./br.js":319,"./bs":320,"./bs.js":320,"./ca":321,"./ca.js":321,"./cs":322,"./cs.js":322,"./cv":323,"./cv.js":323,"./cy":324,"./cy.js":324,"./da":325,"./da.js":325,"./de":326,"./de-at":327,"./de-at.js":327,"./de-ch":328,"./de-ch.js":328,"./de.js":326,"./dv":329,"./dv.js":329,"./el":330,"./el.js":330,"./en-au":331,"./en-au.js":331,"./en-ca":332,"./en-ca.js":332,"./en-gb":333,"./en-gb.js":333,"./en-ie":334,"./en-ie.js":334,"./en-il":335,"./en-il.js":335,"./en-in":336,"./en-in.js":336,"./en-nz":337,"./en-nz.js":337,"./en-sg":338,"./en-sg.js":338,"./eo":339,"./eo.js":339,"./es":340,"./es-do":341,"./es-do.js":341,"./es-mx":342,"./es-mx.js":342,"./es-us":343,"./es-us.js":343,"./es.js":340,"./et":344,"./et.js":344,"./eu":345,"./eu.js":345,"./fa":346,"./fa.js":346,"./fi":347,"./fi.js":347,"./fil":348,"./fil.js":348,"./fo":349,"./fo.js":349,"./fr":350,"./fr-ca":351,"./fr-ca.js":351,"./fr-ch":352,"./fr-ch.js":352,"./fr.js":350,"./fy":353,"./fy.js":353,"./ga":354,"./ga.js":354,"./gd":355,"./gd.js":355,"./gl":356,"./gl.js":356,"./gom-deva":357,"./gom-deva.js":357,"./gom-latn":358,"./gom-latn.js":358,"./gu":359,"./gu.js":359,"./he":360,"./he.js":360,"./hi":361,"./hi.js":361,"./hr":362,"./hr.js":362,"./hu":363,"./hu.js":363,"./hy-am":364,"./hy-am.js":364,"./id":365,"./id.js":365,"./is":366,"./is.js":366,"./it":367,"./it-ch":368,"./it-ch.js":368,"./it.js":367,"./ja":369,"./ja.js":369,"./jv":370,"./jv.js":370,"./ka":371,"./ka.js":371,"./kk":372,"./kk.js":372,"./km":373,"./km.js":373,"./kn":374,"./kn.js":374,"./ko":375,"./ko.js":375,"./ku":376,"./ku.js":376,"./ky":377,"./ky.js":377,"./lb":378,"./lb.js":378,"./lo":379,"./lo.js":379,"./lt":380,"./lt.js":380,"./lv":381,"./lv.js":381,"./me":382,"./me.js":382,"./mi":383,"./mi.js":383,"./mk":384,"./mk.js":384,"./ml":385,"./ml.js":385,"./mn":386,"./mn.js":386,"./mr":387,"./mr.js":387,"./ms":388,"./ms-my":389,"./ms-my.js":389,"./ms.js":388,"./mt":390,"./mt.js":390,"./my":391,"./my.js":391,"./nb":392,"./nb.js":392,"./ne":393,"./ne.js":393,"./nl":394,"./nl-be":395,"./nl-be.js":395,"./nl.js":394,"./nn":396,"./nn.js":396,"./oc-lnc":397,"./oc-lnc.js":397,"./pa-in":398,"./pa-in.js":398,"./pl":399,"./pl.js":399,"./pt":400,"./pt-br":401,"./pt-br.js":401,"./pt.js":400,"./ro":402,"./ro.js":402,"./ru":403,"./ru.js":403,"./sd":404,"./sd.js":404,"./se":405,"./se.js":405,"./si":406,"./si.js":406,"./sk":407,"./sk.js":407,"./sl":408,"./sl.js":408,"./sq":409,"./sq.js":409,"./sr":410,"./sr-cyrl":411,"./sr-cyrl.js":411,"./sr.js":410,"./ss":412,"./ss.js":412,"./sv":413,"./sv.js":413,"./sw":414,"./sw.js":414,"./ta":415,"./ta.js":415,"./te":416,"./te.js":416,"./tet":417,"./tet.js":417,"./tg":418,"./tg.js":418,"./th":419,"./th.js":419,"./tk":420,"./tk.js":420,"./tl-ph":421,"./tl-ph.js":421,"./tlh":422,"./tlh.js":422,"./tr":423,"./tr.js":423,"./tzl":424,"./tzl.js":424,"./tzm":425,"./tzm-latn":426,"./tzm-latn.js":426,"./tzm.js":425,"./ug-cn":427,"./ug-cn.js":427,"./uk":428,"./uk.js":428,"./ur":429,"./ur.js":429,"./uz":430,"./uz-latn":431,"./uz-latn.js":431,"./uz.js":430,"./vi":432,"./vi.js":432,"./x-pseudo":433,"./x-pseudo.js":433,"./yo":434,"./yo.js":434,"./zh-cn":435,"./zh-cn.js":435,"./zh-hk":436,"./zh-hk.js":436,"./zh-mo":437,"./zh-mo.js":437,"./zh-tw":438,"./zh-tw.js":438};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=443},444:function(t,e,n){"use strict";n(439)},445:function(t,e,n){var o=n(45)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kelly+Slab&family=Spartan:wght@400;700&display=swap);"]),o.push([t.i,".text-smaller[data-v-1b90e064]{font-size:13px;line-height:20px}.text-small[data-v-1b90e064]{font-size:16px;line-height:24px}.text-normal[data-v-1b90e064]{font-size:20px;line-height:32px}.text-large[data-v-1b90e064]{font-size:30px;line-height:42px}.text-larger[data-v-1b90e064]{font-size:50px;line-height:64px}.text-bold[data-v-1b90e064]{font-weight:700}.text-italic[data-v-1b90e064]{font-style:italic}.responsive-margins[data-v-1b90e064]{margin:0 30px}@media only screen and (min-width:768px){.responsive-margins[data-v-1b90e064]{margin:0 auto;width:640px}}@media only screen and (min-width:1025px){.responsive-margins[data-v-1b90e064]{width:960px}}.home[data-v-1b90e064]{min-height:100vh;background-image:linear-gradient(90deg,#151515,#1d1d1d 10%,#1d1d1d 90%,#151515)}.home .container[data-v-1b90e064]{padding:120px 0 100px}@media only screen and (min-width:768px){.home .container[data-v-1b90e064]{padding:160px 0}}.home .container .no-results[data-v-1b90e064]{min-height:500px;display:flex;flex-direction:column;justify-content:center;align-items:center}.home .container .no-results .message[data-v-1b90e064]{margin:0 0 30px;color:#daa520;font-size:16px;line-height:24px;text-align:center}@media only screen and (min-width:768px){.home .container .no-results .message[data-v-1b90e064]{font-size:20px;line-height:32px}}",""]),t.exports=o},448:function(t,e,n){"use strict";n.r(e);n(39),n(35),n(65),n(38),n(66);var o=n(34),r=n(8),l=(n(29),n(141),n(47),n(10),n(67),n(68),n(40),n(79)),c=n(303),d=n(288),f=n.n(d);function m(t){var e=f()(t).subtract(1,"days").format("YYYY-MM-DD");return{startDate:f()(e).subtract(14,"days").format("YYYY-MM-DD"),endDate:e}}function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"HomePage",components:{PostsList:c.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,o=t.route.query,r=o.start_date,l=(c=r)&&f()(c).isBetween("2021-01-01",void 0,"day","[]")?c:f()().subtract(14,"days").format("YYYY-MM-DD"),e.next=5,n.dispatch("loadPosts",l);case 5:case"end":return e.stop()}var c}),e)})))()},data:function(){return{searchableFields:["title","explanation","copyright"]}},computed:j(j({},Object(l.b)({posts:"getPosts",startDate:"getStartDate"})),{},{queryParams:function(){return this.$route.query},filteredPosts:function(){return this.queryParams.search?this.posts.filter(this.comparePost(this.queryParams.search)):this.posts}}),methods:{comparePost:function(t){var e=this;return function(n){return e.searchableFields.some((function(e){return n[e]&&n[e].toLowerCase().includes(t.toLowerCase())}))}},loadMorePosts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m(t.startDate),o=n.startDate,r=n.endDate,e.next=3,t.$store.dispatch("loadPosts",o,r);case 3:case"end":return e.stop()}}),e)})))()}}},v=(n(444),n(19)),component=Object(v.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"container responsive-margins"},[t.filteredPosts.length?n("posts-list",{attrs:{posts:t.filteredPosts}}):n("div",{staticClass:"no-results"},[n("p",{staticClass:"message"},[t._v("Oops... no posts seem to matched the filter criteria so far.")]),t._v(" "),n("button",{staticClass:"button text-button",on:{click:t.loadMorePosts}},[t._v("LOAD MORE POSTS")])])],1)])}),[],!1,null,"1b90e064",null);e.default=component.exports;installComponents(component,{PostsList:n(303).default})}}]);