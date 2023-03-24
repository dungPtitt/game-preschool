System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, Color, log, Prefab, tween, v3, VDScreenManager, ScaleFactor, scaleTo, TimeFactor, level_progress_bar, LocalDataManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, level1_comp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScaleFactor(extras) {
    _reporterNs.report("ScaleFactor", "../../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfscaleTo(extras) {
    _reporterNs.report("scaleTo", "../../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeFactor(extras) {
    _reporterNs.report("TimeFactor", "../../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOflevel_progress_bar(extras) {
    _reporterNs.report("level_progress_bar", "../../transiton/level_progress_bar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalDataManager(extras) {
    _reporterNs.report("LocalDataManager", "../../common/LocalDataManager", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      log = _cc.log;
      Prefab = _cc.Prefab;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ScaleFactor = _unresolved_3.ScaleFactor;
      scaleTo = _unresolved_3.scaleTo;
      TimeFactor = _unresolved_3.TimeFactor;
    }, function (_unresolved_4) {
      level_progress_bar = _unresolved_4.level_progress_bar;
    }, function (_unresolved_5) {
      LocalDataManager = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c178+MMBBBlYXG77WOtQPy", "level1_comp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Color', 'log', 'Prefab', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("level1_comp", level1_comp = (_dec = ccclass('level1_comp'), _dec2 = property({
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
      }), level_progress_bar) : level_progress_bar), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = class level1_comp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "answer", _descriptor, this);

          _initializerDefineProperty(this, "pointer", _descriptor2, this);

          _initializerDefineProperty(this, "smile", _descriptor3, this);

          _initializerDefineProperty(this, "cry", _descriptor4, this);

          _initializerDefineProperty(this, "nextBtn", _descriptor5, this);

          _initializerDefineProperty(this, "levelBarUI", _descriptor6, this);

          _initializerDefineProperty(this, "items", _descriptor7, this);

          this.progressLevelBar = void 0;
          this.canPlay = true;
        }

        onClickInstruction() {
          if (this.levelBarUI) {
            this.levelBarUI.handleProgress();
          } // this.pointer.active = true;
          // let p = this.answer.getWorldPosition();
          // this.pointer.setWorldPosition(p.x, p.y, 0);
          // let sprite =  this.answer.getComponent(Sprite);
          // sprite.color = new Color(67, 14, 180); 


          (_crd && scaleTo === void 0 ? (_reportPossibleCrUseOfscaleTo({
            error: Error()
          }), scaleTo) : scaleTo)(this.answer, (_crd && ScaleFactor === void 0 ? (_reportPossibleCrUseOfScaleFactor({
            error: Error()
          }), ScaleFactor) : ScaleFactor).BIG_BY_2, (_crd && ScaleFactor === void 0 ? (_reportPossibleCrUseOfScaleFactor({
            error: Error()
          }), ScaleFactor) : ScaleFactor).SMALL_BY_0_5, (_crd && TimeFactor === void 0 ? (_reportPossibleCrUseOfTimeFactor({
            error: Error()
          }), TimeFactor) : TimeFactor).MEDIUM, this.toDefault.bind(this));
        }

        onClickBtnNext(event, data) {
          log("check number: ", data);
          var level2_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/comparison/level' + String(data), Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.pushScreen(level2_screen, screen => {}, true); // xoa man choi hien tai
          // VDScreenManager.instance.popScreen(true);
          // cong them kinh nghiem
        }

        onClickBack() {
          //cach 1
          // log(`onClickBtnPrevious`);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popScreen(true);
        }

        toDefault() {// let sprite =  this.answer.getComponent(Sprite);
          // sprite.color = new Color(204, 204, 204);
          // this.pointer.active = false;
        }

        start() {
          var check = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          var arr = check.comparison;
          this.canPlay = arr[0];
        }

        startPlay() {
          if (this.canPlay) {
            for (var i = 0; i < this.items.length; i++) {
              this.items[i].on(Node.EventType.TOUCH_END, this.checkAnswer.bind(this, i));
            }
          }
        }

        checkAnswer(i) {
          var check = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          var res = check.comparison[0];

          if (res == false) {
            if (i == 0) {
              this.processCorrect();
            } else {
              this.processWrong();
            }
          }
        }

        processCorrect() {
          var check = (_crd && LocalDataManager === void 0 ? (_reportPossibleCrUseOfLocalDataManager({
            error: Error()
          }), LocalDataManager) : LocalDataManager).getObject("check", {});
          check.comparison.splice(0, 1, true);
          log("check, ", check);

          if (this.levelBarUI) {
            this.levelBarUI.handleProgress();
          }

          this.smile.active = true;
          var sprite = this.answer.getComponent(Sprite);
          sprite.color = new Color(67, 14, 180);
          this.nextBtn.active = true;
        }

        processWrong() {
          this.cry.active = true;
          tween(this.cry).to(1, {
            scale: v3(0.08, 0.08, 0)
          }).to(0.2, {
            scale: v3(0, 0, 0)
          }).start();
        }

        update(deltaTime) {
          if (this.canPlay) {
            this.startPlay();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "answer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pointer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "smile", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cry", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nextBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelBarUI", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b61a28cae71f1646b71a9f472317f294783830b.js.map