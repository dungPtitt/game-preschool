System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, _class, _crd, cc, ccclass, property, VDScrollContent;

  function _reportPossibleCrUseOfVDScrollView(extras) {
    _reporterNs.report("VDScrollView", "./VDScrollView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5d2c1Fn1FFJptsNankFxAN", "VDScrollContent", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDScrollContent = ccclass(_class = class VDScrollContent extends cc.Component {
        constructor(...args) {
          super(...args);
          this._scrollView = null;
        }

        get scrollView() {
          return this._scrollView;
        }

        set scrollView(value) {
          this._scrollView = value;
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9670435cb92fd9ac666ed47407e883d70e321621.js.map