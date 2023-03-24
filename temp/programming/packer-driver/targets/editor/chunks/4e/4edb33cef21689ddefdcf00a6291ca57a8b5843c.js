System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, VDBasePopup, _dec, _class, _crd, ccclass, property, popup_next;

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VDBasePopup = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4af5edQ5k5O3pxl0+7B3oaX", "popup_next", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("popup_next", popup_next = (_dec = ccclass('popup_next'), _dec(_class = class popup_next extends (_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
        error: Error()
      }), VDBasePopup) : VDBasePopup) {
        constructor(...args) {
          super(...args);
          this.finishedCallback = null;
        }

        onClickBtnNext() {
          this.hide();
          this.finishedCallback && this.finishedCallback();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4edb33cef21689ddefdcf00a6291ca57a8b5843c.js.map