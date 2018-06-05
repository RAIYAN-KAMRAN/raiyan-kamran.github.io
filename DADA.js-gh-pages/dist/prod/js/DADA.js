/*!
 * DADA.js (github.com/matthias-vogt/DADA.js)
 *
 * Copyright (c) 2016 Matthias Vogt
 * Released under the WTFPL (no warranty)
 */
/*!
 *  Remixes jquery-boilerplate - v4.1.0
 *  MIT License © Zeno Rocha
 */
!function(t,n,i,e){"use strict";function s(n){this._defaults=r,this._options=a,this._settings=t.extend(!0,{},r,n),this._name=a}function o(s){return{get settings(){return s},get noOfPhrases(){return delete this.noOfPhrases,this.noOfPhrases=Math.floor((this.settings.time-this.settings.waitTimeAfterFirstDialog)/this.settings.baseTimePerDialog)+1},noOfWindowAnimations:3,init:function(){var n=this;this.initVector(),this.$DADA=t("<div/>").addClass("DADA"),this.$DADA.on("click",".window button.js-cancel, .window button.js-ok",function(){var i=t(this).parents(".window");i.css("animation","none"),setTimeout(function(){i.addClass("is-clicked")},20),n.playRandomSound(n.$audios.special.close)}),this.$DADA.on("click",".window .text button.js-ok",this.settings.on.ok),this.$DADA.on("click",".window .text button.js-cancel",this.settings.on.cancel);for(var i=0;i<=this.noOfPhrases;i++)this.$DADA.append(this.getRandWindow());t("body").append(this.$DADA),this.doDADA(),this.initEvade(),this.settings.on.start()},get $window(){return delete this.$window,this.$window=t(this.generateTemplate(this.settings.windowTemplate)(this.settings.words))},get $audios(){return delete this.$audios,this.$audios=this.deepMapMulti(function(n,i){for(var e=[],s=0;s<n.length;s++)e.push(t("<audio/>").attr("src",n[s]));return e},this.settings.sounds)},getRandFromArray:function(t){return t[Math.floor(Math.random()*t.length)]},getRandWindow:function(){var i=this.$window.clone();i.find(".icon").attr("src",this.getRandFromArray(this.settings.icons)),i.find(".text").prepend(this.getRandFromArray(this.settings.phrases)),i.addClass("animation-"+Math.ceil(Math.random()*this.noOfWindowAnimations));var e=i.clone().css("display","inline-block").appendTo(t("body")),s={height:e.height(),width:e.width()};return e.remove(),i.css({top:Math.random()*(t(n).height()-s.height-100),left:Math.random()*(t(n).width()-s.width-100)}),i},playRandomSound:function(n){t(this.getRandFromArray(n)).trigger("play")},doDADA:function(){for(var t=this,n=0;n<this.noOfPhrases;n++)!function(n){var i=(0!==n?t.settings.waitTimeAfterFirstDialog:0)+(n-1)*t.settings.baseTimePerDialog+.5*Math.random();setTimeout(function(){t.$DADA.children(".window").filter(":not(.visible):first").addClass("visible"),t.playRandomSound(0===n?t.$audios.special.start:t.$audios.random)},i)}(n);setTimeout(function(){t.playRandomSound(t.$audios.special.close),t.$DADA.addClass("end"),t.settings.on.end()},this.settings.time),this.$DADA.addClass("start")},initEvade:function(){var n=this,i=t(".window");this.$DADA.on("mousemove",function(e){i.each(function(i,s){n.evade(e,t(s))})})},initVector:function(){Math.Vector=function(t,n){this.x=t,this.y=n},Math.Vector.prototype={clone:function(){return new Math.Vector(this.x,this.y)},negate:function(){return this.x=-this.x,this.y=-this.y,this},neg:function(){return this.clone().negate()},addeq:function(t){return this.x+=t.x,this.y+=t.y,this},subeq:function(t){return this.addeq(t.neg())},add:function(t){return this.clone().addeq(t)},sub:function(t){return this.clone().subeq(t)},multeq:function(t){return this.x*=t,this.y*=t,this},diveq:function(t){return this.x/=t,this.y/=t,this},mult:function(t){return this.clone().multeq(t)},div:function(t){return this.clone().diveq(t)},dot:function(t){return this.x*t.x+this.y*t.y},length:function(){return Math.sqrt(this.dot(this))},normal:function(){return this.clone().diveq(this.length())}}},evade:function(n,s){s===e&&(s=t(this));var o=s.offset(),a={x:o.left+s.outerWidth()/2,y:o.top+s.outerHeight()/2},r=new Math.Vector(a.x-n.pageX,a.y-n.pageY),c=s.outerWidth()/2.25;if(!(r.length()>=c)){var h=r.normal().multeq(c).sub(r),d={left:o.left+h.x,top:o.top+h.y},u=parseInt(s.css("padding-left"));d.left<-u?d.left=-u:d.left+s.outerWidth()-u>t(i).width()&&(d.left=t(i).width()-s.outerWidth()+u),d.top<-u?d.top=-u:d.top+s.outerHeight()-u>t(i).height()&&(d.top=t(i).height()-s.outerHeight()+u),s.offset(d)}},get deepMapMulti(){var t=this;return function(n,i,s,o){return s===e&&(s={}),o===e&&(o={}),Object.keys(i).reduce(function(e,a){return"[object Object]"=={}.toString.call(i[a])?e[a]=t.deepMapMulti(n,i[a],s[a],o[a]):e[a]=n(i[a],a,s[a],o[a]),e},{})}},generateTemplate:function(t){return new Function("context","return '"+t.replace(/{{\s*([^}]+)\s*}}/g,"'+context.$1+'")+"';")}}}var a="DADA",r={phrases:["DADA is DADA is DADA"],icons:["data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="],sounds:{random:[],special:{close:[],start:[]}},on:{start:function(){},end:function(){},ok:function(){},cancel:function(){}},time:2e4,baseTimePerDialog:1500,waitTimeAfterFirstDialog:8e3,windowTemplate:'<div class="window">    <div class="bar">        {{title}}        <button class="close js-cancel">×</button>    </div>    <div class="content">        <img class="icon" alt="DADA Icon">        <div class="text">            <br>            <button class="js-ok">{{ok}}</button>            <button class="js-cancel">{{cancel}}</button>        </div>    </div></div>',words:{title:"DADA-Error!!1",ok:"OK",cancel:"Cancel"}};t[a]=function(n){var i=new s(n);i.prototype=t.extend(i.prototype,o(i._settings)),i.prototype.init()}}(jQuery,window,document);