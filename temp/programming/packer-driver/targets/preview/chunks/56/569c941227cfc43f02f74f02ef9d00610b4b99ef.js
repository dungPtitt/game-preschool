System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDEventListener, VDEventListenerName, VDUtils, VDBasePopup, VDBaseScreen, VDControlEvent, _class, _class2, _crd, cc, ccclass, VD_SCREEN_IDS, VD_GUI_TYPE, VD_ANIMATED_TIME, VD_ZINDEX, VD_POPUP_NOTIFY_NAME, VDScreenManager;

  function _reportPossibleCrUseOfVDEventListener(extras) {
    _reporterNs.report("VDEventListener", "../common/VDEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDEventListenerName(extras) {
    _reporterNs.report("VDEventListenerName", "../common/VDEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDUtils(extras) {
    _reporterNs.report("VDUtils", "../utils/VDUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "./VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "./VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDControlEvent(extras) {
    _reporterNs.report("VDControlEvent", "./VDControlEvent", _context.meta, extras);
  }

  _export({
    VD_SCREEN_IDS: void 0,
    VD_GUI_TYPE: void 0,
    VD_ZINDEX: void 0
  });

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
      VDUtils = _unresolved_3.default;
    }, function (_unresolved_4) {
      VDBasePopup = _unresolved_4.default;
    }, function (_unresolved_5) {
      VDBaseScreen = _unresolved_5.default;
    }, function (_unresolved_6) {
      VDControlEvent = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "28df3H3wn5NMI2v2Qyzjo5X", "VDScreenManager", undefined);

      cc = __checkObsoleteInNamespace__(_cc);
      ({
        ccclass
      } = cc._decorator);

      (function (VD_SCREEN_IDS) {
        VD_SCREEN_IDS[VD_SCREEN_IDS["LOBBY"] = 1] = "LOBBY";
        VD_SCREEN_IDS[VD_SCREEN_IDS["MAIN_TABLE"] = 2] = "MAIN_TABLE";
      })(VD_SCREEN_IDS || _export("VD_SCREEN_IDS", VD_SCREEN_IDS = {}));

      (function (VD_GUI_TYPE) {
        VD_GUI_TYPE[VD_GUI_TYPE["POPUP"] = 0] = "POPUP";
        VD_GUI_TYPE[VD_GUI_TYPE["WINDOW"] = 1] = "WINDOW";
        VD_GUI_TYPE[VD_GUI_TYPE["SCREEN"] = 2] = "SCREEN";
      })(VD_GUI_TYPE || _export("VD_GUI_TYPE", VD_GUI_TYPE = {}));

      VD_ANIMATED_TIME = 0.3;

      (function (VD_ZINDEX) {
        VD_ZINDEX[VD_ZINDEX["BACK_GROUND"] = 0] = "BACK_GROUND";
        VD_ZINDEX[VD_ZINDEX["SCREEN"] = 1] = "SCREEN";
        VD_ZINDEX[VD_ZINDEX["NAVIGATOR"] = 32] = "NAVIGATOR";
        VD_ZINDEX[VD_ZINDEX["CUSTOM_UI"] = 64] = "CUSTOM_UI";
        VD_ZINDEX[VD_ZINDEX["WINDOW"] = 128] = "WINDOW";
        VD_ZINDEX[VD_ZINDEX["POPUP"] = 256] = "POPUP";
        VD_ZINDEX[VD_ZINDEX["EFFECT"] = 512] = "EFFECT";
        VD_ZINDEX[VD_ZINDEX["Z_ORDER_MAX"] = 1024] = "Z_ORDER_MAX";
        VD_ZINDEX[VD_ZINDEX["LOADING"] = 2048] = "LOADING";
      })(VD_ZINDEX || _export("VD_ZINDEX", VD_ZINDEX = {}));

      VD_POPUP_NOTIFY_NAME = 'popup_notify';

      _export("default", VDScreenManager = ccclass(_class = (_class2 = class VDScreenManager extends cc.Component {
        constructor() {
          super(...arguments);
          this.assetBundle = cc.resources;
          this._canvas = null;
          this._canvasSize = null;
          this.layerBackground = null;
          this.layerScreen = null;
          this.layerPopup = null;
          this.layerEffect = null;
          this.zOrderMax = null;
          this.popupBackground = null;
          this._showedMaxOrderPopup = false;
          this._animating = false;
          this._popUpStack = [];
          this._screenStack = [];
        }

        static get instance() {
          if (!VDScreenManager._instance) {
            VDScreenManager._instance = cc.director.getScene().getComponentInChildren(VDScreenManager);
          }

          return VDScreenManager._instance;
        } // public static set instance(value) {
        //     VDScreenManager._instance = value;
        // }


        get screenSize() {
          return cc.View.instance.getDesignResolutionSize();
        }

        isPortrait() {
          var designResolutionSize = cc.View.instance.getDesignResolutionSize();
          return designResolutionSize.width == 720;
        }

        onLoad() {
          // cc.log(`onLoad`);
          this._canvas = cc.find('Canvas');
          this._canvasSize = this._canvas.getComponent(cc.UITransform).contentSize; // VDScreenManager.instance = this._canvas.getComponent("VDScreenManager")! as VDScreenManager;       

          if (cc.sys.isBrowser) {
            var gameShell = document.getElementById('game-shell');
            var cvShadow = document.getElementById('canvas-shadow');

            if (!gameShell && !cvShadow) {
              this.createLayerGameBackground();
            }
          } else if (cc.sys.isMobile && cc.sys.isNative) {
            this.createLayerGameBackground();
          }

          this.layerScreen = this._createLayer(VD_ZINDEX.SCREEN);
          this.layerPopup = this._createLayer(VD_ZINDEX.POPUP);
          this.layerEffect = this._createLayer(VD_ZINDEX.EFFECT);
          this.zOrderMax = this._createLayer(VD_ZINDEX.Z_ORDER_MAX);

          this._createPopupBackground();

          var uiTransform = this.layerEffect.getComponent(cc.UITransform);

          if (this.isPortrait()) {
            uiTransform.setContentSize(720, 1560);
          } else {
            uiTransform.setContentSize(1560, 720);
          }

          var mask = this.layerEffect.addComponent(cc.Mask);
          this.layerEffect.active = false;
          this.zOrderMax.active = false;
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).on((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).REMOVE_BASE_POPUP, this.removePopup, this);
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).on((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).RESIZE_WINDOW_EVENT, this.resizeWindowAdapt, this);
        }

        resizeWindowAdapt() {
          var uiTransform = this.layerScreen.getComponent(cc.UITransform);
          var viewSize = cc.screen.windowSize;
          var windowWidth = viewSize.width;
          var windowHeight = viewSize.height;
          var windowRatio = windowWidth * 1.0 / windowHeight;
          var designRatio = cc.view.getDesignResolutionSize().width * 1.0 / cc.view.getDesignResolutionSize().height;

          if (windowRatio > designRatio) {
            var cWidth = Math.floor(windowRatio * cc.view.getDesignResolutionSize().height);
            uiTransform.setContentSize(cWidth, cc.view.getDesignResolutionSize().height);
          } else {
            var cHeight = Math.floor(cc.view.getDesignResolutionSize().width / windowRatio);
            uiTransform.setContentSize(cc.view.getDesignResolutionSize().width, cHeight);
          }
        }

        _createLayer(zIndex) {
          var layer = new cc.Node("layer_" + zIndex);
          layer.name = 'ParentLayer';
          layer.layer = this.node.layer;
          this.node.addChild(layer);
          var uiTransform = layer.addComponent(cc.UITransform);
          uiTransform.anchorPoint = new cc.Vec2(0.5, 0.5); // const viewSize = cc.screen.windowSize;
          // let width = viewSize.width;
          // let height = cc.view.getDesignResolutionSize().width / width * viewSize.height;//viewSize.height;

          var viewSize = cc.screen.windowSize;
          var windowWidth = viewSize.width;
          var windowHeight = viewSize.height;
          var windowRatio = windowWidth * 1.0 / windowHeight;
          var designRatio = cc.view.getDesignResolutionSize().width * 1.0 / cc.view.getDesignResolutionSize().height;

          if (windowRatio > designRatio) {
            var cWidth = Math.floor(windowRatio * cc.view.getDesignResolutionSize().height);
            uiTransform.setContentSize(cWidth, cc.view.getDesignResolutionSize().height);
          } else {
            var cHeight = Math.floor(cc.view.getDesignResolutionSize().width / windowRatio);
            uiTransform.setContentSize(cc.view.getDesignResolutionSize().width, cHeight);
          }

          layer.setZIndex(zIndex);
          return layer;
        }

        getLayer(zIndex) {
          switch (zIndex) {
            case VD_ZINDEX.BACK_GROUND:
              return this.layerBackground;

            case VD_ZINDEX.SCREEN:
              return this.layerScreen;

            case VD_ZINDEX.POPUP:
              return this.layerPopup;

            case VD_ZINDEX.EFFECT:
              return this.layerEffect;

            case VD_ZINDEX.Z_ORDER_MAX:
              return this.zOrderMax;

            default:
              return null;
          }
        }

        setupCommon() {
          cc.resources.load("images/bgr/bg_popup/spriteFrame", cc.SpriteFrame, (error, spriteFrame) => {
            // cc.log(`images/bg_popup`);
            if (spriteFrame) {
              var sprite = this.popupBackground.getComponent(cc.Sprite);
              sprite.spriteFrame = spriteFrame;
            } else {
              cc.log("load popup background error: " + error);
            }
          });

          var canvasBorder = this._canvas.getChildByName('canvas_border');

          if (this.layerBackground) {
            // only for native app
            cc.resources.load("images/bgr/default_sprite_splash/spriteFrame", cc.SpriteFrame, (error, spriteFrame) => {
              // cc.log(`images/bg_popup`);
              if (spriteFrame) {
                var sprite = this.layerBackground.getComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
              } else {
                cc.log("load popup background error: " + error);
              }
            });
            canvasBorder && (canvasBorder.active = true);
          } else {
            // for web
            canvasBorder && (canvasBorder.active = false);
          }
        }

        changeCanvasBackground(bgrSprite) {
          if (bgrSprite && VDScreenManager.instance.layerBackground) {
            cc.log("changeCanvasBackground ");
            var sprite = this.layerBackground.getComponent(cc.Sprite);
            sprite.spriteFrame = bgrSprite;
            sprite.color = cc.color(255, 255, 255, 255);
            var uiTransform = this.layerBackground.getComponent(cc.UITransform);
            sprite.getComponent(cc.UITransform).setContentSize(uiTransform.width, uiTransform.height); // let windowWidth = cc.screen.windowSize.width;
            // let windowHeight = cc.screen.windowSize.height;
            // let hAspect = windowHeight / bgrSprite.height;
            // let wAspect = windowWidth / bgrSprite.width;
            // if (hAspect > wAspect) {
            //     uiTransform.setContentSize(bgrSprite.width * hAspect, bgrSprite.height * hAspect);
            // }
            // else {
            //     uiTransform.setContentSize(bgrSprite.width * wAspect, bgrSprite.height * wAspect);
            // }
          }
        }

        createLayerGameBackground() {
          if (this.layerBackground) return;
          this.layerBackground = this._createLayer(VD_ZINDEX.BACK_GROUND);
          var uiTransform = this.layerBackground.getComponent(cc.UITransform);
          var sprite = this.layerBackground.addComponent(cc.Sprite); // transparent background like dark fog

          sprite.type = 1; // SLICE

          sprite.color = cc.color(0, 0, 0, 255);
          sprite.sizeMode = 0;
          sprite.trim = true;
          var viewSize = cc.screen.windowSize;
          var windowWidth = viewSize.width;
          var windowHeight = viewSize.height;
          var windowRatio = windowWidth * 1.0 / windowHeight;
          var designRatio = cc.view.getDesignResolutionSize().width * 1.0 / cc.view.getDesignResolutionSize().height;

          if (windowRatio > designRatio) {
            var cWidth = Math.floor(windowRatio * cc.view.getDesignResolutionSize().height);
            uiTransform.setContentSize(cWidth, cc.view.getDesignResolutionSize().height);
            cc.log("_setupLayerBackground 1: " + cWidth + ", " + cc.view.getDesignResolutionSize().height);
          } else {
            var cHeight = Math.floor(cc.view.getDesignResolutionSize().width / windowRatio);
            uiTransform.setContentSize(cc.view.getDesignResolutionSize().width, cHeight);
            cc.log("_setupLayerBackground 2: " + cc.view.getDesignResolutionSize().width + ", " + cHeight);
          }
        }

        _createPopupBackground() {
          this.popupBackground = new cc.Node("popupBackground");
          this.layerPopup.addChild(this.popupBackground);
          this.popupBackground.layer = this.layerPopup.layer;
          this.popupBackground.active = false;
          var uiTransform = this.popupBackground.addComponent(cc.UITransform);
          uiTransform.anchorPoint = new cc.Vec2(0.5, 0.5); // uiTransform.contentSize = cc.View.instance.getDesignResolutionSize();

          if (this.isPortrait()) {
            uiTransform.setContentSize(720, 1560);
          } else {
            uiTransform.setContentSize(1560, 720);
          } // this.popupBackground.setZIndex(ZINDEX.POPUP);


          var sprite = this.popupBackground.addComponent(cc.Sprite); // transparent background like dark fog

          sprite.type = 1; // SLICE

          sprite.color = cc.color(0, 0, 0, 200);
          sprite.sizeMode = 0;
          sprite.trim = true;
          this.popupBackground.addComponent(cc.Button);
        }

        onEnable() {
          this._registerEvent();
        }

        onDisable() {
          this._unregisterEvent();
        }

        onDestroy() {
          cc.log("[VDScreenManager] onDestroy !");

          this._popUpStack.splice(0, this._popUpStack.length); // for (let screen of this._screenStack) {
          //     if (screen.node.parent) {
          //         screen.node.removeFromParent();
          //     }
          //     screen.destroy();
          // }


          this._screenStack.splice(0, this._screenStack.length);

          this.assetBundle.releaseAll();
          VDScreenManager._instance = null;
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).off((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).REMOVE_BASE_POPUP, this.removePopup, this);
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).off((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).RESIZE_WINDOW_EVENT, this.resizeWindowAdapt, this);
        }

        _registerEvent() {
          var _this$zOrderMax, _this$zOrderMax2, _this$zOrderMax3, _this$zOrderMax4;

          (_this$zOrderMax = this.zOrderMax) == null ? void 0 : _this$zOrderMax.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          (_this$zOrderMax2 = this.zOrderMax) == null ? void 0 : _this$zOrderMax2.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          (_this$zOrderMax3 = this.zOrderMax) == null ? void 0 : _this$zOrderMax3.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          (_this$zOrderMax4 = this.zOrderMax) == null ? void 0 : _this$zOrderMax4.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.popupBackground.on(cc.Button.EventType.CLICK, this.hidePopupOnBackgroundTouchIfNeed, this);
        }

        _unregisterEvent() {
          var _this$zOrderMax5, _this$zOrderMax6, _this$zOrderMax7, _this$zOrderMax8;

          (_this$zOrderMax5 = this.zOrderMax) == null ? void 0 : _this$zOrderMax5.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, true);
          (_this$zOrderMax6 = this.zOrderMax) == null ? void 0 : _this$zOrderMax6.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, true);
          (_this$zOrderMax7 = this.zOrderMax) == null ? void 0 : _this$zOrderMax7.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, true);
          (_this$zOrderMax8 = this.zOrderMax) == null ? void 0 : _this$zOrderMax8.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, true);
          this.popupBackground.off(cc.Button.EventType.CLICK, this.hidePopupOnBackgroundTouchIfNeed, this);
        }

        _onTouchBegan(event) {}

        _onTouchMoved(event) {}

        _onTouchEnded(event) {}

        _onTouchCancelled(event) {}

        static reloadGame() {// Canvas.reloadGame(restart);
        }

        get curScreenID() {
          var screen = this._screenStack[this._screenStack.length - 1];
          if (screen) return screen.name;else return null;
        }

        get curScreen() {
          return this._screenStack[this._screenStack.length - 1];
        }

        get screenStack() {
          return this._screenStack;
        }

        // private _screenCached: any = {};
        get minScaleFactor() {
          return Math.min(this.screenSize.width / cc.View.instance.getDesignResolutionSize().width, this.screenSize.height / cc.View.instance.getDesignResolutionSize().height);
        }

        get maxScaleFactor() {
          return Math.max(this.screenSize.width / cc.View.instance.getDesignResolutionSize().width, this.screenSize.height / cc.View.instance.getDesignResolutionSize().height);
        }

        initWithRootScreen(screen, callback) {
          if (!screen || this._screenStack.length > 0) {
            throw "init root screen failed";
          }

          var self = this;
          this.loadScreen(screen, function (nextScreen) {
            nextScreen.node.setPosition(0, 0);

            self._screenStack.push(nextScreen);

            nextScreen.node.setZIndex(VD_ZINDEX.SCREEN);
            nextScreen.node.setOpacity(255);
            self.layerScreen.addChild(nextScreen.node);

            self._screenWillAppear(nextScreen);

            self._screenDidAppear(nextScreen);

            callback && callback(nextScreen);
          });
        }

        pushScreen(screen, callback, animated, zIndex) {
          if (animated === void 0) {
            animated = false;
          }

          if (zIndex === void 0) {
            zIndex = VD_ZINDEX.SCREEN;
          }

          var self = this;

          if (this._screenStack.length != 0) {
            if (this._animating || !screen) return;

            this._canvas.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).CanvasCancel);

            var animatedTime = animated ? VD_ANIMATED_TIME : 0.0;
            var curScreen = this._screenStack[this._screenStack.length - 1];
            this.loadScreen(screen, function (nextScreen) {
              if (nextScreen.hideCurScreenOnShow) {
                self.scheduleOnce(function () {
                  self._screenWillDisappear(curScreen);

                  if (animated) {
                    cc.tween(curScreen.node).by(animatedTime, {
                      position: cc.v3(-self.screenSize.width, 0, 0)
                    }, {
                      easing: 'fade'
                    }).call(() => {
                      self._screenDidDisappear(curScreen, animated);

                      curScreen.node.removeFromParent();
                    }).start();
                  } else {
                    self._screenDidDisappear(curScreen, animated);

                    curScreen.node.removeFromParent();
                  }
                });
              }

              var touchHandler = nextScreen.getComponent(cc.Button);

              if (!touchHandler) {
                touchHandler = nextScreen.addComponent(cc.Button);
              }

              nextScreen.node.setPosition(0, 0);
              nextScreen.node.setZIndex(zIndex);

              self._screenStack.push(nextScreen);

              self.scheduleOnce(function () {
                self.layerScreen.addChild(nextScreen.node);

                self._screenWillAppear(nextScreen, animated);

                if (animated) {
                  nextScreen.node.scale = new cc.Vec3(1.0, 1.0, 1.0);
                  nextScreen.node.setOpacity(255);
                  cc.tween(nextScreen.node).set({
                    position: cc.v3(self.screenSize.width, 0, 0)
                  }).by(animatedTime, {
                    position: cc.v3(-self.screenSize.width, 0, 0)
                  }, {
                    easing: 'fade'
                  }).call(() => {
                    self._screenDidAppear(nextScreen, animated);
                  }).start();
                } else {
                  self._screenDidAppear(nextScreen, animated);
                }
              });
              callback && callback(nextScreen);
            });
          } else {
            this.initWithRootScreen(screen, callback);
          }
        }

        popScreen(animated, showWaiting) {
          if (animated === void 0) {
            animated = false;
          }

          if (showWaiting === void 0) {
            showWaiting = true;
          }

          if (this._animating || this._screenStack.length <= 1) {
            return null;
          }

          var self = this;

          this._canvas.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).CanvasCancel);

          var animatedTime = animated ? VD_ANIMATED_TIME : 0.0;

          var curScreen = this._screenStack.pop();

          var nextScreen = this._screenStack[this._screenStack.length - 1];
          nextScreen.node.setPosition(0, 0);
          this.scheduleOnce(function () {
            self._screenWillDisappear(curScreen, animated);

            if (animated) {
              cc.tween(curScreen.node).by(animatedTime, {
                position: cc.v3(self.screenSize.width, 0, 0)
              }, {
                easing: 'fade'
              }).call(() => {
                self._screenDidDisappear(curScreen, animated);

                curScreen.node.removeFromParent();
                curScreen.node.destroy();
              }).start();
            } else {
              self._screenDidDisappear(curScreen, animated);

              curScreen.node.removeFromParent();
              curScreen.destroy();
            }
          });
          nextScreen.node.setOpacity(255);
          nextScreen.node.scale = cc.v3(1.0, 1.0, 1.0);

          if (!nextScreen.node.parent) {
            this.scheduleOnce(function () {
              self.layerScreen.addChild(nextScreen.node);

              self._screenWillAppear(nextScreen);

              if (animated) {
                cc.tween(nextScreen.node).set({
                  position: cc.v3(-self.screenSize.width, nextScreen.node.position.y, 0)
                }).by(animatedTime, {
                  position: cc.v3(self.screenSize.width, 0, 0)
                }, {
                  easing: 'fade'
                }).call(() => {
                  self._screenDidAppear(nextScreen);
                }).start();
              } else {
                self._screenDidAppear(nextScreen);
              }
            });
          }

          return curScreen;
        }

        popToRootScreen(animated) {
          if (animated === void 0) {
            animated = false;
          }

          this.popToScreenAtIndex(0, animated);
        }

        getCurrentScreen() {
          if (this._screenStack.length) {
            return this._screenStack[this._screenStack.length - 1];
          }

          return null;
        }

        hasScreen(classNameOrComponent) {
          for (var i = this._screenStack.length - 1; 0 <= i; i--) {
            if (this._screenStack[i].node.getComponent(classNameOrComponent)) return true;
          }

          return false;
        }

        findScreen(classNameOrComponent) {
          for (var i = this._screenStack.length - 1; i >= 0; i--) {
            var screen = this._screenStack[i];

            if (screen.node.getComponent(classNameOrComponent)) {
              return screen;
            }
          }

          return null;
        }

        popToScreen(classNameOrComponent, animated) {
          if (animated === void 0) {
            animated = false;
          }

          var screenIdx = -1;

          for (var i = this._screenStack.length - 1; i >= 0; i--) {
            if (this._screenStack[i].node.getComponent(classNameOrComponent)) {
              screenIdx = i;
              break;
            }
          }

          return this.popToScreenAtIndex(screenIdx, animated);
        }

        popToScreenAtIndex(screenIdx, animated, showWaiting) {
          if (animated === void 0) {
            animated = false;
          }

          if (showWaiting === void 0) {
            showWaiting = true;
          }

          if (this._animating || this._screenStack.length <= 1) {
            return null;
          }

          if (screenIdx < 0 || screenIdx > this._screenStack.length - 1) {
            return null;
          }

          var self = this;

          this._canvas.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).CanvasCancel);

          var animatedTime = animated ? VD_ANIMATED_TIME : 0.0;

          var curScreen = this._screenStack.pop();

          var nextScreen = this._screenStack[screenIdx];
          nextScreen.node.setPosition(0, 0);
          this.scheduleOnce(function () {
            self._screenWillDisappear(curScreen, animated);

            if (animated) {
              cc.tween(curScreen.node).by(animatedTime, {
                position: cc.v3(self.screenSize.width, 0, 0)
              }, {
                easing: 'fade'
              }).call(() => {
                self._screenDidDisappear(curScreen, animated);

                curScreen.node.removeFromParent();
                curScreen.destroy();
              }).start();
            } else {
              self._screenDidDisappear(curScreen, animated);

              curScreen.node.removeFromParent();
              curScreen.destroy();
            }

            if (self._screenStack.length > screenIdx + 1) {
              for (var i = screenIdx + 1; i < self._screenStack.length; i++) {
                var screen = self._screenStack[i];

                if (screen.node.parent) {
                  screen.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                    error: Error()
                  }), VDControlEvent) : VDControlEvent).ScreenDidPop);
                  screen.node.removeFromParent();
                  screen.node.destroy();
                } else {
                  screen.node.destroy();
                }
              }

              self._screenStack.splice(screenIdx + 1, self._screenStack.length - screenIdx - 1);
            }
          });
          nextScreen.node.setOpacity(255);
          nextScreen.node.scale = cc.v3(1.0, 1.0, 1.0);

          if (!nextScreen.node.parent) {
            this.scheduleOnce(function () {
              self.layerScreen.addChild(nextScreen.node);

              self._screenWillAppear(nextScreen);

              if (animated) {
                cc.tween(nextScreen.node).set({
                  position: cc.v3(-self.screenSize.width, nextScreen.node.position.y, 0)
                }).by(animatedTime, {
                  position: cc.v3(self.screenSize.width, 0, 0)
                }, {
                  easing: 'fade'
                }).call(() => {
                  self._screenDidAppear(nextScreen);
                }).start();
              } else {
                self._screenDidAppear(nextScreen);
              }
            });
          }

          return curScreen;
        }

        replaceScreenAtIndex(screen, screenIdx, callback, animated, zIndex, showWaiting) {
          if (animated === void 0) {
            animated = false;
          }

          if (zIndex === void 0) {
            zIndex = VD_ZINDEX.SCREEN;
          }

          if (showWaiting === void 0) {
            showWaiting = true;
          }

          if (this._animating || this._screenStack.length <= 0) {
            return null;
          }

          if (screenIdx < 0 || screenIdx > this._screenStack.length - 1) {
            return null;
          }

          var self = this;

          this._canvas.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).CanvasCancel);

          var animatedTime = animated ? VD_ANIMATED_TIME : 0.0;
          var oldScreen = this._screenStack[screenIdx];
          var isCurScreen = screenIdx == this._screenStack.length - 1;
          this.loadScreen(screen, function (nextScreen) {
            if (nextScreen.hideCurScreenOnShow && isCurScreen) {
              self.scheduleOnce(function () {
                self._screenWillDisappear(oldScreen);

                if (animated) {
                  cc.tween(oldScreen.node).by(animatedTime, {
                    position: cc.v3(-self.screenSize.width, 0, 0)
                  }, {
                    easing: 'fade'
                  }).call(() => {
                    self._screenDidDisappear(oldScreen, animated);

                    oldScreen.node.removeFromParent();
                    oldScreen.destroy();
                  }).start();
                } else {
                  self._screenDidDisappear(oldScreen, animated);

                  oldScreen.node.removeFromParent();
                  oldScreen.destroy();
                }
              });
            } else {
              oldScreen.destroy();
            }

            var touchHandler = nextScreen.getComponent(cc.Button);

            if (!touchHandler) {
              touchHandler = nextScreen.addComponent(cc.Button);
            }

            nextScreen.node.setPosition(0, 0);
            nextScreen.node.setZIndex(zIndex);
            nextScreen.node.scale = new cc.Vec3(1.0, 1.0, 1.0); // self._screenStack.push(nextScreen);

            self._screenStack[screenIdx] = nextScreen;

            if (isCurScreen) {
              self.scheduleOnce(function () {
                self.layerScreen.addChild(nextScreen.node);

                self._screenWillAppear(nextScreen, animated);

                if (animated) {
                  nextScreen.node.setOpacity(255);
                  cc.tween(nextScreen.node).set({
                    position: cc.v3(self.screenSize.width, 0, 0)
                  }).by(animatedTime, {
                    position: cc.v3(-self.screenSize.width, 0, 0)
                  }, {
                    easing: 'fade'
                  }).call(() => {
                    self._screenDidAppear(nextScreen, animated);
                  }).start();
                } else {
                  self._screenDidAppear(nextScreen, animated);
                }
              });
            }

            callback && callback(nextScreen);
          });
          return oldScreen;
        } // preloadCachedScreen(screen: cc.Prefab, callback: Function) {
        //     let self = this;
        //     if (!this._screenCached[screen.data.name]) {
        //         this.loadScreen(screen, function (node: VDBaseScreen) {
        //             self._screenCached[screen.data.name] = node;
        //             callback(node);
        //         }.bind(this));
        //     } else {
        //         callback(this._screenCached[screen.data.name]);
        //     }
        // }


        hasPopUp(def) {
          for (var pop of this._popUpStack) {
            if (pop.node.getComponent(def)) return true;
          }

          return false;
        }

        getCurrentPopup() {
          if (this._popUpStack.length) {
            return this._popUpStack[this._popUpStack.length - 1];
          }

          return null;
        }

        removePopupNode(node, animated) {
          if (animated === void 0) {
            animated = true;
          }

          if (node.getComponent(_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
            error: Error()
          }), VDBasePopup) : VDBasePopup)) {
            this.removePopup(node.getComponent(_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
              error: Error()
            }), VDBasePopup) : VDBasePopup), animated);
          }
        }

        removePopup(popup, animated) {
          if (animated === void 0) {
            animated = true;
          }

          var localIndex = this._popUpStack.indexOf(popup);

          if (localIndex >= 0) {
            if (localIndex == this._popUpStack.length - 1) {
              this.hidePopup(animated);
            } else {
              this._popUpStack.splice(localIndex, 1);

              if (this._popUpStack.length == 0) {
                this.popupBackground.active = false;
              } // this.popupBackground.setZIndex(VD_ZINDEX.POPUP + this._popUpStack.length * 2);


              popup.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).PopupWillDisappear);
              popup.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).PopupDidDisappear);
              popup.node.removeFromParent();
              popup.node.destroy();
            }
          }
        }

        hidePopup(animated) {
          if (animated === void 0) {
            animated = true;
          }

          if (this._popUpStack.length > 0) {
            var popup = this._popUpStack.pop();

            popup.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).PopupWillDisappear);

            if (animated) {
              popup.node.setOpacity(255);
              var uiOpacity = popup.node.getComponent(cc.UIOpacity);
              cc.tween(uiOpacity).to(0.25, {
                opacity: 0
              }, {
                easing: 'fade',
                onUpdate: (target, ratio) => {
                  popup.node.walk(child => {
                    var spine = child.getComponent(cc.sp.Skeleton);

                    if (spine) {
                      var color = cc.Color.clone(spine.color);
                      color.a = uiOpacity.opacity;
                      spine.color = color;
                    }
                  });
                }
              }).call(() => {
                popup.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                  error: Error()
                }), VDControlEvent) : VDControlEvent).PopupDidDisappear);
                popup.node.removeFromParent();
                popup.node.destroy();
              }).start();
            } else {
              popup.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).PopupDidDisappear);
              popup.node.removeFromParent();
              popup.node.destroy();
            }

            if (this._popUpStack.length > 0) {
              var nextPopup = this._popUpStack[this._popUpStack.length - 1];

              if (nextPopup.name === VD_POPUP_NOTIFY_NAME) {
                nextPopup.node.setOpacity(255);
                nextPopup.node.active = true;
                this.popupBackground.setZIndex(VD_ZINDEX.POPUP + this._popUpStack.length * 2);
                nextPopup.node.setZIndex(VD_ZINDEX.POPUP + this._popUpStack.length * 2 + 1);
              }
            } else {
              this.popupBackground.setZIndex(VD_ZINDEX.POPUP);
              this.popupBackground.active = false;
            }
          }
        }

        showPopupFromPrefabName(resPath, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer) {
          if (callback === void 0) {
            callback = null;
          }

          if (hideWhenTouchOnBackground === void 0) {
            hideWhenTouchOnBackground = true;
          }

          if (animated === void 0) {
            animated = true;
          }

          if (showBackgroundLayer === void 0) {
            showBackgroundLayer = true;
          }

          if (this._showedMaxOrderPopup) return;
          var prefab = this.assetBundle.get(resPath, cc.Prefab);

          if (prefab) {
            this.showPopupFromPrefab(prefab, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer);
          } else {
            this.assetBundle.load(resPath, cc.Prefab, (error, prefab) => {
              if (prefab) {
                this.showPopupFromPrefab(prefab, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer);
              } else {
                cc.log("showPopupFromPrefabName ERROR: " + error);
              }
            });
          }
        }

        showPopupFromPrefab(prefab, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer) {
          if (callback === void 0) {
            callback = null;
          }

          if (hideWhenTouchOnBackground === void 0) {
            hideWhenTouchOnBackground = true;
          }

          if (animated === void 0) {
            animated = true;
          }

          if (showBackgroundLayer === void 0) {
            showBackgroundLayer = true;
          }

          if (!prefab) {
            return;
          }

          var node = cc.instantiate(prefab);
          this.showPopupFromNode(node, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer);
        }

        showPopupFromNode(nodePopup, callback, hideWhenTouchOnBackground, animated, showBackgroundLayer) {
          if (callback === void 0) {
            callback = null;
          }

          if (hideWhenTouchOnBackground === void 0) {
            hideWhenTouchOnBackground = true;
          }

          if (animated === void 0) {
            animated = true;
          }

          if (showBackgroundLayer === void 0) {
            showBackgroundLayer = true;
          }

          if (!nodePopup) {
            return;
          }

          var self = this;

          if (this._popUpStack.length == 0) {
            this.popupBackground.active = true;
          } else {
            var prevPopup = this._popUpStack[this._popUpStack.length - 1];

            if (prevPopup.name === VD_POPUP_NOTIFY_NAME && nodePopup.name === VD_POPUP_NOTIFY_NAME) {
              prevPopup.node.setOpacity(0);
              prevPopup.node.active = false; // console.log(`VDScreenManager - showPopupFromNode - currentPopup: ${prevPopup.name}`);
            }
          }

          this.popupBackground.setZIndex(VD_ZINDEX.POPUP + this._popUpStack.length * 2); // console.log(`VDScreenManager - showPopupFromNode - newPopup: ${nodePopup.name}`);

          var popComp = nodePopup.getComponent(_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
            error: Error()
          }), VDBasePopup) : VDBasePopup);

          if (!popComp) {
            popComp = nodePopup.addComponent(_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
              error: Error()
            }), VDBasePopup) : VDBasePopup);
          }

          popComp.hideWhenTouchOnBackground = hideWhenTouchOnBackground;

          this._popUpStack.push(popComp);

          this.layerPopup.addChild(nodePopup);
          nodePopup.setZIndex(VD_ZINDEX.POPUP + this._popUpStack.length * 2 + 1);

          if (this.popupBackground.active) {
            this.popupBackground.getComponent(cc.Sprite).enabled = showBackgroundLayer;
          }

          this.scheduleOnce(function () {
            self._canvas.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).CanvasCancel);
          });
          nodePopup.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).PopupWillAppear);

          if (animated) {
            nodePopup.setOpacity(0);
            var uiOpacity = nodePopup.getComponent(cc.UIOpacity);
            cc.tween(uiOpacity).to(0.25, {
              opacity: 255
            }, {
              easing: 'fade'
            }).call(() => {
              nodePopup.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
                error: Error()
              }), VDControlEvent) : VDControlEvent).PopupDidAppear);
            }).start();
          } else {
            nodePopup.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
              error: Error()
            }), VDControlEvent) : VDControlEvent).PopupDidAppear);
          }

          callback && callback(popComp);
          return nodePopup;
        }

        hidePopupOnBackgroundTouchIfNeed() {
          // cc.log("hidePopupOnBackgroundTouchIfNeed");
          if (this._popUpStack.length <= 0) return;
          var comp = this._popUpStack[this._popUpStack.length - 1];

          if (comp.hideWhenTouchOnBackground) {
            this.hidePopup();
          }
        }

        hidePopupBackground() {
          this.popupBackground.getComponent(cc.Sprite).enabled = false;
        }

        showPopupBackground() {
          this.popupBackground.getComponent(cc.Sprite).enabled = true;
        }

        _screenWillAppear(screen, animated) {
          this._animating = true;
          screen.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).ScreenWillAppear, screen);
        }

        _screenDidAppear(screen, animated) {
          this._animating = false;
          screen.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).ScreenDidAppear, screen);
        }

        _screenWillDisappear(screen, animated) {
          this._animating = true;
          screen.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).ScreenWillDisappear, screen);
        }

        _screenDidDisappear(screen, animated) {
          this._animating = false;
          screen.node.emit((_crd && VDControlEvent === void 0 ? (_reportPossibleCrUseOfVDControlEvent({
            error: Error()
          }), VDControlEvent) : VDControlEvent).ScreenDidDisappear, screen);
        }

        loadScreen(screen, callback) {
          if (screen) {
            var node = cc.instantiate(screen);
            var comp = node.getComponent(_crd && VDBaseScreen === void 0 ? (_reportPossibleCrUseOfVDBaseScreen({
              error: Error()
            }), VDBaseScreen) : VDBaseScreen);
            if (!comp) comp = node.addComponent(_crd && VDBaseScreen === void 0 ? (_reportPossibleCrUseOfVDBaseScreen({
              error: Error()
            }), VDBaseScreen) : VDBaseScreen);
            callback && callback(comp);
          } else callback && callback(null);
        }

        alignView() {
          cc.view.setResizeCallback(this.alignView); // cc.Canvas.instance.fitHeight = true;
          // cc.Canvas.instance.alignWithScreen();
        }

        showEffect(fxNode, animationName, completedCallback) {
          if (animationName === void 0) {
            animationName = "";
          }

          if (completedCallback === void 0) {
            completedCallback = null;
          }

          !this.layerEffect.active && (this.layerEffect.active = true);
          this.layerEffect.addChild(fxNode);

          if (animationName.length) {
            (_crd && VDUtils === void 0 ? (_reportPossibleCrUseOfVDUtils({
              error: Error()
            }), VDUtils) : VDUtils).playAnimation(fxNode, animationName, false, () => {
              // console.log(`showEffect: finished`);
              completedCallback && completedCallback();
              this.layerEffect.removeChild(fxNode);
              fxNode.destroy();
              this.layerEffect.children.length == 0 && (this.layerEffect.active = false);
            });
          }
        }

        removeAllEffects() {
          this.layerEffect.removeAllChildren();
          this.layerEffect.active = false;
        }

        setShowedMaxOrderPopup(showed) {
          this._showedMaxOrderPopup = showed;
        }

        getShowedMaxOrderPopup() {
          return this._showedMaxOrderPopup;
        }

      }, _class2._instance = null, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=569c941227cfc43f02f74f02ef9d00610b4b99ef.js.map