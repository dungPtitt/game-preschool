System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, log, VDBaseScreen, VDScreenManager, _dec, _class, _crd, ccclass, property, dm_PlayScreen;

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
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      log = _cc.log;
    }, function (_unresolved_2) {
      VDBaseScreen = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDScreenManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc87f9zB2tLo6hA0M+JnRvS", "dm_PlayScreen", undefined);

      __checkObsolete__(['Prefab']);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_PlayScreen", dm_PlayScreen = (_dec = ccclass('dm_PlayScreen'), _dec(_class = class dm_PlayScreen extends (_crd && VDBaseScreen === void 0 ? (_reportPossibleCrUseOfVDBaseScreen({
        error: Error()
      }), VDBaseScreen) : VDBaseScreen) {
        onClickBtnNext() {
          log("onClickBtnNext");
          var play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/play_screen_2', Prefab);
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
//# sourceMappingURL=5876a484632fa5c505f0bb5738700fe4df0ccc79.js.map