System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, ex_Config;

  function _reportPossibleCrUseOfVDGameConfig(extras) {
    _reporterNs.report("VDGameConfig", "../../../../vd-framework/common/VDGameConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dff0eDvNr1C6JTcRy7H3eeE", "ex_Config", undefined);

      _export("ex_Config", ex_Config = {
        GAME_ID: '1000',
        GAME_NAME: 'exam',
        versionGame: '1.0.0',
        isShowFPS: true,
        isUnitTest: true,
        //------ extends
        win_coin: 1000
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fad1075597a75bfb380c1ee012d215326331c14c.js.map