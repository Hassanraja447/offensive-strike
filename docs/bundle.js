!function(o){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=o,i.c=n,i.d=function(o,n,t){i.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:t})},i.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,n){if(1&n&&(o=i(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var e in o)i.d(t,e,function(n){return o[n]}.bind(null,e));return t},i.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return i.d(n,"a",n),n},i.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},i.p="",i(i.s=1)}([function(o,n,i){},function(o,n,i){"use strict";i.r(n);i(0);var t=document.querySelector("#canvas");t.width=1280,t.height=720;for(var e=t.getContext("2d"),r=[],a=0;a<=8;a++){for(var s=[],c=0;c<=15;c++)s.push(Math.random()<=.1);r.push(s)}var u=function(){for(var o=0,n=0;n<=8;n++){for(var i=0,t=0;t<=15;t++)e.beginPath(),e.moveTo(i,o),!0===r[n][t]?(e.fillStyle="#FF0000",e.fillRect(i,o,80,80)):(e.strokeStyle="#000000",e.strokeRect(i,o,80,80)),i+=80;o+=80}},l=document.querySelector("#player1"),f=function(o){setTimeout((function(){e.drawImage(l,o.position.x+R,o.position.y+R,50,50)}),500)},d=function(o){console.log(o.img),e.drawImage(o.img,o.canvasPosition.x+10,o.canvasPosition.y+10,50,50)};function p(o,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}var v=function(){return Math.floor(16*Math.random())+0},h=function(){return Math.floor(9*Math.random())+0},y=function(){function o(n,i){var t=this,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.color=n,this.damage=i,this.hasWeapon=!1,this.weapon=e,this.position={x:0,y:0},this.indexPosition={row:0,col:0},this.init=function(){var o=h(),n=v();if(r[o][n])return t.init();if(o>0)for(var i=0;i<o;i++)t.position.y+=80;if(n>0)for(var e=0;e<n;e++)t.position.x+=80;t.indexPosition.row=o,t.indexPosition.col=n},this.init()}var n,i,t;return n=o,(i=[{key:"updatePlayerProperties",value:function(o,n){this.color=o,this.damage+=n}},{key:"updatePlayerWeapon",value:function(o){this.weapon=o}},{key:"updateWeaponState",value:function(){this.hasWeapon=!0}}])&&p(n.prototype,i),t&&p(n,t),o}();function P(o,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}var x=function(){return Math.floor(16*Math.random())+0},w=function(){return Math.floor(9*Math.random())+0},m=function(){function o(n,i,t){var e=this;!function(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.img=n,this.damage=i,this.id=t,this.canvasPosition={x:0,y:0},this.indexPosition={row:0,col:0},this.init=function(){var o=w(),n=x();if(r[o][n])return e.init();if(o>0)for(var i=0;i<o;i++)e.canvasPosition.y+=80;if(n>0)for(var t=0;t<n;t++)e.canvasPosition.x+=80;e.indexPosition.row=o,e.indexPosition.col=n},this.init()}var n,i,t;return n=o,(i=[{key:"updateWeaponPosition",value:function(o,n){this.canvasPosition=o,this.indexPosition=n}}])&&P(n.prototype,i),t&&P(n,t),o}();i.d(n,"padding",(function(){return R}));var g=document.querySelector("#coconut"),b=document.querySelector("#lemon"),k=document.querySelector("#donut"),S=document.querySelector("#cupcake"),M=new m(g,90,1),j=new m(b,60,2),O=new m(S,50,3),T=new m(k,95,4),q=[M,j,O,T];console.log(q),setTimeout((function(){d(M),d(j),d(O),d(T)}),500);var R=20,_=37,W=38,C=39,E=40;u();var I=new y("#34495e",100),F=function(){return q.findIndex((function(o){return I.indexPosition.row===o.indexPosition.row&&I.indexPosition.col===o.indexPosition.col}))},L=function(o){var n=q[o];I.updatePlayerProperties(n.color,n.damage)};f(I),window.addEventListener("keydown",(function(o){switch(o.keyCode){case _:if(!r[I.indexPosition.row][I.indexPosition.col-1]&&I.indexPosition.col>0){e.clearRect(I.position.x+R,I.position.y+R,50,50),I.position.x-=80,I.indexPosition.col-=1;var n=F();n>-1?(L(n),f(I)):f(I)}break;case W:if(!r[I.indexPosition.row-1][I.indexPosition.col]&&I.indexPosition.row>0){e.clearRect(I.position.x+R,I.position.y+R,50,50),I.position.y-=80,I.indexPosition.row-=1;var i=F();i>-1?(L(i),f(I)):f(I)}break;case C:if(!r[I.indexPosition.row][I.indexPosition.col+1]&&I.indexPosition.col<r[I.indexPosition.row].length-1){e.clearRect(I.position.x+R,I.position.y+R,50,50),I.position.x+=80,I.indexPosition.col+=1;var t=F();t>-1?(L(t),f(I)):f(I)}break;case E:if(!r[I.indexPosition.row+1][I.indexPosition.col]&&I.indexPosition.row<r.length-1){e.clearRect(I.position.x+R,I.position.y+R,50,50),I.position.y+=80,I.indexPosition.row+=1;var a=F();a>-1?(L(a),f(I)):f(I)}}}))}]);
//# sourceMappingURL=bundle.js.map