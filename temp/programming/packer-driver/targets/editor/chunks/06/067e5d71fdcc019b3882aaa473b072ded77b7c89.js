System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VDTaskContainer, _crd;

  function _reportPossibleCrUseOfVDBaseTask(extras) {
    _reporterNs.report("VDBaseTask", "./VDBaseTask", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "337953H4T5EZJVSwM7JRQd0", "VDTaskContainer", undefined);

      _export("default", VDTaskContainer = class VDTaskContainer {
        constructor() {
          this._delay = 0;
          this._key = "";
          this._listTask = [];
          this.completedTask = 0;
        }

        isDone() {
          return this._listTask.length == 0;
        }

        pushTask(task) {
          if (task) {
            this._listTask.push(task);
          }
        }

        update(dt) {// override me
        }

        cleanUp() {
          for (var i = 0; i < this._listTask.length; ++i) {
            this._listTask[i].cleanUp();
          }

          this._listTask.splice(0, this._listTask.length);
        }

        setKey(key) {
          this._key = key;
        }

        getKey() {
          return this._key;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=067e5d71fdcc019b3882aaa473b072ded77b7c89.js.map