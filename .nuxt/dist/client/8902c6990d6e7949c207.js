(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{456:function(t,e,r){var content=r(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("3c9595eb",content,!0,{sourceMap:!1})},593:function(t,e,r){"use strict";var n=r(456);r.n(n).a},594:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"form[data-v-3cc835ca]{width:600px}",""])},614:function(t,e,r){"use strict";r.r(e);r(29);var n=r(3),o={middleware:["admin-auth"],layout:"admin",name:"create",head:{title:"Создать новый пост | ".concat("SSR Blog")},data:function(){return{loading:!1,previewDialog:!1,image:null,controls:{title:"",text:""},rules:{title:[{required:!0,message:"Название поста не может быть пустым",trigger:"blur"}],text:[{required:!0,message:"Текст не должен быть пустым",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.$refs.form.validate(function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||!t.image){e.next=18;break}return t.loading=!0,e.prev=2,n={title:t.controls.title,text:t.controls.text,image:t.image},e.next=6,t.$store.dispatch("post/create",n);case 6:t.$message.success("Пост успешно создан"),t.clearFormData(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t.$message.error("Ошибка при создании поста");case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:e.next=19;break;case 18:t.$message.warning("Форма не валидна");case 19:case"end":return e.stop()}},e,null,[[2,10,13,16]])}));return function(t){return e.apply(this,arguments)}}())},clearFormData:function(){this.controls.title="",this.controls.text="",this.controls.image=null,this.$refs.upload.clearFiles()},handleImageChange:function(t,e){this.image=e[0].raw}}},l=(r(593),r(7)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.controls,rules:t.rules},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("h1",{staticClass:"mb"},[t._v("Создать новый пост")]),t._v(" "),r("div",{staticClass:"mb2"},[r("el-form-item",{attrs:{label:"Введите название поста",prop:"text"}},[r("el-input",{model:{value:t.controls.title,callback:function(e){t.$set(t.controls,"title",e)},expression:"controls.title"}})],1)],1),t._v(" "),r("div",{staticClass:"mb2"},[r("el-form-item",{attrs:{label:"Текст в формате .md или .html",prop:"text"}},[r("el-input",{attrs:{type:"textarea",resize:"none",rows:30},model:{value:t.controls.text,callback:function(e){t.$set(t.controls,"text",e)},expression:"controls.text"}})],1)],1),t._v(" "),r("div",{staticClass:"mb2"},[r("el-button",{attrs:{type:"success",plain:""},on:{click:function(e){t.previewDialog=!0}}},[t._v("\n      Предпросмотр\n    ")]),t._v(" "),r("el-dialog",{attrs:{title:"Предпросмотр",visible:t.previewDialog},on:{"update:visible":function(e){t.previewDialog=e}}},[r("div",{key:t.controls.text},[r("vue-markdown",[t._v(t._s(t.controls.text))])],1)])],1),t._v(" "),r("el-upload",{ref:"upload",staticClass:"mb2",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleImageChange,"auto-upload":!1}},[r("i",{staticClass:"el-icon-upload"}),t._v(" "),r("div",{staticClass:"el-upload__text"},[t._v("Перетащите картинку "),r("em",[t._v("или нажмите")])]),t._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("Файлы с расширением jpg/png")])]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{"native-type":"submit",type:"primary",round:"",loading:t.loading}},[t._v("\n      Создать пост\n    ")])],1)],1)},[],!1,null,"3cc835ca",null);e.default=component.exports}}]);