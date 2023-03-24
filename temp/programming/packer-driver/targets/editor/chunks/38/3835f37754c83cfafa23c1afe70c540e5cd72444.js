System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, log, Prefab, tween, v3, Label, VDScreenManager, level_progress_bar, LocalDataManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, level1_science;

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
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      level_progress_bar = _unresolved_3.level_progress_bar;
    }, function (_unresolved_4) {
      LocalDataManager = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72ffdP7M79FsZSOVEoFAD1w", "level1_science", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color', 'log', 'Prefab', 'tween', 'v3', 'Label', 'Vec3', 'Button', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level1_science", level1_science = (_dec = ccclass('level1_science'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property({
        type: Node
      }), _dec5 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = class level1_science extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listAnswer", _descriptor, this);

          _initializerDefineProperty(this, "fireWork", _descriptor2, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor3, this);

          _initializerDefineProperty(this, "level", _descriptor4, this);

          this.levelNumber = 1;
          this.isShowPopup = false;
          this.canPlay = true;
          this.dem = 0;
          this.progressLevelBar = void 0;
        }

        onClickInstruction() {// this.notAnswer.getComponent(UIOpacity).opacity = 100;
        }

        onClickBack() {
          // VDScreenManager.instance.popScreen(true);
          //cach 2
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen();
        }

        start() {
          let lev = this.level.getComponent(Label).string;
          this.levelNumber = Number(lev);
          this.startPlay();
        }

        startPlay() {
          this.isShowPopup = false;

          if (this.canPlay) {
            for (let i = 0; i < this.listAnswer.length; i++) {
              this.listAnswer[i].on(Node.EventType.TOUCH_END, this.processCorrect.bind(this, i));
            }
          }
        }

        processCorrect(i) {
          log("check i ", i);
          this.listAnswer[i].active = true;
          this.listAnswer[i].setScale(v3(0.2, 0.2, 0));
          tween(this.listAnswer[i]).to(1, {
            scale: v3(1.5, 1.5, 0)
          }).start();
          this.dem++;

          if (this.dem === this.listAnswer.length) {
            this.handleShowPopNext();
          }
        }

        handleShowPopNext() {
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
          this.fireWork.active = true; //scaleAndHide(this.fireWork, v3(1, 1, 0), 3, this.showPopupNext);

          tween(this.fireWork).to(3, {
            scale: v3(1, 1, 0)
          }).call(() => {
            this.showPopupNext();
          }).call(() => {
            this.fireWork.active = false;
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
              }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/science/level' + String(this.levelNumber + 1), Prefab);
              (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true);
              log(' Just Closed Popup !!!');
            };
          }, false, true, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listAnswer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fireWork", [_dec3, _dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec6], {
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
//# sourceMappingURL=3835f37754c83cfafa23c1afe70c540e5cd72444.js.map