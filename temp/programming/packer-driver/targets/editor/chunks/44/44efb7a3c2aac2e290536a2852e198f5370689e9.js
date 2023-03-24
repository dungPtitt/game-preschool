System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, log, Prefab, tween, v3, Label, Graphics, VDScreenManager, level_progress_bar, LocalDataManager, scaleAndHide, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, level2_science;

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

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color', 'log', 'Prefab', 'tween', 'v3', 'Label', 'Vec3', 'Button', 'UIOpacity', 'EventTouch', 'Graphics']);

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
      }), _dec7 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec8 = property(Node), _dec(_class = (_class2 = class level2_science extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listAnswers", _descriptor, this);

          _initializerDefineProperty(this, "listQuestion", _descriptor2, this);

          _initializerDefineProperty(this, "smile", _descriptor3, this);

          _initializerDefineProperty(this, "cry", _descriptor4, this);

          _initializerDefineProperty(this, "fireWork", _descriptor5, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor6, this);

          _initializerDefineProperty(this, "level", _descriptor7, this);

          this.graphics = null;
          this.canPlay = true;
          this.levelNumber = 1;
          this.isShowPopup = false;
        }

        start() {
          let lev = this.level.getComponent(Label).string;
          this.levelNumber = Number(lev);
          this.startPlay();
        }

        startPlay() {
          this.isShowPopup = false;

          if (this.canPlay) {
            for (let i = 0; i < this.listAnswers.length; i++) {
              this.listAnswers[i].on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this, i));
              this.listAnswers[i].on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this, i));
              this.listAnswers[i].on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this, i));
            }
          }
        }

        initGraphic(i) {
          this.graphics = this.listAnswers[i].getComponent(Graphics);
          log("check graphic: ", this.graphics);
        }

        onTouchStart(event) {}

        onTouchMove(event) {}

        onTouchEnd(event) {}

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
          let ob = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          let checkDone = ob.science[this.levelNumber];

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
            let popupWin = popup; // dinh nghia finshedCallBack chua goi nó

            popupWin.finishedCallback = () => {
              let level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listAnswers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listQuestion", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "smile", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cry", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec8], {
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
//# sourceMappingURL=44efb7a3c2aac2e290536a2852e198f5370689e9.js.map