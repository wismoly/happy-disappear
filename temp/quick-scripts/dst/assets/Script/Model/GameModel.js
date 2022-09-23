
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc442HaMlBE/ZKi7W/YUKwd', 'GameModel');
// Script/Model/GameModel.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _CellModel = _interopRequireDefault(require("./CellModel"));

var _ModelUtils = require("../Utils/ModelUtils");

var _ConstValue = require("./ConstValue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var GameModel = /*#__PURE__*/function () {
  function GameModel() {
    this.cells = null;
    this.cellBgs = null;
    this.lastPos = cc.v2(-1, -1);
    this.cellTypeNum = 5;
    this.cellCreateType = []; // 升成种类只在这个数组里面查找
  }

  var _proto = GameModel.prototype;

  _proto.init = function init(cellTypeNum) {
    this.cells = [];
    this.setCellTypeNum(cellTypeNum || this.cellTypeNum);

    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
      this.cells[i] = [];

      for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
        this.cells[i][j] = new _CellModel["default"]();
      }
    } // this.mock();


    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
      for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
        //已经被mock数据生成了
        if (this.cells[i][j].type != null) {
          continue;
        }

        var flag = true;

        while (flag) {
          flag = false;
          this.cells[i][j].init(this.getRandomCellType());
          var result = this.checkPoint(j, i)[0];

          if (result.length > 2) {
            flag = true;
          }

          this.cells[i][j].setXY(j, i);
          this.cells[i][j].setStartXY(j, i);
        }
      }
    }
  };

  _proto.mock = function mock() {
    this.mockInit(5, 1, _ConstValue.CELL_TYPE.A);
    this.mockInit(5, 3, _ConstValue.CELL_TYPE.A);
    this.mockInit(4, 2, _ConstValue.CELL_TYPE.A);
    this.mockInit(3, 2, _ConstValue.CELL_TYPE.A);
    this.mockInit(5, 2, _ConstValue.CELL_TYPE.B);
    this.mockInit(6, 2, _ConstValue.CELL_TYPE.B);
    this.mockInit(7, 3, _ConstValue.CELL_TYPE.B);
    this.mockInit(8, 2, _ConstValue.CELL_TYPE.A);
  };

  _proto.mockInit = function mockInit(x, y, type) {
    this.cells[x][y].init(type);
    this.cells[x][y].setXY(y, x);
    this.cells[x][y].setStartXY(y, x);
  };

  _proto.initWithData = function initWithData(data) {// to do
  }
  /**
   *
   * @param x
   * @param y
   * @param recursive 是否递归查找
   * @returns {([]|string|*)[]}
   */
  ;

  _proto.checkPoint = function checkPoint(x, y, recursive) {
    var rowResult = this.checkWithDirection(x, y, [cc.v2(1, 0), cc.v2(-1, 0)]);
    var colResult = this.checkWithDirection(x, y, [cc.v2(0, -1), cc.v2(0, 1)]);
    var samePoints = [];
    var newCellStatus = "";

    if (rowResult.length >= 5 || colResult.length >= 5) {
      newCellStatus = _ConstValue.CELL_STATUS.BIRD;
    } else if (rowResult.length >= 3 && colResult.length >= 3) {
      newCellStatus = _ConstValue.CELL_STATUS.WRAP;
    } else if (rowResult.length >= 4) {
      newCellStatus = _ConstValue.CELL_STATUS.LINE;
    } else if (colResult.length >= 4) {
      newCellStatus = _ConstValue.CELL_STATUS.COLUMN;
    }

    if (rowResult.length >= 3) {
      samePoints = rowResult;
    }

    if (colResult.length >= 3) {
      samePoints = (0, _ModelUtils.mergePointArray)(samePoints, colResult);
    }

    var result = [samePoints, newCellStatus, this.cells[y][x].type, cc.v2(x, y)]; // 检查一下消除的其他节点， 能不能生成更大范围的消除

    if (recursive && result.length >= 3) {
      var subCheckPoints = (0, _ModelUtils.exclusivePoint)(samePoints, cc.v2(x, y));

      for (var _iterator = _createForOfIteratorHelperLoose(subCheckPoints), _step; !(_step = _iterator()).done;) {
        var point = _step.value;
        var subResult = this.checkPoint(point.x, point.y, false);

        if (subResult[1] > result[1] || subResult[1] === result[1] && subResult[0].length > result[0].length) {
          result = subResult;
        }
      }
    }

    return result;
  };

  _proto.checkWithDirection = function checkWithDirection(x, y, direction) {
    var queue = [];
    var vis = [];
    vis[x + y * 9] = true;
    queue.push(cc.v2(x, y));
    var front = 0;

    while (front < queue.length) {
      //let direction = [cc.v2(0, -1), cc.v2(0, 1), cc.v2(1, 0), cc.v2(-1, 0)];
      var point = queue[front];
      var cellModel = this.cells[point.y][point.x];
      front++;

      if (!cellModel) {
        continue;
      }

      for (var i = 0; i < direction.length; i++) {
        var tmpX = point.x + direction[i].x;
        var tmpY = point.y + direction[i].y;

        if (tmpX < 1 || tmpX > 9 || tmpY < 1 || tmpY > 9 || vis[tmpX + tmpY * 9] || !this.cells[tmpY][tmpX]) {
          continue;
        }

        if (cellModel.type === this.cells[tmpY][tmpX].type) {
          vis[tmpX + tmpY * 9] = true;
          queue.push(cc.v2(tmpX, tmpY));
        }
      }
    }

    return queue;
  };

  _proto.printInfo = function printInfo() {
    for (var i = 1; i <= 9; i++) {
      var printStr = "";

      for (var j = 1; j <= 9; j++) {
        printStr += this.cells[i][j].type + " ";
      }

      console.log(printStr);
    }
  };

  _proto.getCells = function getCells() {
    return this.cells;
  } // controller调用的主要入口
  // 点击某个格子
  ;

  _proto.selectCell = function selectCell(pos) {
    this.changeModels = []; // 发生改变的model，将作为返回值，给view播动作

    this.effectsQueue = []; // 动物消失，爆炸等特效

    var lastPos = this.lastPos;
    var delta = Math.abs(pos.x - lastPos.x) + Math.abs(pos.y - lastPos.y);

    if (delta != 1) {
      //非相邻格子， 直接返回
      this.lastPos = pos;
      return [[], []];
    }

    var curClickCell = this.cells[pos.y][pos.x]; //当前点击的格子

    var lastClickCell = this.cells[lastPos.y][lastPos.x]; // 上一次点击的格式

    this.exchangeCell(lastPos, pos);
    var result1 = this.checkPoint(pos.x, pos.y)[0];
    var result2 = this.checkPoint(lastPos.x, lastPos.y)[0];
    this.curTime = 0; // 动画播放的当前时间

    this.pushToChangeModels(curClickCell);
    this.pushToChangeModels(lastClickCell);
    var isCanBomb = curClickCell.status != _ConstValue.CELL_STATUS.COMMON && // 判断两个是否是特殊的动物
    lastClickCell.status != _ConstValue.CELL_STATUS.COMMON || curClickCell.status == _ConstValue.CELL_STATUS.BIRD || lastClickCell.status == _ConstValue.CELL_STATUS.BIRD;

    if (result1.length < 3 && result2.length < 3 && !isCanBomb) {
      //不会发生消除的情况
      this.exchangeCell(lastPos, pos);
      curClickCell.moveToAndBack(lastPos);
      lastClickCell.moveToAndBack(pos);
      this.lastPos = cc.v2(-1, -1);
      return [this.changeModels];
    } else {
      this.lastPos = cc.v2(-1, -1);
      curClickCell.moveTo(lastPos, this.curTime);
      lastClickCell.moveTo(pos, this.curTime);
      var checkPoint = [pos, lastPos];
      this.curTime += _ConstValue.ANITIME.TOUCH_MOVE;
      this.processCrush(checkPoint);
      return [this.changeModels, this.effectsQueue];
    }
  } // 消除
  ;

  _proto.processCrush = function processCrush(checkPoint) {
    var cycleCount = 0;

    while (checkPoint.length > 0) {
      var bombModels = [];

      if (cycleCount == 0 && checkPoint.length == 2) {
        //特殊消除
        var pos1 = checkPoint[0];
        var pos2 = checkPoint[1];
        var model1 = this.cells[pos1.y][pos1.x];
        var model2 = this.cells[pos2.y][pos2.x];

        if (model1.status == _ConstValue.CELL_STATUS.BIRD || model2.status == _ConstValue.CELL_STATUS.BIRD) {
          var bombModel = null;

          if (model1.status == _ConstValue.CELL_STATUS.BIRD) {
            model1.type = model2.type;
            bombModels.push(model1);
          } else {
            model2.type = model1.type;
            bombModels.push(model2);
          }
        }
      }

      for (var i in checkPoint) {
        var pos = checkPoint[i];

        if (!this.cells[pos.y][pos.x]) {
          continue;
        }

        var _this$checkPoint = this.checkPoint(pos.x, pos.y, true),
            result = _this$checkPoint[0],
            newCellStatus = _this$checkPoint[1],
            newCellType = _this$checkPoint[2],
            crushPoint = _this$checkPoint[3];

        if (result.length < 3) {
          continue;
        }

        for (var j in result) {
          var model = this.cells[result[j].y][result[j].x];
          this.crushCell(result[j].x, result[j].y, false, cycleCount);

          if (model.status != _ConstValue.CELL_STATUS.COMMON) {
            bombModels.push(model);
          }
        }

        this.createNewCell(crushPoint, newCellStatus, newCellType);
      }

      this.processBomb(bombModels, cycleCount);
      this.curTime += _ConstValue.ANITIME.DIE;
      checkPoint = this.down();
      cycleCount++;
    }
  } //生成新cell
  ;

  _proto.createNewCell = function createNewCell(pos, status, type) {
    if (status == "") {
      return;
    }

    if (status == _ConstValue.CELL_STATUS.BIRD) {
      type = _ConstValue.CELL_TYPE.BIRD;
    }

    var model = new _CellModel["default"]();
    this.cells[pos.y][pos.x] = model;
    model.init(type);
    model.setStartXY(pos.x, pos.y);
    model.setXY(pos.x, pos.y);
    model.setStatus(status);
    model.setVisible(0, false);
    model.setVisible(this.curTime, true);
    this.changeModels.push(model);
  } // 下落
  ;

  _proto.down = function down() {
    var newCheckPoint = [];

    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
      for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
        if (this.cells[i][j] == null) {
          var curRow = i;

          for (var k = curRow; k <= _ConstValue.GRID_HEIGHT; k++) {
            if (this.cells[k][j]) {
              this.pushToChangeModels(this.cells[k][j]);
              newCheckPoint.push(this.cells[k][j]);
              this.cells[curRow][j] = this.cells[k][j];
              this.cells[k][j] = null;
              this.cells[curRow][j].setXY(j, curRow);
              this.cells[curRow][j].moveTo(cc.v2(j, curRow), this.curTime);
              curRow++;
            }
          }

          var count = 1;

          for (var k = curRow; k <= _ConstValue.GRID_HEIGHT; k++) {
            this.cells[k][j] = new _CellModel["default"]();
            this.cells[k][j].init(this.getRandomCellType());
            this.cells[k][j].setStartXY(j, count + _ConstValue.GRID_HEIGHT);
            this.cells[k][j].setXY(j, count + _ConstValue.GRID_HEIGHT);
            this.cells[k][j].moveTo(cc.v2(j, k), this.curTime);
            count++;
            this.changeModels.push(this.cells[k][j]);
            newCheckPoint.push(this.cells[k][j]);
          }
        }
      }
    }

    this.curTime += _ConstValue.ANITIME.TOUCH_MOVE + 0.3;
    return newCheckPoint;
  };

  _proto.pushToChangeModels = function pushToChangeModels(model) {
    if (this.changeModels.indexOf(model) != -1) {
      return;
    }

    this.changeModels.push(model);
  };

  _proto.cleanCmd = function cleanCmd() {
    for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
      for (var j = 1; j <= _ConstValue.GRID_HEIGHT; j++) {
        if (this.cells[i][j]) {
          this.cells[i][j].cmd = [];
        }
      }
    }
  };

  _proto.exchangeCell = function exchangeCell(pos1, pos2) {
    var tmpModel = this.cells[pos1.y][pos1.x];
    this.cells[pos1.y][pos1.x] = this.cells[pos2.y][pos2.x];
    this.cells[pos1.y][pos1.x].x = pos1.x;
    this.cells[pos1.y][pos1.x].y = pos1.y;
    this.cells[pos2.y][pos2.x] = tmpModel;
    this.cells[pos2.y][pos2.x].x = pos2.x;
    this.cells[pos2.y][pos2.x].y = pos2.y;
  } // 设置种类
  // Todo 改成乱序算法
  ;

  _proto.setCellTypeNum = function setCellTypeNum(num) {
    console.log("num = ", num);
    this.cellTypeNum = num;
    this.cellCreateType = [];
    var createTypeList = this.cellCreateType;

    for (var i = 1; i <= _ConstValue.CELL_BASENUM; i++) {
      createTypeList.push(i);
    }

    for (var _i = 0; _i < createTypeList.length; _i++) {
      var index = Math.floor(Math.random() * (_ConstValue.CELL_BASENUM - _i)) + _i;

      createTypeList[_i], createTypeList[index] = createTypeList[index], createTypeList[_i];
    }
  } // 随要生成一个类型
  ;

  _proto.getRandomCellType = function getRandomCellType() {
    var index = Math.floor(Math.random() * this.cellTypeNum);
    return this.cellCreateType[index];
  } // TODO bombModels去重
  ;

  _proto.processBomb = function processBomb(bombModels, cycleCount) {
    var _this = this;

    var _loop = function _loop() {
      var newBombModel = [];
      var bombTime = _ConstValue.ANITIME.BOMB_DELAY;
      bombModels.forEach(function (model) {
        if (model.status == _ConstValue.CELL_STATUS.LINE) {
          for (var i = 1; i <= _ConstValue.GRID_WIDTH; i++) {
            if (this.cells[model.y][i]) {
              if (this.cells[model.y][i].status != _ConstValue.CELL_STATUS.COMMON) {
                newBombModel.push(this.cells[model.y][i]);
              }

              this.crushCell(i, model.y, false, cycleCount);
            }
          }

          this.addRowBomb(this.curTime, cc.v2(model.x, model.y));
        } else if (model.status == _ConstValue.CELL_STATUS.COLUMN) {
          for (var _i2 = 1; _i2 <= _ConstValue.GRID_HEIGHT; _i2++) {
            if (this.cells[_i2][model.x]) {
              if (this.cells[_i2][model.x].status != _ConstValue.CELL_STATUS.COMMON) {
                newBombModel.push(this.cells[_i2][model.x]);
              }

              this.crushCell(model.x, _i2, false, cycleCount);
            }
          }

          this.addColBomb(this.curTime, cc.v2(model.x, model.y));
        } else if (model.status == _ConstValue.CELL_STATUS.WRAP) {
          var x = model.x;
          var y = model.y;

          for (var _i3 = 1; _i3 <= _ConstValue.GRID_HEIGHT; _i3++) {
            for (var j = 1; j <= _ConstValue.GRID_WIDTH; j++) {
              var delta = Math.abs(x - j) + Math.abs(y - _i3);

              if (this.cells[_i3][j] && delta <= 2) {
                if (this.cells[_i3][j].status != _ConstValue.CELL_STATUS.COMMON) {
                  newBombModel.push(this.cells[_i3][j]);
                }

                this.crushCell(j, _i3, false, cycleCount);
              }
            }
          }
        } else if (model.status == _ConstValue.CELL_STATUS.BIRD) {
          var crushType = model.type;

          if (bombTime < _ConstValue.ANITIME.BOMB_BIRD_DELAY) {
            bombTime = _ConstValue.ANITIME.BOMB_BIRD_DELAY;
          }

          if (crushType == _ConstValue.CELL_TYPE.BIRD) {
            crushType = this.getRandomCellType();
          }

          for (var _i4 = 1; _i4 <= _ConstValue.GRID_HEIGHT; _i4++) {
            for (var _j = 1; _j <= _ConstValue.GRID_WIDTH; _j++) {
              if (this.cells[_i4][_j] && this.cells[_i4][_j].type == crushType) {
                if (this.cells[_i4][_j].status != _ConstValue.CELL_STATUS.COMMON) {
                  newBombModel.push(this.cells[_i4][_j]);
                }

                this.crushCell(_j, _i4, true, cycleCount);
              }
            }
          } //this.crushCell(model.x, model.y);

        }
      }, _this);

      if (bombModels.length > 0) {
        _this.curTime += bombTime;
      }

      bombModels = newBombModel;
    };

    while (bombModels.length > 0) {
      _loop();
    }
  }
  /**
   * 
   * @param {开始播放的时间} playTime 
   * @param {*cell位置} pos 
   * @param {*第几次消除，用于播放音效} step 
   */
  ;

  _proto.addCrushEffect = function addCrushEffect(playTime, pos, step) {
    this.effectsQueue.push({
      playTime: playTime,
      pos: pos,
      action: "crush",
      step: step
    });
  };

  _proto.addRowBomb = function addRowBomb(playTime, pos) {
    this.effectsQueue.push({
      playTime: playTime,
      pos: pos,
      action: "rowBomb"
    });
  };

  _proto.addColBomb = function addColBomb(playTime, pos) {
    this.effectsQueue.push({
      playTime: playTime,
      pos: pos,
      action: "colBomb"
    });
  };

  _proto.addWrapBomb = function addWrapBomb(playTime, pos) {// TODO
  } // cell消除逻辑
  ;

  _proto.crushCell = function crushCell(x, y, needShake, step) {
    var model = this.cells[y][x];
    this.pushToChangeModels(model);

    if (needShake) {
      model.toShake(this.curTime);
    }

    var shakeTime = needShake ? _ConstValue.ANITIME.DIE_SHAKE : 0;
    model.toDie(this.curTime + shakeTime);
    this.addCrushEffect(this.curTime + shakeTime, cc.v2(model.x, model.y), step);
    this.cells[y][x] = null;
  };

  return GameModel;
}();

exports["default"] = GameModel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9kZWwvR2FtZU1vZGVsLmpzIl0sIm5hbWVzIjpbIkdhbWVNb2RlbCIsImNlbGxzIiwiY2VsbEJncyIsImxhc3RQb3MiLCJjYyIsInYyIiwiY2VsbFR5cGVOdW0iLCJjZWxsQ3JlYXRlVHlwZSIsImluaXQiLCJzZXRDZWxsVHlwZU51bSIsImkiLCJHUklEX1dJRFRIIiwiaiIsIkdSSURfSEVJR0hUIiwiQ2VsbE1vZGVsIiwidHlwZSIsImZsYWciLCJnZXRSYW5kb21DZWxsVHlwZSIsInJlc3VsdCIsImNoZWNrUG9pbnQiLCJsZW5ndGgiLCJzZXRYWSIsInNldFN0YXJ0WFkiLCJtb2NrIiwibW9ja0luaXQiLCJDRUxMX1RZUEUiLCJBIiwiQiIsIngiLCJ5IiwiaW5pdFdpdGhEYXRhIiwiZGF0YSIsInJlY3Vyc2l2ZSIsInJvd1Jlc3VsdCIsImNoZWNrV2l0aERpcmVjdGlvbiIsImNvbFJlc3VsdCIsInNhbWVQb2ludHMiLCJuZXdDZWxsU3RhdHVzIiwiQ0VMTF9TVEFUVVMiLCJCSVJEIiwiV1JBUCIsIkxJTkUiLCJDT0xVTU4iLCJzdWJDaGVja1BvaW50cyIsInBvaW50Iiwic3ViUmVzdWx0IiwiZGlyZWN0aW9uIiwicXVldWUiLCJ2aXMiLCJwdXNoIiwiZnJvbnQiLCJjZWxsTW9kZWwiLCJ0bXBYIiwidG1wWSIsInByaW50SW5mbyIsInByaW50U3RyIiwiY29uc29sZSIsImxvZyIsImdldENlbGxzIiwic2VsZWN0Q2VsbCIsInBvcyIsImNoYW5nZU1vZGVscyIsImVmZmVjdHNRdWV1ZSIsImRlbHRhIiwiTWF0aCIsImFicyIsImN1ckNsaWNrQ2VsbCIsImxhc3RDbGlja0NlbGwiLCJleGNoYW5nZUNlbGwiLCJyZXN1bHQxIiwicmVzdWx0MiIsImN1clRpbWUiLCJwdXNoVG9DaGFuZ2VNb2RlbHMiLCJpc0NhbkJvbWIiLCJzdGF0dXMiLCJDT01NT04iLCJtb3ZlVG9BbmRCYWNrIiwibW92ZVRvIiwiQU5JVElNRSIsIlRPVUNIX01PVkUiLCJwcm9jZXNzQ3J1c2giLCJjeWNsZUNvdW50IiwiYm9tYk1vZGVscyIsInBvczEiLCJwb3MyIiwibW9kZWwxIiwibW9kZWwyIiwiYm9tYk1vZGVsIiwibmV3Q2VsbFR5cGUiLCJjcnVzaFBvaW50IiwibW9kZWwiLCJjcnVzaENlbGwiLCJjcmVhdGVOZXdDZWxsIiwicHJvY2Vzc0JvbWIiLCJESUUiLCJkb3duIiwic2V0U3RhdHVzIiwic2V0VmlzaWJsZSIsIm5ld0NoZWNrUG9pbnQiLCJjdXJSb3ciLCJrIiwiY291bnQiLCJpbmRleE9mIiwiY2xlYW5DbWQiLCJjbWQiLCJ0bXBNb2RlbCIsIm51bSIsImNyZWF0ZVR5cGVMaXN0IiwiQ0VMTF9CQVNFTlVNIiwiaW5kZXgiLCJmbG9vciIsInJhbmRvbSIsIm5ld0JvbWJNb2RlbCIsImJvbWJUaW1lIiwiQk9NQl9ERUxBWSIsImZvckVhY2giLCJhZGRSb3dCb21iIiwiYWRkQ29sQm9tYiIsImNydXNoVHlwZSIsIkJPTUJfQklSRF9ERUxBWSIsImFkZENydXNoRWZmZWN0IiwicGxheVRpbWUiLCJzdGVwIiwiYWN0aW9uIiwiYWRkV3JhcEJvbWIiLCJuZWVkU2hha2UiLCJ0b1NoYWtlIiwic2hha2VUaW1lIiwiRElFX1NIQUtFIiwidG9EaWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBO0FBQ25CLHVCQUFjO0FBQ1osU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZUMsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBQyxDQUFQLEVBQVUsQ0FBQyxDQUFYLENBQWY7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QixDQUxZLENBS2M7QUFDM0I7Ozs7U0FFREMsT0FBQSxjQUFLRixXQUFMLEVBQWtCO0FBQ2hCLFNBQUtMLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FB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LEtBQUt2RCxPQUFuQjtBQUNEOztBQUVELFFBQUl3RCxTQUFTLEdBQUdGLFNBQVMsR0FBRy9DLG9CQUFRa0QsU0FBWCxHQUF1QixDQUFoRDtBQUNBdEMsSUFBQUEsS0FBSyxDQUFDdUMsS0FBTixDQUFZLEtBQUsxRCxPQUFMLEdBQWV3RCxTQUEzQjtBQUNBLFNBQUtQLGNBQUwsQ0FBb0IsS0FBS2pELE9BQUwsR0FBZXdELFNBQW5DLEVBQThDM0gsRUFBRSxDQUFDQyxFQUFILENBQU1xRixLQUFLLENBQUM5RCxDQUFaLEVBQWU4RCxLQUFLLENBQUM3RCxDQUFyQixDQUE5QyxFQUF1RTZGLElBQXZFO0FBQ0EsU0FBS3pILEtBQUwsQ0FBVzRCLENBQVgsRUFBY0QsQ0FBZCxJQUFtQixJQUFuQjtBQUNEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbE1vZGVsIGZyb20gXCIuL0NlbGxNb2RlbFwiO1xuaW1wb3J0IHsgbWVyZ2VQb2ludEFycmF5LCBleGNsdXNpdmVQb2ludCB9IGZyb20gXCIuLi9VdGlscy9Nb2RlbFV0aWxzXCJcbmltcG9ydCB7IENFTExfVFlQRSwgQ0VMTF9CQVNFTlVNLCBDRUxMX1NUQVRVUywgR1JJRF9XSURUSCwgR1JJRF9IRUlHSFQsIEFOSVRJTUUgfSBmcm9tIFwiLi9Db25zdFZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2VsbHMgPSBudWxsO1xuICAgIHRoaXMuY2VsbEJncyA9IG51bGw7XG4gICAgdGhpcy5sYXN0UG9zID0gY2MudjIoLTEsIC0xKTtcbiAgICB0aGlzLmNlbGxUeXBlTnVtID0gNTtcbiAgICB0aGlzLmNlbGxDcmVhdGVUeXBlID0gW107IC8vIOWNh+aIkOenjeexu+WPquWcqOi/meS4quaVsOe7hOmHjOmdouafpeaJvlxuICB9XG5cbiAgaW5pdChjZWxsVHlwZU51bSkge1xuICAgIHRoaXMuY2VsbHMgPSBbXTtcbiAgICB0aGlzLnNldENlbGxUeXBlTnVtKGNlbGxUeXBlTnVtIHx8IHRoaXMuY2VsbFR5cGVOdW0pO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IEdSSURfV0lEVEg7IGkrKykge1xuICAgICAgdGhpcy5jZWxsc1tpXSA9IFtdO1xuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPD0gR1JJRF9IRUlHSFQ7IGorKykge1xuICAgICAgICB0aGlzLmNlbGxzW2ldW2pdID0gbmV3IENlbGxNb2RlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMubW9jaygpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IEdSSURfV0lEVEg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPD0gR1JJRF9IRUlHSFQ7IGorKykge1xuICAgICAgICAvL+W3sue7j+iiq21vY2vmlbDmja7nlJ/miJDkuoZcbiAgICAgICAgaWYgKHRoaXMuY2VsbHNbaV1bal0udHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoZmxhZykge1xuICAgICAgICAgIGZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgIHRoaXMuY2VsbHNbaV1bal0uaW5pdCh0aGlzLmdldFJhbmRvbUNlbGxUeXBlKCkpO1xuICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmNoZWNrUG9pbnQoaiwgaSlbMF07XG4gICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jZWxsc1tpXVtqXS5zZXRYWShqLCBpKTtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdLnNldFN0YXJ0WFkoaiwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG1vY2soKSB7XG4gICAgdGhpcy5tb2NrSW5pdCg1LCAxLCBDRUxMX1RZUEUuQSk7XG4gICAgdGhpcy5tb2NrSW5pdCg1LCAzLCBDRUxMX1RZUEUuQSk7XG4gICAgdGhpcy5tb2NrSW5pdCg0LCAyLCBDRUxMX1RZUEUuQSk7XG4gICAgdGhpcy5tb2NrSW5pdCgzLCAyLCBDRUxMX1RZUEUuQSk7XG4gICAgdGhpcy5tb2NrSW5pdCg1LCAyLCBDRUxMX1RZUEUuQik7XG4gICAgdGhpcy5tb2NrSW5pdCg2LCAyLCBDRUxMX1RZUEUuQik7XG4gICAgdGhpcy5tb2NrSW5pdCg3LCAzLCBDRUxMX1RZUEUuQik7XG4gICAgdGhpcy5tb2NrSW5pdCg4LCAyLCBDRUxMX1RZUEUuQSk7XG4gIH1cbiAgbW9ja0luaXQoeCwgeSwgdHlwZSkge1xuICAgIHRoaXMuY2VsbHNbeF1beV0uaW5pdCh0eXBlKVxuICAgIHRoaXMuY2VsbHNbeF1beV0uc2V0WFkoeSwgeCk7XG4gICAgdGhpcy5jZWxsc1t4XVt5XS5zZXRTdGFydFhZKHksIHgpO1xuICB9XG5cblxuICBpbml0V2l0aERhdGEoZGF0YSkge1xuICAgIC8vIHRvIGRvXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHhcbiAgICogQHBhcmFtIHlcbiAgICogQHBhcmFtIHJlY3Vyc2l2ZSDmmK/lkKbpgJLlvZLmn6Xmib5cbiAgICogQHJldHVybnMgeyhbXXxzdHJpbmd8KilbXX1cbiAgICovXG4gIGNoZWNrUG9pbnQoeCwgeSwgcmVjdXJzaXZlKSB7XG4gICAgbGV0IHJvd1Jlc3VsdCA9IHRoaXMuY2hlY2tXaXRoRGlyZWN0aW9uKHgsIHksIFtjYy52MigxLCAwKSwgY2MudjIoLTEsIDApXSk7XG4gICAgbGV0IGNvbFJlc3VsdCA9IHRoaXMuY2hlY2tXaXRoRGlyZWN0aW9uKHgsIHksIFtjYy52MigwLCAtMSksIGNjLnYyKDAsIDEpXSk7XG4gICAgbGV0IHNhbWVQb2ludHMgPSBbXTtcbiAgICBsZXQgbmV3Q2VsbFN0YXR1cyA9IFwiXCI7XG4gICAgaWYgKHJvd1Jlc3VsdC5sZW5ndGggPj0gNSB8fCBjb2xSZXN1bHQubGVuZ3RoID49IDUpIHtcbiAgICAgIG5ld0NlbGxTdGF0dXMgPSBDRUxMX1NUQVRVUy5CSVJEO1xuICAgIH1cbiAgICBlbHNlIGlmIChyb3dSZXN1bHQubGVuZ3RoID49IDMgJiYgY29sUmVzdWx0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBuZXdDZWxsU3RhdHVzID0gQ0VMTF9TVEFUVVMuV1JBUDtcbiAgICB9XG4gICAgZWxzZSBpZiAocm93UmVzdWx0Lmxlbmd0aCA+PSA0KSB7XG4gICAgICBuZXdDZWxsU3RhdHVzID0gQ0VMTF9TVEFUVVMuTElORTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29sUmVzdWx0Lmxlbmd0aCA+PSA0KSB7XG4gICAgICBuZXdDZWxsU3RhdHVzID0gQ0VMTF9TVEFUVVMuQ09MVU1OO1xuICAgIH1cbiAgICBpZiAocm93UmVzdWx0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBzYW1lUG9pbnRzID0gcm93UmVzdWx0O1xuICAgIH1cbiAgICBpZiAoY29sUmVzdWx0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBzYW1lUG9pbnRzID0gbWVyZ2VQb2ludEFycmF5KHNhbWVQb2ludHMsIGNvbFJlc3VsdCk7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSBbc2FtZVBvaW50cywgbmV3Q2VsbFN0YXR1cywgdGhpcy5jZWxsc1t5XVt4XS50eXBlLCBjYy52Mih4LCB5KV07XG4gICAgLy8g5qOA5p+l5LiA5LiL5raI6Zmk55qE5YW25LuW6IqC54K577yMIOiDveS4jeiDveeUn+aIkOabtOWkp+iMg+WbtOeahOa2iOmZpFxuICAgIGlmIChyZWN1cnNpdmUgJiYgcmVzdWx0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBsZXQgc3ViQ2hlY2tQb2ludHMgPSBleGNsdXNpdmVQb2ludChzYW1lUG9pbnRzLCBjYy52Mih4LCB5KSk7XG4gICAgICBmb3IgKGxldCBwb2ludCBvZiBzdWJDaGVja1BvaW50cykge1xuICAgICAgICBsZXQgc3ViUmVzdWx0ID0gdGhpcy5jaGVja1BvaW50KHBvaW50LngsIHBvaW50LnksIGZhbHNlKTtcbiAgICAgICAgaWYgKHN1YlJlc3VsdFsxXSA+IHJlc3VsdFsxXSB8fCAoc3ViUmVzdWx0WzFdID09PSByZXN1bHRbMV0gJiYgc3ViUmVzdWx0WzBdLmxlbmd0aCA+IHJlc3VsdFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gc3ViUmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBjaGVja1dpdGhEaXJlY3Rpb24oeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHF1ZXVlID0gW107XG4gICAgbGV0IHZpcyA9IFtdO1xuICAgIHZpc1t4ICsgeSAqIDldID0gdHJ1ZTtcbiAgICBxdWV1ZS5wdXNoKGNjLnYyKHgsIHkpKTtcbiAgICBsZXQgZnJvbnQgPSAwO1xuICAgIHdoaWxlIChmcm9udCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgLy9sZXQgZGlyZWN0aW9uID0gW2NjLnYyKDAsIC0xKSwgY2MudjIoMCwgMSksIGNjLnYyKDEsIDApLCBjYy52MigtMSwgMCldO1xuICAgICAgbGV0IHBvaW50ID0gcXVldWVbZnJvbnRdO1xuICAgICAgbGV0IGNlbGxNb2RlbCA9IHRoaXMuY2VsbHNbcG9pbnQueV1bcG9pbnQueF07XG4gICAgICBmcm9udCsrO1xuICAgICAgaWYgKCFjZWxsTW9kZWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcmVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdG1wWCA9IHBvaW50LnggKyBkaXJlY3Rpb25baV0ueDtcbiAgICAgICAgbGV0IHRtcFkgPSBwb2ludC55ICsgZGlyZWN0aW9uW2ldLnk7XG4gICAgICAgIGlmICh0bXBYIDwgMSB8fCB0bXBYID4gOVxuICAgICAgICAgIHx8IHRtcFkgPCAxIHx8IHRtcFkgPiA5XG4gICAgICAgICAgfHwgdmlzW3RtcFggKyB0bXBZICogOV1cbiAgICAgICAgICB8fCAhdGhpcy5jZWxsc1t0bXBZXVt0bXBYXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsTW9kZWwudHlwZSA9PT0gdGhpcy5jZWxsc1t0bXBZXVt0bXBYXS50eXBlKSB7XG4gICAgICAgICAgdmlzW3RtcFggKyB0bXBZICogOV0gPSB0cnVlO1xuICAgICAgICAgIHF1ZXVlLnB1c2goY2MudjIodG1wWCwgdG1wWSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWV1ZTtcbiAgfVxuXG4gIHByaW50SW5mbygpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgIHZhciBwcmludFN0ciA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgcHJpbnRTdHIgKz0gdGhpcy5jZWxsc1tpXVtqXS50eXBlICsgXCIgXCI7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhwcmludFN0cik7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VsbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VsbHM7XG4gIH1cbiAgLy8gY29udHJvbGxlcuiwg+eUqOeahOS4u+imgeWFpeWPo1xuICAvLyDngrnlh7vmn5DkuKrmoLzlrZBcbiAgc2VsZWN0Q2VsbChwb3MpIHtcbiAgICB0aGlzLmNoYW5nZU1vZGVscyA9IFtdOy8vIOWPkeeUn+aUueWPmOeahG1vZGVs77yM5bCG5L2c5Li66L+U5Zue5YC877yM57uZdmlld+aSreWKqOS9nFxuICAgIHRoaXMuZWZmZWN0c1F1ZXVlID0gW107IC8vIOWKqOeJqea2iOWkse+8jOeIhueCuOetieeJueaViFxuICAgIHZhciBsYXN0UG9zID0gdGhpcy5sYXN0UG9zO1xuICAgIHZhciBkZWx0YSA9IE1hdGguYWJzKHBvcy54IC0gbGFzdFBvcy54KSArIE1hdGguYWJzKHBvcy55IC0gbGFzdFBvcy55KTtcbiAgICBpZiAoZGVsdGEgIT0gMSkgeyAvL+mdnuebuOmCu+agvOWtkO+8jCDnm7TmjqXov5Tlm55cbiAgICAgIHRoaXMubGFzdFBvcyA9IHBvcztcbiAgICAgIHJldHVybiBbW10sIFtdXTtcbiAgICB9XG4gICAgbGV0IGN1ckNsaWNrQ2VsbCA9IHRoaXMuY2VsbHNbcG9zLnldW3Bvcy54XTsgLy/lvZPliY3ngrnlh7vnmoTmoLzlrZBcbiAgICBsZXQgbGFzdENsaWNrQ2VsbCA9IHRoaXMuY2VsbHNbbGFzdFBvcy55XVtsYXN0UG9zLnhdOyAvLyDkuIrkuIDmrKHngrnlh7vnmoTmoLzlvI9cbiAgICB0aGlzLmV4Y2hhbmdlQ2VsbChsYXN0UG9zLCBwb3MpO1xuICAgIHZhciByZXN1bHQxID0gdGhpcy5jaGVja1BvaW50KHBvcy54LCBwb3MueSlbMF07XG4gICAgdmFyIHJlc3VsdDIgPSB0aGlzLmNoZWNrUG9pbnQobGFzdFBvcy54LCBsYXN0UG9zLnkpWzBdO1xuICAgIHRoaXMuY3VyVGltZSA9IDA7IC8vIOWKqOeUu+aSreaUvueahOW9k+WJjeaXtumXtFxuICAgIHRoaXMucHVzaFRvQ2hhbmdlTW9kZWxzKGN1ckNsaWNrQ2VsbCk7XG4gICAgdGhpcy5wdXNoVG9DaGFuZ2VNb2RlbHMobGFzdENsaWNrQ2VsbCk7XG4gICAgbGV0IGlzQ2FuQm9tYiA9IChjdXJDbGlja0NlbGwuc3RhdHVzICE9IENFTExfU1RBVFVTLkNPTU1PTiAmJiAvLyDliKTmlq3kuKTkuKrmmK/lkKbmmK/nibnmrornmoTliqjnialcbiAgICAgIGxhc3RDbGlja0NlbGwuc3RhdHVzICE9IENFTExfU1RBVFVTLkNPTU1PTikgfHxcbiAgICAgIGN1ckNsaWNrQ2VsbC5zdGF0dXMgPT0gQ0VMTF9TVEFUVVMuQklSRCB8fFxuICAgICAgbGFzdENsaWNrQ2VsbC5zdGF0dXMgPT0gQ0VMTF9TVEFUVVMuQklSRDtcbiAgICBpZiAocmVzdWx0MS5sZW5ndGggPCAzICYmIHJlc3VsdDIubGVuZ3RoIDwgMyAmJiAhaXNDYW5Cb21iKSB7Ly/kuI3kvJrlj5HnlJ/mtojpmaTnmoTmg4XlhrVcbiAgICAgIHRoaXMuZXhjaGFuZ2VDZWxsKGxhc3RQb3MsIHBvcyk7XG4gICAgICBjdXJDbGlja0NlbGwubW92ZVRvQW5kQmFjayhsYXN0UG9zKTtcbiAgICAgIGxhc3RDbGlja0NlbGwubW92ZVRvQW5kQmFjayhwb3MpO1xuICAgICAgdGhpcy5sYXN0UG9zID0gY2MudjIoLTEsIC0xKTtcbiAgICAgIHJldHVybiBbdGhpcy5jaGFuZ2VNb2RlbHNdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubGFzdFBvcyA9IGNjLnYyKC0xLCAtMSk7XG4gICAgICBjdXJDbGlja0NlbGwubW92ZVRvKGxhc3RQb3MsIHRoaXMuY3VyVGltZSk7XG4gICAgICBsYXN0Q2xpY2tDZWxsLm1vdmVUbyhwb3MsIHRoaXMuY3VyVGltZSk7XG4gICAgICB2YXIgY2hlY2tQb2ludCA9IFtwb3MsIGxhc3RQb3NdO1xuICAgICAgdGhpcy5jdXJUaW1lICs9IEFOSVRJTUUuVE9VQ0hfTU9WRTtcbiAgICAgIHRoaXMucHJvY2Vzc0NydXNoKGNoZWNrUG9pbnQpO1xuICAgICAgcmV0dXJuIFt0aGlzLmNoYW5nZU1vZGVscywgdGhpcy5lZmZlY3RzUXVldWVdO1xuICAgIH1cbiAgfVxuICAvLyDmtojpmaRcbiAgcHJvY2Vzc0NydXNoKGNoZWNrUG9pbnQpIHtcbiAgICBsZXQgY3ljbGVDb3VudCA9IDA7XG4gICAgd2hpbGUgKGNoZWNrUG9pbnQubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGJvbWJNb2RlbHMgPSBbXTtcbiAgICAgIGlmIChjeWNsZUNvdW50ID09IDAgJiYgY2hlY2tQb2ludC5sZW5ndGggPT0gMikgeyAvL+eJueauiua2iOmZpFxuICAgICAgICBsZXQgcG9zMSA9IGNoZWNrUG9pbnRbMF07XG4gICAgICAgIGxldCBwb3MyID0gY2hlY2tQb2ludFsxXTtcbiAgICAgICAgbGV0IG1vZGVsMSA9IHRoaXMuY2VsbHNbcG9zMS55XVtwb3MxLnhdO1xuICAgICAgICBsZXQgbW9kZWwyID0gdGhpcy5jZWxsc1twb3MyLnldW3BvczIueF07XG4gICAgICAgIGlmIChtb2RlbDEuc3RhdHVzID09IENFTExfU1RBVFVTLkJJUkQgfHwgbW9kZWwyLnN0YXR1cyA9PSBDRUxMX1NUQVRVUy5CSVJEKSB7XG4gICAgICAgICAgbGV0IGJvbWJNb2RlbCA9IG51bGw7XG4gICAgICAgICAgaWYgKG1vZGVsMS5zdGF0dXMgPT0gQ0VMTF9TVEFUVVMuQklSRCkge1xuICAgICAgICAgICAgbW9kZWwxLnR5cGUgPSBtb2RlbDIudHlwZTtcbiAgICAgICAgICAgIGJvbWJNb2RlbHMucHVzaChtb2RlbDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGVsMi50eXBlID0gbW9kZWwxLnR5cGU7XG4gICAgICAgICAgICBib21iTW9kZWxzLnB1c2gobW9kZWwyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSBpbiBjaGVja1BvaW50KSB7XG4gICAgICAgIHZhciBwb3MgPSBjaGVja1BvaW50W2ldO1xuICAgICAgICBpZiAoIXRoaXMuY2VsbHNbcG9zLnldW3Bvcy54XSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBbcmVzdWx0LCBuZXdDZWxsU3RhdHVzLCBuZXdDZWxsVHlwZSwgY3J1c2hQb2ludF0gPSB0aGlzLmNoZWNrUG9pbnQocG9zLngsIHBvcy55LCB0cnVlKTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqIGluIHJlc3VsdCkge1xuICAgICAgICAgIHZhciBtb2RlbCA9IHRoaXMuY2VsbHNbcmVzdWx0W2pdLnldW3Jlc3VsdFtqXS54XTtcbiAgICAgICAgICB0aGlzLmNydXNoQ2VsbChyZXN1bHRbal0ueCwgcmVzdWx0W2pdLnksIGZhbHNlLCBjeWNsZUNvdW50KTtcbiAgICAgICAgICBpZiAobW9kZWwuc3RhdHVzICE9IENFTExfU1RBVFVTLkNPTU1PTikge1xuICAgICAgICAgICAgYm9tYk1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVOZXdDZWxsKGNydXNoUG9pbnQsIG5ld0NlbGxTdGF0dXMsIG5ld0NlbGxUeXBlKTtcblxuICAgICAgfVxuICAgICAgdGhpcy5wcm9jZXNzQm9tYihib21iTW9kZWxzLCBjeWNsZUNvdW50KTtcbiAgICAgIHRoaXMuY3VyVGltZSArPSBBTklUSU1FLkRJRTtcbiAgICAgIGNoZWNrUG9pbnQgPSB0aGlzLmRvd24oKTtcbiAgICAgIGN5Y2xlQ291bnQrKztcbiAgICB9XG4gIH1cblxuICAvL+eUn+aIkOaWsGNlbGxcbiAgY3JlYXRlTmV3Q2VsbChwb3MsIHN0YXR1cywgdHlwZSkge1xuICAgIGlmIChzdGF0dXMgPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09IENFTExfU1RBVFVTLkJJUkQpIHtcbiAgICAgIHR5cGUgPSBDRUxMX1RZUEUuQklSRFxuICAgIH1cbiAgICBsZXQgbW9kZWwgPSBuZXcgQ2VsbE1vZGVsKCk7XG4gICAgdGhpcy5jZWxsc1twb3MueV1bcG9zLnhdID0gbW9kZWxcbiAgICBtb2RlbC5pbml0KHR5cGUpO1xuICAgIG1vZGVsLnNldFN0YXJ0WFkocG9zLngsIHBvcy55KTtcbiAgICBtb2RlbC5zZXRYWShwb3MueCwgcG9zLnkpO1xuICAgIG1vZGVsLnNldFN0YXR1cyhzdGF0dXMpO1xuICAgIG1vZGVsLnNldFZpc2libGUoMCwgZmFsc2UpO1xuICAgIG1vZGVsLnNldFZpc2libGUodGhpcy5jdXJUaW1lLCB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZU1vZGVscy5wdXNoKG1vZGVsKTtcbiAgfVxuICAvLyDkuIvokL1cbiAgZG93bigpIHtcbiAgICBsZXQgbmV3Q2hlY2tQb2ludCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IEdSSURfV0lEVEg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IDE7IGogPD0gR1JJRF9IRUlHSFQ7IGorKykge1xuICAgICAgICBpZiAodGhpcy5jZWxsc1tpXVtqXSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1clJvdyA9IGk7XG4gICAgICAgICAgZm9yICh2YXIgayA9IGN1clJvdzsgayA8PSBHUklEX0hFSUdIVDsgaysrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jZWxsc1trXVtqXSkge1xuICAgICAgICAgICAgICB0aGlzLnB1c2hUb0NoYW5nZU1vZGVscyh0aGlzLmNlbGxzW2tdW2pdKTtcbiAgICAgICAgICAgICAgbmV3Q2hlY2tQb2ludC5wdXNoKHRoaXMuY2VsbHNba11bal0pO1xuICAgICAgICAgICAgICB0aGlzLmNlbGxzW2N1clJvd11bal0gPSB0aGlzLmNlbGxzW2tdW2pdO1xuICAgICAgICAgICAgICB0aGlzLmNlbGxzW2tdW2pdID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5jZWxsc1tjdXJSb3ddW2pdLnNldFhZKGosIGN1clJvdyk7XG4gICAgICAgICAgICAgIHRoaXMuY2VsbHNbY3VyUm93XVtqXS5tb3ZlVG8oY2MudjIoaiwgY3VyUm93KSwgdGhpcy5jdXJUaW1lKTtcbiAgICAgICAgICAgICAgY3VyUm93Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgZm9yICh2YXIgayA9IGN1clJvdzsgayA8PSBHUklEX0hFSUdIVDsgaysrKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2tdW2pdID0gbmV3IENlbGxNb2RlbCgpO1xuICAgICAgICAgICAgdGhpcy5jZWxsc1trXVtqXS5pbml0KHRoaXMuZ2V0UmFuZG9tQ2VsbFR5cGUoKSk7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2tdW2pdLnNldFN0YXJ0WFkoaiwgY291bnQgKyBHUklEX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLmNlbGxzW2tdW2pdLnNldFhZKGosIGNvdW50ICsgR1JJRF9IRUlHSFQpO1xuICAgICAgICAgICAgdGhpcy5jZWxsc1trXVtqXS5tb3ZlVG8oY2MudjIoaiwgayksIHRoaXMuY3VyVGltZSk7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VNb2RlbHMucHVzaCh0aGlzLmNlbGxzW2tdW2pdKTtcbiAgICAgICAgICAgIG5ld0NoZWNrUG9pbnQucHVzaCh0aGlzLmNlbGxzW2tdW2pdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN1clRpbWUgKz0gQU5JVElNRS5UT1VDSF9NT1ZFICsgMC4zXG4gICAgcmV0dXJuIG5ld0NoZWNrUG9pbnQ7XG4gIH1cblxuICBwdXNoVG9DaGFuZ2VNb2RlbHMobW9kZWwpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VNb2RlbHMuaW5kZXhPZihtb2RlbCkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VNb2RlbHMucHVzaChtb2RlbCk7XG4gIH1cblxuICBjbGVhbkNtZCgpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBHUklEX1dJRFRIOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IEdSSURfSEVJR0hUOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY2VsbHNbaV1bal0pIHtcbiAgICAgICAgICB0aGlzLmNlbGxzW2ldW2pdLmNtZCA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhjaGFuZ2VDZWxsKHBvczEsIHBvczIpIHtcbiAgICB2YXIgdG1wTW9kZWwgPSB0aGlzLmNlbGxzW3BvczEueV1bcG9zMS54XTtcbiAgICB0aGlzLmNlbGxzW3BvczEueV1bcG9zMS54XSA9IHRoaXMuY2VsbHNbcG9zMi55XVtwb3MyLnhdO1xuICAgIHRoaXMuY2VsbHNbcG9zMS55XVtwb3MxLnhdLnggPSBwb3MxLng7XG4gICAgdGhpcy5jZWxsc1twb3MxLnldW3BvczEueF0ueSA9IHBvczEueTtcbiAgICB0aGlzLmNlbGxzW3BvczIueV1bcG9zMi54XSA9IHRtcE1vZGVsO1xuICAgIHRoaXMuY2VsbHNbcG9zMi55XVtwb3MyLnhdLnggPSBwb3MyLng7XG4gICAgdGhpcy5jZWxsc1twb3MyLnldW3BvczIueF0ueSA9IHBvczIueTtcbiAgfVxuICAvLyDorr7nva7np43nsbtcbiAgLy8gVG9kbyDmlLnmiJDkubHluo/nrpfms5VcbiAgc2V0Q2VsbFR5cGVOdW0obnVtKSB7XG4gICAgY29uc29sZS5sb2coXCJudW0gPSBcIiwgbnVtKTtcbiAgICB0aGlzLmNlbGxUeXBlTnVtID0gbnVtO1xuICAgIHRoaXMuY2VsbENyZWF0ZVR5cGUgPSBbXTtcbiAgICBsZXQgY3JlYXRlVHlwZUxpc3QgPSB0aGlzLmNlbGxDcmVhdGVUeXBlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IENFTExfQkFTRU5VTTsgaSsrKSB7XG4gICAgICBjcmVhdGVUeXBlTGlzdC5wdXNoKGkpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0ZVR5cGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoQ0VMTF9CQVNFTlVNIC0gaSkpICsgaTtcbiAgICAgIGNyZWF0ZVR5cGVMaXN0W2ldLCBjcmVhdGVUeXBlTGlzdFtpbmRleF0gPSBjcmVhdGVUeXBlTGlzdFtpbmRleF0sIGNyZWF0ZVR5cGVMaXN0W2ldXG4gICAgfVxuICB9XG4gIC8vIOmaj+imgeeUn+aIkOS4gOS4quexu+Wei1xuICBnZXRSYW5kb21DZWxsVHlwZSgpIHtcbiAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNlbGxUeXBlTnVtKTtcbiAgICByZXR1cm4gdGhpcy5jZWxsQ3JlYXRlVHlwZVtpbmRleF07XG4gIH1cbiAgLy8gVE9ETyBib21iTW9kZWxz5Y676YeNXG4gIHByb2Nlc3NCb21iKGJvbWJNb2RlbHMsIGN5Y2xlQ291bnQpIHtcbiAgICB3aGlsZSAoYm9tYk1vZGVscy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbmV3Qm9tYk1vZGVsID0gW107XG4gICAgICBsZXQgYm9tYlRpbWUgPSBBTklUSU1FLkJPTUJfREVMQVk7XG4gICAgICBib21iTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbC5zdGF0dXMgPT0gQ0VMTF9TVEFUVVMuTElORSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEdSSURfV0lEVEg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbbW9kZWwueV1baV0pIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbbW9kZWwueV1baV0uc3RhdHVzICE9IENFTExfU1RBVFVTLkNPTU1PTikge1xuICAgICAgICAgICAgICAgIG5ld0JvbWJNb2RlbC5wdXNoKHRoaXMuY2VsbHNbbW9kZWwueV1baV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuY3J1c2hDZWxsKGksIG1vZGVsLnksIGZhbHNlLCBjeWNsZUNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5hZGRSb3dCb21iKHRoaXMuY3VyVGltZSwgY2MudjIobW9kZWwueCwgbW9kZWwueSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGVsLnN0YXR1cyA9PSBDRUxMX1NUQVRVUy5DT0xVTU4pIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBHUklEX0hFSUdIVDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jZWxsc1tpXVttb2RlbC54XSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5jZWxsc1tpXVttb2RlbC54XS5zdGF0dXMgIT0gQ0VMTF9TVEFUVVMuQ09NTU9OKSB7XG4gICAgICAgICAgICAgICAgbmV3Qm9tYk1vZGVsLnB1c2godGhpcy5jZWxsc1tpXVttb2RlbC54XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5jcnVzaENlbGwobW9kZWwueCwgaSwgZmFsc2UsIGN5Y2xlQ291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkZENvbEJvbWIodGhpcy5jdXJUaW1lLCBjYy52Mihtb2RlbC54LCBtb2RlbC55KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZWwuc3RhdHVzID09IENFTExfU1RBVFVTLldSQVApIHtcbiAgICAgICAgICBsZXQgeCA9IG1vZGVsLng7XG4gICAgICAgICAgbGV0IHkgPSBtb2RlbC55O1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEdSSURfSEVJR0hUOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IEdSSURfV0lEVEg7IGorKykge1xuICAgICAgICAgICAgICBsZXQgZGVsdGEgPSBNYXRoLmFicyh4IC0gaikgKyBNYXRoLmFicyh5IC0gaSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNlbGxzW2ldW2pdICYmIGRlbHRhIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jZWxsc1tpXVtqXS5zdGF0dXMgIT0gQ0VMTF9TVEFUVVMuQ09NTU9OKSB7XG4gICAgICAgICAgICAgICAgICBuZXdCb21iTW9kZWwucHVzaCh0aGlzLmNlbGxzW2ldW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jcnVzaENlbGwoaiwgaSwgZmFsc2UsIGN5Y2xlQ291bnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGVsLnN0YXR1cyA9PSBDRUxMX1NUQVRVUy5CSVJEKSB7XG4gICAgICAgICAgbGV0IGNydXNoVHlwZSA9IG1vZGVsLnR5cGVcbiAgICAgICAgICBpZiAoYm9tYlRpbWUgPCBBTklUSU1FLkJPTUJfQklSRF9ERUxBWSkge1xuICAgICAgICAgICAgYm9tYlRpbWUgPSBBTklUSU1FLkJPTUJfQklSRF9ERUxBWTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNydXNoVHlwZSA9PSBDRUxMX1RZUEUuQklSRCkge1xuICAgICAgICAgICAgY3J1c2hUeXBlID0gdGhpcy5nZXRSYW5kb21DZWxsVHlwZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBHUklEX0hFSUdIVDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBHUklEX1dJRFRIOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbaV1bal0gJiYgdGhpcy5jZWxsc1tpXVtqXS50eXBlID09IGNydXNoVHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNlbGxzW2ldW2pdLnN0YXR1cyAhPSBDRUxMX1NUQVRVUy5DT01NT04pIHtcbiAgICAgICAgICAgICAgICAgIG5ld0JvbWJNb2RlbC5wdXNoKHRoaXMuY2VsbHNbaV1bal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNydXNoQ2VsbChqLCBpLCB0cnVlLCBjeWNsZUNvdW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvL3RoaXMuY3J1c2hDZWxsKG1vZGVsLngsIG1vZGVsLnkpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIGlmIChib21iTW9kZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5jdXJUaW1lICs9IGJvbWJUaW1lO1xuICAgICAgfVxuICAgICAgYm9tYk1vZGVscyA9IG5ld0JvbWJNb2RlbDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0ge+W8gOWni+aSreaUvueahOaXtumXtH0gcGxheVRpbWUgXG4gICAqIEBwYXJhbSB7KmNlbGzkvY3nva59IHBvcyBcbiAgICogQHBhcmFtIHsq56ys5Yeg5qyh5raI6Zmk77yM55So5LqO5pKt5pS+6Z+z5pWIfSBzdGVwIFxuICAgKi9cbiAgYWRkQ3J1c2hFZmZlY3QocGxheVRpbWUsIHBvcywgc3RlcCkge1xuICAgIHRoaXMuZWZmZWN0c1F1ZXVlLnB1c2goe1xuICAgICAgcGxheVRpbWUsXG4gICAgICBwb3MsXG4gICAgICBhY3Rpb246IFwiY3J1c2hcIixcbiAgICAgIHN0ZXBcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFJvd0JvbWIocGxheVRpbWUsIHBvcykge1xuICAgIHRoaXMuZWZmZWN0c1F1ZXVlLnB1c2goe1xuICAgICAgcGxheVRpbWUsXG4gICAgICBwb3MsXG4gICAgICBhY3Rpb246IFwicm93Qm9tYlwiXG4gICAgfSk7XG4gIH1cblxuICBhZGRDb2xCb21iKHBsYXlUaW1lLCBwb3MpIHtcbiAgICB0aGlzLmVmZmVjdHNRdWV1ZS5wdXNoKHtcbiAgICAgIHBsYXlUaW1lLFxuICAgICAgcG9zLFxuICAgICAgYWN0aW9uOiBcImNvbEJvbWJcIlxuICAgIH0pO1xuICB9XG5cbiAgYWRkV3JhcEJvbWIocGxheVRpbWUsIHBvcykge1xuICAgIC8vIFRPRE9cbiAgfVxuICAvLyBjZWxs5raI6Zmk6YC76L6RXG4gIGNydXNoQ2VsbCh4LCB5LCBuZWVkU2hha2UsIHN0ZXApIHtcbiAgICBsZXQgbW9kZWwgPSB0aGlzLmNlbGxzW3ldW3hdO1xuICAgIHRoaXMucHVzaFRvQ2hhbmdlTW9kZWxzKG1vZGVsKTtcbiAgICBpZiAobmVlZFNoYWtlKSB7XG4gICAgICBtb2RlbC50b1NoYWtlKHRoaXMuY3VyVGltZSlcbiAgICB9XG5cbiAgICBsZXQgc2hha2VUaW1lID0gbmVlZFNoYWtlID8gQU5JVElNRS5ESUVfU0hBS0UgOiAwO1xuICAgIG1vZGVsLnRvRGllKHRoaXMuY3VyVGltZSArIHNoYWtlVGltZSk7XG4gICAgdGhpcy5hZGRDcnVzaEVmZmVjdCh0aGlzLmN1clRpbWUgKyBzaGFrZVRpbWUsIGNjLnYyKG1vZGVsLngsIG1vZGVsLnkpLCBzdGVwKTtcbiAgICB0aGlzLmNlbGxzW3ldW3hdID0gbnVsbDtcbiAgfVxuXG59XG5cbiJdfQ==