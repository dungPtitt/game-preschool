System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, Graphics, UITransform, Vec2, math, _dec, _class, _crd, ccclass, property, temp_vec2, graphic_filling;

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
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      math = _cc.math;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d0fbmguEZF3qHHRWIH3ct9", "graphic_filling", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Graphics', 'UITransform', 'EventTouch', 'Vec2', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      temp_vec2 = new Vec2();

      _export("graphic_filling", graphic_filling = (_dec = ccclass('graphic_filling'), _dec(_class = class graphic_filling extends Component {
        constructor(...args) {
          super(...args);
          this.pos = new Vec3();
          this.worldPos = new Vec3();
          this.graphics = null;
          this.minX = 0;
          this.minY = 0;
          this.maxX = 0;
          this.maxY = 0;
        }

        start() {
          var _this$getComponent;

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.graphics = this.getComponent(Graphics);
          const trans = this.getComponent(UITransform);
          const wPos = (_this$getComponent = this.getComponent(UITransform)) == null ? void 0 : _this$getComponent.convertToWorldSpaceAR(new Vec3(), this.worldPos);
          this.minX = -trans.anchorX * trans.width + wPos.x;
          this.maxX = (1 - trans.anchorX) * trans.width + wPos.x;
          this.minY = -trans.anchorY * trans.height + wPos.y;
          this.maxY = (1 - trans.anchorY) * trans.height + wPos.y;
          this.graphics.lineWidth = 10;
        }

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

        onTouchStart(event) {
          event.getUILocation(temp_vec2);
          let x = math.clamp(temp_vec2.x, this.minX, this.maxX);
          let y = math.clamp(temp_vec2.y, this.minY, this.maxY);
          this.pos.set(x - this.worldPos.x, y - this.worldPos.y, 0);
        }

        onTouchMove(event) {
          this.graphics.moveTo(this.pos.x, this.pos.y);
          event.getUILocation(temp_vec2);
          let x = math.clamp(temp_vec2.x, this.minX, this.maxX);
          let y = math.clamp(temp_vec2.y, this.minY, this.maxY);
          this.pos.set(x - this.worldPos.x, y - this.worldPos.y, 0);
          this.graphics.lineTo(this.pos.x, this.pos.y);
          this.graphics.stroke();
        }

        clear() {
          this.graphics.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5407040622c2a877bff9c819c5314ae39b3e2363.js.map