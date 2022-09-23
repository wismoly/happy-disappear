"use strict";
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