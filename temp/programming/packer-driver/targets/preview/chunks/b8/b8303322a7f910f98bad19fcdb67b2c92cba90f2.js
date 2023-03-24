System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, LocalDataManager, _crd, cc;

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

      _cclegacy._RF.push({}, "e5e98wR6ZZG64B0aw3Y+/j5", "LocalDataManager", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      _export("default", LocalDataManager = class LocalDataManager {
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

        static setObject(key, value) {
          cc.sys.localStorage.setItem(key, JSON.stringify(value));
        }

        static getObject(key, defaultValue) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8303322a7f910f98bad19fcdb67b2c92cba90f2.js.map