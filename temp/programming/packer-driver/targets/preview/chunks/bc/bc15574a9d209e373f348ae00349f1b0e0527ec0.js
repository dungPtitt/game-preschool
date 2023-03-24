System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, sp, Label, log, Prefab, _decorator, Component, VDAudioManager, VDScreenManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, dm_PlayScreen2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDAudioManager(extras) {
    _reporterNs.report("VDAudioManager", "../../../../vd-framework/audio/VDAudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      sp = _cc.sp;
      Label = _cc.Label;
      log = _cc.log;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      VDAudioManager = _unresolved_2.VDAudioManager;
    }, function (_unresolved_3) {
      VDScreenManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "820a6UmdiBOt62antESKwmR", "dm_PlayScreen2", undefined);

      __checkObsolete__(['instantiate', 'sp']);

      __checkObsolete__(['Label', 'log', 'Prefab']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_PlayScreen2", dm_PlayScreen2 = (_dec = ccclass('dm_PlayScreen2'), _dec2 = property(Label), _dec(_class = (_class2 = class dm_PlayScreen2 extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbPauseResumeMusic", _descriptor, this);

          this.isMusicPause = false;
        }

        onClickBtnNext() {
          log("onClickBtnNext");
          var pfFxCloud = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/transition/transition_cloud', Prefab);
          var nodeCloud = instantiate(pfFxCloud);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showEffect(nodeCloud);
          var spineCloud = nodeCloud.getComponent(sp.Skeleton);
          var entry = spineCloud.setAnimation(0, 'transition_to_lucky', false);
          spineCloud.setTrackCompleteListener(entry, (x, ev) => {
            (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.removeAllEffects();
          });
          spineCloud.setTrackEventListener(entry, (x, ev) => {
            if (ev && ev.data && ev.data.name && ev.data.name == 'transition') {
              var play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/play_screen_3', Prefab);
              (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.pushScreen(play_screen, screen => {}, false);
            }
          });
        }

        onClickBtnPrevious() {
          log("onClickBtnPrevious");
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.popScreen(true);
        } //#region BGM


        onClickPlayBGM() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playBGM('dm_bgm_main');
        }

        onClickPauseBGM() {
          this.isMusicPause = !this.isMusicPause;
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.isMutingMusic = this.isMusicPause;
          if (this.lbPauseResumeMusic) this.lbPauseResumeMusic.string = this.isMusicPause ? 'Resume' : 'Pause';
        } //#endregion
        //#region Clip


        onClickPlayClip() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playClip('dm_bgm_win', false);
        }

        onClickStopClip() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.stopClip();
        } //#endregion
        //#region Effect


        onClickPlayEffect() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.playEffect('dm_sfx_appear', false);
        }

        onClickStopEffect() {
          (_crd && VDAudioManager === void 0 ? (_reportPossibleCrUseOfVDAudioManager({
            error: Error()
          }), VDAudioManager) : VDAudioManager).instance.stopEffectByName('dm_sfx_appear');
        } //#endregion


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbPauseResumeMusic", [_dec2], {
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
//# sourceMappingURL=bc15574a9d209e373f348ae00349f1b0e0527ec0.js.map