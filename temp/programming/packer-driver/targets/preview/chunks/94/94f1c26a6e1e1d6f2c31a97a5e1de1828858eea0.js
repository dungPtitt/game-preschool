System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, log, Sprite, VDScreenManager, level_progress_bar, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, level1_match;

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
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      level_progress_bar = _unresolved_3.level_progress_bar;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6bafbkWFdRJFql799USmxlv", "level1_match", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'log', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level1_match", level1_match = (_dec = ccclass('level1_match'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property(_crd && level_progress_bar === void 0 ? (_reportPossibleCrUseOflevel_progress_bar({
        error: Error()
      }), level_progress_bar) : level_progress_bar), _dec(_class = (_class2 = class level1_match extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemQuestions", _descriptor, this);

          _initializerDefineProperty(this, "itemAnswers", _descriptor2, this);

          _initializerDefineProperty(this, "nextBtn", _descriptor3, this);

          this.sum = 0;

          _initializerDefineProperty(this, "levelBarUI", _descriptor4, this);

          this.canPick = true;
        }

        onClickBtnNext(event, data) {
          log("check number: ", data);
          var level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/match/level' + String(data), Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true); //
        }

        onClickBtnBack() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popScreen(true);
        }

        onClickInstruction() {
          log("start instruction");
        }

        start() {
          this.startPlay();
        }

        startPlay() {
          if (this.canPick) {
            for (var i = 0; i < this.itemQuestions.length; i++) {
              this.itemQuestions[i].on("i-am-start", this.check_startPositon.bind(this));
              var p = this.itemQuestions[i].getWorldPosition();
              this.itemQuestions[i].on("i-am-moving", this.checkPosition.bind(this, i));
            }
          }
        }

        check_startPositon() {
          log("check start");
        }

        checkPosition(i) {
          var questionP = this.itemQuestions[i].getWorldPosition(); // log("check i: ",i);

          for (var j = 0; j < this.itemAnswers.length; j++) {
            var answerP = this.itemAnswers[j].getWorldPosition();
            var dx = Math.abs(answerP.x - questionP.x);
            var dy = Math.abs(answerP.y - questionP.y);

            if (dx < 40 && dy < 40) {
              if (i == j) {
                this.itemQuestions[i].active = false;
                var spriteA = this.itemAnswers[i].getComponent(Sprite);
                var spriteQ = this.itemQuestions[i].getComponent(Sprite);
                spriteA.color = spriteQ.color;
                this.sum++;

                if (this.sum == 3) {
                  this.handleCorrect();
                }
              } else {
                log("wrong!");
              }
            }
          }
        }

        handleCorrect() {
          log("correct!"); //cong kinh nghiem

          this.levelBarUI.handleProgress();
          this.nextBtn.active = true;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemQuestions", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemAnswers", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nextBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec5], {
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
//# sourceMappingURL=94f1c26a6e1e1d6f2c31a97a5e1de1828858eea0.js.map