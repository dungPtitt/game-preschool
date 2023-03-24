System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, ex_Director;

  function _reportPossibleCrUseOfex_LevelComparison(extras) {
    _reporterNs.report("ex_LevelComparison", "../screens/ex_LevelComparison", _context.meta, extras);
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

      _cclegacy._RF.push({}, "4f2e8c+wQxGHapXnay3V4nT", "ex_Director", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_Director", ex_Director = (_dec = ccclass('ex_Director'), _dec(_class = (_class2 = class ex_Director extends Component {
        constructor(...args) {
          super(...args);
          this.playScreen = null;
        }

        static get instance() {
          if (this._instance == null) {
            this._instance = new ex_Director();
          }

          return this._instance;
        }

      }, _class2._instance = null, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7a3543198e123830a25531e478264ec458bd9d2.js.map