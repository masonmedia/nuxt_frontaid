(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(e,t,o){"use strict";t.a={CONTENT:"frontaid.content"}},300:function(e){e.exports=JSON.parse('{"title":"FrontAid CMS with Nuxt Content","page_1":{"banner":{"title":"Welcome!","subtitle":"Home pages are home pages","cta":"Learn more"},"section_1":{"title":"Section One","cta":"Read more","text":"Turkey pork chop buffalo, prosciutto kielbasa bresaola jowl pig picanha pancetta brisket. Boudin chicken short loin t-bone, brisket cupim pork belly swine pancetta cow ham short ribs. Picanha pig landjaeger, chuck doner leberkas sausage drumstick ball tip jerky cow spare ribs hamburger meatloaf. Beef ribeye cow chicken, andouille kevin hamburger. Bresaola tri-tip venison kevin hamburger. Beef pork belly pork chop salami buffalo picanha spare ribs beef ribs drumstick. T-bone meatloaf salami, ball tip capicola buffalo jerky pig venison chuck ham hock chislic porchetta beef."},"section_2":{"title":"Section 2","text":"Beef pork belly pork chop salami buffalo picanha spare ribs beef ribs drumstick. T-bone meatloaf salami, ball tip capicola buffalo jerky pig venison chuck ham hock chislic porchetta beef. Turkey pork chop buffalo, prosciutto kielbasa bresaola jowl pig picanha pancetta brisket. Boudin chicken short loin t-bone, brisket cupim pork belly swine pancetta cow ham short ribs. Picanha pig landjaeger, chuck doner leberkas sausage drumstick ball tip jerky cow spare ribs hamburger meatloaf. Beef ribeye cow chicken, andouille kevin hamburger. Bresaola tri-tip venison kevin hamburger.","cta":"Read more"}},"pages":[{"title":"Foo Page","path":"/foo","content":"<p>Foo content...</p><h2>Heading</h2><p>Some other content...</p>"},{"title":"Bar Page","path":"/bar","content":"<p><strong>Bar</strong> content...</p>"},{"title":"Baz Page","path":"/baz","content":"<p><strong>Baz</strong> content...</p>"}],"blog":[],"page_2":{"banner":{"title":"About page","cta":"Read it"},"section_1":{"text":"Pork belly leberkas boudin andouille venison chislic brisket biltong jerky cow beef ribs kevin strip steak. Bresaola kielbasa spare ribs salami. Jowl sausage turkey corned beef biltong. Cow tongue pancetta capicola ground round. Sirloin tenderloin pork ground round tail drumstick pork chop rump swine burgdoggen pork loin. Meatloaf doner prosciutto cow short loin meatball ball tip pork short ribs turkey hamburger beef ribs. Cupim cow pork belly meatloaf ham hock burgdoggen sausage turducken swine capicola beef ribs pig short ribs jerky.        ","title":"Gimme a break"},"section_2":{"title":"Section 2","text":"Pork belly leberkas boudin andouille venison chislic brisket biltong jerky cow beef ribs kevin strip steak. Bresaola kielbasa spare ribs salami. Jowl sausage turkey corned beef biltong. Cow tongue pancetta capicola ground round. Sirloin tenderloin pork ground round tail drumstick pork chop rump swine burgdoggen pork loin. Meatloaf doner prosciutto cow short loin meatball ball tip pork short ribs turkey hamburger beef ribs. Cupim cow pork belly meatloaf ham hock burgdoggen sausage turducken swine capicola beef ribs pig short ribs jerky."}},"posts":[{"title":"Post 1","description":"A first blog post","category":"general","text":"<h1>Post 1!</h1><p>Lorem ipsum dolor sit amet. Et maiores earum dolores id enim debitis. Ut commodi fugit eum illum vitae vel alias asperiores cum quaerat facilis et beatae dicta ut consequuntur quas. In temporibus esse vel consectetur harum eos asperiores iste et commodi aperiam vel aspernatur molestias et architecto omnis.&nbsp;</p><p>Eum neque saepe ex corrupti deserunt vel tempora molestiae aut perferendis deserunt cum assumenda magni veniam doloremque sit numquam neque. Eos quisquam alias vel libero accusantium et sapiente animi.&nbsp;</p><p>Et natus eveniet eos autem dolorem et ipsa velit et quia error non sint porro qui placeat consectetur. Et maiores sapiente est voluptatum omnis id doloremque dolor.</p>","image":"https://images.pexels.com/photos/4932184/pexels-photo-4932184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}]}')},314:function(e,t,o){"use strict";o.r(t);var r=o(22),n=(o(60),o(88),o(298)),l=o(300),c={head:function(){},data:function(){return{data:l,id:this.$route.params.id,posts:[{id:"1",title:"Post 1",content:"Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim."},{id:"2",title:"Post 2",content:"Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim."},{id:"3",title:"Post 3",content:"Dolor dolore est incididunt fugiat ea ea proident sunt minim esse ut. Proident consectetur irure cillum cillum adipisicing amet nostrud laboris nisi exercitation sit. Aliquip fugiat esse veniam minim."}]}},computed:{post:function(){var e=this;return this.posts.find((function(t){return t.id===e.id}))}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$content,t.next=3,o(n.a.CONTENT).fetch();case 3:return r=t.sent,t.abrupt("return",{frontaidData:r});case 5:case"end":return t.stop()}}),t)})))()}},m=o(53),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"min-vh-100 bg-light",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"p-5",attrs:{lg:"12","align-self":"center"}},[o("h1",{domProps:{innerHTML:e._s(e.data.page_1.banner.title)}}),e._v(" "),o("p",{domProps:{innerHTML:e._s(e.data.page_1.banner.subtitle)}}),e._v(" "),o("button",{staticClass:"btn btn-outline-primary",domProps:{innerHTML:e._s(e.data.page_1.banner.cta)}})])],1),e._v(" "),o("b-row",{staticClass:"min-vh-100 bg-dark text-light",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"p-5",attrs:{lg:"8","align-self":"center"}},[o("h1",{domProps:{innerHTML:e._s(e.data.page_1.section_1.title)}}),e._v(" "),o("p",{staticClass:"my-4",domProps:{innerHTML:e._s(e.data.page_1.section_1.text)}})])],1),e._v(" "),o("b-row",{staticClass:"min-vh-100",attrs:{"align-v":"center"}},[o("b-col",{staticClass:"p-5",attrs:{lg:"8","align-self":"center"}},[o("h1",{domProps:{innerHTML:e._s(e.data.page_1.section_2.title)}}),e._v(" "),o("p",{staticClass:"my-4",domProps:{innerHTML:e._s(e.data.page_1.section_2.text)}})])],1),e._v(" "),o("b-row",{staticClass:"min-vh-100",attrs:{"align-v":"center"}},e._l(e.posts,(function(t,r){return o("b-col",{key:r,staticClass:"p-5",attrs:{lg:"8","align-self":"center"}},[o("router-link",{attrs:{to:"/blog/"+t.id}},[o("h5",{domProps:{innerHTML:e._s(t.id)}}),e._v(" "),o("h2",{domProps:{innerHTML:e._s(t.title)}})])],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);