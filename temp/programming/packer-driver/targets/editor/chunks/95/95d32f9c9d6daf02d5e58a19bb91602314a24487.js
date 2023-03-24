System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, drappable;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3fdcDmvEBGrYBUVeGwpMyZ", "drappable", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("drappable", drappable = (_dec = ccclass('drappable'), _dec2 = property(Node), _dec(_class = (_class2 = class drappable extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemSelected", _descriptor, this);

          this._startPosition = new Vec3(0, 0, 0);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
          this.node.on('end-moving', this.onTouchEnd.bind(this));
        }

        onTouchStart() {
          let p = this.node.getWorldPosition();
          this._startPosition = new Vec3(p.x, p.y, 0);
          this.node.emit('i-am-start');
        }

        onTouchMove(event) {
          let p = event.getUILocation();
          this.node.setWorldPosition(p.x, p.y, 0);
          this.node.emit('i-am-moving', this.node);
        }

        onTouchEnd() {
          this.node.setWorldPosition(this._startPosition.x, this._startPosition.y, 0);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemSelected", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95d32f9c9d6daf02d5e58a19bb91602314a24487.js.map