(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e){e.exports={affenpinscher:[],african:[],airedale:[],akita:[],appenzeller:[],basenji:[],beagle:[],bluetick:[],borzoi:[],bouvier:[],boxer:[],brabancon:[],briard:[],bulldog:["boston","french"],bullterrier:["staffordshire"],cairn:[],cattledog:["australian"],chihuahua:[],chow:[],clumber:[],cockapoo:[],collie:["border"],coonhound:[],corgi:["cardigan"],cotondetulear:[],dachshund:[],dalmatian:[],dane:["great"],deerhound:["scottish"],dhole:[],dingo:[],doberman:[],elkhound:["norwegian"],entlebucher:[],eskimo:[],frise:["bichon"],germanshepherd:[],greyhound:["italian"],groenendael:[],hound:["afghan","basset","blood","english","ibizan","walker"],husky:[],keeshond:[],kelpie:[],komondor:[],kuvasz:[],labrador:[],leonberg:[],lhasa:[],malamute:[],malinois:[],maltese:[],mastiff:["bull","english","tibetan"],mexicanhairless:[],mix:[],mountain:["bernese","swiss"],newfoundland:[],otterhound:[],papillon:[],pekinese:[],pembroke:[],pinscher:["miniature"],pointer:["german","germanlonghair"],pomeranian:[],poodle:["miniature","standard","toy"],pug:[],puggle:[],pyrenees:[],redbone:[],retriever:["chesapeake","curly","flatcoated","golden"],ridgeback:["rhodesian"],rottweiler:[],saluki:[],samoyed:[],schipperke:[],schnauzer:["giant","miniature"],setter:["english","gordon","irish"],sheepdog:["english","shetland"],shiba:[],shihtzu:[],spaniel:["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],springer:["english"],stbernard:[],terrier:["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],vizsla:[],weimaraner:[],whippet:[],wolfhound:["irish"]}},27:function(e,t,n){e.exports=n(72)},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),c=(n(33),n(1)),i=n(2),l=n(5),u=n(3),h=n(4),d=(n(35),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"Instructions"),r.a.createElement("p",null,"To play, you may click on any picture, but only once! Each unique picture that you click earns you 1 pt."))}}]),t}(a.Component)),m=n(16),b=n(26),g=n(9),p=n(12),f=n.n(p),k=(n(37),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){n.props.changeScore(e.target.id)},n.handleClick=n.handleClick.bind(Object(g.a)(Object(g.a)(n))),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{onClick:this.handleClick},r.a.createElement(f.a.Img,{variant:"top",src:this.props.url,id:this.props.breed}),r.a.createElement(f.a.Title,null,this.props.breed))}}]),t}(a.Component)),O=n(24),j=n(25),y=n.n(j),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={imgList:[],currentImgs:[],usedImg:[]},n.getImg=function(){for(var e=[],t=[],a=Object.keys(O),r=0;r<25;r++){var o=a[Math.floor(Math.random()*a.length)];t.push(o);var s="https://dog.ceo/api/breed/".concat(o,"/images/random");e.push(y.a.get(s))}Promise.all(e).then(function(e){var a=e.map(function(e,n){return Object(b.a)({},e,{breed:t[n]})});n.setState({imgList:a},function(){for(var e=[],t=0;t<10;t++)e.push(n.state.imgList[t]);n.setState({currentImgs:e},function(){console.log(n.state,"INITIAL state")})})})},n.addScore=function(e){n.state.usedImg.length>0?n.state.usedImg.indexOf(e)>-1?(n.getImg(),n.props.clearScore(),n.setState({usedImg:[]})):(n.setState({usedImg:[].concat(Object(m.a)(n.state.usedImg),[e])},function(){console.log(n.state,"ADDED TO USED IMG"),n.getNewImg(e)}),n.props.scoreChange()):0===n.state.usedImg.length&&n.setState({usedImg:[].concat(Object(m.a)(n.state.usedImg),[e])},function(){console.log(n.state,"USED IMAGE SETTING STATE"),n.props.scoreChange(),n.getNewImg(e)})},n.getNewImg=function(e){var t=n.state.currentImgs;console.log(t,"STATE FROM GETNEWIMAGE");var a=Math.floor(Math.random()*n.state.imgList.length);n.state.currentImgs.filter(function(r){if(r.breed===e){var o=n.state.currentImgs.indexOf(r);console.log(o),t.splice(o,1,n.state.imgList[a])}})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getImg()}},{key:"render",value:function(){var e=this;return this.state.currentImgs.length?this.state.currentImgs&&this.state.currentImgs.map(function(t,n){return r.a.createElement(k,{url:t.data.message,breed:t.breed,changeScore:e.addScore,key:n})}):r.a.createElement("h3",null,"Loading...")}}]),t}(a.Component),E=(n(64),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex flex-row justify-content-around"},r.a.createElement("h3",null,"Score: ",this.props.score),r.a.createElement("h3",null,"Best Score: ",this.props.bestScore))}}]),t}(a.Component)),I=(n(66),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={started:!1,score:0,bestScore:0,status:"loading"},n.startGame=function(){n.setState({started:!0})},n.addScore=function(){n.setState({score:n.state.score+1},function(){n.state.score>n.state.bestScore&&n.setState({bestScore:n.state.score})})},n.scoreToZero=function(){n.setState({score:0})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Game container"},this.state.started?r.a.createElement("div",null,r.a.createElement(E,{score:this.state.score,bestScore:this.state.bestScore}),r.a.createElement("div",null,this.state.score<0?r.a.createElement("h3",null,"You lose"):r.a.createElement(v,{scoreChange:this.addScore.bind(this),clearScore:this.scoreToZero.bind(this)}))):r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("button",{onClick:this.startGame}," GO")))}}]),t}(a.Component)),w=(n(68),function(){return r.a.createElement("h1",{className:"Title"},"The Clicky Game")}),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={started:!1},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(I,null))}}]),t}(a.Component),C=(n(70),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.3a98b601.chunk.js.map