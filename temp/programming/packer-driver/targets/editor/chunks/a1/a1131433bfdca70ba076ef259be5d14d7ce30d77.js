System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, game, Game, VDAudio, Audio, VDAudioWebManager, _crd;

  function _reportPossibleCrUseOfVDAudio(extras) {
    _reporterNs.report("VDAudio", "./VDAudio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudio(extras) {
    _reporterNs.report("Audio", "../plugins/howler.min.js", _context.meta, extras);
  }

  _export("VDAudioWebManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
      game = _cc.game;
      Game = _cc.Game;
    }, function (_unresolved_2) {
      VDAudio = _unresolved_2.VDAudio;
    }, function (_unresolved_3) {
      Audio = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "273a4hHfS9MLaLYA6GZs+Ec", "VDAudioWebManager", undefined);

      __checkObsolete__(['_decorator', 'log', 'game', 'Game']);

      _export("VDAudioWebManager", VDAudioWebManager = class VDAudioWebManager extends (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
        error: Error()
      }), VDAudio) : VDAudio) {
        constructor() {
          super();
          this.audios = {};
          this._webBgm = null;
          this._webClip = null;
          this._sfx = {};
          this._isActive = true;
          (_crd && Audio === void 0 ? (_reportPossibleCrUseOfAudio({
            error: Error()
          }), Audio) : Audio).Howler.autoSuspend = false;
          (_crd && Audio === void 0 ? (_reportPossibleCrUseOfAudio({
            error: Error()
          }), Audio) : Audio).Howler.autoUnlock = true;
          game.on(Game.EVENT_HIDE, this._onHideGame, this);
          game.on(Game.EVENT_SHOW, this._onShowGame, this);
        }

        destroy() {
          game.off(Game.EVENT_HIDE, this._onHideGame, this);
          game.off(Game.EVENT_SHOW, this._onShowGame, this);

          if (this._webBgm) {
            this._webBgm.howl.stop();

            this._webBgm = null;
          }

          this.stopClip();
          this.stopAllEffects();
          this.audios = {};
          this._sfx.length = 0;
        }

        _onHideGame() {
          this._isActive = false;

          if (!this._mutingMusic) {
            this.pauseBGM();
          }

          if (!this._mutingEffect) {
            this.pauseClip();
            this.pauseAllEffects();
          }
        }

        _onShowGame() {
          this._isActive = true;

          if (!this._mutingMusic) {
            this.resumeBGM();
          }

          if (!this._mutingEffect) {
            this.resumeClip();
            this.resumeAllEffects();
          }
        }

        init(audioList) {
          log(`initWebAudio`);

          for (let key in audioList) {
            let h = new (_crd && Audio === void 0 ? (_reportPossibleCrUseOfAudio({
              error: Error()
            }), Audio) : Audio).Howl({
              src: audioList[key]
            });
            let data = {
              path: audioList[key],
              howl: h
            };
            this.audios[key] = data;
          }
        }

        playBGM(name, fade = false) {
          if (!this._isActive) return;
          let path = this.musicPath + name;

          if (this._webBgm) {
            this._webBgm.howl.stop();

            this._webBgm = null;
          }

          let data = this.audios[path];

          if (data && data.howl) {
            data.howl.loop(true);

            if (!this.isMutingMusic) {
              data.howl.play();

              if (fade) {
                data.howl.volume(0);
                data.howl.fade(0, this._musicVolume, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                  error: Error()
                }), VDAudio) : VDAudio).FADE_DURATION * 1000);
              } else {
                data.howl.volume(this.musicVolume);
              }
            }

            this._webBgm = data;
          }
        }

        pauseBGM(fade = true) {
          log("pauseBGM   Web");

          if (this._webBgm && this._webBgm.howl.playing()) {
            if (!fade) {
              this._webBgm.howl.pause();
            } else {
              this._webBgm.howl.fade(this.musicVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000);

              let howl = this._webBgm.howl;
              howl.once('fade', sId => {
                howl.pause();
              });
            }
          }
        }

        resumeBGM(fade = true) {
          if (this.isMutingMusic) return;
          log("resumeBGM   Web");

          if (this._webBgm && !this._webBgm.howl.playing()) {
            if (!fade) {
              this._webBgm.howl.volume(this._musicVolume);

              this._webBgm.howl.play();
            } else {
              this._webBgm.howl.play();

              this._webBgm.howl.fade(0, this._musicVolume, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000);
            }
          }
        }

        playClip(name, loop = false, resumeBGM = true, callback = null) {
          if (!this._isActive) return;
          if (this.isMutingEffect) return;
          let path = this.musicPath + name;

          if (this._webClip) {
            this._webClip.howl.stop();

            this._webClip = null;
          }

          let data = this.audios[path];

          if (data && data.howl && !data.howl.playing()) {
            this.pauseBGM();
            data.howl.loop(loop);
            data.howl.volume(this._effectVolume);
            data.howl.play();
            this._webClip = data;
            !loop && this._webClip.howl.once('end', sId => {
              if (resumeBGM) this.resumeBGM();
              if (!loop && callback) callback();
              this._webClip = null;
            });
          }
        }

        stopClip(resumeBGM = true, callback = null) {
          // let path = this.musicPath + name;
          if (this._webClip && this._webClip.howl && this._webClip.howl.playing()) {
            this._webClip.howl.fade(this._effectVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
              error: Error()
            }), VDAudio) : VDAudio).FADE_DURATION * 1000);

            let howl = this._webClip.howl;
            howl.once('fade', sId => {
              howl.stop();
              this._webClip = null;
              callback && callback();
            });
          }

          if (resumeBGM) {
            this.resumeBGM();
          }
        }

        pauseClip(fade = false) {
          if (this._webClip && this._webClip.howl && this._webClip.howl.playing()) {
            if (!fade) {
              this._webClip.howl.pause();
            } else {
              this._webClip.howl.fade(this._effectVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000);

              this._webClip.howl.once('fade', sId => {
                this._webClip.howl.pause();
              });
            }
          }
        }

        resumeClip(fade = false) {
          if (!this._isActive) return;

          if (this._webClip && this._webClip.howl && !this._webClip.howl.playing()) {
            if (!fade) {
              this._webClip.howl.volume(this._effectVolume);

              this._webClip.howl.play();
            } else {
              this._webClip.howl.fade(0, this._effectVolume, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000);

              this._webClip.howl.once('fade', sId => {
                this._webClip.howl.pause();
              });
            }
          }
        }

        playEffect(name, loop = false, callback = null) {
          if (!this._isActive) return;
          if (this.isMutingEffect) return;
          let path = this.effectPath + name;
          let data = this.audios[path];

          if (data && data.howl) {
            data.howl.loop(loop);
            data.howl.volume(this._effectVolume);
            let sfxId = '' + data.howl.play();
            this._sfx[sfxId] = data;
            log(`playEffect Web start: ${path} - ${loop} - ${sfxId}`);

            if (!loop) {
              data.howl.once('end', sId => {
                log(`playEffect Web end : ${path}`);
                callback && callback();
                delete this._sfx[sfxId];
              });
            }

            return sfxId;
          }

          return null;
        }

        stopEffect(sfxId, fade = false) {
          log(`Audio Web Manager stopEffect: ${sfxId}`);
          let data = this._sfx[sfxId];

          if (data && data.howl && data.howl.playing(parseInt(sfxId))) {
            if (!fade) {
              data.howl.stop(parseInt(sfxId));
              delete this._sfx[sfxId];
            } else {
              data.howl.fade(this._effectVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000, parseInt(sfxId));
              data.howl.once('fade', sId => {
                data.howl.stop(parseInt(sfxId));
                delete this._sfx[sfxId];
              });
            }

            return true;
          }

          return false;
        }

        stopEffectByName(name, fade = false) {
          let path = this.effectPath + name;
          let data = this.audios[path];
          log(`stopEffectByName: ${path}`);

          if (data && data.howl && data.howl.playing()) {
            if (!fade) {
              data.howl.stop();
            } else {
              data.howl.fade(this._effectVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000);
              data.howl.once('fade', sId => {
                data.howl.stop();
              });
            }

            let soundIds = data.howl._getSoundIds();

            for (let sId of soundIds) {
              delete this._sfx[sId + ''];
            }

            return true;
          }

          return false;
        }

        pauseEffect(sfxId, fade = false) {
          log(`Audio Web Manager pauseEffect ${sfxId}`);
          let data = this._sfx[sfxId];

          if (data && data.howl && data.howl.playing(parseInt(sfxId))) {
            log(`Audio Web Manager pauseEffect 222 ${sfxId}`);

            if (!fade) {
              data.howl.pause(parseInt(sfxId));
            } else {
              data.howl.fade(this._effectVolume, 0, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000, parseInt(sfxId));
              data.howl.once('fade', sId => {
                data.howl.pause(parseInt(sfxId));
              });
            }
          }
        }

        resumeEffect(sfxId, fade = false) {
          log(`Audio Manager resumeEffect ${sfxId}`);
          let data = this._sfx[sfxId];

          if (data && data.howl && !data.howl.playing(parseInt(sfxId))) {
            if (!fade) {
              data.howl.volume(this._effectVolume, parseInt(sfxId));
              data.howl.play(parseInt(sfxId));
            } else {
              data.howl.play(parseInt(sfxId));
              data.howl.fade(0, this._effectVolume, (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
                error: Error()
              }), VDAudio) : VDAudio).FADE_DURATION * 1000, parseInt(sfxId));
            }
          }
        }

        stopAllEffects(fade = false) {
          let playingSoundIds = Object.keys(this._sfx);
          playingSoundIds.forEach(idSfx => {
            this.stopEffect(idSfx, fade);
          });
        }

        pauseAllEffects(fade = false) {
          let playingSoundIds = Object.keys(this._sfx);
          playingSoundIds.forEach(idSfx => {
            this.pauseEffect(idSfx, fade);
          });
        }

        resumeAllEffects(fade = false) {
          let playingSoundIds = Object.keys(this._sfx);
          playingSoundIds.forEach(idSfx => {
            this.resumeEffect(idSfx, fade);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1131433bfdca70ba076ef259be5d14d7ce30d77.js.map