System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, _class, _crd, cc, ccclass, property, VDTableCell;

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f69fafIdWdDGK9JH0XQ6+Lh", "VDTableCell", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDTableCell = ccclass(_class = class VDTableCell extends cc.Component {
        constructor(...args) {
          super(...args);
          this._selected = false;
          this._highlighted = false;
        }

        get selected() {
          return this._selected;
        }

        setSelected(value) {
          this._selected = value;
        }

        get highlighted() {
          return this._highlighted;
        }

        setHighlighted(value) {
          this._highlighted = value;
        }

      }) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a94e64a95e4798ef260c6f66b833316984815b5b.js.map