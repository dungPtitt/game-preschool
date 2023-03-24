System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VDTaskContainer, VDParallelTask, _crd;

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

      _cclegacy._RF.push({}, "cd7belnwtBDLbGvMC0JEqp/", "VDParallelTask", undefined);

      _export("default", VDParallelTask = class VDParallelTask extends (_crd && VDTaskContainer === void 0 ? (_reportPossibleCrUseOfVDTaskContainer({
        error: Error()
      }), VDTaskContainer) : VDTaskContainer) {
        update(dt) {
          var removeThisTask = false;

          for (var i = 0; i < this._listTask.length;) {
            removeThisTask = false; // if (this._listTask) {

            this._listTask[i].update(dt);

            if (this._listTask[i].isDone()) {
              removeThisTask = true;

              this._listTask[i].cleanUp();
            } // }
            // else {
            //     removeThisTask = true;
            // }


            if (removeThisTask) {
              // remove the task
              this._listTask.splice(i, 1);
            } else {
              ++i;
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=69c5fdb61016a96cf362e8143abc64c8f3210f1b.js.map