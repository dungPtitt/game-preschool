System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, dm_Config;

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

      _cclegacy._RF.push({}, "43db1ipumpOPoNoDG4jEX+e", "dm_Config", undefined);

      _export("dm_Config", dm_Config = {
        GAME_ID: '1000',
        GAME_NAME: 'domino',
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
//# sourceMappingURL=269616416ba3ac6961ef303e82b4d1cb9c309075.js.map