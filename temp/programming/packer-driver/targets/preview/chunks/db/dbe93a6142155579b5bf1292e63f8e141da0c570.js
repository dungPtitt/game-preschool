System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, VDBaseTask, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "beeae0kMENHs6YeXHR/j6bg", "VDBaseTask", undefined);

      _export("default", VDBaseTask = class VDBaseTask {
        constructor(caller, funcName, args, delay) {
          this._delay = 0;
          this._caller = null;
          this._funcName = null;
          this._args = void 0;
          this._executed = false;
          this._caller = caller;
          this._funcName = funcName;
          this._args = args;

          if (delay !== undefined) {
            this._delay = delay;
          }
        }
        /**
         * cooldown delay time and execute if delay over
         * @param dt
         */


        update(dt) {
          if (this._delay >= 0) {
            this._delay -= dt;
            if (this._delay <= 0) this.execute();
          }
        }
        /**
         * true if executed
         * @returns {boolean}
         */


        isDone() {
          return this._executed;
        }
        /**
         * execute the task
         */


        execute() {
          var _this$_funcName;

          if (this._executed) return;
          this._executed = true;
          (_this$_funcName = this._funcName) == null ? void 0 : _this$_funcName.apply(this._caller, this._args);
        }
        /**
         * clean up all
         */


        cleanUp() {
          this._caller = null;
          this._funcName = null;
          this._args = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbe93a6142155579b5bf1292e63f8e141da0c570.js.map