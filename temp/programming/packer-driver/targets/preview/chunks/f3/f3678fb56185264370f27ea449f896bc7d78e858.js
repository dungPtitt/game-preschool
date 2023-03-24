System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, log, PrefabManager, _crd, ccclass, property;

  _export("PrefabManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a73b29iNjhMW6CLJNDwML7H", "PrefabManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrefabManager", PrefabManager = class PrefabManager {
        static instance() {
          if (!PrefabManager.ins) {
            PrefabManager.ins = new PrefabManager();
          }

          return PrefabManager.ins;
        }

        constructor() {
          this.prefabMap = null;
          this.prefabMap = new Map();
          log("prefab init");
        }

        loadPrefab(bundleName, prefabPath, cached, callback) {
          var prefabKey = bundleName + '/' + prefabPath;
          var prefab = this.prefabMap.get(prefabKey);

          if (prefab) {
            if (callback) {
              callback(0, prefab);
            }

            return;
          } // BundleManager.instance()

        }

      });

      PrefabManager.ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3678fb56185264370f27ea449f896bc7d78e858.js.map