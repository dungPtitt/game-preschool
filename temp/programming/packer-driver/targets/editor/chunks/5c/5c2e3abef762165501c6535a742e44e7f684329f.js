System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, Prefab, VDScreenManager, _dec, _class, _crd, ccclass, property, ex_MainScreen;

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

      _cclegacy._RF.push({}, "05715Fk5MhGTpRk0iwppszP", "ex_MainScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'Prefab', 'sys', 'Asset', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_MainScreen", ex_MainScreen = (_dec = ccclass('ex_MainScreen'), _dec(_class = class ex_MainScreen extends Component {
        onClickBtnLevelComparison() {
          log(`onClickBtn2MainGame`); // VDScreenManager.instance.assetBundle.load("res/prefabs/screen/level_comparison_screen", Prefab, (error, prefab) => {
          //     if (error) {
          //         log(`bundle.load: ${error}`);
          //     }
          //     else {
          //         log("load loading sucess")
          //         // VDScreenManager.instance.initWithRootScreen(prefab);
          //         VDScreenManager.instance.initWithRootScreen(prefab, (screen) => {
          //             log('initWithRootScreen ' + screen.name + ' success!');
          //         });
          //     }
          // })
          // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/level_comparison_screen', Prefab)!;
          // VDScreenManager.instance.replaceScreenAtIndex(play_screen, 0, (screen: VDBaseScreen) => {
          // });

          let match_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/level_comparison_screen', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(match_screen, screen => {}, true);
        }

        onClickMatchScreen() {
          log("on click match screen");
          let match_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/match_screen', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(match_screen, screen => {}, true); // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/level1', Prefab)!;
          // VDScreenManager.instance.replaceScreenAtIndex(play_screen, 0, (screen: VDBaseScreen) => {
          // });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c2e3abef762165501c6535a742e44e7f684329f.js.map