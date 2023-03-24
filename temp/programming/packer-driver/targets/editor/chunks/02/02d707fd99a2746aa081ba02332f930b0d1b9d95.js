System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, VDAudio, _crd;

  _export("VDAudio", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7c1100bh2FI1p8ibKXVS4qa", "VDAudio", undefined);

      __checkObsolete__(['_decorator']);

      _export("VDAudio", VDAudio = class VDAudio {
        constructor() {
          this.musicPath = 'res/sounds/bgm/';
          this.effectPath = 'res/sounds/sfx/';
          this._mutingMusic = false;
          this._mutingEffect = false;
          this._musicVolume = 1.0;
          this._effectVolume = 1;
        }

        get isMutingMusic() {
          return this._mutingMusic;
        }

        set isMutingMusic(value) {
          if (this._mutingMusic != value) {
            this._mutingMusic = value;
          }

          if (this._mutingMusic) {
            this.pauseBGM(false);
          } else {
            this.resumeBGM(false);
          }
        }

        get isMutingEffect() {
          return this._mutingEffect;
        }

        set isMutingEffect(value) {
          if (this._mutingEffect != value) {
            this._mutingEffect = value;
          }

          if (this._mutingEffect) {
            this.stopClip(false, null);
            this.stopAllEffects(false);
          }
        }

        get musicVolume() {
          return this._musicVolume;
        }

        set musicVolume(value) {
          if (this._musicVolume != value) {
            this._musicVolume = value;
          }
        }

        get effectVolume() {
          return this._effectVolume;
        }

        set effectVolume(value) {
          if (this._effectVolume != value) {
            this._effectVolume = value;
          }
        }

      });

      VDAudio.FADE_DURATION = 0.2;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02d707fd99a2746aa081ba02332f930b0d1b9d95.js.map