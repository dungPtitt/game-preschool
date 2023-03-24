System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, tween, _crd, ScaleFactor, TimeFactor;

  function scaleTo(node, factor1, factor2, duration, callback) {
    tween(node).to(duration, {
      scale: factor1
    }).to(duration, {
      scale: factor2
    }).repeat(2).call(callback).start();
  }

  _export("scaleTo", scaleTo);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0967dWtrTVH+Y13AESJ44Vl", "Transformation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      _export("ScaleFactor", ScaleFactor = {
        SMALL_BY_0_5: new Vec3(0.5, 0.5, 1),
        SMALL_BY_0_2: new Vec3(0.2, 0.2, 1),
        SMALL_BY_0_1: new Vec3(0.1, 0.1, 1),
        EQUAL: new Vec3(1, 1, 1),
        BIG_BY_1_5: new Vec3(1.5, 1.5, 1),
        BIG_BY_2: new Vec3(2, 2, 1),
        BIG_BY_3: new Vec3(3, 3, 1)
      });

      _export("TimeFactor", TimeFactor = {
        QUICK: 0.1,
        MEDIUM: 0.3,
        SLOW: 0.5
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=00c93aced1207b2d79535b5072c122a497b79475.js.map