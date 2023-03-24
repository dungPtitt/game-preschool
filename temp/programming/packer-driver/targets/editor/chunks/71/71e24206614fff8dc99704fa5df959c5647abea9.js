System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, log, Prefab, Button, UIOpacity, VDScreenManager, LocalDataManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ex_ComparisonScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

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
      Node = _cc.Node;
      log = _cc.log;
      Prefab = _cc.Prefab;
      Button = _cc.Button;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      LocalDataManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e98adoqUDpILZe+ENHlGwNH", "ex_ComparisonScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'Prefab', 'Button', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_ComparisonScreen", ex_ComparisonScreen = (_dec = ccclass('ex_ComparisonScreen'), _dec2 = property(Node), _dec(_class = (_class2 = class ex_ComparisonScreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listLevel", _descriptor, this);
        }

        start() {
          this.canPlayLevel();
        }

        canPlayLevel() {
          let ob = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          let checkDone = ob.comparison;

          for (let i = 0; i < this.listLevel.length; i++) {
            if (checkDone[i + 1]) {
              // khong the choi
              let btnLevel = this.listLevel[i];
              log("check btn: ", btnLevel);
              let btn = btnLevel.getComponent(Button);
              btn.onDisable();
              btnLevel.getComponent(UIOpacity).opacity = 150;
            }
          }
        }

        onClickBtnNext() {
          log(`onClickBtnNext`); // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/level1', Prefab)!;
          // VDScreenManager.instance.pushScreen(play_screen, (screen: VDBaseScreen) => { }, true);
        }

        onClickBackHome() {
          log(`onClickBtnBackToScreen1 1`);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen();
        }

        onClickBtnLevel1() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level1', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

        onClickBtnLevel2() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level2', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

        onClickBtnLevel3() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level3', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

        onClickBtnLevel4() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level4', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

        onClickBtnLevel5() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level5', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=71e24206614fff8dc99704fa5df959c5647abea9.js.map