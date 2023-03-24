System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, VDScreenManager, _dec, _class, _crd, ccclass, property, ex_LoadingScreen;

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
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
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
          log("onClickBtn2MainGame");
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.load("res/prefabs/screen/loading_screen", Prefab, (error, prefab) => {
            if (error) {
              log("bundle.load: " + error);
            } else {
              log("load loading sucess"); // VDScreenManager.instance.initWithRootScreen(prefab);

              (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.initWithRootScreen(prefab, screen => {
                log('initWithRootScreen ' + screen.name + ' success!');
              });
            }
          }); // let level_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/play_screen_2', Prefab)!;
          // VDScreenManager.instance.pushScreen(level_screen, (screen: VDBaseScreen) => { }, true);
          // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/play_screen', Prefab)!;
          // VDScreenManager.instance.replaceScreenAtIndex(play_screen, 0, (screen: VDBaseScreen) => {
          //     ex_Director.instance.playScreen = screen as ex_LevelComparison;
          // });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36787047a24403668f39dfe591e5006bada9235a.js.map