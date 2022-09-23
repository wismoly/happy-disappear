
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Controller/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29udHJvbGxlci9Mb2dpbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsb2FkaW5nQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwibG9naW5CdXR0b24iLCJCdXR0b24iLCJ3b3JsZFNjZW5lQkdNIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ2FtZVNjZW5lQkdNQXVkaW9JZCIsImF1ZGlvRW5naW5lIiwicGxheSIsIm9uTG9naW4iLCJsYXN0Iiwibm9kZSIsImFjdGl2ZSIsInByb2dyZXNzIiwiYmFyU3ByaXRlIiwiZmlsbFJhbmdlIiwibG9hZGVyIiwib25Qcm9ncmVzcyIsImNvdW50IiwiYW1vdW50IiwiaXRlbSIsInRvRml4ZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImxvYWRTY2VuZSIsImJpbmQiLCJvbkRlc3Ryb3kiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxVQUFVLEVBQUU7QUFDVkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFdBREM7QUFFVixpQkFBUztBQUZDLEtBREY7QUFLVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1hGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUSxNQURFO0FBRVgsaUJBQVM7QUFGRSxLQUxIO0FBU1ZDLElBQUFBLGFBQWEsRUFBRTtBQUNiSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1UsU0FESTtBQUViLGlCQUFTO0FBRkk7QUFUTCxHQUhMO0FBa0JQQyxFQUFBQSxNQWxCTyxvQkFrQkU7QUFDUCxTQUFLQyxtQkFBTCxHQUEyQlosRUFBRSxDQUFDYSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS0wsYUFBekIsRUFBd0MsSUFBeEMsRUFBOEMsQ0FBOUMsQ0FBM0I7QUFDRCxHQXBCTTtBQXNCUE0sRUFBQUEsT0FBTyxFQUFFLG1CQUFZO0FBQUE7O0FBQ25CLFNBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS1osVUFBTCxDQUFnQmEsSUFBaEIsQ0FBcUJDLE1BQXJCLEdBQThCLElBQTlCO0FBQ0EsU0FBS1gsV0FBTCxDQUFpQlUsSUFBakIsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsU0FBS2QsVUFBTCxDQUFnQmUsUUFBaEIsR0FBMkIsQ0FBM0I7QUFDQSxTQUFLZixVQUFMLENBQWdCZ0IsU0FBaEIsQ0FBMEJDLFNBQTFCLEdBQXNDLENBQXRDOztBQUNBckIsSUFBQUEsRUFBRSxDQUFDc0IsTUFBSCxDQUFVQyxVQUFWLEdBQXVCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsSUFBaEIsRUFBeUI7QUFDOUMsVUFBSVAsUUFBUSxHQUFHLENBQUNLLEtBQUssR0FBR0MsTUFBVCxFQUFpQkUsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBZjs7QUFDQSxVQUFJUixRQUFRLEdBQUcsS0FBSSxDQUFDZixVQUFMLENBQWdCZ0IsU0FBaEIsQ0FBMEJDLFNBQXpDLEVBQW9EO0FBQ2xELFFBQUEsS0FBSSxDQUFDakIsVUFBTCxDQUFnQmdCLFNBQWhCLENBQTBCQyxTQUExQixHQUFzQ0csS0FBSyxHQUFHQyxNQUE5QztBQUNEO0FBQ0YsS0FMRDs7QUFNQXpCLElBQUFBLEVBQUUsQ0FBQzRCLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixNQUF6QixFQUFpQyxZQUFZO0FBQzNDLFdBQUt6QixVQUFMLENBQWdCYSxJQUFoQixDQUFxQkMsTUFBckIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLWCxXQUFMLENBQWlCVSxJQUFqQixDQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0IsQ0FGMkMsQ0FHM0M7O0FBQ0FsQixNQUFBQSxFQUFFLENBQUM0QixRQUFILENBQVlFLFNBQVosQ0FBc0IsTUFBdEI7QUFDRCxLQUxnQyxDQUsvQkMsSUFMK0IsQ0FLMUIsSUFMMEIsQ0FBakM7QUFNRCxHQXhDTTtBQTBDUEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFZO0FBQ3JCaEMsSUFBQUEsRUFBRSxDQUFDYSxXQUFILENBQWVvQixJQUFmLENBQW9CLEtBQUtyQixtQkFBekI7QUFDRDtBQTVDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXVkaW9VdGlscyBmcm9tIFwiLi4vVXRpbHMvQXVkaW9VdGlsc1wiO1xuXG5jYy5DbGFzcyh7XG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbG9hZGluZ0Jhcjoge1xuICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgbG9naW5CdXR0b246IHtcbiAgICAgIHR5cGU6IGNjLkJ1dHRvbixcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICB3b3JsZFNjZW5lQkdNOiB7XG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH1cbiAgfSxcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nYW1lU2NlbmVCR01BdWRpb0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndvcmxkU2NlbmVCR00sIHRydWUsIDEpO1xuICB9LFxuXG4gIG9uTG9naW46IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmxhc3QgPSAwO1xuICAgIHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5sb2dpbkJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZ0Jhci5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5sb2FkaW5nQmFyLmJhclNwcml0ZS5maWxsUmFuZ2UgPSAwO1xuICAgIGNjLmxvYWRlci5vblByb2dyZXNzID0gKGNvdW50LCBhbW91bnQsIGl0ZW0pID0+IHtcbiAgICAgIGxldCBwcm9ncmVzcyA9IChjb3VudCAvIGFtb3VudCkudG9GaXhlZCgyKTtcbiAgICAgIGlmIChwcm9ncmVzcyA+IHRoaXMubG9hZGluZ0Jhci5iYXJTcHJpdGUuZmlsbFJhbmdlKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0Jhci5iYXJTcHJpdGUuZmlsbFJhbmdlID0gY291bnQgLyBhbW91bnQ7XG4gICAgICB9XG4gICAgfTtcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJHYW1lXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMubG9hZGluZ0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2dpbkJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgLy8gY2MubG9nKFwi5Yqg6L295oiQ5YqfXCIpO1xuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIG9uRGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5nYW1lU2NlbmVCR01BdWRpb0lkKTtcbiAgfVxufSk7XG4iXX0=