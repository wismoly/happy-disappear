"use strict";
cc._RF.push(module, 'f9088esGbNBtJmNaJsz0Gq4', 'ConstValue');
// Script/Model/ConstValue.js

"use strict";

exports.__esModule = true;
exports.ANITIME = exports.GRID_PIXEL_HEIGHT = exports.GRID_PIXEL_WIDTH = exports.CELL_HEIGHT = exports.CELL_WIDTH = exports.GRID_HEIGHT = exports.GRID_WIDTH = exports.CELL_STATUS = exports.CELL_BASENUM = exports.CELL_TYPE = void 0;
var CELL_TYPE = {
  EMPTY: 0,
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  BIRD: 7
};
exports.CELL_TYPE = CELL_TYPE;
var CELL_BASENUM = 6;
exports.CELL_BASENUM = CELL_BASENUM;
var CELL_STATUS = {
  COMMON: 0,
  CLICK: "click",
  LINE: "line",
  COLUMN: "column",
  WRAP: "wrap",
  BIRD: "bird"
};
exports.CELL_STATUS = CELL_STATUS;
var GRID_WIDTH = 9;
exports.GRID_WIDTH = GRID_WIDTH;
var GRID_HEIGHT = 9;
exports.GRID_HEIGHT = GRID_HEIGHT;
var CELL_WIDTH = 70;
exports.CELL_WIDTH = CELL_WIDTH;
var CELL_HEIGHT = 70;
exports.CELL_HEIGHT = CELL_HEIGHT;
var GRID_PIXEL_WIDTH = GRID_WIDTH * CELL_WIDTH;
exports.GRID_PIXEL_WIDTH = GRID_PIXEL_WIDTH;
var GRID_PIXEL_HEIGHT = GRID_HEIGHT * CELL_HEIGHT; // ********************   时间表  animation time **************************

exports.GRID_PIXEL_HEIGHT = GRID_PIXEL_HEIGHT;
var ANITIME = {
  TOUCH_MOVE: 0.3,
  DIE: 0.2,
  DOWN: 0.5,
  BOMB_DELAY: 0.3,
  BOMB_BIRD_DELAY: 0.7,
  DIE_SHAKE: 0.4 // 死前抖动

};
exports.ANITIME = ANITIME;

cc._RF.pop();