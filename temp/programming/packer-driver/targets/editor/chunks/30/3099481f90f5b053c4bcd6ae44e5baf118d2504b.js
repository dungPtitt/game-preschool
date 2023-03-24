System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDEventListener, VDEventListenerName, VDViewGroup, _class, _class2, _descriptor, _crd, cc, ccclass, property, VDBasePopup;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDEventListener(extras) {
    _reporterNs.report("VDEventListener", "../common/VDEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDEventListenerName(extras) {
    _reporterNs.report("VDEventListenerName", "../common/VDEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDViewGroup(extras) {
    _reporterNs.report("VDViewGroup", "./VDViewGroup", _context.meta, extras);
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
      VDEventListener = _unresolved_2.VDEventListener;
      VDEventListenerName = _unresolved_2.VDEventListenerName;
    }, function (_unresolved_3) {
      VDViewGroup = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10c8aSnHWBBoYRdHEIbZ+FE", "VDBasePopup", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDBasePopup = ccclass(_class = (_class2 = class VDBasePopup extends (_crd && VDViewGroup === void 0 ? (_reportPossibleCrUseOfVDViewGroup({
        error: Error()
      }), VDViewGroup) : VDViewGroup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "draggable", _descriptor, this);

          this._touchMoved = false;
          this._hideWhenTouchOnBackground = true;
        }

        get hideWhenTouchOnBackground() {
          return this._hideWhenTouchOnBackground;
        }

        set hideWhenTouchOnBackground(value) {
          this._hideWhenTouchOnBackground = value;
        }

        _hasNestedViewGroup(event, captureListeners) {
          if (event.eventPhase !== cc.Event.CAPTURING_PHASE) return false;

          if (captureListeners) {
            //captureListeners are arranged from child to parent
            for (let i = 0; i < captureListeners.length; ++i) {
              let item = captureListeners[i];

              if (this.node === item) {
                let target = event.target;
                let vg = target == null ? void 0 : target.getComponent(cc.ViewGroup);

                if (vg) {
                  if (vg instanceof (_crd && VDViewGroup === void 0 ? (_reportPossibleCrUseOfVDViewGroup({
                    error: Error()
                  }), VDViewGroup) : VDViewGroup)) {
                    return vg.isNestedViewGroup(event);
                  }
                }

                return vg != null;
              }

              let vg = item.getComponent(cc.ViewGroup);

              if (vg) {
                if (vg instanceof (_crd && VDViewGroup === void 0 ? (_reportPossibleCrUseOfVDViewGroup({
                  error: Error()
                }), VDViewGroup) : VDViewGroup)) {
                  return vg.isNestedViewGroup(event);
                }
              }

              return vg != null;
            }
          }

          return false;
        }

        onEnable() {
          if (this.draggable) {
            this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
            this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
            this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
            this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          } else {
            this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          }
        }

        onDisable() {
          if (this.draggable) {
            this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
            this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
            this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
            this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          } else {
            this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          }
        }

        _stopPropagationIfTargetIsMe(event) {
          if (event.eventPhase === cc.Event.AT_TARGET && event.target === this.node) {
            event.propagationStopped = true;
            event.propagationImmediateStopped = true;
          }
        }

        _onTouchBegan(event) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event)) return;

          if (this.draggable) {
            this._touchMoved = false;

            this._stopPropagationIfTargetIsMe(event);
          } else {
            // event.propagationStopped = true;
            // event.propagationImmediateStopped = true;
            event.stopPropagation();
          }
        }

        _onTouchMoved(event) {
          var _event$touch;

          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event)) return;
          let distance = (_event$touch = event.touch) == null ? void 0 : _event$touch.getDelta();
          this.node.position = this.node.position.add(new cc.Vec3(distance == null ? void 0 : distance.x, distance == null ? void 0 : distance.y, 0));
          var n = event.getLocation().subtract(event.getStartLocation());

          if (n.length() > 12 && !this._touchMoved && event.target != this.node) {
            var _event$target;

            var e = new cc.EventTouch(event.getTouches(), event.bubbles, cc.Node.EventType.TOUCH_CANCEL); // e.type = cc.Node.EventType.TOUCH_CANCEL;

            e.touch = event.touch;
            e.simulate = true;
            (_event$target = event.target) == null ? void 0 : _event$target.dispatchEvent(e);
            this._touchMoved = true;
          }
        }

        _onTouchEnded(event) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event)) return;

          this._stopPropagationIfTargetIsMe(event);
        }

        _onTouchCancelled(event) {
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event)) return;

          this._stopPropagationIfTargetIsMe(event);
        }

        hide() {
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).dispatchEvent((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).REMOVE_BASE_POPUP, this);
        }

        popupWillAppear() {}

        popupDidAppear() {}

        popupWillDisappear() {}

        popupDidDisappear() {}

        onUITouchEvent(button) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "draggable", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3099481f90f5b053c4bcd6ae44e5baf118d2504b.js.map