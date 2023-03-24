System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, log, tween, v3, Label, Button, UIOpacity, VDScreenManager, LocalDataManager, level_progress_bar, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, level2_match;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalDataManager(extras) {
    _reporterNs.report("LocalDataManager", "../../common/LocalDataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopup_next(extras) {
    _reporterNs.report("popup_next", "../../popups/popup_next", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel_progress_bar(extras) {
    _reporterNs.report("level_progress_bar", "../../transiton/level_progress_bar", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      log = _cc.log;
      tween = _cc.tween;
      v3 = _cc.v3;
      Label = _cc.Label;
      Button = _cc.Button;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      LocalDataManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      level_progress_bar = _unresolved_4.level_progress_bar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "947e1p9cy9JfYYxDnZl6nRT", "level2_match", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'log', 'Sprite', 'tween', 'v3', 'Label', 'Button', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level2_match", level2_match = (_dec = ccclass('level2_match'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = class level2_match extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listQuestions", _descriptor, this);

          _initializerDefineProperty(this, "listAnswers", _descriptor2, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor3, this);

          _initializerDefineProperty(this, "level", _descriptor4, this);

          _initializerDefineProperty(this, "fireWork", _descriptor5, this);

          this.canPick = true;
          this.levelNumber = 1;
          this.sum = 0;
          this.isTouchAnswers = [];
          this.isTouchQuestions = [];
          this.numberSelect = 0;
          this.idItemSelected1 = null;
          this.idItemSelected2 = null;
        }

        onClickBtnNext(event, data) {
          log("check number: ", data);
          let level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/match/level' + String(data), Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true); //
        }

        onClickBtnBack() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popToRootScreen(true);
        }

        onClickInstruction() {
          log("start instruction");
        }

        start() {
          let lev = this.level.getComponent(Label).string;
          this.levelNumber = Number(lev);
          this.startPlay();
        }

        startPlay() {
          if (this.canPick) {
            for (let i = 0; i < this.listQuestions.length; i++) {
              this.listQuestions[i].on(Node.EventType.TOUCH_START, this.checkSelected1.bind(this, i));
              this.listAnswers[i].on(Node.EventType.TOUCH_START, this.checkSelected2.bind(this, i));
            }
          }
        }

        checkSelected1(i) {
          // khong the chon 2 cung mot the loai;
          if (this.idItemSelected1 == null) {
            this.idItemSelected1 = i;
            this.checkQuestion(i);
          } else if (i === this.idItemSelected1) {
            this.idItemSelected1 = null;
            this.cancelSelect1(i);
          } else {
            log("chon loai khac!"); //chon node khac loai
          }
        }

        checkSelected2(i) {
          if (this.idItemSelected2 == null) {
            this.idItemSelected2 = i;
            this.checkAnswer(i);
          } else if (i === this.idItemSelected2) {
            this.idItemSelected2 = null;
            this.cancelSelect2(i);
          } else {
            log("chon loai khac!");
          }
        }

        cancelSelect1(i) {
          this.listQuestions[i].getComponent(Button).onEnable();
          this.listQuestions[i].getComponent(UIOpacity).opacity = 255;
        }

        cancelSelect2(i) {
          this.listAnswers[i].getComponent(Button).onEnable();
          this.listAnswers[i].getComponent(UIOpacity).opacity = 255;
        }

        checkQuestion(i) {
          this.listQuestions[i].getComponent(Button).onDisable();
          this.listQuestions[i].getComponent(UIOpacity).opacity = 100;

          if (this.idItemSelected2 != null) {
            if (this.idItemSelected2 === i) {
              log("select correct!");
              this.sum++;

              if (this.sum === this.listAnswers.length) {//xu ly khi da tra loi dung het
              }
            } else {
              log("seclect wrong!");
              this.cancelSelect1(this.idItemSelected1);
              this.cancelSelect2(this.idItemSelected2);
            }

            this.idItemSelected1 = null;
            this.idItemSelected2 = null;
          } else {//chua chon cau tra loi
          }
        }

        checkAnswer(i) {
          this.listAnswers[i].getComponent(Button).onDisable();
          this.listAnswers[i].getComponent(UIOpacity).opacity = 100;

          if (this.idItemSelected1 != null) {
            if (this.idItemSelected1 === i) {
              log("select correct!");
              this.sum++;

              if (this.sum === this.listAnswers.length) {//xu ly khi da tra loi dung het
              } else {//chua tra loi dung het
              }
            } else {
              log("seclect wrong!");
              this.cancelSelect1(this.idItemSelected1);
              this.cancelSelect2(this.idItemSelected2);
            }

            this.idItemSelected1 = null;
            this.idItemSelected2 = null;
          } else {//chua chon cau tra loi
          }
        } // checkPosition(i: number){
        //     let questionP = this.itemQuestions[i].getWorldPosition();
        //     // log("check i: ",i);
        //     for(let j = 0; j<this.itemAnswers.length; j++){
        //         let answerP = this.itemAnswers[j].getWorldPosition();
        //         let dx = Math.abs(answerP.x-questionP.x);
        //         let dy = Math.abs(answerP.y-questionP.y);
        //         if(dx<40 && dy<40){
        //             if(i==j){
        //                 this.itemQuestions[i].active = false;
        //                 let spriteA = this.itemAnswers[i].getComponent(Sprite);
        //                 let spriteQ = this.itemQuestions[i].getComponent(Sprite);
        //                 spriteA.color = spriteQ.color;
        //                 this.sum++;
        //                 if(this.sum == 3) {
        //                     this.handleCorrect();
        //                 }
        //             }else{
        //                 // xu ly khi keo sai
        //                 log("wrong!")
        //             }
        //         }
        //     }
        // }


        handleCorrect() {
          log("correct!"); //cong kinh nghiem

          let obCheck = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          let currentLevel = obCheck.match[this.levelNumber + 1];

          if (!currentLevel) {
            this.levelBarUI.handleProgress();
            log("check level ", this.levelNumber + 1);
          }

          obCheck.match[this.levelNumber + 1] = true;
          (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).setObject("check", obCheck);
          this.handleShowPopupNext(); // this.nextBtn.active = true;
        }

        handleShowPopupNext() {
          this.fireWork.active = true;
          this.fireWork.setScale(v3(0.1, 0.1, 0));
          tween(this.fireWork).to(3, {
            scale: v3(1, 1, 0)
          }).call(() => {
            this.showPopupNext();
          }).call(() => {
            this.fireWork.active = false;
          }).start();
        }

        showPopupNext() {
          log("check", this.levelNumber);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showPopupFromPrefabName("res/prefabs/popup/popup_next", popup => {
            let popupWin = popup; // dinh nghia finshedCallBack chua goi nó

            popupWin.finishedCallback = () => {
              let level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/match/level' + String(this.levelNumber + 1), Prefab);
              (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true);
              log(' Just Closed Popup !!!');
            };
          }, false, true, true);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listQuestions", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "listAnswers", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "level", [_dec5], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d4a65191980be6bd8cf4621858a2c298d5ea0f0.js.map