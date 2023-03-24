System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Color, Sprite, log, VDScreenManager, ScaleFactor, scaleTo, TimeFactor, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ex_Level1;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScaleFactor(extras) {
    _reporterNs.report("ScaleFactor", "../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfscaleTo(extras) {
    _reporterNs.report("scaleTo", "../transiton/Transformation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeFactor(extras) {
    _reporterNs.report("TimeFactor", "../transiton/Transformation", _context.meta, extras);
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
      Color = _cc.Color;
      Sprite = _cc.Sprite;
      log = _cc.log;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ScaleFactor = _unresolved_3.ScaleFactor;
      scaleTo = _unresolved_3.scaleTo;
      TimeFactor = _unresolved_3.TimeFactor;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cee47PFgUROPorWsrsBvQJY", "ex_Level1", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Color', 'Sprite', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_Level1", ex_Level1 = (_dec = ccclass('ex_Level1'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = class ex_Level1 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "answer", _descriptor, this);
        }

        onClickInstruction() {
          let sprite = this.answer.getComponent(Sprite);
          sprite.color = new Color(67, 14, 180);
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

        onClickBack() {
          log(`onClickBtnPrevious`);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popScreen(true);
        }

        toDefault() {
          let sprite = this.answer.getComponent(Sprite);
          sprite.color = new Color(204, 204, 204);
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "answer", [_dec2], {
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
//# sourceMappingURL=6f998df3f90c1e7ee571c4daf34057079c12b71d.js.map