System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, VDAudioNativeManager, VDAudioWebManager, VDAudioManager, _crd;

  function _reportPossibleCrUseOfVDAudio(extras) {
    _reporterNs.report("VDAudio", "./VDAudio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDAudioNativeManager(extras) {
    _reporterNs.report("VDAudioNativeManager", "./VDAudioNativeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDAudioWebManager(extras) {
    _reporterNs.report("VDAudioWebManager", "./VDAudioWebManager", _context.meta, extras);
  }

  _export("VDAudioManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      VDAudioNativeManager = _unresolved_2.VDAudioNativeManager;
    }, function (_unresolved_3) {
      VDAudioWebManager = _unresolved_3.VDAudioWebManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff32dP3jxxEY476ylEx1cRi", "VDAudioManager", undefined);

      __checkObsolete__(['_decorator', 'sys']);

      _export("VDAudioManager", VDAudioManager = class VDAudioManager {
        static get instance() {
          if (VDAudioManager._instance) {
            return VDAudioManager._instance;
          }

          VDAudioManager._instance = new VDAudioManager();
          return VDAudioManager._instance;
        }

        constructor() {
          this._audioManager = void 0;

          if (this._isWebAudio()) {
            this._audioManager = new (_crd && VDAudioWebManager === void 0 ? (_reportPossibleCrUseOfVDAudioWebManager({
              error: Error()
            }), VDAudioWebManager) : VDAudioWebManager)();
          } else {
            this._audioManager = new (_crd && VDAudioNativeManager === void 0 ? (_reportPossibleCrUseOfVDAudioNativeManager({
              error: Error()
            }), VDAudioNativeManager) : VDAudioNativeManager)();
          }
        }

        _isWebAudio() {
          return sys.isBrowser;
        }

        get isMutingMusic() {
          return this._audioManager.isMutingMusic;
        }

        set isMutingMusic(value) {
          this._audioManager.isMutingMusic = value;
        }

        get isMutingEffect() {
          return this._audioManager.isMutingEffect;
        }

        set isMutingEffect(value) {
          this._audioManager.isMutingEffect = value;
        }

        get musicVolume() {
          return this._audioManager.musicVolume;
        }

        set musicVolume(value) {
          this._audioManager.musicVolume = value;
        }

        get effectVolume() {
          return this._audioManager.effectVolume;
        }

        set effectVolume(value) {
          this._audioManager.effectVolume = value;
        }

        init(audio) {
          this._audioManager.init(audio);
        }

        playBGM(name, fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.playBGM(name, fade);
        }

        pauseBGM(fade) {
          if (fade === void 0) {
            fade = true;
          }

          this._audioManager.pauseBGM(fade);
        }

        resumeBGM(fade) {
          if (fade === void 0) {
            fade = true;
          }

          this._audioManager.resumeBGM(fade);
        }

        playClip(name, loop, resumeBGM, callback) {
          if (loop === void 0) {
            loop = false;
          }

          if (resumeBGM === void 0) {
            resumeBGM = true;
          }

          if (callback === void 0) {
            callback = null;
          }

          this._audioManager.playClip(name, loop, resumeBGM, callback);
        }

        stopClip(resumeBGM, callback) {
          if (resumeBGM === void 0) {
            resumeBGM = true;
          }

          if (callback === void 0) {
            callback = null;
          }

          this._audioManager.stopClip(resumeBGM, callback);
        }

        playEffect(name, loop, callback) {
          if (loop === void 0) {
            loop = false;
          }

          if (callback === void 0) {
            callback = null;
          }

          return this._audioManager.playEffect(name, loop, callback);
        }

        stopEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          return this._audioManager.stopEffect(sfxId, fade);
        }

        stopEffectByName(name, fade) {
          if (fade === void 0) {
            fade = false;
          }

          return this._audioManager.stopEffectByName(name, fade);
        }

        resumeEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.resumeEffect(sfxId, fade);
        }

        pauseEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.pauseEffect(sfxId, fade);
        }

        stopAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.stopAllEffects(fade);
        }

        pauseAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.pauseAllEffects(fade);
        }

        resumeAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          this._audioManager.resumeAllEffects(fade);
        }

        destroy() {
          this._audioManager && this._audioManager.destroy();
          VDAudioManager._instance = null;
        }

      });

      VDAudioManager.ENABLE_MUSIC = 'enableBackgroundMusic';
      VDAudioManager.ENABLE_SFX = 'enableSound';
      VDAudioManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0cc6f9827aa9abf38ef7e77d214a9a123cd58023.js.map