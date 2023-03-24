System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDTimelineTask, VDTimelineTaskMgr, _crd, cc, ccclass, property;

  _export({
    VDTimelineTask: void 0,
    default: void 0
  });

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25081mIjuJAbIaH2ZMXIPd5", "VDTimelineTaskMgr", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("VDTimelineTask", VDTimelineTask = class VDTimelineTask {
        constructor(key, func, caller, args, delay) {
          this.key = void 0;
          this.func = void 0;
          this.caller = void 0;
          this.args = void 0;
          this.delay = void 0;
          this.startingTime = 0;
          this.started = false;
          this.key = key;
          this.func = func;
          this.caller = caller;
          this.args = args;
          this.delay = delay;
        }

        isDelay() {
          return this.delay > 0;
        }
        /**
        * update all task inside
        * @param dt delta time in second
        */


        update(dt) {
          var args = [dt];

          if (this.delay > 0) {
            this.delay -= dt;
          }

          if (this.delay <= 0) {
            var _this$func;

            this.started = true;

            if (this.args && this.args.length != 0) {
              args = args.concat(this.args);
            }

            (_this$func = this.func) == null ? void 0 : _this$func.apply(this.caller, args);
          }
        }

        cleanUp() {
          this.caller = null;
          this.func = null;
          this.args = null;
        }

        getKey() {
          return this.key;
        }

      });

      _export("default", VDTimelineTaskMgr = class VDTimelineTaskMgr extends cc.Component {
        static get instance() {
          if (VDTimelineTaskMgr._instance == null) {
            VDTimelineTaskMgr._instance = new VDTimelineTaskMgr();
          }

          return VDTimelineTaskMgr._instance;
        }

        constructor() {
          super();
          this._pool = [];
          this._intervalId = -1;
          this._dt = 0.025;
          this._isRunning = true;
          this._lastestTimeStamp = 0;
          this.schedule(this.update.bind(this), 0, cc.macro.REPEAT_FOREVER, 0);
          cc.game.on(cc.Game.EVENT_HIDE, this._onHideGame, this);
          cc.game.on(cc.Game.EVENT_SHOW, this._onShowGame, this);
        }

        destroy() {
          this.unscheduleAllCallbacks();
          cc.game.off(cc.Game.EVENT_HIDE, this._onHideGame, this);
          cc.game.off(cc.Game.EVENT_SHOW, this._onShowGame, this);
          return super.destroy();
        }

        _onShowGame() {
          this._isRunning = true;

          var delta = performance.now() - this._lastestTimeStamp;

          this.update(delta);
          this._lastestTimeStamp = 0;
        }

        _onHideGame() {
          this._isRunning = false;
          this._lastestTimeStamp = performance.now();
        }

        update(dt) {
          if (!this._isRunning || this._pool.length == 0) {
            return;
          }

          for (var i = 0; i < this._pool.length; ++i) {
            if (this._lastestTimeStamp > 0 && this._pool[i].started) {
              this._pool[i].update(dt);
            } else {
              this._pool[i].update(dt);
            }
          }
        }

        removeTaskByKey(key) {
          for (var i = 0; i < this._pool.length; ++i) {
            if (this._pool[i].getKey() && this._pool[i].getKey() === key) {
              this._pool[i].cleanUp();

              this._pool.splice(i, 1);

              return true;
            }
          }

          return false;
        }

        scheduleTask(key, updateFunc, caller, args, overide, delay) {
          if (caller === void 0) {
            caller = null;
          }

          if (args === void 0) {
            args = null;
          }

          if (overide === void 0) {
            overide = true;
          }

          if (delay === void 0) {
            delay = 0;
          }

          if (overide) {
            for (var i = 0; i < this._pool.length; ++i) {
              if (this._pool[i].getKey() && this._pool[i].getKey() === key) {
                this._pool[i].cleanUp();

                this._pool.splice(i, 1);

                break;
              }
            }
          }

          var task = new VDTimelineTask(key, updateFunc, caller, args, delay);
          task.startingTime = Date.now() + delay * 1000;

          this._pool.push(task);
        }
        /**
         * clean up all
         */


        cleanUp() {
          for (var i = 0; i < this._pool.length; ++i) {
            if (this._pool[i]) {
              this._pool[i].cleanUp();
            }
          }

          this._pool.splice(0, this._pool.length);
        }

      });

      VDTimelineTaskMgr._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db436599ee1d7dd78edaf0a1ccd2a57a71c85157.js.map