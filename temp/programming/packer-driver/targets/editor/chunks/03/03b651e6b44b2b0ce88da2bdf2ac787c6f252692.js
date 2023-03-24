System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ProgressBar, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ex_LoadingScreen2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ad55p+UR5EKKAQ3ATMAsju", "ex_LoadingScreen2", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_LoadingScreen2", ex_LoadingScreen2 = (_dec = ccclass('ex_LoadingScreen2'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = class ex_LoadingScreen2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loadingProgress", _descriptor, this);

          _initializerDefineProperty(this, "lbVersion", _descriptor2, this);

          this._audios = {};
          this._items = [];
        }

        onLoad() {
          let soundDirs = ['res/sounds/bgm/', 'res/sounds/sfx/'];
          let imageDirs = ['res/fonts/', 'res/images/bgr/'];
          let prefabDirs = ['res/anims/prefabs/', 'res/prefabs/popup/'];
          let prefabs = ['res/prefabs/transition/transition_cloud', 'res/prefabs/screen/play_screen', 'res/prefabs/screen/play_screen_2', 'res/prefabs/screen/play_screen_3'];
          if (sys.isNative) this._items = this._items.concat(soundDirs);
          this._items = this._items // .concat(soundDirs)
          .concat(imageDirs).concat(prefabDirs).concat(prefabs);

          this._setVersion(dm_Config.versionGame);
        }

        start() {
          this.loadingProgress.progress = 0;
          let percent = 1.0 / (this._items.length + 1);
          sys.isBrowser && this._loadAudioWeb();
          VDScreenManager.instance.assetBundle.load('res/prefabs/popup/popup_notify', (err, data) => {
            if (!err) {
              this._loadAsset(0, percent);
            } else {
              log("load error  " + err + " _loadAsset");

              if (sys.isBrowser) {
                alert("Không có kết nối, vui lòng thử lại");
              }
            }
          });
        }

        _loadAudioWeb() {
          let soundDirs = ['res/sounds/bgm/', 'res/sounds/sfx/'];
          soundDirs.forEach(soundsPath => {
            const sounds = VDScreenManager.instance.assetBundle.getDirWithPath(soundsPath, AudioClip);
            sounds.forEach(sound => {
              if (this._audios[`${sound.path}`]) return;
              const nativeUrl = assetManager.utils.getUrlWithUuid(sound.uuid, {
                isNative: true,
                nativeExt: '.mp3'
              }); // log('sound', sound.path, sound.uuid, nativeUrl);
              // log('sound', assetManager.utils.getUrlWithUuid(sound.uuid, { isNative: false }))

              this._audios[`${sound.path}`] = nativeUrl;
            });
          });

          this._initAudio();
        }

        _initAudio() {
          VDAudioManager.instance.init(this._audios);
          let isMuteMusic = VDLocalDataManager.getBoolean(VDAudioManager.ENABLE_MUSIC, false);
          let isMuteSfx = VDLocalDataManager.getBoolean(VDAudioManager.ENABLE_SFX, false);
          VDAudioManager.instance.isMutingMusic = isMuteMusic;
          VDAudioManager.instance.isMutingEffect = isMuteSfx;
        }

        _loadAsset(index, totalPercent) {
          if (index >= this._items.length) {
            this.loadingProgress.progress = 1.0;

            this._finishedLoading();

            return;
          }

          let path = this._items[index];
          log("_loadAsset  " + path);

          if (this._isDirectory(path)) {
            VDScreenManager.instance.assetBundle.loadDir(path, (finished, total) => {
              // log(`items #${index}:  ${finished} / ${total} `);
              let progress = index * totalPercent + finished / total * totalPercent;

              if (progress > this.loadingProgress.progress) {
                this.loadingProgress.progress = progress;
              }
            }, (err, data) => {
              if (sys.isNative && (path.endsWith('/bgm/') || path.endsWith('/sfx/'))) {
                // log(`AudioClip loaded:${JSON.stringify(this._audios)}`);
                let assets = data;

                for (let as of assets) {
                  if (as instanceof AudioClip) {
                    this._audios[`${path}${as.name}`] = `${as._nativeAsset.url}`;
                  }
                }

                this._initAudio();
              }

              if (!err) {
                this.scheduleOnce(() => {
                  this._loadAsset(index + 1, totalPercent);
                }, 0);
              } else {
                log("load error  " + err + "    " + path);

                if (sys.isBrowser) {
                  this.showPopupMessage("Đã có lỗi tải tài nguyên, vui lòng thử lại");
                }
              }
            });
          } else {
            VDScreenManager.instance.assetBundle.load(path, (finished, total) => {
              // log(`${finished} / ${total} `);
              this.loadingProgress.progress = index * totalPercent + finished / total * totalPercent;
            }, (err, data) => {
              if (!err) {
                this.scheduleOnce(() => {
                  this._loadAsset(index + 1, totalPercent);
                }, 0);
              } else {
                log("load error  " + err + "    " + path);

                if (sys.isBrowser) {
                  this.showPopupMessage("Đã có lỗi tải tài nguyên, vui lòng thử lại");
                }
              }
            });
          }
        }

        _finishedLoading() {
          log(`LoadingScreen: _finishedLoading`);
        }

        onClickBtn2MainGame() {
          log(`onClickBtn2MainGame`);
          let play_screen = VDScreenManager.instance.assetBundle.get('res/prefabs/screen/play_screen', Prefab);
          VDScreenManager.instance.replaceScreenAtIndex(play_screen, 0, screen => {
            dm_Director.instance.playScreen = screen;
          });
        }

        showPopupMessage(message) {
          VDScreenManager.instance.showPopupFromPrefabName("res/prefabs/popup/popup_notify", popup => {// let popupDisplay = popup as DomiPopupNotify;
            // popupDisplay.setupPopup(message, [
            //     () => {
            //         VDScreenManager.instance.hidePopup(true);
            //         let percent = 1.0 / (this._items.length + 1);
            //         this._loadAsset(0, percent);
            //     },
            //     () => {
            //         VDScreenManager.instance.hidePopup(true);
            //     }
            // ]);
          }, true, true, false);
        }

        _setVersion(version) {
          this.lbVersion && (this.lbVersion.string = 'v' + version);
        }

        _isDirectory(path) {
          return path != null && typeof path == 'string' && path.length > 0 && path[path.length - 1] == '/';
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbVersion", [_dec3], {
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
//# sourceMappingURL=03b651e6b44b2b0ce88da2bdf2ac787c6f252692.js.map