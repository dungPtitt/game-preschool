System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDScrollView, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, cc, ccclass, property, type, BAR_LINE_HEIGHT, VDScrollBarDirection, VDScrollBar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDScrollView(extras) {
    _reporterNs.report("VDScrollView", "./VDScrollView", _context.meta, extras);
  }

  _export("VDScrollBarDirection", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      VDScrollView = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b39aa7cnpF5Yed71yZyfLI", "VDScrollBar", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property,
        type
      } = cc._decorator);
      BAR_LINE_HEIGHT = 10;

      (function (VDScrollBarDirection) {
        VDScrollBarDirection[VDScrollBarDirection["VERTICAL"] = 1] = "VERTICAL";
        VDScrollBarDirection[VDScrollBarDirection["HORIZONTAL"] = 2] = "HORIZONTAL";
      })(VDScrollBarDirection || _export("VDScrollBarDirection", VDScrollBarDirection = {}));

      _export("default", VDScrollBar = (_dec = property(cc.Sprite), _dec2 = property(_crd && VDScrollView === void 0 ? (_reportPossibleCrUseOfVDScrollView({
        error: Error()
      }), VDScrollView) : VDScrollView), _dec3 = property({
        type: cc.Enum(VDScrollBarDirection)
      }), ccclass(_class = (_class2 = class VDScrollBar extends cc.Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar", _descriptor, this);

          _initializerDefineProperty(this, "scrollView", _descriptor2, this);

          _initializerDefineProperty(this, "direction", _descriptor3, this);
        }

        onLoad() {
          if (this.scrollView && (this.direction & this.scrollView.direction) != 0 && this.bar && (this.direction == VDScrollBarDirection.HORIZONTAL || this.direction == VDScrollBarDirection.VERTICAL)) {} else {
            throw "Scroll Bar init failed, check ui logic again";
          }
        }

        onEnable() {
          this.node.on('position-changed', this.updateBackground, this);
          this.node.on('scale-changed', this.updateBackground, this);
          this.node.on('size-changed', this.updateBackground, this);
          this.node.on('rotation-changed', this.updateBackground, this);
        }

        onDisable() {
          this.node.off('position-changed', this.updateBackground, this);
          this.node.off('scale-changed', this.updateBackground, this);
          this.node.off('size-changed', this.updateBackground, this);
          this.node.off('rotation-changed', this.updateBackground, this);
        }

        start() {
          this.updateBackground();
        }

        updateBackground() {
          if (this.scrollView) {
            this.node.getComponent(cc.UITransform).height = this.scrollView.node.getComponent(cc.UITransform).height;
            this.node.getComponent(cc.UITransform).width = BAR_LINE_HEIGHT;

            if (this.direction == VDScrollBarDirection.VERTICAL) {
              //set background position at the right of the view
              let x = this.scrollView.node.getComponent(cc.UITransform).width * (1 - this.scrollView.node.getComponent(cc.UITransform).anchorX) - this.node.getComponent(cc.UITransform).width * (1 - this.node.getComponent(cc.UITransform).anchorX) * this.node.getScale().x;
              let y = this.scrollView.node.getComponent(cc.UITransform).height * (1 - this.scrollView.node.getComponent(cc.UITransform).anchorY) - this.node.getComponent(cc.UITransform).height * (1 - this.node.getComponent(cc.UITransform).anchorY) * this.node.getScale().y;
              this.node.setPosition(x, y);
            } else if (this.direction == VDScrollBarDirection.HORIZONTAL) {
              //set background position at the bottom of the view
              this.node.angle = 90;
              let x = this.scrollView.node.getComponent(cc.UITransform).width * (1 - this.scrollView.node.getComponent(cc.UITransform).anchorX) - this.node.getComponent(cc.UITransform).height * (1 - this.node.getComponent(cc.UITransform).anchorY) * this.node.getScale().y;
              let y = -this.scrollView.node.getComponent(cc.UITransform).height * this.scrollView.node.getComponent(cc.UITransform).anchorY + this.node.getComponent(cc.UITransform).width * (1 - this.node.getComponent(cc.UITransform).anchorX) * this.node.getScale().x;
              this.node.setPosition(x, y);
            }

            this.updateScrollBar();
          }
        }

        updateScrollBar() {
          let factor = Math.min(this.scrollView.node.getComponent(cc.UITransform).height / this.scrollView.content.getComponent(cc.UITransform).height, 1); // let scrollRatio = this.

          this.bar.node.getComponent(cc.UITransform).height = factor * this.node.getComponent(cc.UITransform).height;
          this.bar.node.getComponent(cc.UITransform).width = this.node.getComponent(cc.UITransform).width;

          if (this.direction == VDScrollBarDirection.VERTICAL) {
            let x = this.node.getComponent(cc.UITransform).width * (1 - this.node.getComponent(cc.UITransform).anchorX) - this.bar.node.getComponent(cc.UITransform).width * (1 - this.bar.node.getComponent(cc.UITransform).anchorX) * this.bar.node.getScale().x;
            let y = this.node.getComponent(cc.UITransform).width * (1 - this.node.getComponent(cc.UITransform).anchorX) - this.bar.node.getComponent(cc.UITransform).width * (1 - this.bar.node.getComponent(cc.UITransform).anchorX) * this.bar.node.getScale().x;
            this.bar.node.setPosition(x, y);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return VDScrollBarDirection.VERTICAL;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fb7565ed112c936d42f3f21cb9dffe37ad4a0bf4.js.map