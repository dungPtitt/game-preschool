System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDLocalDataManager, _crd, cc;

  _export("default", void 0);

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1012MnqzpOSKNMbFFfoGDI", "VDLocalDataManager", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      _export("default", VDLocalDataManager = class VDLocalDataManager {
        static getString(key, defaultValue) {
          var val = cc.sys.localStorage.getItem(key);
          if (val === null || Number.isNaN(val)) return defaultValue;else {
            return val;
          }
        }

        static setString(key, value) {
          cc.sys.localStorage.setItem(key, value);
        }

        static getNumber(key, defaultValue) {
          var val = cc.sys.localStorage.getItem(key);
          if (val === null || Number.isNaN(val)) return defaultValue;else return Number(val).valueOf();
        }

        static setNumber(key, value) {
          cc.sys.localStorage.setItem(key, value.toString());
        }

        static getBoolean(key, defaultValue) {
          var val = cc.sys.localStorage.getItem(key);
          if (val === null || val === undefined || val === '') return defaultValue;else {
            return !(val == 'true');
          }
        }

        static setBoolean(key, value) {
          var numVal = value ? "false" : "true";
          cc.sys.localStorage.setItem(key, numVal);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e11da4063a1da5ff993db95c10fd190debd3b61.js.map