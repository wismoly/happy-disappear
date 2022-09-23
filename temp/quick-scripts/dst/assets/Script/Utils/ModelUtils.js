
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils/ModelUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVXRpbHMvTW9kZWxVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7QUFDSCxTQUFpQixlQUFlLENBQUMsU0FBcUIsRUFBRSxTQUFvQjtJQUN4RSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxNQUFNO1FBQ3pDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsTUFBTTtZQUMzQixJQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUM7Z0JBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUE7YUFDaEI7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNULE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxFQUFTLFNBQVMsRUFBRTtJQUMxQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBYkQsMENBYUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLE1BQWlCLEVBQUUsY0FBdUI7SUFDckUsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztJQUNsQyxLQUFpQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBQztRQUFwQixJQUFJLEtBQUssZUFBQTtRQUNULElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFSRCx3Q0FRQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5ZCI5bm2XG4gKiBAcGFyYW0gcm93UG9pbnRzXG4gKiBAcGFyYW0gY29sUG9pbnRzXG4gKi9cbmV4cG9ydCAgZnVuY3Rpb24gbWVyZ2VQb2ludEFycmF5KHJvd1BvaW50cyA6IGNjLlZlYzJbXSwgY29sUG9pbnRzOiBjYy5WZWMyW10pe1xuICAgIGxldCByZXN1bHQgPSByb3dQb2ludHMuY29uY2F0KCk7XG4gICAgY29sUG9pbnRzID0gY29sUG9pbnRzLmZpbHRlcihmdW5jdGlvbiAoY29sRWxlKSB7XG4gICAgICAgIGxldCByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKHJvd0VsZSkge1xuICAgICAgICAgICAgaWYoY29sRWxlLmVxdWFscyhyb3dFbGUpKXtcbiAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICByZXR1cm4gIXJlcGVhdDtcbiAgICB9LCB0aGlzKTtcbiAgICByZXN1bHQucHVzaCguLi5jb2xQb2ludHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICog5YeP5rOVXG4gKiBAcGFyYW0gcG9pbnRzXG4gKiBAcGFyYW0gZXhjbHVzaXZlUG9pbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1c2l2ZVBvaW50KHBvaW50czogY2MuVmVjMltdLCBleGNsdXNpdmVQb2ludDogY2MuVmVjMil7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheTxjYy5WZWMyPigpO1xuICAgIGZvcihsZXQgcG9pbnQgb2YgcG9pbnRzKXtcbiAgICAgICAgaWYoIXBvaW50LmVxdWFscyhleGNsdXNpdmVQb2ludCkpe1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocG9pbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59Il19