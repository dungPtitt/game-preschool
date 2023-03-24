System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, VDGameLoop, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "446eeRnBU5ON5iactAqMzD9", "VDGameLoop", undefined);

      _export("default", VDGameLoop = class VDGameLoop {
        constructor() {
          this._listFuncLoop = new Map();
          this._intervalId = -1;
        }

        static get instance() {
          return VDGameLoop._instance;
        }

        update() {
          var _this = VDGameLoop._instance;

          if (_this.isRunning()) {
            _this._listFuncLoop.forEach((value, key) => {
              if (value) {
                value.funcName.apply(value.caller[VDGameLoop.TIME_LOOP]);
              } else {
                _this.removeFunc(key);
              }
            });
          }
        }

        addFunc(key, caller, funcName) {
          var data = {
            "key": key,
            "caller": caller,
            "funcName": funcName
          };

          this._listFuncLoop.set(key, data);
        }

        isRunning() {
          return this._intervalId > 0;
        }

        start() {
          if (this._intervalId < 0) {
            this.update();
            this._intervalId = setInterval(this.update, VDGameLoop.TIME_LOOP * 1000);
          }
        }

        stop() {
          if (this._intervalId > 0) {
            clearInterval(this._intervalId);
            this._intervalId = -1;
          }
        }

        cleanUp() {
          for (var key in this._listFuncLoop) {
            this._listFuncLoop.set(key, null);

            this._listFuncLoop.delete(key);
          }

          this._listFuncLoop.clear();
        }

        removeFunc(key) {
          var func = this._listFuncLoop.get(key);

          if (func) {
            this._listFuncLoop.delete(key);

            return true;
          }

          return false;
        }

      });

      VDGameLoop.TIME_LOOP = 0.1;
      VDGameLoop._instance = new VDGameLoop();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b669bc49bb8672fdecbe56071fd7be72c7d7af23.js.map