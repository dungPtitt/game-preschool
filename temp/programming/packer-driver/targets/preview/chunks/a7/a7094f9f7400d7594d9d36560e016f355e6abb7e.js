System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CCString, assetManager, log, director, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, StartScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCString = _cc.CCString;
      assetManager = _cc.assetManager;
      log = _cc.log;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb15e0tuKtHqajLSQvvj449", "StartScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'CCString', 'assetManager', 'log', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartScene", StartScene = (_dec = ccclass('StartScene'), _dec2 = property(CCString), _dec3 = property(CCString), _dec(_class = (_class2 = class StartScene extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bundleGameName", _descriptor, this);

          _initializerDefineProperty(this, "sceneName", _descriptor2, this);
        }

        onLoad() {
          assetManager.loadBundle(this.bundleGameName, (err, bundle) => {
            if (err) {
              log("@@@ loadBundle error: " + this.bundleGameName);
            } else {
              bundle.loadScene(this.sceneName, (err, scene) => {
                if (err) {
                  log("@@@ loadScene error: " + this.sceneName);
                } else {
                  director.runScene(scene);
                }
              });
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bundleGameName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sceneName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7094f9f7400d7594d9d36560e016f355e6abb7e.js.map