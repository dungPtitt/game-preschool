System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VDTaskContainer, VDSequenceTask, _crd;

  function _reportPossibleCrUseOfVDTaskContainer(extras) {
    _reporterNs.report("VDTaskContainer", "./VDTaskContainer", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VDTaskContainer = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7e21MXnlZI1J0m9/Whzfjy", "VDSequenceTask", undefined);

      _export("default", VDSequenceTask = class VDSequenceTask extends (_crd && VDTaskContainer === void 0 ? (_reportPossibleCrUseOfVDTaskContainer({
        error: Error()
      }), VDTaskContainer) : VDTaskContainer) {
        update(dt) {
          if (this._listTask.length > 0) {
            this._listTask[0].update(dt);

            if (this._listTask[0].isDone()) {
              this.nextTask();
            }
          }
        }

        nextTask() {
          this.completedTask++;

          if (this._listTask.length > 0) {
            this._listTask[0].cleanUp();

            this._listTask.splice(0, 1);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=031a1a100f1ac2c6bd03ec47e9e1b3105517be18.js.map