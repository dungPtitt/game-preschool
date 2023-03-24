System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, view, DEV, VDEventListener, VDEventListenerName, _dec, _class, _crd, ccclass, property, VDPotraitCanvasResize;

  function _reportPossibleCrUseOfVDEventListener(extras) {
    _reporterNs.report("VDEventListener", "./VDEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDEventListenerName(extras) {
    _reporterNs.report("VDEventListenerName", "./VDEventListener", _context.meta, extras);
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
      sys = _cc.sys;
      view = _cc.view;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }, function (_unresolved_2) {
      VDEventListener = _unresolved_2.VDEventListener;
      VDEventListenerName = _unresolved_2.VDEventListenerName;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1672bE4hVEFITBosd8fJW/", "VDPortraitCanvasResize", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sys', 'view', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VDPotraitCanvasResize", VDPotraitCanvasResize = (_dec = ccclass('VDPotraitCanvasResize'), _dec(_class = class VDPotraitCanvasResize extends Component {
        constructor(...args) {
          super(...args);
          this._thisOnResized = void 0;
        }

        onLoad() {
          if (!DEV && sys.isBrowser) {
            this._thisOnResized = this.onScreenResized.bind(this);
            window.addEventListener('resize', this._thisOnResized);
            this.updateCanvasAttributes();
          }

          if (!DEV && sys.isBrowser && sys.isMobile) {
            // console.warn('iOS safari browser ');
            view.on('canvas-resize', this.updateCanvasSize);
            this.updateCanvasSize();
          }
        }

        updateCanvasSize() {
          // console.warn('updateCanvasSize');
          // console.warn('iOS safari browser ');
          window.scrollTo(0, 0);
        }

        updateCanvasAttributes() {
          // const viewSize = view.getFrameSize();
          // log('===================================');
          // log(`window size original: ${window.innerWidth} - ${window.innerHeight}`);
          // log(`view.getDevicePixelRatio: ${view.getDevicePixelRatio()} `);
          // log(`window.getDevicePixelRatio: ${window.devicePixelRatio} `);
          // let ratio = 1; //window.devicePixelRatio;
          let windowWidth = window.innerWidth;
          let windowHeight = window.innerHeight; // log(`window size * ratio: ${windowWidth} - ${windowHeight}`);
          // log(`view size: ${viewSize.width} - ${viewSize.height}`);
          // log(`canvas size: ${view.getCanvasSize().width} - ${view.getCanvasSize().height}`);
          // log(`visible size: ${view.getVisibleSize().width} - ${view.getVisibleSize().height}`);
          // log(`design size: ${view.getDesignResolutionSize().width} - ${view.getDesignResolutionSize().height}`);
          // log(`sys.windowPixelResolution : ${sys.windowPixelResolution.width} - ${sys.windowPixelResolution.height}`);

          let windowRatio = windowWidth * 1.0 / windowHeight;
          let designRatio = view.getDesignResolutionSize().width * 1.0 / view.getDesignResolutionSize().height;
          let cvShadow = document.getElementById('canvas-shadow');

          if (windowRatio > designRatio) {
            if (view.getDesignResolutionSize().width == 1280) {
              designRatio = 1600.0 / 720;
            }

            let cWidth = Math.floor(designRatio * windowHeight);
            let padding = Math.floor((windowWidth - cWidth) / 2); // game.canvas?.setAttribute('width', `${cWidth}px`);
            // game.canvas?.setAttribute('height', `${windowHeight}px`);
            // game.canvas?.setAttribute('style', `width: ${cWidth}px; height: ${windowHeight}px;`);
            // const containerStyle = game.container?.style;
            // if (containerStyle) {
            //     containerStyle.paddingLeft = `${padding}px`;
            //     containerStyle.paddingRight = `${padding}px`;
            //     containerStyle.paddingTop = `0px`;
            //     containerStyle.paddingBottom = `0px`;
            // }
            // document.body.style.width = `${windowWidth}px`;
            // document.body.style.height = `${windowHeight}px`;
            // view.emit("canvas-resize");
            // view._resizeCallback && view._resizeCallback();

            if (cvShadow) {
              cvShadow.setAttribute('style', `visibility: visible;height: ${windowHeight - 1}px;width: ${cWidth}px;left: ${padding}px;top: 0px;transform: rotate(0deg);`);
            } // game.canvas?.style && (game.canvas.style.visibility = 'hidden');
            // game.canvas?.style && (game.canvas.style.visibility = 'visible');
            // director.reset();
            // game.container?.setAttribute('style', `transform: rotate(0deg); width: ${cWidth}px; height: ${windowHeight}px; margin: 0px; padding: 0px ${padding}px;`);
            // view.setDesignResolutionSize(
            //     view.getDesignResolutionSize().width,
            //     view.getDesignResolutionSize().height,
            //     ResolutionPolicy.SHOW_ALL
            // );

          } else {
            if (view.getDesignResolutionSize().width == 720) {
              designRatio = 720 / 1560.0;
            }

            let cHeight = Math.floor(windowWidth / designRatio); // game.canvas?.setAttribute('width', `${windowWidth}px`);
            // game.canvas?.setAttribute('height', `${cHeight}px`);
            // game.canvas?.setAttribute('style', `width: ${windowWidth}px; height: ${cHeight}px;`);

            let padding = Math.floor((windowHeight - cHeight) / 2);

            if (cvShadow) {
              cvShadow.setAttribute('style', `visibility: visible;height: ${cHeight}px;width: ${windowWidth - 1}px;left: 0px;top: ${padding}px;transform: rotate(0deg);`);
            } // game.container?.setAttribute('style', `transform: rotate(0deg); width: ${windowWidth}px; height: ${cHeight}px; margin: 0px; padding: ${padding}px 0px;`);
            // view.setCanvasSize(windowWidth, cHeight);
            // view.setDesignResolutionSize(
            //     view.getDesignResolutionSize().width,
            //     view.getDesignResolutionSize().height,
            //     ResolutionPolicy.SHOW_ALL
            // );

          }
        }

        onScreenResized() {
          this.updateCanvasAttributes();
          (_crd && VDEventListener === void 0 ? (_reportPossibleCrUseOfVDEventListener({
            error: Error()
          }), VDEventListener) : VDEventListener).dispatchEvent((_crd && VDEventListenerName === void 0 ? (_reportPossibleCrUseOfVDEventListenerName({
            error: Error()
          }), VDEventListenerName) : VDEventListenerName).RESIZE_WINDOW_EVENT, this);
        }

        onDestroy() {
          if (!DEV && sys.isBrowser) {
            window.removeEventListener('resize', this._thisOnResized);
          }

          if (!DEV && sys.isBrowser && sys.isMobile) {
            view.off('canvas-resize', this.updateCanvasSize);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=855b037d8fda6d834d138280153f8cf68f3367ec.js.map