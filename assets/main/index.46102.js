window.__require=function t(e,o,r){function n(i,p){if(!o[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var f="function"==typeof __require&&__require;if(!p&&f)return f(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return n(e[i][1][t]||t)},l,l.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({BeltConveyorScript:[function(t,e,o){"use strict";cc._RF.push(e,"12c2fCxno9Brp2Nghd+OjgN","BeltConveyorScript");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.impulse=null,e}return r(e,t),e.prototype.start=function(){this.getComponent(cc.Collider3D).on("collision-stay",this.onCollision,this)},e.prototype.onCollision=function(t){t.otherCollider.node.getComponent(cc.RigidBody3D).applyForce(this.impulse,cc.v3(0,0,0))},n([p(cc.Vec3)],e.prototype,"impulse",void 0),e=n([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"d7c7bDDlExNA4FeVEY3nA10","Helloworld");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){cc.director.getPhysics3DManager().enabled=!0},e=n([i],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],InputScript:[function(t,e,o){"use strict";cc._RF.push(e,"cb4760WqoFDH7BmwHnP1Nzx","InputScript");var r=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function r(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.KonnbeaObject=null,e.Obj=null,e}return r(e,t),e.prototype.start=function(){var t=this;setInterval(function(){return t.addPrefab()},1e3)},e.prototype.addPrefab=function(){cc.log("addPrefab");var t=cc.instantiate(this.Obj);t.setPosition(this.node.parent.getPosition()),this.KonnbeaObject.addChild(t)},n([p(cc.Node)],e.prototype,"KonnbeaObject",void 0),n([p(cc.Prefab)],e.prototype,"Obj",void 0),e=n([i],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["BeltConveyorScript","Helloworld","InputScript"]);