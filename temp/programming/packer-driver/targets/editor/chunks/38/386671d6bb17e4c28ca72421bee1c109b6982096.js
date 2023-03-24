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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "left", _descriptor, this);

          _initializerDefineProperty(this, "right", _descriptor2, this);

          _initializerDefineProperty(this, "area", _descriptor3, this);

          _initializerDefineProperty(this, "draw", _descriptor4, this);

          _initializerDefineProperty(this, "fireWork", _descriptor5, this);

          this.graphics = null;
          this.rightP = void 0;
          this.leftP = void 0;
          this.startP = void 0;
          this.endP = void 0;
          this.answerP = void 0;
          this.questionP = void 0;
          this.endCurrentP = void 0;
          this.isDrawFirst = true;
        }

        start() {
          this.initGraphic(); ///lay vi tri cua dap an va cau hoi 
          // let quesP = this.left.getWorldPosition();
          // this.questionP = v2(quesP.x, quesP.y);
          // let ansP = this.right.getWorldPosition();
          // this.answerP = v2(ansP.x, ansP.y);
          ///

          this.draw.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.draw.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.draw.on(Node.EventType.TOUCH_END, this.touchEnd, this);
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
          //phai lay trong nay moi dung
          let quesP = this.left.getWorldPosition();
          this.questionP = v2(quesP.x, quesP.y);
          let ansP = this.right.getWorldPosition();
          this.answerP = v2(ansP.x, ansP.y); ///

          let startPo = this.left.getWorldPosition();
          let endP = this.right.getWorldPosition();
          log("check before and after: ", startPo, this.questionP);
          let pStart = event.getUILocation(); // this.startP = v2(startPo.x, startPo.y);

          this.rightP = v2(endP.x, endP.y);
          this.leftP = v2(startPo.x, startPo.y);
          this.startP = v2(pStart.x, pStart.y);
          log("check endP", endP, startPo);
          let out = v3();
          this.area.inverseTransformPoint(out, v3(pStart.x, pStart.y, 0));
          let g = this.graphics;
          g.moveTo(out.x, out.y);
          g.stroke();
        }

        touchMove(event) {
          let newP = event.getUILocation();
          this.checkCorrect(newP);
          let out = v3();
          this.area.inverseTransformPoint(out, v3(newP.x, newP.y, 0));
          let g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
        }

        touchEnd(event) {
          let endP = event.getUILocation();

          if (this.isDrawFirst) {
            // lan dau ve
            this.checkDrawFirst(endP);
          } else {
            // nhung lan sau ve tu diem bi ngat
            let dx = Math.abs(this.startP.x - this.leftP.x);
            let dy = Math.abs(this.startP.y - this.leftP.y);
            log("check touchend", endP, this.leftP);

            if (dx >= 40 || dy >= 40) {
              this.graphics.clear();
              log("draw gain!!");
            } else {
              //noi lien lai diem start
              this.startP = v2(endP.x, endP.y);
            }
          }
        }

        checkDrawFirst(endP) {
          let dx = Math.abs(this.startP.x - this.leftP.x);
          let dy = Math.abs(this.startP.y - this.leftP.y);
          log("check touchend", endP, this.leftP);

          if (dx >= 40 || dy >= 40) {
            this.graphics.clear();
            log("draw gain!!");
          } else {
            //noi lien lai diem start
            this.startP = v2(endP.x, endP.y);
          }
        }

        checkCorrect(p) {
          log("check startP", this.rightP, p);
          let dx = Math.abs(p.x - this.rightP.x);
          let dy = Math.abs(p.y - this.rightP.y);

          if (dx <= 40 && dy <= 40) {
            this.fireWork.active = true;
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
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "area", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fireWork", [_dec6], {
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
//# sourceMappingURL=386671d6bb17e4c28ca72421bee1c109b6982096.js.map