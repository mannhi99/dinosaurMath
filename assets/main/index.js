window.__require=function t(e,o,n){function r(c,a){if(!o[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+c+"'")}c=s}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return r(e[c][1][t]||t)},u,u.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({AudioMng:[function(t,e,o){"use strict";cc._RF.push(e,"363cadDznpOjZYLtrKuFZHQ","AudioMng");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0}),o.AudioMng=void 0;var c=cc._decorator,a=c.ccclass,s=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e.prototype.play=function(t,e,o){void 0===o&&(o=1),cc.audioEngine.play(e,t,o)},e.prototype.stop=function(){},i([a],e)}(cc.Component));o.AudioMng=s,cc._RF.pop()},{}],Excercise:[function(t,e,o){"use strict";cc._RF.push(e,"1a368dUrttEmqDwkiI/aJzh","Excercise");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0}),o.Excercise=void 0;var c=cc._decorator,a=c.ccclass,s=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.arrNum=[],e}return r(e,t),e.prototype.start=function(){},e.prototype.sortNumber=function(t,e,o){this.arrNum=[];for(var n=0;n<t;n++){var r=0;do{r=Math.floor(Math.random()*e+1)}while(this.arrNum.includes(r));this.arrNum.push(r)}return 1==o?this.arrNum.sort(function(t,e){return t-e}):this.arrNum.sort(function(t,e){return e-t}),this.arrNum},e.prototype.shuffle=function(t){for(var e,o=t.length-1;o>0;o--){var n=Math.floor(Math.random()*o+1);e=[t[n],t[o]],t[o]=e[0],t[n]=e[1]}return t},i([a],e)}(cc.Component));o.Excercise=s,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.character=null,e.enemy=null,e.btnMoving=null,e.speed=200,e.__ISACTION=!1,e.v1=new cc.Vec3,e}return r(e,t),e.prototype.start=function(){this.__ISACTION=!1,this.v1=this.character.position,this.btnMoving.off(cc.Node.EventType.TOUCH_START,this.buttonMoving,this),this.btnMoving.on(cc.Node.EventType.TOUCH_START,this.buttonMoving,this),this.btnMoving.off(cc.Node.EventType.TOUCH_END,this.stopMoving,this),this.btnMoving.on(cc.Node.EventType.TOUCH_END,this.stopMoving,this)},e.prototype.action=function(){},e.prototype.setAngelCharacterDefault=function(){this.character.angle=0},e.prototype.setStartPosCharacterDefault=function(){this.character.position=this.v1},e.prototype.buttonMoving=function(){this.__ISACTION=!0},e.prototype.stopMoving=function(){this.__ISACTION=!1,this.setAngelCharacterDefault(),this.setStartPosCharacterDefault()},e.prototype.update=function(t){if(this.__ISACTION){var e=this.character.position,o=this.enemy.position.sub(e);if(o.magSqr()>1){var n=Math.atan2(o.y,o.x)*(180/Math.PI);this.character.angle=-n;var r=o.normalize().mul(this.speed*t);this.character.position=e.add(r)}}},i([s({type:cc.Node})],e.prototype,"character",void 0),i([s({type:cc.Node})],e.prototype,"enemy",void 0),i([s({type:cc.Node})],e.prototype,"btnMoving",void 0),i([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],LogicMath:[function(t,e,o){"use strict";cc._RF.push(e,"51f73HegXVBC7YJMAPF7wSt","LogicMath");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,p=t("./AudioMng"),u=t("./Excercise"),l=t("./SettingGame"),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lblmathex=null,e.btnLabelArr=[],e.btnBgArr=[],e.alert=null,e.lblAlert=null,e.btnAnswer=null,e.lbltotal=null,e.dinosaur=null,e.bg1=null,e.bg2=null,e.lblfinish=null,e.finishNode=null,e.mathNode=null,e.AuManager=null,e.dinoRoar=null,e.dinoClap=null,e.dinoBgAudio=null,e.lbltime=null,e.settingMenu=null,e.Excercise=null,e.lblquestText=null,e.exactly=0,e.total=0,e.fisnishRound=100,e.linkNum=6,e.time=0,e.NUMMAX=0,e.ISPLAY=!1,e}return r(e,t),e.prototype.start=function(){},e.prototype.play=function(){var t=l.SettingGame.getInstance();this.NUMMAX=t.numToMax,this.settingMenu.active=!1,this.mathNode.active=!0,this.createRandomEx(),this.backgroundRoad(),this.AuManager.play(!0,this.dinoBgAudio,.7),this.countTime()},e.prototype.countTime=function(){var t=this;cc.tween(this.node).repeatForever(cc.tween().delay(1).call(function(){t.time++,t.lbltime.string="Th\u1eddi gian: "+t.time+" gi\xe2y"})).tag(2).start()},e.prototype.backgroundRoad=function(){var t=this,e=function(t,e){t.x<=-t.width&&(t.x=e.x+e.width)};cc.tween(this.node).repeatForever(cc.tween().call(function(){t.bg1.x-=2,t.bg2.x-=2,e(t.bg1,t.bg2),e(t.bg2,t.bg1)}).delay(.01)).tag(1).start()},e.prototype.angry=function(){this.dinosaur.setAnimation(0,"roar",!0),this.AuManager.play(!1,this.dinoRoar)},e.prototype.walk=function(){this.dinosaur.setAnimation(0,"walk",!0)},e.prototype.jump=function(t){void 0===t&&(t=!1),this.dinosaur.setAnimation(0,"jump",t),this.AuManager.play(!1,this.dinoClap)},e.prototype.updateScore=function(){this.lbltotal.string="\u0110\xfang "+this.exactly+"/"+this.total},e.prototype.randomExType=function(){Math.random()<=.3?this.createExerciseSort():this.createExercise()},e.prototype.createExerciseSort=function(){for(var t=Math.random()<=.5?1:0,e=this.Excercise.sortNumber(this.linkNum,this.NUMMAX,t),o=e.join(","),n=this.Excercise.shuffle(e).join(","),r="H\xe3y s\u1eafp x\u1ebfp c\xe1c s\u1ed1 sau theo "+(1==t?"t\u0103ng d\u1ea7n":"gi\u1ea3m d\u1ea7n")+" ",i=[],c=0;c<4;c++){var a="";do{a=this.Excercise.shuffle(e).join(",")}while(a==o||i.includes(a));i.push(a)}this.randomResultToButton(o,n,i,r)},e.prototype.randomResultToButton=function(t,e,o,n){var r=Math.floor(4*Math.random());this.chooseRight=r;for(var i=this.btnLabelArr[r],c=0;c<4;c++)if(c!=r){var a=this.btnLabelArr[c],s=o[c];a.getComponent(cc.Label).string=""+s}this.lblmathex.string=e,i.getComponent(cc.Label).string=""+t,this.lblquestText.string=n},e.prototype.createExercise=function(){var t,e=0,o="",n=Math.random(),r=this.randomToMaxNumber(),i=this.randomToMaxNumber();n<=.5?(e=r+i,o=r+" + "+i+" = ?"):(r<i&&(r=(t=[i,r])[0],i=t[1]),e=r-i,o=r+" - "+i+" = ?");for(var c=[],a=0,s="",p=0;p<4;p++){do{s=""+(a=this.randomToMaxNumber())}while(a===e||c.includes(s));c.push(s)}this.randomResultToButton(""+e,o,c,"H\xe3y ch\u1ecdn \u0111\xe1p \xe1n ph\xf9 h\u1ee3p thay v\xe0o d\u1ea5u h\u1ecfi:")},e.prototype.sentResult=function(){null!=this.chooseUser&&(this.btnAnswer.active=!1,this.showAlert())},e.prototype.randomToMaxNumber=function(){return Math.floor(Math.random()*this.NUMMAX+1)},e.prototype.createRandomEx=function(){if(this.total>=this.fisnishRound){var t=this.total-this.exactly,e=t<this.exactly?"B\u1ed1 m\u1eb9 khen con, l\u1ea7n sau c\u1ed1 g\u1eafng h\u01a1n n\u1eefa nh\xe9! ":"Sai nhi\u1ec1u qu\xe1, con c\u1ea7n c\u1ed1 g\u1eafng th\xeam nh\xe9!";return this.lblfinish.string="Con \u0111\xe3 ho\xe0n th\xe0nh b\xe0i t\u1eadp v\u1edbi \n "+this.exactly+" b\xe0i \u0111\xfang v\xe0 "+t+" b\xe0i sai \n trong "+this.time+" gi\xe2y. \n "+e,this.finishNode.active=!0,this.mathNode.active=!1,this.jump(!0),void cc.Tween.stopAllByTarget(this.node)}this.chooseUser=null,this.walk(),this.total++,this.btnAnswer.active=!0,this.resetButtonAnswer(),this.randomExType()},e.prototype.answer=function(t){this.resetButtonAnswer(),this.chooseUser=t.currentTarget,t.currentTarget.getChildByName("Background").color=cc.Color.ORANGE},e.prototype.resetButtonAnswer=function(){for(var t=0;t<4;t++)this.btnBgArr[t].color=cc.Color.WHITE},e.prototype.showAlert=function(){var t=this,e=.2,o=Number(this.chooseUser.getComponent(cc.Button).clickEvents[0].customEventData);this.chooseRight===o?(this.jump(),this.lblAlert.string="\u0110\xfang r\u1ed3i!!!",this.alert.color=cc.Color.YELLOW,this.exactly++):(e=3,this.angry(),this.lblAlert.string="Sai r\u1ed3i!!!",this.chooseUser.getChildByName("Background").color=cc.Color.RED,this.alert.color=cc.Color.RED),this.alert.active=!0,this.updateScore(),cc.tween(this.alert).to(.1,{opacity:255}).delay(.5).to(.5,{opacity:0}).delay(e).call(function(){t.createRandomEx()},this).start()},i([s(cc.Label)],e.prototype,"lblmathex",void 0),i([s([cc.Label])],e.prototype,"btnLabelArr",void 0),i([s([cc.Node])],e.prototype,"btnBgArr",void 0),i([s({type:cc.Node})],e.prototype,"alert",void 0),i([s({type:cc.Label})],e.prototype,"lblAlert",void 0),i([s({type:cc.Node})],e.prototype,"btnAnswer",void 0),i([s({type:cc.Label})],e.prototype,"lbltotal",void 0),i([s({type:sp.Skeleton})],e.prototype,"dinosaur",void 0),i([s({type:cc.Node})],e.prototype,"bg1",void 0),i([s({type:cc.Node})],e.prototype,"bg2",void 0),i([s({type:cc.Label})],e.prototype,"lblfinish",void 0),i([s({type:cc.Node})],e.prototype,"finishNode",void 0),i([s({type:cc.Node})],e.prototype,"mathNode",void 0),i([s({type:p.AudioMng})],e.prototype,"AuManager",void 0),i([s({type:cc.AudioClip})],e.prototype,"dinoRoar",void 0),i([s({type:cc.AudioClip})],e.prototype,"dinoClap",void 0),i([s({type:cc.AudioClip})],e.prototype,"dinoBgAudio",void 0),i([s({type:cc.Label})],e.prototype,"lbltime",void 0),i([s({type:cc.Node})],e.prototype,"settingMenu",void 0),i([s({type:u.Excercise})],e.prototype,"Excercise",void 0),i([s({type:cc.Label})],e.prototype,"lblquestText",void 0),i([a],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./AudioMng":"AudioMng","./Excercise":"Excercise","./SettingGame":"SettingGame"}],SettingGame:[function(t,e,o){"use strict";cc._RF.push(e,"27a63iyfgJISbT/Nc8ZLYaH","SettingGame"),Object.defineProperty(o,"__esModule",{value:!0}),o.SettingGame=void 0;var n=function(){function t(){this.numToMax=0}return t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t}();o.SettingGame=n,cc._RF.pop()},{}],SettingMenu:[function(t,e,o){"use strict";cc._RF.push(e,"7921eYkP15GkrMrVeHvtZ7x","SettingMenu");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,s=c.property,p=t("./SettingGame"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.edtNumMax=null,e.btnSave=null,e.btnPlay=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.onSetNumber=function(){this.btnPlay.active=!1,this.btnSave.active=!0},e.prototype.saveSetting=function(){var t=Number(this.edtNumMax.string);t<=9&&(t=10,this.edtNumMax.string="10"),p.SettingGame.getInstance().numToMax=t,this.btnPlay.active=!0,this.btnSave.active=!1},i([s(cc.EditBox)],e.prototype,"edtNumMax",void 0),i([s({type:cc.Node})],e.prototype,"btnSave",void 0),i([s({type:cc.Node})],e.prototype,"btnPlay",void 0),i([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./SettingGame":"SettingGame"}]},{},["AudioMng","Excercise","Helloworld","LogicMath","SettingGame","SettingMenu"]);