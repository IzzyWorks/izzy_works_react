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

/***/ "./src/components/home/Sections.js":
/*!*****************************************!*\
  !*** ./src/components/home/Sections.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lottie/LottieWrapper */ \"./src/components/lottie/LottieWrapper.js\");\n/* harmony import */ var _WhitePaper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WhitePaper */ \"./src/components/WhitePaper.js\");\n\n\n //components\n\n\n\nfunction Section(props) {\n  // console.log('inside section ====>', props);\n  var lottiedata = {\n    animation: props.lottieAnimation,\n    obicAnim: props.obicAnimation,\n    controlles: {\n      //dynamic data\n      segments: [frames[0], frames[1]],\n      direction: -1,\n      speed: 0.5,\n      play: true,\n      loop: true\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    id: props.section.id,\n    className: \"section__wrapper \".concat(props.section.style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lottie_LottieWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    animation: lottiedata.obicAnim,\n    animationData: lottiedata.controlles\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WhitePaper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    whitePaper: props.section\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/home/Sections.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("302f5b4738a0c6a08423")
/******/ })();
/******/ 
/******/ }
);