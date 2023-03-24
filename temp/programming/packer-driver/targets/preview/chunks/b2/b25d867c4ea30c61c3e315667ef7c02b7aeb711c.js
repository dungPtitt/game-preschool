System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, Label, LocalDataManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, level_progress_bar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLocalDataManager(extras) {
    _reporterNs.report("LocalDataManager", "../common/LocalDataManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      LocalDataManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20bb8R1CLZCMoBDhbe0bC60", "level_progress_bar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar', 'Label', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level_progress_bar", level_progress_bar = (_dec = ccclass('level_progress_bar'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = class level_progress_bar extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelProgress", _descriptor, this);

          _initializerDefineProperty(this, "levelLabel", _descriptor2, this);
        }

        start() {
          this.levelProgress.progress = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getNumber("percent", 0);
          this.levelLabel.string = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getString("level", "1");
        }

        init() {
          this.levelProgress.progress = 0;
        }

        handleProgress() {
          var currentLevel = Number(this.levelLabel.string);

          if (currentLevel <= 10 || currentLevel >= 25) {
            this.levelProgress.progress += 0.2;
          } else {
            this.levelProgress.progress += 1 / 7;
          }

          if (this.levelProgress.progress >= 0.95) {
            this.levelProgress.progress = 0;
            this.levelLabel.string = String(currentLevel + 1);
          }

          (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).setNumber("percent", this.levelProgress.progress);
          (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).setString("level", this.levelLabel.string);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec3], {
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
//# sourceMappingURL=b25d867c4ea30c61c3e315667ef7c02b7aeb711c.js.map