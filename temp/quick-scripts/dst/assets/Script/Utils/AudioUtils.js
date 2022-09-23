
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils/AudioUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVXRpbHMvQXVkaW9VdGlscy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN3YXAiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiY2xpY2siLCJlbGltaW5hdGUiLCJjb250aW51b3VzTWF0Y2giLCJvbkxvYWQiLCJzdGFydCIsInBsYXlDbGljayIsImF1ZGlvRW5naW5lIiwicGxheSIsInBsYXlTd2FwIiwicGxheUVsaW1pbmF0ZSIsInN0ZXAiLCJNYXRoIiwibWluIiwibGVuZ3RoIiwicGxheUNvbnRpbnVvdXNNYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRTtBQUNGQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sU0FEUDtBQUVGLGlCQUFTO0FBRlAsS0FERTtBQUtSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBRE47QUFFSCxpQkFBUztBQUZOLEtBTEM7QUFTUkUsSUFBQUEsU0FBUyxFQUFDO0FBQ05ILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLFNBQUosQ0FEQTtBQUVOLGlCQUFTO0FBRkgsS0FURjtBQWFSRyxJQUFBQSxlQUFlLEVBQUM7QUFDWkosTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sU0FBSixDQURNO0FBRVosaUJBQVM7QUFGRztBQWJSLEdBSFA7QUFzQkw7QUFFQUksRUFBQUEsTUF4Qkssb0JBd0JLLENBRVQsQ0ExQkk7QUE0QkxDLEVBQUFBLEtBNUJLLG1CQTRCSSxDQUVSLENBOUJJO0FBK0JMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVU7QUFDakJaLElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtQLEtBQXpCLEVBQWdDLEtBQWhDLEVBQXVDLENBQXZDO0FBQ0gsR0FqQ0k7QUFrQ0xRLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQmYsSUFBQUEsRUFBRSxDQUFDYSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS1YsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsQ0FBdEM7QUFDSCxHQXBDSTtBQXFDTFksRUFBQUEsYUFBYSxFQUFFLHVCQUFTQyxJQUFULEVBQWM7QUFDekJBLElBQUFBLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS1gsU0FBTCxDQUFlWSxNQUFmLEdBQXdCLENBQWpDLEVBQW9DSCxJQUFwQyxDQUFQO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLTixTQUFMLENBQWVTLElBQWYsQ0FBcEIsRUFBMEMsS0FBMUMsRUFBaUQsQ0FBakQ7QUFDSCxHQXhDSTtBQXlDTEksRUFBQUEsbUJBQW1CLEVBQUUsNkJBQVNKLElBQVQsRUFBYztBQUMvQkssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1Qk4sSUFBdkI7QUFDQUEsSUFBQUEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsSUFBVCxFQUFlLEVBQWYsQ0FBUDs7QUFDQSxRQUFHQSxJQUFJLEdBQUcsQ0FBVixFQUFZO0FBQ1I7QUFDSDs7QUFDRGpCLElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtMLGVBQUwsQ0FBcUJTLElBQUksQ0FBQ00sS0FBTCxDQUFXUCxJQUFJLEdBQUMsQ0FBaEIsSUFBcUIsQ0FBMUMsQ0FBcEIsRUFBa0UsS0FBbEUsRUFBeUUsQ0FBekU7QUFDSCxHQWhESSxDQWtETDs7QUFsREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzd2FwOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGVsaW1pbmF0ZTp7XG4gICAgICAgICAgICB0eXBlOiBbY2MuQXVkaW9DbGlwXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBjb250aW51b3VzTWF0Y2g6e1xuICAgICAgICAgICAgdHlwZTogW2NjLkF1ZGlvQ2xpcF0sXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgIFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuICAgIHBsYXlDbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmNsaWNrLCBmYWxzZSwgMSk7XG4gICAgfSxcbiAgICBwbGF5U3dhcDogZnVuY3Rpb24oKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnN3YXAsIGZhbHNlLCAxKTtcbiAgICB9LFxuICAgIHBsYXlFbGltaW5hdGU6IGZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICBzdGVwID0gTWF0aC5taW4odGhpcy5lbGltaW5hdGUubGVuZ3RoIC0gMSwgc3RlcCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lbGltaW5hdGVbc3RlcF0sIGZhbHNlLCAxKTtcbiAgICB9LFxuICAgIHBsYXlDb250aW51b3VzTWF0Y2g6IGZ1bmN0aW9uKHN0ZXApe1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0ZXAgPSBcIiwgc3RlcCk7XG4gICAgICAgIHN0ZXAgPSBNYXRoLm1pbihzdGVwLCAxMSk7XG4gICAgICAgIGlmKHN0ZXAgPCAyKXtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuY29udGludW91c01hdGNoW01hdGguZmxvb3Ioc3RlcC8yKSAtIDFdLCBmYWxzZSwgMSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==