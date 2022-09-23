"use strict";
cc._RF.push(module, '5ac64Iq16lBqrHZ0246FRcZ', 'GameController');
// Script/Controller/GameController.js

"use strict";

var _GameModel = _interopRequireDefault(require("../Model/GameModel"));

var _Toast = _interopRequireDefault(require("../Utils/Toast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    grid: {
      "default": null,
      type: cc.Node
    },
    audioButton: {
      "default": null,
      type: cc.Node
    },
    audioSource: {
      type: cc.AudioSource
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    var audioButton = this.node.parent.getChildByName('audioButton');
    audioButton.on('click', this.callback, this);
    this.gameModel = new _GameModel["default"]();
    this.gameModel.init(4);
    var gridScript = this.grid.getComponent("GridView");
    gridScript.setController(this);
    gridScript.initWithCellModels(this.gameModel.getCells());
    this.audioSource = cc.find('Canvas/GameScene')._components[1].audio;
  },
  callback: function callback() {
    var state = this.audioSource._state;
    state === 1 ? this.audioSource.pause() : this.audioSource.play();
    (0, _Toast["default"])(state === 1 ? '关闭背景音乐🎵' : '打开背景音乐🎵');
  },
  selectCell: function selectCell(pos) {
    return this.gameModel.selectCell(pos);
  },
  cleanCmd: function cleanCmd() {
    this.gameModel.cleanCmd();
  }
});

cc._RF.pop();