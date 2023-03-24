System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDViewGroup, VDScrollContent, VDControlEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, cc, ccclass, property, type, VDScrollDirection, VDScrollView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDViewGroup(extras) {
    _reporterNs.report("VDViewGroup", "./VDViewGroup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScrollContent(extras) {
    _reporterNs.report("VDScrollContent", "./VDScrollContent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDControlEvent(extras) {
    _reporterNs.report("VDControlEvent", "./VDControlEvent", _context.meta, extras);
  }

  _export("VDScrollDirection", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      VDViewGroup = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDScrollContent = _unresolved_3.default;
    }, function (_unresolved_4) {
      VDControlEvent = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89eaeB98eRBd4Ok+vjrFD53", "VDScrollView", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass,
        property,
        type
      } = cc._decorator);

      (function (VDScrollDirection) {
        VDScrollDirection[VDScrollDirection["VERTICAL"] = 1] = "VERTICAL";
        VDScrollDirection[VDScrollDirection["HORIZONTAL"] = 2] = "HORIZONTAL";
        VDScrollDirection[VDScrollDirection["BOTH"] = 3] = "BOTH";
      })(VDScrollDirection || _export("VDScrollDirection", VDScrollDirection = {}));

      _export("default", VDScrollView = (_dec = property({
        type: cc.Enum(VDScrollDirection)
      }), _dec2 = property(cc.CCBoolean), _dec3 = property(cc.CCFloat), _dec4 = property(cc.CCFloat), _dec5 = property(cc.Node), _dec6 = property(cc.CCBoolean), _dec7 = property(cc.CCBoolean), _dec8 = property(cc.CCBoolean), _dec9 = property(cc.CCFloat), ccclass(_class = (_class2 = class VDScrollView extends (_crd && VDViewGroup === void 0 ? (_reportPossibleCrUseOfVDViewGroup({
        error: Error()
      }), VDViewGroup) : VDViewGroup) {
        constructor(...args) {
          super(...args);
          this._touchMoved = false;
          this._touches = [];
          this._touchMoveDisplacements = [];
          this._touchMoveTimeDeltas = [];
          this._touchMovePreviousTimestamp = 0;
          this._autoScroll = false;
          this._autoScrollStartPosition = cc.v2(0, 0);
          this._autoScrollPreviousPosition = cc.v2(0, 0);
          this._autoScrollDeltaPosition = cc.v2(0, 0);
          this._autoScrollTotalTime = 0;
          this._autoScrollElapsedTime = 0;
          this._autoZoomScale = false;
          this._autoZoomScaleStartScale = 0;
          this._autoZoomScalePreviousScale = 0;
          this._autoZoomScaleDeltaScale = 0;
          this._autoZoomScaleTotalTime = 0;
          this._autoZoomScaleElapsedTime = 0;
          this._disabledRefObjects = [];
          this._delegate = null;

          _initializerDefineProperty(this, "direction", _descriptor, this);

          _initializerDefineProperty(this, "zoomScaleEnabled", _descriptor2, this);

          _initializerDefineProperty(this, "maxScale", _descriptor3, this);

          _initializerDefineProperty(this, "minScale", _descriptor4, this);

          _initializerDefineProperty(this, "content", _descriptor5, this);

          _initializerDefineProperty(this, "scrollEnabled", _descriptor6, this);

          _initializerDefineProperty(this, "touchEnabled", _descriptor7, this);

          _initializerDefineProperty(this, "dragChildrenEnabled", _descriptor8, this);

          _initializerDefineProperty(this, "movementFactor", _descriptor9, this);

          this._beginContentPosition = cc.v2(0, 0);
          this._dragging = false;
          this._dragBeganPosition = cc.v2(0, 0);
          this._boundaryRect = cc.rect(0, 0, 0, 0);
        }

        retainDisabledRef(obj) {
          if (this._disabledRefObjects.indexOf(obj) < 0) {
            this._disabledRefObjects.push(obj);
          }
        }

        releaseDisabledRef(obj) {
          let localIndex = this._disabledRefObjects.indexOf(obj);

          if (localIndex >= 0) {
            this._disabledRefObjects.splice(localIndex, 1);
          }
        }

        get autoScroll() {
          return this._autoScroll;
        }

        get autoScrollDeltaPosition() {
          return this._autoScrollDeltaPosition;
        }

        get autoScrollStartPosition() {
          return this._autoScrollStartPosition;
        }

        get delegate() {
          return this._delegate;
        }

        set delegate(value) {
          this._delegate = value;
        }

        // @property(VDScrollBar)
        // scrollBar: VDScrollBar = null!;
        get beginContentPosition() {
          return this._beginContentPosition;
        }

        // cc.Vec2.ZERO;
        get dragging() {
          return this._dragging;
        }

        get dragBeganPosition() {
          return this._dragBeganPosition;
        }

        onLoad() {
          if (this.content) {
            let contentComp = this.content.getComponent(_crd && VDScrollContent === void 0 ? (_reportPossibleCrUseOfVDScrollContent({
              error: Error()
            }), VDScrollContent) : VDScrollContent);

            if (!contentComp) {
              contentComp = this.content.addComponent(_crd && VDScrollContent === void 0 ? (_reportPossibleCrUseOfVDScrollContent({
                error: Error()
              }), VDScrollContent) : VDScrollContent);
            }

            contentComp.scrollView = this;
          } else {
            throw "scroll view must have a content view";
          }
        }

        onEnable() {
          // if (!cc.CC_EDITOR) {
          this._recalculateBoundary();

          this._registerEvent();

          this.node.on('size-changed', this._reAlignBoundIfNeed, this);

          if (this.content) {
            this.content.on('size-changed', this._recalculateBoundary, this, true);
            this.content.on('scale-changed', this._reAlignBoundIfNeed, this, true);
          } // }

        }

        onDisable() {
          this.cancelTouch();

          this._clearAutoScrollData();

          this._clearAutoZoomScaleData(); // if (!CC_EDITOR) {


          this._unregisterEvent();

          this.node.off('size-changed', this._reAlignBoundIfNeed, this);

          if (this.content) {
            this.content.off('size-changed', this._recalculateBoundary, this, true);
            this.content.off('scale-changed', this._reAlignBoundIfNeed, this, true);
          } // }
          // cc.Canvas.instance.node.off(VDControlEvent.TouchRemoved, this.onTouchRemoved, this);

        }

        cancelTouch() {
          this._disabledRefObjects.splice(0, this._disabledRefObjects.length);

          this._touches.splice(0, this._touches.length);
        }

        static quintEaseOut(ratio) {
          let t = ratio - 1;
          return t * t * t * t * t + 1;
        }

        _recalculateBoundary() {
          let newContentSize = this.content.getComponent(cc.UITransform).contentSize;
          this._boundaryRect = cc.rect(newContentSize.width * -this.node.getComponent(cc.UITransform).anchorX, newContentSize.height * -this.getComponent(cc.UITransform).anchorY, newContentSize.width, newContentSize.height); // cc.log(`[SV] _recalculateBoundary ${newContentSize} - ${this._boundaryRect}`);

          this._reAlignBoundIfNeed();
        }

        get offsetMinX() {
          let minX = this.content.getPosition().x - this.content.getComponent(cc.UITransform).contentSize.width * this.content.getComponent(cc.UITransform).anchorX;
          let alignMinX = -this.node.getComponent(cc.UITransform).width * this.node.getComponent(cc.UITransform).anchorX;
          return minX - alignMinX;
        }

        get offsetMinY() {
          let minY = this.content.getPosition().y - this.content.getComponent(cc.UITransform).height * this.content.getComponent(cc.UITransform).anchorY;
          let alignMinY = -this.node.getComponent(cc.UITransform).height * this.node.getComponent(cc.UITransform).anchorY;
          return minY - alignMinY;
        }

        get offsetMaxX() {
          let maxX = this.content.getPosition().x + this.content.getComponent(cc.UITransform).width * (1.0 - this.content.getComponent(cc.UITransform).anchorX);
          let alignMaxX = this.node.getComponent(cc.UITransform).width * (1.0 - this.node.getComponent(cc.UITransform).anchorX);
          return maxX - alignMaxX;
        }

        get offsetMaxY() {
          let maxY = this.content.getPosition().y + this.content.getComponent(cc.UITransform).height * (1.0 - this.content.getComponent(cc.UITransform).anchorY);
          let alignMaxY = this.node.getComponent(cc.UITransform).height * (1.0 - this.node.getComponent(cc.UITransform).anchorY);
          return maxY - alignMaxY;
        }

        _calculateTouchMoveVelocity() {
          let totalTime = 0;
          let totalMovement = cc.v2(0, 0);
          let lastReleaseTimeStamp = this._touchMovePreviousTimestamp;
          let fingerNotMoveFlag = false;

          for (let i = this._touchMoveDisplacements.length - 1; i >= 0; i--) {
            let displacement = this._touchMoveDisplacements[i];
            let timeDelta = this._touchMoveTimeDeltas[i];

            if (!fingerNotMoveFlag && displacement.length() < 4) {
              lastReleaseTimeStamp -= timeDelta / 1000.0;

              this._touchMoveDisplacements.splice(i, 1);

              this._touchMoveTimeDeltas.splice(i, 1);
            } else {
              fingerNotMoveFlag = true;
              totalMovement = totalMovement.add(displacement);
              totalTime += timeDelta;
            }
          }

          let curTimeStamp = new Date().getTime();
          let releaseDeltaTime = curTimeStamp - lastReleaseTimeStamp;

          if (releaseDeltaTime > 64) {
            return cc.v2(0, 0);
          }

          if (totalTime > 0) {
            totalMovement = totalMovement.multiplyScalar(1.0 / totalTime);
          }

          return totalMovement;
        }

        _gatherTouchMove(delta) {
          while (this._touchMoveDisplacements.length >= 4) {
            this._touchMoveDisplacements.shift();

            this._touchMoveTimeDeltas.shift();
          }

          this._touchMoveDisplacements.push(delta);

          let timestamp = new Date().getTime();

          this._touchMoveTimeDeltas.push((timestamp - this._touchMovePreviousTimestamp) / 1000.0);

          this._touchMovePreviousTimestamp = timestamp;
        }

        _calculateAutoScrollTimeByInitialSpeed(initialSpeed) {
          // Calculate the time from the initial speed according to quintic polynomial.
          return Math.sqrt(Math.sqrt(initialSpeed / 16.0));
        }

        _startInertiaScroll(touchMoveVelocity) {
          let inertiaTotalMovement = touchMoveVelocity.multiplyScalar(this.movementFactor.valueOf());

          this._startAttenuatingAutoScroll(inertiaTotalMovement, touchMoveVelocity);
        }

        _startAttenuatingAutoScroll(deltaMove, initialVelocity) {
          let time = this._calculateAutoScrollTimeByInitialSpeed(initialVelocity.length());

          this.startAutoScroll(deltaMove, time);
        }

        startAutoScroll(delta, duration) {
          this._autoScroll = true;
          this._autoScrollDeltaPosition = delta;
          this._autoScrollTotalTime = duration;
          this._autoScrollElapsedTime = 0;
          this._autoScrollStartPosition = cc.v2(this.content.position.x, this.content.position.y);
          this._autoScrollPreviousPosition = cc.v2(this.content.position.x, this.content.position.y);
        }

        startAutoZoomScale(delta, duration) {
          this._autoZoomScale = true;
          this._autoZoomScaleDeltaScale = delta;
          this._autoZoomScaleTotalTime = duration;
          this._autoScrollElapsedTime = 0;
          this._autoZoomScaleStartScale = this.content.getScale().x;
        }

        scaleTo(scale, animated = true) {
          if (!animated) {
            return this.setZoomScale(scale);
          } else {
            let delta = scale - this.content.getScale().x;

            if (delta != 0) {
              this.startAutoZoomScale(delta, 0.5);
              return true;
            }

            return false;
          }
        }

        scrollToLeftTop(animated = true) {
          return this.scrollTo(cc.v2(-this.content.getComponent(cc.UITransform).anchorX * this.content.getComponent(cc.UITransform).width, this.content.getComponent(cc.UITransform).height * (1.0 - this.content.getComponent(cc.UITransform).anchorY)), animated);
        }

        scrollToLeftBottom(animated = true) {
          return this.scrollTo(cc.v2(-this.content.getComponent(cc.UITransform).anchorX * this.content.getComponent(cc.UITransform).width, -this.content.getComponent(cc.UITransform).height * this.content.getComponent(cc.UITransform).anchorY), animated);
        }

        scrollToRightTop(animated = true) {
          return this.scrollTo(cc.v2((1.0 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getComponent(cc.UITransform).width, this.content.getComponent(cc.UITransform).height * (1.0 - this.content.getComponent(cc.UITransform).anchorY)), animated);
        }

        scrollToRightBottom(animated = true) {
          return this.scrollTo(cc.v2((1.0 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getComponent(cc.UITransform).width, -this.content.getComponent(cc.UITransform).height * this.content.getComponent(cc.UITransform).anchorY), animated);
        }

        scrollToTop(animated = true) {
          return this.scrollTo(cc.v2((0.5 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getComponent(cc.UITransform).width, this.content.getComponent(cc.UITransform).height * (1.0 - this.content.getComponent(cc.UITransform).anchorY)), animated);
        }

        scrollToBottom(animated = true) {
          return this.scrollTo(cc.v2((0.5 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getComponent(cc.UITransform).width, -this.content.getComponent(cc.UITransform).height * this.content.getComponent(cc.UITransform).anchorY), animated);
        }

        scrollToLeft(animated = true) {
          return this.scrollTo(cc.v2(-this.content.getComponent(cc.UITransform).anchorX * this.content.getComponent(cc.UITransform).width, (0.5 - this.content.getComponent(cc.UITransform).anchorY) * this.content.getComponent(cc.UITransform).height), animated);
        }

        scrollToRight(animated = true) {
          return this.scrollTo(cc.v2((1.0 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getComponent(cc.UITransform).width, (0.5 - this.content.getComponent(cc.UITransform).anchorY) * this.content.getComponent(cc.UITransform).height), animated);
        }

        scrollTo(center, animated = true) {
          if (!animated) {
            return this.setContentPosition(cc.v2(-center.x * this.content.getScale().x, -center.y * this.content.getScale().y), false);
          } else {
            let delta = cc.v2(-center.x * this.content.getScale().x - this.content.getPosition().x, -center.y * this.content.getScale().y - this.content.getPosition().y);

            if (!delta.equals(cc.Vec2.ZERO)) {
              this.startAutoScroll(delta, 0.5);
              return true;
            }

            return false;
          }
        }

        scrollToIn(pos, t) {
          if (void 0 === t && (t = .5), t <= 0) return this.setContentPosition(cc.v2(-pos.x * this.content.getScale().x, -pos.y * this.content.getScale().y), false);
          var n = cc.v2(-pos.x * this.content.getScale().x - this.content.getPosition().x, -pos.y * this.content.getScale().y - this.content.getPosition().y);
          return !n.equals(cc.Vec2.ZERO) && (this.startAutoScroll(n, t), !0);
        }

        scrollAndScaleTo(center, scale, duration = 1.2) {
          if (duration <= 0) {
            return this.setContentPosition(cc.v2(-center.x * scale, -center.y * scale)) && this.setZoomScale(scale);
          } else {
            let deltaPos = cc.v2(-center.x * scale - this.content.getPosition().x, -center.y * scale - this.content.getPosition().y);
            let deltaScale = scale - this.content.getScale().x;

            if (!deltaPos.equals(cc.Vec2.ZERO, cc.EPSILON) || deltaScale != 0) {
              this.startAutoScroll(deltaPos, duration);
              this.startAutoZoomScale(deltaScale, duration);
              return true;
            }

            return false;
          }
        }

        _reAlignBoundIfNeed() {
          // cc.log(`[SV] _reAlignBoundIfNeed ${this._boundaryRect} - ${this.node.getComponent(cc.UITransform)!.contentSize}`);
          if (this._boundaryRect.x != 0 || this._boundaryRect.y != 0 || this._boundaryRect.width != 0 || this._boundaryRect.height != 0) {
            let boundingXReached = false;
            let boundingYReached = false;
            let maxX = this._boundaryRect.width * this.content.getComponent(cc.UITransform).anchorX * this.content.getScale().x - this.node.getComponent(cc.UITransform).width * this.node.getComponent(cc.UITransform).anchorX;

            if (this.content.position.x > maxX) {
              this.content.setPosition(maxX, this.content.position.y);
              boundingXReached = true;
            }

            let maxY = this._boundaryRect.height * this.content.getComponent(cc.UITransform).anchorY * this.content.getScale().y - this.node.getComponent(cc.UITransform).height * this.node.getComponent(cc.UITransform).anchorY;

            if (this.content.position.y > maxY) {
              this.content.setPosition(this.content.position.x, maxY);
              boundingYReached = true;
            } // cc.log(`[SV] _reAlignBoundIfNeed 22: ${this.content.getComponent(cc.UITransform)!.anchorX} - ${this.content.getScale().x} - ${this.node.getComponent(cc.UITransform)!.width} - ${this.node.getComponent(cc.UITransform)!.anchorX}`);


            let minX = -(this._boundaryRect.width * (1.0 - this.content.getComponent(cc.UITransform).anchorX) * this.content.getScale().x - this.node.getComponent(cc.UITransform).width * (1.0 - this.node.getComponent(cc.UITransform).anchorX));

            if (this.content.position.x < minX) {
              this.content.setPosition(minX, this.content.position.y);
              boundingXReached = true;
            }

            let minY = -(this._boundaryRect.height * (1.0 - this.content.getComponent(cc.UITransform).anchorY) * this.content.getScale().y - this.node.getComponent(cc.UITransform).height * (1.0 - this.node.getComponent(cc.UITransform).anchorY));

            if (this.content.position.y < minY) {
              // cc.log(`[SV] _reAlignBoundIfNeed 3: ${this.content.getPosition().y}`);
              this.content.setPosition(this.content.position.x, minY);
              boundingYReached = true;
            } // cc.log(`[SV] _reAlignBoundIfNeed 2: ${maxX} - ${maxY} - ${minX} - ${minY}`);
            // if (boundingXReached && boundingYReached) {
            //     this._autoScroll = false;
            // }

          }
        }

        update(dt) {
          if (this._autoZoomScale) {
            this._autoZoomScaleElapsedTime += dt;
            let percentage = Math.min(1, this._autoZoomScaleElapsedTime / this._autoZoomScaleTotalTime);
            percentage = VDScrollView.quintEaseOut(percentage);
            let newScale = this._autoZoomScaleStartScale + this._autoZoomScaleDeltaScale * percentage;
            let reachedEnd = Math.abs(percentage - 1) <= cc.macro.FLT_EPSILON;

            if (reachedEnd) {
              newScale = this._autoZoomScaleStartScale + this._autoZoomScaleDeltaScale;

              this._clearAutoZoomScaleData();
            }

            this.content.getScale().x = this.content.getScale().y = newScale;
          }

          if (this._autoScroll) {
            // cc.log(`[SV] update 2`);
            this._autoScrollElapsedTime += dt;
            let percentage = Math.min(1, this._autoScrollElapsedTime / this._autoScrollTotalTime); //easing the percent

            percentage = VDScrollView.quintEaseOut(percentage);
            let reachedEnd = Math.abs(percentage - 1) <= cc.macro.FLT_EPSILON; // cc.log(`[SV] update 2: ${percentage} - ${this.content.position} - ${this._autoScrollDeltaPosition}- (${this._autoScrollDeltaPosition.x * percentage}, ${this._autoScrollDeltaPosition.y * percentage})`);

            let currentPos = cc.v2(this.content.position.x, this.content.position.y);
            let diff = currentPos.subtract(this._autoScrollPreviousPosition);
            this._autoScrollStartPosition = this._autoScrollStartPosition.add(diff); // this._autoScrollPreviousPosition = this._autoScrollStartPosition.add2f(this._autoScrollDeltaPosition.x * percentage, this._autoScrollDeltaPosition.y * percentage);

            this._autoScrollPreviousPosition = cc.Vec2.add(this._autoScrollPreviousPosition, this._autoScrollStartPosition, cc.v2(this._autoScrollDeltaPosition.x * percentage, this._autoScrollDeltaPosition.y * percentage)); // cc.log(`[SV] update 3: ${this._autoScrollStartPosition} - ${this.content.position} - ${this._autoScrollPreviousPosition}`);

            if (reachedEnd) {
              this._clearAutoScrollData();
            }

            this.setContentPosition(this._autoScrollPreviousPosition.clone());
          }
        }

        scrollViewDidScroll(scrollView) {
          if (this._delegate && this._delegate.scrollViewDidScroll) {
            this._delegate.scrollViewDidScroll(this);
          }
        }

        _handlePressLogic(touch) {
          this._clearAutoScrollData();

          this._clearAutoZoomScaleData();

          if (this.zoomScaleEnabled.valueOf()) {
            this._touches.push(touch);
          } else if (this._touches.length == 0) {
            this._touches.push(touch);
          }
        }

        _onTouchBegan(event, captureListeners) {
          // cc.log(`[Scrollview] _onTouchBegan`);
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;

          if (this.touchEnabled.valueOf()) {
            let touch = event.touch;

            if (this.content) {
              this._beginContentPosition = cc.v2(this.content.position.x, this.content.position.y);
              touch && this._handlePressLogic(touch);
            }
          }

          this._touchMoved = false;

          this._stopPropagationIfTargetIsMe(event);
        }

        _clearAutoScrollData() {
          this._autoScroll = false;
          this._autoScrollStartPosition = cc.v2(0, 0); // cc.Vec2.ZERO;

          this._autoScrollDeltaPosition = cc.v2(0, 0); // cc.Vec2.ZERO;

          this._autoScrollTotalTime = 0;
          this._autoScrollElapsedTime = 0; // Clear gathered touch move information

          this._touchMovePreviousTimestamp = new Date().getTime();

          this._touchMoveDisplacements.splice(0, this._touchMoveDisplacements.length);

          this._touchMoveTimeDeltas.splice(0, this._touchMoveTimeDeltas.length);
        }

        _clearAutoZoomScaleData() {
          this._autoZoomScale = false;
          this._autoZoomScaleDeltaScale = 0;
          this._autoZoomScaleElapsedTime = 0;
          this._autoZoomScaleStartScale = 0;
          this._autoZoomScaleTotalTime = 0;
        }

        _handleMoveLogic(touch) {
          if (this._touches.length == 1) {
            let curTouchPosition = touch.getLocation();
            let prevTouchPosition = touch.getPreviousLocation(); // let startTouchPosition = touch.getStartLocation();

            let deltaPosition = cc.v2(curTouchPosition.x - prevTouchPosition.x, curTouchPosition.y - prevTouchPosition.y); // let deltaStartPosition = new cc.Vec2(curTouchPosition.x - startTouchPosition.x, curTouchPosition.y - startTouchPosition.y);

            let oldPosition = new cc.Vec2(this.content.position.x, this.content.position.y);
            let newPosition = new cc.Vec2(this.content.position.x + deltaPosition.x, this.content.position.y + deltaPosition.y); // cc.log(`[ScrollView] _handleMoveLogic ${curTouchPosition} - ${prevTouchPosition} - ${deltaPosition} - ${oldPosition} - ${newPosition}`);

            if (this.setContentPosition(newPosition)) {
              if (!this._dragging) {
                this._dragging = true;
                this._dragBeganPosition = oldPosition;

                if (this._delegate && this._delegate.scrollViewWillBeginDragging) {
                  this._delegate.scrollViewWillBeginDragging(this);
                }
              }
            }

            this._gatherTouchMove(deltaPosition);
          } else if (this.zoomScaleEnabled.valueOf() && this._touches.length >= 2) {
            // Get the two first touches
            let touch1 = this._touches[0];
            let touch2 = this._touches[1]; // Get current and previous positions of the touches

            let curPosTouch1 = touch1.getLocation();
            let curPosTouch2 = touch2.getLocation();
            let prevPosTouch1 = touch1.getPreviousLocation();
            let prevPosTouch2 = touch2.getPreviousLocation(); // Calculate current and previous positions of the layer relative the anchor point

            let curPosLayer = cc.v2((curPosTouch1.x + curPosTouch2.x) / 2.0, (curPosTouch1.y + curPosTouch2.y) / 2.0);
            let prevPosLayer = cc.v2((prevPosTouch1.x + prevPosTouch2.x) / 2.0, (prevPosTouch1.y + prevPosTouch2.y) / 2.0); // Calculate new scale

            let prevScale = this.content.getScale().x;
            let dx1 = curPosTouch2.x - curPosTouch1.x;
            let dy1 = curPosTouch2.y - curPosTouch1.y;
            let dx2 = prevPosTouch2.x - prevPosTouch1.x;
            let dy2 = prevPosTouch2.y - prevPosTouch1.y;
            let curScale = this.content.getScale().x * Math.sqrt(dx1 * dx1 + dy1 * dy1) / Math.sqrt(dx2 * dx2 + dy2 * dy2);
            this.setZoomScale(curScale);

            if (this.content.getScale().x != prevScale) {
              let realCurPosLayer = this.content.getComponent(cc.UITransform).convertToNodeSpaceAR(cc.v3(curPosLayer.x, curPosLayer.y, 0));
              let deltaX = realCurPosLayer.x * (this.content.getScale().x - prevScale);
              let deltaY = realCurPosLayer.y * (this.content.getScale().x - prevScale);
              this.setContentPosition(cc.v2(this.content.getPosition().x - deltaX, this.content.getPosition().y - deltaY));
            } // If current and previous position of the multitouch's center aren't equal . change position of the layer


            if (!prevPosLayer.equals(curPosLayer)) {
              this.setContentPosition(cc.v2(this.content.getPosition().x + curPosLayer.x - prevPosLayer.x, this.content.getPosition().y + curPosLayer.y - prevPosLayer.y));
            }
          }
        }

        _onTouchMoved(event, captureListeners) {
          // cc.log(`[Scrollview] _onTouchMoved`);
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;

          if (this.touchEnabled.valueOf()) {
            let touch = event.touch;

            if (this.content) {
              touch && this._handleMoveLogic(touch);
            } // // Do not prevent touch events in inner nodes
            // if (!this.cancelInnerEvents) {
            //     return;
            // }


            let contentPos = cc.v2(this.content.position.x, this.content.position.y);
            let deltaMove = contentPos.subtract(this._beginContentPosition);

            if (deltaMove.length() > 12) {
              if (!this._touchMoved && event.target !== this.node) {
                var _event$target;

                // cc.log(`[Scrollview] _onTouchMoved 2`);
                // Simulate touch cancel for target node
                let cancelEvent = new cc.EventTouch(event.getTouches(), event.bubbles, cc.Node.EventType.TOUCH_CANCEL);
                cancelEvent.touch = event.touch;
                cancelEvent.simulate = true;
                if ((event == null ? void 0 : event.target) instanceof cc.BaseNode) event == null ? void 0 : (_event$target = event.target) == null ? void 0 : _event$target.dispatchEvent(cancelEvent);
                this._touchMoved = true;
              }
            }
          }

          this._stopPropagationIfTargetIsMe(event);
        }

        _handleReleaseLogic(touch) {
          let touchMoveVelocity = this._calculateTouchMoveVelocity();

          if (!touchMoveVelocity.equals(cc.Vec2.ZERO)) {
            if (this._touches.length == 1) {
              if (this._dragging) {
                if (this._delegate && this._delegate.scrollViewWillEndDragging) {
                  this._delegate.scrollViewWillEndDragging(this, touchMoveVelocity);
                }

                this._startInertiaScroll(touchMoveVelocity);

                if (this._delegate && this._delegate.scrollViewDidEndDragging) {
                  this._delegate.scrollViewDidEndDragging(this, true);
                }

                this._dragging = false;
                this._dragBeganPosition = cc.v2(0, 0); // cc.Vec2.ZERO;
              }
            } else {
              this._clearAutoScrollData();
            }
          } else {
            if (this._touches.length == 1) {
              if (this._dragging) {
                if (this._delegate && this._delegate.scrollViewWillEndDragging) {
                  this._delegate.scrollViewWillEndDragging(this, cc.Vec2.ZERO);
                }

                if (this._delegate && this._delegate.scrollViewDidEndDragging) {
                  this._delegate.scrollViewDidEndDragging(this, false);
                }

                this._dragging = false;
                this._dragBeganPosition = cc.v2(0, 0); // cc.Vec2.ZERO;
              }
            }
          }
        }

        removeTouch(touch) {
          // cc.log(`[Scrollview] removeTouch`);
          let localIndex = this._touches.indexOf(touch);

          if (localIndex >= 0) {
            this._touches.splice(localIndex, 1);
          }
        }

        _onTouchEnded(event, captureListeners) {
          // cc.log(`[Scrollview] _onTouchEnded`);
          if (!this.enabledInHierarchy || this._hasNestedViewGroup(event, captureListeners)) {
            event.touch && this.removeTouch(event.touch);
          } else {
            if (this.touchEnabled.valueOf()) {
              if (this.content) {
                event.touch && this._handleReleaseLogic(event.touch);
              }
            }

            event.touch && this.removeTouch(event.touch);

            this._stopPropagationIfTargetIsMe(event);
          }
        }

        _onTouchCancelled(event, captureListeners) {
          // cc.log(`[Scrollview] _onTouchCancelled`);
          if (!this.enabledInHierarchy || this._hasNestedViewGroup(event, captureListeners)) {
            event.touch && this.removeTouch(event.touch);
          } else {
            if (this.touchEnabled.valueOf()) {
              // Filte touch cancel event send from self
              if (!event.simulate) {
                if (this.content) {
                  event.touch && this._handleReleaseLogic(event.touch);
                }

                event.touch && this.removeTouch(event.touch);
              }
            }

            this._stopPropagationIfTargetIsMe(event);
          }
        } // This is for ui as children of a Button


        _stopPropagationIfTargetIsMe(event) {
          if (event.eventPhase === cc.Event.AT_TARGET && event.target === this.node) {
            event.propagationStopped = true;
            event.propagationImmediateStopped = true;
          }
        } // this is for nested ui


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

        _onMouseWheel(event, captureListeners) {
          // cc.log(`[Scrollview] _onMouseWheel`);
          if (!this.zoomScaleEnabled) return;
          if (!this.enabledInHierarchy) return;
          if (this._hasNestedViewGroup(event, captureListeners)) return;

          if (event.getScrollY() > 0.0) {
            this.setZoomScale(this.content.getScale().x - 0.1);
          } else if (event.getScrollY() < 0.0) {
            this.setZoomScale(this.content.getScale().x + 0.1);
          }

          this._stopPropagationIfTargetIsMe(event);
        }

        _registerEvent() {
          var _cc$find;

          this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.node.on(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          cc.game.on(cc.Game.EVENT_SHOW, this._onShowGame, this);
          (_cc$find = cc.find('Canvas')) == null ? void 0 : _cc$find.on((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).CanvasCancel, this._onShowGame, this);
        }

        _unregisterEvent() {
          var _cc$find2;

          this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.node.off(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          cc.game.off(cc.Game.EVENT_SHOW, this._onShowGame, this);
          (_cc$find2 = cc.find('Canvas')) == null ? void 0 : _cc$find2.off((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).CanvasCancel, this._onShowGame, this);
        }

        _onShowGame() {
          this.cancelTouch();
        }

        setZoomScale(scale) {
          if (this.zoomScaleEnabled.valueOf()) {
            let newScale = Math.min(Math.max(scale, this.minScale.valueOf()), this.maxScale.valueOf());

            if (newScale != this.content.getScale().x) {
              this.content.getScale().x = this.content.getScale().y = newScale;
              return true;
            } else {
              return false;
            }
          }

          return false;
        }

        scrollLockedByRefObjects() {
          if (this._disabledRefObjects.length > 0) {
            for (let obj of this._disabledRefObjects) {
              if (obj.scrollViewShouldScroll && !obj.scrollViewShouldScroll(this)) {
                return true;
              }
            }
          }

          return false;
        }

        setContentPosition(position, t = true) {
          // cc.log(`[Scrollview] setContentPosition ${position}`);
          if (!this.scrollEnabled.valueOf()) return false;

          if (this.scrollLockedByRefObjects()) {
            return false;
          }

          if (this.content.position.x != position.x || this.content.position.y != position.y) {
            let oldPosition = this.content.position.clone();

            if ((this.direction & VDScrollDirection.HORIZONTAL) != 0) {
              this.content.setPosition(position.x, this.content.position.y);
            }

            if ((this.direction & VDScrollDirection.VERTICAL) != 0) {
              this.content.setPosition(this.content.position.x, position.y);
            }

            this._reAlignBoundIfNeed(); // cc.log(`[Scrollview] setContentPosition 2: ${oldPosition} - ${this.content.position}`);


            if (!oldPosition.equals(this.content.position)) {
              // cc.log(`[Scrollview] setContentPosition 3:`);
              this.scrollViewDidScroll(this);
              return true;
            }
          }

          return false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return VDScrollDirection.BOTH;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "zoomScaleEnabled", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollEnabled", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "touchEnabled", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "dragChildrenEnabled", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "movementFactor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.64;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b92c5d99079cd8ff83795ffdc75d51c90aebc11.js.map