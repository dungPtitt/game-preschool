System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, log, Graphics, v3, Color, level_progress_bar, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, level4_science;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOflevel_progress_bar(extras) {
    _reporterNs.report("level_progress_bar", "../../transiton/level_progress_bar", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      log = _cc.log;
      Graphics = _cc.Graphics;
      v3 = _cc.v3;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      level_progress_bar = _unresolved_2.level_progress_bar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "168b0H4VBxDKqAl6Sq67J2M", "level4_science", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'log', 'Gradient', 'Graphics', 'EventTouch', 'v3', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level4_science", level4_science = (_dec = ccclass('level4_science'), _dec2 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec(_class = (_class2 = class level4_science extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelBarUI", _descriptor, this);

          _initializerDefineProperty(this, "level", _descriptor2, this);

          _initializerDefineProperty(this, "gPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "area", _descriptor4, this);

          this.graphics = null;
          this.draw = null;
          this.listGraphics = [];
        }

        start() {
          this.initGraphic();
          this.draw.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.draw.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
          this.draw.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        initGraphic() {
          this.draw = instantiate(this.gPrefab);
          this.area.addChild(this.draw);
          this.graphics = this.draw.getComponent(Graphics);
          this.graphics.lineWidth = 10;
          this.graphics.strokeColor = Color.BLACK;
          this.listGraphics.push(this.draw);
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
          var p = event.getUILocation();
          log("check p: ", p);
          var out = v3();
          this.area.inverseTransformPoint(out, v3(p.x, p.y, 0));
          var g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
        }

        onTouchEnd() {}

        onClear() {
          var g = this.listGraphics.pop();
          g.getComponent(Graphics).clear();
          this.initGraphic();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "area", [_dec5], {
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
//# sourceMappingURL=86b69dc1274b9e22ef46e656923d1c84fcebb771.js.map