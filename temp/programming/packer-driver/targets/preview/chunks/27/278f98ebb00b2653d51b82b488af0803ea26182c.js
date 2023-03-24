System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Graphics, Vec2, v3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, temp_vec2, graphic_filling;

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
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d0fbmguEZF3qHHRWIH3ct9", "graphic_filling", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Graphics', 'UITransform', 'EventTouch', 'Vec2', 'math', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      temp_vec2 = new Vec2();

      _export("graphic_filling", graphic_filling = (_dec = ccclass('graphic_filling'), _dec2 = property(Node), _dec(_class = (_class2 = class graphic_filling extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "area", _descriptor, this);

          this.pos = new Vec3();
          this.worldPos = new Vec3();
          this.graphics = null;
        }

        start() {
          this.initGraphics();
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        initGraphics() {
          this.graphics = this.node.getComponent(Graphics);
          this.graphics.lineWidth = 10;
        }

        onTouchStart(event) {
          var p = event.getUILocation();
          var out = v3();
          this.area.inverseTransformPoint(out, v3(p.x, p.y, 0));
          var g = this.graphics;
          g.moveTo(out.x, out.y);
          g.stroke();
        }

        onTouchMove(event) {
          var newP = event.getUILocation();
          var out = v3();
          this.area.inverseTransformPoint(out, v3(newP.x, newP.y, 0));
          var g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
        }

        onTouchEnd() {}

        clear() {
          this.graphics.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "area", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=278f98ebb00b2653d51b82b488af0803ea26182c.js.map