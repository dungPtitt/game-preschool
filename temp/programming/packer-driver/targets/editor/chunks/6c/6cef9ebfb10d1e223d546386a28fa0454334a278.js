System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, _decorator, _dec, _class, _class2, _dec2, _class3, _class4, _crd, ccclass, OneToMultiListener, VDEventListener, VDEventListenerName;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fde47840c5Ld4SZPe+C5agG", "VDEventListener", undefined);

      __checkObsolete__(['error', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("OneToMultiListener", OneToMultiListener = (_dec = ccclass("oneToMultiListener"), _dec(_class = (_class2 = class OneToMultiListener {
        static on(eventName, handler, target) {
          const objHandler = {
            handler: handler,
            target: target
          };
          let handlerList = this.handlers[eventName];

          if (!handlerList) {
            handlerList = [];
            this.handlers[eventName] = handlerList;
          }

          for (var i = 0; i < handlerList.length; i++) {
            if (!handlerList[i]) {
              handlerList[i] = objHandler;
              return i;
            }
          }

          handlerList.push(objHandler);
          return handlerList.length;
        }

        static off(eventName, handler, target) {
          const handlerList = this.handlers[eventName];

          if (!handlerList) {
            return;
          }

          for (let i = 0; i < handlerList.length; i++) {
            const oldObj = handlerList[i];

            if (oldObj.handler === handler && (!target || target === oldObj.target)) {
              handlerList.splice(i, 1);
              break;
            }
          }
        }

        static dispatchEvent(eventName, ...args) {
          // if (this.supportEvent !== null && !this.supportEvent.hasOwnProperty(eventName)) {
          //     cc.error("please add the event into clientEvent.js");
          //     return;
          // }
          const handlerList = this.handlers[eventName];
          const params = [];
          let i;

          for (i = 1; i < arguments.length; i++) {
            params.push(arguments[i]);
          }

          if (!handlerList) {
            return;
          }

          for (i = 0; i < handlerList.length; i++) {
            const objHandler = handlerList[i];

            if (objHandler.handler) {
              objHandler.handler.apply(objHandler.target, args);
            }
          }
        }

        static setSupportEventList(arrSupportEvent) {
          if (!(arrSupportEvent instanceof Array)) {
            error("supportEvent was not array");
            return false;
          }

          this.supportEvent = {};

          for (let i in arrSupportEvent) {
            const eventName = arrSupportEvent[i];
            this.supportEvent[eventName] = i;
          }

          return true;
        }

      }, _class2.handlers = void 0, _class2.supportEvent = void 0, _class2)) || _class));

      ;

      _export("VDEventListener", VDEventListener = (_dec2 = ccclass("VDEventListener"), _dec2(_class3 = (_class4 = class VDEventListener extends OneToMultiListener {}, _class4.handlers = {}, _class4)) || _class3));

      _export("VDEventListenerName", VDEventListenerName = {
        REMOVE_BASE_POPUP: 'EL.RBP',
        RESIZE_WINDOW_EVENT: 'EL.RWE'
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cef9ebfb10d1e223d546386a28fa0454334a278.js.map