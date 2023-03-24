System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _cc, VDScrollView, VDScrollDirection, VDTableCell, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, cc, VDTableViewFillOrder, VDTableViewInteractionMode, ccclass, property, VDTableView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVDScrollView(extras) {
    _reporterNs.report("VDScrollView", "./VDScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScrollViewDelegate(extras) {
    _reporterNs.report("VDScrollViewDelegate", "./VDScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDScrollDirection(extras) {
    _reporterNs.report("VDScrollDirection", "./VDScrollView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVDTableCell(extras) {
    _reporterNs.report("VDTableCell", "./VDTableCell", _context.meta, extras);
  }

  _export({
    VDTableViewFillOrder: void 0,
    VDTableViewInteractionMode: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc2) {
      _cclegacy = _cc2.cclegacy;
      __checkObsolete__ = _cc2.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc2.__checkObsoleteInNamespace__;
      _cc = _cc2;
    }, function (_unresolved_2) {
      VDScrollView = _unresolved_2.default;
      VDScrollDirection = _unresolved_2.VDScrollDirection;
    }, function (_unresolved_3) {
      VDTableCell = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abdcfT1u0NGmpmO302vXQC7", "VDTableView", undefined);

      cc = __checkObsoleteInNamespace__(_cc);

      (function (VDTableViewFillOrder) {
        VDTableViewFillOrder[VDTableViewFillOrder["LEFT_TO_RIGHT__TOP_TO_BOTTOM"] = 0] = "LEFT_TO_RIGHT__TOP_TO_BOTTOM";
        VDTableViewFillOrder[VDTableViewFillOrder["TOP_TO_BOTTOM__LEFT_TO_RIGHT"] = 1] = "TOP_TO_BOTTOM__LEFT_TO_RIGHT";
      })(VDTableViewFillOrder || _export("VDTableViewFillOrder", VDTableViewFillOrder = {}));

      (function (VDTableViewInteractionMode) {
        VDTableViewInteractionMode[VDTableViewInteractionMode["NONE"] = 0] = "NONE";
        VDTableViewInteractionMode[VDTableViewInteractionMode["CLICK"] = 1] = "CLICK";
        VDTableViewInteractionMode[VDTableViewInteractionMode["SINGLE_SELECTION"] = 2] = "SINGLE_SELECTION";
        VDTableViewInteractionMode[VDTableViewInteractionMode["MULTIPLE_SELECTION"] = 3] = "MULTIPLE_SELECTION";
      })(VDTableViewInteractionMode || _export("VDTableViewInteractionMode", VDTableViewInteractionMode = {}));

      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", VDTableView = (_dec = property({
        type: cc.Enum(VDTableViewFillOrder)
      }), _dec2 = property({
        type: cc.Enum(VDTableViewInteractionMode)
      }), _dec3 = property(cc.CCBoolean), _dec4 = property(cc.CCInteger), _dec5 = property(cc.Prefab), ccclass(_class = (_class2 = (_class3 = class VDTableView extends (_crd && VDScrollView === void 0 ? (_reportPossibleCrUseOfVDScrollView({
        error: Error()
      }), VDScrollView) : VDScrollView) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fillOrder", _descriptor, this);

          _initializerDefineProperty(this, "interactionMode", _descriptor2, this);

          _initializerDefineProperty(this, "cellPagingEnabled", _descriptor3, this);

          _initializerDefineProperty(this, "numberOfPagingCell", _descriptor4, this);

          _initializerDefineProperty(this, "tableCell", _descriptor5, this);

          this._cellSize = cc.Size.ZERO;
          this._cellAnchor = cc.v2(0.5, 0.5);
          this._indices = new Set();
          this._cellsUsed = [];
          this._cellsFreed = null;
          this._rows = 0;
          this._cols = 0;
          this._realContentSize = cc.Size.ZERO;
          this._lastestCellCount = 0;
          this._selectedIndices = [];
          this._tableViewDelegate = null;
          this._dataSource = null;
          this._isUsedCellsDirty = true;
          this._highlightedIndex = -1;
          this._touchingIndex = -1;
          this._highlightedTouchObj = null;
          this._startIdx = 0;
          this._endIdx = 0;
          this._mouseWheelEventElapsedTime = 0;
          this._stopMouseWheel = false;
        }

        get cellSize() {
          return this._cellSize;
        }

        set cellSize(value) {
          this._cellSize = value;
        }

        get rows() {
          return this._rows;
        }

        get cols() {
          return this._cols;
        }

        get selectedIndex() {
          if (this._selectedIndices.length > 0) {
            return this._selectedIndices[this._selectedIndices.length - 1];
          } else {
            return -1;
          }
        }

        get selectedIndices() {
          return this._selectedIndices;
        }

        get delegate() {
          return this._tableViewDelegate;
        }

        set delegate(value) {
          this._tableViewDelegate = value;
        }

        get dataSource() {
          return this._dataSource;
        }

        set dataSource(value) {
          this._dataSource = value;
        }

        // LIFE-CYCLE CALLBACKS:
        cellCacheKey() {
          return this.tableCell.data.name;
        }

        onLoad() {
          super.onLoad();

          if (!this.tableCell) {
            throw "TableView must have a cell prefab reference";
          }

          var cacheKey = this.cellCacheKey();
          var cache = VDTableView._cellPoolCache[cacheKey];

          if (!cache) {
            cache = VDTableView._cellPoolCache[cacheKey] = new cc.NodePool(cacheKey + "<TableCellPool>");
          }

          this._cellsFreed = cache;

          if (this._dataSource && this._dataSource.tableCellSize) {
            this._cellSize = this._dataSource.tableCellSize(this);
          } else {
            this._cellSize = cc.size(this.tableCell.data.getComponent(cc.UITransform).width * this.tableCell.data.getScale().x, this.tableCell.data.getComponent(cc.UITransform).height * this.tableCell.data.getScale().y);
          }

          if (this._dataSource && this._dataSource.tableCellAnchor) {
            this._cellAnchor = this._dataSource.tableCellAnchor(this);
          } else {
            this._cellAnchor = this.tableCell.data.getComponent(cc.UITransform).anchorPoint;
          }

          this.content.getComponent(cc.UITransform).anchorX = 0;
          this.content.getComponent(cc.UITransform).anchorY = 1;
          this.zoomScaleEnabled = false;

          if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).BOTH) {
            this.direction = (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
              error: Error()
            }), VDScrollDirection) : VDScrollDirection).VERTICAL;
          }
        }

        onEnable() {
          super.onEnable();

          if (this.interactionMode != VDTableViewInteractionMode.NONE) {
            this.content.on(cc.Node.EventType.TOUCH_START, this._onTableTouchBegan, this);
            this.content.on(cc.Node.EventType.TOUCH_MOVE, this._onTableTouchMove, this);
            this.content.on(cc.Node.EventType.TOUCH_END, this._onTableTouchEnded, this);
            this.content.on(cc.Node.EventType.TOUCH_CANCEL, this._onTableTouchCancelled, this);
            this.content.on(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          }

          this.node.on('size-changed', this._onViewSizeChanged, this);

          this._updateContentSize();
        }

        onDisable() {
          super.onDisable();

          if (this.interactionMode != VDTableViewInteractionMode.NONE) {
            this.content.off(cc.Node.EventType.TOUCH_START, this._onTableTouchBegan, this);
            this.content.off(cc.Node.EventType.TOUCH_MOVE, this._onTableTouchMove, this);
            this.content.off(cc.Node.EventType.TOUCH_END, this._onTableTouchEnded, this);
            this.content.off(cc.Node.EventType.TOUCH_CANCEL, this._onTableTouchCancelled, this);
            this.content.off(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this, true);
          }

          this.node.off('size-changed', this._onViewSizeChanged, this);
        }

        _onShowGame() {
          super._onShowGame();

          this._handleCancelLogicForTableInteraction(null);
        }

        start() {
          var cellCount = this._dataSource.numberOfCellsInTableView(this);

          if (this._lastestCellCount != cellCount) {
            this.reloadData();
          } else if (!this.scrollToLeftTop(false)) {
            this.scrollViewDidScroll(this);
          }
        }

        _onMouseWheel(event, captureListeners) {
          if (!this.enabledInHierarchy) {
            return;
          }

          if (this._hasNestedViewGroup(event, captureListeners)) {
            return;
          }

          var deltaMove = new cc.Vec2();
          var wheelPrecision = -0.1;
          var scrollY = event.getScrollY(); // cc.log(`_onMouseWheel: y = ${scrollY}`);

          if (!this._stopMouseWheel && Math.abs(scrollY * wheelPrecision) < cc.EPSILON) {
            return;
          }

          if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).VERTICAL) {
            deltaMove.set(0, scrollY * wheelPrecision);
          } else if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).HORIZONTAL) {
            deltaMove.set(scrollY * wheelPrecision, 0);
          }

          var oldPosition = new cc.Vec2(this.content.position.x, this.content.position.y);
          var newPosition = new cc.Vec2(this.content.position.x + deltaMove.x, this.content.position.y + deltaMove.y); // cc.log(`[Tableview] _onMouseWheel: deltaY = ${scrollY} - ${oldPosition} - ${newPosition}`);

          if (this.setContentPosition(newPosition)) {
            if (!this._dragging) {
              this._dragging = true;
              this._dragBeganPosition = oldPosition;

              if (this._delegate && this._delegate.scrollViewWillBeginDragging) {
                this._delegate.scrollViewWillBeginDragging(this);
              }
            }
          }

          this._gatherTouchMove(deltaMove);

          this._mouseWheelEventElapsedTime = 0;

          if (!this._stopMouseWheel) {
            this._clearAutoScrollData();

            this.schedule(this._checkMouseWheel, 1.0 / 60, NaN, 0);
            this._stopMouseWheel = true;
          }

          this._stopPropagationIfTargetIsMe(event);
        }

        _checkMouseWheel(dt) {
          var maxElapsedTime = 0.1;
          this._mouseWheelEventElapsedTime += dt; // mouse wheel event is ended

          if (this._mouseWheelEventElapsedTime > maxElapsedTime) {
            // cc.log(`[Tableview] _onMouseWheel: stopMouseWheel`);
            this.unschedule(this._checkMouseWheel);
            this._stopMouseWheel = false;
          }
        }

        _onTableTouchBegan(event) {
          // cc.log(`[TableView] _onTableTouchBegan ${event.touch?.getLocation()} - ${event.touch?.getLocationInView()} - ${event.touch?.getUILocation()}`);
          if (!this.enabledInHierarchy) return;
          event.touch && this._handlePressLogicForTableInteraction(event.touch);
          this.touchEnabled && event.stopPropagation();
        }

        _onTableTouchMove(event) {
          // cc.log(`[TableView] _onTableTouchMove `);
          if (!this.enabledInHierarchy) return;
          event.touch && this._handleMoveLogicForTableInteraction(event.touch);
          this.touchEnabled && event.stopPropagation();
        }

        _onTableTouchEnded(event) {
          // cc.log(`[TableView] _onTableTouchEnded ${event.touch?.getLocation()} - ${event.touch?.getLocationInView()} - ${event.touch?.getUILocation()}`);
          if (!this.enabledInHierarchy) return;
          event.touch && this._handleReleaseLogicForTableInteraction(event.touch);
          this.touchEnabled && event.stopPropagation();
        }

        _onTableTouchCancelled(event) {
          // cc.log(`[TableView] _onTableTouchCancelled `);
          if (!this.enabledInHierarchy) return;
          event.touch && this._handleCancelLogicForTableInteraction(event.touch);
          this.touchEnabled && event.stopPropagation();
        } // protected _hasNestedViewGroup(event, captureListeners: any[]) {
        //     if (this.interactionMode == BGTTableViewInteractionMode.CELL_DRAGGING) {
        //         return false;
        //     } else {
        //         return super._hasNestedViewGroup(event, captureListeners);
        //     }
        // }


        clearSelection() {
          this._selectedIndices.splice(0, this._selectedIndices.length);
        }

        _handlePressLogicForTableInteraction(touch) {
          if (this.interactionMode == VDTableViewInteractionMode.NONE) {
            return;
          }

          if (this._highlightedTouchObj == null && this._highlightedIndex < 0) {
            var localTouch3D = this.content.getComponent(cc.UITransform).convertToNodeSpaceAR(cc.v3(touch.getUILocation().x, touch.getUILocation().y, 0));
            var localTouch = cc.v2(localTouch3D.x, -localTouch3D.y); // localTouch.y = this.content.getComponent(cc.UITransform)!.height - localTouch.y;

            var index = this._indexFromOffset(localTouch);

            if (index >= 0) {
              var _cell = this.cellAtIndex(index);

              if (_cell) {
                var shouldHighlight = this._tableViewDelegate && this._tableViewDelegate.tableCellShouldHighlight ? this._tableViewDelegate.tableCellShouldHighlight(this, index) : true;

                if (shouldHighlight) {
                  this._setHighlightedForCell(_cell, true);
                }
              }

              this._highlightedIndex = index;
              this._touchingIndex = index;
              this._highlightedTouchObj = touch;
            }
          } else {
            this._highlightedIndex = -1;
            this._highlightedTouchObj = null;
          }
        }

        _handleMoveLogicForTableInteraction(touch) {
          if (this.interactionMode == VDTableViewInteractionMode.NONE) {
            return;
          }

          var contenPos = cc.v2(this.content.position.x, this.content.position.y);
          var deltaMove = contenPos.subtract(this._beginContentPosition);

          if (deltaMove.length() > 8) {
            if (this._highlightedIndex >= 0) {
              var index = this._highlightedIndex;

              var _cell2 = this.cellAtIndex(index);

              if (_cell2) {
                this._setHighlightedForCell(_cell2, false);
              }

              this._highlightedIndex = -1;
            }

            this._touchingIndex = -1;
          } else if (this._highlightedTouchObj == touch) {
            if (this._highlightedIndex >= 0) {
              var _cell3 = this.cellAtIndex(this._highlightedIndex);

              if (_cell3) {
                if (this.node.getComponent(cc.UITransform).getBoundingBoxToWorld().contains(touch.getLocation())) {
                  var localTouch3D = this.content.getComponent(cc.UITransform).convertToNodeSpaceAR(cc.v3(touch.getUILocation().x, touch.getUILocation().y, 0));
                  var localTouch = cc.v2(localTouch3D.x, -localTouch3D.y); // localTouch.y = this.content.getComponent(cc.UITransform)!.height - localTouch.y;

                  var tIndex = this._indexFromOffset(localTouch);

                  if (tIndex != this._highlightedIndex) {
                    this._setHighlightedForCell(_cell3, false);

                    this._highlightedIndex = -1;
                  } else {
                    var shouldHighlight = this._tableViewDelegate && this._tableViewDelegate.tableCellShouldHighlight ? this._tableViewDelegate.tableCellShouldHighlight(this, this._highlightedIndex) : true;

                    if (shouldHighlight) {
                      this._setHighlightedForCell(_cell3, true);
                    }
                  }
                } else {
                  this._setHighlightedForCell(_cell3, false);

                  this._highlightedIndex = -1;
                }
              }
            } else if (this._touchingIndex >= 0) {
              var _cell4 = this.cellAtIndex(this._touchingIndex);

              if (_cell4) {
                if (this.node.getComponent(cc.UITransform).getBoundingBoxToWorld().contains(touch.getUILocation())) {
                  var _localTouch3D = this.content.getComponent(cc.UITransform).convertToNodeSpaceAR(cc.v3(touch.getUILocation().x, touch.getUILocation().y, 0));

                  var _localTouch = cc.v2(_localTouch3D.x, -_localTouch3D.y); // localTouch.y = this.content.getComponent(cc.UITransform)!.height - localTouch.y;


                  var _tIndex = this._indexFromOffset(_localTouch);

                  if (_tIndex == this._touchingIndex) {
                    var _shouldHighlight = this._tableViewDelegate && this._tableViewDelegate.tableCellShouldHighlight ? this._tableViewDelegate.tableCellShouldHighlight(this, _tIndex) : true;

                    if (_shouldHighlight) {
                      this._highlightedIndex = this._touchingIndex;

                      this._setHighlightedForCell(_cell4, true);
                    }
                  }
                }
              }
            }
          }
        }

        _handleReleaseLogicForTableInteraction(touch) {
          if (this.interactionMode == VDTableViewInteractionMode.NONE) {
            return;
          }

          if (this._highlightedTouchObj == touch) {
            if (this._highlightedIndex >= 0) {
              var _cell5 = this.cellAtIndex(this._highlightedIndex);

              if (_cell5) {
                this._setHighlightedForCell(_cell5, false);
              }

              this._highlightedIndex = -1;
            }

            this._touchingIndex = -1;
            var delta = touch.getLocation().clone().subtract(touch.getStartLocation());

            if (delta.length() <= 8) {
              this._onContentClick(touch);
            }

            this._highlightedTouchObj = null;
          }
        }

        _handleCancelLogicForTableInteraction(touch) {
          if (this.interactionMode == VDTableViewInteractionMode.NONE) {
            return;
          }

          if (touch == null || this._highlightedTouchObj == touch) {
            if (this._highlightedIndex >= 0) {
              var _cell6 = this.cellAtIndex(this._highlightedIndex);

              if (_cell6) {
                this._setHighlightedForCell(_cell6, false);
              }

              this._highlightedIndex = -1;
            }

            this._touchingIndex = -1;
            this._highlightedTouchObj = null;
          }
        }

        _setSelectedForCell(cell, selected, forceSelected) {
          if (forceSelected === void 0) {
            forceSelected = false;
          }

          var cellComp = cell.getComponent(_crd && VDTableCell === void 0 ? (_reportPossibleCrUseOfVDTableCell({
            error: Error()
          }), VDTableCell) : VDTableCell);

          if (cellComp && (forceSelected || cellComp.selected != selected)) {
            cellComp.setSelected(selected);
          }
        }

        _setHighlightedForCell(cell, highlighted, forceHighlighted) {
          if (forceHighlighted === void 0) {
            forceHighlighted = false;
          }

          var cellComp = cell.getComponent(_crd && VDTableCell === void 0 ? (_reportPossibleCrUseOfVDTableCell({
            error: Error()
          }), VDTableCell) : VDTableCell);

          if (cellComp && (forceHighlighted || cellComp.highlighted != highlighted)) {
            cellComp.setHighlighted(highlighted);
          }
        }

        selectCellAtIndex(index) {
          if (index < 0 || index >= this._lastestCellCount) return;
          if (this.interactionMode == VDTableViewInteractionMode.NONE || this.interactionMode == VDTableViewInteractionMode.CLICK || this._selectedIndices.indexOf(index) >= 0) return;

          if (!this._tableViewDelegate || !this._tableViewDelegate.tableCellShouldSelect || this._tableViewDelegate.tableCellShouldSelect(this, index)) {
            if (this.interactionMode == VDTableViewInteractionMode.SINGLE_SELECTION) {
              if (this.selectedIndex != -1) {
                this.deselectCellAtIndex(this.selectedIndex);
              }
            }

            this._selectedIndices.push(index);

            var _cell7 = this.cellAtIndex(index);

            if (_cell7) {
              //cell is showing
              this._setSelectedForCell(_cell7, true);
            }

            if (this._tableViewDelegate && this._tableViewDelegate.tableCellDidSelected) {
              this._tableViewDelegate.tableCellDidSelected(this, index);
            }
          }
        }

        deselectCellAtIndex(index) {
          if (this.interactionMode == VDTableViewInteractionMode.NONE || this.interactionMode == VDTableViewInteractionMode.CLICK) return;

          var localIndex = this._selectedIndices.indexOf(index);

          if (localIndex < 0) return;

          this._selectedIndices.splice(localIndex, 1);

          if (this._tableViewDelegate && this._tableViewDelegate.tableCellWillDeselected) {
            this._tableViewDelegate.tableCellWillDeselected(this, index);
          }

          var cell = this.cellAtIndex(index);

          if (cell) {
            //cell is showing
            this._setSelectedForCell(cell, false);
          }
        }

        _onContentClick(touch) {
          // cc.log(`_onContentClick `);
          if (this.interactionMode != VDTableViewInteractionMode.NONE) {
            var localTouch3D = this.content.getComponent(cc.UITransform).convertToNodeSpaceAR(cc.v3(touch.getUILocation().x, touch.getUILocation().y, 0));
            var localTouch = cc.v2(localTouch3D.x, -localTouch3D.y);

            var index = this._indexFromOffset(localTouch);

            var _cell8 = this.cellAtIndex(index);

            if (_cell8) {
              if (this.interactionMode == VDTableViewInteractionMode.CLICK) {
                if (this._tableViewDelegate && this._tableViewDelegate.tableCellClicked) {
                  this._tableViewDelegate.tableCellClicked(this, _cell8, index);
                }
              } else if (this.interactionMode == VDTableViewInteractionMode.SINGLE_SELECTION) {
                if (this._selectedIndices.length == 0) {
                  if (!this._tableViewDelegate || !this._tableViewDelegate.tableCellShouldSelect || this._tableViewDelegate.tableCellShouldSelect(this, index)) {
                    this._selectedIndices.push(index);

                    this._setSelectedForCell(_cell8, true);

                    if (this._tableViewDelegate && this._tableViewDelegate.tableCellDidSelected) {
                      this._tableViewDelegate.tableCellDidSelected(this, index);
                    }
                  }
                } else {
                  if (this._selectedIndices.length == 1) {
                    var curIndex = this._selectedIndices[0];

                    if (curIndex != index) {
                      if (!this._tableViewDelegate || !this._tableViewDelegate.tableCellShouldSelect || this._tableViewDelegate.tableCellShouldSelect(this, index)) {
                        this._selectedIndices.pop();

                        if (this._tableViewDelegate && this._tableViewDelegate.tableCellWillDeselected) {
                          this._tableViewDelegate.tableCellWillDeselected(this, curIndex);
                        }

                        var curCell = this.cellAtIndex(curIndex);

                        if (curCell) {
                          this._setSelectedForCell(curCell, false);
                        }

                        this._selectedIndices.push(index);

                        this._setSelectedForCell(_cell8, true);

                        if (this._tableViewDelegate && this._tableViewDelegate.tableCellDidSelected) {
                          this._tableViewDelegate.tableCellDidSelected(this, index);
                        }
                      }
                    } else {
                      this._tableViewDelegate && this._tableViewDelegate.tableClickOnSelectedCell && this._tableViewDelegate.tableClickOnSelectedCell(this, index);
                    }
                  } else {
                    throw "table view selection logic error";
                  }
                }
              } else if (this.interactionMode == VDTableViewInteractionMode.MULTIPLE_SELECTION) {
                if (this._selectedIndices.length == 0) {
                  if (!this._tableViewDelegate || !this._tableViewDelegate.tableCellShouldSelect || this._tableViewDelegate.tableCellShouldSelect(this, index)) {
                    this._selectedIndices.push(index);

                    this._setSelectedForCell(_cell8, true);

                    if (this._tableViewDelegate && this._tableViewDelegate.tableCellDidSelected) {
                      this._tableViewDelegate.tableCellDidSelected(this, index);
                    }
                  }
                } else {
                  var localIndex = this._selectedIndices.indexOf(index);

                  if (localIndex >= 0) {
                    this._selectedIndices.splice(localIndex, 1);

                    if (this._tableViewDelegate && this._tableViewDelegate.tableCellWillDeselected) {
                      this._tableViewDelegate.tableCellWillDeselected(this, index);
                    }

                    this._setSelectedForCell(_cell8, false);
                  } else {
                    if (!this._tableViewDelegate || !this._tableViewDelegate.tableCellShouldSelect || this._tableViewDelegate.tableCellShouldSelect(this, index)) {
                      this._selectedIndices.push(index);

                      this._setSelectedForCell(_cell8, true);

                      if (this._tableViewDelegate && this._tableViewDelegate.tableCellDidSelected) {
                        this._tableViewDelegate.tableCellDidSelected(this, index);
                      }
                    }
                  }
                }
              }
            }
          }
        }

        getStartIndex() {
          var startIdx = this._indexFromOffset(cc.v2(Math.abs(this.offsetMinX), Math.abs(this.offsetMaxY)));

          return startIdx;
        }

        getEndIndex() {
          var dX = 0;
          var dY = 0;

          if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).VERTICAL) {
            dX = this._cellSize.width - 0.1;
          } else if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).HORIZONTAL) {
            dY = this._cellSize.height - 0.1;
          }

          var endIdx = this._indexFromOffset(cc.v2(Math.abs(this.offsetMinX) + this.node.getComponent(cc.UITransform).width - dX, Math.abs(this.offsetMaxY) + this.node.getComponent(cc.UITransform).height - dY));

          if (endIdx < 0 || endIdx > this._lastestCellCount - 1) {
            endIdx = this._lastestCellCount - 1;
          }

          return endIdx;
        }

        scrollToIndex(index, animated) {
          if (animated === void 0) {
            animated = true;
          }

          var offset = this._offsetFromIndex(index);

          var x = -this.content.getComponent(cc.UITransform).anchorX * this.content.getComponent(cc.UITransform).width + offset.x + this.node.getComponent(cc.UITransform).anchorX * this.node.getComponent(cc.UITransform).width;
          var y = (1.0 - this.content.getComponent(cc.UITransform).anchorY) * this.content.getComponent(cc.UITransform).height - offset.y - (1.0 - this.node.getComponent(cc.UITransform).anchorY) * this.node.getComponent(cc.UITransform).height;
          this.scrollTo(cc.v2(x, y), animated);
        }

        _updateCellCount() {
          this._lastestCellCount = this._dataSource.numberOfCellsInTableView(this);
          return this._lastestCellCount;
        }

        scrollViewDidScroll(scrollView) {
          var countOfItems = this._lastestCellCount;

          if (countOfItems <= 0) {
            return;
          }

          this._startIdx = this.getStartIndex();
          this._endIdx = this.getEndIndex();

          if (this._isUsedCellsDirty) {
            this._isUsedCellsDirty = false;

            this._cellsUsed.sort(function (a, b) {
              return parseInt(a.name) - parseInt(b.name);
            });
          }

          var maxIdx = countOfItems - 1;

          if (this._cellsUsed.length > 0) {
            var _cell9 = this._cellsUsed[0];

            var _idx = parseInt(_cell9.name);

            while (_idx < this._startIdx) {
              this._moveCellOutOfSight(_cell9, 0);

              if (this._cellsUsed.length > 0) {
                _cell9 = this._cellsUsed[0];
                _idx = parseInt(_cell9.name);
              } else {
                break;
              }
            }
          }

          if (this._cellsUsed.length > 0) {
            var _cell10 = this._cellsUsed[this._cellsUsed.length - 1];

            var _idx2 = parseInt(_cell10.name);

            while (_idx2 <= maxIdx && _idx2 > this._endIdx) {
              this._moveCellOutOfSight(_cell10, this._cellsUsed.length - 1);

              if (this._cellsUsed.length > 0) {
                _cell10 = this._cellsUsed[this._cellsUsed.length - 1];
                _idx2 = parseInt(_cell10.name);
              } else {
                break;
              }
            }
          }

          for (var i = this._startIdx; i <= this._endIdx; i++) {
            if (this._indices.has(i)) {
              continue;
            }

            this.updateCellAtIndex(i);
          }

          if (this._tableViewDelegate && this._tableViewDelegate.scrollViewDidScroll) {
            this._tableViewDelegate.scrollViewDidScroll(this);
          }
        }

        updateCellAtIndex(idx) {
          if (idx < 0 || idx >= this._lastestCellCount) {
            return;
          }

          var cell = this.cellAtIndex(idx);

          if (cell) {
            this._moveCellOutOfSight(cell);
          }

          if (idx >= this._startIdx && idx <= this._endIdx) {
            cell = this._dataSource.tableCellAtIndex(this, idx);

            this._setIndexForCell(idx, cell);

            this._addCellIfNecessary(cell);

            switch (this.interactionMode) {
              case VDTableViewInteractionMode.SINGLE_SELECTION:
              case VDTableViewInteractionMode.MULTIPLE_SELECTION:
                this._setSelectedForCell(cell, this._selectedIndices.indexOf(idx) >= 0, true);

                break;

              default:
                break;
            }
          }
        }

        _addCellIfNecessary(cell) {
          if (cell.parent != this.content) {
            this.content.addChild(cell);
          }

          this._cellsUsed.push(cell);

          this._indices.add(parseInt(cell.name));

          this._isUsedCellsDirty = true;
        }

        cellAtIndex(idx) {
          if (this._indices.has(idx)) {
            for (var _cell11 of this._cellsUsed) {
              if (parseInt(_cell11.name) == idx) {
                return _cell11;
              }
            }
          }

          return null;
        }

        reloadData() {
          if (!this._isOnLoadCalled) {
            return;
          }

          for (var _cell12 of this._cellsUsed) {
            if (this._tableViewDelegate && this._tableViewDelegate.tableCellWillRecycle) {
              this._tableViewDelegate.tableCellWillRecycle(this, _cell12, parseInt(_cell12.name));
            }

            this._cellsFreed.put(_cell12);

            _cell12.name = "-1";

            if (_cell12.parent == this.content) {
              this.content.removeChild(_cell12);
            }
          }

          this._indices.clear();

          this._cellsUsed.splice(0, this._cellsUsed.length);

          this._isUsedCellsDirty = true;

          this._updateContentSize();

          this.scrollViewDidScroll(this);
        }

        dequeueCell() {
          var cell = null;

          if (this._cellsFreed.size() == 0) {
            cell = cc.instantiate(this.tableCell);
            cell.name = "-1";
          } else {
            cell = this._cellsFreed.get();
          }

          return cell;
        }

        _indexFromOffset(offset) {
          if (offset.x < 0 || offset.x > this._realContentSize.width || offset.y < 0 || offset.y > this._realContentSize.height) {
            return -1;
          }

          var index = -1;
          var cellNum = this._lastestCellCount;
          var maxIdx = cellNum - 1;
          var size = this._cellSize;

          if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).VERTICAL) {
            var idxX = Math.floor(offset.x / size.width);
            var idxY = Math.floor(offset.y / size.height);

            if (this.fillOrder == VDTableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM) {
              if (idxX >= this._cols) {
                return -1;
              }

              index = idxY * this._cols + idxX;
            } else {
              if (idxY >= this._rows) {
                return -1;
              }

              index = idxX * this._rows + idxY;
            }
          } else if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).HORIZONTAL) {
            var _idxX = Math.floor(offset.x / size.width);

            var _idxY = Math.floor(offset.y / size.height);

            if (this.fillOrder == VDTableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM) {
              if (_idxX >= this._cols) {
                return -1;
              }

              index = _idxY * this._cols + _idxX;
            } else {
              if (_idxY >= this._rows) {
                return -1;
              }

              index = _idxX * this._rows + _idxY;
            }
          }

          if (index >= 0 && index <= maxIdx) {
            return index;
          } else {
            return -1;
          }
        }

        _offsetFromIndex(index) {
          var offset = cc.v2(0, 0); // cc.Vec2.ZERO;

          var cellSize = this._cellSize;

          if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).VERTICAL) {
            var idxX = 0;
            var idxY = 0;

            if (this.fillOrder == VDTableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM) {
              idxY = Math.floor(index / this._cols);
              idxX = index % this._cols;
            } else {
              idxX = Math.floor(index / this._rows);
              idxY = index % this._rows;
            }

            offset = cc.v2(idxX * cellSize.width, idxY * cellSize.height);
          } else if (this.direction == (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
            error: Error()
          }), VDScrollDirection) : VDScrollDirection).HORIZONTAL) {
            var _idxX2 = 0;
            var _idxY2 = 0;

            if (this.fillOrder == VDTableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM) {
              _idxY2 = Math.floor(index / this._cols);
              _idxX2 = index % this._cols;
            } else {
              _idxX2 = Math.floor(index / this._rows);
              _idxY2 = index % this._rows;
            }

            offset = cc.v2(_idxX2 * cellSize.width, _idxY2 * cellSize.height);
          }

          return offset;
        }

        _moveCellOutOfSight(cell, idx) {
          if (idx === void 0) {
            idx = -1;
          }

          if (this._tableViewDelegate && this._tableViewDelegate.tableCellWillRecycle) {
            this._tableViewDelegate.tableCellWillRecycle(this, cell, parseInt(cell.name));
          }

          this._cellsFreed.put(cell);

          if (idx >= 0) {
            this._cellsUsed.splice(idx, 1);
          } else {
            var localIndex = this._cellsUsed.indexOf(cell);

            if (localIndex >= 0) {
              this._cellsUsed.splice(localIndex, 1);
            }
          }

          this._isUsedCellsDirty = true;

          this._indices.delete(parseInt(cell.name));

          cell.name = "-1";

          if (cell.parent == this.content) {
            this.content.removeChild(cell);
          }
        }

        _setIndexForCell(index, cell) {
          var offset = this._offsetFromIndex(index);

          var x = -this.content.getComponent(cc.UITransform).anchorX * this.content.getComponent(cc.UITransform).width + offset.x + this._cellAnchor.x * this._cellSize.width;

          var y = (1.0 - this.content.getComponent(cc.UITransform).anchorY) * this.content.getComponent(cc.UITransform).height - offset.y - (1.0 - this._cellAnchor.y) * this._cellSize.height;

          cell.setPosition(cc.v3(x, y, 0));
          cell.name = index.toString();
        }

        _onViewSizeChanged() {
          this._updateContentSize();

          if (this._isOnLoadCalled && this.enabledInHierarchy) {
            this.reloadData();
          }
        }

        _updateGridData() {
          this._updateCellCount();

          var cellsCount = this._lastestCellCount;

          if (cellsCount > 0) {
            switch (this.direction) {
              case (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
                error: Error()
              }), VDScrollDirection) : VDScrollDirection).HORIZONTAL:
                {
                  this._rows = Math.min(cellsCount, Math.floor(Math.max(this.node.getComponent(cc.UITransform).height, this._cellSize.height) / this._cellSize.height));
                  this._cols = Math.ceil(cellsCount / this._rows);
                  this._realContentSize = cc.size(this._cols * this._cellSize.width, this._rows * this._cellSize.height);
                }
                break;

              case (_crd && VDScrollDirection === void 0 ? (_reportPossibleCrUseOfVDScrollDirection({
                error: Error()
              }), VDScrollDirection) : VDScrollDirection).VERTICAL:
                {
                  this._cols = Math.min(cellsCount, Math.floor(Math.max(this.node.getComponent(cc.UITransform).width, this._cellSize.width) / this._cellSize.width));
                  this._rows = Math.ceil(cellsCount / this._cols);
                  this._realContentSize = cc.size(this._cols * this._cellSize.width, this._rows * this._cellSize.height);
                }
                break;

              default:
                break;
            }
          } else {
            this._realContentSize = cc.Size.ZERO;
            this._rows = this._cols = 0;
          }
        }

        _updateContentSize() {
          this._updateGridData(); // var e = this._realContentSize;


          var maxWidth = Math.max(this.node.getComponent(cc.UITransform).width, this._realContentSize.width);
          var maxHeight = Math.max(this.node.getComponent(cc.UITransform).height, this._realContentSize.height);
          this._realContentSize = cc.size(maxWidth, maxHeight);
          this.content.getComponent(cc.UITransform).contentSize.equals(this._realContentSize) || (this.content.getComponent(cc.UITransform).setContentSize(this._realContentSize), this.enabledInHierarchy || this._recalculateBoundary()); // cc.log(`contentSize: ${this.content.getComponent(cc.UITransform)!.contentSize}`);
          // cc.log(`_realContentSize: ${this._realContentSize}`);
          // cc.log(`node: ${this.node.getComponent(cc.UITransform)!.contentSize}`);
        }

      }, _class3._cellPoolCache = {}, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fillOrder", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VDTableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interactionMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VDTableViewInteractionMode.NONE;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cellPagingEnabled", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numberOfPagingCell", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tableCell", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a904f1d1afcf9f12190ff08c8d2559bffec9021.js.map