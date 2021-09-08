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

/***/ "./src/components/WhitePaper.js":
/*!**************************************!*\
  !*** ./src/components/WhitePaper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-uuid */ \"./node_modules/react-uuid/uuid.js\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/Title */ \"./src/components/global/Title.js\");\n/* harmony import */ var _global_Synopsis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/Synopsis */ \"./src/components/global/Synopsis.js\");\n/* harmony import */ var _global_DetailsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/DetailsCard */ \"./src/components/global/DetailsCard.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n //components\n\n\n\n\n\nfunction WhitePaper(props) {\n  console.log('whitepaper ===>', props);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      animateClass = _useState2[0],\n      setAnimateClass = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      setAnimateClass('targetAnimation');\n    }, 3000);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", {\n    key: react_uuid__WEBPACK_IMPORTED_MODULE_1___default()(),\n    className: \"article__wrapper \".concat(props.whitePaper.style)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_Title__WEBPACK_IMPORTED_MODULE_2__.default, {\n    classes: {\n      baseClass: 'baseAnimation'\n    },\n    articleTitle: props.whitePaper.id\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_Synopsis__WEBPACK_IMPORTED_MODULE_3__.default, {\n    articleSynopsis: props.whitePaper.synopsis\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_DetailsCard__WEBPACK_IMPORTED_MODULE_4__.default, {\n    articleDetails: props.whitePaper.details\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhitePaper);\n\n//# sourceURL=webpack://izzy-shams-proj/./src/components/WhitePaper.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0864feac75d9ef6badfa")
/******/ })();
/******/ 
/******/ }
);