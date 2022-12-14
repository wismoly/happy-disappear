"use strict";
cc._RF.push(module, 'fe151y+R2lFvas76dyah2Uf', 'AudioUtils');
// Script/Utils/AudioUtils.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    swap: {
      type: cc.AudioClip,
      "default": null
    },
    click: {
      type: cc.AudioClip,
      "default": null
    },
    eliminate: {
      type: [cc.AudioClip],
      "default": []
    },
    continuousMatch: {
      type: [cc.AudioClip],
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  playClick: function playClick() {
    cc.audioEngine.play(this.click, false, 1);
  },
  playSwap: function playSwap() {
    cc.audioEngine.play(this.swap, false, 1);
  },
  playEliminate: function playEliminate(step) {
    step = Math.min(this.eliminate.length - 1, step);
    cc.audioEngine.play(this.eliminate[step], false, 1);
  },
  playContinuousMatch: function playContinuousMatch(step) {
    console.log("step = ", step);
    step = Math.min(step, 11);

    if (step < 2) {
      return;
    }

    cc.audioEngine.play(this.continuousMatch[Math.floor(step / 2) - 1], false, 1);
  } // update (dt) {},

});

cc._RF.pop();