System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Graphics, Vec2, v3, _dec, _class, _crd, ccclass, property, temp_vec2, graphic_filling;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Graphics = _cc.Graphics;
      Vec2 = _cc.Vec2;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d0fbmguEZF3qHHRWIH3ct9", "graphic_filling", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'Graphics', 'UITransform', 'EventTouch', 'Vec2', 'math', 'v3', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      temp_vec2 = new Vec2();

      _export("graphic_filling", graphic_filling = (_dec = ccclass('graphic_filling'), _dec(_class = class graphic_filling extends Component {
        constructor(...args) {
          super(...args);
          this.area = null;
          this.graphics = null;
        }

        start() {
          this.initGraphics();
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        initGraphics() {
          let parentG = this.node.getParent();
          this.area = parentG ? parentG : null;
          this.graphics = this.node.getComponent(Graphics); // this.graphics.lineWidth=10;
          // this.graphics.strokeColor = Color.BLACK;
        }

        onTouchStart(event) {
          let p = event.getUILocation();
          let out = v3();
          this.area.inverseTransformPoint(out, v3(p.x, p.y, 0));
          let g = this.graphics;
          g.moveTo(out.x, out.y);
          g.stroke();
          this.node.emit('draw-start', p);
        }

        onTouchMove(event) {
          let newP = event.getUILocation();
          let out = v3();
          this.area.inverseTransformPoint(out, v3(newP.x, newP.y, 0));
          let g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
          this.node.emit('draw-move', newP);
        }

        onTouchEnd(event) {
          let pEnd = event.getUILocation();
          this.node.emit('draw-end', pEnd);
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
//# sourceMappingURL=69373548610151d57c4ce63650e6eeca8254a838.js.map