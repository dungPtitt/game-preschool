System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, level_progress_bar;

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
      ProgressBar = _cc.ProgressBar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20bb8R1CLZCMoBDhbe0bC60", "level_progress_bar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level_progress_bar", level_progress_bar = (_dec = ccclass('level_progress_bar'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class level_progress_bar extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelProgress", _descriptor, this);
        }

        start() {}

        init() {
          this.levelProgress.progress = 0;
        }

        handleProgress() {
          this.levelProgress.progress += 0.1;

          if (this.levelProgress.progress >= 1.0) {
            this.levelProgress.progress = 0;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87ee97e5ab2ab4a95ba2f73f1376f5bc0380ee68.js.map