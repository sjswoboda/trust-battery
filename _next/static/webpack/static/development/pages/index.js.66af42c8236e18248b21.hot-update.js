webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LevelThermometer.js":
/*!****************************************!*\
  !*** ./components/LevelThermometer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/swati/src/snowflake/components/LevelThermometer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10
};
var height = 150;
var width = 550;

var LevelThermometer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LevelThermometer, _React$Component);

  function LevelThermometer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LevelThermometer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LevelThermometer).call(this, props));
    _this.pointScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]().domain([0, 135]).rangeRound([0, width - margins.left - margins.right]);
    _this.topAxisFn = d3__WEBPACK_IMPORTED_MODULE_7__["axisTop"]().scale(_this.pointScale).tickValues(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"])).tickFormat(function (points) {
      return _constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"][points];
    });
    _this.bottomAxisFn = d3__WEBPACK_IMPORTED_MODULE_7__["axisBottom"]().scale(_this.pointScale).tickValues(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"])).tickFormat(function (points) {
      return points + '%';
    });
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LevelThermometer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      d3__WEBPACK_IMPORTED_MODULE_7__["select"](this.topAxis).call(this.topAxisFn).selectAll('text').attr("y", 0).attr("x", -25).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
      d3__WEBPACK_IMPORTED_MODULE_7__["select"](this.bottomAxis).call(this.bottomAxisFn).selectAll('text').attr("y", 0).attr("x", 10).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
    }
  }, {
    key: "rightRoundedRect",
    value: function rightRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + y + "h" + (width - radius) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + "v" + (height - 2 * radius) + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius + "h" + (radius - width) + "z";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var categoryPoints = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryPointsFromMilestoneMap"])(this.props.milestoneByTrack);
      var lastCategoryIndex = 0;
      categoryPoints.forEach(function (categoryPoint, i) {
        if (categoryPoint.points) lastCategoryIndex = i;
      });
      var cumulativePoints = 0;
      return __jsx("figure", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2708482886",
        __self: this
      }, "figure.jsx-2708482886{margin:0 0 0 -10px;}svg.jsx-2708482886{width:".concat(width, "px;height:").concat(height + 10, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRm9CLEFBR2dDLEFBR2tCLG1CQUZ2QyxrQkFHd0Msc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgcG9pbnRzVG9MZXZlbHMsIGNhdGVnb3J5UG9pbnRzRnJvbU1pbGVzdG9uZU1hcCwgY2F0ZWdvcnlDb2xvclNjYWxlLCBjYXRlZ29yeUlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgbWFyZ2lucyA9IHtcbiAgdG9wOiAzMCxcbiAgcmlnaHQ6IDIwLFxuICBib3R0b206IDMwLFxuICBsZWZ0OiAxMFxufVxuY29uc3QgaGVpZ2h0ID0gMTUwXG5jb25zdCB3aWR0aCA9IDU1MFxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG59XG5cbmNsYXNzIExldmVsVGhlcm1vbWV0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcG9pbnRTY2FsZTogYW55XG4gIHRvcEF4aXNGbjogYW55XG4gIGJvdHRvbUF4aXNGbjogYW55XG4gIHRvcEF4aXM6ICpcbiAgYm90dG9tQXhpczogKlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnBvaW50U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxMzVdKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoIC0gbWFyZ2lucy5sZWZ0IC0gbWFyZ2lucy5yaWdodF0pO1xuXG4gICAgdGhpcy50b3BBeGlzRm4gPSBkMy5heGlzVG9wKClcbiAgICAgIC5zY2FsZSh0aGlzLnBvaW50U2NhbGUpXG4gICAgICAudGlja1ZhbHVlcyhPYmplY3Qua2V5cyhwb2ludHNUb0xldmVscykpXG4gICAgICAudGlja0Zvcm1hdChwb2ludHMgPT4gcG9pbnRzVG9MZXZlbHNbcG9pbnRzXSlcblxuICAgIHRoaXMuYm90dG9tQXhpc0ZuID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAuc2NhbGUodGhpcy5wb2ludFNjYWxlKVxuICAgICAgLnRpY2tWYWx1ZXMoT2JqZWN0LmtleXMocG9pbnRzVG9MZXZlbHMpKVxuICAgICAgLnRpY2tGb3JtYXQocG9pbnRzID0+IHBvaW50cyArICclJylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGQzLnNlbGVjdCh0aGlzLnRvcEF4aXMpLmNhbGwodGhpcy50b3BBeGlzRm4pXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIC0yNSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgIGQzLnNlbGVjdCh0aGlzLmJvdHRvbUF4aXMpLmNhbGwodGhpcy5ib3R0b21BeGlzRm4pXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIDEwKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gIH1cblxuICByaWdodFJvdW5kZWRSZWN0KHg6ICosIHk6ICosIHdpZHRoOiAqLCBoZWlnaHQ6ICosIHJhZGl1czogKikge1xuICAgIHJldHVybiBcIk1cIiArIHggKyBcIixcIiArIHlcbiAgICAgICAgICsgXCJoXCIgKyAod2lkdGggLSByYWRpdXMpXG4gICAgICAgICArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDAgMSBcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzXG4gICAgICAgICArIFwidlwiICsgKGhlaWdodCAtIDIgKiByYWRpdXMpXG4gICAgICAgICArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDAgMSBcIiArIC1yYWRpdXMgKyBcIixcIiArIHJhZGl1c1xuICAgICAgICAgKyBcImhcIiArIChyYWRpdXMgLSB3aWR0aClcbiAgICAgICAgICsgXCJ6XCI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjYXRlZ29yeVBvaW50cyA9IGNhdGVnb3J5UG9pbnRzRnJvbU1pbGVzdG9uZU1hcCh0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2spXG4gICAgbGV0IGxhc3RDYXRlZ29yeUluZGV4ID0gMFxuICAgIGNhdGVnb3J5UG9pbnRzLmZvckVhY2goKGNhdGVnb3J5UG9pbnQsIGkpID0+IHtcbiAgICAgIGlmIChjYXRlZ29yeVBvaW50LnBvaW50cykgbGFzdENhdGVnb3J5SW5kZXggPSBpXG4gICAgfSlcbiAgICBsZXQgY3VtdWxhdGl2ZVBvaW50cyA9IDBcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0xMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0ICsgMTB9cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdmc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2lucy5sZWZ0fSwke21hcmdpbnMudG9wfSlgfT5cbiAgICAgICAgICAgIHtjYXRlZ29yeVBvaW50cy5tYXAoKGNhdGVnb3J5UG9pbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMucG9pbnRTY2FsZShjdW11bGF0aXZlUG9pbnRzKVxuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucG9pbnRTY2FsZShjdW11bGF0aXZlUG9pbnRzICsgY2F0ZWdvcnlQb2ludC5wb2ludHMpIC0geFxuICAgICAgICAgICAgICBjdW11bGF0aXZlUG9pbnRzICs9IGNhdGVnb3J5UG9pbnQucG9pbnRzXG4gICAgICAgICAgICAgIHJldHVybiAoaSAhPSBsYXN0Q2F0ZWdvcnlJbmRleCA/XG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgIHg9e3h9XG4gICAgICAgICAgICAgICAgICAgIHk9ezB9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgLSBtYXJnaW5zLnRvcCAtIG1hcmdpbnMuYm90dG9tfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6IGNhdGVnb3J5Q29sb3JTY2FsZShjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWQpLCBib3JkZXJSaWdodDogXCIxcHggc29saWQgIzAwMFwifX1cbiAgICAgICAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkfVxuICAgICAgICAgICAgICAgICAgICBkPXt0aGlzLnJpZ2h0Um91bmRlZFJlY3QoeCwgMCwgd2lkdGgsIGhlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b20sIDMpfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6IGNhdGVnb3J5Q29sb3JTY2FsZShjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWQpfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZyByZWY9e3JlZiA9PiB0aGlzLnRvcEF4aXMgPSByZWZ9IGNsYXNzTmFtZT1cInRvcC1heGlzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgLTIpYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGcgcmVmPXtyZWYgPT4gdGhpcy5ib3R0b21BeGlzID0gcmVmfSBjbGFzc05hbWU9XCJib3R0b20tYXhpc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSBtYXJnaW5zLnRvcCAtIG1hcmdpbnMuYm90dG9tICsgMX0pYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV2ZWxUaGVybW9tZXRlclxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/LevelThermometer.js */")), __jsx("svg", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(margins.left, ",").concat(margins.top, ")"),
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, categoryPoints.map(function (categoryPoint, i) {
        var x = _this2.pointScale(cumulativePoints);

        var width = _this2.pointScale(cumulativePoints + categoryPoint.points) - x;
        cumulativePoints += categoryPoint.points;
        return i != lastCategoryIndex ? __jsx("rect", {
          key: categoryPoint.categoryId,
          x: x,
          y: 0,
          width: width,
          height: height - margins.top - margins.bottom,
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(categoryPoint.categoryId),
            borderRight: "1px solid #000"
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }) : __jsx("path", {
          key: categoryPoint.categoryId,
          d: _this2.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3),
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(categoryPoint.categoryId)
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        });
      }), __jsx("g", {
        ref: function ref(_ref) {
          return _this2.topAxis = _ref;
        },
        transform: "translate(0, -2)",
        className: "jsx-2708482886" + " " + "top-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx("g", {
        ref: function ref(_ref2) {
          return _this2.bottomAxis = _ref2;
        },
        transform: "translate(0,".concat(height - margins.top - margins.bottom + 1, ")"),
        className: "jsx-2708482886" + " " + "bottom-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }))));
    }
  }]);

  return LevelThermometer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LevelThermometer);

/***/ })

})
//# sourceMappingURL=index.js.66af42c8236e18248b21.hot-update.js.map