System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, Prefab, sys, VDScreenManager, ex_Director, _dec, _class, _crd, ccclass, property, ex_LoadingScreen;

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDBaseScreen(extras) {
    _reporterNs.report("VDBaseScreen", "../../../../vd-framework/ui/VDBaseScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScreenManager(extras) {
    _reporterNs.report("VDScreenManager", "../../../../vd-framework/ui/VDScreenManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfex_Director(extras) {
    _reporterNs.report("ex_Director", "../common/ex_Director", _context.meta, extras);
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
      log = _cc.log;
      Prefab = _cc.Prefab;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      VDScreenManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      ex_Director = _unresolved_3.ex_Director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05715Fk5MhGTpRk0iwppszP", "ex_LoadingScreen", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log', 'Prefab', 'sys', 'Asset', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ex_LoadingScreen", ex_LoadingScreen = (_dec = ccclass('ex_LoadingScreen'), _dec(_class = class ex_LoadingScreen extends Component {
        constructor(...args) {
          super(...args);
          this._audios = {};
          this._items = [];
        }

        onLoad() {
          // let soundDirs = [
          //     'res/sounds/bgm/',
          //     'res/sounds/sfx/',
          // ];
          let imageDirs = ['res/fonts/', 'res/images/bgr/']; // let prefabDirs = [
          //     'res/anims/prefabs/',
          //     'res/prefabs/popup/',
          // ];

          let prefabs = ['res/prefabs/screen/level_comparison_screen', 'res/prefabs/screen/level1'];
          if (sys.isNative) this._items = this._items.concat(imageDirs);
          this._items = this._items // .concat(prefabDirs)
          .concat(prefabs);
        }

        start() {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.load('res/prefabs/popup/popup_notify', (err, data) => {
            if (!err) {
              this._loadAsset(0);
            } else {
              log("load error  " + err + " _loadAsset");

              if (sys.isBrowser) {
                alert("Không có kết nối, vui lòng thử lại");
              }
            }
          });
        }

        _loadAsset(index) {
          if (index >= this._items.length) {
            this._finishedLoading();

            return;
          }

          let path = this._items[index];
          log("_loadAsset  " + path);

          if (this._isDirectory(path)) {
            (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.assetBundle.loadDir(path, (finished, total) => {// log(`items #${index}:  ${finished} / ${total} `);
            }, (err, data) => {
              if (sys.isNative && (path.endsWith('/bgm/') || path.endsWith('/sfx/'))) {// log(`AudioClip loaded:${JSON.stringify(this._audios)}`);
                // let assets: Asset[] = data;
                // for (let as of assets) {
                //     if (as instanceof AudioClip) {
                //         this._audios[`${path}${as.name}`] = `${as._nativeAsset.url}`;
                //     }
                // }
                // this._initAudio();
              }

              if (!err) {
                this.scheduleOnce(() => {
                  this._loadAsset(index + 1);
                }, 0);
              } else {
                log("load error  " + err + "    " + path);

                if (sys.isBrowser) {
                  this.showPopupMessage("Đã có lỗi tải tài nguyên, vui lòng thử lại");
                }
              }
            });
          } else {
            (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
              error: Error()
            }), VDScreenManager) : VDScreenManager).instance.assetBundle.load(path, (finished, total) => {// log(`${finished} / ${total} `);
              // this.loadingProgress.progress = index * totalPercent + finished / total * totalPercent;
            }, (err, data) => {
              if (!err) {
                this.scheduleOnce(() => {
                  this._loadAsset(index + 1);
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

        showPopupMessage(message) {
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.showPopupFromPrefabName("res/prefabs/popup/popup_notify", popup => {}, true, true, false);
        }

        _finishedLoading() {
          log(`LoadingScreen: _finishedLoading`);
        }

        onClickBtnLevelComparison() {
          log(`onClickBtn2MainGame`); // VDScreenManager.instance.assetBundle.load("res/prefabs/screen/level_comparison_screen", Prefab, (error, prefab) => {
          //     if (error) {
          //         log(`bundle.load: ${error}`);
          //     }
          //     else {
          //         log("load loading sucess")
          //         // VDScreenManager.instance.initWithRootScreen(prefab);
          //         VDScreenManager.instance.initWithRootScreen(prefab, (screen) => {
          //             log('initWithRootScreen ' + screen.name + ' success!');
          //         });
          //     }
          // })

          let play_screen = (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.assetBundle.get('res/prefabs/screen/play_screen', Prefab);
          (_crd && VDScreenManager === void 0 ? (_reportPossibleCrUseOfVDScreenManager({
            error: Error()
          }), VDScreenManager) : VDScreenManager).instance.replaceScreenAtIndex(play_screen, 0, screen => {
            (_crd && ex_Director === void 0 ? (_reportPossibleCrUseOfex_Director({
              error: Error()
            }), ex_Director) : ex_Director).instance.playScreen = screen;
          });
        }

        _isDirectory(path) {
          return path != null && typeof path == 'string' && path.length > 0 && path[path.length - 1] == '/';
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=80099cadaaae35e0c699e7dafe69cd6e0db3ce4d.js.map