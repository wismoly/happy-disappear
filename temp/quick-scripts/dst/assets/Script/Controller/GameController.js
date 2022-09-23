
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29udHJvbGxlci9HYW1lQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdyaWQiLCJ0eXBlIiwiTm9kZSIsImF1ZGlvQnV0dG9uIiwiYXVkaW9Tb3VyY2UiLCJBdWRpb1NvdXJjZSIsIm9uTG9hZCIsIm5vZGUiLCJwYXJlbnQiLCJnZXRDaGlsZEJ5TmFtZSIsIm9uIiwiY2FsbGJhY2siLCJnYW1lTW9kZWwiLCJHYW1lTW9kZWwiLCJpbml0IiwiZ3JpZFNjcmlwdCIsImdldENvbXBvbmVudCIsInNldENvbnRyb2xsZXIiLCJpbml0V2l0aENlbGxNb2RlbHMiLCJnZXRDZWxscyIsImZpbmQiLCJfY29tcG9uZW50cyIsImF1ZGlvIiwic3RhdGUiLCJfc3RhdGUiLCJwYXVzZSIsInBsYXkiLCJzZWxlY3RDZWxsIiwicG9zIiwiY2xlYW5DbWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFFUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLElBQUksRUFBRTtBQUNKLGlCQUFTLElBREw7QUFFSkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkwsS0FESTtBQUtWQyxJQUFBQSxXQUFXLEVBQUU7QUFDWCxpQkFBUyxJQURFO0FBRVhGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZFLEtBTEg7QUFTVkUsSUFBQUEsV0FBVyxFQUFFO0FBQ1hILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUztBQURFO0FBVEgsR0FGTDtBQWVQO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNsQixRQUFJSCxXQUFXLEdBQUcsS0FBS0ksSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxjQUFqQixDQUFnQyxhQUFoQyxDQUFsQjtBQUNBTixJQUFBQSxXQUFXLENBQUNPLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtDLFFBQTdCLEVBQXVDLElBQXZDO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixFQUFqQjtBQUNBLFNBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQixDQUFwQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxLQUFLZixJQUFMLENBQVVnQixZQUFWLENBQXVCLFVBQXZCLENBQWpCO0FBQ0FELElBQUFBLFVBQVUsQ0FBQ0UsYUFBWCxDQUF5QixJQUF6QjtBQUNBRixJQUFBQSxVQUFVLENBQUNHLGtCQUFYLENBQThCLEtBQUtOLFNBQUwsQ0FBZU8sUUFBZixFQUE5QjtBQUNBLFNBQUtmLFdBQUwsR0FBbUJSLEVBQUUsQ0FBQ3dCLElBQUgsQ0FBUSxrQkFBUixFQUE0QkMsV0FBNUIsQ0FBd0MsQ0FBeEMsRUFBMkNDLEtBQTlEO0FBQ0QsR0F6Qk07QUEyQlBYLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNwQixRQUFJWSxLQUFLLEdBQUcsS0FBS25CLFdBQUwsQ0FBaUJvQixNQUE3QjtBQUNBRCxJQUFBQSxLQUFLLEtBQUssQ0FBVixHQUFjLEtBQUtuQixXQUFMLENBQWlCcUIsS0FBakIsRUFBZCxHQUF5QyxLQUFLckIsV0FBTCxDQUFpQnNCLElBQWpCLEVBQXpDO0FBQ0EsMkJBQU1ILEtBQUssS0FBSyxDQUFWLEdBQWMsVUFBZCxHQUEyQixVQUFqQztBQUNELEdBL0JNO0FBaUNQSSxFQUFBQSxVQUFVLEVBQUUsb0JBQVVDLEdBQVYsRUFBZTtBQUN6QixXQUFPLEtBQUtoQixTQUFMLENBQWVlLFVBQWYsQ0FBMEJDLEdBQTFCLENBQVA7QUFDRCxHQW5DTTtBQW9DUEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFZO0FBQ3BCLFNBQUtqQixTQUFMLENBQWVpQixRQUFmO0FBQ0Q7QUF0Q00sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVNb2RlbCBmcm9tIFwiLi4vTW9kZWwvR2FtZU1vZGVsXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vVXRpbHMvVG9hc3QnO1xuXG5jYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgcHJvcGVydGllczoge1xuICAgIGdyaWQ6IHtcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgfSxcbiAgICBhdWRpb0J1dHRvbjoge1xuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICB9LFxuICAgIGF1ZGlvU291cmNlOiB7XG4gICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZVxuICAgIH1cbiAgfSxcbiAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgIGxldCBhdWRpb0J1dHRvbiA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoJ2F1ZGlvQnV0dG9uJylcbiAgICBhdWRpb0J1dHRvbi5vbignY2xpY2snLCB0aGlzLmNhbGxiYWNrLCB0aGlzKVxuICAgIHRoaXMuZ2FtZU1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuICAgIHRoaXMuZ2FtZU1vZGVsLmluaXQoNCk7XG4gICAgdmFyIGdyaWRTY3JpcHQgPSB0aGlzLmdyaWQuZ2V0Q29tcG9uZW50KFwiR3JpZFZpZXdcIik7XG4gICAgZ3JpZFNjcmlwdC5zZXRDb250cm9sbGVyKHRoaXMpO1xuICAgIGdyaWRTY3JpcHQuaW5pdFdpdGhDZWxsTW9kZWxzKHRoaXMuZ2FtZU1vZGVsLmdldENlbGxzKCkpO1xuICAgIHRoaXMuYXVkaW9Tb3VyY2UgPSBjYy5maW5kKCdDYW52YXMvR2FtZVNjZW5lJykuX2NvbXBvbmVudHNbMV0uYXVkaW87XG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLmF1ZGlvU291cmNlLl9zdGF0ZTtcbiAgICBzdGF0ZSA9PT0gMSA/IHRoaXMuYXVkaW9Tb3VyY2UucGF1c2UoKSA6IHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpXG4gICAgVG9hc3Qoc3RhdGUgPT09IDEgPyAn5YWz6Zet6IOM5pmv6Z+z5LmQ8J+OtScgOiAn5omT5byA6IOM5pmv6Z+z5LmQ8J+OtScgKVxuICB9LFxuXG4gIHNlbGVjdENlbGw6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lTW9kZWwuc2VsZWN0Q2VsbChwb3MpO1xuICB9LFxuICBjbGVhbkNtZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2FtZU1vZGVsLmNsZWFuQ21kKCk7XG4gIH1cbn0pO1xuIl19