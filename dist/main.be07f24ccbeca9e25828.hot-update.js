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

/***/ "./src/components/home/LandingHeroComp.js":
/*!************************************************!*\
  !*** ./src/components/home/LandingHeroComp.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Circles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circles */ \"./src/components/home/Circles.js\");\n/* harmony import */ var _data_LandingAnimationData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/LandingAnimationData */ \"./src/components/data/LandingAnimationData.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // components\n\n //data\n// import circleObicAnim from '../data/obic-home-transition.json';\n\n\n\nfunction LandingHero(props) {\n  // const lottiedataObic = {\n  //   animation: props.lottieAnimation,\n  //   obicAnim: props.obicHomeAnimation,\n  //   controlles: {\n  //     //dynamic data\n  //     segments: [frames[0], frames[1]],\n  //     direction: 1,\n  //     speed: 1,\n  //     play: true,\n  //     loop: true,\n  //   },\n  // };\n  // const lottiedataTldnr = {\n  //   animation: props.lottieAnimation,\n  //   obicAnim: props.obicHomeAnimation,\n  //   controlles: {\n  //     //dynamic data\n  //     segments: [frames[0], frames[1]],\n  //     direction: 1,\n  //     speed: 0.5,\n  //     play: false,\n  //     loop: true,\n  //   },\n  // };\n  // const lottiedataHapMap = {\n  //   animation: props.lottieAnimation,\n  //   obicAnim: props.obicHomeAnimation,\n  //   controlles: {\n  //     //dynamic data\n  //     segments: [frames[0], frames[1]],\n  //     direction: 1,\n  //     speed: 0.5,\n  //     play: false,\n  //     loop: true,\n  //   },\n  // };\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{\n    key: '0landingAnim',\n    loop: true,\n    speed: 0.25,\n    play: true,\n    direction: 1,\n    segments: [1, 35],\n    width: '100%',\n    height: '100vh'\n  }]),\n      _useState2 = _slicedToArray(_useState, 2),\n      animationDataDynamic = _useState2[0],\n      setAnimationDataDynamic = _useState2[1];\n\n  var handleClick = function handleClick(e) {\n    console.log(\"the element clicked!\", e.target);\n  };\n\n  var mouEnterHandler = function mouEnterHandler(e) {\n    console.log(\"hello form mouse enter!\", e.target);\n  };\n\n  console.log('props inside landging page', props);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingHero); // const [frames, setFrames] = useState([0, 1]);\n// const [speed, setSpeed] = useState([0]);\n// const [onHover, setOnHover] = useState([0, 1]);\n// const [onClick, setOnClick] = useState([0, 1]);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/LandingHeroComp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2ba8b3964c77db3768bb")
/******/ })();
/******/ 
/******/ }
);