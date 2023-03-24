System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, Prefab, VDScreenManager, _dec, _class, _crd, ccclass, property, ex_LevelComparison;

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
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
      log = _cc.log;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e98adoqUDpILZe+ENHlGwNH", "ex_ComparisonScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_LevelComparison", ex_LevelComparison = (_dec = ccclass('ex_LevelComparison'), _dec(_class = class ex_LevelComparison extends Component {
        onClickBtnNext() {
          log(`onClickBtnNext`); // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/level1', Prefab)!;
          // VDScreenManager.instance.pushScreen(play_screen, (screen: VDBaseScreen) => { }, true);
        }

        onClickBackHome() {
          log(`onClickBtnBackToScreen1 1`);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen(); // VDScreenManager.instance.popToScreen(dm_PlayScreen);
          // VDScreenManager.instance.popToScreen('dm_PlayScreen');
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
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level1', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

        onClickBtnLevel3() {
          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level1', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, true);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=59d5e78f47d18dbc9b73625bdb2a82aefe14b219.js.map