System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, _dec, _class, _crd, ccclass, property, ex_LoadingScreen;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
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
          log(`onClickBtn2MainGame`); // let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/play_screen', Prefab)!;
          // VDScreenManager.instance.replaceScreenAtIndex(play_screen, 0, (screen: VDBaseScreen) => {
          //     ex_Director.instance.playScreen = screen as dm_PlayScreen;
          // });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ba48fda93adca19559e2c4d015b9138a616a191.js.map