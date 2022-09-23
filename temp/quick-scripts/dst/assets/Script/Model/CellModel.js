
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/CellModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9kZWwvQ2VsbE1vZGVsLmpzIl0sIm5hbWVzIjpbIkNlbGxNb2RlbCIsInR5cGUiLCJzdGF0dXMiLCJDRUxMX1NUQVRVUyIsIkNPTU1PTiIsIngiLCJ5Iiwic3RhcnRYIiwic3RhcnRZIiwiY21kIiwiaXNEZWF0aCIsIm9iamVjQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbml0IiwiaXNFbXB0eSIsIkNFTExfVFlQRSIsIkVNUFRZIiwic2V0RW1wdHkiLCJzZXRYWSIsInNldFN0YXJ0WFkiLCJzZXRTdGF0dXMiLCJtb3ZlVG9BbmRCYWNrIiwicG9zIiwic3JjUG9zIiwiY2MiLCJ2MiIsInB1c2giLCJhY3Rpb24iLCJrZWVwVGltZSIsIkFOSVRJTUUiLCJUT1VDSF9NT1ZFIiwicGxheVRpbWUiLCJtb3ZlVG8iLCJ0b0RpZSIsIkRJRSIsInRvU2hha2UiLCJESUVfU0hBS0UiLCJzZXRWaXNpYmxlIiwiaXNWaXNpYmxlIiwibW92ZVRvQW5kRGllIiwiaXNCaXJkIiwiRyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFDcUJBO0FBQ25CLHVCQUFjO0FBQ1osU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLHdCQUFZQyxNQUExQjtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFBM0IsQ0FBbEI7QUFDRDs7OztTQUVEQyxPQUFBLGNBQUtkLElBQUwsRUFBVztBQUNULFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNE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QUFPLEtBQUt6QyxJQUFMLElBQWFnQixzQkFBVTBCLENBQTlCO0FBQ0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENFTExfVFlQRSwgQU5JVElNRSwgQ0VMTF9TVEFUVVMsIEdSSURfSEVJR0hUIH0gZnJvbSBcIi4vQ29uc3RWYWx1ZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLnN0YXR1cyA9IENFTExfU1RBVFVTLkNPTU1PTjtcbiAgICB0aGlzLnggPSAxO1xuICAgIHRoaXMueSA9IDE7XG4gICAgdGhpcy5zdGFydFggPSAxO1xuICAgIHRoaXMuc3RhcnRZID0gMTtcbiAgICB0aGlzLmNtZCA9IFtdO1xuICAgIHRoaXMuaXNEZWF0aCA9IGZhbHNlO1xuICAgIHRoaXMub2JqZWNDb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICB9XG5cbiAgaW5pdCh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBDRUxMX1RZUEUuRU1QVFk7XG4gIH1cblxuICBzZXRFbXB0eSgpIHtcbiAgICB0aGlzLnR5cGUgPSBDRUxMX1RZUEUuRU1QVFk7XG4gIH1cbiAgc2V0WFkoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHNldFN0YXJ0WFkoeCwgeSkge1xuICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICB0aGlzLnN0YXJ0WSA9IHk7XG4gIH1cblxuICBzZXRTdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICBtb3ZlVG9BbmRCYWNrKHBvcykge1xuICAgIHZhciBzcmNQb3MgPSBjYy52Mih0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5jbWQucHVzaCh7XG4gICAgICBhY3Rpb246IFwibW92ZVRvXCIsXG4gICAgICBrZWVwVGltZTogQU5JVElNRS5UT1VDSF9NT1ZFLFxuICAgICAgcGxheVRpbWU6IDAsXG4gICAgICBwb3M6IHBvc1xuICAgIH0pO1xuICAgIHRoaXMuY21kLnB1c2goe1xuICAgICAgYWN0aW9uOiBcIm1vdmVUb1wiLFxuICAgICAga2VlcFRpbWU6IEFOSVRJTUUuVE9VQ0hfTU9WRSxcbiAgICAgIHBsYXlUaW1lOiBBTklUSU1FLlRPVUNIX01PVkUsXG4gICAgICBwb3M6IHNyY1Bvc1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZVRvKHBvcywgcGxheVRpbWUpIHtcbiAgICB2YXIgc3JjUG9zID0gY2MudjIodGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuY21kLnB1c2goe1xuICAgICAgYWN0aW9uOiBcIm1vdmVUb1wiLFxuICAgICAga2VlcFRpbWU6IEFOSVRJTUUuVE9VQ0hfTU9WRSxcbiAgICAgIHBsYXlUaW1lOiBwbGF5VGltZSxcbiAgICAgIHBvczogcG9zXG4gICAgfSk7XG4gICAgdGhpcy54ID0gcG9zLng7XG4gICAgdGhpcy55ID0gcG9zLnk7XG4gIH1cblxuICB0b0RpZShwbGF5VGltZSkge1xuICAgIHRoaXMuY21kLnB1c2goe1xuICAgICAgYWN0aW9uOiBcInRvRGllXCIsXG4gICAgICBwbGF5VGltZTogcGxheVRpbWUsXG4gICAgICBrZWVwVGltZTogQU5JVElNRS5ESUVcbiAgICB9KTtcbiAgICB0aGlzLmlzRGVhdGggPSB0cnVlO1xuICB9XG5cbiAgdG9TaGFrZShwbGF5VGltZSkge1xuICAgIHRoaXMuY21kLnB1c2goe1xuICAgICAgYWN0aW9uOiBcInRvU2hha2VcIixcbiAgICAgIHBsYXlUaW1lOiBwbGF5VGltZSxcbiAgICAgIGtlZXBUaW1lOiBBTklUSU1FLkRJRV9TSEFLRVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmlzaWJsZShwbGF5VGltZSwgaXNWaXNpYmxlKSB7XG4gICAgdGhpcy5jbWQucHVzaCh7XG4gICAgICBhY3Rpb246IFwic2V0VmlzaWJsZVwiLFxuICAgICAgcGxheVRpbWU6IHBsYXlUaW1lLFxuICAgICAga2VlcFRpbWU6IDAsXG4gICAgICBpc1Zpc2libGU6IGlzVmlzaWJsZVxuICAgIH0pO1xuICB9XG5cbiAgbW92ZVRvQW5kRGllKHBvcykge1xuXG4gIH1cblxuICBpc0JpcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBDRUxMX1RZUEUuRztcbiAgfVxuXG59XG4iXX0=