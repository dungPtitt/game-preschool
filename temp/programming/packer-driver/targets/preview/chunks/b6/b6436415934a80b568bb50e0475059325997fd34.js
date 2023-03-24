System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sp, _dec, _class, _crd, ccclass, property, VDNodeScaleByBone;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f61f1+sf5VAN7oPXoeoE6R1", "VDNodeScaleByBone", undefined);

      __checkObsolete__(['_decorator', 'Component', 'sp', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VDNodeScaleByBone", VDNodeScaleByBone = (_dec = ccclass('VDNodeScaleByBone'), _dec(_class = class VDNodeScaleByBone extends Component {
        constructor() {
          super(...arguments);
          this._skeleton = null;
        }

        start() {
          this._skeleton = this.node.getComponent(sp.Skeleton);
        }

        update() {
          if (!this._skeleton) return;

          this._skeleton.sockets.forEach(socket => {
            var path = socket.path;
            var target = socket.target;

            var boneName = this._getBoneNameByPath(path);

            var scale = this._getAbsoluteScaleByPath(path);

            if (boneName && boneName != '') {
              target.setScale(scale, scale);
            }
          });
        }

        _getBoneNameByPath(path) {
          var boneName = '';
          var arr = path.split('/');

          if (arr.length > 0) {
            boneName = arr[arr.length - 1];
          }

          return boneName;
        }

        _getAbsoluteScaleByPath(path) {
          var scale = 1;
          var arrName = path.split('/');
          arrName.forEach(boneName => {
            var bone = this._skeleton.findBone(boneName);

            scale *= bone.scaleX;
          });
          return scale;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b6436415934a80b568bb50e0475059325997fd34.js.map