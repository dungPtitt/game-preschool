System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, assetManager, Prefab, VDAsyncTaskMgr, VDAudioManager, VDScreenManager, dm_Config, _dec, _class, _crd, ccclass, property, dm_Scene;

  function _reportPossibleCrUseOfVDAsyncTaskMgr(extras) {
    _reporterNs.report("VDAsyncTaskMgr", "../../../vd-framework/async-task/VDAsyncTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDAudioManager(extras) {
    _reporterNs.report("VDAudioManager", "../../../vd-framework/audio/VDAudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdm_Config(extras) {
    _reporterNs.report("dm_Config", "./common/dm_Config", _context.meta, extras);
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
      dm_Config = _unresolved_5.dm_Config;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a49btJYpNP4pUtu5hEau8A", "dm_Scene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'assetManager', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_Scene", dm_Scene = (_dec = ccclass('dm_Scene'), _dec(_class = class dm_Scene extends Component {
        onLoad() {
          log("@ dm_Scene: onLoad  !!!");
          let bundle = assetManager.getBundle("bundle_" + (_crd && dm_Config === void 0 ? (_reportPossibleCrUseOfdm_Config({
            error: Error()
          }), dm_Config) : dm_Config).GAME_NAME);

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
            bundle.load("res/prefabs/screen/loading_screen", Prefab, (error, prefab) => {
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
//# sourceMappingURL=83465d88b63289bed9e7e8b39a74ce26444c61cc.js.map