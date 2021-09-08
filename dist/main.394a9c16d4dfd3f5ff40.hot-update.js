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

/***/ "./src/components/global/Title.js":
/*!****************************************!*\
  !*** ./src/components/global/Title.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction Title(props) {\n  var classes = props.classes;\n  /* This CSS style is applied when the drawer is opened */\n\n  var openedStyle = {\n    left: '1200px'\n    /* max-with is 100% when the drawer is opened */\n    ,\n\n    /* Upon transitioning to Open,\n       animate `max-width' for 0.5s*/\n    transition: 'max-width 0.5s'\n  };\n  /* This CSS style is applied when the drawer is closed */\n\n  var closedStyle = {\n    left: '0px'\n    /* max-width is 0 in the closed drawer */\n    ,\n\n    /* Upon transitioning to Closed,\n       animate `max-width' for 0.5s */\n    transition: 'left 0.5s ease-in'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, console.log(\"Re-rendering.....\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    className: \"baseAnimation\",\n    style: closedStyle\n  }, props.articleTitle));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/global/Title.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6591af3b2d213f2d73fe")
/******/ })();
/******/ 
/******/ }
);