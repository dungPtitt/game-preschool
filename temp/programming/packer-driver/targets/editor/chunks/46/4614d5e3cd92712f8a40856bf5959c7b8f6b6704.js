System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, dm_Director;

  function _reportPossibleCrUseOfdm_PlayScreen(extras) {
    _reporterNs.report("dm_PlayScreen", "../screens/dm_PlayScreen", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19697SAoK9IlqL2vDorqtRW", "dm_Director", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_Director", dm_Director = (_dec = ccclass('dm_Director'), _dec(_class = (_class2 = class dm_Director extends Component {
        constructor(...args) {
          super(...args);
          this.playScreen = null;
        }

        static get instance() {
          if (this._instance == null) {
            this._instance = new dm_Director();
          }

          return this._instance;
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4614d5e3cd92712f8a40856bf5959c7b8f6b6704.js.map