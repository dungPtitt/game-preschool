System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, CCBoolean, VDControlEvent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, cc, ccclass, property, VDTouchHandler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDControlEvent(extras) {
    _reporterNs.report("VDControlEvent", "./VDControlEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
      CCBoolean = _cc2.CCBoolean;
    }, function (_unresolved_2) {
      VDControlEvent = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1069XCoq9MdpeqAj6bLmoH", "VDTouchHandler", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      __checkObsolete__(['CCBoolean']);

      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDTouchHandler = (_dec = property(cc.EventHandler), _dec2 = property(CCBoolean), ccclass(_class = (_class2 = class VDTouchHandler extends cc.Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "touchEvent", _descriptor, this);

          _initializerDefineProperty(this, "longClickEnabled", _descriptor2, this);

          this._longPressed = false;
          this._pressed = false;
          this._lastHits = {};
        }

        onEnable() {
          this._registerEvent();
        }

        onDisable() {
          this._unregisterEvent();

          this.cancelTouch();
        }

        _registerEvent() {
          var node = this.node;
          node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
          node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
          node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this);
          cc.game.on(cc.Game.EVENT_SHOW, this.cancelTouch, this);
        }

        _unregisterEvent() {
          var node = this.node;
          node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
          node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
          node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
          node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this);
          cc.game.off(cc.Game.EVENT_SHOW, this.cancelTouch, this);
        }

        _onTouchBegan(event) {
          if (!this.enabledInHierarchy) return;
          var touch = event.touch;
          var node = this.node;
          this._lastHits[touch.__instanceId] = node._hitTest(touch.getLocation());
          node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).TouchDown, touch);
          this._pressed = true;

          if (this.longClickEnabled) {
            this.scheduleOnce(this._longClickExec.bind(this), 1.2);
          }

          event.propagationStopped = false;
        }

        _onTouchMoved(event) {
          if (!this.enabledInHierarchy || !this._pressed) return;
          var touch = event.touch;
          var node = this.node;

          var hit = node._hitTest(touch.getLocation());

          if (this._lastHits[touch.__instanceId] != hit) {
            if (hit) {
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragEnter, touch);
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragInside, touch);
            } else {
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragExit, touch);
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragOutside, touch);
            }

            this._lastHits[touch.__instanceId] = hit;
          } else {
            if (hit) {
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragInside, touch);
            } else {
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).TouchDragOutside, touch);
            }
          }

          this.stopPropagation(event);
        }

        _onTouchEnded(event) {
          if (!this.enabledInHierarchy) return;
          var touch = event.touch;

          if (this._pressed) {
            this._pressed = false;

            if (!this._longPressed) {
              cc.EventHandler.emitEvents([this.touchEvent], event);
              this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).ClickByTouchHandler, touch);
            } else {
              this._longPressed = false;
            }
          }

          this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).TouchUpInside, touch);
          delete this._lastHits[touch.__instanceId];
          this.stopPropagation(event);
          this.unscheduleAllCallbacks();
        }

        _onTouchCancelled(event) {
          if (!this.enabledInHierarchy) return;
          this._pressed = false;
          this._longPressed = false;
          var touch = event.touch;
          this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).TouchUpOutside, touch);
          delete this._lastHits[touch.__instanceId];
          this.unscheduleAllCallbacks();
        }

        _longClickExec(dt) {
          if (this.longClickEnabled && this._pressed && !this._longPressed) {
            this.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).LongClick, this);
            this._longPressed = true;
          }
        }

        cancelTouch() {
          this._pressed = false;
          this._longPressed = false;
          this.unscheduleAllCallbacks();

          for (var touchId in this._lastHits) {
            delete this._lastHits[touchId];
          }
        }

        stopPropagation(event) {
          event.propagationImmediateStopped = true;
          event.propagationStopped = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "touchEvent", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new cc.EventHandler();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "longClickEnabled", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=903f9ee03c5548c6d3a741ab6360ba4815c72e49.js.map