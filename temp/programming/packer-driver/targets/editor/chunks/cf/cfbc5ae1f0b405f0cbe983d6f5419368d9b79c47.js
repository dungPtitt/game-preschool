System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, assetManager, Prefab, VDAsyncTaskMgr, VDAudioManager, VDScreenManager, ex_Config, _dec, _class, _crd, ccclass, property, ex_Scence;

  function _reportPossibleCrUseOfVDAsyncTaskMgr(extras) {
    _reporterNs.report("VDAsyncTaskMgr", "../../../vd-framework/async-task/VDAsyncTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDAudioManager(extras) {
    _reporterNs.report("VDAudioManager", "../../../vd-framework/audio/VDAudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfex_Config(extras) {
    _reporterNs.report("ex_Config", "./common/ex_Config", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      VDAsyncTaskMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDAudioManager = _unresolved_3.VDAudioManager;
    }, function (_unresolved_4) {
      VDScreenManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      ex_Config = _unresolved_5.ex_Config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d23a7Ig2FpBVIUcc8XQYv4A", "ex_Scene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'assetManager', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_Scence", ex_Scence = (_dec = ccclass('ex_Scence'), _dec(_class = class ex_Scence extends Component {
        onLoad() {
          log("@ dm_Scene: onLoad  !!!");
          let bundle = assetManager.getBundle("bundle_" + (_crd && ex_Config === void 0 ? (_reportPossibleCrUseOfex_Config({
            error: Error()
          }), ex_Config) : ex_Config).GAME_NAME);

          if (bundle) {
            this.node.addComponent(_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager);
            (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.assetBundle = bundle;
            (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.setupCommon();
            bundle.load("res/prefabs/screen/loading_screen2", Prefab, (error, prefab) => {
              if (error) {
                log(`bundle.load: ${error}`);
              } else {
                log("load loading sucess"); // VDScreenManager.instance.initWithRootScreen(prefab);

                (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                  error: Error()
                }), VDScreenManager) : VDScreenManager).instance.initWithRootScreen(prefab, screen => {
                  log('initWithRootScreen ' + screen.name + ' success!');
                });
              }
            });
          }
        }

        onDestroy() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.destroy();
          (_crd && VDAsyncTaskMgr === void 0 ? (_reportPossibleCrUseOfVDAsyncTaskMgr({
            error: Error()
          }), VDAsyncTaskMgr) : VDAsyncTaskMgr).instance.stop();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfbc5ae1f0b405f0cbe983d6f5419368d9b79c47.js.map