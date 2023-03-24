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
        static playAllVfx(rootNode, animName, loop = false) {
          let anim = rootNode.getComponentInChildren(cc.sp.Skeleton);
          anim == null ? void 0 : anim.setAnimation(0, animName, loop);
        }

        static getAnimationName(spine, trackIndex = 0) {
          let curAnimation = spine.getCurrent(trackIndex);
          if (!curAnimation) return null;
          return curAnimation.animation.name;
        }

        static playAnimation(spineNode, name, loop = false, completedCallback = null) {
          if (!spineNode) return false;
          let spine = spineNode.getComponent(cc.sp.Skeleton);
          if (!spine) return false;
          let entry = spine.setAnimation(0, name, loop);
          if (!entry) return false;
          spine.setTrackCompleteListener(entry, () => {
            completedCallback && completedCallback();
          });
          return true;
        }

        static setMix(spine, anim1, anim2, mixTime = 0.25) {
          spine == null ? void 0 : spine.setMix(anim1, anim2, mixTime);
          spine == null ? void 0 : spine.setMix(anim2, anim1, mixTime);
        }

        static transitionBackgroundWeb(fromBgrName, toBrgName) {
          if (cc.sys.isBrowser) {
            const fromBg = document.getElementById(fromBgrName);
            fromBg && (fromBg.className = fromBg.className.replace('visible', 'hidden'));
            const toBg = document.getElementById(toBrgName);
            toBg && (toBg.className = fromBg.className.replace('hidden', 'visible'));
          }
        }

        static formatTimestamp(ts, hasYear) {
          const d = new Date(ts);
          const h = VDUtils.addZero(d.getHours());
          const m = VDUtils.addZero(d.getMinutes());
          const s = VDUtils.addZero(d.getSeconds());
          const t = VDUtils.addZero(d.getDate()) + '/' + VDUtils.addZero(d.getMonth() + 1) + (hasYear ? '/' + d.getFullYear() : '') + ' ' + h + ':' + m + ':' + s;
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


        static animateScaleUp(target, scaleUpRate, duration = 0.2, toRate = 1, startRate = 1, finishedCallback = null) {
          let scale0 = {
            scale: new Vec3(startRate, startRate, startRate)
          };
          let scale1 = tween().to(duration, {
            scale: new Vec3(scaleUpRate, scaleUpRate, scaleUpRate)
          }, {
            easing: 'fade'
          });
          let scale2 = tween().to(duration, {
            scale: new Vec3(toRate, toRate, toRate)
          }, {
            easing: 'fade'
          });
          let func = tween().call(() => {
            finishedCallback && finishedCallback();
          });
          let animate = tween(target).set(scale0).then(scale1).then(scale2).then(func).start();
          return animate;
        }

        static equalsArray(a, b) {
          return a.length === b.length && a.every((v, i) => v === b[i]);
        }

        static shakeEffect(node, duration, strength) {
          if (!node) return;
          if (node["tween_shake"]) node["tween_shake"].stop(); // stop if on tween;

          let backUpPos = node.getPosition();
          let lstMoveTweens = [];
          let loopTime = Math.floor(duration / 0.01);

          for (let i = 0; i < loopTime; i++) {
            let rand_x = backUpPos.x + this.getRandomFloat(-strength, strength);
            let rand_y = backUpPos.y + this.getRandomFloat(-strength, strength);
            let moveTw = tween().to(0.01, {
              position: new Vec3(rand_x, rand_y, 1)
            });
            lstMoveTweens.push(moveTw);
          }

          let twShake = tween(node).sequence(...lstMoveTweens).call(() => {
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
          for (let i = a.length - 1; i >= 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const itemIndex = a[randomIndex];
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
//# sourceMappingURL=1f96c2b7c676b57cabd71fbebcf38ca7c9e73576.js.map