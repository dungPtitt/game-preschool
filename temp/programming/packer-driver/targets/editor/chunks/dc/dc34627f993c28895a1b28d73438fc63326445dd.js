System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, log, _decorator, Component, VDScreenManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, dm_PlayScreen3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdm_Popup(extras) {
    _reporterNs.report("dm_Popup1", "../popups/dm_Popup1", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      log = _cc.log;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "223d6Qqdj5FqIaCzQDZZSoA", "dm_PlayScreen3", undefined);

      __checkObsolete__(['Label', 'log', 'Prefab']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_PlayScreen3", dm_PlayScreen3 = (_dec = ccclass('dm_PlayScreen3'), _dec2 = property(Label), _dec(_class = (_class2 = class dm_PlayScreen3 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbNotify", _descriptor, this);
        }

        onClickBtnBackToScreen1() {
          log(`onClickBtnBackToScreen1 1`);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen(); // VDScreenManager.instance.popToScreen(dm_PlayScreen);
          // VDScreenManager.instance.popToScreen('dm_PlayScreen');
        }

        onClickBtnShowPopup() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showPopupFromPrefabName("res/prefabs/popup/popup_1", popup => {
            let popupWin = popup;

            popupWin.finishedCallback = () => {
              log(' Just Closed Popup !!!');
              this.lbNotify.string = 'Just Closed Popup! ';
              this.lbNotify && (this.lbNotify.node.active = true);
            };
          }, true, true, true);
        }

        onClickBtnShowTableView() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showPopupFromPrefabName("res/prefabs/popup/popup_table_view", popup => {}, true, true, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbNotify", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc34627f993c28895a1b28d73438fc63326445dd.js.map