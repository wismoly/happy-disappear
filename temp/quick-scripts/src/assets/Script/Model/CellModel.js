"use strict";
cc._RF.push(module, 'dae88GCevBMaK7lQqhume8G', 'CellModel');
// Script/Model/CellModel.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _ConstValue = require("./ConstValue");

var CellModel = /*#__PURE__*/function () {
  function CellModel() {
    this.type = null;
    this.status = _ConstValue.CELL_STATUS.COMMON;
    this.x = 1;
    this.y = 1;
    this.startX = 1;
    this.startY = 1;
    this.cmd = [];
    this.isDeath = false;
    this.objecCount = Math.floor(Math.random() * 1000);
  }

  var _proto = CellModel.prototype;

  _proto.init = function init(type) {
    this.type = type;
  };

  _proto.isEmpty = function isEmpty() {
    return this.type == _ConstValue.CELL_TYPE.EMPTY;
  };

  _proto.setEmpty = function setEmpty() {
    this.type = _ConstValue.CELL_TYPE.EMPTY;
  };

  _proto.setXY = function setXY(x, y) {
    this.x = x;
    this.y = y;
  };

  _proto.setStartXY = function setStartXY(x, y) {
    this.startX = x;
    this.startY = y;
  };

  _proto.setStatus = function setStatus(status) {
    this.status = status;
  };

  _proto.moveToAndBack = function moveToAndBack(pos) {
    var srcPos = cc.v2(this.x, this.y);
    this.cmd.push({
      action: "moveTo",
      keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
      playTime: 0,
      pos: pos
    });
    this.cmd.push({
      action: "moveTo",
      keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
      playTime: _ConstValue.ANITIME.TOUCH_MOVE,
      pos: srcPos
    });
  };

  _proto.moveTo = function moveTo(pos, playTime) {
    var srcPos = cc.v2(this.x, this.y);
    this.cmd.push({
      action: "moveTo",
      keepTime: _ConstValue.ANITIME.TOUCH_MOVE,
      playTime: playTime,
      pos: pos
    });
    this.x = pos.x;
    this.y = pos.y;
  };

  _proto.toDie = function toDie(playTime) {
    this.cmd.push({
      action: "toDie",
      playTime: playTime,
      keepTime: _ConstValue.ANITIME.DIE
    });
    this.isDeath = true;
  };

  _proto.toShake = function toShake(playTime) {
    this.cmd.push({
      action: "toShake",
      playTime: playTime,
      keepTime: _ConstValue.ANITIME.DIE_SHAKE
    });
  };

  _proto.setVisible = function setVisible(playTime, isVisible) {
    this.cmd.push({
      action: "setVisible",
      playTime: playTime,
      keepTime: 0,
      isVisible: isVisible
    });
  };

  _proto.moveToAndDie = function moveToAndDie(pos) {};

  _proto.isBird = function isBird() {
    return this.type == _ConstValue.CELL_TYPE.G;
  };

  return CellModel;
}();

exports["default"] = CellModel;
module.exports = exports["default"];

cc._RF.pop();