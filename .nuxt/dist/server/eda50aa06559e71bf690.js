exports.ids=[8],exports.modules={111:function(t,e,o){var content=o(127);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("1f4abec6",content,!0,t)}},126:function(t,e,o){"use strict";o.r(e);var n=o(111),r=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e.default=r.a},127:function(t,e,o){(t.exports=o(2)(!1)).push([t.i,".post[data-v-65f66040]{margin-bottom:1.5rem}.post-header[data-v-65f66040]{display:flex;justify-content:space-between;align-items:center}.post-image[data-v-65f66040]{width:100%;height:auto}.post-footer[data-v-65f66040]{display:flex;justify-content:space-between;align-items:center;padding:1rem}",""])},130:function(t,e,o){"use strict";o.r(e);var n={name:"Post",props:{post:{required:!0,type:Object}},methods:{openPost(){const t=this.post._id;this.$router.push(`/post/${t}`)}}},r=o(1);var c={head:{title:"Главная страница | SSR Blog"},asyncData:async({store:t})=>({posts:await t.dispatch("post/fetchPosts")}),components:{AppPost:Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"post",attrs:{shadow:"hover","body-style":{padding:0}}},[o("header",{staticClass:"post-header",attrs:{slot:"header"},slot:"header"},[o("h3",[t._v(t._s(t.post.title))]),t._v(" "),o("small",[o("i",{staticClass:"el-icon-time"}),t._v("\n      "+t._s(t._f("date")(t.post.date,"date"))+"\n    ")])]),t._v(" "),o("div",{staticClass:"post-body"},[o("img",{staticClass:"post-image",attrs:{src:t.post.imageUrl,alt:t.post.title}})]),t._v(" "),o("footer",{staticClass:"post-footer"},[o("el-button",{attrs:{round:""},on:{click:function(e){return t.openPost(t.post._id)}}},[t._v("Открыть")]),t._v(" "),o("span",[o("i",{staticClass:"el-icon-message"}),t._v("\n      "+t._s(t.post.comments.length)+"\n    ")])],1)])},[],!1,function(t){var e=o(126);e.__inject__&&e.__inject__(t)},"65f66040","336106b6").exports}};var l=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",{attrs:{type:"flex",justify:"center"}},[e("el-col",{attrs:{xs:24,sm:18,md:12,lg:10}},this._l(this.posts,function(t){return e("app-post",{key:t._id,attrs:{post:t}})}),1)],1)},[],!1,function(t){},null,"6fbbd9be");e.default=l.exports}};
//# sourceMappingURL=eda50aa06559e71bf690.js.map