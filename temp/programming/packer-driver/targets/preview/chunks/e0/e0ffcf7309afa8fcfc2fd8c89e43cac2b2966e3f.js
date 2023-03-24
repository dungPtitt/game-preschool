System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, tween, Vec3, VDUtils, _crd, cc;

  _export("default", void 0);

  return {
    setters: [function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
      tween = _cc2.tween;
      Vec3 = _cc2.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "effc4/EYURHGKwjBqGuWPNV", "VDUtils", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      __checkObsolete__(['tween', 'Tween', 'Vec3']);

      _export("default", VDUtils = class VDUtils {
        static playAllVfx(rootNode, animName, loop) {
          if (loop === void 0) {
            loop = false;
          }

          var anim = rootNode.getComponentInChildren(cc.sp.Skeleton);
          anim == null ? void 0 : anim.setAnimation(0, animName, loop);
        }

        static getAnimationName(spine, trackIndex) {
          if (trackIndex === void 0) {
            trackIndex = 0;
          }

          var curAnimation = spine.getCurrent(trackIndex);
          if (!curAnimation) return null;
          return curAnimation.animation.name;
        }

        static playAnimation(spineNode, name, loop, completedCallback) {
          if (loop === void 0) {
            loop = false;
          }

          if (completedCallback === void 0) {
            completedCallback = null;
          }

          if (!spineNode) return false;
          var spine = spineNode.getComponent(cc.sp.Skeleton);
          if (!spine) return false;
          var entry = spine.setAnimation(0, name, loop);
          if (!entry) return false;
          spine.setTrackCompleteListener(entry, () => {
            completedCallback && completedCallback();
          });
          return true;
        }

        static setMix(spine, anim1, anim2, mixTime) {
          if (mixTime === void 0) {
            mixTime = 0.25;
          }

          spine == null ? void 0 : spine.setMix(anim1, anim2, mixTime);
          spine == null ? void 0 : spine.setMix(anim2, anim1, mixTime);
        }

        static transitionBackgroundWeb(fromBgrName, toBrgName) {
          if (cc.sys.isBrowser) {
            var fromBg = document.getElementById(fromBgrName);
            fromBg && (fromBg.className = fromBg.className.replace('visible', 'hidden'));
            var toBg = document.getElementById(toBrgName);
            toBg && (toBg.className = fromBg.className.replace('hidden', 'visible'));
          }
        }

        static formatTimestamp(ts, hasYear) {
          var d = new Date(ts);
          var h = VDUtils.addZero(d.getHours());
          var m = VDUtils.addZero(d.getMinutes());
          var s = VDUtils.addZero(d.getSeconds());
          var t = VDUtils.addZero(d.getDate()) + '/' + VDUtils.addZero(d.getMonth() + 1) + (hasYear ? '/' + d.getFullYear() : '') + ' ' + h + ':' + m + ':' + s;
          return t;
        }

        static addZero(i) {
          if (i < 10) {
            i = '0' + i;
          }

          return i;
        }
        /**
         * target scale will set with `startRate`, then scale to `scaleUpRate` during `duration`, then scale to `toRate` during `duration`, after all call `finishedCallback`
         */


        static animateScaleUp(target, scaleUpRate, duration, toRate, startRate, finishedCallback) {
          if (duration === void 0) {
            duration = 0.2;
          }

          if (toRate === void 0) {
            toRate = 1;
          }

          if (startRate === void 0) {
            startRate = 1;
          }

          if (finishedCallback === void 0) {
            finishedCallback = null;
          }

          var scale0 = {
            scale: new Vec3(startRate, startRate, startRate)
          };
          var scale1 = tween().to(duration, {
            scale: new Vec3(scaleUpRate, scaleUpRate, scaleUpRate)
          }, {
            easing: 'fade'
          });
          var scale2 = tween().to(duration, {
            scale: new Vec3(toRate, toRate, toRate)
          }, {
            easing: 'fade'
          });
          var func = tween().call(() => {
            finishedCallback && finishedCallback();
          });
          var animate = tween(target).set(scale0).then(scale1).then(scale2).then(func).start();
          return animate;
        }

        static equalsArray(a, b) {
          return a.length === b.length && a.every((v, i) => v === b[i]);
        }

        static shakeEffect(node, duration, strength) {
          if (!node) return;
          if (node["tween_shake"]) node["tween_shake"].stop(); // stop if on tween;

          var backUpPos = node.getPosition();
          var lstMoveTweens = [];
          var loopTime = Math.floor(duration / 0.01);

          for (var i = 0; i < loopTime; i++) {
            var rand_x = backUpPos.x + this.getRandomFloat(-strength, strength);
            var rand_y = backUpPos.y + this.getRandomFloat(-strength, strength);
            var moveTw = tween().to(0.01, {
              position: new Vec3(rand_x, rand_y, 1)
            });
            lstMoveTweens.push(moveTw);
          }

          var twShake = tween(node).sequence(...lstMoveTweens).call(() => {
            node.setPosition(backUpPos);
            node["tween_shake"] = null;
          }).start();
          node["tween_shake"] = twShake;
          return twShake;
        }

        static getRandomFloat(min, max) {
          return Math.random() * (max - min) + min;
        }

        static shuffleArray(a) {
          for (var i = a.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemIndex = a[randomIndex];
            a[randomIndex] = a[i];
            a[i] = itemIndex;
          }

          return a;
        }

        static clearArray(a) {
          return a.splice(0, a.length);
        }

        static cloneArray(a) {
          return [...a];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0ffcf7309afa8fcfc2fd8c89e43cac2b2966e3f.js.map