(function(e){function t(t){for(var r,o,c=t[0],u=t[1],i=t[2],d=0,b=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06cf3":function(e,t,n){},"13e1":function(e,t,n){"use strict";n("f9e0")},"26f4":function(e,t,n){"use strict";n("06cf3")},3045:function(e,t,n){"use strict";n("31c1")},"31c1":function(e,t,n){},"3ca8":function(e,t,n){"use strict";n("5fe1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"},s=Object(r["g"])("div",{class:"navigation__logo"}," Tweet-t-t ",-1);function o(e,t,n,o,c,u){var i=Object(r["x"])("router-link"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["g"])("nav",null,[Object(r["g"])(i,{to:"/"},{default:Object(r["F"])((function(){return[s]})),_:1}),o.user?(Object(r["q"])(),Object(r["d"])(i,{key:0,class:"navigation__user",to:{name:"UserProfile",params:{userId:o.user._id}}},{default:Object(r["F"])((function(){return[Object(r["f"])(Object(r["z"])(o.user.UserName),1)]})),_:1},8,["to"])):Object(r["e"])("",!0)]),Object(r["g"])(l,{onOpenChat:o.openChat},null,8,["onOpenChat"])])}var c=n("5502"),u={name:"App",setup:function(){var e=Object(c["b"])(),t=Object(r["b"])((function(){return e.state.User.user}));function n(e){var t=document.getElementById("app"),n=document.createElement("div");t.appendChild(n),e.mount(n)}return{user:t,openChat:n}}};n("9d18");u.render=o;var i=u,l=(n("45fc"),n("96cf"),n("1da1")),d=n("6c02"),b={namespaced:!0,state:{user:null},mutations:{SET_USER:function(e,t){e.user=t}},actions:{setUser:function(e,t){var n=e.commit;n("SET_USER",t)}}},f=Object(c["a"])({state:{},mutations:{},actions:{},modules:{User:b}}),p=n("bc3a"),m=n.n(p);m.a.defaults.withCredentials=!0;var g={auth:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:5000/users/auth");case 2:return t=e.sent,console.log(t.data.loggedIn),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))()},getUser:function(){return Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:5000/users/getUser");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getUserId:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("this is the sent data",e),t.next=3,m.a.get("http://localhost:5000/users/getUserId",{params:e});case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},logIn:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,m.a.get("http://localhost:5000/users/login",{params:e});case 3:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})))()},signUp:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/users/signup",null,{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},Tweet:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/tweet/tweet",null,{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getTweets:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:5000/tweet/getTweets",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},follow:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/follow/follow",null,{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getFollowing:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:5000/follow/getFollowings",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getFollower:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:5000/follow/getFollowers",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},unFollow:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("http://localhost:5000/follow/unfollow",{params:e});case 2:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},makeChatRoom:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/chat/Chat",null,{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getChatRoom:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:5000/chat/getChat",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getMessages:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:5000/chat/getMessages",{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},sendMessage:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:5000/chat/sendMessage",null,{params:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},updateCover:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.a.put("http://localhost:5000/users/update",{data:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},O=Object(r["I"])("data-v-6d76ef5c");Object(r["t"])("data-v-6d76ef5c");var j={class:"home"},w=Object(r["g"])("h1",null,"Home",-1),v={class:"users-list"},h={key:0};Object(r["r"])();var y=O((function(e,t,n,a,s,o){var c=Object(r["x"])("TweetItem");return Object(r["q"])(),Object(r["d"])("div",j,[w,Object(r["g"])("div",v,[0===a.state.tweets.length?(Object(r["q"])(),Object(r["d"])("strong",h,"follow someone to see their tweet-t-ts")):Object(r["e"])("",!0),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.state.tweets,(function(e){return Object(r["q"])(),Object(r["d"])(c,{class:"user-profile__tweet",key:e._id,username:e.UserName,tweet:e.Body,userId:e.UserId},null,8,["username","tweet","userId"])})),128))])])})),U=n("b85c"),I=Object(r["I"])("data-v-0efbc402");Object(r["t"])("data-v-0efbc402");var _={class:"tweet-item"},x={class:"user-profile__tweet"},k=Object(r["g"])("br",null,null,-1),T=Object(r["g"])("br",null,null,-1),C={class:"tweet-item__content"};Object(r["r"])();var R=I((function(e,t,n,a,s,o){var c=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["d"])("div",_,[Object(r["g"])("div",x,[Object(r["g"])(c,{class:"tweet-item__user",to:{name:"UserProfile",params:{userId:n.userId}}},{default:I((function(){return[Object(r["f"])(" @"+Object(r["z"])(n.username),1)]})),_:1},8,["to"]),k,T,Object(r["g"])("div",C,Object(r["z"])(n.tweet),1)])])})),q={name:"TweetItem",props:{username:{type:String,required:!0},tweet:{type:String,required:!0},userId:{type:String,requires:!0}}};n("13e1");q.render=R,q.__scopeId="data-v-0efbc402";var N=q,S={name:"Home",components:{TweetItem:N},setup:function(){var e=Object(c["b"])(),t=Object(r["b"])((function(){return e.state.User.user._id})),n=Object(r["u"])({following:[],tweets:[]});return Object(r["o"])((function(){g.getFollowing({_id:t.value}).then((function(e){var t,r=Object(U["a"])(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.following.unshift(a.Following)}}catch(u){r.e(u)}finally{r.f()}var s,o=Object(U["a"])(n.following);try{for(o.s();!(s=o.n()).done;){var c=s.value;console.log("temp",c),g.getTweets({UserIdT:c}).then((function(e){var t,r=Object(U["a"])(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.tweets.unshift({_id:a._id,UserId:a.UserId,Body:a.Body,UserName:a.UserName})}}catch(u){r.e(u)}finally{r.f()}}))}}catch(u){o.e(u)}finally{o.f()}}))})),{state:n}}};n("3ca8");S.render=y,S.__scopeId="data-v-6d76ef5c";var F=S,P=n("f65d"),L=n.n(P),M=Object(r["I"])("data-v-26fb9e5e");Object(r["t"])("data-v-26fb9e5e");var E={class:"user-profile"},D={class:"user-profile__userpanel"},B=Object(r["g"])("img",{id:"image",src:L.a},null,-1),z={class:"user-profile__username"},A={key:0,class:"user-profile__admin"},G={class:"user-profile__follower-count"},H={class:"user-profile__tweet-wrapper"},V={key:1};Object(r["r"])();var J=M((function(e,t,n,a,s,o){var c=Object(r["x"])("CreatTweetPanel"),u=Object(r["x"])("TweetItem");return Object(r["q"])(),Object(r["d"])("div",E,[Object(r["g"])("div",D,[B,Object(r["g"])("h1",z,[Object(r["f"])("@"+Object(r["z"])(a.user.UserLoaded.UserName)+" ",1),a.user.UserLoaded.IsAdmin?(Object(r["q"])(),Object(r["d"])("div",A," Admin ")):Object(r["e"])("",!0)]),Object(r["g"])("div",G,[Object(r["g"])("p",null,"Following: "+Object(r["z"])(a.state.following.length)+" Followers: "+Object(r["z"])(a.state.followers.length),1),a.userProfile.test||a.state.followState?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return a.followF&&a.followF.apply(a,arguments)})},"Follow")),!a.userProfile.test&&a.state.followState?(Object(r["q"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return a.unfollowF&&a.unfollowF.apply(a,arguments)})},"Unfollow")):Object(r["e"])("",!0)]),a.userProfile.test?(Object(r["q"])(),Object(r["d"])("input",{key:0,class:"change_cover",type:"file",onChange:t[3]||(t[3]=function(){return a.updateCover&&a.updateCover.apply(a,arguments)})},null,32)):Object(r["e"])("",!0),a.userProfile.test?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("button",{key:1,onClick:t[4]||(t[4]=function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)})},"Send Message"))]),Object(r["g"])("div",H,[a.userProfile.test?(Object(r["q"])(),Object(r["d"])(c,{key:0,onAddTweet:a.addTweet},null,8,["onAddTweet"])):Object(r["e"])("",!0),0===a.state.tweets.length?(Object(r["q"])(),Object(r["d"])("strong",V,"no tweets posted yet")):Object(r["e"])("",!0),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.state.tweets,(function(e){return Object(r["q"])(),Object(r["d"])(u,{class:"user-profile__tweet",key:e._id,username:a.user.UserLoaded.UserName,tweet:e.Body,userId:e.UserId},null,8,["username","tweet","userId"])})),128))])])})),W=(n("c975"),n("a434"),n("d3b7"),n("25f0"),n("b0c0"),Object(r["I"])("data-v-15631e92"));Object(r["t"])("data-v-15631e92");var K={for:"newtweet"},Q=Object(r["g"])("strong",null,"New Tweet",-1),X={class:"user-profile__createtweet-type"},Y=Object(r["g"])("label",{for:"newTweetType"},[Object(r["g"])("strong",null,"Type :")],-1),Z=Object(r["g"])("button",null," tweet-t-t ",-1);Object(r["r"])();var $=W((function(e,t,n,a,s,o){return Object(r["q"])(),Object(r["d"])("form",{action:"",class:["user-profile__create-tweet",{exceeded:a.newTweetCharacterCount>180}],onSubmit:t[3]||(t[3]=Object(r["H"])((function(){return a.creatNewTweet&&a.creatNewTweet.apply(a,arguments)}),["prevent"]))},[Object(r["g"])("label",K,[Q,Object(r["f"])(" "+Object(r["z"])(a.newTweetCharacterCount)+"/180",1)]),Object(r["G"])(Object(r["g"])("textarea",{id:"newtweet",rows:"4","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.state.newTweetContent=e})},null,512),[[r["C"],a.state.newTweetContent]]),Object(r["g"])("div",X,[Y,Object(r["G"])(Object(r["g"])("select",{id:"newTweetType","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.state.selectedTweetType=e})},[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.state.TweetTypes,(function(e,t){return Object(r["q"])(),Object(r["d"])("option",{value:e.value,key:t},Object(r["z"])(e.name),9,["value"])})),128))],512),[[r["B"],a.state.selectedTweetType]])]),Z],34)})),ee={name:"CreateTweetPanel",setup:function(e,t){var n=Object(r["u"])({newTweetContent:"",selectedTweetType:"instant",TweetTypes:[{value:"draft",name:"Draft"},{value:"instant",name:"Instant"}]}),a=Object(r["b"])((function(){return n.newTweetContent.length}));function s(){n.newTweetContent&&"draft"!=n.selectedTweetType&&(t.emit("addTweet",n.newTweetContent),n.newTweetContent="")}return{state:n,newTweetCharacterCount:a,creatNewTweet:s}}};n("f964");ee.render=$,ee.__scopeId="data-v-15631e92";var te=ee,ne=Object(r["I"])("data-v-c3a1dfd8");Object(r["t"])("data-v-c3a1dfd8");var re={class:"chat-box"},ae={class:"chat-box__name-bar"},se={class:"chat-box__body"},oe={key:0,class:"received"},ce={key:1,class:"sent"},ue={class:"chat-box__send-message"},ie=Object(r["g"])("input",{id:"messageToSend",type:"text",class:"chat-box__message",placeholder:"write a message"},null,-1);Object(r["r"])();var le=ne((function(e,t,n,a,s,o){return Object(r["q"])(),Object(r["d"])("div",re,[Object(r["g"])("div",ae,[Object(r["g"])("p",null,Object(r["z"])(n.chatName),1)]),Object(r["g"])("ul",se,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.discussion.messages,(function(e,t){return Object(r["q"])(),Object(r["d"])("li",{key:t},["received"===e.Mtype?(Object(r["q"])(),Object(r["d"])("p",oe,Object(r["z"])(e.message),1)):Object(r["e"])("",!0),"sent"===e.Mtype?(Object(r["q"])(),Object(r["d"])("p",ce,Object(r["z"])(e.message),1)):Object(r["e"])("",!0)])})),128))]),Object(r["g"])("div",ue,[ie,Object(r["g"])("button",{class:"chat-box__send",onClick:t[1]||(t[1]=function(){return a.sendMessage&&a.sendMessage.apply(a,arguments)})},"Send")])])})),de=n("8e27"),be=n.n(de),fe={props:{chatName:{type:String,required:!0},ProfileName:{type:String,required:!0},chatId:{type:String,required:!0},senderId:{type:String,required:!0},receiverId:{type:String,required:!0}},setup:function(e){var t=Object(r["u"])({socket:"",messages:[]});function n(){var n=document.getElementById("messageToSend").value;g.sendMessage({roomId:e.chatId,body:n,userName:e.ProfileName}).then((function(n){t.socket.emit("message",{text:n.body,receiverId:e.receiverId,date:n.date,senderId:e.senderId,userName:e.ProfileName}),t.messages.push({message:n.body,time:n.date,userName:e.ProfileName,Mtype:"sent"}),document.getElementById("messageToSend").value=""}))}return Object(r["E"])(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:""!=t.socket?(console.log("starting to listen !!!!"),t.socket.on("message",function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(r){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("message recieved in front end",r),a="",a=r.senderId===e.senderId?"sent":"received",t.messages.push({message:r.text,time:r.date,userName:r.userName,Mtype:a});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())):console.log("waiting for socket io to init");case 1:case"end":return n.stop()}}),n)})))),Object(r["o"])(Object(l["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,be()("ws://localhost:5000",{query:"userId="+e.senderId});case 2:t.socket=n.sent,console.log("what is this ?",t.socket),g.getMessages({_id:e.chatId}).then((function(n){var r,a=Object(U["a"])(n);try{for(a.s();!(r=a.n()).done;){var s=r.value,o="";o=s.userId===e.senderId?"sent":"received",t.messages.push({message:s.body,time:s.date,userName:s.userName,Mtype:o})}}catch(c){a.e(c)}finally{a.f()}}));case 5:case"end":return n.stop()}}),n)})))),{discussion:t,sendMessage:n}}};n("26f4");fe.render=le,fe.__scopeId="data-v-c3a1dfd8";var pe=fe,me={name:"UserProfile",components:{TweetItem:N,CreatTweetPanel:te},setup:function(e,t){var n=Object(r["u"])({test:null}),a=Object(c["b"])(),s=Object(r["u"])({UserLoaded:{UserName:""}}),o=Object(r["b"])((function(){return a.state.User.user._id})),u=Object(r["b"])((function(){return a.state.User.user.UserName})),i=Object(d["c"])(),b=Object(r["b"])((function(){return i.params.userId})),f=Object(r["u"])({room:"",followers:[],following:[],followState:!1,tweets:[]});function p(){g.follow({userId:b.value}).then((function(e){f.followState=!0,f.followers.unshift(e.Follower)}))}function m(){g.unFollow({_id:b.value}).then((function(){f.followState=!1;var e=f.followers.indexOf(o.value);e>-1&&f.followers.splice(e,1)}))}function O(e){var t,n=new FileReader;n.onload=function(n){t=n.target.result,g.updateCover({imageFile:t,imageType:e.target.files[0].type}).then((function(){}))},n.readAsDataURL(e.target.files[0])}function j(e){g.Tweet({UserIdT:s.UserLoaded._id,Body:e,UserName:s.UserLoaded.UserName}).then((function(e){f.tweets.unshift({_id:e._id,UserId:e.UserId,Body:e.Body})}))}function w(){return v.apply(this,arguments)}function v(){return v=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.getChatRoom({_id:b.value}).then(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==n){e.next=5;break}return e.next=3,g.makeChatRoom({_id:b.value}).then((function(e){f.room=e._id}));case 3:e.next=6;break;case 5:f.room=n._id;case 6:a=Object(r["c"])(pe,{chatName:s.UserLoaded.UserName,ProfileName:u,chatId:f.room,senderId:o.value,receiverId:b.value}),t.emit("openChat",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return Object(r["o"])(Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o.value!==b.value){e.next=5;break}n.test=!0,s.UserLoaded=a.state.User.user,e.next=9;break;case 5:return n.test=!1,e.next=8,g.getUserId({_id:b.value});case 8:s.UserLoaded=e.sent;case 9:t=b.value,s.UserLoaded.img&&(document.getElementById("image").src=s.UserLoaded.img.toString()),g.getFollower({_id:t}).then((function(e){var t,n=Object(U["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.Follower===o.value&&(f.followState=!0),f.followers.unshift(r.Follower)}}catch(a){n.e(a)}finally{n.f()}})),g.getFollowing({_id:t}).then((function(e){var t,n=Object(U["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;f.following.unshift(r.Following)}}catch(a){n.e(a)}finally{n.f()}})),g.getTweets({UserIdT:t}).then((function(e){var t,n=Object(U["a"])(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;f.tweets.unshift({_id:r._id,UserId:r.UserId,Body:r.Body})}}catch(a){n.e(a)}finally{n.f()}}));case 14:case"end":return e.stop()}}),e)})))),{user:s,userProfile:n,state:f,addTweet:j,userId:b,followF:p,unfollowF:m,sendMessage:w,updateCover:O}}};n("3045");me.render=J,me.__scopeId="data-v-26fb9e5e";var ge=me,Oe=Object(r["I"])("data-v-bc78a028");Object(r["t"])("data-v-bc78a028");var je=Object(r["g"])("h1",null,[Object(r["g"])("strong",null,"Welcome to Tweet-t-t")],-1);Object(r["r"])();var we=Oe((function(e,t,n,a,s,o){var c=Object(r["x"])("LogIn"),u=Object(r["x"])("SignUp");return Object(r["q"])(),Object(r["d"])(r["a"],null,[je,Object(r["g"])(c),Object(r["g"])(u)],64)})),ve=Object(r["I"])("data-v-4fa0e3eb");Object(r["t"])("data-v-4fa0e3eb");var he=Object(r["g"])("h1",null,[Object(r["g"])("strong",null,"Log In")],-1),ye=Object(r["g"])("label",{for:"emailLogIn"},"E-mail",-1),Ue=Object(r["g"])("label",{for:"passwordLogIn"},"Password",-1),Ie=Object(r["g"])("button",null," Log In ",-1);Object(r["r"])();var _e=ve((function(e,t,n,a,s,o){return Object(r["q"])(),Object(r["d"])(r["a"],null,[he,Object(r["g"])("form",{action:"",class:"logIn",onSubmit:t[3]||(t[3]=Object(r["H"])((function(){return a.logInUser&&a.logInUser.apply(a,arguments)}),["prevent"]))},[ye,Object(r["G"])(Object(r["g"])("input",{id:"emailLogIn",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.login.Email=e})},null,512),[[r["C"],a.login.Email]]),Ue,Object(r["G"])(Object(r["g"])("input",{id:"passwordLogIn",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.login.HashCode=e})},null,512),[[r["C"],a.login.HashCode]]),Ie],32)],64)})),xe={name:"LogIn",setup:function(){var e=Object(r["u"])({Email:"",HashCode:""});function t(){""!=e.Email&&""!=e.HashCode&&(console.log("calling log in"),g.logIn(e).then((function(e){console.log(e),Xe.push("/")})))}return{login:e,logInUser:t}}};n("eaf9");xe.render=_e,xe.__scopeId="data-v-4fa0e3eb";var ke=xe,Te=Object(r["I"])("data-v-b1b1a3ba");Object(r["t"])("data-v-b1b1a3ba");var Ce=Object(r["g"])("h1",null,[Object(r["g"])("strong",null,"Sign Up")],-1),Re=Object(r["g"])("label",{for:"email"},"E-mail",-1),qe=Object(r["g"])("label",{for:"password"},"Password",-1),Ne=Object(r["g"])("label",{for:"confirmpassword"},"Confirm password",-1),Se=Object(r["g"])("label",{for:"username"},"Username",-1),Fe=Object(r["g"])("label",{for:"firsname"},"Firsname",-1),Pe=Object(r["g"])("label",{for:"lastname"},"Lastname",-1),Le=Object(r["g"])("button",null," Sign Up ",-1);Object(r["r"])();var Me=Te((function(e,t,n,a,s,o){return Object(r["q"])(),Object(r["d"])(r["a"],null,[Ce,Object(r["g"])("form",{action:"",class:"signUp",onSubmit:t[7]||(t[7]=Object(r["H"])((function(){return a.signUpUser&&a.signUpUser.apply(a,arguments)}),["prevent"]))},[Re,Object(r["G"])(Object(r["g"])("input",{id:"email",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userData.Email=e})},null,512),[[r["C"],a.userData.Email]]),qe,Object(r["G"])(Object(r["g"])("input",{id:"password",type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.userData.password=e})},null,512),[[r["C"],a.userData.password]]),Ne,Object(r["G"])(Object(r["g"])("input",{id:"confirmpassword",type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.userData.confpassword=e})},null,512),[[r["C"],a.userData.confpassword]]),Se,Object(r["G"])(Object(r["g"])("input",{id:"username",type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return a.userData.UserName=e})},null,512),[[r["C"],a.userData.UserName]]),Fe,Object(r["G"])(Object(r["g"])("input",{id:"firsname",type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.userData.FirstName=e})},null,512),[[r["C"],a.userData.FirstName]]),Pe,Object(r["G"])(Object(r["g"])("input",{id:"lastname",type:"text","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.userData.LastName=e})},null,512),[[r["C"],a.userData.LastName]]),Le],32)],64)})),Ee={name:"SignUp",setup:function(){var e=Object(r["u"])({Email:"",Password:"",Confpassword:"",UserName:"",FirstName:"",LastName:""});function t(){e.password===e.confpassword&&""!=e.Email&&""!=e.password&&""!=e.UserName&&""!=e.FirstName&&""!=e.LastName&&(console.log("passed check"),g.signUp(e).then((function(e){console.log(e),Xe.push("/")})))}return{userData:e,signUpUser:t}}};n("8e4c");Ee.render=Me,Ee.__scopeId="data-v-b1b1a3ba";var De=Ee,Be={name:"LogInSignUp",components:{LogIn:ke,SignUp:De}};Be.render=we,Be.__scopeId="data-v-bc78a028";var ze=Be,Ae=Object(r["I"])("data-v-2754a2ff");Object(r["t"])("data-v-2754a2ff");var Ge={class:"admin"},He=Object(r["g"])("h1",null,"Admin",-1);Object(r["r"])();var Ve=Ae((function(e,t,n,a,s,o){return Object(r["q"])(),Object(r["d"])("div",Ge,[He])})),Je={name:"Admin"};n("bb34");Je.render=Ve,Je.__scopeId="data-v-2754a2ff";var We=Je,Ke=[{path:"/",name:"Home",component:F,meta:{requiresUser:!0}},{path:"/user/:userId",name:"UserProfile",component:ge,meta:{requiresUser:!0}},{path:"/loginOrsignup",name:"signup",component:ze,meta:{requiresUser:!1}},{path:"/admin",name:"Admin",component:We,meta:{requiresUser:!0,requiresAdmin:!0}}],Qe=Object(d["a"])({history:Object(d["b"])(),routes:Ke});Qe.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,n,r){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.auth();case 2:if(a=e.sent,s=t.matched.some((function(e){return e.meta.requiresUser})),null!==f.state.User.user||s){e.next=8;break}r(),e.next=21;break;case 8:if(a.loggedIn){e.next=12;break}r({name:"signup"}),e.next=21;break;case 12:if(null!==f.state.User.user){e.next=20;break}return e.next=15,g.getUser();case 15:o=e.sent,f.dispatch("User/setUser",o),r(),e.next=21;break;case 20:r();case 21:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var Xe=Qe;Object(r["c"])(i).use(f).use(Xe).mount("#app")},"5fe1":function(e,t,n){},"8e4c":function(e,t,n){"use strict";n("dd3a")},"9d18":function(e,t,n){"use strict";n("dcc7")},"9eba":function(e,t,n){},ae1e:function(e,t,n){},ae5b:function(e,t,n){},bb34:function(e,t,n){"use strict";n("9eba")},dcc7:function(e,t,n){},dd3a:function(e,t,n){},eaf9:function(e,t,n){"use strict";n("ae5b")},f65d:function(e,t,n){e.exports=n.p+"img/color-2174045_640.1376d23c.png"},f964:function(e,t,n){"use strict";n("ae1e")},f9e0:function(e,t,n){}});
//# sourceMappingURL=app.fee7162d.js.map