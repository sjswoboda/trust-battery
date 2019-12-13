webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SnowflakeApp.js":
/*!************************************!*\
  !*** ./components/SnowflakeApp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TrackSelector */ "./components/TrackSelector.js");
/* harmony import */ var _components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NightingaleChart */ "./components/NightingaleChart.js");
/* harmony import */ var _components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/KeyboardListener */ "./components/KeyboardListener.js");
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Wordmark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Wordmark */ "./components/Wordmark.js");
/* harmony import */ var _components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LevelThermometer */ "./components/LevelThermometer.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);





var _jsxFileName = "/Users/swati/src/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;












var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].forEach(function (trackId, i) {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  return result;
};

var coerceMilestone = function coerceMilestone(value) {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;

    case 1:
      return 1;

    case 2:
      return 2;

    case 3:
      return 3;

    case 4:
      return 4;

    case 5:
      return 5;

    default:
      return 0;
  }
};

var emptyState = function emptyState() {
  return {
    milestoneByTrack: {
      'KEEP_PROMISES': 0,
      'MEET_DEADLINES': 0,
      'ON_TIME': 0,
      'DEPENDABLE': 0,
      'CONTENT_EXPERTISE': 0,
      'PASSION': 0,
      'CHALLENGE_CUSTOMERS': 0,
      'HUMILITY': 0,
      'ACCEPTANCE': 0,
      'OPENNESS': 0,
      'EMOTIONAL_HONESTY': 0,
      'AUTHENTICITY': 0,
      'FOCUSSING_ON_OTHERS': 0,
      'LISTENING': 0,
      'COMPASSION': 0,
      'COLLABORATION': 0
    },
    focusedTrackId: 'KEEP_PROMISES'
  };
};

var defaultState = function defaultState() {
  return {
    milestoneByTrack: {
      'KEEP_PROMISES': 2,
      'MEET_DEADLINES': 3,
      'ON_TIME': 3,
      'DEPENDABLE': 3,
      'CONTENT_EXPERTISE': 4,
      'PASSION': 4,
      'CHALLENGE_CUSTOMERS': 3,
      'HUMILITY': 2,
      'ACCEPTANCE': 1,
      'OPENNESS': 4,
      'EMOTIONAL_HONESTY': 2,
      'AUTHENTICITY': 4,
      'FOCUSSING_ON_OTHERS': 2,
      'LISTENING': 2,
      'COMPASSION': 3,
      'COLLABORATION': 3
    },
    focusedTrackId: 'KEEP_PROMISES'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].map(function (trackId) {
    return state.milestoneByTrack[trackId];
  });
  return values.join(',');
};

var SnowflakeApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SnowflakeApp, _React$Component);

  function SnowflakeApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SnowflakeApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SnowflakeApp).call(this, props));
    _this.state = emptyState();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SnowflakeApp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var hash = stateToHash(this.state);
      if (hash) window.location.replace("#".concat(hash));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = hashToState(window.location.hash);

      if (state) {
        this.setState(state);
      } else {
        this.setState(defaultState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("main", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZIMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBtaWxlc3RvbmVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFBvaW50U3VtbWFyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgY29lcmNlTWlsZXN0b25lID0gKHZhbHVlOiBudW1iZXIpOiBNaWxlc3RvbmUgPT4ge1xuICAvLyBIQUNLIEkga25vdyB0aGlzIGlzIGdvb2Z5IGJ1dCBpJ20gZGVhbGluZyB3aXRoIGZsb3cgdHlwaW5nXG4gIHN3aXRjaCh2YWx1ZSkge1xuICAgIGNhc2UgMDogcmV0dXJuIDBcbiAgICBjYXNlIDE6IHJldHVybiAxXG4gICAgY2FzZSAyOiByZXR1cm4gMlxuICAgIGNhc2UgMzogcmV0dXJuIDNcbiAgICBjYXNlIDQ6IHJldHVybiA0XG4gICAgY2FzZSA1OiByZXR1cm4gNVxuICAgIGRlZmF1bHQ6IHJldHVybiAwXG4gIH1cbn1cblxuY29uc3QgZW1wdHlTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ0tFRVBfUFJPTUlTRVMnOiAwLFxuICAgICAgJ01FRVRfREVBRExJTkVTJzogMCxcbiAgICAgICdPTl9USU1FJzogMCxcbiAgICAgICdERVBFTkRBQkxFJzogMCxcbiAgICAgICdDT05URU5UX0VYUEVSVElTRSc6IDAsXG4gICAgICAnUEFTU0lPTic6IDAsXG4gICAgICAnQ0hBTExFTkdFX0NVU1RPTUVSUyc6IDAsXG4gICAgICAnSFVNSUxJVFknOiAwLFxuICAgICAgJ0FDQ0VQVEFOQ0UnOiAwLFxuICAgICAgJ09QRU5ORVNTJzogMCxcbiAgICAgICdFTU9USU9OQUxfSE9ORVNUWSc6IDAsXG4gICAgICAnQVVUSEVOVElDSVRZJzogMCxcbiAgICAgICdGT0NVU1NJTkdfT05fT1RIRVJTJzogMCxcbiAgICAgICdMSVNURU5JTkcnOiAwLFxuICAgICAgJ0NPTVBBU1NJT04nOiAwLFxuICAgICAgJ0NPTExBQk9SQVRJT04nOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ0tFRVBfUFJPTUlTRVMnXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG4gICAgICAnS0VFUF9QUk9NSVNFUyc6IDIsXG4gICAgICAnTUVFVF9ERUFETElORVMnOiAzLFxuICAgICAgJ09OX1RJTUUnOiAzLFxuICAgICAgJ0RFUEVOREFCTEUnOiAzLFxuICAgICAgJ0NPTlRFTlRfRVhQRVJUSVNFJzogNCxcbiAgICAgICdQQVNTSU9OJzogNCxcbiAgICAgICdDSEFMTEVOR0VfQ1VTVE9NRVJTJzogMyxcbiAgICAgICdIVU1JTElUWSc6IDIsXG4gICAgICAnQUNDRVBUQU5DRSc6IDEsXG4gICAgICAnT1BFTk5FU1MnOiA0LFxuICAgICAgJ0VNT1RJT05BTF9IT05FU1RZJzogMixcbiAgICAgICdBVVRIRU5USUNJVFknOiA0LFxuICAgICAgJ0ZPQ1VTU0lOR19PTl9PVEhFUlMnOiAyLFxuICAgICAgJ0xJU1RFTklORyc6IDIsXG4gICAgICAnQ09NUEFTU0lPTic6IDMsXG4gICAgICAnQ09MTEFCT1JBVElPTic6IDNcbiAgICB9LFxuICAgIGZvY3VzZWRUcmFja0lkOiAnS0VFUF9QUk9NSVNFUydcbiAgfVxufVxuXG5jb25zdCBzdGF0ZVRvSGFzaCA9IChzdGF0ZTogU25vd2ZsYWtlQXBwU3RhdGUpID0+IHtcbiAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUubWlsZXN0b25lQnlUcmFjaykgcmV0dXJuIG51bGxcbiAgY29uc3QgdmFsdWVzID0gdHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gc3RhdGUubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSlcbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcsJylcbn1cblxudHlwZSBQcm9wcyA9IHt9XG5cbmNsYXNzIFNub3dmbGFrZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU25vd2ZsYWtlQXBwU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IGVtcHR5U3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IGhhc2ggPSBzdGF0ZVRvSGFzaCh0aGlzLnN0YXRlKVxuICAgIGlmIChoYXNoKSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgIyR7aGFzaH1gKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBoYXNoVG9TdGF0ZSh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZGVmYXVsdFN0YXRlKCkpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQ6aG92ZXIsIC5uYW1lLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzE5cHggYXV0byAwJywgd2lkdGg6IDE0Mn19PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zaG9waWZ5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPFdvcmRtYXJrIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAxfX0+XG4gICAgICAgICAgICA8UG9pbnRTdW1tYXJpZXMgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgICAgPExldmVsVGhlcm1vbWV0ZXIgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwfX0+XG4gICAgICAgICAgICA8TmlnaHRpbmdhbGVDaGFydFxuICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFja1NlbGVjdG9yXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIHNldEZvY3VzZWRUcmFja0lkRm49e3RoaXMuc2V0Rm9jdXNlZFRyYWNrSWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPEtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICAgIHNlbGVjdE5leHRUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBzZWxlY3RQcmV2VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIC0xKX1cbiAgICAgICAgICAgIGluY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgZGVjcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgLTEpfSAvPlxuICAgICAgICA8VHJhY2tcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIHRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrSWQ6IFRyYWNrSWQsIG1pbGVzdG9uZTogTWlsZXN0b25lKSB7XG4gICAgY29uc3QgbWlsZXN0b25lQnlUcmFjayA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1xuICAgIG1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBtaWxlc3RvbmVcbiAgICB0aGlzLnNldFN0YXRlKHsgbWlsZXN0b25lQnlUcmFjaywgZm9jdXNlZFRyYWNrSWQ6IHRyYWNrSWQgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQpXG4gICAgaW5kZXggPSAoaW5kZXggKyBkZWx0YSArIHRyYWNrSWRzLmxlbmd0aCkgJSB0cmFja0lkcy5sZW5ndGhcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2V0Rm9jdXNlZFRyYWNrSWQodHJhY2tJZDogVHJhY2tJZCkge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodHJhY2tJZClcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgcHJldk1pbGVzdG9uZSA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1t0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkXVxuICAgIGxldCBtaWxlc3RvbmUgPSBwcmV2TWlsZXN0b25lICsgZGVsdGFcbiAgICBpZiAobWlsZXN0b25lIDwgMCkgbWlsZXN0b25lID0gMFxuICAgIGlmIChtaWxlc3RvbmUgPiA0KSBtaWxlc3RvbmUgPSA0XG4gICAgdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkLCAoKG1pbGVzdG9uZTogYW55KTogTWlsZXN0b25lKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(_components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), __jsx(_components_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        trackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      this.setState({
        milestoneByTrack: milestoneByTrack,
        focusedTrackId: trackId
      });
    }
  }, {
    key: "shiftFocusedTrack",
    value: function shiftFocusedTrack(delta) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length) % _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length;
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "shiftFocusedTrackMilestoneByDelta",
    value: function shiftFocusedTrackMilestoneByDelta(delta) {
      var prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
      var milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 4) milestone = 4;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ })

})
//# sourceMappingURL=index.js.7c03a501ba62ef70f928.hot-update.js.map