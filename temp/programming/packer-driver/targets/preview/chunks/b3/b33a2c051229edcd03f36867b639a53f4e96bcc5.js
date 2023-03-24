System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, cc, ccclass, property, VDTabbarItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92202a2jjxIuqAhFyu8qfFV", "VDTabbarItem", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDTabbarItem = (_dec = property(cc.CCString), _dec2 = property(cc.SpriteFrame), _dec3 = property(cc.SpriteFrame), _dec4 = property(cc.Prefab), _dec5 = property(cc.Node), ccclass(_class = (_class2 = class VDTabbarItem extends cc.Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "title", _descriptor, this);

          _initializerDefineProperty(this, "selectedSprite", _descriptor2, this);

          _initializerDefineProperty(this, "deselectedSprite", _descriptor3, this);

          _initializerDefineProperty(this, "prefab", _descriptor4, this);

          _initializerDefineProperty(this, "nodeContent", _descriptor5, this);

          this._icon = null;
          this._label = null;
          this._content = null;
          this._selected = false;
        }

        get content() {
          if (!this._content) {
            if (this.prefab) {
              this._content = cc.instantiate(this.prefab);
            } else if (this.nodeContent) {
              this._content = this.nodeContent;
            }
          }

          return this._content;
        }

        get selected() {
          return this._selected;
        }

        setSelected(value) {
          this._selected = value;
          this.content && (this.content.active = value);

          if (this._selected) {
            this._icon && (this._icon.spriteFrame = this.selectedSprite);
          } else {
            this._icon && (this._icon.spriteFrame = this.deselectedSprite);
          }

          var touchHandler = this.node.getComponent(cc.Button);
          touchHandler.interactable = !value;
        }

        onLoad() {
          this._icon = this.node.getComponentInChildren(cc.Sprite);
          this._label = this.node.getComponentInChildren(cc.Label);

          if (this._selected) {
            this._icon && (this._icon.spriteFrame = this.selectedSprite);
          } else {
            this._icon && (this._icon.spriteFrame = this.deselectedSprite);
          }

          this._label && this.title && (this._label.string = this.title);
        }

        start() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selectedSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "deselectedSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeContent", [_dec5], {
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
//# sourceMappingURL=b33a2c051229edcd03f36867b639a53f4e96bcc5.js.map