System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Label, log, VDAudioManager, VDBasePopup, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, dm_PopupNotify;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDAudioManager(extras) {
    _reporterNs.report("VDAudioManager", "../../../../vd-framework/audio/VDAudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Label = _cc.Label;
      log = _cc.log;
    }, function (_unresolved_2) {
      VDAudioManager = _unresolved_2.VDAudioManager;
    }, function (_unresolved_3) {
      VDBasePopup = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52a2ccw8UtF76Z/A4kMSPYA", "dm_PopupNotify", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Label', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_PopupNotify", dm_PopupNotify = (_dec = ccclass('dm_PopupNotify'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class dm_PopupNotify extends (_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
        error: Error()
      }), VDBasePopup) : VDBasePopup) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentPopup", _descriptor, this);

          _initializerDefineProperty(this, "layoutNodeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "btnYes", _descriptor3, this);

          _initializerDefineProperty(this, "btnNo", _descriptor4, this);

          _initializerDefineProperty(this, "btnConfirm", _descriptor5, this);

          this.btnYesCallback = null;
          this.btnNoCallback = null;
          this.btnConfirmCallback = null;
        }

        onLoad() {}

        disableAllBtn() {
          this.btnYes.active = false;
          this.btnNo.active = false;
          this.btnConfirm.active = false;
          this.layoutNodeBtn.active = false;
        }

        setupPopup(content, listCallback) {
          log("listCallback   " + listCallback.length);
          this.contentPopup.string = content;
          this.disableAllBtn();

          if (listCallback.length == 2) {
            this.layoutNodeBtn.active = true;
            this.btnYes.active = true;
            this.btnNo.active = true;
            this.btnYesCallback = listCallback[0];
            this.btnNoCallback = listCallback[1];
          } else {
            if (listCallback.length == 1) {
              this.layoutNodeBtn.active = true;
              this.btnConfirm.active = true;
              this.btnConfirmCallback = listCallback[0];
            }
          }
        }

        onClickBtnYes() {
          log("onClickBtnYes");
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playEffect("domi_sfx_click");

          if (this.btnYesCallback) {
            this.btnYesCallback();
          }
        }

        onClickBtnNo() {
          log("onClickBtnNo");
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playEffect("domi_sfx_click");

          if (this.btnNoCallback) {
            this.btnNoCallback();
          }
        }

        onClickBtnConfirm() {
          log("onClickBtnConfirm");
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playEffect("domi_sfx_click");

          if (this.btnConfirmCallback) {
            this.btnConfirmCallback();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentPopup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layoutNodeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnYes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnNo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnConfirm", [_dec6], {
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
//# sourceMappingURL=d23d1d607fe0505124b112b1ca1f598a88f01364.js.map