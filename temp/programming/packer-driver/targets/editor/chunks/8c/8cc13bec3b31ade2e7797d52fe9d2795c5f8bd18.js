System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, VDScreenManager, ex_Director, _dec, _class, _crd, ccclass, property, ex_LoadingScreen;

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfex_Director(extras) {
    _reporterNs.report("ex_Director", "../common/ex_Director", _context.meta, extras);
  }

  function _reportPossibleCrUseOfex_LevelComparison(extras) {
    _reporterNs.report("ex_LevelComparison", "./ex_LevelComparison", _context.meta, extras);
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
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ex_Director = _unresolved_3.ex_Director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05715Fk5MhGTpRk0iwppszP", "ex_LoadingScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_LoadingScreen", ex_LoadingScreen = (_dec = ccclass('ex_LoadingScreen'), _dec(_class = class ex_LoadingScreen extends Component {
        start() {}

        onClickBtnLevelComparison() {
          log(`onClickBtn2MainGame`); // let level_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/play_screen_2', Prefab)!;
          // VDScreenManager.instance.pushScreen(level_screen, (screen: VDBaseScreen) => { }, true);

          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/play_screen', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.replaceScreenAtIndex(play_screen, 0, screen => {
            (_crd && ex_Director === void 0 ? (_reportPossibleCrUseOfex_Director({
              error: Error()
            }), ex_Director) : ex_Director).instance.playScreen = screen;
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cc13bec3b31ade2e7797d52fe9d2795c5f8bd18.js.map