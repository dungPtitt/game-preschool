System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Graphics, v3, log, v2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, level1_science;

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
      Graphics = _cc.Graphics;
      v3 = _cc.v3;
      log = _cc.log;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72ffdP7M79FsZSOVEoFAD1w", "level1_science", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Graphics', 'EventTouch', 'v3', 'Vec3', 'log', 'Vec2', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level1_science", level1_science = (_dec = ccclass('level1_science'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class level1_science extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "left", _descriptor, this);

          _initializerDefineProperty(this, "right", _descriptor2, this);

          _initializerDefineProperty(this, "area", _descriptor3, this);

          _initializerDefineProperty(this, "draw", _descriptor4, this);

          _initializerDefineProperty(this, "fireWork", _descriptor5, this);

          this.graphics = null;
          this.rightP = void 0;
        }

        start() {
          this.initGraphic();
          this.draw.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.draw.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
        }

        initGraphic() {
          this.graphics = this.draw.getComponent(Graphics);
          this.graphics.lineWidth = 10; // let startP = this.left.getWorldPosition();
          // let endP = this.right.getWorldPosition();
          // log("check before", endP, startP);
          // this.rightP = v2(endP.x, endP.y);
          // let g = this.graphics;
          // g.moveTo(startP.x, startP.y);
          // g.lineTo(startP.x+2, startP.y+2);
          // g.stroke();
        }

        touchStart(event) {
          var startP = this.left.getWorldPosition();
          var endP = this.right.getWorldPosition();
          this.rightP = v2(endP.x, endP.y);
          log("check endP", endP, startP);
          var pStart = event.getUILocation();
          var out = v3();
          this.area.inverseTransformPoint(out, v3(pStart.x, pStart.y, 0));
          var g = this.graphics;
          g.moveTo(out.x, out.y);
          g.stroke();
        }

        touchMove(event) {
          var newP = event.getUILocation();
          log("check p", newP);
          this.checkCorrect(newP);
          var out = v3();
          this.area.inverseTransformPoint(out, v3(newP.x, newP.y, 0));
          var g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
        }

        checkCorrect(p) {
          // log("check startP", this.rightP);
          var dx = Math.abs(p.x - this.rightP.x);
          var dy = Math.abs(p.y - this.rightP.y);

          if (dx <= 5 || dy <= 5) {
            // this.fireWork.active = true;
            log("correct!!!!!!!");
          }
        }

        update(deltaTime) {}

        clearDraw() {
          this.graphics.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "area", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fireWork", [_dec6], {
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
//# sourceMappingURL=d5225f00fc098a66ec85ec196da9ca4b8bd8f7cd.js.map