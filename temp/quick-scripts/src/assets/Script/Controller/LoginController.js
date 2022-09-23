"use strict";
cc._RF.push(module, '5f4845Bus5AQoZakK7KAXht', 'LoginController');
// Script/Controller/LoginController.js

"use strict";

var _AudioUtils = _interopRequireDefault(require("../Utils/AudioUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    loadingBar: {
      type: cc.ProgressBar,
      "default": null
    },
    loginButton: {
      type: cc.Button,
      "default": null
    },
    worldSceneBGM: {
      type: cc.AudioClip,
      "default": null
    }
  },
  onLoad: function onLoad() {
    this.gameSceneBGMAudioId = cc.audioEngine.play(this.worldSceneBGM, true, 1);
  },
  onLogin: function onLogin() {
    var _this = this;

    this.last = 0;
    this.loadingBar.node.active = true;
    this.loginButton.node.active = false;
    this.loadingBar.progress = 0;
    this.loadingBar.barSprite.fillRange = 0;

    cc.loader.onProgress = function (count, amount, item) {
      var progress = (count / amount).toFixed(2);

      if (progress > _this.loadingBar.barSprite.fillRange) {
        _this.loadingBar.barSprite.fillRange = count / amount;
      }
    };

    cc.director.preloadScene("Game", function () {
      this.loadingBar.node.active = false;
      this.loginButton.node.active = false; // cc.log("加载成功");

      cc.director.loadScene("Game");
    }.bind(this));
  },
  onDestroy: function onDestroy() {
    cc.audioEngine.stop(this.gameSceneBGMAudioId);
  }
});

cc._RF.pop();