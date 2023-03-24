System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDAsyncTaskMgr, _crd, cc;

  function _reportPossibleCrUseOfVDTaskContainer(extras) {
    _reporterNs.report("VDTaskContainer", "./VDTaskContainer", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9046O84m5NjIRwWRCVOtqW", "VDAsyncTaskMgr", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      _export("default", VDAsyncTaskMgr = class VDAsyncTaskMgr extends cc.Component {
        static get instance() {
          if (VDAsyncTaskMgr._instance == null) {
            VDAsyncTaskMgr._instance = new VDAsyncTaskMgr();
          }

          return VDAsyncTaskMgr._instance;
        }

        constructor() {
          super();
          this._pool = [];
          this._isRunning = true;
          this._lastestTimeStamp = 0;
          this.schedule(this.update, 0, cc.macro.REPEAT_FOREVER, 0);
          cc.game.on(cc.Game.EVENT_HIDE, this._onHideGame, this);
          cc.game.on(cc.Game.EVENT_SHOW, this._onShowGame, this);
        }

        stop() {
          this.cleanUp();
          this.unscheduleAllCallbacks();
          cc.game.off(cc.Game.EVENT_HIDE, this._onHideGame, this);
          cc.game.off(cc.Game.EVENT_SHOW, this._onShowGame, this);
          VDAsyncTaskMgr._instance = null; // return super.destroy();
        }

        _onShowGame() {
          // cc.log(`_onShowGame`);
          this._isRunning = true;

          let delta = performance.now() - this._lastestTimeStamp;

          this.update(delta);
          this._lastestTimeStamp = 0;
        }

        _onHideGame() {
          // cc.log(`_onHideGame`);
          this._isRunning = false;
          this._lastestTimeStamp = performance.now();
        }
        /**
         * update all task inside
         * @param dt
         */


        update(dt) {
          if (!this._isRunning) return; // cc.log(`VDAsyncTaskMgr: update ${this._pool.length} - ${dt}`);

          let pool = [].concat(this._pool);

          for (let task of pool) {
            if (task.isDone()) {
              task.cleanUp();

              let index = this._pool.indexOf(task);

              index >= 0 && this._pool.splice(index, 1);
            } else {
              task.update(dt);
            }
          }
        }

        removeTaskByKey(key) {
          for (let i = 0; i < this._pool.length; ++i) {
            if (this._pool[i].getKey && this._pool[i].getKey() === key) {
              this._pool[i].cleanUp();

              this._pool.splice(i, 1);

              return true;
            } else {}
          }

          return false;
        }

        getTaskByKey(key) {
          for (let i = 0; i < this._pool.length; ++i) {
            if (this._pool[i].getKey && this._pool[i].getKey() === key) {
              return this._pool[i];
            }
          }

          return null;
        }
        /**
         * schedule async task manager if need,
         * and push new task to pool
         * @param taskContainer
         */


        executeTask(taskContainer) {
          // this.schedule(); // start schedule if need 
          this._pool.push(taskContainer);
        }
        /**
         * clean up all
         */


        cleanUp() {
          for (let i = 0; i < this._pool.length; ++i) {
            if (this._pool[i]) {
              this._pool[i].cleanUp();
            }
          }

          this._pool.splice(0, this._pool.length);
        }

      });

      VDAsyncTaskMgr._instance = null;
      ;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=adb1a455a86f6935c76c65ced2d839dff854cc65.js.map