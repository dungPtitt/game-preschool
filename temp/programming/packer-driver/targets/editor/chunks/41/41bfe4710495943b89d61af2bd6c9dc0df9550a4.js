System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, VDBasePopup, VDTableView, dm_Item_TableView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, dm_TableView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDBasePopup(extras) {
    _reporterNs.report("VDBasePopup", "../../../../../vd-framework/ui/VDBasePopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDTableView(extras) {
    _reporterNs.report("VDTableView", "../../../../../vd-framework/ui/VDTableView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDTableViewDataSource(extras) {
    _reporterNs.report("VDTableViewDataSource", "../../../../../vd-framework/ui/VDTableView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdm_Item_TableView(extras) {
    _reporterNs.report("dm_Item_TableView", "./dm_Item_TableView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      VDBasePopup = _unresolved_2.default;
    }, function (_unresolved_3) {
      VDTableView = _unresolved_3.default;
    }, function (_unresolved_4) {
      dm_Item_TableView = _unresolved_4.dm_Item_TableView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98bb4jZlJNB+7HfDjtXAAQn", "dm_TableView", undefined);

      __checkObsolete__(['math']);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dm_TableView", dm_TableView = (_dec = ccclass('dm_TableView'), _dec2 = property(_crd && VDTableView === void 0 ? (_reportPossibleCrUseOfVDTableView({
        error: Error()
      }), VDTableView) : VDTableView), _dec(_class = (_class2 = class dm_TableView extends (_crd && VDBasePopup === void 0 ? (_reportPossibleCrUseOfVDBasePopup({
        error: Error()
      }), VDBasePopup) : VDBasePopup) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tableView", _descriptor, this);

          this._listItems = [];
          this.numItems = 10;
        }

        numberOfCellsInTableView(tableView) {
          return this._listItems.length;
        }

        tableCellAtIndex(tableView, idx) {
          let cell = tableView.dequeueCell();
          let comp = cell == null ? void 0 : cell.getComponent(_crd && dm_Item_TableView === void 0 ? (_reportPossibleCrUseOfdm_Item_TableView({
            error: Error()
          }), dm_Item_TableView) : dm_Item_TableView);
          comp == null ? void 0 : comp.setData(this._listItems[idx]);
          return cell;
        }

        onEnable() {
          this.tableView.dataSource = this;
          this.initListData();
          this.tableView && this.tableView.reloadData();
        }

        initListData() {
          this._listItems = [];

          for (let i = 0; i < this.numItems; i++) {
            this._listItems.push({
              id: i + 1,
              content: 'content ' + (i + 1)
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tableView", [_dec2], {
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
//# sourceMappingURL=41bfe4710495943b89d61af2bd6c9dc0df9550a4.js.map