System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, tween, log, VDAsyncTaskMgr, VDBaseTask, VDSequenceTask, VDScreenManager, VDAudio, VDAudioNativeManager, _crd;

  function _reportPossibleCrUseOfVDAsyncTaskMgr(extras) {
    _reporterNs.report("VDAsyncTaskMgr", "../async-task/VDAsyncTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBaseTask(extras) {
    _reporterNs.report("VDBaseTask", "../async-task/VDBaseTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDSequenceTask(extras) {
    _reporterNs.report("VDSequenceTask", "../async-task/VDSequenceTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDAudio(extras) {
    _reporterNs.report("VDAudio", "./VDAudio", _context.meta, extras);
  }

  _export("VDAudioNativeManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      tween = _cc.tween;
      log = _cc.log;
    }, function (_unresolved_2) {
      VDAsyncTaskMgr = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDBaseTask = _unresolved_3.default;
    }, function (_unresolved_4) {
      VDSequenceTask = _unresolved_4.default;
    }, function (_unresolved_5) {
      VDScreenManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      VDAudio = _unresolved_6.VDAudio;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f749DjQLhMv6uPZ3XA4fOy", "VDAudioNativeManager", undefined);

      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'tween', 'log']);

      _export("VDAudioNativeManager", VDAudioNativeManager = class VDAudioNativeManager extends (_crd && VDAudio === void 0 ? (_reportPossibleCrUseOfVDAudio({
        error: Error()
      }), VDAudio) : VDAudio) {
        constructor() {
          super();
          this._bgmAS = null;
          this._clipAs = null;
          this._sfx = {};
          this._idSfx = 0;
          this._audiosPool = [];
        }

        init(data) {
          log('@ VDAudioNativeManager ver 1.1');
          this._bgmAS = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.node.addComponent(AudioSource);
          this._clipAs = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.node.addComponent(AudioSource);
        }

        playBGM(name, fade) {
          if (fade === void 0) {
            fade = false;
          }

          // if (this.isMutingMusic) return;
          if (this._bgmAS.playing) {
            this._bgmAS.stop();
          }

          var path = this.musicPath + name;
          var clip = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get(path, AudioClip);

          if (clip) {
            var audioSource = this._bgmAS;
            audioSource.clip = clip;

            if (this.isMutingMusic) {
              log("playBGM Native pause " + name); // audioSource.pause();

              this._bgmAS.volume = 0;

              this._bgmAS.play();

              audioSource.loop = true;
              setTimeout(() => {
                this._bgmAS.pause();
              }, 200);
            } else {
              log("playBGM Native play " + name);
              audioSource.volume = this._musicVolume;
              audioSource.loop = true;

              if (fade) {
                this._bgmAS.volume = 0;

                this._bgmAS.play();

                this.fade(this._bgmAS, this._musicVolume, VDAudioNativeManager.FADE_DURATION);
              } else {
                this._bgmAS.volume = this._musicVolume;

                this._bgmAS.play();
              }
            }
          }
        }

        pauseBGM(fade) {
          if (fade === void 0) {
            fade = true;
          }

          log("pauseBGM Native");

          if (this._bgmAS.playing) {
            log("pauseBGM Native 2");

            if (!fade) {
              this._bgmAS.pause();
            } else {
              this.fade(this._bgmAS, 0, VDAudioNativeManager.FADE_DURATION, () => {
                this._bgmAS.pause(); // this._bgmAS.volume = this._musicVolume;

              });
            }
          }
        }

        resumeBGM(fade) {
          if (fade === void 0) {
            fade = true;
          }

          if (this.isMutingMusic) return;
          log("resumeBGM Native");

          if (!this._bgmAS.playing) {
            if (fade) {
              this._bgmAS.volume = 0;

              this._bgmAS.play();

              this.fade(this._bgmAS, this._musicVolume, VDAudioNativeManager.FADE_DURATION);
            } else {
              this._bgmAS.volume = this._musicVolume;

              this._bgmAS.play();
            }
          }
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

          if (this.isMutingEffect) return;

          if (this._clipAs.playing) {
            this._clipAs.stop();

            (_crd && VDAsyncTaskMgr === void 0 ? (_reportPossibleCrUseOfVDAsyncTaskMgr({
              error: Error()
            }), VDAsyncTaskMgr) : VDAsyncTaskMgr).instance.removeTaskByKey('stop_clip');
          }

          var path = this.musicPath + name;
          var clip = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get(path, AudioClip);

          if (clip) {
            if (this._bgmAS.playing) {
              this.pauseBGM();
            }

            log("playClip Native " + name);
            var audioSource = this._clipAs;
            audioSource.clip = clip;
            audioSource.volume = this._musicVolume;
            audioSource.loop = loop;
            audioSource.play();

            if (resumeBGM) {
              var sequenceTasks = new (_crd && VDSequenceTask === void 0 ? (_reportPossibleCrUseOfVDSequenceTask({
                error: Error()
              }), VDSequenceTask) : VDSequenceTask)();
              sequenceTasks.setKey('stop_clip');
              sequenceTasks.pushTask(new (_crd && VDBaseTask === void 0 ? (_reportPossibleCrUseOfVDBaseTask({
                error: Error()
              }), VDBaseTask) : VDBaseTask)(this, this.resumeBGM, [], clip.getDuration()));
              (_crd && VDAsyncTaskMgr === void 0 ? (_reportPossibleCrUseOfVDAsyncTaskMgr({
                error: Error()
              }), VDAsyncTaskMgr) : VDAsyncTaskMgr).instance.executeTask(sequenceTasks);
            }

            if (!loop && callback) {
              // this._clipAs.node.once(AudioSource.EventType.ENDED, callback);
              setTimeout(() => {
                callback();
              }, clip.getDuration() * 1000);
            }
          }
        }

        stopClip(resumeBGM, callback) {
          if (resumeBGM === void 0) {
            resumeBGM = true;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (this._clipAs.playing) {
            // this._clipAs.stop();
            this.fade(this._clipAs, 0, VDAudioNativeManager.FADE_DURATION, () => {
              this._clipAs.stop();

              callback && callback();
            });
          }

          if (resumeBGM) {
            // log("stopClip resume bgm")
            this.resumeBGM();
          }
        }

        playEffect(name, loop, callback) {
          if (loop === void 0) {
            loop = false;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (this.isMutingEffect) return; // log("playEffect   " + name + "   " + loop);

          var path = this.effectPath + name;
          var clip = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get(path, AudioClip);

          if (clip) {
            this._idSfx++;
            var audioSource = null;

            if (this._audiosPool.length) {
              audioSource = this._audiosPool.shift();
            } else {
              audioSource = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                error: Error()
              }), VDScreenManager) : VDScreenManager).instance.node.addComponent(AudioSource);
            }

            var sfxName = this._idSfx + "_" + name;
            audioSource['sfx_id'] = sfxName;
            audioSource.clip = clip;
            audioSource.volume = this._effectVolume;
            audioSource.loop = loop;
            audioSource['callback'] = callback;
            audioSource.play();
            this._sfx[sfxName] = audioSource;
            log("playEffect Native: " + (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.node.getComponents(AudioSource).length + " - " + Object.keys(this._sfx).length + " / " + AudioSource.maxAudioChannel);

            if (!loop) {
              setTimeout(sfx_id => {
                var as = this._sfx[sfx_id];

                if (as) {
                  if (as.isValid) {
                    as.stop(); // as.destroy();

                    this._audiosPool.push(as);
                  }

                  delete this._sfx[sfx_id];
                  as['callback'] && as['callback']();
                  log("remainEffects Native: " + (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
                    error: Error()
                  }), VDScreenManager) : VDScreenManager).instance.node.getComponents(AudioSource).length + " - " + Object.keys(this._sfx).length + " / " + AudioSource.maxAudioChannel);
                }
              }, clip.getDuration() * 1000, sfxName);
            }

            return sfxName;
          }

          return null;
        }

        stopEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          log("Audio Native Manager stopEffect: " + sfxId);
          var audioSource = this._sfx[sfxId];

          if (audioSource) {
            if (audioSource.playing && fade) {
              this.fade(audioSource, 0, VDAudioNativeManager.FADE_DURATION, () => {
                // audioSource.isValid && audioSource.destroy();
                if (audioSource.isValid) {
                  audioSource.stop();

                  this._audiosPool.push(audioSource); // setTimeout(() => {
                  //     audioSource.destroy();
                  // }, 100);

                }

                delete this._sfx[sfxId];
                log("Audio Native Manager stopEffect 1: " + sfxId);
              });
            } else {
              // audioSource.isValid && audioSource.destroy();
              if (audioSource.isValid) {
                audioSource.stop();

                this._audiosPool.push(audioSource); // setTimeout(() => {
                //     audioSource.destroy();
                // }, 100);

              }

              delete this._sfx[sfxId];
              log("Audio Native Manager stopEffect 2: " + sfxId);
            }

            return true;
          }

          return false;
        }

        stopEffectByName(name, fade) {
          if (fade === void 0) {
            fade = false;
          }

          log("Audio Native Manager stopEffectByName: " + name);
          var audios = Object.values(this._sfx);
          var ret = true;

          for (var sfx of audios) {
            if (sfx && sfx['sfx_id'].includes(name)) {
              log("stopEffectByName:" + sfx['sfx_id']);
              ret = ret && this.stopEffect(sfx['sfx_id']);
            }
          }

          return ret;
        }

        resumeEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          log("Audio Native Manager resumeEffect");
          var audioSource = this._sfx[sfxId];

          if (audioSource && !audioSource.playing) {
            if (fade) {
              audioSource.volume = 0;
              audioSource.play();
              this.fade(audioSource, this._effectVolume, VDAudioNativeManager.FADE_DURATION);
            } else {
              audioSource.volume = this._effectVolume;
              audioSource.play();
            }
          }
        }

        pauseEffect(sfxId, fade) {
          if (fade === void 0) {
            fade = false;
          }

          log("Audio Manager pauseEffect");
          var audioSource = this._sfx[sfxId];

          if (audioSource && audioSource.playing) {
            if (fade) {
              this.fade(audioSource, 0, VDAudioNativeManager.FADE_DURATION, () => {
                audioSource.pause();
              });
            } else {
              audioSource.pause();
            }
          }
        }

        stopAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          Object.keys(this._sfx).forEach(idSfx => {
            this.stopEffect(idSfx, fade);
          });
        }

        pauseAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          var audios = Object.values(this._sfx);
          audios.forEach(audioSource => {
            audioSource && this.pauseEffect(audioSource['sfx_id'], fade);
          });
        }

        resumeAllEffects(fade) {
          if (fade === void 0) {
            fade = false;
          }

          var audios = Object.values(this._sfx);
          audios.forEach(audioSource => {
            audioSource && this.resumeEffect(audioSource['sfx_id'], fade);
          });
        }

        fade(audioSource, volume, duration, callback) {
          if (callback === void 0) {
            callback = null;
          }

          tween(audioSource).to(duration, {
            volume: volume
          }).call(() => {
            callback && callback();
          }).start();
        }

        destroy() {
          if (this._bgmAS) {
            this._bgmAS.stop();
          }

          this.stopClip();
          this.stopAllEffects();
          this._sfx = {};
          this._audiosPool.length = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3b5cee388c4b7ce0da8b4de498a3471870d7f75.js.map