System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, math, Node, EventTouch, UITransform, UIOpacity, VERSION, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      math = _cc.math;
      Node = _cc.Node;
      EventTouch = _cc.EventTouch;
      UITransform = _cc.UITransform;
      UIOpacity = _cc.UIOpacity;
      VERSION = _cc.VERSION;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a6d6eJnIBKUbGxgeZgOOhY", "VDExtensions", undefined);

      __checkObsolete__(['math', 'Node', 'EventTouch', 'UITransform', 'UIOpacity', 'VERSION', 'log']);

      EventTouch.prototype.stopPropagation = function () {
        this.propagationStopped = true;
        this.propagationImmediateStopped = true;
      };

      Node.prototype.setZIndex = function (zIndex) {
        if (VERSION < "3.1.0") {
          var uiTrans = this.getComponent(UITransform);

          if (uiTrans) {
            uiTrans.priority = zIndex;
          } else {
            uiTrans = this.addComponent(UITransform);
            uiTrans.priority = zIndex;
          }
        } else {
          this.setSiblingIndex(zIndex);
        }
      };

      Node.prototype.getZIndex = function () {
        if (VERSION < "3.1.0") {
          var uiTrans = this.getComponent(UITransform);

          if (uiTrans) {
            return uiTrans.priority;
          }
        } else {
          return this.getSiblingIndex();
        }
      };

      Node.prototype.setOpacity = function (opacity) {
        var uiOpacity = this.getComponent(UIOpacity);

        if (uiOpacity) {
          uiOpacity.opacity = opacity;
        } else {
          uiOpacity = this.addComponent(UIOpacity);
          uiOpacity.opacity = opacity;
        }
      };

      Node.prototype.getOpacity = function () {
        var uiOpacity = this.getComponent(UIOpacity);

        if (uiOpacity) {
          return uiOpacity.opacity;
        }

        return 0;
      };

      Node.prototype.setPositionX = function (x) {
        this.position = new math.Vec3(x, this.position.y, this.position.z);
      };

      Node.prototype.setPositionY = function (y) {
        this.position = new math.Vec3(this.position.x, y, this.position.z);
      };

      Node.prototype.setPositionZ = function (z) {
        this.position = new math.Vec3(this.position.x, this.position.y, z);
      };

      Node.prototype.changePositionX = function (x) {
        this.position = new math.Vec3(this.position.x + x, this.position.y, this.position.z);
      };

      Node.prototype.changePositionY = function (y) {
        this.position = new math.Vec3(this.position.x, this.position.y + y, this.position.z);
      };

      Node.prototype.changePositionZ = function (z) {
        this.position = new math.Vec3(this.position.x, this.position.y, this.position.z + z);
      };

      Node.prototype.setScaleX = function (x) {
        this.scale = new math.Vec3(x, this.scale.y, this.scale.z);
      };

      Node.prototype.setScaleY = function (y) {
        this.scale = new math.Vec3(this.scale.x, y, this.scale.z);
      };

      Node.prototype.setScaleZ = function (z) {
        this.scale = new math.Vec3(this.scale.x, this.scale.y, z);
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4eabbebb779cbbb2ff04cc57204f2b6648122c39.js.map