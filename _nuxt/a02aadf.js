(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(e,r,t){var content=t(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(130).default)("2a7fc4ee",content,!0,{sourceMap:!1})},250:function(e){e.exports=JSON.parse('[{"title":"Work","image":"/images/icon-work.svg","color":"orange","timeframes":{"daily":{"current":5,"previous":7},"weekly":{"current":32,"previous":36},"monthly":{"current":103,"previous":128}}},{"title":"Play","image":"/images/icon-play.svg","color":"blue","timeframes":{"daily":{"current":1,"previous":2},"weekly":{"current":10,"previous":8},"monthly":{"current":23,"previous":29}}},{"title":"Study","image":"/images/icon-study.svg","color":"pink","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":4,"previous":7},"monthly":{"current":13,"previous":19}}},{"title":"Exercise","image":"/images/icon-exercise.svg","color":"green","timeframes":{"daily":{"current":1,"previous":1},"weekly":{"current":4,"previous":5},"monthly":{"current":11,"previous":18}}},{"title":"Social","image":"/images/icon-social.svg","color":"purple","timeframes":{"daily":{"current":1,"previous":3},"weekly":{"current":5,"previous":10},"monthly":{"current":21,"previous":23}}},{"title":"Self Care","image":"/images/icon-self-care.svg","color":"yellow","timeframes":{"daily":{"current":0,"previous":1},"weekly":{"current":2,"previous":2},"monthly":{"current":7,"previous":11}}}]')},252:function(e,r,t){"use strict";t(247)},253:function(e,r,t){var o=t(129)(!1);o.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap);"]),o.push([e.i,'.profile-card{font-family:var(--primary_font, "Rubik", sans-serif)}@media screen and (min-width: 800px){.profile-card{margin-right:20px;margin-top:70px}}.profile-card-upper{display:flex;justify-content:center;align-items:center;position:relative;height:132px;width:327px;background-color:#5847eb;border-radius:15px;z-index:1}@media screen and (min-width: 400px){.profile-card-upper{height:355px;width:255px}}.profile-card-upper__info{display:flex;justify-content:space-between;align-items:center;width:250px}@media screen and (min-width: 400px){.profile-card-upper__info{display:block;width:170px;margin-bottom:50px}}.profile-card-upper__label{font-size:12px;font-weight:200;color:#bdc1ff}.profile-card-upper__name{display:flex}@media screen and (min-width: 400px){.profile-card-upper__name{display:block}}.profile-card-upper__firstName{font-size:18px;color:#fff;margin:0}@media screen and (min-width: 400px){.profile-card-upper__firstName{font-size:30px}}.profile-card-upper__lastName{font-size:18px;color:#fff;margin:0;padding-left:10px}@media screen and (min-width: 400px){.profile-card-upper__lastName{font-size:30px;padding:0}}.profile-card-upper__image{border-radius:50%;border:solid #fff 3px}@media screen and (min-width: 400px){.profile-card-upper__image{margin-bottom:30px}}.profile-card-lower{position:relative;display:flex;justify-content:center;flex-direction:row;align-items:center;text-align:center;top:-20px;width:327px;height:70px;background-color:#1c1f4a;border-bottom-right-radius:15px;border-bottom-left-radius:15px}@media screen and (min-width: 400px){.profile-card-lower{height:185px;width:255px;flex-direction:column;text-align:left}}.profile-card-lower__info{display:flex;flex-direction:column;justify-content:space-evenly;height:40px;font-weight:200;position:relative;width:170px;color:#bdc1ff;font-size:15px}.profile-card-lower__button{cursor:pointer;margin-top:15px}@media screen and (min-width: 400px){.profile-card-lower__button{margin-top:0}}.button--active{color:#fff}',""]),e.exports=o},256:function(e,r,t){"use strict";t.r(r);t(42);var o=t(258),l=t.n(o),n=t(250),c={name:"profile-card",data:function(){return{profileData:n,userImage:null,firstname:null,lastName:null,activeState:null,activeButton:[{label:"Daily",active:!1,value:1},{label:"Weekly",active:!1,value:2},{label:"Monthly",active:!1,value:3}]}},created:function(){this.getRandomUser()},methods:{getRandomUser:function(){var e=this;l.a.get("https://randomuser.me/api/").then((function(r){console.log("User Found",r),e.userImage=r.data.results[0].picture.medium,e.firstName=r.data.results[0].name.first,e.lastName=r.data.results[0].name.last})).catch(console.log("No User Found"))},showActiveState:function(e,label){this.activeState=e,this.$emit("timeframe",label)}}},d=(t(252),t(43)),component=Object(d.a)(c,(function(){var e=this,r=e._self._c;return e.userImage&&e.profileData?r("section",{staticClass:"profile-card"},[r("div",{staticClass:"profile-card-upper"},[r("div",{staticClass:"profile-card-upper__info"},[e.userImage?r("img",{staticClass:"profile-card-upper__image",attrs:{src:e.userImage,alt:""}}):e._e(),e._v(" "),r("div",{staticClass:"profile-card-upper__text"},[r("p",{staticClass:"profile-card-upper__label"},[e._v("Report for")]),e._v(" "),e.firstName&&e.lastName?r("div",{staticClass:"profile-card-upper__name"},[r("p",{staticClass:"profile-card-upper__firstName"},[e._v(e._s(e.firstName))]),e._v(" "),r("p",{staticClass:"profile-card-upper__lastName"},[e._v(e._s(e.lastName))])]):e._e()])])]),e._v(" "),r("div",{staticClass:"profile-card-lower"},e._l(e.activeButton,(function(button,t){return r("div",{key:button.value,staticClass:"profile-card-lower__info"},[r("a",{staticClass:"profile-card-lower__button",class:{"button--active":e.activeState==t},on:{click:function(r){return e.showActiveState(t,button.label)}}},[e._v(e._s(button.label))])])})),0)]):e._e()}),[],!1,null,null,null);r.default=component.exports}}]);