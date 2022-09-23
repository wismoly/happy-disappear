"use strict";
cc._RF.push(module, '5a4d0rEszhGNqSG/EcGQQi5', 'ModelUtils');
// Script/Utils/ModelUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusivePoint = exports.mergePointArray = void 0;
/**
 * 合并
 * @param rowPoints
 * @param colPoints
 */
function mergePointArray(rowPoints, colPoints) {
    var result = rowPoints.concat();
    colPoints = colPoints.filter(function (colEle) {
        var repeat = false;
        result.forEach(function (rowEle) {
            if (colEle.equals(rowEle)) {
                repeat = true;
            }
        }, this);
        return !repeat;
    }, this);
    result.push.apply(result, colPoints);
    return result;
}
exports.mergePointArray = mergePointArray;
/**
 * 减法
 * @param points
 * @param exclusivePoint
 */
function exclusivePoint(points, exclusivePoint) {
    var result = new Array();
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var point = points_1[_i];
        if (!point.equals(exclusivePoint)) {
            result.push(point);
        }
    }
    return result;
}
exports.exclusivePoint = exclusivePoint;

cc._RF.pop();