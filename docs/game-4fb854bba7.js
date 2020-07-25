function PRELOAD(){"use strict";void 0,game.load.bitmapFont("default","./assets/font.png","./assets/font.xml")}function LOAD(){void 0,game.load.bitmapFont("blood","./assets/font_blood.png","./assets/font_blood.xml"),game.load.spritesheet("tileset","./assets/tileset.png",48,48),game.load.spritesheet("player","./assets/player.png",48,48),game.load.spritesheet("crate","./assets/crate.png",48,48),game.load.spritesheet("corps","./assets/corps.png",8,8),game.load.spritesheet("items","./assets/items.png",28,48),game.load.spritesheet("icons","./assets/icons.png",24,24),game.load.audio("dead","./assets/dead.ogg"),game.load.audio("step","./assets/step.ogg"),game.load.audio("jump","./assets/jump.ogg"),game.load.audio("level","./assets/level.ogg"),game.load.audio("menu1","./assets/menu1.ogg"),game.load.audio("menu2","./assets/menu2.ogg"),game.load.audio("pickup","./assets/pickup.ogg"),game.load.json("test","./levels/test.json"),game.load.json("menu","./levels/menu.json"),game.load.json("level1","./levels/level1.json"),game.load.json("level2","./levels/level2.json"),game.load.json("level3","./levels/level3.json"),game.load.json("level4","./levels/level4.json"),game.load.json("level5","./levels/level5.json"),game.load.json("level6","./levels/level6.json"),game.load.json("level7","./levels/level7.json"),game.load.json("level8","./levels/level8.json"),game.load.json("level9","./levels/level9.json"),game.load.json("level10","./levels/level10.json"),game.load.json("level11","./levels/level11.json"),game.load.json("level12","./levels/level12.json"),game.load.json("level13","./levels/level13.json"),game.load.json("level14","./levels/level14.json"),game.load.json("level15","./levels/level15.json"),this.loadBar=null,this.loadStart=function(){game.stage.backgroundColor=1118481,loadBar=game.add.graphics(0,0)},this.loadComplete=function(){game.state.start("menu")},this.fileComplete=function(e,t,a,n,o){void 0,loadBar.beginFill(16777215),loadBar.drawRect(.5*(game.width-game.width*e/100),.5*game.height-4,game.width*e/100,8),loadBar.endFill()},game.load.onLoadStart.add(loadStart,this),game.load.onFileComplete.add(fileComplete,this),game.load.onLoadComplete.add(loadComplete,this),game.load.start(),game.ext.load()}var UTILS=function(){"use strict";function e(e,t){localStorage.setItem(e,JSON.stringify(t))}function t(e){return JSON.parse(localStorage.getItem(e))||{level:0}}function a(e){localStorage.removeItem(e)}return{storage:{remove:a,set:e,get:t}}}();!function(e){"use strict";function t(e,t,a,n,o,i){return s=game.add.bitmapText(e,t,"default",a,CFG.bitmapText["default"].size),s.smoothed=!1,s.anchor.set(o?.5:0,.5),n?(s.inputEnabled=!0,s.events.onInputOver.add(function(){this.tint=CFG.color.green},s),s.events.onInputOut.add(function(){this.tint=16777215},s),s.events.onInputDown.add(function(){n()},s)):s.tint=6710886,s}function a(){u=game.cache.getJSON("menu"),game.world.setBounds(0,0,game.width,u.height*u.tileheight),u.layers.forEach(function(e){e.data.forEach(function(e,t){e&&(g=game.add.sprite(t%u.width*u.tilewidth,Math.floor(t/u.width)*u.tileheight,"tileset",e-1))})});for(var e=1;e<=CFG.levelsAmmount;e++)h=game.add.sprite(48*e-(e>4?192:0),e>4?192:48,"tileset",game.ext.progress.level<e?game.ext.tileLegend.spawn[0]-1:game.ext.tileLegend.exit[0]-1),(game.ext.progress.level>=e||1===e)&&(f.add(h),h.inputEnabled=!0,h.events.onInputDown.addOnce(d),h.ext={level:e},x=game.add.bitmapText(h.x+.5*h.width,h.y+8,"default",e+"",CFG.bitmapText["default"].size),x.smoothed=!1,x.anchor.set(.6,1),x.inputEnabled=!0,x.events.onInputDown.addOnce(d),x.ext={level:e},f.add(x));f.add(t(456,96,"back to menu",o,!0)),p=game.add.sprite(528,480,"player"),p.animations.add("panic",[9,10,9,11],16,!0),p.animations.play("panic"),p.scale.x=-1,game.camera.y=384}function n(){i(0,800)}function o(){i(384,400)}function i(e,t){game.add.tween(game.camera).to({y:e},t,"Quart.easeIn",!0)}function d(e){void 0,game.ext.currLvlIndex=e.ext.level,game.state.clearCurrentState(),game.state.start("level")}e.menu=function(){},e.menu.prototype={init:function(){void 0},preload:function(){},create:function(){f=game.add.group(),a(),c=game.add.graphics(0,0),c.beginFill(0),c.drawRect(0,0,game.width,game.world.height),c.endFill(),c.alpha=.4,m=[["select lvl",n],["walkthrough",function(){var e=window.open(CFG.walkthroughUrl,"_blank");e.focus()}],["credits",function(){game.state.clearCurrentState(),game.state.start("credits")}],["help",function(){game.state.clearCurrentState(),game.state.start("help")}]],game.ext.progress.level?m.unshift(["continue #"+game.ext.progress.level,function(){game.state.clearCurrentState(),game.ext.currLvlIndex=game.ext.progress.level,game.state.start("level")}],["new game",function(){game.state.clearCurrentState(),game.state.start("newgame")}]):m.unshift(["continue",null],["new game",function(){game.state.start("level")}]),m.map(function(e,a){t(10,608+a*CFG.bitmapText["default"].size*1.1,e[0],e[1],null,a)}),l=game.add.bitmapText(10,394,"default",CFG.name.replace("3","0"),3*CFG.bitmapText["default"].size),l.alpha=0,l.smoothed=!1,l.tint=CFG.color.green,l.ext={tween:game.add.tween(l).to({alpha:1},3e3,"Linear",!0)},game.sound.play("menu1",.8,!1).onStop.add(function(){game.sound.play("menu2",.8,!0)}),r=game.add.sprite(game.width-8,8,"icons"),r.smoothed=!1,r.anchor.set(1,0),r.inputEnabled=!0,r.frame=+game.sound.mute,r.fixedToCamera=!0,r.events.onInputDown.add(function(){game.sound.mute=!game.sound.mute,r.frame=+game.sound.mute}),game.world.bringToTop(f)},update:function(){},render:function(){}};var s,l,m,r,u,g,c,p,h,x,f}(STATES=STATES||{}),function(e){"use strict";e.newgame=function(){},e.newgame.prototype={init:function(){void 0},preload:function(){},create:function(){t=game.add.bitmapText(.5*game.width,.5*game.height,"default","starting new game will erase\nall saved progress data.\ndo you still want to do this?",1.5*CFG.bitmapText["default"].size),t.smoothed=!1,t.align="center",t.anchor.set(.5),[["yes",function(){game.ext.wipeProgress(),game.state.clearCurrentState(),game.state.start("level")}],["hell no!",function(){game.state.clearCurrentState(),game.state.start("menu")}]].map(function(e,n){a=game.add.bitmapText(.25*game.width+.5*game.width*n,t.y+t.height+20,"default",e[0],CFG.bitmapText["default"].size),a.anchor.set(.5,0),t.smoothed=!1,a.inputEnabled=!0,a.events.onInputDown.addOnce(function(){e[1]()}),a.events.onInputOver.add(function(){this.tint=CFG.color.green},a),a.events.onInputOut.add(function(){this.tint=16777215},a)})},update:function(){},render:function(){}};var t,a}(STATES=STATES||{}),function(e){"use strict";function t(e,t){return e>CFG.levelsAmmount?(game.state.clearCurrentState(),void game.state.start("win")):(A=game.cache.getJSON("level"+e),A.ext={spawn:{x:0,y:0},layers:{}},A.layers.forEach(function(e){A.ext.layers[e.name]=e}),game.world.setBounds(0,0,A.width*A.tilewidth,A.height*A.tileheight),k.width=game.world.width,k.height=game.world.height,A.ext.layers.back&&A.ext.layers.back.data.map(function(e,t){if(e)return D=h.create(t%A.width*A.tilewidth,Math.floor(t/A.width)*A.tileheight,"tileset",e-1),game.ext.tileLegend.spawn.indexOf(e)!==-1?(A.ext.spawn.x=t%A.width*A.tilewidth+.5*A.tilewidth,void(A.ext.spawn.y=Math.floor(t/A.width)*A.tileheight+.5*A.tileheight)):game.ext.tileLegend.ground.indexOf(e)!==-1?void(D.frame=Math.random()>.5?D.frame:game.rnd.pick(game.ext.tileLegend.groundRandom)-1):game.ext.tileLegend.empty.indexOf(e)!==-1&&Math.random()>.5?void(D.frame=game.rnd.pick(game.ext.tileLegend.emptyRandom)-1):void 0}),A.ext.layers.spikes&&A.ext.layers.spikes.data.map(function(e,t){0!==e&&(D=C.create(t%A.width*A.tilewidth,Math.floor(t/A.width)*A.tileheight,"tileset",e-1),D.body.allowGravity=!1,D.body.immovable=!0,D.body.setSize(40,40,4,4),D.name="spike")}),A.ext.layers.solid&&A.ext.layers.solid.data.map(function(e,t){0!==e&&(D=x.create(t%A.width*A.tilewidth,Math.floor(t/A.width)*A.tileheight,"tileset",e-1),D.body.allowGravity=!1,D.body.immovable=!0,D.name="solid")}),A.ext.layers.front&&A.ext.layers.front.data.map(function(e,t){0!==e&&(D=S.create(t%A.width*A.tilewidth,Math.floor(t/A.width)*A.tileheight,"tileset",e-1))}),A.ext.layers.destructable&&A.ext.layers.destructable.data.map(function(e,t){0!==e&&(D=T.create(t%A.width*A.tilewidth,Math.floor(t/A.width+1)*A.tileheight,"crate",e-1),D.body.allowGravity=!1,D.body.immovable=!0,D.anchor.set(0,1),D.name="crate",D.animations.add("dead",[1,2,3,4,5],20,!1))}),A.ext.layers.items&&A.ext.layers.items.objects.length&&A.ext.layers.items.objects.map(function(e){E=b.create(48*Math.floor((e.x+.5*e.width)/48)+.5*e.width,48*Math.ceil((e.y+.5*e.height)/48),"items",0),E.name="mutator",E.animations.add("idle",[0,1,2,3,4,5],8,!0),E.animations.play("idle"),E.anchor.set(.5,1),E.ext={onPickup:function(){game.sound.play("pickup",.5),F.ext.maxClones++,f.ext.update(),E.kill(),b.remove(E)}},E.body.immovable=!0,E.body.allowGravity=!1}),A.ext.layers.bloodTexts&&A.ext.layers.bloodTexts.objects.length&&A.ext.layers.bloodTexts.objects.map(function(e){e.name.split("\\n").map(function(t,a){j=game.add.bitmapText(Math.round(e.x),0,"blood",t.toUpperCase(),Math.round(Math.min(CFG.bitmapText.blood.size,e.height))),j.y=Math.round(e.y)+a*j.fontSize*.6,j.smoothed=!1,j.alpha=.6,j.tint=8912896,j.rotation=Phaser.Math.degToRad(Math.round(e.rotation)),w.add(j)})}),F.x=A.ext.spawn.x,F.y=A.ext.spawn.y,1===game.ext.currLvlIndex&&(F.ext.mana=F.ext.maxMana=0),f.ext.update(),L.ext.fadeOut(),A)}function a(e){e=e||400,game.sound.mute||game.add.tween(game.sound).to({volume:0},400,"Linear",!0).onComplete.addOnce(function(){game.sound.stopAll(),game.sound.volume=1}),game.time.events.add(e-400,function(){L.ext.fadeIn(function(){M.length=0,game.state.restart()})}).autoDestroy=!0}function n(){G.enabled=!1,game.ext.currLvlIndex++,game.ext.save(),a()}function o(e,t){var a;e.exists=!1;for(var n=0;n<12;n++)a=v.create(e.x,e.y,"corps",n%6),a.ext={random:(Math.round(400*Math.random())+800)*(Math.random()>.5?-1:1)},v.children.length>v.ext.maxFlesh&&(v.children[0].kill(),v.remove(v.children[0])),a.anchor.set(.5),a.body.bounce.x=.4,a.body.bounce.y=.5,a.body.mass=.3,a.body.velocity.y=-(200+Math.round(300*Math.random())),a.body.velocity.x=Math.round(300*Math.random())*(Math.random()>.5?-1:1),a.body.drag.x=100,a.body.angularVelocity=a.ext.random,a.body.angularDrag=Math.abs(a.ext.random);game.sound.play("dead",.3),e.alive&&e.kill(),y.remove(e),t&&t()}function i(){G.enabled=!1,o(F,function(){a(4e3)})}function d(){F.alive&&F.body.touching.down&&G.enabled&&(G.enabled=!1,l(F,function(){a(4e3)}))}function s(e){l(e,function(){var t,a=e.ext.explosionPower;t=Phaser.Math.distance(e.x,e.y,F.x,F.y),t<e.ext.explosionDistance&&(F.body.velocity.x=(e.x<F.x?1:-1)*a,F.body.velocity.y=(e.y<F.y?1:-1)*a*1.2),T.forEach(function(a){t=Phaser.Math.distance(e.x,e.y,a.x+.5*a.width,a.y-.5*a.height),a.body.immovable&&t<72&&(a.body.checkCollision.left=!1,a.body.checkCollision.right=!1,a.body.setSize(a.body.width,0),a.body.allowGravity=!0,a.body.immovable=!1,a.animations.play("dead"))}),t=null,a=null,f.ext.update()})}function l(e,t){M.push([game.time.time+game.time.slowMotion*(e.ext.explosionDelay||1e3),function(){o(e,t)}]),e.animations.play("jump"),game.time.events.add(300,function(){e.animations.play("panic")}).autoDestroy=!0}function m(){if(G.enabled&&F.ext.maxClones>y.filter(function(e){return"clone"===e.name}).list.length){var e=y.create(F.x,F.y,"player");e.name="clone",e.anchor.set(.5),e.scale.x=F.scale.x,y.ext.addAnimations(e),e.ext={explosionDistance:200,explosionPower:300,explosionDelay:1500},e.body.setSize(38,48),e.body.mass=.5,s(e),f.ext.update()}}function r(){F.body.touching.down&&game.time.time>F.ext.jumpTimer&&(F.body.velocity.y=-500,F.ext.jumpTimer=game.time.time+100,game.sound.play("jump",.3),F.ext.animation="jump")}function u(e){return F.ext.mana>0&&e.isDown?(1===e.repeats&&(F.ext.updateAnimations(),c(3),g(3)),F.ext.mana--,void f.ext.mana.update()):(F.ext.updateAnimations(),c(1),void g(1))}function g(e){(e!==game.time.slowMotion||M.length)&&(game.time.slowMotion=e,F.ext.speed=F.ext._speed*e),F.animations.currentAnim.speed=F.animations.currentAnim._speed/e,game.sound._sounds.forEach(function(t){t._sound.playbackRate.value!==e&&(t._sound.playbackRate.value=1/e)})}function c(e){M.forEach(function(t){t[0]=game.time.time+(t[0]-game.time.time)*e/game.time.slowMotion})}function p(){game.ext.progress.skips>0&&(game.ext.progress.skips--,game.ext.currLvlIndex++,game.ext.save(),a())}e.level=function(){},e.level.prototype={init:function(){void 0},preload:function(){},create:function(){game.physics.arcade.gravity.y=1200,k=game.add.tileSprite(0,0,game.world.width,game.world.height,"tileset",0),h=game.add.group(),w=game.add.group(),y=game.add.physicsGroup(Phaser.Physics.ARCADE),y.ext={addAnimations:function(e){"player"!==e.name&&"clone"!==e.name||(e.animations.add("idle",[0,1],1,!0)._speed=1,e.animations.add("run",[2,3,4,5],8,!0)._speed=8,e.animations.add("jump",[6,7,8],16,!1)._speed=16,e.animations.add("panic",[9,10,9,11],16,!0)._speed=16)}},b=game.add.physicsGroup(Phaser.Physics.ARCADE),v=game.add.physicsGroup(Phaser.Physics.ARCADE),v.ext={maxFlesh:1e3},T=game.add.physicsGroup(Phaser.Physics.ARCADE),C=game.add.physicsGroup(Phaser.Physics.ARCADE),x=game.add.physicsGroup(Phaser.Physics.ARCADE),S=game.add.group(),F=y.create(0,0,"player"),F.name="player",F.ext={_speed:180,speed:180,jumpTimer:0,stepTimer:0,isOnTile:0,isOnTileTimer:0,maxClones:0,maxMana:100,mana:100,updateAnimations:function(){for(var e in F.animations._anims)F.animations._anims[e].speed=F.animations._anims[e]._speed}},y.ext.addAnimations(F),F.anchor.set(.5),F.checkWorldBounds=!0,F.body.bounce.y=.2,F.body.setSize(40,44),F.events.onOutOfBounds.add(i),game.camera.follow(F),G={cursors:game.input.keyboard.createCursorKeys(),k:game.input.keyboard.addKey(Phaser.KeyCode.K),c:game.input.keyboard.addKey(Phaser.KeyCode.C),x:game.input.keyboard.addKey(Phaser.KeyCode.X),space:game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR),esc:game.input.keyboard.addKey(Phaser.KeyCode.ESC),enabled:!0},G.k.onDown.add(d,this),G.c.onDown.add(m,this),G.x.onUp.add(u,this),G.x.onHoldCallback=u,G.space.onDown.add(r,this),G.esc.onDown.add(function(){game.state.clearCurrentState(),game.state.start("menu")},this),f=game.add.group(),f.fixedToCamera=!0,f.smoothed=!1,f.ext={update:function(){f.ext.level.text="Level: "+game.ext.currLvlIndex,f.ext.clones.ext.update(),f.ext.mana.update()}},f.ext.clones=game.add.bitmapText(8,8,"default","",CFG.bitmapText["default"].size),f.ext.clones.smoothed=!1,f.ext.clones.ext={update:function(){f.ext.clones.text=F.ext.maxClones?"Available clones: "+(F.ext.maxClones-y.filter(function(e){return"clone"===e.name}).list.length):""}},f.add(f.ext.clones),f.ext.level=game.add.bitmapText(game.camera.width-8,8,"default","",CFG.bitmapText["default"].size),f.ext.level.smoothed=!1,f.ext.level.anchor.set(1,0),f.ext.level.inputEnabled=!0,f.ext.level.events.onInputDown.add(p,this),f.add(f.ext.level),f.ext.skip=game.add.bitmapText(game.camera.width-8,32,"default","skip level x "+game.ext.progress.skips,.55*CFG.bitmapText["default"].size),f.ext.skip.smoothed=!1,f.ext.skip.anchor.set(1,0),f.ext.skip.inputEnabled=!0,f.ext.skip.events.onInputDown.add(p,this),f.add(f.ext.skip),f.ext.unpause=game.add.bitmapText(.5*game.width,.5*game.height,"default","click anywhere to resume game",CFG.bitmapText["default"].size),f.ext.unpause.fixedToCamera=!0,f.ext.unpause.smoothed=!1,f.ext.unpause.exists=0,f.ext.unpause.anchor.set(.5),f.ext.pause=game.add.sprite(8,game.height-8,"icons"),f.ext.pause.events.onInputDown.add(function(){game.paused=!0}),f.ext.pause.inputEnabled=!0,f.ext.pause.anchor.set(0,1),f.ext.pause.frame=2,f.add(f.ext.pause),f.ext.mute=game.add.sprite(42,game.height-8,"icons"),f.ext.mute.anchor.set(0,1),f.ext.mute.inputEnabled=!0,f.ext.mute.frame=+game.sound.mute,f.ext.mute.events.onInputDown.add(function(){game.sound.mute=!game.sound.mute,f.ext.mute.frame=+game.sound.mute}),f.add(f.ext.mute),f.ext.home=game.add.sprite(76,game.height-8,"icons"),f.ext.home.frame=4,f.ext.home.anchor.set(0,1),f.ext.home.inputEnabled=!0,f.ext.home.events.onInputDown.add(function(){game.state.clearCurrentState(),game.state.start("menu")}),f.add(f.ext.home),f.ext.mana={bar:game.add.graphics(.5*game.width,game.height-8),update:function(){f.ext.mana.bar.clear(),f.ext.mana.bar.beginFill(CFG.color.mana),f.ext.mana.bar.drawRect(-8,-8,.5*game.width*F.ext.mana/F.ext.maxMana,8),f.ext.mana.bar.endFill()}},f.ext.mana.bar.lineWidth=0,f.add(f.ext.mana.bar),L=game.add.graphics(0,0),L.fixedToCamera=!0,L.ext={draw:function(e){L.ext.draw._t=L.beginFill(0),L.drawRect(0,0,game.width,game.height),L.endFill(),delete L.ext.draw._t,e&&e()},fadeOut:function(e,t){t=t||0,L.ext.fadeOut._t=game.add.tween(L).to({alpha:t},1e3,"Linear",!0).onComplete.add(function(){delete L.ext.fadeOut._t,e&&e()})},fadeIn:function(e){L.ext.fadeIn._t=game.add.tween(L).to({alpha:1},400,"Linear",!0).onComplete.add(function(){delete L.ext.fadeIn._t,e&&e()})}},L.ext.draw(),game.sound.play("level",.6,!0),game.world.bringToTop(f.ext.unpause),game.onPause.add(function(){L.alpha=.5,f.ext.pause.frame=3,f.ext.unpause.exists=1}),game.onResume.add(function(){L.alpha=0,f.ext.pause.frame=2,f.ext.unpause.exists=0}),game.input.onDown.add(function(e){game.paused&&(game.paused=!1)}),game.ext.currLvlIndex=game.ext.currLvlIndex||game.ext.progress.level||1,game.time.events.add(1,function(){A=t(game.ext.currLvlIndex)}).autoDestroy=!0},update:function(){if(game.ext.tick++,game.physics.arcade.collide([y,v,T],x),game.physics.arcade.collide([y,T],y),game.physics.arcade.overlap(F,b,function(e,t){t.exists=!1,t.ext.onPickup()},null,this),F.body.velocity.x=0,G.enabled){switch(F.ext.animation=F.body.touching.down?"idle":"jump",F.body.touching.down&&F.body.speed>1100&&i(),game.physics.arcade.overlap(F,C,function(e,t){i()},null,this),G.cursors.left.isDown&&(F.ext.animation=F.body.touching.down?"run":"jump",F.scale.x=-1,F.body.touching.left||(F.body.velocity.x=-F.ext.speed/game.time.slowMotion)),G.cursors.right.isDown&&(F.ext.animation=F.body.touching.down?"run":"jump",F.scale.x=1,F.body.touching.right||(F.body.velocity.x=F.ext.speed/game.time.slowMotion)),G.cursors.up.isDown&&r(),A&&A.ext.layers.back&&game.ext.tick%4===0&&(F.ext.isOnTile=A.ext.layers.back.data[Math.floor(F.y/A.tileheight)*A.width+Math.floor(F.x/A.tilewidth)]),G.enabled&&game.ext.tileLegend.exit.indexOf(F.ext.isOnTile)!==-1&&n(),"jump"!==F.ext.animation&&game.physics.arcade.forceX&&(game.physics.arcade.forceX=!1),"jump"!==F.ext.animation||game.physics.arcade.forceX||(game.physics.arcade.forceX=!0),F.ext.animation){default:break;case"run":game.time.time>F.ext.stepTimer&&(F.ext.stepTimer=game.time.time+400,game.sound.play("step",.3))}F.animations.currentAnim.name!==F.ext.animation&&F.animations.play(F.ext.animation)}game.ext.tick%4===0&&M.forEach(function(e,t){e[0]<=game.time.time&&M.splice(t,1)[0][1]()})},render:function(){}};var h,x,f,y,b,v,w,T,C,S,k,A,F,G,j,E,D,L,M=[]}(STATES=STATES||{}),function(e){"use strict";function t(){a=game.add.bitmapText(.5*game.width,10,"default","game made by",CFG.bitmapText["default"].size),a.smoothed=!1,a.anchor.set(.5,0),a=game.add.bitmapText(.5*game.width,50,"default","e9aru",2*CFG.bitmapText["default"].size),a.smoothed=!1,a.tint=CFG.color.green,a.anchor.set(.5,0),a=game.add.bitmapText(game.width-8,140,"default","e9aru.io",CFG.bitmapText["default"].size),a.smoothed=!1,a.tint=10066329,a.anchor.set(1,1),a=game.add.bitmapText(game.width-8,170,"default","@e9aru",CFG.bitmapText["default"].size),a.smoothed=!1,a.tint=10066329,a.anchor.set(1,1),a=game.add.bitmapText(.5*game.width,220,"default","Thank you\nfor playing",3.4*CFG.bitmapText["default"].size),a.smoothed=!1,a.anchor.set(.5,0),a.align="center",a.tint=16724838,a=game.add.bitmapText(.5*game.width,game.height-10,"default","[ click anywhere to go back ]",CFG.bitmapText["default"].size),a.smoothed=!1,a.anchor.set(.5,1),a.tint=6710886}e.credits=function(){},e.credits.prototype={init:function(){void 0},preload:function(){},create:function(){game.input.onDown.add(function(){game.state.clearCurrentState(),game.state.start("menu")}),t()},update:function(){},render:function(){}};var a}(STATES=STATES||{}),function(e){"use strict";function t(){a=game.add.bitmapText(10,10,"default","help egaru to find way out of scary dunjon\nby avoiding traps and finding exit doors.\nuse egaru powers, he can clone himself and\ndo slow motion.",CFG.bitmapText["default"].size),a.smoothed=!1,a.anchor.set(0,0),a=game.add.bitmapText(.5*game.width,180,"default","controls",2*CFG.bitmapText["default"].size),a.anchor.set(.5,0),a.smoothed=!1,a.align="center",a.tint=3368703,a=game.add.bitmapText(.5*game.width-20,240,"default","arrow keys\nup / spacebar\nesc\nc\nk\nx",CFG.bitmapText["default"].size),a.smoothed=!1,a.align="right",a.tint=11193599,a.anchor.set(1,0),a=game.add.bitmapText(.5*game.width+20,240,"default","move\njump\nback to menu\nclone\nsuicide\nslow motion",CFG.bitmapText["default"].size),a.smoothed=!1,a=game.add.bitmapText(.5*game.width,game.height-10,"default","[ click anywhere to go back ]",CFG.bitmapText["default"].size),a.smoothed=!1,a.anchor.set(.5,1),a.tint=6710886}e.help=function(){},e.help.prototype={init:function(){void 0},preload:function(){},create:function(){game.input.onDown.add(function(){game.state.clearCurrentState(),game.state.start("menu")}),t()},update:function(){},render:function(){}};var a}(STATES=STATES||{}),function(e){"use strict";function t(){n=game.add.bitmapText(.5*game.width,.25*game.height,"default","game over",2.5*CFG.bitmapText["default"].size),n.smoothed=!1,n.tint=6710886,n.anchor.set(.5),n=game.add.bitmapText(.5*game.width,.5*game.height,"default","congratulations",2.5*CFG.bitmapText["default"].size),n.smoothed=!1,n.tint=16768307,n.anchor.set(.5),n=game.add.bitmapText(.5*game.width,.6*game.height,"default","you did it!",CFG.bitmapText["default"].size),n.smoothed=!1,n.anchor.set(.5,0),n=game.add.bitmapText(.5*game.width,.6*game.height+20,"default","egaru finally found a way out :)",CFG.bitmapText["default"].size),n.smoothed=!1,n.anchor.set(.5,0)}function a(){game.state.clearCurrentState(),game.state.start("credits")}e.win=function(){},e.win.prototype={init:function(){void 0},preload:function(){},create:function(){t(),game.input.onDown.add(function(){game.state.clearCurrentState(),game.state.start("credits")}),game.time.events.add(4e3,a).autoDestroy=!0},update:function(){},render:function(){}};var n}(STATES=STATES||{});var STATES=STATES||{},CFG={},game;!function(e){"use strict";function t(){game.ext={tick:0,currLvlIndex:1,progress:{},save:function(){game.ext.progress={level:Math.max(game.ext.progress.level,game.ext.currLvlIndex),skips:game.ext.progress.skips},UTILS.storage.set(CFG.storage.name,game.ext.progress)},load:function(){game.ext.progress=UTILS.storage.get(CFG.storage.name),"undefined"==typeof game.ext.progress.skips&&(game.ext.progress.skips=CFG.skipAmmount)},wipeProgress:function(){UTILS.storage.remove(CFG.storage.name),game.ext.currLvlIndex=1,game.ext.skips=CFG.skipAmmount,game.ext.progress={},game.ext.load()},tileLegend:{empty:[1],emptyRandom:[37,38,39],spawn:[2],exit:[3],ground:[4],groundRandom:[4,34,35,36]}},game.time.desiredFps=55,game.time.advancedTiming=!0,game.canvas.oncontextmenu=function(e){e.preventDefault()},game.state.onStateChange.add(function(){game.sound.stopAll()}),game.state.add("credits",e.credits),game.state.add("level",e.level),game.state.add("menu",e.menu),game.state.add("newgame",e.newgame),game.state.add("help",e.help),game.state.add("win",e.win),LOAD()}CFG={walkthroughUrl:"https://www.youtube.com/playlist?list=PL8StVPlqTqItD9l1czGU0hiON36HlxgLG",skipAmmount:2,levelsAmmount:15,color:{green:2540288,red:16711680,mana:6724061},name:"egaru",storage:{name:"heroicode.egaru"},bitmapText:{"default":{size:24},blood:{size:96}}},game=new Phaser.Game(624,480,Phaser.AUTO,"",{preload:PRELOAD,create:t})}(STATES=STATES||{});