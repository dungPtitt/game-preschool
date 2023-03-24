System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, assetManager, _dec, _class, _crd, ccclass, property, ex_Scence;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d23a7Ig2FpBVIUcc8XQYv4A", "ex_Scene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_Scence", ex_Scence = (_dec = ccclass('ex_Scence'), _dec(_class = class ex_Scence extends Component {
        onLoad() {
          log("@ dm_Scene: onLoad  !!!");
          let bundle = assetManager.getBundle("bundle_" + dm_Config.GAME_NAME);

          if (bundle) {
            this.node.addComponent(VDScreenManager);
            VDScreenManager.instance.assetBundle = bundle;
            VDScreenManager.instance.setupCommon();
            bundle.load("res/prefabs/screen/loading_screen", Prefab, (error, prefab) => {
              if (error) {
                log(`bundle.load: ${error}`);
              } else {
                log("load loading sucess"); // VDScreenManager.instance.initWithRootScreen(prefab);

                VDScreenManager.instance.initWithRootScreen(prefab, screen => {
                  log('initWithRootScreen ' + screen.name + ' success!');
                });
              }
            });
          }
        }

        onDestroy() {
          VDAudioManager.instance.destroy();
          VDAsyncTaskMgr.instance.stop();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12a641c81e532847804908dcadab1e913a991ff1.js.map