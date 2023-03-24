System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, VDBasePopup, _dec, _class, _crd, ccclass, property, dm_Popup1;

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

      _cclegacy._RF.push({}, "b8502D1EHlOvIFrhY87SMJ8", "dm_Popup1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_Popup1", dm_Popup1 = (_dec = ccclass('dm_Popup1'), _dec(_class = class dm_Popup1 extends (_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
        error: Error()
      }), VDBasePopup) : VDBasePopup) {
        constructor(...args) {
          super(...args);
          this.finishedCallback = null;
        }

        onClickBtnClose() {
          this.hide();
          this.finishedCallback && this.finishedCallback();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=916d8b95a909402ce30896473525494dccef28ee.js.map