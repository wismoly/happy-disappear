
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Controller/GameController');
require('./assets/Script/Controller/LoginController');
require('./assets/Script/Model/CellModel');
require('./assets/Script/Model/ConstValue');
require('./assets/Script/Model/GameModel');
require('./assets/Script/UnitTest/GameModelTest');
require('./assets/Script/Utils/AudioUtils');
require('./assets/Script/Utils/ModelUtils');
require('./assets/Script/Utils/Toast');
require('./assets/Script/View/CellView');
require('./assets/Script/View/EffectLayer');
require('./assets/Script/View/GridView');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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