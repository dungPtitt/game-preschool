System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, log, Prefab, tween, v3, Label, Button, UIOpacity, VDScreenManager, level_progress_bar, LocalDataManager, scaleAndHide, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, level2_comp;

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
      Button = _cc.Button;
      UIOpacity = _cc.UIOpacity;
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

      _cclegacy._RF.push({}, "a130a46SBpDWL8nZSMprd42", "level2_comp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color', 'log', 'Prefab', 'tween', 'v3', 'Label', 'Vec3', 'Button', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level2_comp", level2_comp = (_dec = ccclass('level2_comp'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec7 = property({
        type: Node
      }), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class level2_comp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "notAnswer", _descriptor, this);

          _initializerDefineProperty(this, "smile", _descriptor2, this);

          _initializerDefineProperty(this, "cry", _descriptor3, this);

          _initializerDefineProperty(this, "fireWork", _descriptor4, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor5, this);

          _initializerDefineProperty(this, "items", _descriptor6, this);

          _initializerDefineProperty(this, "level", _descriptor7, this);

          _initializerDefineProperty(this, "btnHome", _descriptor8, this);

          this.levelNumber = 1;
          this.isShowPopup = false;
          this.canPlay = true;
          this.dem = 0;
          this.progressLevelBar = void 0;
        }

        onClickInstruction() {
          this.notAnswer.getComponent(UIOpacity).opacity = 100;
        }

        onClickBack() {
          // VDScreenManager.instance.popScreen(true);
          //cach 2
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen();
        }

        start() {
          var lev = this.level.getComponent(Label).string;
          this.levelNumber = Number(lev);
          this.startPlay();
        }

        startPlay() {
          this.isShowPopup = false;

          if (this.canPlay) {
            for (var i = 0; i < this.items.length; i++) {
              this.items[i].on(Node.EventType.TOUCH_END, this.checkAnswer.bind(this, i));
            }
          }
        }

        checkAnswer(i) {
          if (i != 0) {
            this.processCorrect(i);
          } else {
            this.processWrong();
          }
        }

        processCorrect(i) {
          this.dem++;

          if (this.dem === 3) {
            this.handleShowPopNext();
          }

          this.smile.active = true;
          this.smile.setScale(v3(0.1, 0.1, 0));
          (_crd && scaleAndHide === void 0 ? (_reportPossibleCrUseOfscaleAndHide({
            error: Error()
          }), scaleAndHide) : scaleAndHide)(this.smile, v3(0.6, 0.6, 0), 2);
          tween(this.items[i]).to(1, {
            scale: v3(1, 1, 0)
          }).to(1, {
            scale: v3(1.5, 1.5, 0)
          }).union().repeat(2).start();
          this.items[i].getComponent(Button).onDisable();
        }

        handleShowPopNext() {
          var ob = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          var checkDone = ob.comparison[this.levelNumber + 1];

          if (this.levelBarUI) {
            if (!checkDone) {
              this.levelBarUI.handleProgress();
            }

            ob.comparison[this.levelNumber + 1] = true;
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "notAnswer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cry", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fireWork", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec9], {
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
//# sourceMappingURL=9498728d2c965e3763e80262fe868ec0828bf9d4.js.map