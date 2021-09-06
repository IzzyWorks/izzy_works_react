"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateizzy_shams_proj"]("main",{

/***/ "./src/components/lottie/LottieWrapper.js":
/*!************************************************!*\
  !*** ./src/components/lottie/LottieWrapper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_lottie_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lottie-player */ \"./node_modules/react-lottie-player/dist/LottiePlayer.modern.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar LottieWrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function (props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      log = _useState2[0],\n      setLog = _useState2[1];\n\n  var addLog = function addLog(v) {\n    return setLog(function (l) {\n      return [v].concat(_toConsumableArray(l));\n    });\n  };\n\n  function handleLoopTimesChange(e) {\n    var value = e.target.value;\n    setLoopTimes(value);\n    var n = parseInt(value, 10);\n    if (!Number.isInteger(n)) return;\n    setLoop(n);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {});\n\n  function getLoopVal() {\n    if (loop === true) return '';\n    if (loop === false) return 0;\n    return loopTimes;\n  }\n\n  console.log('In Lottie ===>', props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_lottie_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    loop: props.animationData.loop,\n    speed: props.animationData.speed,\n    play: props.animationData.play,\n    animationData: props.animation,\n    direction: props.animationData.direction,\n    segments: props.animationData.segments,\n    onComplete: function onComplete() {\n      return addLog('complete');\n    },\n    onLoopComplete: function onLoopComplete() {\n      return addLog('loopComplete');\n    },\n    onEnterFrame: function onEnterFrame() {\n      /* addLog('enterFrame') */\n    },\n    style: props.animationData.style,\n    onSegmentStart: function onSegmentStart() {\n      return addLog('segmentStart');\n    },\n    onLoad: function onLoad() {\n      return addLog('load');\n    }\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottieWrapper);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/lottie/LottieWrapper.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39665307a7b6e22807c1")
/******/ })();
/******/ 
/******/ }
);