
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/View/EffectLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e925myn0dIjqdao1TpipF9', 'EffectLayer');
// Script/View/EffectLayer.js

"use strict";

var _ConstValue = require("../Model/ConstValue");

var _AudioUtils = _interopRequireDefault(require("../Utils/AudioUtils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    bombWhite: {
      "default": null,
      type: cc.Prefab
    },
    crushEffect: {
      "default": null,
      type: cc.Prefab
    },
    audioUtils: {
      type: _AudioUtils["default"],
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  playEffects: function playEffects(effectQueue) {
    if (!effectQueue || effectQueue.length <= 0) {
      return;
    }

    var soundMap = {}; //某一时刻，某一种声音是否播放过的标记，防止重复播放

    effectQueue.forEach(function (cmd) {
      var delayTime = cc.delayTime(cmd.playTime);
      var callFunc = cc.callFunc(function () {
        var instantEffect = null;
        var animation = null;

        if (cmd.action == "crush") {
          instantEffect = cc.instantiate(this.crushEffect);
          animation = instantEffect.getComponent(cc.Animation);
          animation.play("effect");
          !soundMap["crush" + cmd.playTime] && this.audioUtils.playEliminate(cmd.step);
          soundMap["crush" + cmd.playTime] = true;
        } else if (cmd.action == "rowBomb") {
          instantEffect = cc.instantiate(this.bombWhite);
          animation = instantEffect.getComponent(cc.Animation);
          animation.play("effect_line");
        } else if (cmd.action == "colBomb") {
          instantEffect = cc.instantiate(this.bombWhite);
          animation = instantEffect.getComponent(cc.Animation);
          animation.play("effect_col");
        }

        instantEffect.x = _ConstValue.CELL_WIDTH * (cmd.pos.x - 0.5);
        instantEffect.y = _ConstValue.CELL_WIDTH * (cmd.pos.y - 0.5);
        instantEffect.parent = this.node;
        animation.on("finished", function () {
          instantEffect.destroy();
        }, this);
      }, this);
      this.node.runAction(cc.sequence(delayTime, callFunc));
    }, this);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVmlldy9FZmZlY3RMYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJvbWJXaGl0ZSIsInR5cGUiLCJQcmVmYWIiLCJjcnVzaEVmZmVjdCIsImF1ZGlvVXRpbHMiLCJBdWRpb1V0aWxzIiwib25Mb2FkIiwicGxheUVmZmVjdHMiLCJlZmZlY3RRdWV1ZSIsImxlbmd0aCIsInNvdW5kTWFwIiwiZm9yRWFjaCIsImNtZCIsImRlbGF5VGltZSIsInBsYXlUaW1lIiwiY2FsbEZ1bmMiLCJpbnN0YW50RWZmZWN0IiwiYW5pbWF0aW9uIiwiYWN0aW9uIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJBbmltYXRpb24iLCJwbGF5IiwicGxheUVsaW1pbmF0ZSIsInN0ZXAiLCJ4IiwiQ0VMTF9XSURUSCIsInBvcyIsInkiLCJwYXJlbnQiLCJub2RlIiwib24iLCJkZXN0cm95IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQVhGO0FBZVJDLElBQUFBLFdBQVcsRUFBQztBQUNSLGlCQUFTLElBREQ7QUFFUkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FmSjtBQW1CUkUsSUFBQUEsVUFBVSxFQUFDO0FBQ1BILE1BQUFBLElBQUksRUFBRUksc0JBREM7QUFFUCxpQkFBUztBQUZGO0FBbkJILEdBSFA7QUE0Qkw7QUFDQUMsRUFB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e0NFTExfV0lEVEh9IGZyb20gJy4uL01vZGVsL0NvbnN0VmFsdWUnO1xuXG5pbXBvcnQgQXVkaW9VdGlscyBmcm9tIFwiLi4vVXRpbHMvQXVkaW9VdGlsc1wiO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgYm9tYldoaXRlOntcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgY3J1c2hFZmZlY3Q6e1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBhdWRpb1V0aWxzOntcbiAgICAgICAgICAgIHR5cGU6IEF1ZGlvVXRpbHMsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9LFxuICAgIHBsYXlFZmZlY3RzOiBmdW5jdGlvbihlZmZlY3RRdWV1ZSl7XG4gICAgICAgIGlmKCFlZmZlY3RRdWV1ZSB8fCBlZmZlY3RRdWV1ZS5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzb3VuZE1hcCA9IHt9OyAvL+afkOS4gOaXtuWIu++8jOafkOS4gOenjeWjsOmfs+aYr+WQpuaSreaUvui/h+eahOagh+iusO+8jOmYsuatoumHjeWkjeaSreaUvlxuICAgICAgICBlZmZlY3RRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGNtZCl7XG4gICAgICAgICAgICBsZXQgZGVsYXlUaW1lID0gY2MuZGVsYXlUaW1lKGNtZC5wbGF5VGltZSk7XG4gICAgICAgICAgICBsZXQgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBpbnN0YW50RWZmZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZihjbWQuYWN0aW9uID09IFwiY3J1c2hcIil7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbnRFZmZlY3QgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNydXNoRWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uICA9IGluc3RhbnRFZmZlY3QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KFwiZWZmZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAhc291bmRNYXBbXCJjcnVzaFwiICsgY21kLnBsYXlUaW1lXSAmJiB0aGlzLmF1ZGlvVXRpbHMucGxheUVsaW1pbmF0ZShjbWQuc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIHNvdW5kTWFwW1wiY3J1c2hcIiArIGNtZC5wbGF5VGltZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNtZC5hY3Rpb24gPT0gXCJyb3dCb21iXCIpe1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW50RWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib21iV2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24gID0gaW5zdGFudEVmZmVjdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnBsYXkoXCJlZmZlY3RfbGluZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjbWQuYWN0aW9uID09IFwiY29sQm9tYlwiKXtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudEVmZmVjdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9tYldoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uICA9IGluc3RhbnRFZmZlY3QuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5wbGF5KFwiZWZmZWN0X2NvbFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbnN0YW50RWZmZWN0LnggPSBDRUxMX1dJRFRIICogKGNtZC5wb3MueCAtIDAuNSk7XG4gICAgICAgICAgICAgICAgaW5zdGFudEVmZmVjdC55ID0gQ0VMTF9XSURUSCAqIChjbWQucG9zLnkgLSAwLjUpO1xuICAgICAgICAgICAgICAgIGluc3RhbnRFZmZlY3QucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vbihcImZpbmlzaGVkXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFudEVmZmVjdC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZGVsYXlUaW1lLCBjYWxsRnVuYykpO1xuICAgICAgICB9LHRoaXMpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICAvLyB9LFxufSk7XG4iXX0=