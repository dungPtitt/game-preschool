System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDGameLoop, VDViewGroup, _class, _class2, _descriptor, _crd, cc, ccclass, property, VDBaseScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDGameLoop(extras) {
    _reporterNs.report("VDGameLoop", "../common/VDGameLoop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDViewGroup(extras) {
    _reporterNs.report("VDViewGroup", "./VDViewGroup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      VDGameLoop = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDViewGroup = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "114d53eZPdIKrVzHARXEtCm", "VDBaseScreen", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDBaseScreen = ccclass(_class = (_class2 = class VDBaseScreen extends (_crd && VDViewGroup === void 0 ? (_reportPossibleCrUseOfVDViewGroup({
        error: Error()
      }), VDViewGroup) : VDViewGroup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "hideCurScreenOnShow", _descriptor, this);

          this.needLooping = false;
        }

        start() {
          if (this.needLooping) {
            this._createGameLoop();
          } // VDAsyncTaskMgr.instance.schedule();

        }

        onDisable() {
          if (this.needLooping) {
            (_crd && VDGameLoop === void 0 ? (_reportPossibleCrUseOfVDGameLoop({
              error: Error()
            }), VDGameLoop) : VDGameLoop).instance.stop();
          }
        }

        _createGameLoop() {
          (_crd && VDGameLoop === void 0 ? (_reportPossibleCrUseOfVDGameLoop({
            error: Error()
          }), VDGameLoop) : VDGameLoop).instance.start();
          (_crd && VDGameLoop === void 0 ? (_reportPossibleCrUseOfVDGameLoop({
            error: Error()
          }), VDGameLoop) : VDGameLoop).instance.addFunc("update_screen", this, this.updateScreen.bind(this));
        }

        updateScreen() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hideCurScreenOnShow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      })), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee104b8ef63ccdbdfe12df1429c98b1524d14ae6.js.map