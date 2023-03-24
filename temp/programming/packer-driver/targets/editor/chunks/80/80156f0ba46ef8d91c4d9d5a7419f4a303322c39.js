System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDControlEvent, VDTabbarItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, cc, ccclass, property, VDTabbar;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDControlEvent(extras) {
    _reporterNs.report("VDControlEvent", "./VDControlEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDTabbarItem(extras) {
    _reporterNs.report("VDTabbarItem", "./VDTabbarItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      VDControlEvent = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDTabbarItem = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f57a0BGjrdM+b29RPjyxPC+", "VDTabbar", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDTabbar = (_dec = property(cc.Node), _dec2 = property(cc.Node), _dec3 = property(cc.CCInteger), ccclass(_class = (_class2 = class VDTabbar extends cc.Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tabbar", _descriptor, this);

          _initializerDefineProperty(this, "content", _descriptor2, this);

          _initializerDefineProperty(this, "startIndex", _descriptor3, this);

          this._items = [];
          this._delegate = null;
          this._curSelectedIndex = -1;
        }

        get items() {
          return this._items;
        }

        get delegate() {
          return this._delegate;
        }

        set delegate(value) {
          this._delegate = value;
        }

        get curSelectedIndex() {
          return this._curSelectedIndex;
        }

        onLoad() {
          if (!this.content || !this.tabbar) {
            throw "tab bar or content view not found";
          }

          for (let child of this.tabbar.children) {
            if (child.active) {
              let com = child.getComponent(_crd && VDTabbarItem === void 0 ? (_reportPossibleCrUseOfVDTabbarItem({
                error: Error()
              }), VDTabbarItem) : VDTabbarItem);

              if (com) {
                let t = child.getComponent(cc.Button);

                if (!t) {
                  t = child.addComponent(cc.Button);
                }

                t.interactable = true;

                this._items.push(com);
              }
            }
          }

          let itemIdx = 0;

          for (let item of this._items) {
            item.node.name = itemIdx.toString();
            itemIdx++;
          }

          this.selectItemAtIndex(0);
        }

        start() {
          this.selectItemAtIndex(this.startIndex.valueOf());
        }

        onEnable() {
          for (let item of this._items) {
            item.node.on((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).Click, this.onItemClick, this);
          }
        }

        onDisable() {
          for (let item of this._items) {
            item.node.off((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).Click, this.onItemClick, this);
          }
        }

        onItemClick(event) {
          let node = event.target;
          this.selectItemAtIndex(parseInt(node.name));
        }

        selectItemAtIndex(idx) {
          if (!(idx >= 0 && idx <= this._items.length - 1)) {
            throw "tab idx not in range";
          }

          if (this._delegate && this._delegate.tabbarShouldSelectItemAtIndex && !this._delegate.tabbarShouldSelectItemAtIndex(idx)) {
            return false;
          }

          if (this._curSelectedIndex != idx) {
            if (this._curSelectedIndex >= 0 && this._curSelectedIndex <= this._items.length - 1) {
              let unSelItem = this._items[this._curSelectedIndex];
              unSelItem.setSelected(false);
              this.content.removeChild(unSelItem.content);
            }

            this._curSelectedIndex = idx;
            let selectedItem = this._items[idx];
            selectedItem.setSelected(true);

            if (selectedItem.content && selectedItem.content.parent) {
              if (selectedItem.content.parent != this.content) {
                selectedItem.content.removeFromParent();
                this.content.addChild(selectedItem.content);
              }
            } else if (selectedItem.content) {
              this.content.addChild(selectedItem.content);
              let widget = selectedItem.content.getComponent(cc.Widget);
              widget && widget.updateAlignment();
            }

            if (this._delegate && this._delegate.tabbarSelectedAtIndex) {
              this._delegate.tabbarSelectedAtIndex(idx);
            }

            this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).TabbarItemSelected, this._curSelectedIndex);
            return true;
          }

          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabbar", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startIndex", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80156f0ba46ef8d91c4d9d5a7419f4a303322c39.js.map