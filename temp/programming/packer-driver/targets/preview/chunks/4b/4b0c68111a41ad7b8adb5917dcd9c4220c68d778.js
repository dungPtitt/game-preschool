System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, log, Prefab, tween, v3, Label, Graphics, v2, VDScreenManager, level_progress_bar, LocalDataManager, scaleAndHide, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, level2_science;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel_progress_bar(extras) {
    _reporterNs.report("level_progress_bar", "../../transiton/level_progress_bar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalDataManager(extras) {
    _reporterNs.report("LocalDataManager", "../../common/LocalDataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfscaleAndHide(extras) {
    _reporterNs.report("scaleAndHide", "../../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopup_next(extras) {
    _reporterNs.report("popup_next", "../../popups/popup_next", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      log = _cc.log;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      v3 = _cc.v3;
      Label = _cc.Label;
      Graphics = _cc.Graphics;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      level_progress_bar = _unresolved_3.level_progress_bar;
    }, function (_unresolved_4) {
      LocalDataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      scaleAndHide = _unresolved_5.scaleAndHide;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d23bqi7QBDdLuPcEqqDsvF", "level2_science", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color', 'log', 'Prefab', 'tween', 'v3', 'Label', 'Vec3', 'Button', 'UIOpacity', 'EventTouch', 'Graphics', 'v2', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level2_science", level2_science = (_dec = ccclass('level2_science'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec12 = property(Node), _dec(_class = (_class2 = class level2_science extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "draw", _descriptor, this);

          _initializerDefineProperty(this, "area", _descriptor2, this);

          _initializerDefineProperty(this, "listAnswers", _descriptor3, this);

          _initializerDefineProperty(this, "listQuestion", _descriptor4, this);

          _initializerDefineProperty(this, "smile", _descriptor5, this);

          _initializerDefineProperty(this, "cry", _descriptor6, this);

          _initializerDefineProperty(this, "fireWork", _descriptor7, this);

          _initializerDefineProperty(this, "left", _descriptor8, this);

          _initializerDefineProperty(this, "right", _descriptor9, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor10, this);

          _initializerDefineProperty(this, "level", _descriptor11, this);

          this.graphics = null;
          this.canPlay = true;
          this.levelNumber = 1;
          this.pSrc = void 0;
          this.pTarget = void 0;
          this.pStart = void 0;
          this.pDrawStart = void 0;
          this.pTemp = void 0;
          this.currentStart = void 0;
          this.firstOne = true;
        }

        start() {
          this.startPlay();
        }

        startPlay() {
          if (this.canPlay) {
            var lev = this.level.getComponent(Label).string;
            this.levelNumber = Number(lev);
            this.initGraphic();
            this.draw.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.draw.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
            this.draw.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
          }
        }

        initGraphic() {
          this.graphics = this.draw.getComponent(Graphics);
          this.graphics.lineWidth = 10;
        }

        onTouchStart(event) {
          if (this.firstOne) {
            var pLeft = this.left.getWorldPosition();
            this.pStart = v2(pLeft.x, pLeft.y);
            this.firstOne = false;
          } else {
            this.pStart = v2(this.pTemp.x, this.pTemp.y);
          } // gan vi tri bat dau ve


          var p = event.getUILocation();
          this.pDrawStart = v2(p.x, p.y); // xu ly ve

          var out = v3();
          this.area.inverseTransformPoint(out, v3(p.x, p.y, 0));
          var g = this.graphics;
          g.moveTo(out.x, out.y);
        }

        onTouchMove(event) {
          var p = event.getUILocation();
          var out = v3();
          this.area.inverseTransformPoint(out, v3(p.x, p.y, 0));
          var g = this.graphics;
          g.lineTo(out.x, out.y);
          g.stroke();
        }

        onTouchEnd(event) {
          var p = event.getUILocation();
          log("compare: ", this.pStart, this.pDrawStart);
          var dx = Math.abs(this.pStart.x - this.pDrawStart.x);
          var dy = Math.abs(this.pStart.y - this.pDrawStart.y);

          if (dx > 40 || dy > 40) {
            log("draw again!"); // this.drawAgain();
          } else {
            log("draw continue!");
            this.pTemp = v2(p.x, p.y);
          }
        }

        drawAgain() {
          this.graphics.clear();
        }

        onClickInstruction() {// scaleTo(this.answer, ScaleFactor.BIG_BY_2, ScaleFactor.SMALL_BY_0_5, TimeFactor.MEDIUM, this.toDefault.bind(this));
        }

        onClickBack() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen();
        }

        checkAnswer(i) {
          if (this.canPlay) {
            if (i == 0) {
              this.processCorrect();
            } else {
              this.processWrong();
            }
          }
        }

        processCorrect() {
          var ob = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          var checkDone = ob.science[this.levelNumber];

          if (this.levelBarUI) {
            if (!checkDone) {
              this.levelBarUI.handleProgress();
            }

            ob.science[this.levelNumber + 1] = true;
            (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
              error: Error()
            }), LocalDataManager) : LocalDataManager).setObject("check", ob);
          }

          this.canPlay = false;
          this.fireWork.active = true; // scaleAndHide(this.fireWork, v3(1, 1, 0), 3, this.showPopupNext);

          tween(this.fireWork).to(3, {
            scale: v3(1, 1, 0)
          }).call(() => {
            this.showPopupNext();
          }).call(() => {
            this.fireWork.active = false;
          }).start();
          this.smile.active = true;
          this.smile.setScale(v3(0.1, 0.1, 0));
          (_crd && scaleAndHide === void 0 ? (_reportPossibleCrUseOfscaleAndHide({
            error: Error()
          }), scaleAndHide) : scaleAndHide)(this.smile, v3(0.6, 0.6, 0), 2); // scaleTo2(this.answer, v3(1.2, 1.2, 0), 2);
          // let sprite =  this.answer.getComponent();
          // this.nextBtn.active = true;
        }

        processWrong() {
          this.cry.active = true;
          tween(this.cry).to(1, {
            scale: v3(0.08, 0.08, 0)
          }).to(0.2, {
            scale: v3(0, 0, 0)
          }).start();
        }

        update(deltaTime) {} // active popup next


        showPopupNext() {
          log("check", this.levelNumber);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showPopupFromPrefabName("res/prefabs/popup/popup_next", popup => {
            var popupWin = popup; // dinh nghia finshedCallBack chua goi nó

            popupWin.finishedCallback = () => {
              var level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level' + String(this.levelNumber + 1), Prefab);
              (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true);
              log(' Just Closed Popup !!!');
            };
          }, false, true, true); // if(!this.popupNext) {
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "draw", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "area", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listAnswers", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "listQuestion", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "smile", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cry", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fireWork", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec12], {
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
//# sourceMappingURL=4b0c68111a41ad7b8adb5917dcd9c4220c68d778.js.map